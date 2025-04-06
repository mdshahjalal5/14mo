import { model, Schema } from "mongoose";
import {
  TCourse,
  TCoursefaculty,
  TPreRequisiteCourses,
} from "./course.interface";

const preRequisiteCourseSchema = new Schema<TPreRequisiteCourses>(
  {
    course: {
      type: Schema.ObjectId,
      ref: "Course",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    _id: false,
  },
);

const courseSChema = new Schema<TCourse>(
  {
    title: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    prefix: {
      type: String,
      trim: true,
      required: true,
    },
    code: {
      type: Number,
      trim: true,
      required: true,
    },
    credits: {
      type: Number,
      trim: true,
    },
    preRequisiteCourses: [preRequisiteCourseSchema],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Course = model<TCourse>("Course", courseSChema);

const courseFacultySchema = new Schema<TCoursefaculty>({
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    unique: true,
  },
  faculties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Faculty",
    },
  ],
});

export const CourseFaculty = model<TCoursefaculty>(
  "CourseFaculty",
  courseFacultySchema,
);
