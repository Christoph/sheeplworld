import {autoinject, observable} from 'aurelia-framework';
import "ion-rangeslider"
import {SmallWorld} from "../models/small-world"
import * as d3 from "d3"

@autoinject
export class Playground {
    // Interface params
    world;

    // Sheep params
    number_sheep = 10;
    desired_separation = 2;

    data_grid = <any[]> []

    current_filter = new Set();

    collapsed_sheep = true;
    collapsed_wolf = true;

    not_initialized = true;

    timeout;
    redraw;

    constructor() {
      this.world = new SmallWorld(this.data_grid);
    }

    attached() {
        // Attaching range sliders
        $("#number_sheep").ionRangeSlider({
            min: 1,
            max: 50,
            from: 10,
            step: 1,
            type: "single",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
              this.number_sheep = data["from"]
        }});
        $("#desired_separation").ionRangeSlider({
            min: 1,
            max: 10,
            from: 2,
            step: 1,
            type: "single",
            grid: true,
            grid_num: 5,
            onFinish: (data) => {
              this.desired_separation = data["from"]
        }});
    }

    redrawGrid() {
        this.redraw = this.redraw == 0 ? 1 : 0;
    }

    stopSimulation() {
      clearTimeout(this.timeout);
    }

    initializeWorld() {
      this.world.init_simulation()
      this.not_initialized = false;
    }

    toggleSheep() {
      this.collapsed_sheep = this.collapsed_sheep == true ? false : true;
    }

    add_sheeps() {
      this.world.add_sheeps(this.number_sheep, this.desired_separation)
      this.redrawGrid()
    }

    compute() {
        // Initialize Spatial Migration Simulation
        // this.world.run_iteration()
        this.timeout = setInterval( () => {
          this.world.run_iteration()
          this.redrawGrid()
        }, 200)
      }
}
