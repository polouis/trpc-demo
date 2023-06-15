import { sample00 } from "./client_00";
import { sample01 } from "./client_01";
import { sample02 } from "./client_02";

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
  default:
    break;
}
