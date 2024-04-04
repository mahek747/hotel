const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        // order: {
        //     type: mongoose.Types.ObjectId,
        //     ref: 'order'
        // },
        userName: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
            trim: true,
        },
        firstName: {
            type: String,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const User = mongoose.model("users", userSchema);
module.exports = User;