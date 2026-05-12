import bcrypt from "bcryptjs";
import User from "../model/User.js";
import mongoose from "mongoose";

export const signup = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }
  const existing = await User.findOne({ username });
  if (existing) {
    return res.status(409).json({ message: "Username taken" });
  }
  const hashed = await bcrypt.hash(password, 10);
  const newUser = await User.createe({ username, password: hashed });
  res.status(201).json({
    _id: newUser._id,
    username: newUser.username,
  });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and Password are required" });
  }
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }
  req.session.userId = user._id
  res.status(200).json({
      _id: user._id,
      username: user.username,
  });
};

export const logout = async (req,res)=>{
  res.session.destroy()
  res.json({message: "Successfully logout"})
}

// Check id user has an active session
export const getMe = async (req, res)=>{
  if(!req.session.userId){
    return null
  }
  const id = req.params.id;
  const user = await User.findById(req.session.userId).select("-password")
  res.json(user)
}