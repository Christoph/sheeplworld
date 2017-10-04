import {Router, RouterConfiguration} from "aurelia-router"

export class App {
  router = Router;

  configureRouter(config: RouterConfiguration, router) {
      config.title = "Sheepl World";
      config.map([
          // { route: "", moduleId: "empty/no-selection", nav: true, title: "Select" },
          { route: "", moduleId: "simulation/playground", nav: true, title: "Play", name: "play" }
      ]);

      this.router = router;
  }
}
