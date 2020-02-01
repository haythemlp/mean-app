const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select:false
    }
});

UserSchema.pre('save', async function (next) {
    const user = this;
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

UserSchema.methods.isValidPassword = async function (password) {
    const user = this;
    return await bcrypt.compare(password, user.password).then((c) => c)
}
UserSchema.methods.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
    return jwt.sign({id:this._id}, 'secret');
}
UserSchema.methods.toAuthJSON = function () {

    delete this._doc.password;
    return {
        user: {...this._doc},
        token: this.generateJWT(),
    };
};
module.exports = User = mongoose.model('User', UserSchema);
