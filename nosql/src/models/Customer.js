import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
    validate: {
      validator: function (value) {
        return /^[A-Za-z]+$/.test(value);
      },
      message: "First name should contain only letters.",
    },
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
    validate: {
      validator: function (value) {
        return /^[A-Za-z]+$/.test(value);
      },
      message: "Last name should contain only letters.",
    },
  },
  customerEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (value) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
      },
      message: "Please enter a valid email address.",
    },
  },
});

const Customer = mongoose.model("Customer", customerSchema);

export { Customer };
