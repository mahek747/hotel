const { Staff } = require("../models");

const createStaff = async (staffData) => {
  return Staff.create(staffData);
}

const getStaffList = async () => {
  return Staff.find({ $or: [{ is_active: true }] });
}

const deleteStaff = async (staffId) => {
  return Staff.findByIdAndDelete(staffId);
}

const getStaffById = async (staffId) => {
  return Staff.findById(staffId);
}

const updateStaff = async (staffId, updateData) => {
  return Staff.findByIdAndUpdate(staffId, { $set: updateData });
}

module.exports = {
  createStaff,
  getStaffList,
  deleteStaff,
  getStaffById,
  updateStaff
}
