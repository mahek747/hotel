const { roomService } = require("../service");

const createRoom = async (req, res) => {
    try {
        const roomData = req.body;

        const room = await roomService.createRoom(roomData);
        if (!room) {
            throw new Error("Failed to create room");
        }

        res.status(200).json({
            success: true,
            message: "Room created successfully"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const getAllRooms = async (req, res) => {
    try {
        const rooms = await roomService.getAllRooms();
        res.status(200).json({
            success: true,
            message: "Rooms retrieved successfully",
            data: { rooms }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const getRoomById = async (req, res) => {
    try {
        const { roomId } = req.params;
        const room = await roomService.getRoomById(roomId);
        if (!room) {
            throw new Error("Room not found");
        }

        res.status(200).json({
            success: true,
            message: "Room retrieved successfully",
            data: { room }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const updateRoom = async (req, res) => {
    try {
        const { roomId } = req.params;
        const roomData = req.body;

        const updated = await roomService.updateRoom(roomId, roomData);
        if (!updated) {
            throw new Error("Failed to update room");
        }

        res.status(200).json({
            success: true,
            message: "Room updated successfully"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const deleteRoom = async (req, res) => {
    try {
        const { roomId } = req.params;

        const deleted = await roomService.deleteRoom(roomId);
        if (!deleted) {
            throw new Error("Failed to delete room");
        }

        res.status(200).json({
            success: true,
            message: "Room deleted successfully"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    createRoom,
    getAllRooms,
    getRoomById,
    updateRoom,
    deleteRoom
}
