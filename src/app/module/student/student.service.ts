import mongoose from "mongoose";
import httpStatus from "http-status";
import { Student } from "./student.model";
import AppError from "../../Errors/AppError";
import { User } from "../user/user.model";
import { TStudent } from "./student.interface";

/* export const createStudentToDb = async (studentData: Student) => {
  // const result = await StudentModel.create(studentData); // built in static method

  const student = new StudentModel(studentData);
  const existingUser = await StudentModel.isUserExists(studentData.id);
  if (existingUser) {
    throw new Error("User already exists!!!!! dsto");
  }
  // for creating custom instance method
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error("User already exists!!!");
  // }
  const result = await student.save(); /* built in instance method */
// return result;
// }; */

const getAllStudentsFromDb = async () => {
  const result = await Student.find()
    .populate("admissionSemester")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty",
      },
    });

  return result;
};

const getStudentByIdFromDb = async (id: string) => {
  const result = await Student.findOne({
    id: id,
  });
  const result2 = await Student.aggregate([
    {
      $match: {
        id: id,
      },
    },
  ]);
  return result2;
};

const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete student");
    }

    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete user");
    }

    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error("Failed to delete student");
  }
};

const updateStudentIntoDB = async (id: string, payload: Partial<TStudent>) => {
  const { name, guardian, localGuardian, ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  /*
    guardain: {
      fatherOccupation:"Teacher"
    }

    guardian.fatherOccupation = Teacher

    name.firstName = 'Mezba'
    name.lastName = 'Abedin'
  */

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }

  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }

  console.log(modifiedUpdatedData);

  const result = await Student.findOneAndUpdate({ id }, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const StudentService = {
  getStudentByIdFromDb,
  getAllStudentsFromDb,
  deleteStudentFromDB,
  updateStudentIntoDB,
};
