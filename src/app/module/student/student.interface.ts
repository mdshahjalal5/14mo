import { Model, Types } from "mongoose";

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  name: TUserName;
  gender: "male" | "female";
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  admissionSemester: Types.ObjectId;
  profileImage?: string;
  academicDepartment: Types.ObjectId;

  isDeleted: boolean;
};

// for creating custom instance method
// export type TUserMethod = {
//   isUserExists(id: string): Promise<Student | null>;
// };
//
// export type TStudentModel = Model<Student, {}, TUserMethod>;

//t: creating custom statics method

export interface IStudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}
