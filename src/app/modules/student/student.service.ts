import { Student } from './student.interface';
import { StudentModel } from './student.model';

// Create student into DB
const createStudentIntoDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

// Get all students from DB
const getAllStudentsFromDB = async () => {
  const result = StudentModel.find({});
  return result;
};

// Get all students from DB
const getSingleStudentFromDB = async (id: string) => {
  const result = StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDb,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
