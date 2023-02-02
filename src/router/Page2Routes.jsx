import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    excact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    excact: false,
    children: <UrlParameter />
  }
];
