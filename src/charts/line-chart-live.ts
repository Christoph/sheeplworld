import * as d3 from "d3";
import {inject, noView, bindable, bindingMode, BindingEngine} from 'aurelia-framework';

@inject(Element, BindingEngine)
@noView()
export class LineChartLive {
  // One-Way
  @bindable margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
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

  // D3 variables
  private mouse_event;
  private svg;
  private linechart;
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
  private x_size = 900;
  private y_size = 500;

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
      this.x_size = this.element.parentElement.offsetWidth;
      this.y_size = this.element.parentElement.offsetHeight;

      this.width = this.x_size - this.margin.left - this.margin.right;
      this.height = this.y_size - this.margin.top - this.margin.bottom;


      this.initChart()
  }

  // Update the chart if the data changes
  dataMutated(splices) {
      if(this.data.length > 1) {
            this.updateChart();
      }
      else {
          this.svg.selectAll(".line").remove()
      }
  }

  redrawChanged() {
      if(this.data.length > 1) {
          this.updateChart();
      }
  }

  unbind() {
      this.subscription.dispose();
  }

  initChart() {
    let self = this;

    // Complete drawing area
    this.svg = d3.select(this.element)
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom);

    // Linechart area
    this.linechart = this.svg
        .append("g")
        .attr("width", this.width)
        .attr("height", this.height)
        .attr("transform",
        "translate(" + this.margin.left + ", "+ this.margin.top +")");

    // set the ranges
    this.x = d3.scaleLinear()
      .range([0, this.width]);
    this.y = d3.scaleLinear()
      .range([this.height, 0]);

    // add the x Axis
    this.linechart.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .attr("class", "xAxis");

      // x axis label
      this.linechart.append("text")
          .style("text-anchor", "middle")
          .attr("y", this.height+26)
          .attr("x", this.width/2)
          .text(this.x_label);

    // add the y Axis
    this.linechart.append("g")
      .attr("class", "yAxis")

      // y axis label
    this.linechart.append("text")
        .style("text-anchor", "left")
        .attr("y", -4)
        .text(this.y_label);

    // define the line
    this.valueline = d3.line()
        .x((d) => this.x(d[this.x_attribute]))
        .y((d) => this.y(d[this.y_attribute]));

    let y_attribute = this.y_attribute

    // Update axis
    this.linechart.selectAll(".xAxis")
      .call(d3.axisBottom(this.x));
    this.linechart.selectAll(".yAxis")
      .call(d3.axisLeft(this.y));
  }

  updateHighlight() {
      let self = this;

      this.linechart.selectAll("path.line")
          .attr("opacity", function(d) {
            return d["highlight"]
          })
  }

  updateChart() {
    // Update domains
    let x_max = d3.max(this.data, (d) => d[this.x_attribute])
    let y_max = d3.max(this.data, (d) => d[this.y_attribute])
    let x_min = d3.min(this.data, (d) => d[this.x_attribute])
    let y_min = d3.min(this.data, (d) => d[this.y_attribute])

    this.x.domain([x_min, x_max]);
    this.y.domain([y_min, y_max]);

    // Select chart
    this.linechart.selectAll("path.line").remove();
    let chart = this.linechart.selectAll("path.line")
        .data([this.data])

    // Update axis
    this.linechart.selectAll(".xAxis")
      .call(d3.axisBottom(this.x));
    this.linechart.selectAll(".yAxis")
      .call(d3.axisLeft(this.y));


    // Linechart
    chart.exit().remove();

    chart.enter()
      .append("path")
      .attr("class", "line")
      .classed("highlight", function(this, d) {
          if(d["highlight"] == 1) { return true; }
          else { return false; }
      })
      .classed("background", function(this, d) {
          if(d["highlight"] == 2) { return true; }
          else { return false; }
      })
      .merge(chart)
      .attr("d", (d) => this.valueline(d));
  }
}
