import { StudentModel } from './student.model';

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
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
