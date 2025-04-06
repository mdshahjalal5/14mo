import { Router } from "express";
import { UserRoute as UserRoutes } from "../module/user/user.route";
import { StudentRoutes } from "../module/student/student.route";
import { AcademicSemesterRoutes } from "../module/academicSemester/academicsSemester.route";
import { AcademicFacultyRoutes } from "../module/academicFaculty/academicFaculty.route";
import { AcademicDepartmentRoutes } from "../module/academicDepartment/academicDepartment.route";
import { FacultyRoutes } from "../module/faculty/faculty.route";
import { CourseRoutes } from "../module/Course/course.route";

const router = Router();
const modueRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/students",
    route: StudentRoutes,
  },
  {
    path: "/academic-semesters",
    route: AcademicSemesterRoutes,
  },
  {
    path: "/academic-faculties",
    route: AcademicFacultyRoutes,
  },
  {
    path: "/academic-department",
    route: AcademicDepartmentRoutes,
  },
  {
    path: "/faculty",
    route: FacultyRoutes,
  },
  {
    path: "/course",
    route: CourseRoutes,
  },
];

modueRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
