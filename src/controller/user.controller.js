const { userService } = require("../service");

const createUser = async (req, res) => {
    try {
        const reqBody = req.body;

        const user = await userService.createUser(reqBody);
        if (!user) {
            throw new Error("Something wents wrong , please try again or later !!");
        }

        res.status(200).json({
            success: true,
            message: "Your data create successfully !!"
        });
    } catch (error) {
        res.status(400).json({ success: fasle, message: error.message });
    }
}

/** get list */
const getUserList = async (req, res) => {
    try {
        const getList = await userService.getUserList(req, res);

        res.status(200).json({
            success: true,
            message: "Your user list create successfullYyy !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
}

/**get user by id */
const getUserDetails = async (req, res) => {
    try {
        const getDetails = await userService.userById(req.params.userId);
        if (!getDetails) {
            throw new Error("User not Found !");
        }

        res.status(200).json({
            success: true,
            message: "Your record is successfully get by id !",
            data: { getDetails }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**Update user */
const updateUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEx = await userService.userById(userId);
        if (!userEx) {
            throw new Error("User not found !");
        }

        await userService.updateUser(userId, req.body);

        res.status(200).json({
            success: true,
            message: "Your user record is update successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userExist = await userService.getUserList(userId);
        if (!userExist) {
            throw new Error("User not found");
        }

        await userService.deleteRecord(userId);

        res.status(200).json({
            success: true,
            message: "Your record delete successfully !!"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    createUser,
    getUserList,
    getUserDetails,
    updateUser,
    deleteRecord
}