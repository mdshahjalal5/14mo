import { StudentService } from "./student.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const getAllStudents = catchAsync(async (req, res) => {
  const allStudents = await StudentService.getAllStudentsFromDb();
  res.status(200).json({
    success: true,
    message: "Retrieved All Students",
    data: allStudents,
  });
});

const getStudentById = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  console.log(studentId, "student.controller.ts", 38);
  const result = await StudentService.getStudentByIdFromDb(studentId);
  res.status(200).json({
    success: true,
    message: "got single student",
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const result = await StudentService.deleteStudentFromDB(req.params.studentId);
  res.status(200).json({
    success: true,
    message: "user successfully deleted.",
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const { student } = req.body;
  const result = await StudentService.updateStudentIntoDB(studentId, student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is updated succesfully",
    data: result,
  });
});

export const StudentController = {
  getStudentById,
  deleteStudent,
  getAllStudents,
  updateStudent,
};
