import AppError from "../../Errors/AppError";
import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";

const createAcademicDepartmentIntoDB = async (paylaod: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(paylaod);
  return result;
};

const getAllAcademicDepartmentFromDB = async () => {
  const result = await AcademicDepartment.find();
  return result;
};

const getSingleAcademicDepartmentFromDB = async (id: string) => {
  const result = await AcademicDepartment.findById(id);
  return result;
};

const updateAcademicDepartmentIntoDB = async (
  id: string,
  paylaod: Partial<TAcademicDepartment>,
) => {
  const isExist = await AcademicDepartment.findById(id);
  if (!isExist) {
    throw new AppError(404, "Academic department is not exist !!");
  }
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    paylaod,
    {
      new: true,
    },
  );
  return result;
};

const deleteAcademicDepartmentFromDB = async (id: string) => {
  const isExist = await AcademicDepartment.findById(id);
  if (!isExist) {
    throw new Error("Academic department is not exist !!");
  }
  const result = await AcademicDepartment.findOneAndDelete({
    _id: id,
  });
  return result;
};
export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentIntoDB,
  deleteAcademicDepartmentFromDB,
};
