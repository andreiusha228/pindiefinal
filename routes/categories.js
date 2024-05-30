const { sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers/categories');
const { findAllCategories, createCategory, updateCategory, checkEmptyName, checkIsCategoryExists, deleteCategory } = require('../middlewares/categories');
const { checkAuth } = require('../middlewares/auth');

const categoriesRouter = require('express').Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", checkIsCategoryExists , checkEmptyName, checkAuth, createCategory, sendCategoryCreated);
categoriesRouter.put("/categories/:id", checkEmptyName, checkAuth, updateCategory, sendCategoryUpdated);
categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;