import catchAsync from '../../utils/catchAsync';
import { StudentServices } from './student.service';

// Get all students
const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB();

  res.status(200).json({
    success: true,
    message: 'Students are retrived successfully!',
    data: result,
  });
});

// Get single student
const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;

  const result = await StudentServices.getSingleStudentFromDB(studentId);

  res.status(200).json({
    success: true,
    message: 'Student are retrived successfully!',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
};
