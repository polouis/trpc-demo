import { sample00 } from "./client_00";
import { sample01 } from "./client_01";
import { sample02 } from "./client_02";
import { sample03 } from "./client_03";

console.log(`Running sample code ${process.env.npm_config_sample}`);
switch (process.env.npm_config_sample) {
  case '0':
    sample00();
    break;
  case '1':
    sample01();
    break;
  case '2':
    sample02();
    break;
  case '3':
    sample03();
    break;
  default:
    console.log(`Unhandled parameter ${process.env.npm_config_sample}`)
    break;
}

// import { z } from "zod";

// export const BasePoint = z.object({
//   position: z.number(),
//   force: z.number()
// });

// const hasID = z.object({ id: z.number() });

// export const Point = BasePoint.merge(hasID);

// export type BasePoint = z.infer<typeof BasePoint>;
// export type Point = z.infer<typeof Point>;
