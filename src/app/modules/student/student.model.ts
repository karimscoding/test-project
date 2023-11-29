import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, 'Father name is required'],
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father occupation name is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father contact number is required'],
  },
  motherName: {
    type: String,
    required: [true, 'Mother name is required'],
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation name is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother contact number is required'],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, 'Local guardian name is required'],
  },
  occupation: {
    type: String,
    required: [true, 'Local guardian occupation is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Local guardian contact number is required'],
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required'],
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: [true, 'User name field is required'],
  },
  gender: {
    type: String,
    required: true,
    enum: {
      values: ['male', 'female', 'others'],
      message: '{VALUE} is not valid',
    },
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: [true, 'Student email is required'],
    unique: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Student contact number is required'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Student emergency contact number is required'],
  },

  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Student present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Student permanent address is required'],
  },

  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian field is required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian field is required'],
  },
  profileImg: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ['active', 'block'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
