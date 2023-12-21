import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { academicSemisterServices } from './academicSemister.service';

// create academy into db
const createAcademicSemister = catchAsync(async (req, res) => {
  const result = await academicSemisterServices.createAcademicSemisterIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semister is created successfully',
    data: result,
  });
});

export const AcademicSemisterControllers = {
  createAcademicSemister,
};
