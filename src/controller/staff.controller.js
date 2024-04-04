const { staffService } = require("../service");

const createStaff = async (req, res) => {
    try {
        const reqBody = req.body;

        const staff = await staffService.createStaff(reqBody);
        if (!staff) {
            throw new Error("Something went wrong, please try again later!");
        }

        res.status(200).json({
            success: true,
            message: "Staff record created successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const getStaffList = async (req, res) => {
    try {
        const staffList = await staffService.getStaffList();

        res.status(200).json({
            success: true,
            message: "Staff list retrieved successfully!",
            data: { staffList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const getStaffDetails = async (req, res) => {
    try {
        const { staffId } = req.params;
        const staffDetails = await staffService.getStaffById(staffId);
        if (!staffDetails) {
            throw new Error("Staff not found!");
        }

        res.status(200).json({
            success: true,
            message: "Staff details retrieved successfully!",
            data: { staffDetails }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const updateStaff = async (req, res) => {
    try {
        const { staffId } = req.params;

        const staffExists = await staffService.getStaffById(staffId);
        if (!staffExists) {
            throw new Error("Staff not found!");
        }

        await staffService.updateStaff(staffId, req.body);

        res.status(200).json({
            success: true,
            message: "Staff record updated successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const deleteStaff = async (req, res) => {
    try {
        const { staffId } = req.params;

        const staffExists = await staffService.getStaffById(staffId);
        if (!staffExists) {
            throw new Error("Staff not found!");
        }

        await staffService.deleteStaff(staffId);

        res.status(200).json({
            success: true,
            message: "Staff record deleted successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    createStaff,
    getStaffList,
    getStaffDetails,
    updateStaff,
    deleteStaff
}
