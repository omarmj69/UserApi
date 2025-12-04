const express = require("express");
const router = express.Router();

const { getUsers, updateUser, deleteUser } = require("../controllers/user.controller");
const { verifyToken, isAdmin } = require("../middleware/auth.middleware");

router.get("/", verifyToken, isAdmin, getUsers);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, isAdmin, deleteUser);

module.exports = router;
