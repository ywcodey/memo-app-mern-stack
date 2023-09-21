const asyncHandler = require("express-async-handler");

// Get memos
const getMemos = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get memos" });
});

// Create memo
const createMemo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Create memos" });
});

// Update memo
const updateMemo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update memo ${req.params.id}` });
});

// Delete memo
const deleteMemo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete memo ${req.params.id}` });
});

module.exports = {
  getMemos,
  createMemo,
  updateMemo,
  deleteMemo,
};
