import { Schema, model } from 'mongoose';
import {
  AcademicSemisterCode,
  AcademicSemisterName,
  Months,
} from './academicSemister.constant';
import { TAcademicSemister } from './academicSemister.interface';

const academicSemisterSchema = new Schema<TAcademicSemister>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemisterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemisterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicSemister = model<TAcademicSemister>(
  'AcademicSemister',
  academicSemisterSchema,
);
