const asyncHandler = require("express-async-handler");

const Memo = require("../models/memoModel");

// Get memos
const getMemos = asyncHandler(async (req, res) => {
  const memos = await Memo.find();

  res.status(200).json({memos});
});

// Create memo
const createMemo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const memo = await Memo.create({
    text: req.body.text,
  });

  res.status(200).json({memo});
});

// Update memo
const updateMemo = asyncHandler(async (req, res) => {
  const memo = await Memo.findById(req.params.id);

  if (!memo) {
    res.status(400);
    throw new Error("Memo not found");
  }

  const updatedMemo = await Memo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({memo: updatedMemo});
});

// Delete memo
const deleteMemo = asyncHandler(async (req, res) => {
  const memo = await Memo.findById(req.params.id);

  if (!memo) {
    res.status(400);
    throw new Error("Memo not found");
  }

  await Memo.findByIdAndRemove(req.params.id);

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getMemos,
  createMemo,
  updateMemo,
  deleteMemo,
};
