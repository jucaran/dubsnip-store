const server = require("express").Router();
const {
  getAllCategories,
  createCategory,
  deleteCategoryById,
  editCategoryById,
  getCategoryByName_or_getAllCategories,
  getCategoryById,
} = require("../controllers/category.controller.js");

const checkAdmin = (req, res, next) => {
  if (!req.user?.isAdmin) return res.sendStatus(401);
  next();
};

//  /products/category
server.post("/", checkAdmin, createCategory);
server.get("/", getAllCategories);

//  /products/category/:id
server.delete("/:id", checkAdmin, deleteCategoryById);
server.put("/:id", checkAdmin, editCategoryById);

//  /products/category/:nombreCat
server.get("/:nombreCat", getCategoryByName_or_getAllCategories);

// /products/category/detail/:id
server.get("/detail/:id", getCategoryById);
//
module.exports = server;
