import { Router } from "express";
import { AuthMiddleware } from "../middlewares";
import * as coupon from "../controllers/coupon-controller";

export const couponRoute = Router();

couponRoute.get("/", AuthMiddleware, coupon.GetCoupon);
couponRoute.post("/validate", AuthMiddleware, coupon.ValidateCoupon);
