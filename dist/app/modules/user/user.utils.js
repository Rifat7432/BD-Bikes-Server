"use strict";
// /* eslint-disable no-undefined */
// import { Types } from 'mongoose';
// import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
// // import { userModel } from './user.modle';
// import { studentModel } from '../student/student.modle';
// import { userModel } from './user.modle';
// const lastStudentId = async (id: Types.ObjectId) => {
//   const lastStudent = await studentModel
//     .findOne({ admissionSemester: id }, { id: 1, _id: 0 })
//     .sort({ createdAt: -1 })
//     .lean();
//   // return lastStudent?.id ? lastStudent?.id : undefined;
//   return lastStudent?.id ? lastStudent?.id.substring(6) : (0).toString();
// };
// export const generateStudentId = async (
//   id: Types.ObjectId,
//   payLoad: TAcademicSemester | null,
// ) => {
//   if (payLoad) {
//     const currentId = await lastStudentId(id);
//     // const currentSemesterCode = payLoad.code;
//     // const currentSemesterYear = payLoad.year;
//     // const lastStudentIdCode = await lastStudentId();
//     // const lastStudentSemesterCode = lastStudentIdCode?.substring(4, 6);
//     // const lastStudentSemesterYear = lastStudentIdCode?.substring(0, 4);
//     // if (
//     //   lastStudentIdCode &&
//     //   currentSemesterCode === lastStudentSemesterCode &&
//     //   currentSemesterYear === lastStudentSemesterYear
//     // ) {
//     //   currentId = lastStudentIdCode.substring(6);
//     // }
//     let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
//     incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;
//     return incrementId;
//   }
// };
// export const findLastFacultyId = async () => {
//   const lastFaculty = await userModel.findOne(
//     {
//       role: 'faculty',
//     },
//     {
//       id: 1,
//       _id: 0,
//     },
//   )
//     .sort({
//       createdAt: -1,
//     })
//     .lean();
//   return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
// };
// export const generateFacultyId = async () => {
//   let currentId = (0).toString();
//   const lastFacultyId = await findLastFacultyId();
//   if (lastFacultyId) {
//     currentId = lastFacultyId.substring(2);
//   }
//   let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
//   incrementId = `F-${incrementId}`;
//   return incrementId;
// };
// // Admin ID
// export const findLastAdminId = async () => {
//   const lastAdmin = await userModel.findOne(
//     {
//       role: 'admin',
//     },
//     {
//       id: 1,
//       _id: 0,
//     },
//   )
//     .sort({
//       createdAt: -1,
//     })
//     .lean();
//   return lastAdmin?.id ? lastAdmin.id.substring(2) : undefined;
// };
// export const generateAdminId = async () => {
//   let currentId = (0).toString();
//   const lastAdminId = await findLastAdminId();
//   if (lastAdminId) {
//     currentId = lastAdminId.substring(2);
//   }
//   let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
//   incrementId = `A-${incrementId}`;
//   return incrementId;
// };
