import {autoinject, observable} from 'aurelia-framework';
import "ion-rangeslider"
import {SmallWorld} from "../models/small-world"
import * as d3 from "d3"

@autoinject
export class Playground {
    // Interface params
    simulation_initialized = true;

    world;

    // Population count
    grid_selected = 100;
    mating_selected = 1;

    data_grid = <any[]> []

    current_filter = new Set();

    collapsed_input = false;
    collapsed_grid = false;
    collapsed_out = true;

    timeout;
    redraw;

    constructor() {
      this.world = new SmallWorld(this.data_grid);
    }

    switch() {
      this.collapsed_input = this.collapsed_input == true ? false : true;
      this.collapsed_grid = this.collapsed_grid == true ? false : true;
      this.collapsed_out = this.collapsed_out == true ? false : true;
    }

    attached() {
        // Attaching range sliders
        $("#mating").ionRangeSlider({
            min: 1,
            max: 100,
            from: 1,
            step: 1,
            type: "single",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
              this.mating_selected = data["from"]
        }});
        $("#grid_length").ionRangeSlider({
            min: 10,
            max: 1000,
            from: 100,
            step: 1,
            type: "single",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
              this.redrawGrid()
              this.grid_selected = data["from"]
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
      this.simulation_initialized = false;
    }

    compute() {
        // Initialize Spatial Migration Simulation
        // this.world.run_iteration()
        this.timeout = setInterval( () => {this.world.run_iteration()}, 200)
      }
}
