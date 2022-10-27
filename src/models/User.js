const { Schema, model} = require ('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema ({

    name: { type: String, requred: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true}
}, {
    timestamps: true
});
// encryt info from user 
UserSchema.methods.encrypPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);

};
//method to compare password to valid user like a bool tru-false
UserSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare (password, this.password)
};


module.exports = model('User', UserSchema);