import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  route("", "./layout/main.tsx", [
    index("./page/menu.tsx"),
    route("about", "./page/about.tsx"),
    route("experience", "./page/dexScreen.tsx"),
    route("projects", "./page/dexScreen.tsx"),
    route("options", "./page/options.tsx"),
  ]),
] satisfies RouteConfig;
