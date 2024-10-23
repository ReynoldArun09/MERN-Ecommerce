import { Router } from "express";
import * as product from "../controllers/product-controller";
import { AdminMiddleware, AuthMiddleware } from "../middlewares";

export const productRoute = Router();

productRoute.get("/all", product.GetAllProducts);
productRoute.get("/featured", product.GetFeaturedProducts);
productRoute.post(
  "/create",
  AuthMiddleware,
  AdminMiddleware,
  product.CreateProduct
);
productRoute.delete(
  "/delete/:id",
  AuthMiddleware,
  AdminMiddleware,
  product.DeleteProduct
);
productRoute.get("/all-category/:category", product.GetProductsByCategory);
productRoute.get("/recommendation", product.GetRecommendedProducts);
productRoute.patch(
  "/toggle/:id",
  AuthMiddleware,
  AdminMiddleware,
  product.ToggleFeaturedProduct
);
