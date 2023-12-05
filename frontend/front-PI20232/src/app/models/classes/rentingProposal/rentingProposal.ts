import { CarModel } from "../car/car.model";
import { UserModel } from "../user/user.model";

export class RentingProposal {
  id!: number | string;
  userId!: number | string;
  carId!: number | string;
  car!: CarModel;
  user!: UserModel;
}
