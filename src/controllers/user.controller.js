const prisma = require("../db");
const bcrypt = require("bcryptjs");

// Showing all Users
const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update user => the user can update his own data or the admin he can update whoever user 
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, role } = req.body;

    let data = { name, email };
    if (password) {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(password, salt);
    }

    if (role && req.user.role === "ADMIN") {
      data.role = role;
    }

    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete user only adminnn
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id: Number(id) } });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getUsers,
  updateUser,
  deleteUser,
};
