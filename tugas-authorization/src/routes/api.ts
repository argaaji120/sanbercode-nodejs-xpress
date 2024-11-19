import express from "express";

import authMiddleware from "../middlewares/auth.middleware";
import uploadMiddleware from "../middlewares/upload.middleware";
import rbacMiddleware from "../middlewares/rbac.middleware";

import authController from "../controllers/auth.controller";
import uploadController from "../controllers/upload.controller";
import productController from "../controllers/product.controller";
import categoryController from "../controllers/category.controller";

const router = express.Router();

// Auth
router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);
router.post("/auth/me", [authMiddleware, rbacMiddleware(["admin"])], authController.me);
router.put("/auth/update-profile", authMiddleware, authController.updateProfile);

// CRUD Categories
router.get("/categories", categoryController.findAll);
router.post("/categories", categoryController.create);
router.get("/categories/:id", categoryController.findOne);
router.put("/categories/:id", categoryController.update);
router.delete("/categories/:id", categoryController.delete);

router.get("/products", productController.findAll);
router.post("/products", productController.create);
router.get("/products/:id", productController.findOne);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.delete);

router.post("/upload", uploadMiddleware.single, uploadController.single);
router.post("/uploads", uploadMiddleware.multiple, uploadController.multiple);

export default router;
