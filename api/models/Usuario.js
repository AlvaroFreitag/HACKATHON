const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const usuarioSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
      
    },
    favoritos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto',
      }]
  },
  { timestamps: true }
);

//validate password match or not
usuarioSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

//register passwrod hash and store
usuarioSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("Usuario", usuarioSchema);
