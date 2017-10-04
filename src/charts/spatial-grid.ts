import * as d3 from "d3";
import {inject, noView, bindable, bindingMode, BindingEngine} from 'aurelia-framework';

@inject(Element, BindingEngine)
@noView()
export class SpatialGrid {
  // One-Way
  @bindable margin = { top: 20, right: 20, bottom: 20, left: 20 };
  @bindable x_attribute = "x";
  @bindable y_attribute = "y";
  @bindable x_label = "days";
  @bindable y_label = "y";
  @bindable redraw = 0;

  // Two-Way
  @bindable({ defaultBindingMode: bindingMode.twoWay }) brushing;

  // Observed Variables
  @bindable data = [];

  // Aurelia variables
  private element;
  private subscription;
  private second_subscription;

  // D3 variables
  private mouse_event;
  private svg;
  private drawing_area;
  private focus;
  private x;
  private y;
  private focus_x;
  private gauss_x;
  private gauss_y;
  private gauss_sigma;
  private gradientColor;
  private valueline;
  private focusline;
  private histogram;
  private brush;
  private center = 1.0;
  private weight = 1.0;

  // set the dimensions and margins of the graph
  private width;
  private height;
  private x_size = 440;
  private y_size = 440;

  private redrawGridNecessary = false;

  constructor(element, private bindingEngine) {
    this.element = element;
  }

  // This is called after binding attributes
  attached() {
      if (this.data) {
        // subscribe to the data array and watch for changes
        this.subscription = this.bindingEngine
          .collectionObserver(this.data)
          .subscribe(splices => this.dataMutated(splices));
        }

      // set the dimensions and margins of the graph
      // this.x_size = this.element.parentElement.offsetWidth;
      // this.y_size = this.element.parentElement.offsetHeight;

      this.width = this.x_size - this.margin.left - this.margin.right;
      this.height = this.y_size - this.margin.top - this.margin.bottom;

      // this.draw_grid(["S","#dcdcdc","I","#c82605","R","#6fc041"])
  }

  // Update the chart if the data changes
  dataMutated(splices) {
    if(!this.svg) {
      this.draw_grid()
    }
    if(this.data.length > 1) {
      // this.draw_grid(["S","#dcdcdc","I","#c82604","R","#5fc40"])
      // this.update_grid(["S","#dcdcdc","I","#c82605","R","#6fc041"]);
      if(this.redrawGridNecessary) {
        this.svg.remove()
        this.draw_grid()
        this.redrawGridNecessary = false;
      }
      this.update_grid();
    }
  }

  redrawChanged() {
    if(this.svg) {
      this.redrawGridNecessary = true;
    }
  }

  unbind() {
      this.subscription.dispose();
  }

  updateGridSize() {
    let self = this;
    let grid_length = this.data.length;

    let rw = Math.floor(this.width/grid_length);
    let rh = Math.floor(this.height/grid_length);

    this.drawing_area.selectAll('g').remove();

    this.drawing_area.selectAll('g')
            .data(this.data)
            .enter()
            .append('g')
            .attr('transform', function (d, i) {
              return 'translate(0, ' + (self.width/grid_length) * i + ')';
            });

    this.drawing_area.selectAll('rect')
            .data(this.data)
            .data( (d) => {
              return d;
            })
            .enter()
            .append('rect')
            .attr('x', function (d, i) {
              return (self.width/grid_length) * i;
            })
            .attr('width', rw)
            .attr('height', rh)
            .attr('class', d => <string>d);
  }

  draw_grid() {
    let self = this;
    let grid_length = this.data.length;

    this.svg = d3.select(this.element)
          .append('svg')
          .attr('width', this.width)
          .attr('height', this.height)
          .attr("transform",
          "translate(" + this.margin.left + "," + this.margin.top + ")");

    let rw = Math.floor(this.width/grid_length);
    let rh = Math.floor(this.height/grid_length);

    this.drawing_area = this.svg.selectAll('g')
            .data(this.data)
            .enter()
            .append('g')
            .attr('transform', function (d, i) {
              return 'translate(0, ' + (self.width/grid_length) * i + ')';
            });

    this.drawing_area.selectAll('rect')
            .data(this.data)
            .data( (d) => {
              return d;
            })
            .enter()
            .append('rect')
            .attr('x', function (d, i) {
              return (self.width/grid_length) * i;
            })
            .attr('width', rw)
            .attr('height', rh)
            .attr('class', d => <string>d);
    }

    update_grid(){
        this.svg.selectAll('g')
            .data(this.data)
            .selectAll('rect')
            .data(function (d) {
              return d;
            })
            .attr('class', d => <string>d)
    }

}
