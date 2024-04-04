const { Room } = require("../models");

const createRoom = async (roomData) => {
  return Room.create(roomData);
}

const getAllRooms = async () => {
  return Room.find();
}

const deleteRoom = async (roomId) => {
  return Room.findByIdAndDelete(roomId);
}

const getRoomById = async (roomId) => {
  return Room.findById(roomId);
}

const updateRoom = async (roomId, updateData) => {
  return Room.findByIdAndUpdate(roomId, { $set: updateData });
}

module.exports = {
  createRoom,
  getAllRooms,
  deleteRoom,
  getRoomById,
  updateRoom
}
