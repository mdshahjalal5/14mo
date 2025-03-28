import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicFacultyValidation } from "./academicFaculty.validation";
import { AcademicFacultyControllers } from "./academicFaculty.controller";

const router = Router();

router.post(
  "/create-academic-faculty",
  validateRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
);

router.get("/:facultyId", AcademicFacultyControllers.getSingleAcademicFaculty);
router.patch("/:facultyId", AcademicFacultyControllers.updateAcademicFaculty);
router.delete("/:facultyId", AcademicFacultyControllers.deleteAcademicFaculty);
router.get("/", AcademicFacultyControllers.getAllAcademicSemesters);

export const AcademicFacultyRoutes = router;
