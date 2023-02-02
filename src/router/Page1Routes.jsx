import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const page1Routes = [
  {
    path: "/",
    excact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    excact: false,
    children: <Page1DetailA />
  },
  {
    path: "/detailB",
    excact: false,
    children: <Page1DetailB />
  }
];
