import { IRouteableComponent, IRoute } from "@aurelia/router";

export class MyApp {
  static routes: IRoute[] = [
      {
          path: ["", "home"],
          component: import("./routes/home/home"),
          title: "Home"
      },
      {
          path: ["products"],
          component: import("./routes/products/products"),
          title: "Products"
      },
      {
          path: ["product"],
          component: import("./routes/product/product"),
          title: "Product"
      },
      {
          path: ["checkout"],
          component: import("./routes/checkout/checkout"),
          title: "Checkout"
      }
  ]
}
