const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const authMiddleware = require("../Middlewares/authMiddleware");
const router = express.Router();
const userModel = require("../Models/userModel");
router.get("/getUserData", authMiddleware, async (req, res) => {
  try {
    const userData = await userModel.findById(req.user.id);
    if (!userData) {
      return res.status(404).json({ message: "Userdata not found" });
    }
    res.status(200).json({ userData });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong while fetching user data" });
  }
});

router.post("/signUp", async (req, res) => {
  const { name, email, mobile, password, confirm_password } = req.body;
  try {
    const isUserExist = await userModel.findOne({ email });
    if (!isUserExist) {
      const genSalt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, genSalt);

      if (password !== confirm_password) {
        return res.status(401).json({ message: "Password do not match" });
      }
      const user = await userModel.create({
        name,
        email,
        mobile,
        password: hashPassword,
      });
      return res
        .status(200)
        .json({ message: "User registered Successfully", data: user });
    }

    res.status(401).json({ message: "User already exist" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const currentDate = new Date();
    user.last_logged_in = currentDate;

    const formatDateTime = (date) => {
      return new Date(date).toLocaleString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
    };

    user.last_logged_in_formatted = formatDateTime(currentDate);
    await user.save();

    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
    res.status(200).json({ message: "Login successfully", token, user,loggedInDate:user.last_logged_in_formatted });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
});

router.patch("/updateUser", authMiddleware, async (req, res) => {
  const { name, email, mobile } = req.body;
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      req.user.id,
      { name, email, mobile },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(400).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong while updating user" });
  }
});

router.delete("/deleteUser", authMiddleware, async (req, res) => {
  try {
    const userID = req.user.id;
    const deleteAccount = await userModel.findByIdAndDelete(userID);
    res
      .status(200)
      .json({ message: "User Account Deleted Successfully", deleteAccount });
  } catch (error) {
    alert(error);
    res
      .status(500)
      .json({ message: "something went wrong while deleting user account" });
  }
});

module.exports = router;
