import {Schema, model, models} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },
});


const Users = models.user || model('user', userSchema);

export default Users;