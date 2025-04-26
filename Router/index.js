const express = require("express");
const router = express.Router();

const {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} = require("../Controller/Propertys");
const {
  createBlog,
  getAllBlogs,
  updateBlogs,
  deleteBlos,
  getBlogById,
} = require("../Controller/Blogs");
const {
  createOffice,
  getAllOffice,
  getOfficeById,
  deleteOffice,
} = require("../Controller/Office");

const { createUser, getAllUsers } = require("../Controller/Users");

//Flats
router.post("/flats/create", createProperty);
router.get("/flats", getAllProperties);
router.get("/flat/:id", getPropertyById);
router.post("/flats/update/:id", updateProperty);
router.post("/flats/delete/:id", deleteProperty);

//Blogs
router.post("/blog/create", createBlog);
router.get("/blogs", getAllBlogs);
router.get("/blog/:id", getBlogById);
router.post("/blog/update/:id", updateBlogs);
router.post("/blog/delete/:id", deleteBlos);

//Office
router.post("/office/create", createOffice);
router.get("/office", getAllOffice);
router.get("/office/:id", getOfficeById);
router.post("/office/delete/:id", deleteOffice);

//User
router.post("/user/create", createUser);
router.get("/users", getAllUsers);

module.exports = router;
