import { Document, ObjectId } from "mongoose";

interface CartItems {
  quantity: number;
  product: ObjectId;
}

export interface ICustomer extends Document {
  name: string;
  email: string;
  password: string;
  cartItems: CartItems[];
  role: "customer" | "admin";
}

type JWTPayloadType = Omit<ICustomer, "password">;

declare global {
  namespace Express {
    interface Request {
      user: JWTPayloadType;
    }
  }
}
