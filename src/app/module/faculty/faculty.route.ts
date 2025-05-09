import { Router } from "express";
import { FacultyControllers } from "./faculty.controller";
import validateRequest from "../../middlewares/validateRequest";
import { FacultyValidations } from "./faculty.validation";

const router = Router();

router.get("/:id", FacultyControllers.getSingleFaculty);
router.patch(
  "/:id",
  validateRequest(FacultyValidations.updateFacultyValidationSchema),
  FacultyControllers.updateFaculty,
);

router.delete("/:id", FacultyControllers.deleteFaculty);
router.get("/", FacultyControllers.getAllFaculties);
export const FacultyRoutes = router;
