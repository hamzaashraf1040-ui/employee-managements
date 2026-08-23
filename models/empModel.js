const mongoose = require('mongoose');

const empSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true,],
      trim: true,
    },
    email: {
      type: String,
      required: [true],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true,"password is required "],
      minlength: 6,
      select: false,
    },
    department: {
      type: String,
      trim: true,
      default: 'general',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model("employee",empSchema)
module.exports=Employee
