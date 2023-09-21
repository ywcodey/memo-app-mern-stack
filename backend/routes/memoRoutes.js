const express = require("express");
const router = express.Router();
const {
  getMemos,
  createMemo,
  updateMemo,
  deleteMemo,
} = require("../controllers/memoController");

router.route("/").get(getMemos).post(createMemo);
router.route("/:id").put(updateMemo).delete(deleteMemo);

module.exports = router;
