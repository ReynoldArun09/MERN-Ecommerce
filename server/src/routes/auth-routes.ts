import { Router } from "express";
import * as auth from "../controllers/auth-controller";
import { ValidationMiddleware } from "../middlewares";
import { signInSchema, signUpSchema } from "../schemas";

export const authRoute = Router();

authRoute.post("/signin", ValidationMiddleware(signInSchema), auth.SignInApi);
authRoute.post("/signup", ValidationMiddleware(signUpSchema), auth.SignUpApi);
authRoute.post("/signout", auth.SignOutApi);
authRoute.post("/refresh-token", auth.RefreshTokenApi);
