import { TAcademicSemister } from './academicSemister.interface';
import { AcademicSemister } from './academySemister.model';

const createAcademicSemisterIntoDB = async (payload: TAcademicSemister) => {
  const result = await AcademicSemister.create(payload);

  return result;
};

export const academicSemisterServices = {
  createAcademicSemisterIntoDB,
};
