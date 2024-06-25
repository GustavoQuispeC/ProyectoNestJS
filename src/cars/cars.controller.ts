import { Controller, Get } from "@nestjs/common";
import { CarsService } from "./cars.service";

@Controller("cars")
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getALlCars() {
    return this.carsService.findAll();
  }
  // @Get(":id")
  // getCarById(@Param("id") id) {
  //   console.log({ id });
  //   return this.cars[id];
  // }
}
