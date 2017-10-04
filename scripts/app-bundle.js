define('app',["require", "exports", "aurelia-router"], function (require, exports, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.router = aurelia_router_1.Router;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = "Sheepl World";
            config.map([
                { route: "", moduleId: "simulation/playground", nav: true, title: "Play", name: "play" }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1lBQ0UsV0FBTSxHQUFHLHVCQUFNLENBQUM7UUFXbEIsQ0FBQztRQVRDLDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFNO1lBQy9DLE1BQU0sQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBRVAsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTthQUMzRixDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDO1FBQ0gsVUFBQztJQUFELENBWkEsQUFZQyxJQUFBO0lBWlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb259IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiXG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICByb3V0ZXIgPSBSb3V0ZXI7XG5cbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyKSB7XG4gICAgICBjb25maWcudGl0bGUgPSBcIlNoZWVwbCBXb3JsZFwiO1xuICAgICAgY29uZmlnLm1hcChbXG4gICAgICAgICAgLy8geyByb3V0ZTogXCJcIiwgbW9kdWxlSWQ6IFwiZW1wdHkvbm8tc2VsZWN0aW9uXCIsIG5hdjogdHJ1ZSwgdGl0bGU6IFwiU2VsZWN0XCIgfSxcbiAgICAgICAgICB7IHJvdXRlOiBcIlwiLCBtb2R1bGVJZDogXCJzaW11bGF0aW9uL3BsYXlncm91bmRcIiwgbmF2OiB0cnVlLCB0aXRsZTogXCJQbGF5XCIsIG5hbWU6IFwicGxheVwiIH1cbiAgICAgIF0pO1xuXG4gICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .plugin("aurelia-computed")
            .plugin("d3-extended")
            .plugin("d3-random")
            .plugin("aurelia-bootstrap")
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsTUFBTSxDQUFDLGtCQUFrQixDQUFDO2FBQzFCLE1BQU0sQ0FBQyxhQUFhLENBQUM7YUFDckIsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUNuQixNQUFNLENBQUMsbUJBQW1CLENBQUM7YUFDM0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBbEJELDhCQWtCQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLnBsdWdpbihcImF1cmVsaWEtY29tcHV0ZWRcIilcbiAgICAucGx1Z2luKFwiZDMtZXh0ZW5kZWRcIilcbiAgICAucGx1Z2luKFwiZDMtcmFuZG9tXCIpXG4gICAgLnBsdWdpbihcImF1cmVsaWEtYm9vdHN0cmFwXCIpXG4gICAgLmZlYXR1cmUoJ3Jlc291cmNlcycpO1xuXG4gIGlmIChlbnZpcm9ubWVudC5kZWJ1Zykge1xuICAgIGF1cmVsaWEudXNlLmRldmVsb3BtZW50TG9nZ2luZygpO1xuICB9XG5cbiAgaWYgKGVudmlyb25tZW50LnRlc3RpbmcpIHtcbiAgICBhdXJlbGlhLnVzZS5wbHVnaW4oJ2F1cmVsaWEtdGVzdGluZycpO1xuICB9XG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KCkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('navbar',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavBar = (function () {
        function NavBar() {
            this.router = null;
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], NavBar.prototype, "router", void 0);
        return NavBar;
    }());
    exports.NavBar = NavBar;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFFQTtRQUFBO1lBQ1ksV0FBTSxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDO1FBRFc7WUFBVCw0QkFBUTs7OENBQWU7UUFDMUIsYUFBQztLQUZELEFBRUMsSUFBQTtJQUZZLHdCQUFNIiwiZmlsZSI6Im5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuZXhwb3J0IGNsYXNzIE5hdkJhciB7XG4gIEBiaW5kYWJsZSByb3V0ZXIgPSBudWxsO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/dual-bar-chart',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dualBarChart = (function () {
        function dualBarChart(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.redraw = 0;
            this.data = [];
            this.x_size = 900;
            this.y_size = 500;
            this.element = element;
        }
        dualBarChart.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.resize_sub = this.bindingEngine
                .propertyObserver(this.element.parentElement, "offsetWidth")
                .subscribe(function (n) { return _this.resize(); });
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.initChart();
            this.updateChart();
        };
        dualBarChart.prototype.resize = function () {
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.resizeChart();
            this.updateChart();
        };
        dualBarChart.prototype.dataMutated = function (splices) {
            if (this.data.length > 0) {
                this.updateChart();
            }
            else {
                this.svg.selectAll(".medikament").remove();
            }
        };
        dualBarChart.prototype.unbind = function () {
            this.subscription.dispose();
            this.resize_sub.dispose();
        };
        dualBarChart.prototype.initChart = function () {
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.barchart = this.svg
                .append("g")
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x = d3.scaleBand()
                .padding(0.1)
                .range([0, this.width]);
            this.x_inner = d3.scaleBand()
                .padding(0.05);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.z = d3.scaleOrdinal()
                .range(["#98C1D9", "#EE6C4D"])
                .domain(["Standart", "Max"]);
            this.barchart.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.barchart.append("g")
                .attr("class", "yAxis");
            this.barchart.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .text("Kosten");
            this.legend = this.barchart.append("g")
                .attr("font-family", "sans-serif")
                .attr("font-size", 10)
                .attr("text-anchor", "end")
                .attr("class", "legend");
        };
        dualBarChart.prototype.resizeChart = function () {
            this.svg
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.barchart
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x
                .range([0, this.width]);
            this.y
                .range([this.height, 0]);
            this.barchart.append("g")
                .attr("transform", "translate(0," + this.height + ")");
        };
        dualBarChart.prototype.updateChart = function () {
            var self = this;
            var types = [];
            var keys = [];
            var costs = ["Standart", "Max"];
            if (this.data.length > 0)
                types = Object.getOwnPropertyNames(this.data[0]).slice(1);
            if (this.data.length > 0)
                keys = Object.getOwnPropertyNames(this.data[0]["Standart"]);
            var totals = this.data.map(function (x) {
                var s = { key: x.x, value: 0 };
                keys.forEach(function (y) {
                    s.value = s.value + +x[y];
                });
                return s;
            });
            this.x.domain(this.data.map(function (d) { return d.x; }));
            this.x_inner.domain(costs).rangeRound([0, this.x.bandwidth()]);
            this.y.domain([0, d3.max(this.data, function (d) { return d3.max(costs, function (key) { return Object.values(__assign({ Basis: d["Basis"] }, d[key])).reduce(function (a, b) { return a + b; }); }); })]).nice();
            var t = d3.transition("default")
                .duration(500);
            this.barchart.selectAll(".medikament").remove();
            var chart = this.barchart.append("g")
                .attr("class", "medikament")
                .selectAll("g")
                .data(this.data)
                .enter().append("g")
                .attr("transform", function (d) { return "translate(" + self.x(d.x) + ",0)"; })
                .selectAll("rect")
                .data(function (d) { return costs.map(function (key) { return { key: key, value: Object.values(__assign({ Basis: d["Basis"] }, d[key])).reduce(function (a, b) { return a + b; }) }; }); });
            chart.enter().append("rect")
                .attr("x", function (d) { return self.x_inner(d.key); })
                .attr("y", function (d) { return self.y(d.value); })
                .attr("width", self.x_inner.bandwidth())
                .attr("fill", function (d) { return self.z(d.key); })
                .attr("y", this.height)
                .attr("height", 0)
                .merge(chart).transition(t)
                .attr("height", function (d) { return self.height - self.y(d.value); })
                .attr("y", function (d) { return self.y(d.value); });
            chart.enter().append("text")
                .style("text-anchor", "middle")
                .attr("x", function (d) { return self.x_inner(d.key) + self.x_inner.bandwidth() / 2; })
                .attr("y", function (d) { return self.y(d.value) - 3; })
                .text(function (d) { return d.value; });
            chart.exit().remove();
            this.barchart.selectAll(".xAxis")
                .attr("transform", "translate(0," + this.height + ")")
                .call(d3.axisBottom(this.x));
            this.barchart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            var legend_group = this.legend
                .selectAll("g")
                .data(costs.reverse(), function (x) { return x; });
            var legends = legend_group.enter().append("g");
            legends.append("rect")
                .attr("x", this.width - 19)
                .attr("width", 19)
                .attr("height", 19)
                .attr("fill", this.z);
            legends.append("text")
                .attr("x", this.width - 24)
                .attr("y", 9.5)
                .attr("dy", "0.32em")
                .text(function (d) { return d; });
            legend_group.merge(legends).attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });
            legend_group.exit().remove();
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualBarChart.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualBarChart.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualBarChart.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualBarChart.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], dualBarChart.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualBarChart.prototype, "data", void 0);
        dualBarChart = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], dualBarChart);
        return dualBarChart;
    }());
    exports.dualBarChart = dualBarChart;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9kdWFsLWJhci1jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtBO1FBa0NFLHNCQUFZLE9BQU8sRUFBVSxhQUFhO1lBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7WUFoQ2hDLFdBQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2xFLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLFdBQU0sR0FBRyxDQUFDLENBQUM7WUFNWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1lBb0JaLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBR25CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7UUFHRCwrQkFBUSxHQUFSO1lBQUEsaUJBcUJDO1lBcEJDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUVkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWE7cUJBQ25DLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7cUJBQzdCLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztZQUNyRCxDQUFDO1lBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYTtpQkFDakMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO2lCQUMzRCxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFFLEVB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QUMsQ0FBQTtZQUVGLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sWUFBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFdEwsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7aUJBQzdCLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVmLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBRS9DLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFDaEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZ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QUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2lCQUMxQixJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztpQkFDZCxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQztpQkFDcEIsSUFBSSxDQUFDLFVBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUduQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUd4RyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDL0IsQ0FBQztRQXhQUztZQUFULDRCQUFROztvREFBbUU7UUFDbEU7WUFBVCw0QkFBUTs7eURBQW1CO1FBQ2xCO1lBQVQsNEJBQVE7O3lEQUFtQjtRQUNsQjtZQUFULDRCQUFROztvREFBWTtRQUdpQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7c0RBQVU7UUFHckQ7WUFBVCw0QkFBUTs7a0RBQVc7UUFYVCxZQUFZO1lBRnhCLDBCQUFNLENBQUMsT0FBTyxFQUFFLGlDQUFhLENBQUM7WUFDOUIsMEJBQU0sRUFBRTs7V0FDSSxZQUFZLENBMlB4QjtRQUFELG1CQUFDO0tBM1BELEFBMlBDLElBQUE7SUEzUFksb0NBQVkiLCJmaWxlIjoiY2hhcnRzL2R1YWwtYmFyLWNoYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgeyBpbmplY3QsIG5vVmlldywgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBCaW5kaW5nRW5naW5lIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEVsZW1lbnQsIEJpbmRpbmdFbmdpbmUpXG5Abm9WaWV3KClcbmV4cG9ydCBjbGFzcyBkdWFsQmFyQ2hhcnQge1xuICAvLyBPbmUtV2F5XG4gIEBiaW5kYWJsZSBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiA2MCwgYm90dG9tOiAzNSwgbGVmdDogNjAsIG1pZGRsZTogMjAgfTtcbiAgQGJpbmRhYmxlIHhfYXR0cmlidXRlID0gXCJ4XCI7XG4gIEBiaW5kYWJsZSB5X2F0dHJpYnV0ZSA9IFwieVwiO1xuICBAYmluZGFibGUgcmVkcmF3ID0gMDtcblxuICAvLyBUd28tV2F5XG4gIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIGJydXNoaW5nO1xuXG4gIC8vIE9ic2VydmVkIFZhcmlhYmxlc1xuICBAYmluZGFibGUgZGF0YSA9IFtdO1xuXG4gIC8vIEF1cmVsaWEgdmFyaWFibGVzXG4gIHByaXZhdGUgZWxlbWVudDtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcmVzaXplX3N1YjtcblxuICAvLyBEMyB2YXJpYWJsZXNcbiAgcHJpdmF0ZSBzdmc7XG4gIHByaXZhdGUgYmFyY2hhcnQ7XG4gIHByaXZhdGUgeDtcbiAgcHJpdmF0ZSB4X2lubmVyO1xuICBwcml2YXRlIHk7XG4gIHByaXZhdGUgejtcbiAgcHJpdmF0ZSB6X2lubmVyO1xuICBwcml2YXRlIGxlZ2VuZDtcblxuICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gIHByaXZhdGUgd2lkdGg7XG4gIHByaXZhdGUgaGVpZ2h0O1xuICBwcml2YXRlIHhfc2l6ZSA9IDkwMDtcbiAgcHJpdmF0ZSB5X3NpemUgPSA1MDA7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgcHJpdmF0ZSBiaW5kaW5nRW5naW5lKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGJpbmRpbmcgYXR0cmlidXRlc1xuICBhdHRhY2hlZCgpIHtcbiAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAvLyBzdWJzY3JpYmUgdG8gdGhlIGRhdGEgYXJyYXkgYW5kIHdhdGNoIGZvciBjaGFuZ2VzXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYmluZGluZ0VuZ2luZVxuICAgICAgICAuY29sbGVjdGlvbk9ic2VydmVyKHRoaXMuZGF0YSlcbiAgICAgICAgLnN1YnNjcmliZShzcGxpY2VzID0+IHRoaXMuZGF0YU11dGF0ZWQoc3BsaWNlcykpO1xuICAgIH1cblxuICAgIHRoaXMucmVzaXplX3N1YiA9IHRoaXMuYmluZGluZ0VuZ2luZVxuICAgICAgLnByb3BlcnR5T2JzZXJ2ZXIodGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQsIFwib2Zmc2V0V2lkdGhcIilcbiAgICAgIC5zdWJzY3JpYmUobiA9PiB0aGlzLnJlc2l6ZSgpKVxuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICAgIHRoaXMueF9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy55X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuICAgIHRoaXMuaW5pdENoYXJ0KClcbiAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgdGhpcy54X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLnlfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgIHRoaXMud2lkdGggPSB0aGlzLnhfc2l6ZSAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXG4gICAgdGhpcy5yZXNpemVDaGFydCgpO1xuICAgIHRoaXMudXBkYXRlQ2hhcnQoKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY2hhcnQgaWYgdGhlIGRhdGEgY2hhbmdlc1xuICBkYXRhTXV0YXRlZChzcGxpY2VzKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLm1lZGlrYW1lbnRcIikucmVtb3ZlKClcbiAgICB9XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICAgIHRoaXMucmVzaXplX3N1Yi5kaXNwb3NlKCk7XG4gIH1cblxuICBpbml0Q2hhcnQoKSB7XG4gICAgLy8gQ29tcGxldGUgZHJhd2luZyBhcmVhXG4gICAgdGhpcy5zdmcgPSBkMy5zZWxlY3QodGhpcy5lbGVtZW50KVxuICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pO1xuXG4gICAgLy8gTGluZWNoYXJ0IGFyZWFcbiAgICB0aGlzLmJhcmNoYXJ0ID0gdGhpcy5zdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGgpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodClcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMubWFyZ2luLmxlZnQgKyBcIiwgXCIgKyB0aGlzLm1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHRoaXMueCA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAucGFkZGluZygwLjEpXG4gICAgICAucmFuZ2UoWzAsIHRoaXMud2lkdGhdKTtcbiAgICB0aGlzLnhfaW5uZXIgPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgLnBhZGRpbmcoMC4wNSlcbiAgICB0aGlzLnkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW3RoaXMuaGVpZ2h0LCAwXSk7XG4gICAgdGhpcy56ID0gZDMuc2NhbGVPcmRpbmFsKClcbiAgICAgIC5yYW5nZShbXCIjOThDMUQ5XCIgLFwiI0VFNkM0RFwiXSlcbiAgICAgIC5kb21haW4oW1wiU3RhbmRhcnRcIiwgXCJNYXhcIl0pO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInhBeGlzXCIpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5QXhpc1wiKVxuXG4gICAgLy8geSBheGlzIGxhYmVsXG4gICAgdGhpcy5iYXJjaGFydC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgLnRleHQoXCJLb3N0ZW5cIik7XG5cbiAgICAvLyBhZGQgbGVnZW5kXG4gICAgdGhpcy5sZWdlbmQgPSB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiZm9udC1mYW1pbHlcIiwgXCJzYW5zLXNlcmlmXCIpXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCAxMClcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsZWdlbmRcIik7XG4gIH1cblxuICByZXNpemVDaGFydCgpIHtcbiAgICAvLyBDb21wbGV0ZSBkcmF3aW5nIGFyZWFcbiAgICB0aGlzLnN2Z1xuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pO1xuXG4gICAgLy8gTGluZWNoYXJ0IGFyZWFcbiAgICB0aGlzLmJhcmNoYXJ0XG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGgpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodClcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMubWFyZ2luLmxlZnQgKyBcIiwgXCIgKyB0aGlzLm1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHRoaXMueFxuICAgICAgLnJhbmdlKFswLCB0aGlzLndpZHRoXSk7XG4gICAgdGhpcy55XG4gICAgICAucmFuZ2UoW3RoaXMuaGVpZ2h0LCAwXSk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHRoaXMuYmFyY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gIH1cblxuICB1cGRhdGVDaGFydCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgIGxldCB0eXBlcyA9IFtdXG4gICAgbGV0IGtleXMgPSBbXVxuICAgIGxldCBjb3N0cyA9IFtcIlN0YW5kYXJ0XCIsIFwiTWF4XCJdXG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB0eXBlcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuZGF0YVswXSkuc2xpY2UoMSk7XG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5kYXRhWzBdW1wiU3RhbmRhcnRcIl0pO1xuXG4gICAgbGV0IHRvdGFscyA9IHRoaXMuZGF0YS5tYXAoeCA9PiB7XG4gICAgICBsZXQgcyA9IHsga2V5OiB4LngsIHZhbHVlOiAwIH07XG4gICAgICBrZXlzLmZvckVhY2goeSA9PiB7XG4gICAgICAgIHMudmFsdWUgPSBzLnZhbHVlICsgK3hbeV07XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHM7XG4gICAgfSlcbiAgICBcbiAgICB0aGlzLnguZG9tYWluKHRoaXMuZGF0YS5tYXAoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC54OyB9KSk7XG4gICAgdGhpcy54X2lubmVyLmRvbWFpbihjb3N0cykucmFuZ2VSb3VuZChbMCwgdGhpcy54LmJhbmR3aWR0aCgpXSk7XG4gICAgdGhpcy55LmRvbWFpbihbMCwgZDMubWF4KHRoaXMuZGF0YSwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZDMubWF4KGNvc3RzLCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIE9iamVjdC52YWx1ZXMoeyBCYXNpczogZFtcIkJhc2lzXCJdLCAuLi5kW2tleV19KS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTsgfSk7IH0pXSkubmljZSgpO1xuXG4gICAgbGV0IHQgPSBkMy50cmFuc2l0aW9uKFwiZGVmYXVsdFwiKVxuICAgICAgLmR1cmF0aW9uKDUwMCk7XG5cbiAgICAgIHRoaXMuYmFyY2hhcnQuc2VsZWN0QWxsKFwiLm1lZGlrYW1lbnRcIikucmVtb3ZlKClcblxuICAgICAgbGV0IGNoYXJ0ID0gdGhpcy5iYXJjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1lZGlrYW1lbnRcIilcbiAgICAgICAgLnNlbGVjdEFsbChcImdcIilcbiAgICAgICAgLmRhdGEodGhpcy5kYXRhKVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBzZWxmLngoZC54KSArIFwiLDApXCI7IH0pXG4gICAgICAgIC5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAgIC5kYXRhKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGNvc3RzLm1hcChmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHtrZXk6IGtleSwgdmFsdWU6IE9iamVjdC52YWx1ZXMoeyBCYXNpczogZFtcIkJhc2lzXCJdLCAuLi5kW2tleV19KS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKX19KTsgfSlcblxuICAgICAgY2hhcnQuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLnhfaW5uZXIoZC5rZXkpOyB9KVxuICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi55KGQudmFsdWUpOyB9KVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHNlbGYueF9pbm5lci5iYW5kd2lkdGgoKSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueihkLmtleSk7IH0pXG4gICAgICAgIC5hdHRyKFwieVwiLCB0aGlzLmhlaWdodClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgMClcbiAgICAgICAgICAubWVyZ2UoY2hhcnQpLnRyYW5zaXRpb24odClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi5oZWlnaHQgLSBzZWxmLnkoZC52YWx1ZSk7IH0pXG4gICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLnkoZC52YWx1ZSk7IH0pO1xuXG4gICAgICBjaGFydC5lbnRlcigpLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLy8gLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsc1wiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi54X2lubmVyKGQua2V5KSArIHNlbGYueF9pbm5lci5iYW5kd2lkdGgoKS8yOyB9KVxuICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi55KGQudmFsdWUpIC0gMzsgfSlcbiAgICAgICAgLnRleHQoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC52YWx1ZTsgfSlcblxuXG4gICAgICBjaGFydC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICB0aGlzLmJhcmNoYXJ0LnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueCkpO1xuXG4gICAgdGhpcy5iYXJjaGFydC5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpO1xuXG4gICAgLy8gSm9pblxuICAgIGxldCBsZWdlbmRfZ3JvdXAgPSB0aGlzLmxlZ2VuZFxuICAgICAgLnNlbGVjdEFsbChcImdcIilcbiAgICAgIC5kYXRhKGNvc3RzLnJldmVyc2UoKSwgeCA9PiB4KVxuXG4gICAgLy8gRW50ZXJcbiAgICBsZXQgbGVnZW5kcyA9IGxlZ2VuZF9ncm91cC5lbnRlcigpLmFwcGVuZChcImdcIilcblxuICAgIGxlZ2VuZHMuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIHRoaXMud2lkdGggLSAxOSlcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgMTkpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAxOSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCB0aGlzLnopO1xuXG4gICAgbGVnZW5kcy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInhcIiwgdGhpcy53aWR0aCAtIDI0KVxuICAgICAgLmF0dHIoXCJ5XCIsIDkuNSlcbiAgICAgIC5hdHRyKFwiZHlcIiwgXCIwLjMyZW1cIilcbiAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQ7IH0pO1xuXG4gICAgLy8gVXBkYXRlXG4gICAgbGVnZW5kX2dyb3VwLm1lcmdlKGxlZ2VuZHMpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIGkgKiAyMCArIFwiKVwiOyB9KTtcblxuICAgIC8vIEV4aXRcbiAgICBsZWdlbmRfZ3JvdXAuZXhpdCgpLnJlbW92ZSgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/dual-stacked-bar-chart',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dualStackedBarChart = (function () {
        function dualStackedBarChart(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.redraw = 0;
            this.data = [];
            this.x_size = 900;
            this.y_size = 500;
            this.element = element;
        }
        dualStackedBarChart.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.resize_sub = this.bindingEngine
                .propertyObserver(this.element.parentElement, "offsetWidth")
                .subscribe(function (n) { return _this.resize(); });
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.initChart();
            this.updateChart();
        };
        dualStackedBarChart.prototype.resize = function () {
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.resizeChart();
            this.updateChart();
        };
        dualStackedBarChart.prototype.dataMutated = function (splices) {
            if (this.data.length > 0) {
                this.updateChart();
            }
            else {
                this.svg.selectAll(".medikament").remove();
            }
        };
        dualStackedBarChart.prototype.unbind = function () {
            this.subscription.dispose();
            this.resize_sub.dispose();
        };
        dualStackedBarChart.prototype.initChart = function () {
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.barchart = this.svg
                .append("g")
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x = d3.scaleBand()
                .padding(0.1)
                .range([0, this.width]);
            this.x_inner = d3.scaleBand()
                .padding(0.05);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.z = d3.scaleOrdinal()
                .range(["#33CA7F", "#ECE4B7", "#FC9F5B"])
                .domain(["Basis", "UV", "IBD"]);
            this.barchart.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.barchart.append("g")
                .attr("class", "yAxis");
            this.barchart.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .text("Kosten");
            this.legend = this.barchart.append("g")
                .attr("font-family", "sans-serif")
                .attr("font-size", 10)
                .attr("text-anchor", "end")
                .attr("class", "legend");
        };
        dualStackedBarChart.prototype.resizeChart = function () {
            this.svg
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.barchart
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x
                .range([0, this.width]);
            this.y
                .range([this.height, 0]);
            this.barchart.append("g")
                .attr("transform", "translate(0," + this.height + ")");
        };
        dualStackedBarChart.prototype.updateChart = function () {
            var self = this;
            var types = [];
            var keys = [];
            var costs = ["Standart", "Max"];
            if (this.data.length > 0)
                types = Object.getOwnPropertyNames(this.data[0]).slice(1);
            if (this.data.length > 0)
                keys = ["Basis"].concat(Object.getOwnPropertyNames(this.data[0]["Standart"]));
            var totals = this.data.map(function (x) {
                var s = { key: x.x, value: 0 };
                keys.forEach(function (y) {
                    s.value = s.value + +x[y];
                });
                return s;
            });
            this.x.domain(this.data.map(function (d) { return d.x; }));
            this.x_inner.domain(costs).rangeRound([0, this.x.bandwidth()]);
            this.y.domain([0, d3.max(this.data, function (d) { return Object.values(__assign({ Basis: d["Basis"] }, d["Max"])).reduce(function (a, b) { return a + b; }); })]).nice();
            var t = d3.transition("default")
                .duration(500);
            this.barchart.selectAll(".medikament").remove();
            var chart = this.barchart.append("g")
                .attr("class", "medikament")
                .selectAll("g")
                .data(this.data)
                .enter().append("g")
                .attr("transform", function (d) { return "translate(" + self.x(d.x) + ",0)"; })
                .selectAll(".groups")
                .data(function (d) { return costs.map(function (key) { return { key: key, value: __assign({ Basis: d.Basis }, d[key]) }; }); });
            var groups = chart.enter().append("g")
                .attr("transform", function (d) { return "translate(" + self.x_inner(d.key) + ",0)"; })
                .attr("class", "groups");
            var bars = groups.selectAll("rect")
                .data(function (d) { return d3.stack().keys(keys)([d.value]); });
            bars.enter().append("rect")
                .attr("x", 0)
                .attr("width", self.x_inner.bandwidth())
                .attr("fill", function (d) { return self.z(d.key); })
                .attr("y", this.height)
                .attr("height", 0)
                .merge(groups).transition(t)
                .attr("y", function (d) { return self.y(d[0][1]); })
                .attr("height", function (d) { return self.y(d[0][0]) - self.y(d[0][1]); });
            bars.enter().append("text")
                .style("text-anchor", "middle")
                .attr("x", function (d) { return self.x_inner.bandwidth() / 2; })
                .attr("y", function (d) { return self.y(Object.values(d[0].data).reduce(function (a, b) { return a + b; })) - 3; })
                .text(function (d) { return Object.values(d[0].data).reduce(function (a, b) { return a + b; }); });
            chart.exit().remove();
            this.barchart.selectAll(".xAxis")
                .attr("transform", "translate(0," + this.height + ")")
                .call(d3.axisBottom(this.x));
            this.barchart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            var legend_group = this.legend
                .selectAll("g")
                .data(keys.reverse(), function (x) { return x; });
            var legends = legend_group.enter().append("g");
            legends.append("rect")
                .attr("x", this.width - 19)
                .attr("width", 19)
                .attr("height", 19)
                .attr("fill", this.z);
            legends.append("text")
                .attr("x", this.width - 24)
                .attr("y", 9.5)
                .attr("dy", "0.32em")
                .text(function (d) { return d; });
            legend_group.merge(legends).attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });
            legend_group.exit().remove();
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualStackedBarChart.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualStackedBarChart.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualStackedBarChart.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualStackedBarChart.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], dualStackedBarChart.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualStackedBarChart.prototype, "data", void 0);
        dualStackedBarChart = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], dualStackedBarChart);
        return dualStackedBarChart;
    }());
    exports.dualStackedBarChart = dualStackedBarChart;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9kdWFsLXN0YWNrZWQtYmFyLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS0E7UUFrQ0UsNkJBQVksT0FBTyxFQUFVLGFBQWE7WUFBYixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtZQWhDaEMsV0FBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDbEUsZ0JBQVcsR0FBRyxHQUFHLENBQUM7WUFDbEIsZ0JBQVcsR0FBRyxHQUFHLENBQUM7WUFDbEIsV0FBTSxHQUFHLENBQUMsQ0FBQztZQU1YLFNBQUksR0FBRyxFQUFFLENBQUM7WUFvQlosV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFHbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztRQUdELHNDQUFRLEdBQVI7WUFBQSxpQkFxQkM7WUFwQkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBRWQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYTtxQkFDbkMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDN0IsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1lBQ3JELENBQUM7WUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhO2lCQUNqQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7aUJBQzNELFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFN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O1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzs2REFBVTtRQUdyRDtZQUFULDRCQUFROzt5REFBVztRQVhULG1CQUFtQjtZQUYvQiwwQkFBTSxDQUFDLE9BQU8sRUFBRSxpQ0FBYSxDQUFDO1lBQzlCLDBCQUFNLEVBQUU7O1dBQ0ksbUJBQW1CLENBNlAvQjtRQUFELDBCQUFDO0tBN1BELEFBNlBDLElBQUE7SUE3UFksa0RBQW1CIiwiZmlsZSI6ImNoYXJ0cy9kdWFsLXN0YWNrZWQtYmFyLWNoYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgeyBpbmplY3QsIG5vVmlldywgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBCaW5kaW5nRW5naW5lIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEVsZW1lbnQsIEJpbmRpbmdFbmdpbmUpXG5Abm9WaWV3KClcbmV4cG9ydCBjbGFzcyBkdWFsU3RhY2tlZEJhckNoYXJ0IHtcbiAgLy8gT25lLVdheVxuICBAYmluZGFibGUgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogNjAsIGJvdHRvbTogMzUsIGxlZnQ6IDYwLCBtaWRkbGU6IDIwIH07XG4gIEBiaW5kYWJsZSB4X2F0dHJpYnV0ZSA9IFwieFwiO1xuICBAYmluZGFibGUgeV9hdHRyaWJ1dGUgPSBcInlcIjtcbiAgQGJpbmRhYmxlIHJlZHJhdyA9IDA7XG5cbiAgLy8gVHdvLVdheVxuICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBicnVzaGluZztcblxuICAvLyBPYnNlcnZlZCBWYXJpYWJsZXNcbiAgQGJpbmRhYmxlIGRhdGEgPSBbXTtcblxuICAvLyBBdXJlbGlhIHZhcmlhYmxlc1xuICBwcml2YXRlIGVsZW1lbnQ7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHJlc2l6ZV9zdWI7XG5cbiAgLy8gRDMgdmFyaWFibGVzXG4gIHByaXZhdGUgc3ZnO1xuICBwcml2YXRlIGJhcmNoYXJ0O1xuICBwcml2YXRlIHg7XG4gIHByaXZhdGUgeF9pbm5lcjtcbiAgcHJpdmF0ZSB5O1xuICBwcml2YXRlIHo7XG4gIHByaXZhdGUgel9pbm5lcjtcbiAgcHJpdmF0ZSBsZWdlbmQ7XG5cbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICBwcml2YXRlIHdpZHRoO1xuICBwcml2YXRlIGhlaWdodDtcbiAgcHJpdmF0ZSB4X3NpemUgPSA5MDA7XG4gIHByaXZhdGUgeV9zaXplID0gNTAwO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByaXZhdGUgYmluZGluZ0VuZ2luZSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICAvLyBUaGlzIGlzIGNhbGxlZCBhZnRlciBiaW5kaW5nIGF0dHJpYnV0ZXNcbiAgYXR0YWNoZWQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgLy8gc3Vic2NyaWJlIHRvIHRoZSBkYXRhIGFycmF5IGFuZCB3YXRjaCBmb3IgY2hhbmdlc1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmJpbmRpbmdFbmdpbmVcbiAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUoc3BsaWNlcyA9PiB0aGlzLmRhdGFNdXRhdGVkKHNwbGljZXMpKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2l6ZV9zdWIgPSB0aGlzLmJpbmRpbmdFbmdpbmVcbiAgICAgIC5wcm9wZXJ0eU9ic2VydmVyKHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LCBcIm9mZnNldFdpZHRoXCIpXG4gICAgICAuc3Vic2NyaWJlKG4gPT4gdGhpcy5yZXNpemUoKSlcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICB0aGlzLnhfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIHRoaXMueV9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgdGhpcy53aWR0aCA9IHRoaXMueF9zaXplIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy55X3NpemUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG5cbiAgICB0aGlzLmluaXRDaGFydCgpXG4gICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIHRoaXMueF9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy55X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuICAgIHRoaXMucmVzaXplQ2hhcnQoKTtcbiAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGNoYXJ0IGlmIHRoZSBkYXRhIGNoYW5nZXNcbiAgZGF0YU11dGF0ZWQoc3BsaWNlcykge1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5tZWRpa2FtZW50XCIpLnJlbW92ZSgpXG4gICAgfVxuICB9XG5cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICB0aGlzLnJlc2l6ZV9zdWIuZGlzcG9zZSgpO1xuICB9XG5cbiAgaW5pdENoYXJ0KCkge1xuICAgIC8vIENvbXBsZXRlIGRyYXdpbmcgYXJlYVxuICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHRoaXMuZWxlbWVudClcbiAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKTtcblxuICAgIC8vIExpbmVjaGFydCBhcmVhXG4gICAgdGhpcy5iYXJjaGFydCA9IHRoaXMuc3ZnXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsIFwiICsgdGhpcy5tYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB0aGlzLnggPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgLnBhZGRpbmcoMC4xKVxuICAgICAgLnJhbmdlKFswLCB0aGlzLndpZHRoXSk7XG4gICAgdGhpcy54X2lubmVyID0gZDMuc2NhbGVCYW5kKClcbiAgICAgIC5wYWRkaW5nKDAuMDUpXG4gICAgdGhpcy55ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuICAgIHRoaXMueiA9IGQzLnNjYWxlT3JkaW5hbCgpXG4gICAgICAucmFuZ2UoW1wiIzMzQ0E3RlwiICxcIiNFQ0U0QjdcIiwgXCIjRkM5RjVCXCJdKVxuICAgICAgLmRvbWFpbihbXCJCYXNpc1wiLCBcIlVWXCIsIFwiSUJEXCJdKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgdGhpcy5iYXJjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgdGhpcy5oZWlnaHQgKyBcIilcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4QXhpc1wiKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgdGhpcy5iYXJjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieUF4aXNcIilcblxuICAgIC8vIHkgYXhpcyBsYWJlbFxuICAgIHRoaXMuYmFyY2hhcnQuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgIC5hdHRyKFwieVwiLCAtNClcbiAgICAgIC50ZXh0KFwiS29zdGVuXCIpO1xuXG4gICAgLy8gYWRkIGxlZ2VuZFxuICAgIHRoaXMubGVnZW5kID0gdGhpcy5iYXJjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImZvbnQtZmFtaWx5XCIsIFwic2Fucy1zZXJpZlwiKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgMTApXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGVnZW5kXCIpO1xuICB9XG5cbiAgcmVzaXplQ2hhcnQoKSB7XG4gICAgdGhpcy5zdmdcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKTtcblxuICAgIC8vIExpbmVjaGFydCBhcmVhXG4gICAgdGhpcy5iYXJjaGFydFxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsIFwiICsgdGhpcy5tYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB0aGlzLnhcbiAgICAgIC5yYW5nZShbMCwgdGhpcy53aWR0aF0pO1xuICAgIHRoaXMueVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICB9XG5cbiAgdXBkYXRlQ2hhcnQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICBsZXQgdHlwZXMgPSBbXVxuICAgIGxldCBrZXlzID0gW11cbiAgICBsZXQgY29zdHMgPSBbXCJTdGFuZGFydFwiLCBcIk1heFwiXVxuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkgdHlwZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLmRhdGFbMF0pLnNsaWNlKDEpO1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkga2V5cyA9IFtcIkJhc2lzXCIsIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuZGF0YVswXVtcIlN0YW5kYXJ0XCJdKV07XG5cbiAgICBsZXQgdG90YWxzID0gdGhpcy5kYXRhLm1hcCh4ID0+IHtcbiAgICAgIGxldCBzID0geyBrZXk6IHgueCwgdmFsdWU6IDAgfTtcbiAgICAgIGtleXMuZm9yRWFjaCh5ID0+IHtcbiAgICAgICAgcy52YWx1ZSA9IHMudmFsdWUgKyAreFt5XTtcbiAgICAgIH0pXG4gICAgICByZXR1cm4gcztcbiAgICB9KVxuXG4gICAgdGhpcy54LmRvbWFpbih0aGlzLmRhdGEubWFwKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueDsgfSkpO1xuICAgIHRoaXMueF9pbm5lci5kb21haW4oY29zdHMpLnJhbmdlUm91bmQoWzAsIHRoaXMueC5iYW5kd2lkdGgoKV0pO1xuICAgIHRoaXMueS5kb21haW4oWzAsIGQzLm1heCh0aGlzLmRhdGEsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIE9iamVjdC52YWx1ZXMoeyBCYXNpczogZFtcIkJhc2lzXCJdLCAuLi5kW1wiTWF4XCJdfSkucmVkdWNlKChhLCBiKSA9PiBhICsgYik7IH0pXSkubmljZSgpO1xuICAgIGxldCB0ID0gZDMudHJhbnNpdGlvbihcImRlZmF1bHRcIilcbiAgICAgIC5kdXJhdGlvbig1MDApO1xuXG4gICAgICB0aGlzLmJhcmNoYXJ0LnNlbGVjdEFsbChcIi5tZWRpa2FtZW50XCIpLnJlbW92ZSgpXG5cbiAgICAgIGxldCBjaGFydCA9IHRoaXMuYmFyY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtZWRpa2FtZW50XCIpXG4gICAgICAgIC5zZWxlY3RBbGwoXCJnXCIpXG4gICAgICAgIC5kYXRhKHRoaXMuZGF0YSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgc2VsZi54KGQueCkgKyBcIiwwKVwiOyB9KVxuICAgICAgICAuc2VsZWN0QWxsKFwiLmdyb3Vwc1wiKVxuICAgICAgICAuZGF0YShmdW5jdGlvbihkKSB7IHJldHVybiBjb3N0cy5tYXAoZnVuY3Rpb24oa2V5KSB7IHJldHVybiB7a2V5OiBrZXksIHZhbHVlOiB7IEJhc2lzOiBkLkJhc2lzLCAuLi5kW2tleV19IH19KTsgfSlcblxuICAgICAgbGV0IGdyb3VwcyA9IGNoYXJ0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBcInRyYW5zbGF0ZShcIiArIHNlbGYueF9pbm5lcihkLmtleSkgKyBcIiwwKVwiOyB9KVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZ3JvdXBzXCIpXG5cbiAgICAgIGxldCBiYXJzID0gZ3JvdXBzLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgICAgLmRhdGEoZnVuY3Rpb24oZCkgeyByZXR1cm4gZDMuc3RhY2soKS5rZXlzKGtleXMpKFtkLnZhbHVlXSk7IH0pXG5cbiAgICAgIGJhcnMuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgIC5hdHRyKFwieFwiLCAwKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHNlbGYueF9pbm5lci5iYW5kd2lkdGgoKSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueihkLmtleSk7IH0pXG4gICAgICAgIC5hdHRyKFwieVwiLCB0aGlzLmhlaWdodClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgMClcbiAgICAgICAgLm1lcmdlKGdyb3VwcykudHJhbnNpdGlvbih0KVxuICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi55KGRbMF1bMV0pOyB9KVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLnkoZFswXVswXSkgLSBzZWxmLnkoZFswXVsxXSk7IH0pXG5cbiAgICAgIGJhcnMuZW50ZXIoKS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLnhfaW5uZXIuYmFuZHdpZHRoKCkvMjsgfSlcbiAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueShPYmplY3QudmFsdWVzKGRbMF0uZGF0YSkucmVkdWNlKChhLCBiKSA9PiBhICsgYikpIC0gMzsgfSlcbiAgICAgICAgLnRleHQoZnVuY3Rpb24oZCkgeyByZXR1cm4gT2JqZWN0LnZhbHVlcyhkWzBdLmRhdGEpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpOyB9KVxuXG4gICAgICBjaGFydC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICB0aGlzLmJhcmNoYXJ0LnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueCkpO1xuXG4gICAgdGhpcy5iYXJjaGFydC5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpO1xuXG4gICAgLy8gSm9pblxuICAgIGxldCBsZWdlbmRfZ3JvdXAgPSB0aGlzLmxlZ2VuZFxuICAgICAgLnNlbGVjdEFsbChcImdcIilcbiAgICAgIC5kYXRhKGtleXMucmV2ZXJzZSgpLCB4ID0+IHgpXG5cbiAgICAvLyBFbnRlclxuICAgIGxldCBsZWdlbmRzID0gbGVnZW5kX2dyb3VwLmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXG4gICAgbGVnZW5kcy5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cihcInhcIiwgdGhpcy53aWR0aCAtIDE5KVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAxOSlcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDE5KVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIHRoaXMueik7XG5cbiAgICBsZWdlbmRzLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwieFwiLCB0aGlzLndpZHRoIC0gMjQpXG4gICAgICAuYXR0cihcInlcIiwgOS41KVxuICAgICAgLmF0dHIoXCJkeVwiLCBcIjAuMzJlbVwiKVxuICAgICAgLnRleHQoZnVuY3Rpb24oZCkgeyByZXR1cm4gZDsgfSk7XG5cbiAgICAvLyBVcGRhdGVcbiAgICBsZWdlbmRfZ3JvdXAubWVyZ2UobGVnZW5kcykuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBcInRyYW5zbGF0ZSgwLFwiICsgaSAqIDIwICsgXCIpXCI7IH0pO1xuXG4gICAgLy8gRXhpdFxuICAgIGxlZ2VuZF9ncm91cC5leGl0KCkucmVtb3ZlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/dynamic-stacked-bar-chart',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dynamicStackedBarChart = (function () {
        function dynamicStackedBarChart(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.redraw = 0;
            this.data = [];
            this.x_size = 900;
            this.y_size = 500;
            this.element = element;
        }
        dynamicStackedBarChart.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.resize_sub = this.bindingEngine
                .propertyObserver(this.element.parentElement, "offsetWidth")
                .subscribe(function (n) { return _this.resize(); });
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.initChart();
            this.updateChart();
        };
        dynamicStackedBarChart.prototype.resize = function () {
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.resizeChart();
            this.updateChart();
        };
        dynamicStackedBarChart.prototype.dataMutated = function (splices) {
            if (this.data.length > 0) {
                this.updateChart();
            }
            else {
                this.svg.selectAll(".medikament").remove();
            }
        };
        dynamicStackedBarChart.prototype.unbind = function () {
            this.subscription.dispose();
            this.resize_sub.dispose();
        };
        dynamicStackedBarChart.prototype.initChart = function () {
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.barchart = this.svg
                .append("g")
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x = d3.scaleBand()
                .padding(0.1)
                .range([0, this.width]);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.z = d3.scaleOrdinal()
                .range(["#33CA7F", "#ECE4B7", "#FC9F5B"]);
            this.barchart.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.barchart.append("g")
                .attr("class", "yAxis");
            this.barchart.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .text("Kosten");
            this.format = d3.format(",.2f");
        };
        dynamicStackedBarChart.prototype.resizeChart = function () {
            this.svg
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.barchart
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x
                .range([0, this.width]);
            this.y
                .range([this.height, 0]);
            this.barchart.append("g")
                .attr("transform", "translate(0," + this.height + ")");
        };
        dynamicStackedBarChart.prototype.updateChart = function () {
            var _this = this;
            var self = this;
            var keys = [];
            var elements = [];
            var colors = new Map();
            keys = Array.from(new Set(self.data.map(function (item) { return item.x; })));
            keys.forEach(function (k) {
                elements = Object.getOwnPropertyNames(_this.data[0]).slice(1);
            });
            if (this.data.length > 0)
                keys = Object.getOwnPropertyNames(this.data[0]).slice(1);
            var totals = this.data.map(function (x) {
                var s = { key: x.x, value: 0 };
                keys = Object.getOwnPropertyNames(x).slice(1);
                keys.forEach(function (y) {
                    s.value = s.value + +x[y];
                });
                return s;
            });
            this.x.domain(this.data.map(function (d) { return d.x; }));
            this.y.domain([0, d3.max(totals, function (x) { return x.value; })]).nice();
            this.z.domain(keys);
            var t = d3.transition("default")
                .duration(500);
            var stacks = [];
            this.data.forEach(function (d) {
                keys = Object.getOwnPropertyNames(d).slice(1);
                stacks.push({ key: d.x, stack: d3.stack().keys(keys)([d]) });
                var c = d3.scaleOrdinal()
                    .range(["#33CA7F", "#ECE4B7", "#FC9F5B"])
                    .domain(keys);
                colors.set(d.x, c);
            });
            var stack = d3.stack().keys(keys)(self.data);
            this.barchart.selectAll(".medikament").remove();
            var chart = this.barchart.selectAll(".medikament")
                .data(stacks, function (x) { return x.key; });
            var bars = chart.enter().append("g")
                .attr("class", "medikament");
            bars.selectAll("rect")
                .data(function (d) { return d.stack; })
                .enter().append("rect")
                .attr("x", function (d) { return self.x(d[0].data.x); })
                .attr("width", self.x.bandwidth())
                .attr("y", this.height)
                .attr("height", 0);
            bars.selectAll("rect")
                .transition(t)
                .attr("y", function (d) { return self.y(d[0][1]); })
                .attr("height", function (d) { return self.y(d[0][0]) - self.y(d[0][1]); })
                .attr("fill", function (d) { return colors.get(d[0].data.x)(d.key); });
            bars.selectAll("text")
                .data(function (d) { return d.stack; })
                .enter().append("text")
                .style("text-anchor", "middle")
                .style("fill", "black")
                .attr("x", function (d) { return self.x(d[0].data.x) + self.x.bandwidth() / 2; })
                .attr("y", function (d) { return self.y(d[0][1] + (d[0][0] - d[0][1]) / 2) + 5; })
                .text(function (d) { return d.key + " (" + self.format(100 / d3.sum(Object.values(d[0].data).slice(1)) * d[0].data[d.key]) + "%)"; });
            chart.exit().remove();
            var labels = this.barchart.selectAll(".labels")
                .data(totals, function (x) { return x.key; });
            labels.enter().append("text")
                .attr("class", "labels")
                .style("text-anchor", "middle")
                .merge(labels)
                .attr("x", function (d) { return self.x(d.key) + self.x.bandwidth() / 2; })
                .attr("y", function (d) { return self.y(d.value) - 3; })
                .text(function (d) { return d.value; });
            labels.exit().remove();
            this.barchart.selectAll(".xAxis")
                .attr("transform", "translate(0," + this.height + ")")
                .call(d3.axisBottom(this.x));
            this.barchart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dynamicStackedBarChart.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dynamicStackedBarChart.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dynamicStackedBarChart.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dynamicStackedBarChart.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], dynamicStackedBarChart.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dynamicStackedBarChart.prototype, "data", void 0);
        dynamicStackedBarChart = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], dynamicStackedBarChart);
        return dynamicStackedBarChart;
    }());
    exports.dynamicStackedBarChart = dynamicStackedBarChart;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9keW5hbWljLXN0YWNrZWQtYmFyLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUtBO1FBZ0NFLGdDQUFZLE9BQU8sRUFBVSxhQUFhO1lBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7WUE5QmhDLFdBQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2xFLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLFdBQU0sR0FBRyxDQUFDLENBQUM7WUFNWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1lBa0JaLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBR25CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7UUFHRCx5Q0FBUSxHQUFSO1lBQUEsaUJBcUJDO1lBcEJDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUVkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWE7cUJBQ25DLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7cUJBQzdCLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztZQUNyRCxDQUFDO1lBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYTtpQkFDakMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO2lCQUMzRCxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFF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QUFDLENBQUMsU0FBUyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM1RSxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzVFLElBQUksQ0FBQyxVQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFFLElBQUksQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFBO1lBR3ZJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUd0QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7aUJBQzVDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxFQUFMLENBQUssQ0FBQyxDQUFBO1lBRTNCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUMxQixJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztpQkFDdkIsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7aUJBQzVCLEtBQUssQ0FBQyxNQUFNLENBQUM7aUJBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZFLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBUyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdEQsSUFBSSxDQUFDLFVBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFFeEMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXZCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztpQkFDOUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7aUJBQ3JELElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRS9CLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztpQkFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHL0IsQ0FBQztRQS9QUztZQUFULDRCQUFROzs4REFBbUU7UUFDbEU7WUFBVCw0QkFBUTs7bUVBQW1CO1FBQ2xCO1lBQVQsNEJBQVE7O21FQUFtQjtRQUNsQjtZQUFULDRCQUFROzs4REFBWTtRQUdpQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Z0VBQVU7UUFHckQ7WUFBVCw0QkFBUTs7NERBQVc7UUFYVCxzQkFBc0I7WUFGbEMsMEJBQU0sQ0FBQyxPQUFPLEVBQUUsaUNBQWEsQ0FBQztZQUM5QiwwQkFBTSxFQUFFOztXQUNJLHNCQUFzQixDQWtRbEM7UUFBRCw2QkFBQztLQWxRRCxBQWtRQyxJQUFBO0lBbFFZLHdEQUFzQiIsImZpbGUiOiJjaGFydHMvZHluYW1pYy1zdGFja2VkLWJhci1jaGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgaW5qZWN0LCBub1ZpZXcsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgQmluZGluZ0VuZ2luZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50LCBCaW5kaW5nRW5naW5lKVxuQG5vVmlldygpXG5leHBvcnQgY2xhc3MgZHluYW1pY1N0YWNrZWRCYXJDaGFydCB7XG4gIC8vIE9uZS1XYXlcbiAgQGJpbmRhYmxlIG1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDYwLCBib3R0b206IDM1LCBsZWZ0OiA2MCwgbWlkZGxlOiAyMCB9O1xuICBAYmluZGFibGUgeF9hdHRyaWJ1dGUgPSBcInhcIjtcbiAgQGJpbmRhYmxlIHlfYXR0cmlidXRlID0gXCJ5XCI7XG4gIEBiaW5kYWJsZSByZWRyYXcgPSAwO1xuXG4gIC8vIFR3by1XYXlcbiAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgYnJ1c2hpbmc7XG5cbiAgLy8gT2JzZXJ2ZWQgVmFyaWFibGVzXG4gIEBiaW5kYWJsZSBkYXRhID0gW107XG5cbiAgLy8gQXVyZWxpYSB2YXJpYWJsZXNcbiAgcHJpdmF0ZSBlbGVtZW50O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSByZXNpemVfc3ViO1xuXG4gIC8vIEQzIHZhcmlhYmxlc1xuICBwcml2YXRlIHN2ZztcbiAgcHJpdmF0ZSBiYXJjaGFydDtcbiAgcHJpdmF0ZSB4O1xuICBwcml2YXRlIHk7XG4gIHByaXZhdGUgejtcbiAgcHJpdmF0ZSBmb3JtYXQ7XG5cbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICBwcml2YXRlIHdpZHRoO1xuICBwcml2YXRlIGhlaWdodDtcbiAgcHJpdmF0ZSB4X3NpemUgPSA5MDA7XG4gIHByaXZhdGUgeV9zaXplID0gNTAwO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByaXZhdGUgYmluZGluZ0VuZ2luZSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICAvLyBUaGlzIGlzIGNhbGxlZCBhZnRlciBiaW5kaW5nIGF0dHJpYnV0ZXNcbiAgYXR0YWNoZWQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgLy8gc3Vic2NyaWJlIHRvIHRoZSBkYXRhIGFycmF5IGFuZCB3YXRjaCBmb3IgY2hhbmdlc1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmJpbmRpbmdFbmdpbmVcbiAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUoc3BsaWNlcyA9PiB0aGlzLmRhdGFNdXRhdGVkKHNwbGljZXMpKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2l6ZV9zdWIgPSB0aGlzLmJpbmRpbmdFbmdpbmVcbiAgICAgIC5wcm9wZXJ0eU9ic2VydmVyKHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LCBcIm9mZnNldFdpZHRoXCIpXG4gICAgICAuc3Vic2NyaWJlKG4gPT4gdGhpcy5yZXNpemUoKSlcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICB0aGlzLnhfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIHRoaXMueV9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgdGhpcy53aWR0aCA9IHRoaXMueF9zaXplIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy55X3NpemUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG5cbiAgICB0aGlzLmluaXRDaGFydCgpXG4gICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIHRoaXMueF9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy55X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuICAgIHRoaXMucmVzaXplQ2hhcnQoKTtcbiAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGNoYXJ0IGlmIHRoZSBkYXRhIGNoYW5nZXNcbiAgZGF0YU11dGF0ZWQoc3BsaWNlcykge1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5tZWRpa2FtZW50XCIpLnJlbW92ZSgpXG4gICAgfVxuICB9XG5cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICB0aGlzLnJlc2l6ZV9zdWIuZGlzcG9zZSgpO1xuICB9XG5cbiAgaW5pdENoYXJ0KCkge1xuICAgIC8vIENvbXBsZXRlIGRyYXdpbmcgYXJlYVxuICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHRoaXMuZWxlbWVudClcbiAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKTtcblxuICAgIC8vIExpbmVjaGFydCBhcmVhXG4gICAgdGhpcy5iYXJjaGFydCA9IHRoaXMuc3ZnXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsIFwiICsgdGhpcy5tYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB0aGlzLnggPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgLnBhZGRpbmcoMC4xKVxuICAgICAgLnJhbmdlKFswLCB0aGlzLndpZHRoXSk7XG4gICAgdGhpcy55ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuICAgIHRoaXMueiA9IGQzLnNjYWxlT3JkaW5hbCgpXG4gICAgICAucmFuZ2UoW1wiIzMzQ0E3RlwiICxcIiNFQ0U0QjdcIiwgXCIjRkM5RjVCXCJdKVxuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInhBeGlzXCIpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5QXhpc1wiKVxuXG4gICAgLy8geSBheGlzIGxhYmVsXG4gICAgdGhpcy5iYXJjaGFydC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgLnRleHQoXCJLb3N0ZW5cIik7XG5cbiAgICAvLyBUZXh0IGZvcm1hdFxuICAgIHRoaXMuZm9ybWF0ID0gZDMuZm9ybWF0KFwiLC4yZlwiKVxuICB9XG5cbiAgcmVzaXplQ2hhcnQoKSB7XG4gICAgdGhpcy5zdmdcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKTtcblxuICAgIC8vIExpbmVjaGFydCBhcmVhXG4gICAgdGhpcy5iYXJjaGFydFxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsIFwiICsgdGhpcy5tYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB0aGlzLnhcbiAgICAgIC5yYW5nZShbMCwgdGhpcy53aWR0aF0pO1xuICAgIHRoaXMueVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICB9XG4gIHVwZGF0ZUNoYXJ0KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgbGV0IGtleXMgPSBbXVxuICAgIGxldCBlbGVtZW50cyA9IFtdXG4gICAgbGV0IGNvbG9ycyA9IG5ldyBNYXAoKVxuICAgIC8vIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuZGF0YVswXSkuc2xpY2UoMSk7XG4gICAga2V5cyA9ICBBcnJheS5mcm9tKG5ldyBTZXQoc2VsZi5kYXRhLm1hcChpdGVtID0+IGl0ZW0ueCkpKTtcblxuICAgIGtleXMuZm9yRWFjaChrID0+IHtcbiAgICAgIGVsZW1lbnRzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5kYXRhWzBdKS5zbGljZSgxKTtcbiAgICB9KVxuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuZGF0YVswXSkuc2xpY2UoMSk7XG5cbiAgICBsZXQgdG90YWxzID0gdGhpcy5kYXRhLm1hcCh4ID0+IHtcbiAgICAgIGxldCBzID0geyBrZXk6IHgueCwgdmFsdWU6IDAgfTtcbiAgICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh4KS5zbGljZSgxKTtcblxuICAgICAga2V5cy5mb3JFYWNoKHkgPT4ge1xuICAgICAgICBzLnZhbHVlID0gcy52YWx1ZSArICt4W3ldO1xuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHM7XG4gICAgfSlcblxuICAgIHRoaXMueC5kb21haW4odGhpcy5kYXRhLm1hcChmdW5jdGlvbihkKSB7IHJldHVybiBkLng7IH0pKTtcbiAgICB0aGlzLnkuZG9tYWluKFswLCBkMy5tYXgodG90YWxzLCB4ID0+IHgudmFsdWUpXSkubmljZSgpO1xuICAgIHRoaXMuei5kb21haW4oa2V5cyk7XG5cbiAgICBsZXQgdCA9IGQzLnRyYW5zaXRpb24oXCJkZWZhdWx0XCIpXG4gICAgICAuZHVyYXRpb24oNTAwKTtcblxuICAgIGxldCBzdGFja3MgPSBbXVxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGQpLnNsaWNlKDEpO1xuICAgICAgc3RhY2tzLnB1c2goe2tleTogZC54LCBzdGFjazogZDMuc3RhY2soKS5rZXlzKGtleXMpKFtkXSl9KTtcblxuICAgICAgbGV0IGMgPSBkMy5zY2FsZU9yZGluYWwoKVxuICAgICAgICAucmFuZ2UoW1wiIzMzQ0E3RlwiICxcIiNFQ0U0QjdcIiwgXCIjRkM5RjVCXCJdKVxuICAgICAgICAuZG9tYWluKGtleXMpXG5cbiAgICAgIGNvbG9ycy5zZXQoZC54LCBjKVxuICAgIH0pXG5cbiAgICBsZXQgc3RhY2sgPSBkMy5zdGFjaygpLmtleXMoa2V5cykoc2VsZi5kYXRhKVxuXG4gICAgLy8gRGVsZXRlIGFsbCBiYXJzIGJlZm9yZSByZXJlbmRlcmluZyB0aGVtXG4gICAgdGhpcy5iYXJjaGFydC5zZWxlY3RBbGwoXCIubWVkaWthbWVudFwiKS5yZW1vdmUoKVxuXG4gICAgLy8gSm9pblxuICAgIGxldCBjaGFydCA9IHRoaXMuYmFyY2hhcnQuc2VsZWN0QWxsKFwiLm1lZGlrYW1lbnRcIilcbiAgICAgIC5kYXRhKHN0YWNrcywgeCA9PiB4LmtleSlcblxuICAgIC8vIEVudGVyXG4gICAgbGV0IGJhcnMgPSBjaGFydC5lbnRlcigpLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtZWRpa2FtZW50XCIpXG5cbiAgICBiYXJzLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgICAgICAgICAuZGF0YShmdW5jdGlvbihkKSB7IHJldHVybiBkLnN0YWNrOyB9KVxuICAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLngoZFswXS5kYXRhLngpOyB9KVxuICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBzZWxmLnguYmFuZHdpZHRoKCkpXG4gICAgICAgICAgICAgICAuYXR0cihcInlcIiwgdGhpcy5oZWlnaHQpXG4gICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCAwKVxuXG4gICAgLy8gVXBkYXRlXG4gICAgYmFycy5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAudHJhbnNpdGlvbih0KVxuICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueShkWzBdWzFdKTsgfSlcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueShkWzBdWzBdKSAtIHNlbGYueShkWzBdWzFdKTsgfSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBjb2xvcnMuZ2V0KGRbMF0uZGF0YS54KShkLmtleSk7IH0pXG5cbiAgICBiYXJzLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgICAuZGF0YShmdW5jdGlvbihkKSB7IHJldHVybiBkLnN0YWNrOyB9KVxuICAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiYmxhY2tcIilcbiAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLngoZFswXS5kYXRhLngpICtzZWxmLnguYmFuZHdpZHRoKCkvMjsgfSlcbiAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLnkoZFswXVsxXSsoZFswXVswXSAtIGRbMF1bMV0pLzIpICsgNTsgfSlcbiAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQua2V5ICsgXCIgKFwiKyBzZWxmLmZvcm1hdCgxMDAvZDMuc3VtKE9iamVjdC52YWx1ZXMoZFswXS5kYXRhKS5zbGljZSgxKSkqZFswXS5kYXRhW2Qua2V5XSkgK1wiJSlcIn0pXG5cbiAgICAvLyBFeGl0XG4gICAgY2hhcnQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgLy8gQWRkIHRleHRzXG4gICAgbGV0IGxhYmVscyA9IHRoaXMuYmFyY2hhcnQuc2VsZWN0QWxsKFwiLmxhYmVsc1wiKVxuICAgICAgLmRhdGEodG90YWxzLCB4ID0+IHgua2V5KVxuXG4gICAgbGFiZWxzLmVudGVyKCkuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsc1wiKVxuICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLm1lcmdlKGxhYmVscylcbiAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLngoZC5rZXkpICsgc2VsZi54LmJhbmR3aWR0aCgpLzI7IH0pXG4gICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi55KGQudmFsdWUpIC0gMzsgfSlcbiAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudmFsdWU7IH0pXG5cbiAgICBsYWJlbHMuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5iYXJjaGFydC5zZWxlY3RBbGwoXCIueEF4aXNcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLngpKTtcblxuICAgIHRoaXMuYmFyY2hhcnQuc2VsZWN0QWxsKFwiLnlBeGlzXCIpXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnkpKTtcblxuXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/line-chart-focus',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LineChartFocus = (function () {
        function LineChartFocus(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.redraw = 0;
            this.data = [];
            this.x_size = 900;
            this.y_size = 500;
            this.lc_width = 50;
            this.lc_height = 500;
            this.focus_width = 50;
            this.focus_height = 500;
            this.focus_offset = 100;
            this.element = element;
        }
        LineChartFocus.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.lc_width = this.width * 0.8;
            this.focus_width = this.width * 0.2 - this.margin.left;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.lc_height = this.y_size - this.margin.top - this.margin.bottom;
            this.focus_height = this.y_size - this.margin.top - this.margin.bottom;
            this.focus_offset = this.lc_width + this.margin.middle + this.margin.left;
            this.initChart();
            this.updateChart();
        };
        LineChartFocus.prototype.dataMutated = function (splices) {
            if (this.data.length > 1) {
                this.updateChart();
            }
            else {
                this.svg.selectAll(".line").remove();
                this.focus.selectAll(".bar").remove();
            }
        };
        LineChartFocus.prototype.redrawChanged = function () {
            if (this.data.length > 1) {
                this.updateHighlight();
            }
        };
        LineChartFocus.prototype.unbind = function () {
            this.subscription.dispose();
        };
        LineChartFocus.prototype.initChart = function () {
            var _this = this;
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.linechart = this.svg
                .append("g")
                .attr("width", this.lc_width)
                .attr("height", this.lc_height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.focus = this.svg
                .append("g")
                .attr("transform", "translate(" + this.focus_offset + ", " + this.margin.top + ")");
            this.x = d3.scaleLinear()
                .range([0, this.lc_width]);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.focus_x = d3.scaleLinear()
                .range([0, this.focus_width]);
            this.linechart.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.linechart.append("text")
                .style("text-anchor", "middle")
                .attr("y", this.height + 26)
                .attr("x", this.width / 2)
                .text("days");
            this.focus.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.focus.append("text")
                .style("text-anchor", "middle")
                .attr("y", this.height + 26)
                .attr("x", this.width / 2)
                .text("day");
            this.linechart.append("g")
                .attr("class", "yAxis");
            this.linechart.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .text(function (d) { return _this.y_attribute; });
            this.focus.append("g")
                .attr("transform", "translate(" + this.focus_width + ", 0)")
                .attr("class", "yAxis");
            this.focus.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .attr("x", this.focus_width)
                .text(function (d) { return _this.y_attribute; });
            this.valueline = d3.line()
                .x(function (d) { return _this.x(d[_this.x_attribute]); })
                .y(function (d) { return _this.y(d[_this.y_attribute]); });
            var y_attribute = this.y_attribute;
            this.focus.append("g")
                .attr("class", "brush")
                .call(d3.brushY()
                .extent([[0, 0], [this.focus_width, this.focus_height]])
                .on("brush", function (e) {
                if (!d3.event.sourceEvent)
                    return;
                if (!d3.event.selection) {
                    _this.brushing = [];
                    return;
                }
                ;
                var extent = d3.event.selection.map(_this.y.invert);
                var out = [];
                _this.linechart.selectAll(".line")
                    .filter(function (d) {
                    if (d["data"][d["data"].length - 1][y_attribute] >= extent[1] && d["data"][d["data"].length - 1][y_attribute] <= extent[0]) {
                        out.push(d["id"]);
                    }
                });
                _this.brushing = out;
            })
                .on("end", function (e) {
                if (!d3.event.sourceEvent)
                    return;
                if (!d3.event.selection) {
                    _this.brushing = [];
                    return;
                }
                ;
                var extent = d3.event.selection.map(_this.y.invert);
                var out = [];
                _this.linechart.selectAll(".line")
                    .filter(function (d) {
                    if (d["data"][d["data"].length - 1][y_attribute] >= extent[1] && d["data"][d["data"].length - 1][y_attribute] <= extent[0]) {
                        out.push(d["id"]);
                    }
                });
                _this.brushing = out;
            }));
        };
        LineChartFocus.prototype.updateHighlight = function () {
            this.linechart.selectAll("path.line")
                .classed("highlight", function (d) {
                if (d["highlight"] == 1) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .classed("background", function (d) {
                if (d["highlight"] == 2) {
                    return true;
                }
                else {
                    return false;
                }
            });
            this.linechart.selectAll("path.line.highlight").moveToFront();
        };
        LineChartFocus.prototype.updateChart = function () {
            var _this = this;
            var x_max = d3.max(this.data, function (array) { return d3.max(array["data"], function (d) { return d[_this.x_attribute]; }); });
            var y_max = d3.max(this.data, function (array) { return d3.max(array["data"], function (d) { return d[_this.y_attribute]; }); });
            var x_min = d3.min(this.data, function (array) { return d3.min(array["data"], function (d) { return d[_this.x_attribute]; }); });
            var y_min = d3.min(this.data, function (array) { return d3.min(array["data"], function (d) { return d[_this.y_attribute]; }); });
            var focus_data = [];
            this.data.forEach(function (d) {
                focus_data.push(d["data"][d["data"].length - 1]);
            });
            this.x.domain([x_min, x_max]);
            this.y.domain([y_min, y_max]);
            var bins = d3.histogram()
                .value(function (d) { return d[_this.y_attribute]; })
                .domain(this.y.domain())
                .thresholds(d3.range(y_min, y_max, (y_max - y_min) / 20))(focus_data);
            this.focus_x.domain([0, d3.max(bins, function (d) { return d.length; })]);
            this.linechart.selectAll("path.line").remove();
            var chart = this.linechart.selectAll("path.line")
                .data(this.data);
            this.focus.selectAll(".bar").remove();
            var focus_chart = this.focus.selectAll("rect.bars")
                .data(bins);
            this.linechart.selectAll(".xAxis")
                .call(d3.axisBottom(this.x));
            this.linechart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            this.focus.selectAll(".yAxis")
                .call(d3.axisRight(this.y));
            this.focus.selectAll(".xAxis")
                .call(d3.axisBottom(this.focus_x).ticks(2));
            chart.exit().remove();
            chart.enter()
                .append("path")
                .attr("class", "line")
                .classed("highlight", function (d) {
                if (d["highlight"] == 1) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .classed("background", function (d) {
                if (d["highlight"] == 2) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .attr("d", function (d) { return _this.valueline(d["data"]); });
            focus_chart.exit().remove();
            focus_chart.enter().append("rect")
                .attr("class", "bar")
                .attr("transform", function (d) {
                return "translate(0," + _this.y(d.x1) + ")";
            })
                .attr("width", function (d) { return _this.focus_x(d.length); })
                .attr("height", function (d) {
                return _this.y(d.x0) - _this.y(d.x1) - 1;
            })
                .moveToBack();
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartFocus.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartFocus.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartFocus.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartFocus.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], LineChartFocus.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartFocus.prototype, "data", void 0);
        LineChartFocus = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], LineChartFocus);
        return LineChartFocus;
    }());
    exports.LineChartFocus = LineChartFocus;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9saW5lLWNoYXJ0LWZvY3VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUtBO1FBdUNFLHdCQUFZLE9BQU8sRUFBVSxhQUFhO1lBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7WUFyQ2hDLFdBQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2xFLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLFdBQU0sR0FBRyxDQUFDLENBQUM7WUFNWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1lBb0JaLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsYUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNkLGNBQVMsR0FBRyxHQUFHLENBQUM7WUFDaEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7WUFDakIsaUJBQVksR0FBRyxHQUFHLENBQUM7WUFDbkIsaUJBQVksR0FBRyxHQUFHLENBQUM7WUFHekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztRQUdELGlDQUFRLEdBQVI7WUFBQSxpQkF3QkM7WUF2QkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBRWQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYTtxQkFDbkMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDN0IsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1lBQ25ELENBQUM7WUFHSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FB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TSxFQUFFOztXQUNJLGNBQWMsQ0F5VDFCO1FBQUQscUJBQUM7S0F6VEQsQUF5VEMsSUFBQTtJQXpUWSx3Q0FBYyIsImZpbGUiOiJjaGFydHMvbGluZS1jaGFydC1mb2N1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHtpbmplY3QsIG5vVmlldywgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBCaW5kaW5nRW5naW5lfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudCwgQmluZGluZ0VuZ2luZSlcbkBub1ZpZXcoKVxuZXhwb3J0IGNsYXNzIExpbmVDaGFydEZvY3VzIHtcbiAgLy8gT25lLVdheVxuICBAYmluZGFibGUgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogNjAsIGJvdHRvbTogMzUsIGxlZnQ6IDYwLCBtaWRkbGU6IDIwIH07XG4gIEBiaW5kYWJsZSB4X2F0dHJpYnV0ZSA9IFwieFwiO1xuICBAYmluZGFibGUgeV9hdHRyaWJ1dGUgPSBcInlcIjtcbiAgQGJpbmRhYmxlIHJlZHJhdyA9IDA7XG5cbiAgLy8gVHdvLVdheVxuICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBicnVzaGluZztcblxuICAvLyBPYnNlcnZlZCBWYXJpYWJsZXNcbiAgQGJpbmRhYmxlIGRhdGEgPSBbXTtcblxuICAvLyBBdXJlbGlhIHZhcmlhYmxlc1xuICBwcml2YXRlIGVsZW1lbnQ7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuXG4gIC8vIEQzIHZhcmlhYmxlc1xuICBwcml2YXRlIHN2ZztcbiAgcHJpdmF0ZSBsaW5lY2hhcnQ7XG4gIHByaXZhdGUgZm9jdXM7XG4gIHByaXZhdGUgeDtcbiAgcHJpdmF0ZSB5O1xuICBwcml2YXRlIGZvY3VzX3g7XG4gIHByaXZhdGUgdmFsdWVsaW5lO1xuICBwcml2YXRlIGhpc3RvZ3JhbTtcbiAgcHJpdmF0ZSBicnVzaDtcblxuICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gIHByaXZhdGUgd2lkdGg7XG4gIHByaXZhdGUgaGVpZ2h0O1xuICBwcml2YXRlIHhfc2l6ZSA9IDkwMDtcbiAgcHJpdmF0ZSB5X3NpemUgPSA1MDA7XG4gIHByaXZhdGUgbGNfd2lkdGggPSA1MDtcbiAgcHJpdmF0ZSBsY19oZWlnaHQgPSA1MDA7XG4gIHByaXZhdGUgZm9jdXNfd2lkdGggPSA1MDtcbiAgcHJpdmF0ZSBmb2N1c19oZWlnaHQgPSA1MDA7XG4gIHByaXZhdGUgZm9jdXNfb2Zmc2V0ID0gMTAwO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByaXZhdGUgYmluZGluZ0VuZ2luZSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICAvLyBUaGlzIGlzIGNhbGxlZCBhZnRlciBiaW5kaW5nIGF0dHJpYnV0ZXNcbiAgYXR0YWNoZWQoKSB7XG4gICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byB0aGUgZGF0YSBhcnJheSBhbmQgd2F0Y2ggZm9yIGNoYW5nZXNcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmJpbmRpbmdFbmdpbmVcbiAgICAgICAgICAuY29sbGVjdGlvbk9ic2VydmVyKHRoaXMuZGF0YSlcbiAgICAgICAgICAuc3Vic2NyaWJlKHNwbGljZXMgPT4gdGhpcy5kYXRhTXV0YXRlZChzcGxpY2VzKSk7XG4gICAgICAgIH1cblxuICAgICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICAgICAgdGhpcy54X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIHRoaXMueV9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgICB0aGlzLmxjX3dpZHRoID0gdGhpcy53aWR0aCAqIDAuODtcbiAgICAgIHRoaXMuZm9jdXNfd2lkdGggPSB0aGlzLndpZHRoICogMC4yIC0gdGhpcy5tYXJnaW4ubGVmdDtcblxuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcbiAgICAgIHRoaXMubGNfaGVpZ2h0ID0gdGhpcy55X3NpemUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG4gICAgICB0aGlzLmZvY3VzX2hlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXG4gICAgICB0aGlzLmZvY3VzX29mZnNldCA9IHRoaXMubGNfd2lkdGggKyB0aGlzLm1hcmdpbi5taWRkbGUgKyB0aGlzLm1hcmdpbi5sZWZ0O1xuXG4gICAgICB0aGlzLmluaXRDaGFydCgpXG4gICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGNoYXJ0IGlmIHRoZSBkYXRhIGNoYW5nZXNcbiAgZGF0YU11dGF0ZWQoc3BsaWNlcykge1xuICAgICAgaWYodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZVwiKS5yZW1vdmUoKVxuICAgICAgICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwiLmJhclwiKS5yZW1vdmUoKVxuICAgICAgfVxuICB9XG5cbiAgcmVkcmF3Q2hhbmdlZCgpIHtcbiAgICAgIGlmKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVIaWdobGlnaHQoKTtcbiAgICAgIH1cbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIGluaXRDaGFydCgpIHtcbiAgICAvLyBDb21wbGV0ZSBkcmF3aW5nIGFyZWFcbiAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpXG4gICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSk7XG5cbiAgICAvLyBMaW5lY2hhcnQgYXJlYVxuICAgIHRoaXMubGluZWNoYXJ0ID0gdGhpcy5zdmdcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLmxjX3dpZHRoKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmxjX2hlaWdodClcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsIFwiKyB0aGlzLm1hcmdpbi50b3AgK1wiKVwiKTtcblxuICAgIHRoaXMuZm9jdXMgPSB0aGlzLnN2Z1xuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMuZm9jdXNfb2Zmc2V0ICsgXCIsIFwiKyB0aGlzLm1hcmdpbi50b3AgK1wiKVwiKTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdGhpcy54ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFswLCB0aGlzLmxjX3dpZHRoXSk7XG4gICAgdGhpcy55ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuXG4gICAgdGhpcy5mb2N1c194ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAucmFuZ2UoWzAsIHRoaXMuZm9jdXNfd2lkdGhdKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieEF4aXNcIik7XG5cbiAgICAgIC8vIHggYXhpcyBsYWJlbFxuICAgICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgLmF0dHIoXCJ5XCIsIHRoaXMuaGVpZ2h0KzI2KVxuICAgICAgICAgIC5hdHRyKFwieFwiLCB0aGlzLndpZHRoLzIpXG4gICAgICAgICAgLnRleHQoXCJkYXlzXCIpO1xuXG4gICAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgICAgdGhpcy5mb2N1cy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieEF4aXNcIik7XG5cbiAgICAgICAgLy8geCBheGlzIGxhYmVsXG4gICAgICAgIHRoaXMuZm9jdXMuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCB0aGlzLmhlaWdodCsyNilcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCB0aGlzLndpZHRoLzIpXG4gICAgICAgICAgICAudGV4dChcImRheVwiKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICAgIC8vIHkgYXhpcyBsYWJlbFxuICAgIHRoaXMubGluZWNoYXJ0LmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgICAudGV4dCgoZCkgPT4geyByZXR1cm4gdGhpcy55X2F0dHJpYnV0ZX0pO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB0aGlzLmZvY3VzLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiKyB0aGlzLmZvY3VzX3dpZHRoICtcIiwgMClcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5QXhpc1wiKVxuXG4gICAgICAvLyB5IGF4aXMgbGFiZWxcbiAgICB0aGlzLmZvY3VzLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgICAuYXR0cihcInhcIiwgdGhpcy5mb2N1c193aWR0aClcbiAgICAgICAgLnRleHQoKGQpID0+IHsgcmV0dXJuIHRoaXMueV9hdHRyaWJ1dGV9KTtcblxuICAgIC8vIGRlZmluZSB0aGUgbGluZVxuICAgIHRoaXMudmFsdWVsaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KChkKSA9PiB0aGlzLngoZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgICAgIC55KChkKSA9PiB0aGlzLnkoZFt0aGlzLnlfYXR0cmlidXRlXSkpO1xuXG4gICAgbGV0IHlfYXR0cmlidXRlID0gdGhpcy55X2F0dHJpYnV0ZVxuXG4gICAgdGhpcy5mb2N1cy5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYnJ1c2hcIilcbiAgICAgIC5jYWxsKFxuICAgICAgICAgIGQzLmJydXNoWSgpXG4gICAgICAgICAgLmV4dGVudChbWzAsIDBdLCBbdGhpcy5mb2N1c193aWR0aCwgdGhpcy5mb2N1c19oZWlnaHRdXSlcbiAgICAgICAgICAub24oXCJicnVzaFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWQzLmV2ZW50LnNvdXJjZUV2ZW50KSByZXR1cm47IC8vIE9ubHkgdHJhbnNpdGlvbiBhZnRlciBpbnB1dC5cbiAgICAgICAgICAgICAgaWYgKCFkMy5ldmVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYnJ1c2hpbmcgPSA8YW55PltdXG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH07IC8vIElnbm9yZSBlbXB0eSBzZWxlY3Rpb25zLlxuXG4gICAgICAgICAgICAgIGxldCBleHRlbnQgPSBkMy5ldmVudC5zZWxlY3Rpb24ubWFwKHRoaXMueS5pbnZlcnQpO1xuICAgICAgICAgICAgICBsZXQgb3V0ID0gPGFueT5bXVxuXG4gICAgICAgICAgICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcIi5saW5lXCIpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGRbXCJkYXRhXCJdW2RbXCJkYXRhXCJdLmxlbmd0aC0xXVt5X2F0dHJpYnV0ZV0gPj0gZXh0ZW50WzFdICYmIGRbXCJkYXRhXCJdW2RbXCJkYXRhXCJdLmxlbmd0aC0xXVt5X2F0dHJpYnV0ZV0gPD0gZXh0ZW50WzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQucHVzaChkW1wiaWRcIl0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIHRoaXMuYnJ1c2hpbmcgPSBvdXRcbiAgICAgIH0pXG4gICAgICAub24oXCJlbmRcIiwgKGUpID0+IHtcbiAgICAgICAgICBpZiAoIWQzLmV2ZW50LnNvdXJjZUV2ZW50KSByZXR1cm47IC8vIE9ubHkgdHJhbnNpdGlvbiBhZnRlciBpbnB1dC5cbiAgICAgICAgICBpZiAoIWQzLmV2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICB0aGlzLmJydXNoaW5nID0gPGFueT5bXVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfTsgLy8gSWdub3JlIGVtcHR5IHNlbGVjdGlvbnMuXG5cbiAgICAgICAgICBsZXQgZXh0ZW50ID0gZDMuZXZlbnQuc2VsZWN0aW9uLm1hcCh0aGlzLnkuaW52ZXJ0KTtcbiAgICAgICAgICBsZXQgb3V0ID0gPGFueT5bXVxuXG4gICAgICAgICAgdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwiLmxpbmVcIilcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgIGlmKGRbXCJkYXRhXCJdW2RbXCJkYXRhXCJdLmxlbmd0aC0xXVt5X2F0dHJpYnV0ZV0gPj0gZXh0ZW50WzFdICYmIGRbXCJkYXRhXCJdW2RbXCJkYXRhXCJdLmxlbmd0aC0xXVt5X2F0dHJpYnV0ZV0gPD0gZXh0ZW50WzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKGRbXCJpZFwiXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgdGhpcy5icnVzaGluZyA9IG91dFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlSGlnaGxpZ2h0KCkge1xuXG4gICAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCJwYXRoLmxpbmVcIilcbiAgICAgICAgICAuY2xhc3NlZChcImhpZ2hsaWdodFwiLCBmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICAgIGlmKGRbXCJoaWdobGlnaHRcIl0gPT0gMSkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2xhc3NlZChcImJhY2tncm91bmRcIiwgZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDIpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICAgICAgZWxzZSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcInBhdGgubGluZS5oaWdobGlnaHRcIikubW92ZVRvRnJvbnQoKTtcbiAgfVxuXG4gIHVwZGF0ZUNoYXJ0KCkge1xuICAgIC8vIFVwZGF0ZSBkb21haW5zXG4gICAgbGV0IHhfbWF4ID0gZDMubWF4KHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5tYXg8YW55LCBhbnk+KGFycmF5W1wiZGF0YVwiXSwgKGQpID0+IGRbdGhpcy54X2F0dHJpYnV0ZV0pKVxuICAgIGxldCB5X21heCA9IGQzLm1heCh0aGlzLmRhdGEsIChhcnJheSkgPT4gZDMubWF4PGFueSwgYW55PihhcnJheVtcImRhdGFcIl0sIChkKSA9PiBkW3RoaXMueV9hdHRyaWJ1dGVdKSlcbiAgICBsZXQgeF9taW4gPSBkMy5taW4odGhpcy5kYXRhLCAoYXJyYXkpID0+IGQzLm1pbjxhbnksIGFueT4oYXJyYXlbXCJkYXRhXCJdLCAoZCkgPT4gZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgbGV0IHlfbWluID0gZDMubWluKHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5taW48YW55LCBhbnk+KGFycmF5W1wiZGF0YVwiXSwgKGQpID0+IGRbdGhpcy55X2F0dHJpYnV0ZV0pKVxuXG4gICAgbGV0IGZvY3VzX2RhdGEgPSA8YW55PiBbXTtcblxuICAgICB0aGlzLmRhdGEuZm9yRWFjaCgoZDogYW55W10pID0+IHtcbiAgICAgICAgIGZvY3VzX2RhdGEucHVzaChkW1wiZGF0YVwiXVtkW1wiZGF0YVwiXS5sZW5ndGgtMV0pXG4gICAgIH0pXG5cbiAgICB0aGlzLnguZG9tYWluKFt4X21pbiwgeF9tYXhdKTtcbiAgICB0aGlzLnkuZG9tYWluKFt5X21pbiwgeV9tYXhdKTtcblxuICAgIC8vIGxldCBiaW5zID0gdGhpcy5oaXN0b2dyYW0oZm9jdXNfZGF0YSlcbiAgICBsZXQgYmlucyA9IGQzLmhpc3RvZ3JhbSgpXG4gICAgICAgIC52YWx1ZSgoZCkgPT4gZFt0aGlzLnlfYXR0cmlidXRlXSlcbiAgICAgICAgLmRvbWFpbih0aGlzLnkuZG9tYWluKCkpXG4gICAgICAgIC50aHJlc2hvbGRzKGQzLnJhbmdlKHlfbWluLCB5X21heCwgKHlfbWF4IC0geV9taW4pIC8gMjApKVxuICAgICAgICAoZm9jdXNfZGF0YSk7XG5cbiAgICB0aGlzLmZvY3VzX3guZG9tYWluKFswLCBkMy5tYXgoYmlucywgKGQ6IGFueVtdKSA9PiBkLmxlbmd0aCldKTtcblxuICAgIC8vIFNlbGVjdCBjaGFydFxuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcInBhdGgubGluZVwiKS5yZW1vdmUoKTtcbiAgICBsZXQgY2hhcnQgPSB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCJwYXRoLmxpbmVcIilcbiAgICAgICAgLmRhdGEodGhpcy5kYXRhKVxuXG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIuYmFyXCIpLnJlbW92ZSgpO1xuICAgIGxldCBmb2N1c19jaGFydCA9IHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwicmVjdC5iYXJzXCIpXG4gICAgICAgIC5kYXRhKGJpbnMpXG5cbiAgICAvLyBVcGRhdGUgYXhpc1xuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLngpKTtcbiAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpO1xuXG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgICAgLmNhbGwoZDMuYXhpc1JpZ2h0KHRoaXMueSkpO1xuICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwiLnhBeGlzXCIpXG4gICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy5mb2N1c194KS50aWNrcygyKSk7XG5cbiAgICAvLyBMaW5lY2hhcnRcbiAgICAvLyBSZW1vdmUgYmFyc1xuICAgIGNoYXJ0LmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIC8vIEFkZCBhbmQgdXBkYXRlIGJhcnNcbiAgICBjaGFydC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgIC5jbGFzc2VkKFwiaGlnaGxpZ2h0XCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDEpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB9KVxuICAgICAgLmNsYXNzZWQoXCJiYWNrZ3JvdW5kXCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDIpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiB0aGlzLnZhbHVlbGluZShkW1wiZGF0YVwiXSkpO1xuXG4gICAgLy8gQmFyY2hhcnRcbiAgICAvLyBSZW1vdmUgYmFyc1xuICAgIGZvY3VzX2NoYXJ0LmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIC8vIEFkZCBiYXJzXG4gICAgZm9jdXNfY2hhcnQuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgLy8gICAuYXR0cihcInhcIiwgMSlcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIChkKSA9PiB7XG5cdFx0ICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMueShkLngxKSArIFwiKVwiOyB9KVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAoZCkgPT4geyByZXR1cm4gIHRoaXMuZm9jdXNfeChkLmxlbmd0aCk7IH0pXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnkoZC54MCkgLSB0aGlzLnkoZC54MSkgLSAxO1xuICAgICAgfSlcbiAgICAgIC5tb3ZlVG9CYWNrKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/line-chart-gauss',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LineChartGauss = (function () {
        function LineChartGauss(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.x_label = "days";
            this.y_label = "y";
            this.redraw = 0;
            this.data = [];
            this.center = 1.0;
            this.weight = 1.0;
            this.x_size = 900;
            this.y_size = 500;
            this.lc_width = 50;
            this.lc_height = 500;
            this.focus_width = 50;
            this.focus_height = 500;
            this.focus_offset = 100;
            this.element = element;
        }
        LineChartGauss.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.lc_width = this.width * 0.8;
            this.focus_width = this.width * 0.2 - this.margin.left;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.lc_height = this.y_size - this.margin.top - this.margin.bottom;
            this.focus_height = this.y_size - this.margin.top - this.margin.bottom;
            this.focus_offset = this.lc_width + this.margin.middle + this.margin.left;
            this.initChart();
        };
        LineChartGauss.prototype.dataMutated = function (splices) {
            if (this.data.length > 1) {
                this.updateChart();
                this.focus.selectAll("path.focusline").remove();
            }
            else {
                this.svg.selectAll(".line").remove();
                this.focus.selectAll(".bar").remove();
                this.focus.selectAll("path.focusline").remove();
            }
        };
        LineChartGauss.prototype.redrawChanged = function () {
            if (this.data.length > 1) {
                this.updateHighlight();
            }
        };
        LineChartGauss.prototype.unbind = function () {
            this.subscription.dispose();
        };
        LineChartGauss.prototype.getGaussian = function () {
            var data = [];
            var rnd = d3.randomUniform(-3, 3);
            for (var i = 0; i < 5000; i++) {
                var q = rnd();
                var p = this.gaussian(q, this.gauss_y.invert(this.center), this.gauss_sigma(this.weight));
                var el = {
                    "y": q,
                    "x": p
                };
                data.push(el);
            }
            ;
            this.gradientColor.domain([0, d3.max(data, function (x) { return x["x"]; })]);
            data.sort(function (a, b) { return (a.y > b.y) ? 1 : ((b.y > a.y) ? -1 : 0); });
            return data;
        };
        ;
        LineChartGauss.prototype.gaussian = function (x, mean, sigma) {
            var gaussianConstant = 1 / Math.sqrt(2 * Math.PI);
            x = (x - mean) / sigma;
            var g = gaussianConstant * Math.exp(-.5 * x * x) / sigma;
            if (g < 0.001)
                g = 0;
            return g;
        };
        LineChartGauss.prototype.initChart = function () {
            var _this = this;
            var self = this;
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.linechart = this.svg
                .append("g")
                .attr("width", this.lc_width)
                .attr("height", this.lc_height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.focus = this.svg
                .append("g")
                .attr("transform", "translate(" + this.focus_offset + ", " + this.margin.top + ")");
            this.focus
                .append("rect")
                .attr("width", this.focus_width)
                .attr("height", this.focus_height)
                .style("opacity", 0)
                .on("mousedown", function (d) {
                var out = new Map();
                self.center = self.y.invert(d3.mouse(this)[1]);
                self.weight = self.focus_x.invert(d3.mouse(this)[0]);
                self.updateGauss();
                self.data.forEach(function (d) {
                    out.set(d["id"], self.gradientColor(self.gaussian(self.gauss_y.invert(d.data[d.data.length - 1][self.y_attribute]), self.gauss_y.invert(self.center), self.gauss_sigma(self.weight))));
                });
                self.brushing = out;
                self.updateHighlight();
                self.mouse_event = d3.select(this)
                    .on("mousemove", function (d) {
                    var out = new Map();
                    self.center = self.y.invert(d3.mouse(this)[1]);
                    self.weight = self.focus_x.invert(d3.mouse(this)[0]);
                    self.updateGauss();
                    self.data.forEach(function (d) {
                        out.set(d["id"], self.gradientColor(self.gaussian(self.gauss_y.invert(d.data[d.data.length - 1][self.y_attribute]), self.gauss_y.invert(self.center), self.gauss_sigma(self.weight))));
                    });
                    self.brushing = out;
                    self.updateHighlight();
                })
                    .on("mouseup", function (d) {
                    self.mouse_event.on("mousemove", null).on("mouseup", null);
                });
            })
                .moveToFront();
            this.x = d3.scaleLinear()
                .range([0, this.lc_width]);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.focus_x = d3.scaleLinear()
                .range([0, this.focus_width]);
            this.gauss_x = d3.scaleLinear();
            this.gauss_y = d3.scaleLinear()
                .domain([-3, 3]);
            this.gauss_sigma = d3.scaleLinear()
                .range([0.1, 25])
                .domain([2, this.focus_width]);
            this.gauss_max_sigma = d3.scaleLinear()
                .range([50, 1])
                .domain([1, 100]);
            this.gradientColor = d3.scaleLinear()
                .range([0, 1]);
            this.linechart.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.linechart.append("text")
                .style("text-anchor", "middle")
                .attr("y", this.height + 26)
                .attr("x", this.width / 2)
                .text(this.x_label);
            this.focus.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.focus.append("text")
                .style("text-anchor", "middle")
                .attr("y", this.height + 26)
                .attr("x", this.width / 2)
                .text("day");
            this.linechart.append("g")
                .attr("class", "yAxis");
            this.linechart.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .text(this.y_label);
            this.focus.append("g")
                .attr("transform", "translate(" + this.focus_width + ", 0)")
                .attr("class", "yAxis");
            this.focus.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .attr("x", this.focus_width)
                .text(function (d) { return _this.y_attribute; });
            this.valueline = d3.line()
                .x(function (d) { return _this.x(d[_this.x_attribute]); })
                .y(function (d) { return _this.y(d[_this.y_attribute]); });
            this.focusline = d3.line()
                .x(function (d) { return _this.focus_x(_this.gauss_x(d["x"])); })
                .y(function (d) { return _this.y(_this.gauss_y(d["y"])); });
            var y_attribute = this.y_attribute;
            this.linechart.selectAll(".xAxis")
                .call(d3.axisBottom(this.x));
            this.linechart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            this.focus.selectAll(".yAxis")
                .call(d3.axisRight(this.y));
            this.focus.selectAll(".xAxis")
                .call(d3.axisBottom(this.focus_x).ticks(2));
        };
        LineChartGauss.prototype.updateHighlight = function () {
            var self = this;
            this.linechart.selectAll("path.line")
                .attr("opacity", function (d) {
                return d["highlight"];
            });
            this.focus.selectAll("rect.bar")
                .attr("opacity", function (d) {
                return self.gradientColor(self.gaussian(self.gauss_y.invert(d.x0 + ((d.x1 - d.x0) / 2)), self.gauss_y.invert(self.center), self.gauss_sigma(self.weight)));
            });
        };
        LineChartGauss.prototype.updateGauss = function () {
            var _this = this;
            var line_data = this.getGaussian();
            this.gauss_x.range(this.focus_x.domain()).domain(d3.extent(line_data, function (d) { return d["x"]; }));
            this.focus.selectAll("path.focusline").remove();
            var focus_line = this.focus.selectAll("path.focusline")
                .data([line_data]);
            focus_line.exit().remove();
            focus_line.enter()
                .append("path")
                .attr("class", "focusline")
                .attr("d", function (d) { return _this.focusline(d); })
                .moveToFront();
        };
        LineChartGauss.prototype.updateChart = function () {
            var _this = this;
            var x_max = d3.max(this.data, function (array) { return d3.max(array["data"], function (d) { return d[_this.x_attribute]; }); });
            var y_max = d3.max(this.data, function (array) { return d3.max(array["data"], function (d) { return d[_this.y_attribute]; }); });
            var x_min = d3.min(this.data, function (array) { return d3.min(array["data"], function (d) { return d[_this.x_attribute]; }); });
            var y_min = d3.min(this.data, function (array) { return d3.min(array["data"], function (d) { return d[_this.y_attribute]; }); });
            var focus_data = [];
            this.data.forEach(function (d) {
                focus_data.push(d["data"][d["data"].length - 1]);
            });
            this.x.domain([x_min, x_max]);
            this.y.domain([y_min, y_max]);
            this.gauss_y.range(this.y.domain());
            var bins = d3.histogram()
                .value(function (d) { return d[_this.y_attribute]; })
                .domain(this.y.domain())
                .thresholds(d3.range(y_min, y_max, (y_max - y_min) / 20))(focus_data);
            this.focus_x.domain([0, d3.max(bins, function (d) { return d.length; })]);
            if (this.focus_x.domain()[1] > 100) {
                this.gauss_max_sigma.domain([1, this.focus_x.domain()[1]]);
            }
            this.gauss_sigma.range([0.1, this.gauss_max_sigma(this.focus_x.domain()[1])]);
            this.linechart.selectAll("path.line").remove();
            var chart = this.linechart.selectAll("path.line")
                .data(this.data);
            this.focus.selectAll(".bar").remove();
            var focus_chart = this.focus.selectAll("rect.bars")
                .data(bins);
            this.linechart.selectAll(".xAxis")
                .call(d3.axisBottom(this.x));
            this.linechart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            this.focus.selectAll(".yAxis")
                .call(d3.axisRight(this.y));
            this.focus.selectAll(".xAxis")
                .call(d3.axisBottom(this.focus_x).ticks(2));
            chart.exit().remove();
            chart.enter()
                .append("path")
                .attr("class", "line")
                .classed("highlight", function (d) {
                if (d["highlight"] == 1) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .classed("background", function (d) {
                if (d["highlight"] == 2) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .attr("d", function (d) { return _this.valueline(d["data"]); });
            focus_chart.exit().remove();
            focus_chart.enter().append("rect")
                .attr("class", "bar")
                .attr("transform", function (d) {
                return "translate(0," + _this.y(d.x1) + ")";
            })
                .attr("width", function (d) { return _this.focus_x(d.length); })
                .attr("height", function (d) {
                return _this.y(d.x0) - _this.y(d.x1) - 1;
            })
                .moveToBack();
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "x_label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "y_label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "data", void 0);
        LineChartGauss = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], LineChartGauss);
        return LineChartGauss;
    }());
    exports.LineChartGauss = LineChartGauss;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9saW5lLWNoYXJ0LWdhdXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUtBO1FBa0RFLHdCQUFZLE9BQU8sRUFBVSxhQUFhO1lBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7WUFoRGhDLFdBQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2xFLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLFlBQU8sR0FBRyxNQUFNLENBQUM7WUFDakIsWUFBTyxHQUFHLEdBQUcsQ0FBQztZQUNkLFdBQU0sR0FBRyxDQUFDLENBQUM7WUFNWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1lBdUJaLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBS2IsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixhQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2QsY0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztZQUNqQixpQkFBWSxHQUFHLEdBQUcsQ0FBQztZQUNuQixpQkFBWSxHQUFHLEdBQUcsQ0FBQztZQUd6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN6QixDQUFDO1FBR0QsaUNBQVEsR0FBUjtZQUFBLGlCQXVCQztZQXRCRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhO3FCQUNuQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUks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M0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUMsSUFBTyxNQUFNLENBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3pELElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0MsQ0FBQyxDQUFDO2lCQUNELFVBQVUsRUFBRSxDQUFDO1FBRWxCLENBQUM7UUFuYVM7WUFBVCw0QkFBUTs7c0RBQW1FO1FBQ2xFO1lBQVQsNEJBQVE7OzJEQUFtQjtRQUNsQjtZQUFULDRCQUFROzsyREFBbUI7UUFDbEI7WUFBVCw0QkFBUTs7dURBQWtCO1FBQ2pCO1lBQVQsNEJBQVE7O3VEQUFlO1FBQ2Q7WUFBVCw0QkFBUTs7c0RBQVk7UUFHaUM7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O3dEQUFVO1FBR3JEO1lBQVQsNEJBQVE7O29EQUFXO1FBYlQsY0FBYztZQUYxQiwwQkFBTSxDQUFDLE9BQU8sRUFBRSxpQ0FBYSxDQUFDO1lBQzlCLDBCQUFNLEVBQUU7O1dBQ0ksY0FBYyxDQXNhMUI7UUFBRCxxQkFBQztLQXRhRCxBQXNhQyxJQUFBO0lBdGFZLHdDQUFjIiwiZmlsZSI6ImNoYXJ0cy9saW5lLWNoYXJ0LWdhdXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQge2luamVjdCwgbm9WaWV3LCBiaW5kYWJsZSwgYmluZGluZ01vZGUsIEJpbmRpbmdFbmdpbmV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50LCBCaW5kaW5nRW5naW5lKVxuQG5vVmlldygpXG5leHBvcnQgY2xhc3MgTGluZUNoYXJ0R2F1c3Mge1xuICAvLyBPbmUtV2F5XG4gIEBiaW5kYWJsZSBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiA2MCwgYm90dG9tOiAzNSwgbGVmdDogNjAsIG1pZGRsZTogMjAgfTtcbiAgQGJpbmRhYmxlIHhfYXR0cmlidXRlID0gXCJ4XCI7XG4gIEBiaW5kYWJsZSB5X2F0dHJpYnV0ZSA9IFwieVwiO1xuICBAYmluZGFibGUgeF9sYWJlbCA9IFwiZGF5c1wiO1xuICBAYmluZGFibGUgeV9sYWJlbCA9IFwieVwiO1xuICBAYmluZGFibGUgcmVkcmF3ID0gMDtcblxuICAvLyBUd28tV2F5XG4gIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIGJydXNoaW5nO1xuXG4gIC8vIE9ic2VydmVkIFZhcmlhYmxlc1xuICBAYmluZGFibGUgZGF0YSA9IFtdO1xuXG4gIC8vIEF1cmVsaWEgdmFyaWFibGVzXG4gIHByaXZhdGUgZWxlbWVudDtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG5cbiAgLy8gRDMgdmFyaWFibGVzXG4gIHByaXZhdGUgbW91c2VfZXZlbnQ7XG4gIHByaXZhdGUgc3ZnO1xuICBwcml2YXRlIGxpbmVjaGFydDtcbiAgcHJpdmF0ZSBmb2N1cztcbiAgcHJpdmF0ZSB4O1xuICBwcml2YXRlIHk7XG4gIHByaXZhdGUgZm9jdXNfeDtcbiAgcHJpdmF0ZSBnYXVzc194O1xuICBwcml2YXRlIGdhdXNzX3k7XG4gIHByaXZhdGUgZ2F1c3Nfc2lnbWE7XG4gIHByaXZhdGUgZ2F1c3NfbWF4X3NpZ21hO1xuICBwcml2YXRlIGdyYWRpZW50Q29sb3I7XG4gIHByaXZhdGUgdmFsdWVsaW5lO1xuICBwcml2YXRlIGZvY3VzbGluZTtcbiAgcHJpdmF0ZSBoaXN0b2dyYW07XG4gIHByaXZhdGUgYnJ1c2g7XG4gIHByaXZhdGUgY2VudGVyID0gMS4wO1xuICBwcml2YXRlIHdlaWdodCA9IDEuMDtcblxuICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gIHByaXZhdGUgd2lkdGg7XG4gIHByaXZhdGUgaGVpZ2h0O1xuICBwcml2YXRlIHhfc2l6ZSA9IDkwMDtcbiAgcHJpdmF0ZSB5X3NpemUgPSA1MDA7XG4gIHByaXZhdGUgbGNfd2lkdGggPSA1MDtcbiAgcHJpdmF0ZSBsY19oZWlnaHQgPSA1MDA7XG4gIHByaXZhdGUgZm9jdXNfd2lkdGggPSA1MDtcbiAgcHJpdmF0ZSBmb2N1c19oZWlnaHQgPSA1MDA7XG4gIHByaXZhdGUgZm9jdXNfb2Zmc2V0ID0gMTAwO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByaXZhdGUgYmluZGluZ0VuZ2luZSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICAvLyBUaGlzIGlzIGNhbGxlZCBhZnRlciBiaW5kaW5nIGF0dHJpYnV0ZXNcbiAgYXR0YWNoZWQoKSB7XG4gICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byB0aGUgZGF0YSBhcnJheSBhbmQgd2F0Y2ggZm9yIGNoYW5nZXNcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmJpbmRpbmdFbmdpbmVcbiAgICAgICAgICAuY29sbGVjdGlvbk9ic2VydmVyKHRoaXMuZGF0YSlcbiAgICAgICAgICAuc3Vic2NyaWJlKHNwbGljZXMgPT4gdGhpcy5kYXRhTXV0YXRlZChzcGxpY2VzKSk7XG4gICAgICAgIH1cblxuICAgICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICAgICAgdGhpcy54X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIHRoaXMueV9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgICB0aGlzLmxjX3dpZHRoID0gdGhpcy53aWR0aCAqIDAuODtcbiAgICAgIHRoaXMuZm9jdXNfd2lkdGggPSB0aGlzLndpZHRoICogMC4yIC0gdGhpcy5tYXJnaW4ubGVmdDtcblxuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcbiAgICAgIHRoaXMubGNfaGVpZ2h0ID0gdGhpcy55X3NpemUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG4gICAgICB0aGlzLmZvY3VzX2hlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXG4gICAgICB0aGlzLmZvY3VzX29mZnNldCA9IHRoaXMubGNfd2lkdGggKyB0aGlzLm1hcmdpbi5taWRkbGUgKyB0aGlzLm1hcmdpbi5sZWZ0O1xuXG4gICAgICB0aGlzLmluaXRDaGFydCgpXG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGNoYXJ0IGlmIHRoZSBkYXRhIGNoYW5nZXNcbiAgZGF0YU11dGF0ZWQoc3BsaWNlcykge1xuICAgICAgaWYodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gICAgICAgICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCJwYXRoLmZvY3VzbGluZVwiKS5yZW1vdmUoKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmVcIikucmVtb3ZlKClcbiAgICAgICAgICB0aGlzLmZvY3VzLnNlbGVjdEFsbChcIi5iYXJcIikucmVtb3ZlKClcbiAgICAgICAgICB0aGlzLmZvY3VzLnNlbGVjdEFsbChcInBhdGguZm9jdXNsaW5lXCIpLnJlbW92ZSgpXG4gICAgICB9XG4gIH1cblxuICByZWRyYXdDaGFuZ2VkKCkge1xuICAgICAgaWYodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUhpZ2hsaWdodCgpO1xuICAgICAgfVxuICB9XG5cbiAgdW5iaW5kKCkge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICB9XG5cbiAgZ2V0R2F1c3NpYW4oKSB7XG4gICAgbGV0IGRhdGEgPSBbXTtcbiAgICAvLyBsZXQgcm5kID0gZDMucmFuZG9tTm9ybWFsKCk7XG4gICAgbGV0IHJuZCA9IGQzLnJhbmRvbVVuaWZvcm0oLTMsIDMpO1xuXG4gIC8vIGxvb3AgdG8gcG9wdWxhdGUgZGF0YSBhcnJheSB3aXRoXG4gIC8vIHByb2JhYmlseSAtIHF1YW50aWxlIHBhaXJzXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgNTAwMDsgaSsrKSB7XG4gICAgICBsZXQgcSA9IHJuZCgpIC8vIGNhbGMgcmFuZG9tIGRyYXcgZnJvbSB1bmlmb3JtIGRpc3RcbiAgICAgIGxldCBwID0gdGhpcy5nYXVzc2lhbihxLCB0aGlzLmdhdXNzX3kuaW52ZXJ0KHRoaXMuY2VudGVyKSwgdGhpcy5nYXVzc19zaWdtYSh0aGlzLndlaWdodCkpIC8vIGNhbGMgcHJvYiBvZiByYW5kIGRyYXdcbiAgICAgIGxldCBlbCA9IHtcbiAgICAgICAgICBcInlcIjogcSxcbiAgICAgICAgICBcInhcIjogcFxuICAgICAgfVxuICAgICAgZGF0YS5wdXNoKGVsKVxuICB9O1xuXG4gIHRoaXMuZ3JhZGllbnRDb2xvci5kb21haW4oWzAsIGQzLm1heChkYXRhLCB4ID0+IHhbXCJ4XCJdKV0pXG5cbiAgLy8gbmVlZCB0byBzb3J0IGZvciBwbG90dGluZ1xuICAvL2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3NvcnRcbiAgICAgZGF0YS5zb3J0KGZ1bmN0aW9uKGEsYikge3JldHVybiAoYS55ID4gYi55KSA/IDEgOiAoKGIueSA+IGEueSkgPyAtMSA6IDApO30gKTtcbiAgICAgcmV0dXJuIGRhdGE7XG5cbiAgfTtcblxuICAvL3Rha2VuIGZyb20gSmFzb24gRGF2aWVzIHNjaWVuY2UgbGlicmFyeVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vamFzb25kYXZpZXMvc2NpZW5jZS5qcy9cbiAgZ2F1c3NpYW4oeCwgbWVhbiwgIHNpZ21hKSB7XG4gIFx0bGV0IGdhdXNzaWFuQ29uc3RhbnQgPSAxIC8gTWF0aC5zcXJ0KDIgKiBNYXRoLlBJKTtcblxuICAgICAgeCA9ICh4IC0gbWVhbikgLyBzaWdtYTtcbiAgICAgIGxldCBnID0gZ2F1c3NpYW5Db25zdGFudCAqIE1hdGguZXhwKC0uNSAqIHggKiB4KSAvIHNpZ21hO1xuXG4gICAgICBpZihnIDwgMC4wMDEpIGcgPSAwO1xuXG4gICAgICByZXR1cm4gZztcbiAgfVxuXG4gIGluaXRDaGFydCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBDb21wbGV0ZSBkcmF3aW5nIGFyZWFcbiAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpXG4gICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSk7XG5cbiAgICAvLyBMaW5lY2hhcnQgYXJlYVxuICAgIHRoaXMubGluZWNoYXJ0ID0gdGhpcy5zdmdcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLmxjX3dpZHRoKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmxjX2hlaWdodClcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsIFwiKyB0aGlzLm1hcmdpbi50b3AgK1wiKVwiKTtcblxuICAgIHRoaXMuZm9jdXMgPSB0aGlzLnN2Z1xuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMuZm9jdXNfb2Zmc2V0ICsgXCIsIFwiKyB0aGlzLm1hcmdpbi50b3AgK1wiKVwiKVxuXG4gICAgdGhpcy5mb2N1c1xuICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMuZm9jdXNfd2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuZm9jdXNfaGVpZ2h0KVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG4gICAgICAgIC5vbihcIm1vdXNlZG93blwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgbGV0IG91dCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICBzZWxmLmNlbnRlciA9IHNlbGYueS5pbnZlcnQoZDMubW91c2UodGhpcylbMV0pO1xuICAgICAgICAgIHNlbGYud2VpZ2h0ID0gc2VsZi5mb2N1c194LmludmVydChkMy5tb3VzZSh0aGlzKVswXSk7XG4gICAgICAgICAgc2VsZi51cGRhdGVHYXVzcygpO1xuXG4gICAgICAgICAgc2VsZi5kYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICBvdXQuc2V0KFxuICAgICAgICAgICAgICBkW1wiaWRcIl0sXG4gICAgICAgICAgICAgIHNlbGYuZ3JhZGllbnRDb2xvcihzZWxmLmdhdXNzaWFuKHNlbGYuZ2F1c3NfeS5pbnZlcnQoZC5kYXRhW2QuZGF0YS5sZW5ndGgtMV1bc2VsZi55X2F0dHJpYnV0ZV0pLCBzZWxmLmdhdXNzX3kuaW52ZXJ0KHNlbGYuY2VudGVyKSwgc2VsZi5nYXVzc19zaWdtYShzZWxmLndlaWdodCkpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzZWxmLmJydXNoaW5nID0gb3V0O1xuXG4gICAgICAgICAgc2VsZi51cGRhdGVIaWdobGlnaHQoKTtcblxuICAgICAgICAgIHNlbGYubW91c2VfZXZlbnQgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAub24oXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgbGV0IG91dCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHNlbGYuY2VudGVyID0gc2VsZi55LmludmVydChkMy5tb3VzZSh0aGlzKVsxXSk7XG4gICAgICAgICAgICBzZWxmLndlaWdodCA9IHNlbGYuZm9jdXNfeC5pbnZlcnQoZDMubW91c2UodGhpcylbMF0pO1xuICAgICAgICAgICAgc2VsZi51cGRhdGVHYXVzcygpO1xuXG4gICAgICAgICAgICBzZWxmLmRhdGEuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICAgICAgb3V0LnNldChcbiAgICAgICAgICAgICAgICBkW1wiaWRcIl0sXG4gICAgICAgICAgICAgICAgc2VsZi5ncmFkaWVudENvbG9yKHNlbGYuZ2F1c3NpYW4oc2VsZi5nYXVzc195LmludmVydChkLmRhdGFbZC5kYXRhLmxlbmd0aC0xXVtzZWxmLnlfYXR0cmlidXRlXSksIHNlbGYuZ2F1c3NfeS5pbnZlcnQoc2VsZi5jZW50ZXIpLCBzZWxmLmdhdXNzX3NpZ21hKHNlbGYud2VpZ2h0KSkpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNlbGYuYnJ1c2hpbmcgPSBvdXQ7XG5cbiAgICAgICAgICAgIHNlbGYudXBkYXRlSGlnaGxpZ2h0KCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAub24oXCJtb3VzZXVwXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHNlbGYubW91c2VfZXZlbnQub24oXCJtb3VzZW1vdmVcIiwgbnVsbCkub24oXCJtb3VzZXVwXCIsIG51bGwpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLy8gLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgLy8gICBzZWxmLm1vdXNlX2V2ZW50Lm9uKFwibW91c2Vtb3ZlXCIsIG51bGwpLm9uKFwibW91c2V1cFwiLCBudWxsKTtcbiAgICAgICAgICAvLyB9KVxuICAgICAgICB9KVxuICAgICAgICAubW92ZVRvRnJvbnQoKVxuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB0aGlzLnggPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoWzAsIHRoaXMubGNfd2lkdGhdKTtcbiAgICB0aGlzLnkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW3RoaXMuaGVpZ2h0LCAwXSk7XG5cbiAgICB0aGlzLmZvY3VzX3ggPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5yYW5nZShbMCwgdGhpcy5mb2N1c193aWR0aF0pO1xuXG4gICAgdGhpcy5nYXVzc194ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgIHRoaXMuZ2F1c3NfeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWy0zLCAzXSlcbiAgICB0aGlzLmdhdXNzX3NpZ21hID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFswLjEsIDI1XSlcbiAgICAgIC5kb21haW4oWzIsIHRoaXMuZm9jdXNfd2lkdGhdKVxuICAgIHRoaXMuZ2F1c3NfbWF4X3NpZ21hPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoWzUwLCAxXSlcbiAgICAgIC5kb21haW4oWzEsIDEwMF0pXG5cbiAgICB0aGlzLmdyYWRpZW50Q29sb3IgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoWzAsIDFdKVxuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB0aGlzLmxpbmVjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgdGhpcy5oZWlnaHQgKyBcIilcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4QXhpc1wiKTtcblxuICAgICAgLy8geCBheGlzIGxhYmVsXG4gICAgICB0aGlzLmxpbmVjaGFydC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAuYXR0cihcInlcIiwgdGhpcy5oZWlnaHQrMjYpXG4gICAgICAgICAgLmF0dHIoXCJ4XCIsIHRoaXMud2lkdGgvMilcbiAgICAgICAgICAudGV4dCh0aGlzLnhfbGFiZWwpO1xuXG4gICAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgICAgdGhpcy5mb2N1cy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieEF4aXNcIik7XG5cbiAgICAgICAgLy8geCBheGlzIGxhYmVsXG4gICAgICAgIHRoaXMuZm9jdXMuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCB0aGlzLmhlaWdodCsyNilcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCB0aGlzLndpZHRoLzIpXG4gICAgICAgICAgICAudGV4dChcImRheVwiKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICAgIC8vIHkgYXhpcyBsYWJlbFxuICAgIHRoaXMubGluZWNoYXJ0LmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgICAudGV4dCh0aGlzLnlfbGFiZWwpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB0aGlzLmZvY3VzLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiKyB0aGlzLmZvY3VzX3dpZHRoICtcIiwgMClcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5QXhpc1wiKVxuXG4gICAgICAvLyB5IGF4aXMgbGFiZWxcbiAgICB0aGlzLmZvY3VzLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgICAuYXR0cihcInhcIiwgdGhpcy5mb2N1c193aWR0aClcbiAgICAgICAgLnRleHQoKGQpID0+IHsgcmV0dXJuIHRoaXMueV9hdHRyaWJ1dGV9KTtcblxuICAgIC8vIGRlZmluZSB0aGUgbGluZVxuICAgIHRoaXMudmFsdWVsaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KChkKSA9PiB0aGlzLngoZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgICAgIC55KChkKSA9PiB0aGlzLnkoZFt0aGlzLnlfYXR0cmlidXRlXSkpO1xuXG4gICAgdGhpcy5mb2N1c2xpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLngoKGQpID0+IHRoaXMuZm9jdXNfeCh0aGlzLmdhdXNzX3goZFtcInhcIl0pKSlcbiAgICAgICAgLnkoKGQpID0+IHRoaXMueSh0aGlzLmdhdXNzX3koZFtcInlcIl0pKSk7XG5cbiAgICBsZXQgeV9hdHRyaWJ1dGUgPSB0aGlzLnlfYXR0cmlidXRlXG5cbiAgICAvLyBVcGRhdGUgYXhpc1xuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLngpKTtcbiAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpO1xuXG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgICAgLmNhbGwoZDMuYXhpc1JpZ2h0KHRoaXMueSkpO1xuICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwiLnhBeGlzXCIpXG4gICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy5mb2N1c194KS50aWNrcygyKSk7XG4gIH1cblxuICB1cGRhdGVIaWdobGlnaHQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcInBhdGgubGluZVwiKVxuICAgICAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gZFtcImhpZ2hsaWdodFwiXVxuICAgICAgICAgIH0pXG5cbiAgICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwicmVjdC5iYXJcIilcbiAgICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuZ3JhZGllbnRDb2xvcihzZWxmLmdhdXNzaWFuKHNlbGYuZ2F1c3NfeS5pbnZlcnQoZC54MCArICgoZC54MS1kLngwKS8yKSksIHNlbGYuZ2F1c3NfeS5pbnZlcnQoc2VsZi5jZW50ZXIpLCBzZWxmLmdhdXNzX3NpZ21hKHNlbGYud2VpZ2h0KSkpXG4gICAgICAgICAgfSlcbiAgfVxuXG4gIHVwZGF0ZUdhdXNzKCkge1xuICAgIGxldCBsaW5lX2RhdGEgPSB0aGlzLmdldEdhdXNzaWFuKCk7XG4gICAgdGhpcy5nYXVzc194LnJhbmdlKHRoaXMuZm9jdXNfeC5kb21haW4oKSkuZG9tYWluKGQzLmV4dGVudChsaW5lX2RhdGEsIGQgPT4gZFtcInhcIl0pKVxuXG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCJwYXRoLmZvY3VzbGluZVwiKS5yZW1vdmUoKTtcbiAgICBsZXQgZm9jdXNfbGluZSA9IHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwicGF0aC5mb2N1c2xpbmVcIilcbiAgICAgICAgLmRhdGEoW2xpbmVfZGF0YV0pXG5cbiAgICAvLyBEaXN0cmlidXRpb24gbGluZVxuICAgIGZvY3VzX2xpbmUuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgZm9jdXNfbGluZS5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImZvY3VzbGluZVwiKVxuICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiB0aGlzLmZvY3VzbGluZShkKSlcbiAgICAgIC5tb3ZlVG9Gcm9udCgpO1xuICB9XG5cbiAgdXBkYXRlQ2hhcnQoKSB7XG4gICAgLy8gVXBkYXRlIGRvbWFpbnNcbiAgICBsZXQgeF9tYXggPSBkMy5tYXgodGhpcy5kYXRhLCAoYXJyYXkpID0+IGQzLm1heDxhbnksIGFueT4oYXJyYXlbXCJkYXRhXCJdLCAoZCkgPT4gZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgbGV0IHlfbWF4ID0gZDMubWF4KHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5tYXg8YW55LCBhbnk+KGFycmF5W1wiZGF0YVwiXSwgKGQpID0+IGRbdGhpcy55X2F0dHJpYnV0ZV0pKVxuICAgIGxldCB4X21pbiA9IGQzLm1pbih0aGlzLmRhdGEsIChhcnJheSkgPT4gZDMubWluPGFueSwgYW55PihhcnJheVtcImRhdGFcIl0sIChkKSA9PiBkW3RoaXMueF9hdHRyaWJ1dGVdKSlcbiAgICBsZXQgeV9taW4gPSBkMy5taW4odGhpcy5kYXRhLCAoYXJyYXkpID0+IGQzLm1pbjxhbnksIGFueT4oYXJyYXlbXCJkYXRhXCJdLCAoZCkgPT4gZFt0aGlzLnlfYXR0cmlidXRlXSkpXG5cbiAgICBsZXQgZm9jdXNfZGF0YSA9IDxhbnk+IFtdO1xuXG4gICAgIHRoaXMuZGF0YS5mb3JFYWNoKChkOiBhbnlbXSkgPT4ge1xuICAgICAgICAgZm9jdXNfZGF0YS5wdXNoKGRbXCJkYXRhXCJdW2RbXCJkYXRhXCJdLmxlbmd0aC0xXSlcbiAgICAgfSlcblxuICAgIHRoaXMueC5kb21haW4oW3hfbWluLCB4X21heF0pO1xuICAgIHRoaXMueS5kb21haW4oW3lfbWluLCB5X21heF0pO1xuXG4gICAgdGhpcy5nYXVzc195LnJhbmdlKHRoaXMueS5kb21haW4oKSlcblxuICAgIC8vIGxldCBiaW5zID0gdGhpcy5oaXN0b2dyYW0oZm9jdXNfZGF0YSlcbiAgICBsZXQgYmlucyA9IGQzLmhpc3RvZ3JhbSgpXG4gICAgICAgIC52YWx1ZSgoZCkgPT4gZFt0aGlzLnlfYXR0cmlidXRlXSlcbiAgICAgICAgLmRvbWFpbih0aGlzLnkuZG9tYWluKCkpXG4gICAgICAgIC50aHJlc2hvbGRzKGQzLnJhbmdlKHlfbWluLCB5X21heCwgKHlfbWF4IC0geV9taW4pIC8gMjApKVxuICAgICAgICAoZm9jdXNfZGF0YSk7XG5cbiAgICB0aGlzLmZvY3VzX3guZG9tYWluKFswLCBkMy5tYXgoYmlucywgKGQ6IGFueVtdKSA9PiBkLmxlbmd0aCldKTtcblxuICAgIGlmKHRoaXMuZm9jdXNfeC5kb21haW4oKVsxXSA+IDEwMCkge1xuICAgICAgdGhpcy5nYXVzc19tYXhfc2lnbWEuZG9tYWluKFsxLCB0aGlzLmZvY3VzX3guZG9tYWluKClbMV1dKVxuICAgIH1cbiAgICB0aGlzLmdhdXNzX3NpZ21hLnJhbmdlKFswLjEsIHRoaXMuZ2F1c3NfbWF4X3NpZ21hKHRoaXMuZm9jdXNfeC5kb21haW4oKVsxXSldKVxuXG5cbiAgICAvLyBTZWxlY3QgY2hhcnRcbiAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCJwYXRoLmxpbmVcIikucmVtb3ZlKCk7XG4gICAgbGV0IGNoYXJ0ID0gdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwicGF0aC5saW5lXCIpXG4gICAgICAgIC5kYXRhKHRoaXMuZGF0YSlcblxuXG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIuYmFyXCIpLnJlbW92ZSgpO1xuICAgIGxldCBmb2N1c19jaGFydCA9IHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwicmVjdC5iYXJzXCIpXG4gICAgICAgIC5kYXRhKGJpbnMpXG5cbiAgICAvLyBVcGRhdGUgYXhpc1xuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLngpKTtcbiAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpO1xuXG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgICAgLmNhbGwoZDMuYXhpc1JpZ2h0KHRoaXMueSkpO1xuICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwiLnhBeGlzXCIpXG4gICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy5mb2N1c194KS50aWNrcygyKSk7XG5cbiAgICAvLyBMaW5lY2hhcnRcbiAgICBjaGFydC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBjaGFydC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgIC5jbGFzc2VkKFwiaGlnaGxpZ2h0XCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDEpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB9KVxuICAgICAgLmNsYXNzZWQoXCJiYWNrZ3JvdW5kXCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDIpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiB0aGlzLnZhbHVlbGluZShkW1wiZGF0YVwiXSkpO1xuXG4gICAgLy8gQmFyY2hhcnRcbiAgICAvLyBSZW1vdmUgYmFyc1xuICAgIGZvY3VzX2NoYXJ0LmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIC8vIEFkZCBiYXJzXG4gICAgZm9jdXNfY2hhcnQuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCAoZCkgPT4ge1xuXHRcdCAgcmV0dXJuIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLnkoZC54MSkgKyBcIilcIjsgfSlcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgKGQpID0+IHsgcmV0dXJuICB0aGlzLmZvY3VzX3goZC5sZW5ndGgpOyB9KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgKGQpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy55KGQueDApIC0gdGhpcy55KGQueDEpIC0gMTtcbiAgICAgIH0pXG4gICAgICAubW92ZVRvQmFjaygpO1xuXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/line-chart-live',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LineChartLive = (function () {
        function LineChartLive(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.x_label = "days";
            this.y_label = "y";
            this.redraw = 0;
            this.data = [];
            this.center = 1.0;
            this.weight = 1.0;
            this.x_size = 900;
            this.y_size = 500;
            this.element = element;
        }
        LineChartLive.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.initChart();
        };
        LineChartLive.prototype.dataMutated = function (splices) {
            if (this.data.length > 1) {
                this.updateChart();
            }
            else {
                this.svg.selectAll(".line").remove();
            }
        };
        LineChartLive.prototype.redrawChanged = function () {
            if (this.data.length > 1) {
                this.updateChart();
            }
        };
        LineChartLive.prototype.unbind = function () {
            this.subscription.dispose();
        };
        LineChartLive.prototype.initChart = function () {
            var _this = this;
            var self = this;
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.linechart = this.svg
                .append("g")
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x = d3.scaleLinear()
                .range([0, this.width]);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.linechart.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.linechart.append("text")
                .style("text-anchor", "middle")
                .attr("y", this.height + 26)
                .attr("x", this.width / 2)
                .text(this.x_label);
            this.linechart.append("g")
                .attr("class", "yAxis");
            this.linechart.append("text")
                .style("text-anchor", "left")
                .attr("y", -4)
                .text(this.y_label);
            this.valueline = d3.line()
                .x(function (d) { return _this.x(d[_this.x_attribute]); })
                .y(function (d) { return _this.y(d[_this.y_attribute]); });
            var y_attribute = this.y_attribute;
            this.linechart.selectAll(".xAxis")
                .call(d3.axisBottom(this.x));
            this.linechart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
        };
        LineChartLive.prototype.updateHighlight = function () {
            var self = this;
            this.linechart.selectAll("path.line")
                .attr("opacity", function (d) {
                return d["highlight"];
            });
        };
        LineChartLive.prototype.updateChart = function () {
            var _this = this;
            var x_max = d3.max(this.data, function (d) { return d[_this.x_attribute]; });
            var y_max = d3.max(this.data, function (d) { return d[_this.y_attribute]; });
            var x_min = d3.min(this.data, function (d) { return d[_this.x_attribute]; });
            var y_min = d3.min(this.data, function (d) { return d[_this.y_attribute]; });
            this.x.domain([x_min, x_max]);
            this.y.domain([y_min, y_max]);
            this.linechart.selectAll("path.line").remove();
            var chart = this.linechart.selectAll("path.line")
                .data([this.data]);
            this.linechart.selectAll(".xAxis")
                .call(d3.axisBottom(this.x));
            this.linechart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            chart.exit().remove();
            chart.enter()
                .append("path")
                .attr("class", "line")
                .classed("highlight", function (d) {
                if (d["highlight"] == 1) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .classed("background", function (d) {
                if (d["highlight"] == 2) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .merge(chart)
                .attr("d", function (d) { return _this.valueline(d); });
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartLive.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartLive.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartLive.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartLive.prototype, "x_label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartLive.prototype, "y_label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartLive.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], LineChartLive.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartLive.prototype, "data", void 0);
        LineChartLive = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], LineChartLive);
        return LineChartLive;
    }());
    exports.LineChartLive = LineChartLive;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9saW5lLWNoYXJ0LWxpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBS0E7UUE0Q0UsdUJBQVksT0FBTyxFQUFVLGFBQWE7WUFBYixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtZQTFDaEMsV0FBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDbEUsZ0JBQVcsR0FBRyxHQUFHLENBQUM7WUFDbEIsZ0JBQVcsR0FBRyxHQUFHLENBQUM7WUFDbEIsWUFBTyxHQUFHLE1BQU0sQ0FBQztZQUNqQixZQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ2QsV0FBTSxHQUFHLENBQUMsQ0FBQztZQU1YLFNBQUksR0FBRyxFQUFFLENBQUM7WUFzQlosV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFLYixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUduQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN6QixDQUFDO1FBR0QsZ0NBQVEsR0FBUjtZQUFBLGlCQWlCQztZQWhCRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhO3FCQUNuQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7WUFDbkQsQ0FBQztZQUdILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFD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Q0QsT0FBTyxDQUFDLFlBQVksRUFBRSxVQUFlLENBQUM7Z0JBQ25DLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLENBQUM7b0JBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNaLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUM7UUFDekMsQ0FBQztRQWhNUztZQUFULDRCQUFROztxREFBbUU7UUFDbEU7WUFBVCw0QkFBUTs7MERBQW1CO1FBQ2xCO1lBQVQsNEJBQVE7OzBEQUFtQjtRQUNsQjtZQUFULDRCQUFROztzREFBa0I7UUFDakI7WUFBVCw0QkFBUTs7c0RBQWU7UUFDZDtZQUFULDRCQUFROztxREFBWTtRQUdpQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7dURBQVU7UUFHckQ7WUFBVCw0QkFBUTs7bURBQVc7UUFiVCxhQUFhO1lBRnpCLDBCQUFNLENBQUMsT0FBTyxFQUFFLGlDQUFhLENBQUM7WUFDOUIsMEJBQU0sRUFBRTs7V0FDSSxhQUFhLENBbU16QjtRQUFELG9CQUFDO0tBbk1ELEFBbU1DLElBQUE7SUFuTVksc0NBQWEiLCJmaWxlIjoiY2hhcnRzL2xpbmUtY2hhcnQtbGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHtpbmplY3QsIG5vVmlldywgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBCaW5kaW5nRW5naW5lfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudCwgQmluZGluZ0VuZ2luZSlcbkBub1ZpZXcoKVxuZXhwb3J0IGNsYXNzIExpbmVDaGFydExpdmUge1xuICAvLyBPbmUtV2F5XG4gIEBiaW5kYWJsZSBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiA2MCwgYm90dG9tOiAzNSwgbGVmdDogNjAsIG1pZGRsZTogMjAgfTtcbiAgQGJpbmRhYmxlIHhfYXR0cmlidXRlID0gXCJ4XCI7XG4gIEBiaW5kYWJsZSB5X2F0dHJpYnV0ZSA9IFwieVwiO1xuICBAYmluZGFibGUgeF9sYWJlbCA9IFwiZGF5c1wiO1xuICBAYmluZGFibGUgeV9sYWJlbCA9IFwieVwiO1xuICBAYmluZGFibGUgcmVkcmF3ID0gMDtcblxuICAvLyBUd28tV2F5XG4gIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIGJydXNoaW5nO1xuXG4gIC8vIE9ic2VydmVkIFZhcmlhYmxlc1xuICBAYmluZGFibGUgZGF0YSA9IFtdO1xuXG4gIC8vIEF1cmVsaWEgdmFyaWFibGVzXG4gIHByaXZhdGUgZWxlbWVudDtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG5cbiAgLy8gRDMgdmFyaWFibGVzXG4gIHByaXZhdGUgbW91c2VfZXZlbnQ7XG4gIHByaXZhdGUgc3ZnO1xuICBwcml2YXRlIGxpbmVjaGFydDtcbiAgcHJpdmF0ZSBmb2N1cztcbiAgcHJpdmF0ZSB4O1xuICBwcml2YXRlIHk7XG4gIHByaXZhdGUgZm9jdXNfeDtcbiAgcHJpdmF0ZSBnYXVzc194O1xuICBwcml2YXRlIGdhdXNzX3k7XG4gIHByaXZhdGUgZ2F1c3Nfc2lnbWE7XG4gIHByaXZhdGUgZ3JhZGllbnRDb2xvcjtcbiAgcHJpdmF0ZSB2YWx1ZWxpbmU7XG4gIHByaXZhdGUgZm9jdXNsaW5lO1xuICBwcml2YXRlIGhpc3RvZ3JhbTtcbiAgcHJpdmF0ZSBicnVzaDtcbiAgcHJpdmF0ZSBjZW50ZXIgPSAxLjA7XG4gIHByaXZhdGUgd2VpZ2h0ID0gMS4wO1xuXG4gIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgcHJpdmF0ZSB3aWR0aDtcbiAgcHJpdmF0ZSBoZWlnaHQ7XG4gIHByaXZhdGUgeF9zaXplID0gOTAwO1xuICBwcml2YXRlIHlfc2l6ZSA9IDUwMDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwcml2YXRlIGJpbmRpbmdFbmdpbmUpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgLy8gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYmluZGluZyBhdHRyaWJ1dGVzXG4gIGF0dGFjaGVkKCkge1xuICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gdGhlIGRhdGEgYXJyYXkgYW5kIHdhdGNoIGZvciBjaGFuZ2VzXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5iaW5kaW5nRW5naW5lXG4gICAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgICAgLnN1YnNjcmliZShzcGxpY2VzID0+IHRoaXMuZGF0YU11dGF0ZWQoc3BsaWNlcykpO1xuICAgICAgICB9XG5cbiAgICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICAgIHRoaXMueF9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICB0aGlzLnlfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMueF9zaXplIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuXG4gICAgICB0aGlzLmluaXRDaGFydCgpXG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGNoYXJ0IGlmIHRoZSBkYXRhIGNoYW5nZXNcbiAgZGF0YU11dGF0ZWQoc3BsaWNlcykge1xuICAgICAgaWYodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hhcnQoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lXCIpLnJlbW92ZSgpXG4gICAgICB9XG4gIH1cblxuICByZWRyYXdDaGFuZ2VkKCkge1xuICAgICAgaWYodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gICAgICB9XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gIH1cblxuICBpbml0Q2hhcnQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gQ29tcGxldGUgZHJhd2luZyBhcmVhXG4gICAgdGhpcy5zdmcgPSBkMy5zZWxlY3QodGhpcy5lbGVtZW50KVxuICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pO1xuXG4gICAgLy8gTGluZWNoYXJ0IGFyZWFcbiAgICB0aGlzLmxpbmVjaGFydCA9IHRoaXMuc3ZnXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICAgIFwidHJhbnNsYXRlKFwiICsgdGhpcy5tYXJnaW4ubGVmdCArIFwiLCBcIisgdGhpcy5tYXJnaW4udG9wICtcIilcIik7XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHRoaXMueCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbMCwgdGhpcy53aWR0aF0pO1xuICAgIHRoaXMueSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbdGhpcy5oZWlnaHQsIDBdKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieEF4aXNcIik7XG5cbiAgICAgIC8vIHggYXhpcyBsYWJlbFxuICAgICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgLmF0dHIoXCJ5XCIsIHRoaXMuaGVpZ2h0KzI2KVxuICAgICAgICAgIC5hdHRyKFwieFwiLCB0aGlzLndpZHRoLzIpXG4gICAgICAgICAgLnRleHQodGhpcy54X2xhYmVsKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICAgIC8vIHkgYXhpcyBsYWJlbFxuICAgIHRoaXMubGluZWNoYXJ0LmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJsZWZ0XCIpXG4gICAgICAgIC5hdHRyKFwieVwiLCAtNClcbiAgICAgICAgLnRleHQodGhpcy55X2xhYmVsKTtcblxuICAgIC8vIGRlZmluZSB0aGUgbGluZVxuICAgIHRoaXMudmFsdWVsaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KChkKSA9PiB0aGlzLngoZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgICAgIC55KChkKSA9PiB0aGlzLnkoZFt0aGlzLnlfYXR0cmlidXRlXSkpO1xuXG4gICAgbGV0IHlfYXR0cmlidXRlID0gdGhpcy55X2F0dHJpYnV0ZVxuXG4gICAgLy8gVXBkYXRlIGF4aXNcbiAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCIueEF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54KSk7XG4gICAgdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwiLnlBeGlzXCIpXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnkpKTtcbiAgfVxuXG4gIHVwZGF0ZUhpZ2hsaWdodCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwicGF0aC5saW5lXCIpXG4gICAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkW1wiaGlnaGxpZ2h0XCJdXG4gICAgICAgICAgfSlcbiAgfVxuXG4gIHVwZGF0ZUNoYXJ0KCkge1xuICAgIC8vIFVwZGF0ZSBkb21haW5zXG4gICAgbGV0IHhfbWF4ID0gZDMubWF4KHRoaXMuZGF0YSwgKGQpID0+IGRbdGhpcy54X2F0dHJpYnV0ZV0pXG4gICAgbGV0IHlfbWF4ID0gZDMubWF4KHRoaXMuZGF0YSwgKGQpID0+IGRbdGhpcy55X2F0dHJpYnV0ZV0pXG4gICAgbGV0IHhfbWluID0gZDMubWluKHRoaXMuZGF0YSwgKGQpID0+IGRbdGhpcy54X2F0dHJpYnV0ZV0pXG4gICAgbGV0IHlfbWluID0gZDMubWluKHRoaXMuZGF0YSwgKGQpID0+IGRbdGhpcy55X2F0dHJpYnV0ZV0pXG5cbiAgICB0aGlzLnguZG9tYWluKFt4X21pbiwgeF9tYXhdKTtcbiAgICB0aGlzLnkuZG9tYWluKFt5X21pbiwgeV9tYXhdKTtcblxuICAgIC8vIFNlbGVjdCBjaGFydFxuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcInBhdGgubGluZVwiKS5yZW1vdmUoKTtcbiAgICBsZXQgY2hhcnQgPSB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCJwYXRoLmxpbmVcIilcbiAgICAgICAgLmRhdGEoW3RoaXMuZGF0YV0pXG5cbiAgICAvLyBVcGRhdGUgYXhpc1xuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLngpKTtcbiAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpO1xuXG5cbiAgICAvLyBMaW5lY2hhcnRcbiAgICBjaGFydC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBjaGFydC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgIC5jbGFzc2VkKFwiaGlnaGxpZ2h0XCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDEpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB9KVxuICAgICAgLmNsYXNzZWQoXCJiYWNrZ3JvdW5kXCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDIpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB9KVxuICAgICAgLm1lcmdlKGNoYXJ0KVxuICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiB0aGlzLnZhbHVlbGluZShkKSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/parallel-coordinates-gauss',["require", "exports", "d3", "lodash", "aurelia-framework"], function (require, exports, d3, _, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var parallelCoordinatesGauss = (function () {
        function parallelCoordinatesGauss(element, bindingEngine) {
            var _this = this;
            this.bindingEngine = bindingEngine;
            this.margin = { top: 60, right: 20, bottom: 30, left: 40 };
            this.redraw = 0;
            this.data = [];
            this.x = {};
            this.dimensions = [];
            this.x_size = 500;
            this.y_size = 500;
            this.getBrushing = function (g, x, dat) {
                var temp = [];
                var brushes = new Map();
                g.selectAll(".brush")
                    .filter(function (d) {
                    return d3.brushSelection(this);
                })
                    .each(function (d) {
                    var brush_selection = d3.brushSelection(this);
                    var extent = [];
                    var selection = [];
                    if (brush_selection != null) {
                        extent = [x[d].invert(brush_selection[1]), x[d].invert(brush_selection[0])];
                    }
                    var brushed_elements = dat.filter(function (x) { return x["data"][d] >= extent[1] && x["data"][d] <= extent[0]; });
                    brushes.set(d, brushed_elements.map(function (x) { return x["id"]; }));
                });
                var brushed = _.intersection.apply(_, Array.from(brushes.values()));
                if (brushes.size > 0 && brushed.length == 0) {
                    brushed.push("x");
                }
                _this.brushing = brushed;
            };
            this.element = element;
        }
        parallelCoordinatesGauss.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.initChart();
            this.updateChart();
        };
        parallelCoordinatesGauss.prototype.dataMutated = function (splices) {
            this.updateChart();
        };
        parallelCoordinatesGauss.prototype.redrawChanged = function () {
            if (this.data.length > 1) {
                this.updateHighlight();
            }
        };
        parallelCoordinatesGauss.prototype.unbind = function () {
            this.subscription.dispose();
        };
        parallelCoordinatesGauss.prototype.path = function (d) {
            var _this = this;
            return this.line(this.dimensions.map(function (p) {
                return [_this.x[p](d[p]), _this.y(p)];
            }));
        };
        parallelCoordinatesGauss.prototype.initChart = function () {
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom)
                .append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
            this.y = d3.scalePoint()
                .range([0, this.height]);
            this.line = d3.line()
                .curve(d3.curveMonotoneY);
        };
        parallelCoordinatesGauss.prototype.updateHighlight = function () {
            this.svg.selectAll(".line")
                .attr("opacity", function (d) {
                return d["highlight"];
            });
        };
        parallelCoordinatesGauss.prototype.updateChart = function () {
            var _this = this;
            if (this.data.length > 0) {
                this.dimensions = d3.keys(this.data[0]["data"]).filter(function (d) {
                    return d != "name";
                });
            }
            this.dimensions.map(function (dim) {
                var ext = d3.extent(_this.data, function (data) {
                    return data["data"][dim];
                });
                if (ext[0] == ext[1]) {
                    ext[0] -= ext[0] * 0.1;
                    ext[1] += ext[1] * 0.1;
                }
                _this.x[dim] = d3.scaleLinear()
                    .range([_this.width, 0])
                    .domain([ext[1], ext[0]]);
            });
            this.y.domain(this.dimensions);
            this.background = this.svg.append("g")
                .selectAll("path")
                .data(this.data)
                .enter().append("path")
                .attr("class", "line")
                .classed("highlight", function (d) {
                if (d["highlight"] == 1) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .classed("background", function (d) {
                if (d["highlight"] == 2) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .attr("d", function (d) { return _this.path(d["data"]); })
                .on("click", function (d) {
                _this.selected = d["id"];
            });
            var width = this.width;
            var x = this.x;
            var dat = this.data;
            var getBrushing = this.getBrushing;
            var g = this.svg.selectAll(".dimension")
                .data(this.dimensions)
                .enter().append("g")
                .attr("class", "dimension")
                .attr("transform", function (d) {
                return "translate(0," + _this.y(d) + ")";
            });
            g.append("g")
                .each(function (d) {
                d3.select(this).call(d3.axisTop(x[d]));
            });
            g.append("text")
                .style("text-anchor", "middle")
                .attr("y", -9)
                .attr("transform", "rotate(-90)")
                .text(function (d) { return d; });
            g.append("g")
                .attr("class", "brush")
                .each(function (d) {
                d3.select(this).call(d3.brushX()
                    .extent([[0, -9], [width, 9]])
                    .on("brush", function () {
                    if (!d3.event.sourceEvent)
                        return;
                    getBrushing(g, x, dat);
                })
                    .on("end", function () {
                    if (!d3.event.sourceEvent)
                        return;
                    getBrushing(g, x, dat);
                }));
            });
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], parallelCoordinatesGauss.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], parallelCoordinatesGauss.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], parallelCoordinatesGauss.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], parallelCoordinatesGauss.prototype, "selected", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], parallelCoordinatesGauss.prototype, "data", void 0);
        parallelCoordinatesGauss = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], parallelCoordinatesGauss);
        return parallelCoordinatesGauss;
    }());
    exports.parallelCoordinatesGauss = parallelCoordinatesGauss;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9wYXJhbGxlbC1jb29yZGluYXRlcy1nYXVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQTtRQStCSSxrQ0FBWSxPQUFPLEVBQVUsYUFBYTtZQUExQyxpQkFFQztZQUY0QixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtZQTdCaEMsV0FBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ3RELFdBQU0sR0FBRyxDQUFDLENBQUM7WUFPWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1lBUVosTUFBQyxHQUFHLEVBQUUsQ0FBQztZQUVQLGVBQVUsR0FBUSxFQUFFLENBQUM7WUFNckIsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFzRGIsZ0JBQVcsR0FBRyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztnQkFDNUIsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFDO2dCQUNuQixJQUFJLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUV4QixDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztxQkFDbEIsTUFBTSxDQUFDLFVBQWUsQ0FBQztvQkFDdEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsVUFBZSxDQUFDO29CQUNsQixJQUFJLGVBQWUsR0FBSSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUM5QyxJQUFJLE1BQU0sR0FBUSxFQUFFLENBQUE7b0JBQ3BCLElBQUksU0FBUyxHQUFRLEVBQUUsQ0FBQztvQkFFeEIsRUFBRSxDQUFBLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLE1BQU0sR0FBRyxD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LENBQUM7UUExT1M7WUFBVCw0QkFBUTs7Z0VBQXVEO1FBQ3REO1lBQVQsNEJBQVE7O2dFQUFZO1FBR2lDO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOztrRUFBVTtRQUNUO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOztrRUFBVTtRQUdyRDtZQUFULDRCQUFROzs4REFBVztRQVZYLHdCQUF3QjtZQUZwQywwQkFBTSxDQUFDLE9BQU8sRUFBRSxpQ0FBYSxDQUFDO1lBQzlCLDBCQUFNLEVBQUU7O1dBQ0ksd0JBQXdCLENBNk9wQztRQUFELCtCQUFDO0tBN09ELEFBNk9DLElBQUE7SUE3T1ksNERBQXdCIiwiZmlsZSI6ImNoYXJ0cy9wYXJhbGxlbC1jb29yZGluYXRlcy1nYXVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtpbmplY3QsIG5vVmlldywgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBCaW5kaW5nRW5naW5lfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudCwgQmluZGluZ0VuZ2luZSlcbkBub1ZpZXcoKVxuZXhwb3J0IGNsYXNzIHBhcmFsbGVsQ29vcmRpbmF0ZXNHYXVzcyB7XG4gICAgLy8gT25lLVdheVxuICAgIEBiaW5kYWJsZSBtYXJnaW4gPSB7IHRvcDogNjAsIHJpZ2h0OiAyMCwgYm90dG9tOiAzMCwgbGVmdDogNDAgfTtcbiAgICBAYmluZGFibGUgcmVkcmF3ID0gMDtcblxuICAgIC8vIFR3by1XYXlcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBicnVzaGluZztcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBzZWxlY3RlZDtcblxuICAgIC8vIE9ic2VydmVkIFZhcmlhYmxlc1xuICAgIEBiaW5kYWJsZSBkYXRhID0gW107XG5cbiAgICAvLyBBdXJlbGlhIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgZWxlbWVudDtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcblxuICAgIC8vIEQzIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgc3ZnO1xuICAgIHByaXZhdGUgeCA9IHt9O1xuICAgIHByaXZhdGUgeTtcbiAgICBwcml2YXRlIGRpbWVuc2lvbnMgPSA8YW55PltdO1xuICAgIHByaXZhdGUgbGluZTtcbiAgICBwcml2YXRlIGJhY2tncm91bmQ7XG4gICAgcHJpdmF0ZSBmb3JlZ3JvdW5kO1xuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICAgIHByaXZhdGUgeF9zaXplID0gNTAwO1xuICAgIHByaXZhdGUgeV9zaXplID0gNTAwO1xuICAgIHByaXZhdGUgd2lkdGg7XG4gICAgcHJpdmF0ZSBoZWlnaHQ7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwcml2YXRlIGJpbmRpbmdFbmdpbmUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGlzIGNhbGxlZCBhZnRlciBiaW5kaW5nIGF0dHJpYnV0ZXNcbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgLy8gc3Vic2NyaWJlIHRvIHRoZSBkYXRhIGFycmF5IGFuZCB3YXRjaCBmb3IgY2hhbmdlc1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmJpbmRpbmdFbmdpbmVcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbk9ic2VydmVyKHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHNwbGljZXMgPT4gdGhpcy5kYXRhTXV0YXRlZChzcGxpY2VzKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gICAgICAgIHRoaXMueF9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICAgICAgdGhpcy55X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHRcblxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy55X3NpemUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgZ3JhcGhcbiAgICAgICAgdGhpcy5pbml0Q2hhcnQoKVxuICAgICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBjaGFydCBpZiB0aGUgZGF0YSBjaGFuZ2VzXG4gICAgZGF0YU11dGF0ZWQoc3BsaWNlcykge1xuICAgICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gICAgfVxuXG4gICAgcmVkcmF3Q2hhbmdlZCgpIHtcbiAgICAgICAgaWYodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSGlnaGxpZ2h0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgdGhlIHdhdGNoZXIgYWZ0ZXIgZGlzcG9zaW5nIHRoZSBjbGFzc1xuICAgIHVuYmluZCgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIC8vIEQzIGZ1bmN0aW9uc1xuXG4gICAgLy8gRHJhdyB0aGUgbGluZXNcbiAgICBwcml2YXRlIHBhdGgoZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saW5lKHRoaXMuZGltZW5zaW9ucy5tYXAoKHApID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbdGhpcy54W3BdKGRbcF0pLCB0aGlzLnkocCldOyB9KSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGV4dGVybmFsIHZhcmlhYmxlcyB3aXRoIGN1cnJlbnQgYnJ1c2hlc1xuICAgIHByaXZhdGUgZ2V0QnJ1c2hpbmcgPSAoZywgeCwgZGF0KSA9PiB7XG4gICAgICAgIGxldCB0ZW1wID0gPGFueT5bXTtcbiAgICAgICAgbGV0IGJydXNoZXMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgZy5zZWxlY3RBbGwoXCIuYnJ1c2hcIilcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkMy5icnVzaFNlbGVjdGlvbih0aGlzKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICAgICAgbGV0IGJydXNoX3NlbGVjdGlvbiA9ICBkMy5icnVzaFNlbGVjdGlvbih0aGlzKVxuICAgICAgICAgICAgICBsZXQgZXh0ZW50ID0gPGFueT5bXVxuICAgICAgICAgICAgICBsZXQgc2VsZWN0aW9uID0gPGFueT5bXTtcblxuICAgICAgICAgICAgICBpZihicnVzaF9zZWxlY3Rpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgZXh0ZW50ID0gW3hbZF0uaW52ZXJ0KGJydXNoX3NlbGVjdGlvblsxXSksIHhbZF0uaW52ZXJ0KGJydXNoX3NlbGVjdGlvblswXSldXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCBicnVzaGVkX2VsZW1lbnRzID0gZGF0LmZpbHRlcih4ID0+IHhbXCJkYXRhXCJdW2RdID49IGV4dGVudFsxXSAmJiB4W1wiZGF0YVwiXVtkXSA8PSBleHRlbnRbMF0pXG5cbiAgICAgICAgICAgICAgYnJ1c2hlcy5zZXQoZCwgYnJ1c2hlZF9lbGVtZW50cy5tYXAoeCA9PiB4W1wiaWRcIl0pKVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbGV0IGJydXNoZWQgPSBfLmludGVyc2VjdGlvbiguLi5BcnJheS5mcm9tKGJydXNoZXMudmFsdWVzKCkpKTtcblxuICAgICAgICAgIC8vIElmIG5vIGVsZW1lbnQgaXMgYnJ1c2hlZCByZXR1cm4gYSB4IHRvIGxldCB0aGUgc3lzdGVtIGtub3cgdGhhdFxuICAgICAgICAgIC8vIHRoZXJlIGFyZSBicnVzaGVzIGFjdGl2ZVxuICAgICAgICAgIGlmKGJydXNoZXMuc2l6ZSA+IDAgJiYgYnJ1c2hlZC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICBicnVzaGVkLnB1c2goXCJ4XCIpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5icnVzaGluZyA9IGJydXNoZWQ7XG4gICAgfVxuXG4gICAgaW5pdENoYXJ0KCkge1xuICAgICAgICAvLyBhcHBlbmQgdGhlIHN2ZyBvYmplY3QgdG8gdGhlIGNoYXJ0IGRpdiBvZiB0aGUgcGFnZVxuICAgICAgICAvLyBhcHBlbmQgYSAnZ3JvdXAnIGVsZW1lbnQgdG8gJ3N2ZydcbiAgICAgICAgLy8gbW92ZXMgdGhlICdncm91cCcgZWxlbWVudCB0byB0aGUgdG9wIGxlZnQgbWFyZ2luXG4gICAgICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHRoaXMuZWxlbWVudClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKVxuICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMubWFyZ2luLmxlZnQgKyBcIixcIiArIHRoaXMubWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAgICAgICAvLyBzZXQgdGhlIHggcmFuZ2VcbiAgICAgICAgdGhpcy55ID0gZDMuc2NhbGVQb2ludCgpXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHRoaXMuaGVpZ2h0XSk7XG5cbiAgICAgICAgLy8gQmFzaWMgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5saW5lID0gZDMubGluZSgpXG4gICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZU1vbm90b25lWSk7XG4gICAgfVxuXG4gICAgdXBkYXRlSGlnaGxpZ2h0KCkge1xuICAgICAgICB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGRbXCJoaWdobGlnaHRcIl1cbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlQ2hhcnQoKSB7XG4gICAgICAgIC8vIEdldCBjdXJyZW50IGRhdGFzZXQgZGltZW5zaW9uczogS2V5cyBvZiB0aGUgbWFwXG4gICAgICAgIGlmKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkMy5rZXlzKHRoaXMuZGF0YVswXVtcImRhdGFcIl0pLmZpbHRlcigoZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkICE9IFwibmFtZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBjb3JyZXNwb25kaW5nIHkgYXhpc1xuICAgICAgICAvLyBDdXJyZW50bHkgb25seSBsaW5lYXIgdmFsdWVzXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy5tYXAoKGRpbSkgPT4ge1xuICAgICAgICAgICAgbGV0IGV4dCA9IDxhbnk+IGQzLmV4dGVudCh0aGlzLmRhdGEsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbXCJkYXRhXCJdW2RpbV07XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZihleHRbMF0gPT0gZXh0WzFdKSB7XG4gICAgICAgICAgICAgICAgZXh0WzBdIC09IGV4dFswXSowLjE7XG4gICAgICAgICAgICAgICAgZXh0WzFdICs9IGV4dFsxXSowLjE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMueFtkaW1dID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgICAgICAgICAucmFuZ2UoW3RoaXMud2lkdGgsIDBdKVxuICAgICAgICAgICAgICAgICAgICAuZG9tYWluKFtleHRbMV0sIGV4dFswXV0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgeCBheGlzXG4gICAgICAgIHRoaXMueS5kb21haW4odGhpcy5kaW1lbnNpb25zKTtcblxuICAgICAgICAvLyBBZGQgZ3JleSBiYWNrZ3JvdW5kIGxpbmVzIGZvciBjb250ZXh0LlxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLnN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgICAgICAgLmRhdGEodGhpcy5kYXRhKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKFwiaGlnaGxpZ2h0XCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDEpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJiYWNrZ3JvdW5kXCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDIpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiB7IHJldHVybiB0aGlzLnBhdGgoZFtcImRhdGFcIl0pfSlcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIChkKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBkW1wiaWRcIl1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENyZWF0ZSBsb2NhbCB2ZXJzaW9ucyBvZiBjbGFzcyB2YXJpYWJsZXNcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgZHVlIHRvIHRoZSBuYXR1cmUgb2YgVFMgYW5kIEQzXG5cbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy53aWR0aFxuICAgICAgICBsZXQgeCA9IHRoaXMueDtcbiAgICAgICAgbGV0IGRhdCA9IHRoaXMuZGF0YVxuICAgICAgICBsZXQgZ2V0QnJ1c2hpbmcgPSB0aGlzLmdldEJydXNoaW5nO1xuXG4gICAgICAgIC8vIENyZWF0ZSBkcmF3aW5nIGFyZWFcbiAgICAgICAgbGV0IGcgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIuZGltZW5zaW9uXCIpXG4gICAgICAgICAgICAuZGF0YSh0aGlzLmRpbWVuc2lvbnMpXG4gICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImRpbWVuc2lvblwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMueShkKSArIFwiKVwiOyB9KTtcblxuICAgICAgICAvLyBBZGQgYXhpc1xuICAgICAgICBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNhbGwoZDMuYXhpc1RvcCh4W2RdKSk7XG4gICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIHRpbHRlcyBmb3IgdGhlIGF4aXNcbiAgICAgICAgZy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIC05KVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IHsgcmV0dXJuIGQ7IH0pO1xuXG4gICAgICAgIC8vIEFkZCBhbmQgc3RvcmUgYSBicnVzaCBmb3IgZWFjaCBheGlzLlxuICAgICAgICBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJicnVzaFwiKVxuICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2FsbChkMy5icnVzaFgoKVxuICAgICAgICAgICAgICAgIC5leHRlbnQoW1swLCAtOV0sIFt3aWR0aCwgOV1dKVxuICAgICAgICAgICAgICAgIC5vbihcImJydXNoXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgIGlmICghZDMuZXZlbnQuc291cmNlRXZlbnQpIHJldHVybjsgLy8gT25seSB0cmFuc2l0aW9uIGFmdGVyIGlucHV0LlxuXG4gICAgICAgICAgICAgICAgICAgICBnZXRCcnVzaGluZyhnLCB4LCBkYXQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oXCJlbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgaWYgKCFkMy5ldmVudC5zb3VyY2VFdmVudCkgcmV0dXJuOyAvLyBPbmx5IHRyYW5zaXRpb24gYWZ0ZXIgaW5wdXQuXG5cbiAgICAgICAgICAgICAgICAgICAgIGdldEJydXNoaW5nKGcsIHgsIGRhdClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/parallel-coordinates-vertical',["require", "exports", "d3", "lodash", "aurelia-framework"], function (require, exports, d3, _, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var parallelCoordinatesVertical = (function () {
        function parallelCoordinatesVertical(element, bindingEngine) {
            var _this = this;
            this.bindingEngine = bindingEngine;
            this.margin = { top: 60, right: 20, bottom: 30, left: 40 };
            this.redraw = 0;
            this.data = [];
            this.x = {};
            this.dimensions = [];
            this.x_size = 500;
            this.y_size = 500;
            this.getBrushing = function (g, x, dat) {
                var temp = [];
                var brushes = new Map();
                g.selectAll(".brush")
                    .filter(function (d) {
                    return d3.brushSelection(this);
                })
                    .each(function (d) {
                    var brush_selection = d3.brushSelection(this);
                    var extent = [];
                    var selection = [];
                    if (brush_selection != null) {
                        extent = [x[d].invert(brush_selection[1]), x[d].invert(brush_selection[0])];
                    }
                    var brushed_elements = dat.filter(function (x) { return x["data"][d] >= extent[0] && x["data"][d] <= extent[1]; });
                    brushes.set(d, brushed_elements.map(function (x) { return x["id"]; }));
                });
                var brushed = _.intersection.apply(_, Array.from(brushes.values()));
                if (brushes.size > 0 && brushed.length == 0) {
                    brushed.push("x");
                }
                _this.brushing = brushed;
            };
            this.element = element;
        }
        parallelCoordinatesVertical.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.initChart();
            this.updateChart();
        };
        parallelCoordinatesVertical.prototype.dataMutated = function (splices) {
            this.updateChart();
        };
        parallelCoordinatesVertical.prototype.redrawChanged = function () {
            if (this.data.length > 1) {
                this.updateHighlight();
            }
        };
        parallelCoordinatesVertical.prototype.unbind = function () {
            this.subscription.dispose();
        };
        parallelCoordinatesVertical.prototype.path = function (d) {
            var _this = this;
            return this.line(this.dimensions.map(function (p) {
                return [_this.x[p](d[p]), _this.y(p)];
            }));
        };
        parallelCoordinatesVertical.prototype.initChart = function () {
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom)
                .append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
            this.y = d3.scalePoint()
                .range([0, this.height]);
            this.line = d3.line()
                .curve(d3.curveMonotoneY);
        };
        parallelCoordinatesVertical.prototype.updateHighlight = function () {
            this.svg.selectAll(".line")
                .classed("highlight", function (d) {
                if (d["highlight"] == 1) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .classed("background", function (d) {
                if (d["highlight"] == 2) {
                    return true;
                }
                else {
                    return false;
                }
            });
            this.svg.selectAll(".line.highlight").moveToFront();
        };
        parallelCoordinatesVertical.prototype.updateChart = function () {
            var _this = this;
            if (this.data.length > 0) {
                this.dimensions = d3.keys(this.data[0]["data"]).filter(function (d) {
                    return d != "name";
                });
            }
            this.dimensions.map(function (dim) {
                var ext = d3.extent(_this.data, function (data) {
                    return data["data"][dim];
                });
                if (ext[0] == ext[1]) {
                    ext[0] -= ext[0] * 0.1;
                    ext[1] += ext[1] * 0.1;
                }
                _this.x[dim] = d3.scaleLinear()
                    .range([_this.width, 0])
                    .domain([ext[1], ext[0]]);
            });
            this.y.domain(this.dimensions);
            this.background = this.svg.append("g")
                .selectAll("path")
                .data(this.data)
                .enter().append("path")
                .attr("class", "line")
                .classed("highlight", function (d) {
                if (d["highlight"] == 1) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .classed("background", function (d) {
                if (d["highlight"] == 2) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .attr("d", function (d) { return _this.path(d["data"]); });
            var width = this.width;
            var x = this.x;
            var dat = this.data;
            var getBrushing = this.getBrushing;
            var g = this.svg.selectAll(".dimension")
                .data(this.dimensions)
                .enter().append("g")
                .attr("class", "dimension")
                .attr("transform", function (d) {
                return "translate(0," + _this.y(d) + ")";
            });
            g.append("g")
                .each(function (d) {
                d3.select(this).call(d3.axisTop(x[d]));
            });
            g.append("text")
                .style("text-anchor", "middle")
                .attr("y", -9)
                .attr("transform", "rotate(-90)")
                .text(function (d) { return d; });
            g.append("g")
                .attr("class", "brush")
                .each(function (d) {
                d3.select(this).call(d3.brushX()
                    .extent([[0, -9], [width, 9]])
                    .on("brush", function () {
                    if (!d3.event.sourceEvent)
                        return;
                    getBrushing(g, x, dat);
                })
                    .on("end", function () {
                    if (!d3.event.sourceEvent)
                        return;
                    getBrushing(g, x, dat);
                }));
            });
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], parallelCoordinatesVertical.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], parallelCoordinatesVertical.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], parallelCoordinatesVertical.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], parallelCoordinatesVertical.prototype, "data", void 0);
        parallelCoordinatesVertical = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], parallelCoordinatesVertical);
        return parallelCoordinatesVertical;
    }());
    exports.parallelCoordinatesVertical = parallelCoordinatesVertical;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9wYXJhbGxlbC1jb29yZGluYXRlcy12ZXJ0aWNhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQTtRQThCSSxxQ0FBWSxPQUFPLEVBQVUsYUFBYTtZQUExQyxpQkFFQztZQUY0QixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtZQTVCaEMsV0FBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ3RELFdBQU0sR0FBRyxDQUFDLENBQUM7WUFNWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1lBUVosTUFBQyxHQUFHLEVBQUUsQ0FBQztZQUVQLGVBQVUsR0FBUSxFQUFFLENBQUM7WUFNckIsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFzRGIsZ0JBQVcsR0FBRyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztnQkFDNUIsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFDO2dCQUNuQixJQUFJLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUV4QixDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztxQkFDbEIsTUFBTSxDQUFDLFVBQWUsQ0FBQztvQkFDdEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsVUFBZSxDQUFDO29CQUNsQixJQUFJLGVBQWUsR0FBSSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUM5QyxJQUFJLE1BQU0sR0FBUSxFQUFFLENBQUE7b0JBQ3BCLElBQUksU0FBUyxHQUFRLEVBQUUsQ0FBQztvQkFFeEIsRUFBRSxDQUFBLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLE1BQU0sR0FB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QUssQ0FBQyxXQUFXLENBQUM7d0JBQUMsTUFBTSxDQUFDO29CQUVsQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDM0IsQ0FBQyxDQUFDO3FCQUNELEVBQUUsQ0FBQyxLQUFLLEVBQUU7b0JBQ04sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzt3QkFBQyxNQUFNLENBQUM7b0JBRWxDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dCQUMzQixDQUFDLENBQUMsQ0FDTCxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO1FBOU9TO1lBQVQsNEJBQVE7O21FQUF1RDtRQUN0RDtZQUFULDRCQUFROzttRUFBWTtRQUdpQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7cUVBQVU7UUFHckQ7WUFBVCw0QkFBUTs7aUVBQVc7UUFUWCwyQkFBMkI7WUFGdkMsMEJBQU0sQ0FBQyxPQUFPLEVBQUUsaUNBQWEsQ0FBQztZQUM5QiwwQkFBTSxFQUFFOztXQUNJLDJCQUEyQixDQWlQdkM7UUFBRCxrQ0FBQztLQWpQRCxBQWlQQyxJQUFBO0lBalBZLGtFQUEyQiIsImZpbGUiOiJjaGFydHMvcGFyYWxsZWwtY29vcmRpbmF0ZXMtdmVydGljYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7aW5qZWN0LCBub1ZpZXcsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgQmluZGluZ0VuZ2luZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEVsZW1lbnQsIEJpbmRpbmdFbmdpbmUpXG5Abm9WaWV3KClcbmV4cG9ydCBjbGFzcyBwYXJhbGxlbENvb3JkaW5hdGVzVmVydGljYWwge1xuICAgIC8vIE9uZS1XYXlcbiAgICBAYmluZGFibGUgbWFyZ2luID0geyB0b3A6IDYwLCByaWdodDogMjAsIGJvdHRvbTogMzAsIGxlZnQ6IDQwIH07XG4gICAgQGJpbmRhYmxlIHJlZHJhdyA9IDA7XG5cbiAgICAvLyBUd28tV2F5XG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgYnJ1c2hpbmc7XG5cbiAgICAvLyBPYnNlcnZlZCBWYXJpYWJsZXNcbiAgICBAYmluZGFibGUgZGF0YSA9IFtdO1xuXG4gICAgLy8gQXVyZWxpYSB2YXJpYWJsZXNcbiAgICBwcml2YXRlIGVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG5cbiAgICAvLyBEMyB2YXJpYWJsZXNcbiAgICBwcml2YXRlIHN2ZztcbiAgICBwcml2YXRlIHggPSB7fTtcbiAgICBwcml2YXRlIHk7XG4gICAgcHJpdmF0ZSBkaW1lbnNpb25zID0gPGFueT5bXTtcbiAgICBwcml2YXRlIGxpbmU7XG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kO1xuICAgIHByaXZhdGUgZm9yZWdyb3VuZDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICBwcml2YXRlIHhfc2l6ZSA9IDUwMDtcbiAgICBwcml2YXRlIHlfc2l6ZSA9IDUwMDtcbiAgICBwcml2YXRlIHdpZHRoO1xuICAgIHByaXZhdGUgaGVpZ2h0O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgcHJpdmF0ZSBiaW5kaW5nRW5naW5lKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYmluZGluZyBhdHRyaWJ1dGVzXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgIC8vIHN1YnNjcmliZSB0byB0aGUgZGF0YSBhcnJheSBhbmQgd2F0Y2ggZm9yIGNoYW5nZXNcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5iaW5kaW5nRW5naW5lXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShzcGxpY2VzID0+IHRoaXMuZGF0YU11dGF0ZWQoc3BsaWNlcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICAgICAgICB0aGlzLnhfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgICAgIHRoaXMueV9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMueF9zaXplIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXG4gICAgICAgIC8vIERyYXcgdGhlIGdyYXBoXG4gICAgICAgIHRoaXMuaW5pdENoYXJ0KClcbiAgICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgY2hhcnQgaWYgdGhlIGRhdGEgY2hhbmdlc1xuICAgIGRhdGFNdXRhdGVkKHNwbGljZXMpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICAgIH1cblxuICAgIHJlZHJhd0NoYW5nZWQoKSB7XG4gICAgICAgIGlmKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhpZ2hsaWdodCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIHRoZSB3YXRjaGVyIGFmdGVyIGRpc3Bvc2luZyB0aGUgY2xhc3NcbiAgICB1bmJpbmQoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBEMyBmdW5jdGlvbnNcblxuICAgIC8vIERyYXcgdGhlIGxpbmVzXG4gICAgcHJpdmF0ZSBwYXRoKGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGluZSh0aGlzLmRpbWVuc2lvbnMubWFwKChwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gW3RoaXMueFtwXShkW3BdKSwgdGhpcy55KHApXTsgfSkpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBleHRlcm5hbCB2YXJpYWJsZXMgd2l0aCBjdXJyZW50IGJydXNoZXNcbiAgICBwcml2YXRlIGdldEJydXNoaW5nID0gKGcsIHgsIGRhdCkgPT4ge1xuICAgICAgICBsZXQgdGVtcCA9IDxhbnk+W107XG4gICAgICAgIGxldCBicnVzaGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIGcuc2VsZWN0QWxsKFwiLmJydXNoXCIpXG4gICAgICAgICAgLmZpbHRlcihmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDMuYnJ1c2hTZWxlY3Rpb24odGhpcyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZWFjaChmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICAgIGxldCBicnVzaF9zZWxlY3Rpb24gPSAgZDMuYnJ1c2hTZWxlY3Rpb24odGhpcylcbiAgICAgICAgICAgICAgbGV0IGV4dGVudCA9IDxhbnk+W11cbiAgICAgICAgICAgICAgbGV0IHNlbGVjdGlvbiA9IDxhbnk+W107XG5cbiAgICAgICAgICAgICAgaWYoYnJ1c2hfc2VsZWN0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIGV4dGVudCA9IFt4W2RdLmludmVydChicnVzaF9zZWxlY3Rpb25bMV0pLCB4W2RdLmludmVydChicnVzaF9zZWxlY3Rpb25bMF0pXVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgYnJ1c2hlZF9lbGVtZW50cyA9IGRhdC5maWx0ZXIoeCA9PiB4W1wiZGF0YVwiXVtkXSA+PSBleHRlbnRbMF0gJiYgeFtcImRhdGFcIl1bZF0gPD0gZXh0ZW50WzFdKVxuXG4gICAgICAgICAgICAgIGJydXNoZXMuc2V0KGQsIGJydXNoZWRfZWxlbWVudHMubWFwKHggPT4geFtcImlkXCJdKSlcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGxldCBicnVzaGVkID0gXy5pbnRlcnNlY3Rpb24oLi4uQXJyYXkuZnJvbShicnVzaGVzLnZhbHVlcygpKSk7XG5cbiAgICAgICAgICAvLyBJZiBubyBlbGVtZW50IGlzIGJydXNoZWQgcmV0dXJuIGEgeCB0byBsZXQgdGhlIHN5c3RlbSBrbm93IHRoYXRcbiAgICAgICAgICAvLyB0aGVyZSBhcmUgYnJ1c2hlcyBhY3RpdmVcbiAgICAgICAgICBpZihicnVzaGVzLnNpemUgPiAwICYmIGJydXNoZWQubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgYnJ1c2hlZC5wdXNoKFwieFwiKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuYnJ1c2hpbmcgPSBicnVzaGVkO1xuICAgIH1cblxuICAgIGluaXRDaGFydCgpIHtcbiAgICAgICAgLy8gYXBwZW5kIHRoZSBzdmcgb2JqZWN0IHRvIHRoZSBjaGFydCBkaXYgb2YgdGhlIHBhZ2VcbiAgICAgICAgLy8gYXBwZW5kIGEgJ2dyb3VwJyBlbGVtZW50IHRvICdzdmcnXG4gICAgICAgIC8vIG1vdmVzIHRoZSAnZ3JvdXAnIGVsZW1lbnQgdG8gdGhlIHRvcCBsZWZ0IG1hcmdpblxuICAgICAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpXG4gICAgICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcbiAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLm1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICAgICAgLy8gc2V0IHRoZSB4IHJhbmdlXG4gICAgICAgIHRoaXMueSA9IGQzLnNjYWxlUG9pbnQoKVxuICAgICAgICAgICAgLnJhbmdlKFswLCB0aGlzLmhlaWdodF0pO1xuXG4gICAgICAgIC8vIEJhc2ljIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMubGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAuY3VydmUoZDMuY3VydmVNb25vdG9uZVkpO1xuICAgIH1cblxuICAgIHVwZGF0ZUhpZ2hsaWdodCgpIHtcbiAgICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmVcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKFwiaGlnaGxpZ2h0XCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDEpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJiYWNrZ3JvdW5kXCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDIpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZS5oaWdobGlnaHRcIikubW92ZVRvRnJvbnQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDaGFydCgpIHtcbiAgICAgICAgLy8gR2V0IGN1cnJlbnQgZGF0YXNldCBkaW1lbnNpb25zOiBLZXlzIG9mIHRoZSBtYXBcbiAgICAgICAgaWYodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGQzLmtleXModGhpcy5kYXRhWzBdW1wiZGF0YVwiXSkuZmlsdGVyKChkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQgIT0gXCJuYW1lXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIGNvcnJlc3BvbmRpbmcgeSBheGlzXG4gICAgICAgIC8vIEN1cnJlbnRseSBvbmx5IGxpbmVhciB2YWx1ZXNcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLm1hcCgoZGltKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXh0ID0gPGFueT4gZDMuZXh0ZW50KHRoaXMuZGF0YSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtcImRhdGFcIl1bZGltXTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmKGV4dFswXSA9PSBleHRbMV0pIHtcbiAgICAgICAgICAgICAgICBleHRbMF0gLT0gZXh0WzBdKjAuMTtcbiAgICAgICAgICAgICAgICBleHRbMV0gKz0gZXh0WzFdKjAuMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy54W2RpbV0gPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAgICAgICAgIC5yYW5nZShbdGhpcy53aWR0aCwgMF0pXG4gICAgICAgICAgICAgICAgICAgIC5kb21haW4oW2V4dFsxXSwgZXh0WzBdXSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB4IGF4aXNcbiAgICAgICAgdGhpcy55LmRvbWFpbih0aGlzLmRpbWVuc2lvbnMpO1xuXG4gICAgICAgIC8vIEFkZCBncmV5IGJhY2tncm91bmQgbGluZXMgZm9yIGNvbnRleHQuXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuc3ZnLmFwcGVuZChcImdcIilcblxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgICAgICAgIC5kYXRhKHRoaXMuZGF0YSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgICAgICAuY2xhc3NlZChcImhpZ2hsaWdodFwiLCBmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICAgICAgaWYoZFtcImhpZ2hsaWdodFwiXSA9PSAxKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jbGFzc2VkKFwiYmFja2dyb3VuZFwiLCBmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICAgICAgaWYoZFtcImhpZ2hsaWdodFwiXSA9PSAyKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCAoZCkgPT4geyByZXR1cm4gdGhpcy5wYXRoKGRbXCJkYXRhXCJdKX0pO1xuXG4gICAgICAgIC8vIENyZWF0ZSBsb2NhbCB2ZXJzaW9ucyBvZiBjbGFzcyB2YXJpYWJsZXNcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgZHVlIHRvIHRoZSBuYXR1cmUgb2YgVFMgYW5kIEQzXG5cbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy53aWR0aFxuICAgICAgICBsZXQgeCA9IHRoaXMueDtcbiAgICAgICAgbGV0IGRhdCA9IHRoaXMuZGF0YVxuICAgICAgICBsZXQgZ2V0QnJ1c2hpbmcgPSB0aGlzLmdldEJydXNoaW5nO1xuXG4gICAgICAgIC8vIENyZWF0ZSBkcmF3aW5nIGFyZWFcbiAgICAgICAgbGV0IGcgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIuZGltZW5zaW9uXCIpXG4gICAgICAgICAgICAuZGF0YSh0aGlzLmRpbWVuc2lvbnMpXG4gICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImRpbWVuc2lvblwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMueShkKSArIFwiKVwiOyB9KTtcblxuICAgICAgICAvLyBBZGQgYXhpc1xuICAgICAgICBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNhbGwoZDMuYXhpc1RvcCh4W2RdKSk7XG4gICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIHRpbHRlcyBmb3IgdGhlIGF4aXNcbiAgICAgICAgZy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIC05KVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IHsgcmV0dXJuIGQ7IH0pO1xuXG4gICAgICAgIC8vIEFkZCBhbmQgc3RvcmUgYSBicnVzaCBmb3IgZWFjaCBheGlzLlxuICAgICAgICBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJicnVzaFwiKVxuICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2FsbChkMy5icnVzaFgoKVxuICAgICAgICAgICAgICAgIC5leHRlbnQoW1swLCAtOV0sIFt3aWR0aCwgOV1dKVxuICAgICAgICAgICAgICAgIC5vbihcImJydXNoXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgIGlmICghZDMuZXZlbnQuc291cmNlRXZlbnQpIHJldHVybjsgLy8gT25seSB0cmFuc2l0aW9uIGFmdGVyIGlucHV0LlxuXG4gICAgICAgICAgICAgICAgICAgICBnZXRCcnVzaGluZyhnLCB4LCBkYXQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oXCJlbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgaWYgKCFkMy5ldmVudC5zb3VyY2VFdmVudCkgcmV0dXJuOyAvLyBPbmx5IHRyYW5zaXRpb24gYWZ0ZXIgaW5wdXQuXG5cbiAgICAgICAgICAgICAgICAgICAgIGdldEJydXNoaW5nKGcsIHgsIGRhdClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/spatial-grid',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpatialGrid = (function () {
        function SpatialGrid(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 20, bottom: 20, left: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.x_label = "days";
            this.y_label = "y";
            this.redraw = 0;
            this.data = [];
            this.center = 1.0;
            this.weight = 1.0;
            this.x_size = 440;
            this.y_size = 440;
            this.redrawGridNecessary = false;
            this.element = element;
        }
        SpatialGrid.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
        };
        SpatialGrid.prototype.dataMutated = function (splices) {
            if (!this.svg) {
                this.draw_grid();
            }
            if (this.data.length > 1) {
                if (this.redrawGridNecessary) {
                    this.svg.remove();
                    this.draw_grid();
                    this.redrawGridNecessary = false;
                }
                this.update_grid();
            }
        };
        SpatialGrid.prototype.redrawChanged = function () {
            if (this.svg) {
                this.redrawGridNecessary = true;
            }
        };
        SpatialGrid.prototype.unbind = function () {
            this.subscription.dispose();
        };
        SpatialGrid.prototype.updateGridSize = function () {
            var self = this;
            var grid_length = this.data.length;
            var rw = Math.floor(this.width / grid_length);
            var rh = Math.floor(this.height / grid_length);
            this.drawing_area.selectAll('g').remove();
            this.drawing_area.selectAll('g')
                .data(this.data)
                .enter()
                .append('g')
                .attr('transform', function (d, i) {
                return 'translate(0, ' + (self.width / grid_length) * i + ')';
            });
            this.drawing_area.selectAll('rect')
                .data(this.data)
                .data(function (d) {
                return d;
            })
                .enter()
                .append('rect')
                .attr('x', function (d, i) {
                return (self.width / grid_length) * i;
            })
                .attr('width', rw)
                .attr('height', rh)
                .attr('class', function (d) { return d; });
        };
        SpatialGrid.prototype.draw_grid = function () {
            var self = this;
            var grid_length = this.data.length;
            this.svg = d3.select(this.element)
                .append('svg')
                .attr('width', this.width)
                .attr('height', this.height)
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
            var rw = Math.floor(this.width / grid_length);
            var rh = Math.floor(this.height / grid_length);
            this.drawing_area = this.svg.selectAll('g')
                .data(this.data)
                .enter()
                .append('g')
                .attr('transform', function (d, i) {
                return 'translate(0, ' + (self.width / grid_length) * i + ')';
            });
            this.drawing_area.selectAll('rect')
                .data(this.data)
                .data(function (d) {
                return d;
            })
                .enter()
                .append('rect')
                .attr('x', function (d, i) {
                return (self.width / grid_length) * i;
            })
                .attr('width', rw)
                .attr('height', rh)
                .attr('class', function (d) { return d; });
        };
        SpatialGrid.prototype.update_grid = function () {
            this.svg.selectAll('g')
                .data(this.data)
                .selectAll('rect')
                .data(function (d) {
                return d;
            })
                .attr('class', function (d) { return d; });
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SpatialGrid.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SpatialGrid.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SpatialGrid.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SpatialGrid.prototype, "x_label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SpatialGrid.prototype, "y_label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SpatialGrid.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], SpatialGrid.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SpatialGrid.prototype, "data", void 0);
        SpatialGrid = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], SpatialGrid);
        return SpatialGrid;
    }());
    exports.SpatialGrid = SpatialGrid;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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WTtRQUdpQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7cURBQVU7UUFHckQ7WUFBVCw0QkFBUTs7aURBQVc7UUFiVCxXQUFXO1lBRnZCLDBCQUFNLENBQUMsT0FBTyxFQUFFLGlDQUFhLENBQUM7WUFDOUIsMEJBQU0sRUFBRTs7V0FDSSxXQUFXLENBZ0x2QjtRQUFELGtCQUFDO0tBaExELEFBZ0xDLElBQUE7SUFoTFksa0NBQVciLCJmaWxlIjoiY2hhcnRzL3NwYXRpYWwtZ3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHtpbmplY3QsIG5vVmlldywgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBCaW5kaW5nRW5naW5lfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudCwgQmluZGluZ0VuZ2luZSlcbkBub1ZpZXcoKVxuZXhwb3J0IGNsYXNzIFNwYXRpYWxHcmlkIHtcbiAgLy8gT25lLVdheVxuICBAYmluZGFibGUgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogMjAsIGJvdHRvbTogMjAsIGxlZnQ6IDIwIH07XG4gIEBiaW5kYWJsZSB4X2F0dHJpYnV0ZSA9IFwieFwiO1xuICBAYmluZGFibGUgeV9hdHRyaWJ1dGUgPSBcInlcIjtcbiAgQGJpbmRhYmxlIHhfbGFiZWwgPSBcImRheXNcIjtcbiAgQGJpbmRhYmxlIHlfbGFiZWwgPSBcInlcIjtcbiAgQGJpbmRhYmxlIHJlZHJhdyA9IDA7XG5cbiAgLy8gVHdvLVdheVxuICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBicnVzaGluZztcblxuICAvLyBPYnNlcnZlZCBWYXJpYWJsZXNcbiAgQGJpbmRhYmxlIGRhdGEgPSBbXTtcblxuICAvLyBBdXJlbGlhIHZhcmlhYmxlc1xuICBwcml2YXRlIGVsZW1lbnQ7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHNlY29uZF9zdWJzY3JpcHRpb247XG5cbiAgLy8gRDMgdmFyaWFibGVzXG4gIHByaXZhdGUgbW91c2VfZXZlbnQ7XG4gIHByaXZhdGUgc3ZnO1xuICBwcml2YXRlIGRyYXdpbmdfYXJlYTtcbiAgcHJpdmF0ZSBmb2N1cztcbiAgcHJpdmF0ZSB4O1xuICBwcml2YXRlIHk7XG4gIHByaXZhdGUgZm9jdXNfeDtcbiAgcHJpdmF0ZSBnYXVzc194O1xuICBwcml2YXRlIGdhdXNzX3k7XG4gIHByaXZhdGUgZ2F1c3Nfc2lnbWE7XG4gIHByaXZhdGUgZ3JhZGllbnRDb2xvcjtcbiAgcHJpdmF0ZSB2YWx1ZWxpbmU7XG4gIHByaXZhdGUgZm9jdXNsaW5lO1xuICBwcml2YXRlIGhpc3RvZ3JhbTtcbiAgcHJpdmF0ZSBicnVzaDtcbiAgcHJpdmF0ZSBjZW50ZXIgPSAxLjA7XG4gIHByaXZhdGUgd2VpZ2h0ID0gMS4wO1xuXG4gIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgcHJpdmF0ZSB3aWR0aDtcbiAgcHJpdmF0ZSBoZWlnaHQ7XG4gIHByaXZhdGUgeF9zaXplID0gNDQwO1xuICBwcml2YXRlIHlfc2l6ZSA9IDQ0MDtcblxuICBwcml2YXRlIHJlZHJhd0dyaWROZWNlc3NhcnkgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwcml2YXRlIGJpbmRpbmdFbmdpbmUpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgLy8gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYmluZGluZyBhdHRyaWJ1dGVzXG4gIGF0dGFjaGVkKCkge1xuICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gdGhlIGRhdGEgYXJyYXkgYW5kIHdhdGNoIGZvciBjaGFuZ2VzXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5iaW5kaW5nRW5naW5lXG4gICAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgICAgLnN1YnNjcmliZShzcGxpY2VzID0+IHRoaXMuZGF0YU11dGF0ZWQoc3BsaWNlcykpO1xuICAgICAgICB9XG5cbiAgICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICAgIC8vIHRoaXMueF9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAvLyB0aGlzLnlfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMueF9zaXplIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuICAgICAgLy8gdGhpcy5kcmF3X2dyaWQoW1wiU1wiLFwiI2RjZGNkY1wiLFwiSVwiLFwiI2M4MjYwNVwiLFwiUlwiLFwiIzZmYzA0MVwiXSlcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY2hhcnQgaWYgdGhlIGRhdGEgY2hhbmdlc1xuICBkYXRhTXV0YXRlZChzcGxpY2VzKSB7XG4gICAgaWYoIXRoaXMuc3ZnKSB7XG4gICAgICB0aGlzLmRyYXdfZ3JpZCgpXG4gICAgfVxuICAgIGlmKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAvLyB0aGlzLmRyYXdfZ3JpZChbXCJTXCIsXCIjZGNkY2RjXCIsXCJJXCIsXCIjYzgyNjA0XCIsXCJSXCIsXCIjNWZjNDBcIl0pXG4gICAgICAvLyB0aGlzLnVwZGF0ZV9ncmlkKFtcIlNcIixcIiNkY2RjZGNcIixcIklcIixcIiNjODI2MDVcIixcIlJcIixcIiM2ZmMwNDFcIl0pO1xuICAgICAgaWYodGhpcy5yZWRyYXdHcmlkTmVjZXNzYXJ5KSB7XG4gICAgICAgIHRoaXMuc3ZnLnJlbW92ZSgpXG4gICAgICAgIHRoaXMuZHJhd19ncmlkKClcbiAgICAgICAgdGhpcy5yZWRyYXdHcmlkTmVjZXNzYXJ5ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZV9ncmlkKCk7XG4gICAgfVxuICB9XG5cbiAgcmVkcmF3Q2hhbmdlZCgpIHtcbiAgICBpZih0aGlzLnN2Zykge1xuICAgICAgdGhpcy5yZWRyYXdHcmlkTmVjZXNzYXJ5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gIH1cblxuICB1cGRhdGVHcmlkU2l6ZSgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGdyaWRfbGVuZ3RoID0gdGhpcy5kYXRhLmxlbmd0aDtcblxuICAgIGxldCBydyA9IE1hdGguZmxvb3IodGhpcy53aWR0aC9ncmlkX2xlbmd0aCk7XG4gICAgbGV0IHJoID0gTWF0aC5mbG9vcih0aGlzLmhlaWdodC9ncmlkX2xlbmd0aCk7XG5cbiAgICB0aGlzLmRyYXdpbmdfYXJlYS5zZWxlY3RBbGwoJ2cnKS5yZW1vdmUoKTtcblxuICAgIHRoaXMuZHJhd2luZ19hcmVhLnNlbGVjdEFsbCgnZycpXG4gICAgICAgICAgICAuZGF0YSh0aGlzLmRhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoMCwgJyArIChzZWxmLndpZHRoL2dyaWRfbGVuZ3RoKSAqIGkgKyAnKSc7XG4gICAgICAgICAgICB9KTtcblxuICAgIHRoaXMuZHJhd2luZ19hcmVhLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAgICAgICAuZGF0YSh0aGlzLmRhdGEpXG4gICAgICAgICAgICAuZGF0YSggKGQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICByZXR1cm4gKHNlbGYud2lkdGgvZ3JpZF9sZW5ndGgpICogaTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBydylcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCByaClcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gPHN0cmluZz5kKTtcbiAgfVxuXG4gIGRyYXdfZ3JpZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGdyaWRfbGVuZ3RoID0gdGhpcy5kYXRhLmxlbmd0aDtcblxuICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHRoaXMuZWxlbWVudClcbiAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGgpXG4gICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0KVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLm1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICBsZXQgcncgPSBNYXRoLmZsb29yKHRoaXMud2lkdGgvZ3JpZF9sZW5ndGgpO1xuICAgIGxldCByaCA9IE1hdGguZmxvb3IodGhpcy5oZWlnaHQvZ3JpZF9sZW5ndGgpO1xuXG4gICAgdGhpcy5kcmF3aW5nX2FyZWEgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoJ2cnKVxuICAgICAgICAgICAgLmRhdGEodGhpcy5kYXRhKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKDAsICcgKyAoc2VsZi53aWR0aC9ncmlkX2xlbmd0aCkgKiBpICsgJyknO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB0aGlzLmRyYXdpbmdfYXJlYS5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgICAgICAgLmRhdGEodGhpcy5kYXRhKVxuICAgICAgICAgICAgLmRhdGEoIChkKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChzZWxmLndpZHRoL2dyaWRfbGVuZ3RoKSAqIGk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgcncpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgcmgpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCBkID0+IDxzdHJpbmc+ZCk7XG4gICAgfVxuXG4gICAgdXBkYXRlX2dyaWQoKXtcbiAgICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKCdnJylcbiAgICAgICAgICAgIC5kYXRhKHRoaXMuZGF0YSlcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgICAgICAgLmRhdGEoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiA8c3RyaW5nPmQpXG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/stacked-bar-chart',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stackedBarChart = (function () {
        function stackedBarChart(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.redraw = 0;
            this.data = [];
            this.x_size = 900;
            this.y_size = 500;
            this.element = element;
        }
        stackedBarChart.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.resize_sub = this.bindingEngine
                .propertyObserver(this.element.parentElement, "offsetWidth")
                .subscribe(function (n) { return _this.resize(); });
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.initChart();
            this.updateChart();
        };
        stackedBarChart.prototype.resize = function () {
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.resizeChart();
            this.updateChart();
        };
        stackedBarChart.prototype.dataMutated = function (splices) {
            if (this.data.length > 0) {
                this.updateChart();
            }
            else {
                this.svg.selectAll(".medikament").remove();
            }
        };
        stackedBarChart.prototype.unbind = function () {
            this.subscription.dispose();
            this.resize_sub.dispose();
        };
        stackedBarChart.prototype.initChart = function () {
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.barchart = this.svg
                .append("g")
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x = d3.scaleBand()
                .padding(0.1)
                .range([0, this.width]);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.z = d3.scaleOrdinal()
                .range(["#33CA7F", "#ECE4B7", "#FC9F5B"]);
            this.barchart.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.barchart.append("g")
                .attr("class", "yAxis");
            this.barchart.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .text("Kosten");
            this.legend = this.barchart.append("g")
                .attr("font-family", "sans-serif")
                .attr("font-size", 10)
                .attr("text-anchor", "end")
                .attr("class", "legend");
        };
        stackedBarChart.prototype.resizeChart = function () {
            this.svg
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.barchart
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x
                .range([0, this.width]);
            this.y
                .range([this.height, 0]);
            this.barchart.append("g")
                .attr("transform", "translate(0," + this.height + ")");
        };
        stackedBarChart.prototype.updateChart = function () {
            var self = this;
            var keys = [];
            if (this.data.length > 0)
                keys = Object.getOwnPropertyNames(this.data[0]).slice(1);
            var totals = this.data.map(function (x) {
                var s = { key: x.x, value: 0 };
                keys.forEach(function (y) {
                    s.value = s.value + +x[y];
                });
                return s;
            });
            this.x.domain(this.data.map(function (d) { return d.x; }));
            this.y.domain([0, d3.max(totals, function (x) { return x.value; })]).nice();
            this.z.domain(keys);
            var t = d3.transition("default")
                .duration(500);
            var stack = d3.stack().keys(keys)(self.data);
            this.barchart.selectAll(".medikament").remove();
            var chart = this.barchart.selectAll(".medikament")
                .data(stack, function (x) { return x.key; });
            var bars = chart.enter().append("g")
                .attr("class", "medikament")
                .attr("fill", function (d) { return self.z(d.key); });
            bars.selectAll("rect")
                .data(function (d) { return d; })
                .enter().append("rect")
                .attr("x", function (d) { return self.x(d.data.x); })
                .attr("width", self.x.bandwidth())
                .attr("y", this.height)
                .attr("height", 0);
            bars.selectAll("rect")
                .transition(t)
                .attr("y", function (d) { return self.y(d[1]); })
                .attr("height", function (d) { return self.y(d[0]) - self.y(d[1]); });
            chart.exit().remove();
            var labels = this.barchart.selectAll(".labels")
                .data(totals, function (x) { return x.key; });
            labels.enter().append("text")
                .attr("class", "labels")
                .style("text-anchor", "middle")
                .merge(labels)
                .attr("x", function (d) { return self.x(d.key) + self.x.bandwidth() / 2; })
                .attr("y", function (d) { return self.y(d.value) - 3; })
                .text(function (d) { return d.value; });
            labels.exit().remove();
            this.barchart.selectAll(".xAxis")
                .attr("transform", "translate(0," + this.height + ")")
                .call(d3.axisBottom(this.x));
            this.barchart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            var legend_group = this.legend
                .selectAll("g")
                .data(keys.reverse(), function (x) { return x; });
            var legends = legend_group.enter().append("g");
            legends.append("rect")
                .attr("x", this.width - 19)
                .attr("width", 19)
                .attr("height", 19)
                .attr("fill", this.z);
            legends.append("text")
                .attr("x", this.width - 24)
                .attr("y", 9.5)
                .attr("dy", "0.32em")
                .text(function (d) { return d; });
            legend_group.merge(legends).attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });
            legend_group.exit().remove();
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], stackedBarChart.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], stackedBarChart.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], stackedBarChart.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], stackedBarChart.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], stackedBarChart.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], stackedBarChart.prototype, "data", void 0);
        stackedBarChart = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], stackedBarChart);
        return stackedBarChart;
    }());
    exports.stackedBarChart = stackedBarChart;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9zdGFja2VkLWJhci1jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQTtRQWdDRSx5QkFBWSxPQUFPLEVBQVUsYUFBYTtZQUFiLGtCQUFhLEdBQWIsYUFBYSxDQUFBO1lBOUJoQyxXQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNsRSxnQkFBVyxHQUFHLEdBQUcsQ0FBQztZQUNsQixnQkFBVyxHQUFHLEdBQUcsQ0FBQztZQUNsQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1lBTVgsU0FBSSxHQUFHLEVBQUUsQ0FBQztZQWtCWixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUduQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN6QixDQUFDO1FBR0Qsa0NBQVEsR0FBUjtZQUFBLGlCQXFCQztZQXBCQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhO3FCQUNuQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7WUFDckQsQ0FBQztZQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWE7aUJBQ2pDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztpQkFDM0QsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sRUFBRSxFQUFiLENB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RCxBQXVRQyxJQUFBO0lBdlFZLDBDQUFlIiwiZmlsZSI6ImNoYXJ0cy9zdGFja2VkLWJhci1jaGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgaW5qZWN0LCBub1ZpZXcsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgQmluZGluZ0VuZ2luZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50LCBCaW5kaW5nRW5naW5lKVxuQG5vVmlldygpXG5leHBvcnQgY2xhc3Mgc3RhY2tlZEJhckNoYXJ0IHtcbiAgLy8gT25lLVdheVxuICBAYmluZGFibGUgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogNjAsIGJvdHRvbTogMzUsIGxlZnQ6IDYwLCBtaWRkbGU6IDIwIH07XG4gIEBiaW5kYWJsZSB4X2F0dHJpYnV0ZSA9IFwieFwiO1xuICBAYmluZGFibGUgeV9hdHRyaWJ1dGUgPSBcInlcIjtcbiAgQGJpbmRhYmxlIHJlZHJhdyA9IDA7XG5cbiAgLy8gVHdvLVdheVxuICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBicnVzaGluZztcblxuICAvLyBPYnNlcnZlZCBWYXJpYWJsZXNcbiAgQGJpbmRhYmxlIGRhdGEgPSBbXTtcblxuICAvLyBBdXJlbGlhIHZhcmlhYmxlc1xuICBwcml2YXRlIGVsZW1lbnQ7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHJlc2l6ZV9zdWI7XG5cbiAgLy8gRDMgdmFyaWFibGVzXG4gIHByaXZhdGUgc3ZnO1xuICBwcml2YXRlIGJhcmNoYXJ0O1xuICBwcml2YXRlIHg7XG4gIHByaXZhdGUgeTtcbiAgcHJpdmF0ZSB6O1xuICBwcml2YXRlIGxlZ2VuZDtcblxuICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gIHByaXZhdGUgd2lkdGg7XG4gIHByaXZhdGUgaGVpZ2h0O1xuICBwcml2YXRlIHhfc2l6ZSA9IDkwMDtcbiAgcHJpdmF0ZSB5X3NpemUgPSA1MDA7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgcHJpdmF0ZSBiaW5kaW5nRW5naW5lKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGJpbmRpbmcgYXR0cmlidXRlc1xuICBhdHRhY2hlZCgpIHtcbiAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAvLyBzdWJzY3JpYmUgdG8gdGhlIGRhdGEgYXJyYXkgYW5kIHdhdGNoIGZvciBjaGFuZ2VzXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYmluZGluZ0VuZ2luZVxuICAgICAgICAuY29sbGVjdGlvbk9ic2VydmVyKHRoaXMuZGF0YSlcbiAgICAgICAgLnN1YnNjcmliZShzcGxpY2VzID0+IHRoaXMuZGF0YU11dGF0ZWQoc3BsaWNlcykpO1xuICAgIH1cblxuICAgIHRoaXMucmVzaXplX3N1YiA9IHRoaXMuYmluZGluZ0VuZ2luZVxuICAgICAgLnByb3BlcnR5T2JzZXJ2ZXIodGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQsIFwib2Zmc2V0V2lkdGhcIilcbiAgICAgIC5zdWJzY3JpYmUobiA9PiB0aGlzLnJlc2l6ZSgpKVxuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICAgIHRoaXMueF9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy55X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuICAgIHRoaXMuaW5pdENoYXJ0KClcbiAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgdGhpcy54X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLnlfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgIHRoaXMud2lkdGggPSB0aGlzLnhfc2l6ZSAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXG4gICAgdGhpcy5yZXNpemVDaGFydCgpO1xuICAgIHRoaXMudXBkYXRlQ2hhcnQoKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY2hhcnQgaWYgdGhlIGRhdGEgY2hhbmdlc1xuICBkYXRhTXV0YXRlZChzcGxpY2VzKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLm1lZGlrYW1lbnRcIikucmVtb3ZlKClcbiAgICB9XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICAgIHRoaXMucmVzaXplX3N1Yi5kaXNwb3NlKCk7XG4gIH1cblxuICBpbml0Q2hhcnQoKSB7XG4gICAgLy8gQ29tcGxldGUgZHJhd2luZyBhcmVhXG4gICAgdGhpcy5zdmcgPSBkMy5zZWxlY3QodGhpcy5lbGVtZW50KVxuICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pO1xuXG4gICAgLy8gTGluZWNoYXJ0IGFyZWFcbiAgICB0aGlzLmJhcmNoYXJ0ID0gdGhpcy5zdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGgpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodClcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMubWFyZ2luLmxlZnQgKyBcIiwgXCIgKyB0aGlzLm1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHRoaXMueCA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAucGFkZGluZygwLjEpXG4gICAgICAucmFuZ2UoWzAsIHRoaXMud2lkdGhdKTtcbiAgICB0aGlzLnkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW3RoaXMuaGVpZ2h0LCAwXSk7XG4gICAgdGhpcy56ID0gZDMuc2NhbGVPcmRpbmFsKClcbiAgICAgIC5yYW5nZShbXCIjMzNDQTdGXCIgLFwiI0VDRTRCN1wiLCBcIiNGQzlGNUJcIl0pXG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHRoaXMuYmFyY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieEF4aXNcIik7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHRoaXMuYmFyY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICAvLyB5IGF4aXMgbGFiZWxcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcInRleHRcIilcbiAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAuYXR0cihcInlcIiwgLTQpXG4gICAgICAudGV4dChcIktvc3RlblwiKTtcblxuXG4gICAgLy8gLy8gQWRkIHRleHRcbiAgICAvLyB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcInRleHRcIilcbiAgICAvLyAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJfdGV4dFwiKVxuICAgIC8vICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAvLyAgIC8vIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB0aGlzLngoZC5kYXRhLngpOyB9KVxuICAgIC8vICAgLnRleHQoXCJ0ZXN0XCIpXG4gICAgLy8gICAvLyAudGV4dChmdW5jdGlvbihkKSB7IHJldHVybiB0b3RhbHNbZC5kYXRhLnhdOyB9KVxuXG4gICAgLy8gYWRkIGxlZ2VuZFxuICAgIHRoaXMubGVnZW5kID0gdGhpcy5iYXJjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImZvbnQtZmFtaWx5XCIsIFwic2Fucy1zZXJpZlwiKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgMTApXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGVnZW5kXCIpO1xuICB9XG5cbiAgcmVzaXplQ2hhcnQoKSB7XG4gICAgdGhpcy5zdmdcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKTtcblxuICAgIC8vIExpbmVjaGFydCBhcmVhXG4gICAgdGhpcy5iYXJjaGFydFxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsIFwiICsgdGhpcy5tYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB0aGlzLnhcbiAgICAgIC5yYW5nZShbMCwgdGhpcy53aWR0aF0pO1xuICAgIHRoaXMueVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICB9XG4gIHVwZGF0ZUNoYXJ0KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgbGV0IGtleXMgPSBbXVxuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuZGF0YVswXSkuc2xpY2UoMSk7XG5cbiAgICBsZXQgdG90YWxzID0gdGhpcy5kYXRhLm1hcCh4ID0+IHtcbiAgICAgIGxldCBzID0geyBrZXk6IHgueCwgdmFsdWU6IDAgfTtcbiAgICAgIGtleXMuZm9yRWFjaCh5ID0+IHtcbiAgICAgICAgcy52YWx1ZSA9IHMudmFsdWUgKyAreFt5XTtcbiAgICAgIH0pXG4gICAgICByZXR1cm4gcztcbiAgICB9KVxuXG4gICAgdGhpcy54LmRvbWFpbih0aGlzLmRhdGEubWFwKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueDsgfSkpO1xuICAgIHRoaXMueS5kb21haW4oWzAsIGQzLm1heCh0b3RhbHMsIHggPT4geC52YWx1ZSldKS5uaWNlKCk7XG4gICAgdGhpcy56LmRvbWFpbihrZXlzKTtcblxuICAgIGxldCB0ID0gZDMudHJhbnNpdGlvbihcImRlZmF1bHRcIilcbiAgICAgIC5kdXJhdGlvbig1MDApO1xuXG4gICAgbGV0IHN0YWNrID0gZDMuc3RhY2soKS5rZXlzKGtleXMpKHNlbGYuZGF0YSlcblxuICAgIC8vIERlbGV0ZSBhbGwgYmFycyBiZWZvcmUgcmVyZW5kZXJpbmcgdGhlbVxuICAgIHRoaXMuYmFyY2hhcnQuc2VsZWN0QWxsKFwiLm1lZGlrYW1lbnRcIikucmVtb3ZlKClcblxuICAgIC8vIEpvaW5cbiAgICBsZXQgY2hhcnQgPSB0aGlzLmJhcmNoYXJ0LnNlbGVjdEFsbChcIi5tZWRpa2FtZW50XCIpXG4gICAgICAuZGF0YShzdGFjaywgeCA9PiB4LmtleSlcblxuICAgIC8vIEVudGVyXG4gICAgbGV0IGJhcnMgPSBjaGFydC5lbnRlcigpLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtZWRpa2FtZW50XCIpXG4gICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi56KGQua2V5KTsgfSlcblxuICAgIGJhcnMuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAgICAgIC5kYXRhKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQ7IH0pXG4gICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueChkLmRhdGEueCk7IH0pXG4gICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHNlbGYueC5iYW5kd2lkdGgoKSlcbiAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCB0aGlzLmhlaWdodClcbiAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDApXG5cbiAgICAvLyBVcGRhdGVcbiAgICBiYXJzLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgIC50cmFuc2l0aW9uKHQpXG4gICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi55KGRbMV0pOyB9KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi55KGRbMF0pIC0gc2VsZi55KGRbMV0pOyB9KVxuXG4gICAgLy8gRXhpdFxuICAgIGNoYXJ0LmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIC8vIEFkZCB0ZXh0c1xuICAgIGxldCBsYWJlbHMgPSB0aGlzLmJhcmNoYXJ0LnNlbGVjdEFsbChcIi5sYWJlbHNcIilcbiAgICAgIC5kYXRhKHRvdGFscywgeCA9PiB4LmtleSlcblxuICAgIGxhYmVscy5lbnRlcigpLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbHNcIilcbiAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgIC5tZXJnZShsYWJlbHMpXG4gICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi54KGQua2V5KSArIHNlbGYueC5iYW5kd2lkdGgoKS8yOyB9KVxuICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueShkLnZhbHVlKSAtIDM7IH0pXG4gICAgICAudGV4dChmdW5jdGlvbihkKSB7IHJldHVybiBkLnZhbHVlOyB9KVxuXG4gICAgbGFiZWxzLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIHRoaXMuYmFyY2hhcnQuc2VsZWN0QWxsKFwiLnhBeGlzXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgdGhpcy5oZWlnaHQgKyBcIilcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54KSk7XG5cbiAgICB0aGlzLmJhcmNoYXJ0LnNlbGVjdEFsbChcIi55QXhpc1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQodGhpcy55KSk7XG5cbiAgICAvLyBKb2luXG4gICAgbGV0IGxlZ2VuZF9ncm91cCA9IHRoaXMubGVnZW5kXG4gICAgICAuc2VsZWN0QWxsKFwiZ1wiKVxuICAgICAgLmRhdGEoa2V5cy5yZXZlcnNlKCksIHggPT4geClcblxuICAgIC8vIEVudGVyXG4gICAgbGV0IGxlZ2VuZHMgPSBsZWdlbmRfZ3JvdXAuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cbiAgICBsZWdlbmRzLmFwcGVuZChcInJlY3RcIilcbiAgICAgIC5hdHRyKFwieFwiLCB0aGlzLndpZHRoIC0gMTkpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIDE5KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgMTkpXG4gICAgICAuYXR0cihcImZpbGxcIiwgdGhpcy56KTtcblxuICAgIGxlZ2VuZHMuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIHRoaXMud2lkdGggLSAyNClcbiAgICAgIC5hdHRyKFwieVwiLCA5LjUpXG4gICAgICAuYXR0cihcImR5XCIsIFwiMC4zMmVtXCIpXG4gICAgICAudGV4dChmdW5jdGlvbihkKSB7IHJldHVybiBkOyB9KTtcblxuICAgIC8vIFVwZGF0ZVxuICAgIGxlZ2VuZF9ncm91cC5tZXJnZShsZWdlbmRzKS5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIFwidHJhbnNsYXRlKDAsXCIgKyBpICogMjAgKyBcIilcIjsgfSk7XG5cbiAgICAvLyBFeGl0XG4gICAgbGVnZW5kX2dyb3VwLmV4aXQoKS5yZW1vdmUoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('empty/no-selection',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NoSelection = (function () {
        function NoSelection() {
            this.message = "This site provides visual analysis dashboards for well known models from different fields.";
        }
        NoSelection = __decorate([
            aurelia_framework_1.autoinject
        ], NoSelection);
        return NoSelection;
    }());
    exports.NoSelection = NoSelection;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHR5L25vLXNlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFJQTtRQURBO1lBRUUsWUFBTyxHQUFHLDRGQUE0RixDQUFBO1FBQ3hHLENBQUM7UUFGWSxXQUFXO1lBRHZCLDhCQUFVO1dBQ0UsV0FBVyxDQUV2QjtRQUFELGtCQUFDO0tBRkQsQUFFQyxJQUFBO0lBRlksa0NBQVciLCJmaWxlIjoiZW1wdHkvbm8tc2VsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBOb1NlbGVjdGlvbiB7XG4gIG1lc3NhZ2UgPSBcIlRoaXMgc2l0ZSBwcm92aWRlcyB2aXN1YWwgYW5hbHlzaXMgZGFzaGJvYXJkcyBmb3Igd2VsbCBrbm93biBtb2RlbHMgZnJvbSBkaWZmZXJlbnQgZmllbGRzLlwiXG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('hosts/generic',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Generic = (function () {
        function Generic() {
        }
        Generic.prototype.get_vision_indices = function (radius) {
            var indices = [];
            var total_area = 4 * (Math.pow(radius, 2) + radius);
            var side = (2 * radius) + 1;
            for (var x = 0; x < side; x++) {
                for (var y = 0; y < side; y++) {
                }
            }
        };
        return Generic;
    }());
    exports.Generic = Generic;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvc3RzL2dlbmVyaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUE7UUFDRTtRQUVBLENBQUM7UUFFRCxvQ0FBa0IsR0FBbEIsVUFBbUIsTUFBTTtZQUN2QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDakIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBQSxNQUFNLEVBQUUsQ0FBQyxDQUFBLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFDMUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRzVCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzdCLEdBQUcsQ0FBQSxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBRWhDLENBQUM7WUFDSCxDQUFDO1FBRUgsQ0FBQztRQUNILGNBQUM7SUFBRCxDQWxCQSxBQWtCQyxJQUFBO0lBbEJZLDBCQUFPIiwiZmlsZSI6Imhvc3RzL2dlbmVyaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZlY3Rvcn0gZnJvbSBcIi4uL2hlbHBlci92ZWN0b3JcIlxyXG5cclxuZXhwb3J0IGNsYXNzIEdlbmVyaWMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBnZXRfdmlzaW9uX2luZGljZXMocmFkaXVzKSB7XHJcbiAgICBsZXQgaW5kaWNlcyA9IFtdO1xyXG4gICAgbGV0IHRvdGFsX2FyZWEgPSA0ICogKHJhZGl1cyoqMiArIHJhZGl1cyk7XHJcbiAgICBsZXQgc2lkZSA9ICgyICogcmFkaXVzKSArIDE7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgY2VsbCBpcyB3aXRoaW4gZXVjbGlkZWFuIGFyZWFcclxuICAgIGZvcihsZXQgeCA9IDA7IHggPCBzaWRlOyB4KyspIHtcclxuICAgICAgZm9yKCBsZXQgeSA9IDA7IHkgPCBzaWRlOyB5KyspIHtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('hosts/sheep',["require", "exports", "../helper/vector", "./vision"], function (require, exports, vector_1, vision_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Sheep = (function () {
        function Sheep(position) {
            this.position = position;
            this.type = "sheep";
            this.vision_radius = 7;
            this.herding_range = 4;
            this.desired_separation = 2;
            this.max_speed = 1;
            this.mating_threshold = 20;
            this.maximum_age = 60;
            this.dead = false;
            this.age = 1;
            this.saturation = 2;
            this.willingness = 10;
            this.neighbors = new Map();
            this.surroundings = [];
            this.mate_weight = 1;
            this.flock_weight = 1;
            this.feed_weight = 1;
            this.next_position = position.clone();
            this.velocity = new vector_1.Vector(this.get_random_float(-1, 1), this.get_random_float(-1, 1)).unit();
            this.vision = new vision_1.Vision(this.vision_radius);
        }
        Sheep.prototype.get_random_int = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        Sheep.prototype.get_random_float = function (min, max) {
            return Math.random() * (max - min + 1) + min;
        };
        Sheep.prototype.simulate = function (grid, host_list) {
            this.look(grid, host_list);
            this.decide(grid, host_list);
            this.update_host(host_list);
        };
        Sheep.prototype.update_host = function (host_list) {
            this.saturation--;
            this.willingness++;
            this.age++;
            if (this.saturation <= 0) {
                this.dead = true;
            }
            if (this.age > this.maximum_age) {
                this.dead = true;
            }
        };
        Sheep.prototype.look = function (grid, host_list) {
            this.neighbors.clear();
            this.surroundings.length = 0;
            for (var _i = 0, host_list_1 = host_list; _i < host_list_1.length; _i++) {
                var host = host_list_1[_i];
                if (host !== this) {
                    var distance = this.position.distance(host.position);
                    if (distance <= this.vision_radius) {
                        this.neighbors.set(host, distance);
                    }
                }
            }
            for (var _a = 0, _b = this.vision.get_vision_indices(this.position); _a < _b.length; _a++) {
                var cell = _b[_a];
                this.surroundings.push({
                    d: this.position.distance(new vector_1.Vector(cell[0], cell[1])),
                    type: grid[this.get_bounded_index(grid.length, cell[0])][this.get_bounded_index(grid.length, cell[1])],
                    position: new vector_1.Vector(cell[0], cell[1])
                });
            }
        };
        Sheep.prototype.decide = function (grid, host_list) {
            var _this = this;
            var sheeps_around = [];
            var predators_around = [];
            this.mate_weight = 1;
            this.flock_weight = 1;
            this.feed_weight = 1;
            var flock_movement;
            var feed_movement;
            var mate_movement;
            var total_movement;
            this.neighbors.forEach(function (value, key) {
                if (key.type == "sheep" && value <= _this.herding_range) {
                    sheeps_around.push(key);
                }
                if (key.type == "wolf" && value <= _this.herding_range) {
                    predators_around.push(key);
                }
            });
            if (this.hungry()) {
                if (this.eat(grid)) {
                    this.feed_weight = this.feed_weight * 0.5;
                }
                else {
                    this.feed_weight = this.feed_weight * 2;
                }
            }
            if (this.willingness >= this.mating_threshold) {
                if (this.mate(sheeps_around, host_list)) {
                    this.mate_weight = this.mate_weight * 0.5;
                }
                else {
                    this.mate_weight = this.mate_weight * 2;
                }
            }
            if (predators_around.length > 0) {
                this.mate_weight = this.mate_weight * 0.1;
                this.flock_weight = this.flock_weight * 2;
            }
            flock_movement = this.flock(sheeps_around);
            feed_movement = this.feed(this.surroundings);
            mate_movement = this.find_partner(sheeps_around);
            flock_movement.multiply(this.flock_weight);
            feed_movement.multiply(this.feed_weight);
            mate_movement.multiply(this.mate_weight);
            total_movement = flock_movement.add(feed_movement).add(mate_movement);
            this.movement(grid, total_movement.divide(3));
        };
        Sheep.prototype.eat = function (grid) {
            var type = grid[this.position.x][this.position.y];
            if (type == "grass_fresh") {
                this.saturation += 5;
                grid[this.position.x][this.position.y] = "grass";
                return true;
            }
            else if (type == "grass") {
                this.saturation += 2;
                return true;
            }
            return false;
        };
        Sheep.prototype.find_partner = function (neighbors) {
            var _this = this;
            var distance = this.vision_radius;
            var available_partners = neighbors.filter(function (cell) { return cell.saturation > 5; });
            var partner;
            available_partners.forEach(function (n) {
                if (_this.position.distance(n.position) < distance) {
                    distance = _this.position.distance(n.position);
                    partner = n;
                }
            });
            if (partner instanceof Sheep) {
                return this.move_to(partner.position);
            }
            else {
                return this.move_to(this.position);
            }
        };
        Sheep.prototype.mate = function (neighbors, host_list) {
            for (var i = 0; i < neighbors.length; i++) {
                var n = neighbors[i];
                if (this.position.distance(n.position) < 2 && n.willingness >= this.mating_threshold) {
                    host_list.push(new Sheep(new vector_1.Vector(this.position.x, this.position.y)));
                    this.willingness = 0;
                    n.willingness = 0;
                    return true;
                }
            }
            return false;
        };
        Sheep.prototype.feed = function (surroundings) {
            var mean = new vector_1.Vector(0, 0);
            var nearest_fresh_grass = surroundings.filter(function (cell) { return cell.type == "grass_fresh"; });
            var nearest_distance = Math.min(this.vision_radius, Math.min.apply(Math, nearest_fresh_grass.map(function (o) { return o.d; })));
            var counter = 0;
            nearest_fresh_grass.forEach(function (n) {
                mean.add(n.position);
                counter++;
            });
            return this.move_to(mean.divide(counter)).multiply(nearest_distance + 1);
        };
        Sheep.prototype.hungry = function () {
            var rnd = Math.random();
            if (this.saturation > 8)
                return false;
            if (this.saturation <= 8 && this.saturation > 4 && rnd < 0.2)
                return true;
            if (this.saturation <= 4 && this.saturation > 1 && rnd < 0.8)
                return true;
            if (this.saturation <= 1)
                return true;
        };
        Sheep.prototype.movement = function (grid, total_movement) {
            this.velocity.add(total_movement).limit(this.max_speed);
            this.next_position.add(this.velocity);
            this.next_position.discretize().wrap(grid.length);
        };
        Sheep.prototype.flock = function (neighbors) {
            var separation = this.separate(neighbors).multiply(4);
            var alignment = this.align(neighbors).multiply(2);
            var cohesion = this.cohere(neighbors);
            return separation.add(alignment).add(cohesion);
        };
        Sheep.prototype.cohere = function (neighbors) {
            var sum = new vector_1.Vector(0, 0);
            neighbors.forEach(function (n) {
                sum.add(n.position);
            });
            return this.move_to(sum.divide(neighbors.length));
        };
        Sheep.prototype.align = function (neighbors) {
            var mean = new vector_1.Vector(0, 0);
            neighbors.forEach(function (n) {
                mean.add(n.velocity);
            });
            if (mean.length() > 0) {
                mean.divide(neighbors.length);
                mean.limit(5);
            }
            return mean;
        };
        Sheep.prototype.separate = function (neighbors) {
            var _this = this;
            var mean = new vector_1.Vector(0, 0);
            var counter = 0;
            neighbors.forEach(function (n) {
                var distance = n.position.distance(_this.position);
                if (distance > 0 && distance < _this.desired_separation) {
                    mean.add(_this.position.clone().subtract(n.position).unit());
                    counter++;
                }
                if (distance == 0) {
                    mean.add(n.velocity.multiply(-1).unit());
                    counter++;
                }
            });
            if (mean.length() > 0) {
                mean.divide(counter);
            }
            return mean;
        };
        Sheep.prototype.move_to = function (target) {
            var target_position = target.clone().subtract(this.position);
            var distance = target_position.length();
            if (distance > 0) {
                return target_position.unit().subtract(this.velocity);
            }
            else {
                return this.velocity.clone();
            }
        };
        Sheep.prototype.get_bounded_index = function (grid_length, index) {
            var bounded_index = index;
            if (index < 0) {
                bounded_index = index + grid_length;
            }
            if (index >= grid_length) {
                bounded_index = index - grid_length;
            }
            return bounded_index;
        };
        return Sheep;
    }());
    exports.Sheep = Sheep;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0QsSUFBSSxRQUFRLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXhDLEVBQUUsQ0FBQSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDdkQsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQzlCLENBQUM7UUFDSCxDQUFDO1FBRUQsaUNBQWlCLEdBQWpCLFVBQWtCLFdBQVcsRUFBRSxLQUFLO1lBQ2xDLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztZQUUxQixFQUFFLENBQUEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYixhQUFhLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQztZQUN0QyxDQUFDO1lBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLGFBQWEsR0FBRyxLQUFLLEdBQUcsV0FBVyxDQUFDO1lBQ3RDLENBQUM7WUFFRCxNQUFNLENBQUMsYUFBYSxDQUFBO1FBQ3RCLENBQUM7UUFDSCxZQUFDO0lBQUQsQ0E3VUEsQUE2VUMsSUFBQTtJQTdVWSxzQkFBSyIsImZpbGUiOiJob3N0cy9zaGVlcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VmVjdG9yfSBmcm9tIFwiLi4vaGVscGVyL3ZlY3RvclwiXHJcbmltcG9ydCB7VmlzaW9ufSBmcm9tIFwiLi92aXNpb25cIlxyXG5cclxuZXhwb3J0IGNsYXNzIFNoZWVwIHtcclxuICAvLyBBdHRyaWJ1dGVzXHJcbiAgcHVibGljIHR5cGUgPSBcInNoZWVwXCI7XHJcbiAgcHJpdmF0ZSB2aXNpb247XHJcbiAgcHJpdmF0ZSB2aXNpb25fcmFkaXVzID0gNztcclxuICBwcml2YXRlIGhlcmRpbmdfcmFuZ2UgPSA0O1xyXG4gIHByaXZhdGUgZGVzaXJlZF9zZXBhcmF0aW9uID0gMjtcclxuICBwcml2YXRlIG1heF9zcGVlZCA9IDE7XHJcbiAgcHJpdmF0ZSBtYXRpbmdfdGhyZXNob2xkID0gMjA7XHJcbiAgcHJpdmF0ZSBtYXhpbXVtX2FnZSA9IDYwO1xyXG5cclxuICBwcml2YXRlIGRlYWQgPSBmYWxzZTtcclxuICBwcml2YXRlIGFnZSA9IDE7XHJcbiAgcHJpdmF0ZSBzYXR1cmF0aW9uID0gMjtcclxuICBwcml2YXRlIHdpbGxpbmduZXNzID0gMTA7XHJcbiAgcHJpdmF0ZSBuZWlnaGJvcnMgPSBuZXcgTWFwKCk7XHJcbiAgcHJpdmF0ZSBzdXJyb3VuZGluZ3MgPSBbXTtcclxuICBwcml2YXRlIHZlbG9jaXR5O1xyXG4gIHByaXZhdGUgbmV4dF9wb3NpdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBtYXRlX3dlaWdodCA9IDE7XHJcbiAgcHJpdmF0ZSBmbG9ja193ZWlnaHQgPSAxO1xyXG4gIHByaXZhdGUgZmVlZF93ZWlnaHQgPSAxO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvc2l0aW9uOiBWZWN0b3IpIHtcclxuICAgIC8vIEluaXRpYWxpemUgbmV4dCBwb3NpdGlvblxyXG4gICAgdGhpcy5uZXh0X3Bvc2l0aW9uID0gcG9zaXRpb24uY2xvbmUoKVxyXG5cclxuICAgIC8vIEluaXRpYWxpemUgd2l0aCByYW5kb20gZGlyZWN0aW9uXHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3Rvcih0aGlzLmdldF9yYW5kb21fZmxvYXQoLTEsIDEpLCB0aGlzLmdldF9yYW5kb21fZmxvYXQoLTEsIDEpKS51bml0KClcclxuICAgIC8vIEdldCB2aXNpb24gaW5kaWNlc1xyXG4gICAgdGhpcy52aXNpb24gPSBuZXcgVmlzaW9uKHRoaXMudmlzaW9uX3JhZGl1cylcclxuICB9XHJcblxyXG4gIC8vIEdlbmVyYXRlIHJhbmRvbSBudW1iZXJzIHdpdGhpbiByYW5nZVxyXG4gIGdldF9yYW5kb21faW50KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuICB9XHJcblxyXG4gIGdldF9yYW5kb21fZmxvYXQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluO1xyXG4gIH1cclxuXHJcbiAgLy8gQmFzaWMgZGVjaXNpb24gZnVuY3Rpb25cclxuICBwdWJsaWMgc2ltdWxhdGUoZ3JpZCwgaG9zdF9saXN0KSB7XHJcbiAgICB0aGlzLmxvb2soZ3JpZCwgaG9zdF9saXN0KTtcclxuICAgIHRoaXMuZGVjaWRlKGdyaWQsIGhvc3RfbGlzdCk7XHJcbiAgICB0aGlzLnVwZGF0ZV9ob3N0KGhvc3RfbGlzdCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVfaG9zdChob3N0X2xpc3QpIHtcclxuICAgIHRoaXMuc2F0dXJhdGlvbi0tO1xyXG4gICAgdGhpcy53aWxsaW5nbmVzcysrO1xyXG4gICAgdGhpcy5hZ2UrKztcclxuXHJcbiAgICBpZih0aGlzLnNhdHVyYXRpb24gPD0gMCkge1xyXG4gICAgICB0aGlzLmRlYWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuYWdlID4gdGhpcy5tYXhpbXVtX2FnZSkge1xyXG4gICAgICB0aGlzLmRlYWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9vayhncmlkLCBob3N0X2xpc3QpIHtcclxuICAgIHRoaXMubmVpZ2hib3JzLmNsZWFyKCk7XHJcbiAgICB0aGlzLnN1cnJvdW5kaW5ncy5sZW5ndGggPSAwO1xyXG5cclxuICAgIC8vIENoZWNrIGZvciBvdGhlciBob3N0c1xyXG4gICAgLy8gVE9ETzogQ2hlY2sgb25seSBzdXJyb3VuZGluZ3M/XHJcbiAgICBmb3IobGV0IGhvc3Qgb2YgaG9zdF9saXN0KSB7XHJcbiAgICAgIGlmKGhvc3QgIT09IHRoaXMpIHtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLnBvc2l0aW9uLmRpc3RhbmNlKGhvc3QucG9zaXRpb24pO1xyXG5cclxuICAgICAgICBpZihkaXN0YW5jZSA8PSB0aGlzLnZpc2lvbl9yYWRpdXMgKSB7XHJcbiAgICAgICAgICB0aGlzLm5laWdoYm9ycy5zZXQoaG9zdCwgZGlzdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE9ic2VydmUgdGhlIGxhbmRzY2FwZVxyXG4gICAgZm9yKGxldCBjZWxsIG9mIHRoaXMudmlzaW9uLmdldF92aXNpb25faW5kaWNlcyh0aGlzLnBvc2l0aW9uKSkge1xyXG4gICAgICB0aGlzLnN1cnJvdW5kaW5ncy5wdXNoKHtcclxuICAgICAgICBkOiB0aGlzLnBvc2l0aW9uLmRpc3RhbmNlKG5ldyBWZWN0b3IoY2VsbFswXSwgY2VsbFsxXSkpLFxyXG4gICAgICAgIHR5cGU6IGdyaWRbdGhpcy5nZXRfYm91bmRlZF9pbmRleChncmlkLmxlbmd0aCwgY2VsbFswXSldW3RoaXMuZ2V0X2JvdW5kZWRfaW5kZXgoZ3JpZC5sZW5ndGgsIGNlbGxbMV0pXSxcclxuICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3RvcihjZWxsWzBdLCBjZWxsWzFdKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlY2lkZShncmlkLCBob3N0X2xpc3QpIHtcclxuICAgIGxldCBzaGVlcHNfYXJvdW5kID0gW107XHJcbiAgICBsZXQgcHJlZGF0b3JzX2Fyb3VuZCA9IFtdO1xyXG5cclxuICAgIHRoaXMubWF0ZV93ZWlnaHQgPSAxO1xyXG4gICAgdGhpcy5mbG9ja193ZWlnaHQgPSAxO1xyXG4gICAgdGhpcy5mZWVkX3dlaWdodCA9IDE7XHJcblxyXG4gICAgbGV0IGZsb2NrX21vdmVtZW50OiBWZWN0b3I7XHJcbiAgICBsZXQgZmVlZF9tb3ZlbWVudDogVmVjdG9yO1xyXG4gICAgbGV0IG1hdGVfbW92ZW1lbnQ6IFZlY3RvcjtcclxuICAgIGxldCB0b3RhbF9tb3ZlbWVudDogVmVjdG9yO1xyXG5cclxuICAgIC8vIEFuYWx5c2Ugc3Vycm91bmRpbmdzXHJcbiAgICB0aGlzLm5laWdoYm9ycy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgIGlmKGtleS50eXBlID09IFwic2hlZXBcIiAmJiB2YWx1ZSA8PSB0aGlzLmhlcmRpbmdfcmFuZ2UpIHtcclxuICAgICAgICBzaGVlcHNfYXJvdW5kLnB1c2goa2V5KTtcclxuICAgICAgfVxyXG4gICAgICBpZihrZXkudHlwZSA9PSBcIndvbGZcIiAmJiB2YWx1ZSA8PSB0aGlzLmhlcmRpbmdfcmFuZ2UpIHtcclxuICAgICAgICBwcmVkYXRvcnNfYXJvdW5kLnB1c2goa2V5KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGRlY2lkZSBiYXNlZCBvbiBpbXBvcnRhbmNlXHJcbiAgICBpZih0aGlzLmh1bmdyeSgpKSB7XHJcbiAgICAgIGlmKHRoaXMuZWF0KGdyaWQpKSB7XHJcbiAgICAgICAgdGhpcy5mZWVkX3dlaWdodCA9IHRoaXMuZmVlZF93ZWlnaHQqMC41O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZmVlZF93ZWlnaHQgPSB0aGlzLmZlZWRfd2VpZ2h0KjI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLndpbGxpbmduZXNzID49IHRoaXMubWF0aW5nX3RocmVzaG9sZCkge1xyXG4gICAgICBpZih0aGlzLm1hdGUoc2hlZXBzX2Fyb3VuZCwgaG9zdF9saXN0KSkge1xyXG4gICAgICAgIHRoaXMubWF0ZV93ZWlnaHQgPSB0aGlzLm1hdGVfd2VpZ2h0KjAuNTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLm1hdGVfd2VpZ2h0ID0gdGhpcy5tYXRlX3dlaWdodCoyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYocHJlZGF0b3JzX2Fyb3VuZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMubWF0ZV93ZWlnaHQgPSB0aGlzLm1hdGVfd2VpZ2h0KjAuMTtcclxuICAgICAgdGhpcy5mbG9ja193ZWlnaHQgPSB0aGlzLmZsb2NrX3dlaWdodCoyO1xyXG4gICAgfVxyXG5cclxuICAgIGZsb2NrX21vdmVtZW50ID0gdGhpcy5mbG9jayhzaGVlcHNfYXJvdW5kKVxyXG4gICAgZmVlZF9tb3ZlbWVudCA9IHRoaXMuZmVlZCh0aGlzLnN1cnJvdW5kaW5ncylcclxuICAgIG1hdGVfbW92ZW1lbnQgPSB0aGlzLmZpbmRfcGFydG5lcihzaGVlcHNfYXJvdW5kKVxyXG5cclxuICAgIGZsb2NrX21vdmVtZW50Lm11bHRpcGx5KHRoaXMuZmxvY2tfd2VpZ2h0KTtcclxuICAgIGZlZWRfbW92ZW1lbnQubXVsdGlwbHkodGhpcy5mZWVkX3dlaWdodCk7XHJcbiAgICBtYXRlX21vdmVtZW50Lm11bHRpcGx5KHRoaXMubWF0ZV93ZWlnaHQpXHJcblxyXG4gICAgdG90YWxfbW92ZW1lbnQgPSBmbG9ja19tb3ZlbWVudC5hZGQoZmVlZF9tb3ZlbWVudCkuYWRkKG1hdGVfbW92ZW1lbnQpXHJcblxyXG4gICAgdGhpcy5tb3ZlbWVudChncmlkLCB0b3RhbF9tb3ZlbWVudC5kaXZpZGUoMykpO1xyXG4gIH1cclxuXHJcbiAgZWF0KGdyaWQpIHtcclxuICAgIGxldCB0eXBlID0gZ3JpZFt0aGlzLnBvc2l0aW9uLnhdW3RoaXMucG9zaXRpb24ueV07XHJcblxyXG4gICAgaWYodHlwZSA9PSBcImdyYXNzX2ZyZXNoXCIpIHtcclxuICAgICAgdGhpcy5zYXR1cmF0aW9uICs9IDU7XHJcbiAgICAgIGdyaWRbdGhpcy5wb3NpdGlvbi54XVt0aGlzLnBvc2l0aW9uLnldID0gXCJncmFzc1wiXHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0eXBlID09IFwiZ3Jhc3NcIikge1xyXG4gICAgICB0aGlzLnNhdHVyYXRpb24gKz0gMjtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBmaW5kX3BhcnRuZXIobmVpZ2hib3JzKSB7XHJcbiAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLnZpc2lvbl9yYWRpdXM7XHJcbiAgICBsZXQgYXZhaWxhYmxlX3BhcnRuZXJzID0gbmVpZ2hib3JzLmZpbHRlcihjZWxsID0+IGNlbGwuc2F0dXJhdGlvbiA+IDUpO1xyXG4gICAgbGV0IHBhcnRuZXI7XHJcblxyXG4gICAgYXZhaWxhYmxlX3BhcnRuZXJzLmZvckVhY2gobiA9PiB7XHJcbiAgICAgIGlmKHRoaXMucG9zaXRpb24uZGlzdGFuY2Uobi5wb3NpdGlvbikgPCBkaXN0YW5jZSkge1xyXG4gICAgICAgIGRpc3RhbmNlID0gdGhpcy5wb3NpdGlvbi5kaXN0YW5jZShuLnBvc2l0aW9uKTtcclxuICAgICAgICBwYXJ0bmVyID0gbjtcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZihwYXJ0bmVyIGluc3RhbmNlb2YgU2hlZXApIHtcclxuICAgICAgcmV0dXJuIHRoaXMubW92ZV90byhwYXJ0bmVyLnBvc2l0aW9uKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5wb3NpdGlvbilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1hdGUobmVpZ2hib3JzLCBob3N0X2xpc3QpIHtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuZWlnaGJvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IG4gPSBuZWlnaGJvcnNbaV1cclxuICAgICAgaWYodGhpcy5wb3NpdGlvbi5kaXN0YW5jZShuLnBvc2l0aW9uKSA8IDIgJiYgbi53aWxsaW5nbmVzcyA+PSB0aGlzLm1hdGluZ190aHJlc2hvbGQpIHtcclxuICAgICAgICAvLyBDcmVhdGUgbmV3IHNoZWVwXHJcbiAgICAgICAgaG9zdF9saXN0LnB1c2gobmV3IFNoZWVwKG5ldyBWZWN0b3IodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpKSlcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgd2lsbGluZ3NuZXNzXHJcbiAgICAgICAgdGhpcy53aWxsaW5nbmVzcyA9IDA7XHJcbiAgICAgICAgbi53aWxsaW5nbmVzcyA9IDA7XHJcblxyXG4gICAgICAgIC8vQnJlYWsgb3V0IG9mIGxvb3BcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgLy8gTG9va2luZyBmb3IgZnJlc2ggZ3Jhc3NcclxuICBmZWVkKHN1cnJvdW5kaW5ncykge1xyXG4gICAgbGV0IG1lYW4gPSBuZXcgVmVjdG9yKDAsIDApO1xyXG4gICAgbGV0IG5lYXJlc3RfZnJlc2hfZ3Jhc3MgPSBzdXJyb3VuZGluZ3MuZmlsdGVyKGNlbGwgPT4gY2VsbC50eXBlID09IFwiZ3Jhc3NfZnJlc2hcIilcclxuICAgIGxldCBuZWFyZXN0X2Rpc3RhbmNlID0gTWF0aC5taW4odGhpcy52aXNpb25fcmFkaXVzLCBNYXRoLm1pbi5hcHBseShNYXRoLCBuZWFyZXN0X2ZyZXNoX2dyYXNzLm1hcChmdW5jdGlvbihvKXtyZXR1cm4gby5kO30pKSlcclxuICAgIGxldCBjb3VudGVyID0gMDtcclxuXHJcbiAgICBuZWFyZXN0X2ZyZXNoX2dyYXNzLmZvckVhY2gobiA9PiB7XHJcbiAgICAgIG1lYW4uYWRkKG4ucG9zaXRpb24pXHJcbiAgICAgIGNvdW50ZXIrKztcclxuICAgIH0pXHJcblxyXG4gICAgLy8gc3Vycm91bmRpbmdzLmZvckVhY2gobiA9PiB7XHJcbiAgICAvLyAgIGlmKG4udHlwZSA9PSBcImdyYXNzX2ZyZXNoXCIpIHtcclxuICAgIC8vICAgICBtZWFuLmFkZChuLnBvc2l0aW9uKVxyXG4gICAgLy8gICAgIGNvdW50ZXIrKztcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICBpZihuLnR5cGUgPT0gXCJncmFzc1wiKSB7XHJcbiAgICAvLyAgICAgbWVhbi5hZGQobi5wb3NpdGlvbilcclxuICAgIC8vICAgICBjb3VudGVyKys7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pXHJcblxyXG4gICAgcmV0dXJuIHRoaXMubW92ZV90byhtZWFuLmRpdmlkZShjb3VudGVyKSkubXVsdGlwbHkobmVhcmVzdF9kaXN0YW5jZSsxKVxyXG4gIH1cclxuXHJcbiAgaHVuZ3J5KCkge1xyXG4gICAgbGV0IHJuZCA9IE1hdGgucmFuZG9tKClcclxuICAgIGlmKHRoaXMuc2F0dXJhdGlvbiA+IDgpIHJldHVybiBmYWxzZTtcclxuICAgIGlmKHRoaXMuc2F0dXJhdGlvbiA8PSA4ICYmIHRoaXMuc2F0dXJhdGlvbiA+IDQgJiYgcm5kIDwgMC4yKSByZXR1cm4gdHJ1ZTtcclxuICAgIGlmKHRoaXMuc2F0dXJhdGlvbiA8PSA0ICYmIHRoaXMuc2F0dXJhdGlvbiA+IDEgJiYgcm5kIDwgMC44KSByZXR1cm4gdHJ1ZTtcclxuICAgIGlmKHRoaXMuc2F0dXJhdGlvbiA8PSAxKSByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG1vdmVtZW50KGdyaWQsIHRvdGFsX21vdmVtZW50KSB7XHJcbiAgICB0aGlzLnZlbG9jaXR5LmFkZCh0b3RhbF9tb3ZlbWVudCkubGltaXQodGhpcy5tYXhfc3BlZWQpXHJcblxyXG4gICAgdGhpcy5uZXh0X3Bvc2l0aW9uLmFkZCh0aGlzLnZlbG9jaXR5KVxyXG5cclxuICAgIC8vIFByZXBhcmUgZm9yIGRpc2NyZXRlIGdyaWRcclxuICAgIHRoaXMubmV4dF9wb3NpdGlvbi5kaXNjcmV0aXplKCkud3JhcChncmlkLmxlbmd0aClcclxuICB9XHJcblxyXG4gIGZsb2NrKG5laWdoYm9ycykge1xyXG4gICAgbGV0IHNlcGFyYXRpb246IFZlY3RvciA9IHRoaXMuc2VwYXJhdGUobmVpZ2hib3JzKS5tdWx0aXBseSg0KVxyXG4gICAgbGV0IGFsaWdubWVudDogVmVjdG9yID0gdGhpcy5hbGlnbihuZWlnaGJvcnMpLm11bHRpcGx5KDIpXHJcbiAgICBsZXQgY29oZXNpb246IFZlY3RvciA9IHRoaXMuY29oZXJlKG5laWdoYm9ycylcclxuXHJcbiAgICByZXR1cm4gc2VwYXJhdGlvbi5hZGQoYWxpZ25tZW50KS5hZGQoY29oZXNpb24pXHJcbiAgfVxyXG5cclxuICBjb2hlcmUobmVpZ2hib3JzKSB7XHJcbiAgICBsZXQgc3VtID0gbmV3IFZlY3RvcigwLCAwKTtcclxuXHJcbiAgICBuZWlnaGJvcnMuZm9yRWFjaChuID0+IHtcclxuICAgICAgc3VtLmFkZChuLnBvc2l0aW9uKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gdGhpcy5tb3ZlX3RvKHN1bS5kaXZpZGUobmVpZ2hib3JzLmxlbmd0aCkpXHJcbiAgfVxyXG5cclxuICBhbGlnbihuZWlnaGJvcnMpIHtcclxuICAgIGxldCBtZWFuID0gbmV3IFZlY3RvcigwLCAwKVxyXG5cclxuXHJcbiAgICBuZWlnaGJvcnMuZm9yRWFjaChuID0+IHtcclxuICAgICAgbWVhbi5hZGQobi52ZWxvY2l0eSlcclxuICAgIH0pXHJcblxyXG4gICAgaWYobWVhbi5sZW5ndGgoKSA+IDApIHtcclxuICAgICAgbWVhbi5kaXZpZGUobmVpZ2hib3JzLmxlbmd0aClcclxuICAgICAgbWVhbi5saW1pdCg1KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtZWFuXHJcbiAgfVxyXG5cclxuICBzZXBhcmF0ZShuZWlnaGJvcnMpIHtcclxuICAgIGxldCBtZWFuID0gbmV3IFZlY3RvcigwLCAwKVxyXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xyXG5cclxuICAgIG5laWdoYm9ycy5mb3JFYWNoKG4gPT4ge1xyXG4gICAgICBsZXQgZGlzdGFuY2UgPSBuLnBvc2l0aW9uLmRpc3RhbmNlKHRoaXMucG9zaXRpb24pXHJcblxyXG4gICAgICBpZihkaXN0YW5jZSA+IDAgICYmIGRpc3RhbmNlIDwgdGhpcy5kZXNpcmVkX3NlcGFyYXRpb24pIHtcclxuICAgICAgICBtZWFuLmFkZCh0aGlzLnBvc2l0aW9uLmNsb25lKCkuc3VidHJhY3Qobi5wb3NpdGlvbikudW5pdCgpKVxyXG4gICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgfVxyXG4gICAgICBpZihkaXN0YW5jZSA9PSAwKSB7XHJcbiAgICAgICAgLy8gbWVhbi5hZGQodGhpcy5wb3NpdGlvbi5jbG9uZSgpLmFkZChuLnBvc2l0aW9uKS51bml0KCkpXHJcbiAgICAgICAgbWVhbi5hZGQobi52ZWxvY2l0eS5tdWx0aXBseSgtMSkudW5pdCgpKVxyXG4gICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZihtZWFuLmxlbmd0aCgpID4gMCkge1xyXG4gICAgICBtZWFuLmRpdmlkZShjb3VudGVyKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtZWFuXHJcbiAgfVxyXG5cclxuICBtb3ZlX3RvKHRhcmdldCA6IFZlY3Rvcikge1xyXG4gICAgbGV0IHRhcmdldF9wb3NpdGlvbiA9IHRhcmdldC5jbG9uZSgpLnN1YnRyYWN0KHRoaXMucG9zaXRpb24pO1xyXG4gICAgbGV0IGRpc3RhbmNlID0gdGFyZ2V0X3Bvc2l0aW9uLmxlbmd0aCgpO1xyXG5cclxuICAgIGlmKGRpc3RhbmNlID4gMCkge1xyXG4gICAgICByZXR1cm4gdGFyZ2V0X3Bvc2l0aW9uLnVuaXQoKS5zdWJ0cmFjdCh0aGlzLnZlbG9jaXR5KVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlbG9jaXR5LmNsb25lKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldF9ib3VuZGVkX2luZGV4KGdyaWRfbGVuZ3RoLCBpbmRleCkge1xyXG4gICAgbGV0IGJvdW5kZWRfaW5kZXggPSBpbmRleDtcclxuXHJcbiAgICBpZihpbmRleCA8IDApIHtcclxuICAgICAgYm91bmRlZF9pbmRleCA9IGluZGV4ICsgZ3JpZF9sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBpZihpbmRleCA+PSBncmlkX2xlbmd0aCkge1xyXG4gICAgICBib3VuZGVkX2luZGV4ID0gaW5kZXggLSBncmlkX2xlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYm91bmRlZF9pbmRleFxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('hosts/vision',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Vision = (function () {
        function Vision(vision) {
            this.vision = vision;
            this.indices = [];
            this.precompute_vision_indices(vision);
        }
        Vision.prototype.precompute_vision_indices = function (radius) {
            var indices = [];
            for (var x = -radius; x <= radius; x++) {
                for (var y = -radius; y <= radius; y++) {
                    if (Math.round(Math.sqrt(Math.pow((0 - x), 2) + Math.pow((0 - y), 2))) <= radius) {
                        indices.push([x, y]);
                    }
                }
            }
            this.indices = indices;
        };
        Vision.prototype.get_vision_indices = function (position) {
            var out = [];
            for (var _i = 0, _a = this.indices; _i < _a.length; _i++) {
                var cell = _a[_i];
                out.push([position.x + cell[0], position.y + cell[1]]);
            }
            return out;
        };
        return Vision;
    }());
    exports.Vision = Vision;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvc3RzL3Zpc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUdFLGdCQUFvQixNQUFNO1lBQU4sV0FBTSxHQUFOLE1BQU0sQ0FBQTtZQUYxQixZQUFPLEdBQUcsRUFBRSxDQUFDO1lBR1gsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFFRCwwQ0FBeUIsR0FBekIsVUFBMEIsTUFBTTtZQUM5QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFHakIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN0QyxHQUFHLENBQUEsQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ3ZDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQSxHQUFDLFNBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQzFELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDdEIsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztZQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7UUFFRCxtQ0FBa0IsR0FBbEIsVUFBbUIsUUFBUTtZQUN6QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFFYixHQUFHLENBQUEsQ0FBYSxVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZO2dCQUF4QixJQUFJLElBQUksU0FBQTtnQkFDVixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ3ZEO1lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQTtRQUNaLENBQUM7UUFDSCxhQUFDO0lBQUQsQ0EvQkEsQUErQkMsSUFBQTtJQS9CWSx3QkFBTSIsImZpbGUiOiJob3N0cy92aXNpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZlY3Rvcn0gZnJvbSBcIi4uL2hlbHBlci92ZWN0b3JcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFZpc2lvbiB7XHJcbiAgaW5kaWNlcyA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpc2lvbikge1xyXG4gICAgdGhpcy5wcmVjb21wdXRlX3Zpc2lvbl9pbmRpY2VzKHZpc2lvbik7XHJcbiAgfVxyXG5cclxuICBwcmVjb21wdXRlX3Zpc2lvbl9pbmRpY2VzKHJhZGl1cykge1xyXG4gICAgbGV0IGluZGljZXMgPSBbXTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBjZWxsIGlzIHdpdGhpbiBldWNsaWRlYW4gYXJlYVxyXG4gICAgZm9yKGxldCB4ID0gLXJhZGl1czsgeCA8PSByYWRpdXM7IHgrKykge1xyXG4gICAgICBmb3IoIGxldCB5ID0gLXJhZGl1czsgeSA8PSByYWRpdXM7IHkrKykge1xyXG4gICAgICAgIGlmKE1hdGgucm91bmQoTWF0aC5zcXJ0KCgwIC0geCkqKjIrKDAgLSB5KSoqMikpIDw9IHJhZGl1cykge1xyXG4gICAgICAgICAgaW5kaWNlcy5wdXNoKFt4LCB5XSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluZGljZXMgPSBpbmRpY2VzO1xyXG4gIH1cclxuXHJcbiAgZ2V0X3Zpc2lvbl9pbmRpY2VzKHBvc2l0aW9uKSB7XHJcbiAgICBsZXQgb3V0ID0gW107XHJcblxyXG4gICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuaW5kaWNlcykge1xyXG4gICAgICBvdXQucHVzaChbcG9zaXRpb24ueCArIGNlbGxbMF0sIHBvc2l0aW9uLnkgKyBjZWxsWzFdXSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('helper/sampling',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Sampling = (function () {
        function Sampling(type) {
            this.type = type;
        }
        Sampling.prototype.get_points = function (n_samples, dimension) {
            if (this.type == "sobol") {
                var seq = lobos.Sobol(dimension);
                return seq.take(n_samples);
            }
        };
        return Sampling;
    }());
    exports.Sampling = Sampling;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlci9zYW1wbGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUNFLGtCQUFvQixJQUFJO1lBQUosU0FBSSxHQUFKLElBQUksQ0FBQTtRQUN4QixDQUFDO1FBRUQsNkJBQVUsR0FBVixVQUFXLFNBQVMsRUFBRSxTQUFTO1lBQzdCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFFaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDNUIsQ0FBQztRQUNILENBQUM7UUFDSCxlQUFDO0lBQUQsQ0FYQSxBQVdDLElBQUE7SUFYWSw0QkFBUSIsImZpbGUiOiJoZWxwZXIvc2FtcGxpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIG1hZ2ljIGxpbmUgcmVtb3ZlZCB0aGUgZXJyb3IgbWVzc2FnZXMgZm9yIG51bWVyaWNcbmRlY2xhcmUgdmFyIGxvYm9zOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBTYW1wbGluZyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHlwZSkge1xuICB9XG5cbiAgZ2V0X3BvaW50cyhuX3NhbXBsZXMsIGRpbWVuc2lvbikge1xuICAgIGlmKHRoaXMudHlwZSA9PSBcInNvYm9sXCIpIHtcbiAgICAgIGxldCBzZXEgPSBsb2Jvcy5Tb2JvbChkaW1lbnNpb24pXG5cbiAgICAgIHJldHVybiBzZXEudGFrZShuX3NhbXBsZXMpXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('helper/vector',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Vector = (function () {
        function Vector(x, y) {
            this.x = x;
            this.y = y;
        }
        Vector.prototype.add = function (v) {
            if (v instanceof Vector) {
                this.x = this.x + v.x;
                this.y = this.y + v.y;
                return this;
            }
            else {
                this.x = this.x + v;
                this.y = this.y + v;
                return this;
            }
        };
        Vector.prototype.subtract = function (v) {
            if (v instanceof Vector) {
                this.x = this.x - v.x;
                this.y = this.y - v.y;
                return this;
            }
            else {
                this.x = this.x - v;
                this.y = this.y - v;
                return this;
            }
        };
        Vector.prototype.multiply = function (v) {
            if (v instanceof Vector) {
                this.x = this.x * v.x;
                this.y = this.y * v.y;
                return this;
            }
            else {
                this.x = this.x * v;
                this.y = this.y * v;
                return this;
            }
        };
        Vector.prototype.divide = function (v) {
            if (v instanceof Vector) {
                this.x = this.x / v.x;
                this.y = this.y / v.y;
                return this;
            }
            else {
                this.x = this.x / v;
                this.y = this.y / v;
                return this;
            }
        };
        Vector.prototype.equals = function (v) {
            return this.x == v.x && this.y == v.y;
        };
        Vector.prototype.dot = function (v) {
            return this.x * v.x + this.y * v.y;
        };
        Vector.prototype.distance = function (vector) {
            return Math.round(Math.sqrt(Math.pow((this.x - vector.x), 2) + Math.pow((this.y - vector.y), 2)));
        };
        Vector.prototype.limit = function (max_length) {
            if (this.length() > max_length) {
                this.x = (max_length / this.length()) * this.x;
                this.y = (max_length / this.length()) * this.y;
            }
            return this;
        };
        Vector.prototype.length = function () {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        };
        Vector.prototype.unit = function () {
            var length = this.length();
            this.x = this.x / length;
            this.y = this.y / length;
            return this;
        };
        Vector.prototype.clone = function () {
            return new Vector(this.x, this.y);
        };
        Vector.prototype.discretize = function () {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this;
        };
        Vector.prototype.wrap = function (grid_length) {
            this.x = this.get_bounded_index(grid_length, this.x);
            this.y = this.get_bounded_index(grid_length, this.y);
            return this;
        };
        Vector.prototype.get_bounded_index = function (grid_length, index) {
            var bounded_index = index;
            if (index < 0) {
                bounded_index = index + grid_length;
            }
            if (index >= grid_length) {
                bounded_index = index - grid_length;
            }
            return bounded_index;
        };
        return Vector;
    }());
    exports.Vector = Vector;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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akIsVUFBa0IsV0FBVyxFQUFFLEtBQUs7WUFDbEMsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBRTFCLEVBQUUsQ0FBQSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNiLGFBQWEsR0FBRyxLQUFLLEdBQUcsV0FBVyxDQUFDO1lBQ3RDLENBQUM7WUFDRCxFQUFFLENBQUEsQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsYUFBYSxHQUFHLEtBQUssR0FBRyxXQUFXLENBQUM7WUFDdEMsQ0FBQztZQUVELE1BQU0sQ0FBQyxhQUFhLENBQUE7UUFDdEIsQ0FBQztRQUNILGFBQUM7SUFBRCxDQS9IQSxBQStIQyxJQUFBO0lBL0hZLHdCQUFNIiwiZmlsZSI6ImhlbHBlci92ZWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVmVjdG9yIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgeCwgcHVibGljIHkpIHtcclxuICB9XHJcblxyXG4gIGFkZCh2OiBWZWN0b3J8bnVtYmVyKSB7XHJcbiAgICBpZiAodiBpbnN0YW5jZW9mIFZlY3Rvcikge1xyXG4gICAgICB0aGlzLnggPSB0aGlzLnggKyB2LnhcclxuICAgICAgdGhpcy55ID0gdGhpcy55ICsgdi55O1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnggPSB0aGlzLnggKyB2XHJcbiAgICAgIHRoaXMueSA9IHRoaXMueSArIHZcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJ0cmFjdCh2OiBWZWN0b3J8bnVtYmVyKSB7XHJcbiAgICBpZiAodiBpbnN0YW5jZW9mIFZlY3Rvcikge1xyXG4gICAgICB0aGlzLnggPSB0aGlzLnggLSB2LnhcclxuICAgICAgdGhpcy55ID0gdGhpcy55IC0gdi55XHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMueCA9IHRoaXMueCAtIHZcclxuICAgICAgdGhpcy55ID0gdGhpcy55IC0gdlxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG11bHRpcGx5KHY6IFZlY3RvcnxudW1iZXIpIHtcclxuICAgIGlmICh2IGluc3RhbmNlb2YgVmVjdG9yKSB7XHJcbiAgICAgIHRoaXMueCA9IHRoaXMueCAqIHYueFxyXG4gICAgICB0aGlzLnkgPSB0aGlzLnkgKiB2LnlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy54ID0gdGhpcy54ICogdlxyXG4gICAgICB0aGlzLnkgPSB0aGlzLnkgKiB2XHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGl2aWRlKHY6IFZlY3RvcnxudW1iZXIpIHtcclxuICAgIGlmICh2IGluc3RhbmNlb2YgVmVjdG9yKSB7XHJcbiAgICAgIHRoaXMueCA9IHRoaXMueCAvIHYueFxyXG4gICAgICB0aGlzLnkgPSB0aGlzLnkgLyB2LnlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy54ID0gdGhpcy54IC8gdlxyXG4gICAgICB0aGlzLnkgPSB0aGlzLnkgLyB2XHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXF1YWxzKHY6IFZlY3Rvcikge1xyXG4gICAgcmV0dXJuIHRoaXMueCA9PSB2LnggJiYgdGhpcy55ID09IHYueTtcclxuICB9XHJcblxyXG4gIGRvdCh2OiBWZWN0b3IpIHtcclxuICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2Lnk7XHJcbiAgfVxyXG5cclxuICBkaXN0YW5jZSh2ZWN0b3I6IFZlY3Rvcikge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5zcXJ0KCh0aGlzLnggLSB2ZWN0b3IueCkqKjIrKHRoaXMueSAtIHZlY3Rvci55KSoqMikpO1xyXG4gIH1cclxuXHJcbiAgbGltaXQobWF4X2xlbmd0aCkge1xyXG4gICAgaWYodGhpcy5sZW5ndGgoKSA+IG1heF9sZW5ndGgpIHtcclxuICAgICAgdGhpcy54ID0gKG1heF9sZW5ndGgvdGhpcy5sZW5ndGgoKSkqdGhpcy54O1xyXG4gICAgICB0aGlzLnkgPSAobWF4X2xlbmd0aC90aGlzLmxlbmd0aCgpKSp0aGlzLnk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcblxyXG4gIGxlbmd0aCgpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54KioyK3RoaXMueSoqMik7XHJcbiAgfVxyXG5cclxuICB1bml0KCkge1xyXG4gICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XHJcbiAgICB0aGlzLnggPSB0aGlzLngvbGVuZ3RoXHJcbiAgICB0aGlzLnkgPSB0aGlzLnkvbGVuZ3RoXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcblxyXG4gIGNsb25lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnkpXHJcbiAgfVxyXG5cclxuICBkaXNjcmV0aXplKCkge1xyXG4gICAgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpXHJcbiAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSlcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuXHJcbiAgd3JhcChncmlkX2xlbmd0aCkge1xyXG4gICAgdGhpcy54ID0gdGhpcy5nZXRfYm91bmRlZF9pbmRleChncmlkX2xlbmd0aCwgdGhpcy54KVxyXG4gICAgdGhpcy55ID0gdGhpcy5nZXRfYm91bmRlZF9pbmRleChncmlkX2xlbmd0aCwgdGhpcy55KVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG5cclxuICBnZXRfYm91bmRlZF9pbmRleChncmlkX2xlbmd0aCwgaW5kZXgpIHtcclxuICAgIGxldCBib3VuZGVkX2luZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgaWYoaW5kZXggPCAwKSB7XHJcbiAgICAgIGJvdW5kZWRfaW5kZXggPSBpbmRleCArIGdyaWRfbGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgaWYoaW5kZXggPj0gZ3JpZF9sZW5ndGgpIHtcclxuICAgICAgYm91bmRlZF9pbmRleCA9IGluZGV4IC0gZ3JpZF9sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJvdW5kZWRfaW5kZXhcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('simulation/playground',["require", "exports", "aurelia-framework", "../models/small-world", "ion-rangeslider"], function (require, exports, aurelia_framework_1, small_world_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Playground = (function () {
        function Playground() {
            this.simulation_initialized = true;
            this.grid_selected = 100;
            this.mating_selected = 1;
            this.data_grid = [];
            this.current_filter = new Set();
            this.collapsed_input = false;
            this.collapsed_grid = false;
            this.collapsed_out = true;
            this.world = new small_world_1.SmallWorld(this.data_grid);
        }
        Playground.prototype.switch = function () {
            this.collapsed_input = this.collapsed_input == true ? false : true;
            this.collapsed_grid = this.collapsed_grid == true ? false : true;
            this.collapsed_out = this.collapsed_out == true ? false : true;
        };
        Playground.prototype.attached = function () {
            var _this = this;
            $("#mating").ionRangeSlider({
                min: 1,
                max: 100,
                from: 1,
                step: 1,
                type: "single",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.mating_selected = data["from"];
                }
            });
            $("#grid_length").ionRangeSlider({
                min: 10,
                max: 1000,
                from: 100,
                step: 1,
                type: "single",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.redrawGrid();
                    _this.grid_selected = data["from"];
                }
            });
        };
        Playground.prototype.redrawGrid = function () {
            this.redraw = this.redraw == 0 ? 1 : 0;
        };
        Playground.prototype.stopSimulation = function () {
            clearTimeout(this.timeout);
        };
        Playground.prototype.initializeWorld = function () {
            this.world.init_simulation();
            this.simulation_initialized = false;
        };
        Playground.prototype.compute = function () {
            var _this = this;
            this.timeout = setInterval(function () { _this.world.run_iteration(); }, 200);
        };
        Playground = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [])
        ], Playground);
        return Playground;
    }());
    exports.Playground = Playground;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXVsYXRpb24vcGxheWdyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQTtRQXFCSTtZQW5CQSwyQkFBc0IsR0FBRyxJQUFJLENBQUM7WUFLOUIsa0JBQWEsR0FBRyxHQUFHLENBQUM7WUFDcEIsb0JBQWUsR0FBRyxDQUFDLENBQUM7WUFFcEIsY0FBUyxHQUFXLEVBQUUsQ0FBQTtZQUV0QixtQkFBYyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFFM0Isb0JBQWUsR0FBRyxLQUFLLENBQUM7WUFDeEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7WUFDdkIsa0JBQWEsR0FBRyxJQUFJLENBQUM7WUFNbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHdCQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFRCwyQkFBTSxHQUFOO1lBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakUsQ0FBQztRQUVELDZCQUFRLEdBQVI7WUFBQSxpQkF5QkM7WUF2QkcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztnQkFDeEIsR0FBRyxFQUFFLENBQUM7Z0JBQ04sR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osUUFBUSxFQUFFLFVBQUMsSUFBSTtvQkFDYixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDekMsQ0FBQzthQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxjQUFjLENBQUM7Z0JBQzdCLEdBQUcsRUFBRSxFQUFFO2dCQUNQLEdBQUcsRUFBRSxJQUFJO2dCQUNULElBQUksRUFBRSxHQUFHO2dCQUNULElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxRQUFRO2dCQUNkLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFFBQVEsRUFBRSxVQUFDLElBQUk7b0JBQ2IsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO29CQUNqQixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDdkMsQ0FBQzthQUFDLENBQUMsQ0FBQztRQUNSLENBQUM7UUFFRCwrQkFBVSxHQUFWO1lBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUVELG1DQUFjLEdBQWQ7WUFDRSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFFRCxvQ0FBZSxHQUFmO1lBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQTtZQUM1QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLENBQUM7UUFFRCw0QkFBTyxHQUFQO1lBQUEsaUJBSUc7WUFEQyxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBRSxjQUFPLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUEsQ0FBQSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDdEUsQ0FBQztRQTNFTSxVQUFVO1lBRHRCLDhCQUFVOztXQUNFLFVBQVUsQ0E0RXRCO1FBQUQsaUJBQUM7S0E1RUQsQUE0RUMsSUFBQTtJQTVFWSxnQ0FBVSIsImZpbGUiOiJzaW11bGF0aW9uL3BsYXlncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3QsIG9ic2VydmFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCBcImlvbi1yYW5nZXNsaWRlclwiXG5pbXBvcnQge1NtYWxsV29ybGR9IGZyb20gXCIuLi9tb2RlbHMvc21hbGwtd29ybGRcIlxuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBQbGF5Z3JvdW5kIHtcbiAgICAvLyBJbnRlcmZhY2UgcGFyYW1zXG4gICAgc2ltdWxhdGlvbl9pbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICB3b3JsZDtcblxuICAgIC8vIFBvcHVsYXRpb24gY291bnRcbiAgICBncmlkX3NlbGVjdGVkID0gMTAwO1xuICAgIG1hdGluZ19zZWxlY3RlZCA9IDE7XG5cbiAgICBkYXRhX2dyaWQgPSA8YW55W10+IFtdXG5cbiAgICBjdXJyZW50X2ZpbHRlciA9IG5ldyBTZXQoKTtcblxuICAgIGNvbGxhcHNlZF9pbnB1dCA9IGZhbHNlO1xuICAgIGNvbGxhcHNlZF9ncmlkID0gZmFsc2U7XG4gICAgY29sbGFwc2VkX291dCA9IHRydWU7XG5cbiAgICB0aW1lb3V0O1xuICAgIHJlZHJhdztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy53b3JsZCA9IG5ldyBTbWFsbFdvcmxkKHRoaXMuZGF0YV9ncmlkKTtcbiAgICB9XG5cbiAgICBzd2l0Y2goKSB7XG4gICAgICB0aGlzLmNvbGxhcHNlZF9pbnB1dCA9IHRoaXMuY29sbGFwc2VkX2lucHV0ID09IHRydWUgPyBmYWxzZSA6IHRydWU7XG4gICAgICB0aGlzLmNvbGxhcHNlZF9ncmlkID0gdGhpcy5jb2xsYXBzZWRfZ3JpZCA9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgdGhpcy5jb2xsYXBzZWRfb3V0ID0gdGhpcy5jb2xsYXBzZWRfb3V0ID09IHRydWUgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIC8vIEF0dGFjaGluZyByYW5nZSBzbGlkZXJzXG4gICAgICAgICQoXCIjbWF0aW5nXCIpLmlvblJhbmdlU2xpZGVyKHtcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgICAgZnJvbTogMSxcbiAgICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgICB0eXBlOiBcInNpbmdsZVwiLFxuICAgICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyaWRfbnVtOiAxMCxcbiAgICAgICAgICAgIG9uRmluaXNoOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLm1hdGluZ19zZWxlY3RlZCA9IGRhdGFbXCJmcm9tXCJdXG4gICAgICAgIH19KTtcbiAgICAgICAgJChcIiNncmlkX2xlbmd0aFwiKS5pb25SYW5nZVNsaWRlcih7XG4gICAgICAgICAgICBtaW46IDEwLFxuICAgICAgICAgICAgbWF4OiAxMDAwLFxuICAgICAgICAgICAgZnJvbTogMTAwLFxuICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgIHR5cGU6IFwic2luZ2xlXCIsXG4gICAgICAgICAgICBncmlkOiB0cnVlLFxuICAgICAgICAgICAgZ3JpZF9udW06IDEwLFxuICAgICAgICAgICAgb25GaW5pc2g6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucmVkcmF3R3JpZCgpXG4gICAgICAgICAgICAgIHRoaXMuZ3JpZF9zZWxlY3RlZCA9IGRhdGFbXCJmcm9tXCJdXG4gICAgICAgIH19KTtcbiAgICB9XG5cbiAgICByZWRyYXdHcmlkKCkge1xuICAgICAgICB0aGlzLnJlZHJhdyA9IHRoaXMucmVkcmF3ID09IDAgPyAxIDogMDtcbiAgICB9XG5cbiAgICBzdG9wU2ltdWxhdGlvbigpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemVXb3JsZCgpIHtcbiAgICAgIHRoaXMud29ybGQuaW5pdF9zaW11bGF0aW9uKClcbiAgICAgIHRoaXMuc2ltdWxhdGlvbl9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbXB1dGUoKSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgU3BhdGlhbCBNaWdyYXRpb24gU2ltdWxhdGlvblxuICAgICAgICAvLyB0aGlzLndvcmxkLnJ1bl9pdGVyYXRpb24oKVxuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRJbnRlcnZhbCggKCkgPT4ge3RoaXMud29ybGQucnVuX2l0ZXJhdGlvbigpfSwgMjAwKVxuICAgICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('models/genetic',["require", "exports", "aurelia-framework", "../helper/sampling", "d3"], function (require, exports, aurelia_framework_1, sampling_1, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Genetic = (function () {
        function Genetic(event_range, population_range, leftover_range, generations, n_samples) {
            this.event_range = event_range;
            this.population_range = population_range;
            this.leftover_range = leftover_range;
            this.generations = generations;
            this.n_samples = n_samples;
            this.p = 0.5;
            this.params = [];
            this.time_range = [];
            this.populations = [];
            for (var i = 0; i < this.generations; i++) {
                this.time_range.push(i);
            }
            this.sampling = new sampling_1.Sampling("sobol");
            this.rnd = d3.randomUniform();
        }
        Genetic.prototype.compute_model = function () {
            var _this = this;
            var out = [];
            this.get_params(this.sampling.get_points(this.n_samples, 3));
            this.params.forEach(function (d) {
                _this.populations.length = 0;
                out.push(_this.simulation(d));
            });
            return out;
        };
        Genetic.prototype.simulation = function (params) {
            this.p = 0.5;
            var runs = [];
            var population_size = 0;
            for (var i = 1; i < this.generations + 1; i++) {
                if (this.rnd() < params[1]) {
                    population_size = Math.round(params[2]);
                }
                else {
                    population_size = params[0];
                }
                this.populations.push(population_size);
                runs.push({
                    pop: this.effective_population(),
                    p: this.next_generation(population_size)
                });
            }
            return runs;
        };
        Genetic.prototype.next_generation = function (population_size) {
            var draws = 2 * population_size;
            var a1 = 0;
            var a2 = 0;
            for (var i = 0; i < draws; i = i + 1) {
                if (Math.random() <= this.p) {
                    a1 = a1 + 1;
                }
                else {
                    a2 = a2 + 1;
                }
            }
            this.p = a1 / draws;
            return this.p;
        };
        Genetic.prototype.effective_population = function () {
            var denominator = 0;
            for (var i = 0; i < this.populations.length; i = i + 1) {
                denominator = denominator + (1 / this.populations[i]);
            }
            return Math.round(this.populations.length / denominator);
        };
        Genetic.prototype.get_params = function (points) {
            var _this = this;
            var pop_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.population_range);
            var event_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.event_range);
            var leftover_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.leftover_range);
            points.forEach(function (d) {
                _this.params.push([
                    pop_scale(d[0]),
                    event_scale(d[1]),
                    leftover_scale(d[2])
                ]);
            });
        };
        Genetic = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
        ], Genetic);
        return Genetic;
    }());
    exports.Genetic = Genetic;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNkLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUVoQyxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFO2lCQUMvQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUUzQixJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFO2lCQUNsQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUU5QixNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUEsQ0FBQztnQkFDYixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDYixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNmLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZCLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQXZHVSxPQUFPO1lBRG5CLDhCQUFVOztXQUNFLE9BQU8sQ0F3R25CO1FBQUQsY0FBQztLQXhHRCxBQXdHQyxJQUFBO0lBeEdZLDBCQUFPIiwiZmlsZSI6Im1vZGVscy9nZW5ldGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7U2FtcGxpbmd9IGZyb20gXCIuLi9oZWxwZXIvc2FtcGxpbmdcIlxyXG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIlxyXG5cclxuLy8gVGhpcyBtYWdpYyBsaW5lIHJlbW92ZWQgdGhlIGVycm9yIG1lc3NhZ2VzIGZvciBudW1lcmljXHJcbmRlY2xhcmUgdmFyIG51bWVyaWM6IGFueTtcclxuZGVjbGFyZSB2YXIgbG9ib3M6IGFueTtcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBHZW5ldGljIHtcclxuICBwID0gMC41O1xyXG4gIHBhcmFtcyA9IFtdO1xyXG4gIHRpbWVfcmFuZ2UgPSBbXTtcclxuICBwb3B1bGF0aW9ucyA9IFtdO1xyXG4gIHJuZDtcclxuICBzYW1wbGluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudF9yYW5nZSwgcHJpdmF0ZSBwb3B1bGF0aW9uX3JhbmdlLCBwcml2YXRlIGxlZnRvdmVyX3JhbmdlLCBwcml2YXRlIGdlbmVyYXRpb25zLCBwcml2YXRlIG5fc2FtcGxlcykge1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZ2VuZXJhdGlvbnM7IGkrKykge1xyXG4gICAgICB0aGlzLnRpbWVfcmFuZ2UucHVzaChpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNhbXBsaW5nID0gbmV3IFNhbXBsaW5nKFwic29ib2xcIik7XHJcbiAgICB0aGlzLnJuZCA9IGQzLnJhbmRvbVVuaWZvcm0oKTtcclxuICB9XHJcblxyXG4gIGNvbXB1dGVfbW9kZWwoKSB7XHJcbiAgICBsZXQgb3V0ID0gW107XHJcbiAgICB0aGlzLmdldF9wYXJhbXModGhpcy5zYW1wbGluZy5nZXRfcG9pbnRzKHRoaXMubl9zYW1wbGVzLCAzKSlcclxuXHJcbiAgICB0aGlzLnBhcmFtcy5mb3JFYWNoKCBkID0+IHtcclxuICAgICAgdGhpcy5wb3B1bGF0aW9ucy5sZW5ndGggPSAwO1xyXG4gICAgICBvdXQucHVzaCh0aGlzLnNpbXVsYXRpb24oZCkpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gb3V0O1xyXG4gIH1cclxuXHJcbiAgc2ltdWxhdGlvbihwYXJhbXMpIHtcclxuICAgICAgLy8gUmVzZXQgcCBmb3IgYSBuZXcgc2ltdWxhdGlvblxyXG4gICAgICB0aGlzLnAgPSAwLjU7XHJcbiAgICAgIGxldCBydW5zID0gW107XHJcbiAgICAgIGxldCBwb3B1bGF0aW9uX3NpemUgPSAwO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmdlbmVyYXRpb25zKzE7IGkrKykge1xyXG4gICAgICAgIGlmKHRoaXMucm5kKCk8cGFyYW1zWzFdKSB7XHJcbiAgICAgICAgICBwb3B1bGF0aW9uX3NpemUgPSBNYXRoLnJvdW5kKHBhcmFtc1syXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBwb3B1bGF0aW9uX3NpemUgPSBwYXJhbXNbMF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucG9wdWxhdGlvbnMucHVzaChwb3B1bGF0aW9uX3NpemUpXHJcblxyXG4gICAgICAgIHJ1bnMucHVzaCh7XHJcbiAgICAgICAgICBwb3A6IHRoaXMuZWZmZWN0aXZlX3BvcHVsYXRpb24oKSxcclxuICAgICAgICAgIHA6IHRoaXMubmV4dF9nZW5lcmF0aW9uKHBvcHVsYXRpb25fc2l6ZSl9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJ1bnM7XHJcbiAgfVxyXG5cclxuICBuZXh0X2dlbmVyYXRpb24ocG9wdWxhdGlvbl9zaXplKSB7XHJcbiAgICAgIGxldCBkcmF3cyA9IDIgKiBwb3B1bGF0aW9uX3NpemU7XHJcbiAgICAgIGxldCBhMSA9IDA7XHJcbiAgICAgIGxldCBhMiA9IDA7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYXdzOyBpID0gaSArIDEpIHtcclxuICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDw9IHRoaXMucCkge1xyXG4gICAgICAgICAgICAgIGExID0gYTEgKyAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgYTIgPSBhMiArIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucCA9IGExL2RyYXdzO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMucDtcclxuICB9XHJcblxyXG4gIC8vIEhhcm1vbmljIG1lYW4gb2YgYWxsIHBvcHVsYXRpb25zXHJcbiAgZWZmZWN0aXZlX3BvcHVsYXRpb24oKSB7XHJcbiAgICBsZXQgZGVub21pbmF0b3IgPSAwO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb3B1bGF0aW9ucy5sZW5ndGg7IGkgPSBpICsgMSkge1xyXG4gICAgICAgIGRlbm9taW5hdG9yID0gZGVub21pbmF0b3IgKyAoMSAvIHRoaXMucG9wdWxhdGlvbnNbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMucG9wdWxhdGlvbnMubGVuZ3RoIC8gZGVub21pbmF0b3IpO1xyXG4gIH1cclxuXHJcbiAgZ2V0X3BhcmFtcyhwb2ludHMpIHtcclxuICAgIGxldCBwb3Bfc2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgIC5kb21haW4oWzAsIDFdKVxyXG4gICAgICAucmFuZ2UodGhpcy5wb3B1bGF0aW9uX3JhbmdlKTtcclxuXHJcbiAgICBsZXQgZXZlbnRfc2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgIC5kb21haW4oWzAsIDFdKVxyXG4gICAgICAucmFuZ2UodGhpcy5ldmVudF9yYW5nZSk7XHJcblxyXG4gICAgbGV0IGxlZnRvdmVyX3NjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAuZG9tYWluKFswLCAxXSlcclxuICAgICAgLnJhbmdlKHRoaXMubGVmdG92ZXJfcmFuZ2UpO1xyXG5cclxuICAgIHBvaW50cy5mb3JFYWNoKCBkID0+IHtcclxuICAgICAgICB0aGlzLnBhcmFtcy5wdXNoKFtcclxuICAgICAgICAgICAgcG9wX3NjYWxlKGRbMF0pLFxyXG4gICAgICAgICAgICBldmVudF9zY2FsZShkWzFdKSxcclxuICAgICAgICAgICAgbGVmdG92ZXJfc2NhbGUoZFsyXSlcclxuICAgICAgICBdKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('models/sir',["require", "exports", "aurelia-framework", "../helper/sampling", "d3"], function (require, exports, aurelia_framework_1, sampling_1, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SIR = (function () {
        function SIR(rho_range, v_range, mu_range, beta_range, gamma_range, NY, S0, I0) {
            var _this = this;
            this.rho_range = rho_range;
            this.v_range = v_range;
            this.mu_range = mu_range;
            this.beta_range = beta_range;
            this.gamma_range = gamma_range;
            this.NY = NY;
            this.S0 = S0;
            this.I0 = I0;
            this.time_range = [];
            this.params = [];
            this.SIR_model = function (t, INP) {
                var Y = [0, 0, 0];
                var V = INP;
                Y[0] = _this.v - _this.beta * V[0] * V[1] / V.reduce(function (a, b) { return a + b; }, 0) - _this.mu * V[0];
                Y[1] = _this.beta * V[0] * V[1] / V.reduce(function (a, b) { return a + b; }, 0) - (_this.gamma + _this.mu) * V[1] / (1 - _this.rho);
                Y[2] = _this.gamma * V[1] - _this.mu * V[2];
                return Y;
            };
            this.ND = this.NY * 365;
            this.R0 = 1 - this.S0 - this.I0;
            this.INPUT = [+this.S0, +this.I0, +this.R0];
            for (var i = 0; i < this.ND; i++) {
                this.time_range.push(i);
            }
            this.sampling = new sampling_1.Sampling("sobol");
        }
        SIR.prototype.compute_model = function (n_samples) {
            var _this = this;
            var out = [];
            this.get_params(this.sampling.get_points(n_samples, 5));
            this.params.forEach(function (d) {
                _this.rho = d[0];
                _this.v = d[1];
                _this.mu = d[2];
                _this.beta = d[3];
                _this.gamma = d[4];
                var sol = numeric.dopri(0, _this.ND, _this.INPUT, _this.SIR_model, 1e-6, 5000);
                out.push(sol.at(_this.time_range));
            });
            return out;
        };
        SIR.prototype.get_params = function (points) {
            var _this = this;
            var rho_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.rho_range);
            var v_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.v_range);
            var mu_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.mu_range);
            var beta_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.beta_range);
            var gamma_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.gamma_range);
            points.forEach(function (d) {
                _this.params.push([
                    Math.round(rho_scale(d[0])) / 100,
                    1 / (Math.round(v_scale(d[1])) * 365),
                    1 / (Math.round(mu_scale(d[2])) * 365),
                    beta_scale(d[3]),
                    1 / Math.round(gamma_scale(d[4]))
                ]);
            });
        };
        SIR = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object])
        ], SIR);
        return SIR;
    }());
    exports.SIR = SIR;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2xDLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQXRGVSxHQUFHO1lBRGYsOEJBQVU7O1dBQ0UsR0FBRyxDQXVGZjtRQUFELFVBQUM7S0F2RkQsQUF1RkMsSUFBQTtJQXZGWSxrQkFBRyIsImZpbGUiOiJtb2RlbHMvc2lyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1NhbXBsaW5nfSBmcm9tIFwiLi4vaGVscGVyL3NhbXBsaW5nXCJcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiXG5cbi8vIFRoaXMgbWFnaWMgbGluZSByZW1vdmVkIHRoZSBlcnJvciBtZXNzYWdlcyBmb3IgbnVtZXJpY1xuZGVjbGFyZSB2YXIgbnVtZXJpYzogYW55O1xuZGVjbGFyZSB2YXIgbG9ib3M6IGFueTtcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBTSVIge1xuICBwcml2YXRlIE5EO1xuICBwcml2YXRlIFIwO1xuICBwcml2YXRlIElOUFVUO1xuICBwdWJsaWMgdGltZV9yYW5nZSA9IDxhbnlbXT4gW107XG4gIHB1YmxpYyBwYXJhbXMgPSA8YW55W10+IFtdO1xuICBwcml2YXRlIHNhbXBsaW5nO1xuXG4gIC8vIFBhcmFtcyBmb3IgdGhlIGNvbXB1dGF0aW9uc1xuICBwcml2YXRlIHJobztcbiAgcHJpdmF0ZSB2O1xuICBwcml2YXRlIG11O1xuICBwcml2YXRlIGJldGE7XG4gIHByaXZhdGUgZ2FtbWE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByaG9fcmFuZ2UsIHByaXZhdGUgdl9yYW5nZSxcbiAgICBwcml2YXRlIG11X3JhbmdlLCBwcml2YXRlIGJldGFfcmFuZ2UsIHByaXZhdGUgZ2FtbWFfcmFuZ2UsXG4gICAgcHJpdmF0ZSBOWSwgcHJpdmF0ZSBTMCwgcHJpdmF0ZSBJMCkge1xuICAgICAgLy8gVXBkYXRlIHZhcmlhYmxlc1xuICAgICAgdGhpcy5ORCA9IHRoaXMuTlkqMzY1XG4gICAgICB0aGlzLlIwID0gMSAtIHRoaXMuUzAgLSB0aGlzLkkwXG4gICAgICB0aGlzLklOUFVUID0gWyt0aGlzLlMwLCArdGhpcy5JMCwgK3RoaXMuUjBdXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ORDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy50aW1lX3JhbmdlLnB1c2goaSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5zYW1wbGluZyA9IG5ldyBTYW1wbGluZyhcInNvYm9sXCIpO1xuICB9XG5cbiAgY29tcHV0ZV9tb2RlbChuX3NhbXBsZXMpIHtcbiAgICBsZXQgb3V0ID0gPGFueVtdPiBbXTtcbiAgICB0aGlzLmdldF9wYXJhbXModGhpcy5zYW1wbGluZy5nZXRfcG9pbnRzKG5fc2FtcGxlcywgNSkpXG5cbiAgICB0aGlzLnBhcmFtcy5mb3JFYWNoKCBkID0+IHtcbiAgICAgICAgdGhpcy5yaG8gPSBkWzBdO1xuICAgICAgICB0aGlzLnYgPSBkWzFdO1xuICAgICAgICB0aGlzLm11ID0gZFsyXTtcbiAgICAgICAgdGhpcy5iZXRhID0gZFszXTtcbiAgICAgICAgdGhpcy5nYW1tYSA9IGRbNF07XG5cbiAgICAgICAgbGV0IHNvbCA9IG51bWVyaWMuZG9wcmkoMCwgdGhpcy5ORCwgdGhpcy5JTlBVVCwgdGhpcy5TSVJfbW9kZWwsIDFlLTYsIDUwMDApO1xuXG4gICAgICAgIG91dC5wdXNoKHNvbC5hdCh0aGlzLnRpbWVfcmFuZ2UpKVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIHByaXZhdGUgU0lSX21vZGVsID0gKHQsIElOUCkgPT4ge1xuICAgIGxldCBZID0gWzAsIDAgLDBdXG4gICAgbGV0IFYgPSBJTlBcblxuICAgICAgWVswXSA9IHRoaXMudiAtIHRoaXMuYmV0YSAqIFZbMF0gKiBWWzFdIC8gVi5yZWR1Y2UoKGEsYikgPT4gYSArIGIsIDApIC0gdGhpcy5tdSAqIFZbMF1cbiAgICAgIFlbMV0gPSB0aGlzLmJldGEgKiBWWzBdICogVlsxXSAvIFYucmVkdWNlKChhLGIpID0+IGEgKyBiLCAwKSAtICh0aGlzLmdhbW1hICsgdGhpcy5tdSkgKiBWWzFdLygxLXRoaXMucmhvKVxuICAgICAgWVsyXSA9IHRoaXMuZ2FtbWEgKiBWWzFdIC0gdGhpcy5tdSAqIFZbMl1cblxuICAgIHJldHVybiBZXG4gIH1cblxuICBwcml2YXRlIGdldF9wYXJhbXMocG9pbnRzKSB7XG4gICAgbGV0IHJob19zY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIDFdKVxuICAgICAgLnJhbmdlKHRoaXMucmhvX3JhbmdlKTtcbiAgICBsZXQgdl9zY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIDFdKVxuICAgICAgLnJhbmdlKHRoaXMudl9yYW5nZSk7XG4gICAgbGV0IG11X3NjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgMV0pXG4gICAgICAucmFuZ2UodGhpcy5tdV9yYW5nZSk7XG4gICAgbGV0IGJldGFfc2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCAxXSlcbiAgICAgIC5yYW5nZSh0aGlzLmJldGFfcmFuZ2UpO1xuICAgIGxldCBnYW1tYV9zY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIDFdKVxuICAgICAgLnJhbmdlKHRoaXMuZ2FtbWFfcmFuZ2UpO1xuXG4gICAgcG9pbnRzLmZvckVhY2goIGQgPT4ge1xuICAgICAgICB0aGlzLnBhcmFtcy5wdXNoKFtcbiAgICAgICAgICAgIE1hdGgucm91bmQocmhvX3NjYWxlKGRbMF0pKS8xMDAsXG4gICAgICAgICAgICAxLyhNYXRoLnJvdW5kKHZfc2NhbGUoZFsxXSkpKjM2NSksXG4gICAgICAgICAgICAxLyhNYXRoLnJvdW5kKG11X3NjYWxlKGRbMl0pKSozNjUpLFxuICAgICAgICAgICAgYmV0YV9zY2FsZShkWzNdKSxcbiAgICAgICAgICAgIDEvTWF0aC5yb3VuZChnYW1tYV9zY2FsZShkWzRdKSlcbiAgICAgICAgXSlcbiAgICB9KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('models/small-world',["require", "exports", "aurelia-framework", "../hosts/sheep", "../helper/vector", "lodash"], function (require, exports, aurelia_framework_1, sheep_1, vector_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SmallWorld = (function () {
        function SmallWorld(grid) {
            this.grid = grid;
            this.grid_length = 100;
            this.landscape_grid = [];
            this.temp_landscape_grid = [];
            this.host_list = [];
            this.max_mating_distance = 1;
            this.simulation_iterations = 0;
            this.noise = new Noise();
        }
        SmallWorld.prototype.get_random_int = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        SmallWorld.prototype.init_simulation = function () {
            this.grid.length = 0;
            this.simulation_iterations = 0;
            var noise_map = [];
            this.noise.seed(Math.random());
            for (var i = 0; i < this.grid_length; i++) {
                var temp = [];
                for (var j = 0; j < this.grid_length; j++) {
                    temp[j] = this.noise.simplex2(i / 50, j / 50);
                }
                noise_map.push(temp);
            }
            for (var i = 0; i < this.grid_length; i++) {
                var temp_landscape = [];
                for (var j = 0; j < this.grid_length; j++) {
                    var value = "grass";
                    if (noise_map[i][j] <= 0) {
                        value = "grass_fresh";
                    }
                    else {
                        value = "dirt";
                    }
                    temp_landscape[j] = value;
                }
                this.landscape_grid.push(temp_landscape);
            }
            var found = false;
            while (!found) {
                var x = this.get_random_int(0, this.grid_length - 1);
                var y = this.get_random_int(0, this.grid_length - 1);
                if (this.landscape_grid[x][y] == "grass_fresh") {
                    found = true;
                    this.host_list.push(new sheep_1.Sheep(new vector_1.Vector(x, y)));
                    this.host_list.push(new sheep_1.Sheep(new vector_1.Vector(x - 1, y)));
                    this.host_list.push(new sheep_1.Sheep(new vector_1.Vector(x + 1, y)));
                    this.host_list.push(new sheep_1.Sheep(new vector_1.Vector(x, y + 1)));
                    this.host_list.push(new sheep_1.Sheep(new vector_1.Vector(x, y - 1)));
                    this.host_list.push(new sheep_1.Sheep(new vector_1.Vector(x + 1, y + 1)));
                    this.host_list.push(new sheep_1.Sheep(new vector_1.Vector(x + 2, y + 1)));
                    this.host_list.push(new sheep_1.Sheep(new vector_1.Vector(x + 2, y)));
                    this.host_list.push(new sheep_1.Sheep(new vector_1.Vector(x - 1, y - 1)));
                }
            }
            for (var i = 0; i < this.grid_length; i++) {
                this.grid.push(_.clone(this.landscape_grid[i]));
            }
            for (var _i = 0, _a = this.host_list; _i < _a.length; _i++) {
                var host = _a[_i];
                this.grid[this.get_bounded_index(this.grid.length, host.position.x)][this.get_bounded_index(this.grid.length, host.position.y)] = host.type;
            }
        };
        SmallWorld.prototype.update_grid = function () {
            this.landscape_grid.length = 0;
            this.grid.length = 0;
            for (var i_1 = 0; i_1 < this.grid_length; i_1++) {
                this.landscape_grid.push(_.clone(this.temp_landscape_grid[i_1]));
                this.grid.push(_.clone(this.landscape_grid[i_1]));
            }
            for (var i = this.host_list.length - 1; i >= 0; i--) {
                if (this.host_list[i].dead) {
                    this.host_list.splice(i, 1);
                }
                else {
                    this.host_list[i].position = _.cloneDeep(this.host_list[i].next_position);
                    this.grid[this.host_list[i].position.x][this.host_list[i].position.y] = this.host_list[i].type;
                }
            }
        };
        SmallWorld.prototype.run_iteration = function () {
            this.temp_landscape_grid = _.cloneDeep(this.landscape_grid);
            for (var _i = 0, _a = this.host_list; _i < _a.length; _i++) {
                var host = _a[_i];
                host.simulate(this.temp_landscape_grid, this.host_list);
            }
            console.log(this.host_list.length);
            this.update_grid();
            this.simulation_iterations++;
        };
        SmallWorld.prototype.get_bounded_index = function (grid_length, index) {
            var bounded_index = index;
            if (index < 0) {
                bounded_index = index + grid_length;
            }
            if (index >= grid_length) {
                bounded_index = index - grid_length;
            }
            return bounded_index;
        };
        SmallWorld = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Object])
        ], SmallWorld);
        return SmallWorld;
    }());
    exports.SmallWorld = SmallWorld;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QkFBQztLQTlJRCxBQThJQyxJQUFBO0lBOUlZLGdDQUFVIiwiZmlsZSI6Im1vZGVscy9zbWFsbC13b3JsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1NhbXBsaW5nfSBmcm9tIFwiLi4vaGVscGVyL3NhbXBsaW5nXCJcclxuaW1wb3J0IHtTaGVlcH0gZnJvbSBcIi4uL2hvc3RzL3NoZWVwXCJcclxuaW1wb3J0IHtWZWN0b3J9IGZyb20gXCIuLi9oZWxwZXIvdmVjdG9yXCJcclxuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCJcclxuXHJcbi8vIFRoaXMgbWFnaWMgbGluZSByZW1vdmVkIHRoZSBlcnJvciBtZXNzYWdlcyBmb3IgbnVtZXJpY1xyXG5kZWNsYXJlIHZhciBsb2JvczogYW55O1xyXG5kZWNsYXJlIHZhciBOb2lzZTogYW55O1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIFNtYWxsV29ybGQge1xyXG4gIC8vIEdyaWQgcGFyYW1zXHJcbiAgbm9pc2U7XHJcbiAgZ3JpZF9sZW5ndGggPSAxMDA7XHJcbiAgbGFuZHNjYXBlX2dyaWQgPSBbXTtcclxuICB0ZW1wX2xhbmRzY2FwZV9ncmlkID0gW107XHJcbiAgaG9zdF9saXN0ID0gW107XHJcblxyXG4gIC8vIEdsb2JhbCBwYXJhbXNcclxuICBtYXhfbWF0aW5nX2Rpc3RhbmNlID0gMTtcclxuICBzaW11bGF0aW9uX2l0ZXJhdGlvbnMgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyaWQpIHtcclxuICAgICAgdGhpcy5ub2lzZSA9IG5ldyBOb2lzZSgpXHJcbiAgfVxyXG5cclxuICBnZXRfcmFuZG9tX2ludChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgfVxyXG5cclxuICBpbml0X3NpbXVsYXRpb24oKSB7XG4gICAgLy8gUmVzZXQgc2ltdWxhdGlvbiB2YXJpYWJsZXNcbiAgICB0aGlzLmdyaWQubGVuZ3RoID0gMDtcbiAgICB0aGlzLnNpbXVsYXRpb25faXRlcmF0aW9ucyA9IDA7XG5cbiAgICAvLyBDcmVhdGUgbm9pc2VtYXAgZm9yIHRoZSBsYW5kc2NhcGVcbiAgICBsZXQgbm9pc2VfbWFwID0gW107XG4gICAgdGhpcy5ub2lzZS5zZWVkKE1hdGgucmFuZG9tKCkpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JpZF9sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRlbXAgPSBbXVxuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZF9sZW5ndGg7IGorKykge1xuICAgICAgICB0ZW1wW2pdID0gdGhpcy5ub2lzZS5zaW1wbGV4MihpLzUwLCBqLzUwKVxuICAgICAgfVxuICAgICAgbm9pc2VfbWFwLnB1c2godGVtcClcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlsaXplIGxhbmRzY2FwZSBhbmQgaG9zdCBncmlkc1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JpZF9sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdGVtcF9sYW5kc2NhcGUgPSBbXVxyXG5cclxuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZF9sZW5ndGg7IGorKykge1xyXG4gICAgICAgIC8vIExhbmRzY2FwZVxyXG4gICAgICAgIGxldCB2YWx1ZSA9IFwiZ3Jhc3NcIlxyXG4gICAgICAgIGlmKG5vaXNlX21hcFtpXVtqXSA8PSAwKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IFwiZ3Jhc3NfZnJlc2hcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IFwiZGlydFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlbXBfbGFuZHNjYXBlW2pdID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sYW5kc2NhcGVfZ3JpZC5wdXNoKHRlbXBfbGFuZHNjYXBlKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBpbml0aWFsIGhvc3RzXHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIC8vIEZpbmQgZ3Jhc3MgYXJlYVxyXG4gICAgd2hpbGUoIWZvdW5kKSB7XHJcbiAgICAgIGxldCB4ID0gdGhpcy5nZXRfcmFuZG9tX2ludCgwLHRoaXMuZ3JpZF9sZW5ndGgtMSk7XHJcbiAgICAgIGxldCB5ID0gdGhpcy5nZXRfcmFuZG9tX2ludCgwLHRoaXMuZ3JpZF9sZW5ndGgtMSlcclxuICAgICAgaWYodGhpcy5sYW5kc2NhcGVfZ3JpZFt4XVt5XSA9PSBcImdyYXNzX2ZyZXNoXCIpIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdF9saXN0LnB1c2gobmV3IFNoZWVwKG5ldyBWZWN0b3IoeCwgeSkpKTtcclxuICAgICAgICB0aGlzLmhvc3RfbGlzdC5wdXNoKG5ldyBTaGVlcChuZXcgVmVjdG9yKHgtMSwgeSkpKTtcclxuICAgICAgICB0aGlzLmhvc3RfbGlzdC5wdXNoKG5ldyBTaGVlcChuZXcgVmVjdG9yKHgrMSwgeSkpKTtcclxuICAgICAgICB0aGlzLmhvc3RfbGlzdC5wdXNoKG5ldyBTaGVlcChuZXcgVmVjdG9yKHgsIHkrMSkpKTtcclxuICAgICAgICB0aGlzLmhvc3RfbGlzdC5wdXNoKG5ldyBTaGVlcChuZXcgVmVjdG9yKHgsIHktMSkpKTtcclxuICAgICAgICB0aGlzLmhvc3RfbGlzdC5wdXNoKG5ldyBTaGVlcChuZXcgVmVjdG9yKHgrMSwgeSsxKSkpO1xyXG4gICAgICAgIHRoaXMuaG9zdF9saXN0LnB1c2gobmV3IFNoZWVwKG5ldyBWZWN0b3IoeCsyLCB5KzEpKSk7XHJcbiAgICAgICAgdGhpcy5ob3N0X2xpc3QucHVzaChuZXcgU2hlZXAobmV3IFZlY3Rvcih4KzIsIHkpKSk7XHJcbiAgICAgICAgdGhpcy5ob3N0X2xpc3QucHVzaChuZXcgU2hlZXAobmV3IFZlY3Rvcih4LTEsIHktMSkpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBpbml0aWFsIGRhdGEgdG8gZ3JpZFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JpZF9sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmdyaWQucHVzaChfLmNsb25lKHRoaXMubGFuZHNjYXBlX2dyaWRbaV0pKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBob3N0c1xyXG4gICAgZm9yICh2YXIgaG9zdCBvZiB0aGlzLmhvc3RfbGlzdCkge1xyXG4gICAgICB0aGlzLmdyaWRbdGhpcy5nZXRfYm91bmRlZF9pbmRleCh0aGlzLmdyaWQubGVuZ3RoLCBob3N0LnBvc2l0aW9uLngpXVt0aGlzLmdldF9ib3VuZGVkX2luZGV4KHRoaXMuZ3JpZC5sZW5ndGgsIGhvc3QucG9zaXRpb24ueSldID0gaG9zdC50eXBlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlX2dyaWQoKSB7XHJcbiAgICB0aGlzLmxhbmRzY2FwZV9ncmlkLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLmdyaWQubGVuZ3RoID0gMDtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkX2xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIC8vIENvcHkgdGVtcCB0byB3b3JraW5nIGdyaWRzXHJcbiAgICAgIHRoaXMubGFuZHNjYXBlX2dyaWQucHVzaChfLmNsb25lKHRoaXMudGVtcF9sYW5kc2NhcGVfZ3JpZFtpXSkpXHJcblxyXG4gICAgICAvLyBBZGQgbGFuZHNjYXBlIGNoYW5nZXNcclxuICAgICAgdGhpcy5ncmlkLnB1c2goXy5jbG9uZSh0aGlzLmxhbmRzY2FwZV9ncmlkW2ldKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgaG9zdCBjaGFuZ2VzXHJcbiAgICBmb3IodmFyIGkgPSB0aGlzLmhvc3RfbGlzdC5sZW5ndGggLTE7IGkgPj0gMCA7IGktLSl7XHJcbiAgICAgIC8vIFJlbW92ZSBkZWFkIGhvc3RzXHJcbiAgICAgIGlmKHRoaXMuaG9zdF9saXN0W2ldLmRlYWQpe1xyXG4gICAgICAgICAgdGhpcy5ob3N0X2xpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIFVwZGF0ZSBob3N0IHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5ob3N0X2xpc3RbaV0ucG9zaXRpb24gPSBfLmNsb25lRGVlcCh0aGlzLmhvc3RfbGlzdFtpXS5uZXh0X3Bvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLmdyaWRbdGhpcy5ob3N0X2xpc3RbaV0ucG9zaXRpb24ueF1bdGhpcy5ob3N0X2xpc3RbaV0ucG9zaXRpb24ueV0gPSB0aGlzLmhvc3RfbGlzdFtpXS50eXBlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBydW5faXRlcmF0aW9uKCkge1xyXG4gICAgLy8gQ3JlYXRlIHRlbXBvcmFyeSBncmlkIGZvciB0aGlzIGl0ZXJhdGlvblxyXG4gICAgdGhpcy50ZW1wX2xhbmRzY2FwZV9ncmlkID0gXy5jbG9uZURlZXAodGhpcy5sYW5kc2NhcGVfZ3JpZCk7XHJcblxyXG4gICAgLy8gR28gdGhyb3VnaCBhbGwgaG9zdHNcclxuICAgIGZvcihsZXQgaG9zdCBvZiB0aGlzLmhvc3RfbGlzdCkge1xyXG4gICAgICBob3N0LnNpbXVsYXRlKHRoaXMudGVtcF9sYW5kc2NhcGVfZ3JpZCwgdGhpcy5ob3N0X2xpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaG9zdF9saXN0Lmxlbmd0aClcclxuICAgIC8vIFVwZGF0ZSBncmlkXHJcbiAgICB0aGlzLnVwZGF0ZV9ncmlkKCk7XHJcblxyXG4gICAgLy8gSW5jcmVhc2Ugc2ltdWxhdGlvbiBjb3VudGVyXHJcbiAgICB0aGlzLnNpbXVsYXRpb25faXRlcmF0aW9ucysrO1xyXG4gIH1cclxuXHJcbiAgZ2V0X2JvdW5kZWRfaW5kZXgoZ3JpZF9sZW5ndGgsIGluZGV4KSB7XHJcbiAgICBsZXQgYm91bmRlZF9pbmRleCA9IGluZGV4O1xyXG5cclxuICAgIGlmKGluZGV4IDwgMCkge1xyXG4gICAgICBib3VuZGVkX2luZGV4ID0gaW5kZXggKyBncmlkX2xlbmd0aDtcclxuICAgIH1cclxuICAgIGlmKGluZGV4ID49IGdyaWRfbGVuZ3RoKSB7XHJcbiAgICAgIGJvdW5kZWRfaW5kZXggPSBpbmRleCAtIGdyaWRfbGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBib3VuZGVkX2luZGV4XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('models/spatial-migration',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpatialMigration = (function () {
        function SpatialMigration(max_mating_distance, grid_length) {
            this.max_mating_distance = max_mating_distance;
            this.grid_length = grid_length;
            this.params = [];
            this.time_range = [];
            this.p = 0.5;
            this.simulation_counter = 0;
        }
        SpatialMigration.prototype.get_random_int = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        SpatialMigration.prototype.init_simulation = function (grid) {
            grid.length = 0;
            this.simulation_counter = 0;
            for (var i = 0; i < this.grid_length; i++) {
                var temp = [];
                for (var j = 0; j < this.grid_length; j++) {
                    var random_number = Math.random();
                    if (random_number < this.p * this.p) {
                        temp[j] = "A1A1";
                    }
                    else if (random_number > 1 - (1 - this.p) * (1 - this.p)) {
                        temp[j] = "A2A2";
                    }
                    else {
                        temp[j] = "A1A2";
                    }
                }
                grid.push(temp);
            }
        };
        SpatialMigration.prototype.get_bounded_index = function (index) {
            var bounded_index = index;
            if (index < 0) {
                bounded_index = index + this.grid_length;
            }
            if (index >= this.grid_length) {
                bounded_index = index - this.grid_length;
            }
            return bounded_index;
        };
        SpatialMigration.prototype.pick_mating_partner = function (grid, i, j) {
            var mating_i = this.get_random_int(i - this.max_mating_distance, i + this.max_mating_distance);
            var mating_j = this.get_random_int(j - this.max_mating_distance, j + this.max_mating_distance);
            mating_i = this.get_bounded_index(mating_i);
            mating_j = this.get_bounded_index(mating_j);
            return grid[mating_i][mating_j];
        };
        SpatialMigration.prototype.get_offspring = function (parent1, parent2) {
            var p1 = parent1;
            var p2 = parent2;
            if (p1 == "A1A1" && p2 == "A1A1") {
                return "A1A1";
            }
            else if ((p1 == "A1A1" && p2 == "A1A2") || (p1 == "A1A2" && p2 == "A1A1")) {
                if (Math.random() < 0.5) {
                    return "A1A1";
                }
                else {
                    return "A1A2";
                }
            }
            else if ((p1 == "A1A1" && p2 == "A2A2") || (p1 == "A2A2" && p2 == "A1A1")) {
                return "A1A2";
            }
            else if (p1 == "A1A2" && p2 == "A1A2") {
                var random_number = Math.random();
                if (random_number < 0.25) {
                    return "A1A1";
                }
                else if (random_number > 0.75) {
                    return "A2A2";
                }
                else {
                    return "A1A2";
                }
            }
            else if ((p1 == "A1A2" && p2 == "A2A2") || (p1 == "A2A2" && p2 == "A1A2")) {
                if (Math.random() < 0.5) {
                    return "A1A2";
                }
                else {
                    return "A2A2";
                }
            }
            else if (p1 == "A2A2" && p2 == "A2A2") {
                return "A2A2";
            }
        };
        SpatialMigration.prototype.compute_FScore = function (grid) {
            var A1A1 = 0;
            var A1A2 = 0;
            var A2A2 = 0;
            for (var i = 0; i < this.grid_length; i = i + 1) {
                for (var ii = 0; ii < this.grid_length; ii = ii + 1) {
                    if (grid[i][ii] == "A1A1") {
                        A1A1 = A1A1 + 1;
                    }
                    else if (grid[i][ii] == "A1A2") {
                        A1A2 = A1A2 + 1;
                    }
                    else {
                        A2A2 = A2A2 + 1;
                    }
                }
            }
            var N = A1A1 + A1A2 + A2A2;
            var h_o = A1A2 / N;
            var p = ((2 * A1A1) + A1A2) / (2 * N);
            var h_e = 2 * p * (1 - p);
            var F = (h_e - h_o) / h_e;
            return F;
        };
        SpatialMigration.prototype.run_simulation = function (grid, data_lines) {
            var temp_grid = [];
            for (var i = 0; i < this.grid_length; i++) {
                temp_grid[i] = [];
                for (var j = 0; j < this.grid_length; j++) {
                    var mating_partner = this.pick_mating_partner(grid, i, j);
                    temp_grid[i][j] = this.get_offspring(grid[i][j], mating_partner);
                }
            }
            grid.length = 0;
            for (var i = 0; i < this.grid_length; i++) {
                var temp = [];
                for (var j = 0; j < this.grid_length; j++) {
                    temp[j] = temp_grid[i][j];
                }
                grid.push(temp);
            }
            data_lines.push({ x: this.simulation_counter++, F: this.compute_FScore(grid) });
        };
        SpatialMigration = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Object, Object])
        ], SpatialMigration);
        return SpatialMigration;
    }());
    exports.SpatialMigration = SpatialMigration;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9zcGF0aWFsLW1pZ3JhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFRQTtRQU9FLDBCQUFvQixtQkFBbUIsRUFBVSxXQUFXO1lBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBQTtZQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFBO1lBTjVELFdBQU0sR0FBRyxFQUFFLENBQUM7WUFDWixlQUFVLEdBQUcsRUFBRSxDQUFDO1lBRWhCLE1BQUMsR0FBRyxHQUFHLENBQUM7WUFDUix1QkFBa0IsR0FBRyxDQUFDLENBQUM7UUFHdkIsQ0FBQztRQUVELHlDQUFjLEdBQWQsVUFBZSxHQUFHLEVBQUUsR0FBRztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUM7UUFFRCwwQ0FBZSxHQUFmLFVBQWdCLElBQUk7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztZQUU1QixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFBO2dCQUViLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUMxQyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBRWxDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENB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QyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDekMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDM0IsQ0FBQztnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLENBQUM7WUFFRCxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQTtRQUMvRSxDQUFDO1FBOUpVLGdCQUFnQjtZQUQ1Qiw4QkFBVTs7V0FDRSxnQkFBZ0IsQ0ErSjVCO1FBQUQsdUJBQUM7S0EvSkQsQUErSkMsSUFBQTtJQS9KWSw0Q0FBZ0IiLCJmaWxlIjoibW9kZWxzL3NwYXRpYWwtbWlncmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7U2FtcGxpbmd9IGZyb20gXCIuLi9oZWxwZXIvc2FtcGxpbmdcIlxyXG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIlxyXG5cclxuLy8gVGhpcyBtYWdpYyBsaW5lIHJlbW92ZWQgdGhlIGVycm9yIG1lc3NhZ2VzIGZvciBudW1lcmljXHJcbmRlY2xhcmUgdmFyIGxvYm9zOiBhbnk7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgU3BhdGlhbE1pZ3JhdGlvbiB7XHJcbiAgcGFyYW1zID0gW107XHJcbiAgdGltZV9yYW5nZSA9IFtdO1xyXG5cclxuICBwID0gMC41O1xyXG4gIHNpbXVsYXRpb25fY291bnRlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWF4X21hdGluZ19kaXN0YW5jZSwgcHJpdmF0ZSBncmlkX2xlbmd0aCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0X3JhbmRvbV9pbnQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gIH1cclxuXHJcbiAgaW5pdF9zaW11bGF0aW9uKGdyaWQpIHtcclxuICAgIGdyaWQubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuc2ltdWxhdGlvbl9jb3VudGVyID0gMDtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkX2xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB0ZW1wID0gW11cclxuXHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5ncmlkX2xlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgbGV0IHJhbmRvbV9udW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG5cclxuICAgICAgICBpZiAocmFuZG9tX251bWJlciA8IHRoaXMucCp0aGlzLnApIHtcclxuICAgICAgICAgICAgdGVtcFtqXSA9IFwiQTFBMVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyYW5kb21fbnVtYmVyID4gMSAtICgxLXRoaXMucCkgKiAoMS10aGlzLnApKSB7XHJcbiAgICAgICAgICAgIHRlbXBbal0gPSBcIkEyQTJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRlbXBbal0gPSBcIkExQTJcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdyaWQucHVzaCh0ZW1wKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0X2JvdW5kZWRfaW5kZXgoaW5kZXgpIHtcclxuICAgIGxldCBib3VuZGVkX2luZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgaWYoaW5kZXggPCAwKSB7XHJcbiAgICAgIGJvdW5kZWRfaW5kZXggPSBpbmRleCArIHRoaXMuZ3JpZF9sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBpZihpbmRleCA+PSB0aGlzLmdyaWRfbGVuZ3RoKSB7XHJcbiAgICAgIGJvdW5kZWRfaW5kZXggPSBpbmRleCAtIHRoaXMuZ3JpZF9sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJvdW5kZWRfaW5kZXhcclxuICB9XHJcblxyXG4gIHBpY2tfbWF0aW5nX3BhcnRuZXIoZ3JpZCwgaSwgaikge1xyXG4gICAgbGV0IG1hdGluZ19pID0gdGhpcy5nZXRfcmFuZG9tX2ludChpIC0gdGhpcy5tYXhfbWF0aW5nX2Rpc3RhbmNlLCBpICsgdGhpcy5tYXhfbWF0aW5nX2Rpc3RhbmNlKTtcclxuICAgIGxldCBtYXRpbmdfaiA9IHRoaXMuZ2V0X3JhbmRvbV9pbnQoaiAtIHRoaXMubWF4X21hdGluZ19kaXN0YW5jZSwgaiArIHRoaXMubWF4X21hdGluZ19kaXN0YW5jZSk7XHJcblxyXG4gICAgbWF0aW5nX2kgPSB0aGlzLmdldF9ib3VuZGVkX2luZGV4KG1hdGluZ19pKTtcclxuICAgIG1hdGluZ19qID0gdGhpcy5nZXRfYm91bmRlZF9pbmRleChtYXRpbmdfaik7XHJcblxyXG4gICAgcmV0dXJuIGdyaWRbbWF0aW5nX2ldW21hdGluZ19qXVxyXG4gIH1cclxuXHJcbiAgZ2V0X29mZnNwcmluZyhwYXJlbnQxLCBwYXJlbnQyKSB7XHJcbiAgICAgIHZhciBwMSA9IHBhcmVudDE7XHJcbiAgICAgIHZhciBwMiA9IHBhcmVudDI7XHJcbiAgICAgIGlmIChwMSA9PSBcIkExQTFcIiAmJiBwMiA9PSBcIkExQTFcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwiQTFBMVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKChwMSA9PSBcIkExQTFcIiAmJiBwMiA9PSBcIkExQTJcIikgfHwgKHAxID09IFwiQTFBMlwiICYmIHAyID09IFwiQTFBMVwiKSkge1xyXG4gICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gXCJBMUExXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gXCJBMUEyXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoKHAxID09IFwiQTFBMVwiICYmIHAyID09IFwiQTJBMlwiKSB8fCAocDEgPT0gXCJBMkEyXCIgJiYgcDIgPT0gXCJBMUExXCIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJBMUEyXCI7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAocDEgPT0gXCJBMUEyXCIgJiYgcDIgPT0gXCJBMUEyXCIpIHtcclxuICAgICAgICAgIHZhciByYW5kb21fbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgIGlmIChyYW5kb21fbnVtYmVyIDwgMC4yNSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIkExQTFcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKHJhbmRvbV9udW1iZXIgPiAwLjc1KXtcclxuICAgICAgICAgICAgICByZXR1cm4gXCJBMkEyXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gXCJBMUEyXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoKHAxID09IFwiQTFBMlwiICYmIHAyID09IFwiQTJBMlwiKSB8fCAocDEgPT0gXCJBMkEyXCIgJiYgcDIgPT0gXCJBMUEyXCIpKSB7XHJcbiAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIkExQTJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIkEyQTJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChwMSA9PSBcIkEyQTJcIiAmJiBwMiA9PSBcIkEyQTJcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwiQTJBMlwiO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGNvbXB1dGVfRlNjb3JlKGdyaWQpIHtcclxuICAgICBsZXQgQTFBMSA9IDA7XHJcbiAgICAgbGV0IEExQTIgPSAwO1xyXG4gICAgIGxldCBBMkEyID0gMDtcclxuICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ3JpZF9sZW5ndGg7IGkgPSBpICsgMSkge1xyXG4gICAgICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgdGhpcy5ncmlkX2xlbmd0aDsgaWkgPSBpaSArIDEpIHtcclxuICAgICAgICAgICAgIGlmIChncmlkW2ldW2lpXSA9PSBcIkExQTFcIikge1xyXG4gICAgICAgICAgICAgICAgIEExQTEgPSBBMUExICsgMTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGVsc2UgaWYgKGdyaWRbaV1baWldID09IFwiQTFBMlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgQTFBMiA9IEExQTIgKyAxO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgQTJBMiA9IEEyQTIgKyAxO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgICBsZXQgTiA9IEExQTEgKyBBMUEyICsgQTJBMjtcclxuICAgICBsZXQgaF9vID0gQTFBMiAvIE47XHJcbiAgICAgbGV0IHAgPSAoKDIgKiBBMUExKSArIEExQTIpIC8gKDIgKiBOKTtcclxuICAgICBsZXQgaF9lID0gMiAqIHAgKiAoMS1wKTtcclxuICAgICBsZXQgRiA9IChoX2UgLSBoX28pIC8gaF9lO1xyXG5cclxuXHJcbiAgICAgcmV0dXJuIEY7XHJcbiAgfVxyXG5cclxuICBydW5fc2ltdWxhdGlvbihncmlkLCBkYXRhX2xpbmVzKSB7XHJcbiAgICBsZXQgdGVtcF9ncmlkID0gW107XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JpZF9sZW5ndGg7IGkrKykge1xyXG4gICAgICB0ZW1wX2dyaWRbaV0gPSBbXTtcclxuXHJcbiAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aGlzLmdyaWRfbGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAvLyBTZWxlY3QgbWF0aW5nIHBhcnRuZXJcclxuICAgICAgICBsZXQgbWF0aW5nX3BhcnRuZXIgPSB0aGlzLnBpY2tfbWF0aW5nX3BhcnRuZXIoZ3JpZCxpLCBqKTtcclxuXHJcbiAgICAgICAgLy8gUmV0dXJuIG9mZnNwcmluZyBnZW5vdHlwZVxyXG4gICAgICAgIHRlbXBfZ3JpZFtpXVtqXSA9IHRoaXMuZ2V0X29mZnNwcmluZyhncmlkW2ldW2pdLCBtYXRpbmdfcGFydG5lcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBncmlkLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JpZF9sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdGVtcCA9IFtdXHJcbiAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aGlzLmdyaWRfbGVuZ3RoOyBqKyspIHtcclxuICAgICAgICB0ZW1wW2pdID0gdGVtcF9ncmlkW2ldW2pdXHJcbiAgICAgIH1cclxuICAgICAgZ3JpZC5wdXNoKHRlbXApXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YV9saW5lcy5wdXNoKHt4OiB0aGlzLnNpbXVsYXRpb25fY291bnRlcisrLCBGOiB0aGlzLmNvbXB1dGVfRlNjb3JlKGdyaWQpfSlcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('models/spatial-sir',["require", "exports", "aurelia-framework", "../helper/sampling", "d3", "lodash"], function (require, exports, aurelia_framework_1, sampling_1, d3, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpatialSir = (function () {
        function SpatialSir(grid_length, alpha_range, beta_range, gamma_range) {
            this.grid_length = grid_length;
            this.alpha_range = alpha_range;
            this.beta_range = beta_range;
            this.gamma_range = gamma_range;
            this.params = [];
            this.grids = [];
            this.simulation_data = [];
            this.sampling = new sampling_1.Sampling("sobol");
        }
        SpatialSir.prototype.compute_model = function (n_samples, generations) {
            var _this = this;
            this.simulation_data.length = 0;
            this.grids.length = 0;
            this.get_params(this.sampling.get_points(n_samples, 3));
            this.params.forEach(function (d) {
                var grid = [];
                _this.init_simulation(grid);
                _this.run_simulation(grid, d, generations);
            });
        };
        SpatialSir.prototype.get_params = function (points) {
            var _this = this;
            var alpha_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.alpha_range);
            var beta_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.beta_range);
            var gamma_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.gamma_range);
            points.forEach(function (d) {
                _this.params.push([
                    alpha_scale(d[0]),
                    beta_scale(d[1]),
                    gamma_scale(d[2])
                ]);
            });
        };
        SpatialSir.prototype.get_random_int = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        SpatialSir.prototype.init_simulation = function (grid) {
            for (var i = 0; i < this.grid_length; i++) {
                var temp = [];
                for (var j = 0; j < this.grid_length; j++) {
                    temp[j] = "S";
                }
                grid.push(temp);
            }
            grid[this.get_random_int(0, this.grid_length - 1)][this.get_random_int(0, this.grid_length - 1)] = "I";
        };
        SpatialSir.prototype.get_bounded_index = function (index) {
            var bounded_index = index;
            if (index < 0) {
                bounded_index = index + this.grid_length;
            }
            if (index >= this.grid_length) {
                bounded_index = index - this.grid_length;
            }
            return bounded_index;
        };
        SpatialSir.prototype.expose_neighbours = function (grid, temp_grid, i, j, params) {
            for (var n_i = i - 1; n_i <= i + 1; n_i++) {
                for (var n_j = j - 1; n_j <= j + 1; n_j++) {
                    if (n_i == i && n_j == j) {
                        continue;
                    }
                    if (Math.random() <= params[0]) {
                        var r_i = this.get_random_int(0, this.grid_length - 1);
                        var r_j = this.get_random_int(0, this.grid_length - 1);
                        if (r_i == i && r_j == j) {
                            continue;
                        }
                        this.infection(grid, temp_grid, this.get_bounded_index(r_i), this.get_bounded_index(r_j), params);
                    }
                    else {
                        this.infection(grid, temp_grid, this.get_bounded_index(n_i), this.get_bounded_index(n_j), params);
                    }
                }
            }
        };
        SpatialSir.prototype.infection = function (grid, temp_grid, i, j, params) {
            if (grid[i][j] == "S") {
                if (Math.random() < params[1]) {
                    temp_grid[i][j] = "I";
                }
            }
        };
        SpatialSir.prototype.recovery = function (grid, temp_grid, i, j, params) {
            if (grid[i][j] == "I") {
                if (Math.random() < params[2]) {
                    temp_grid[i][j] = "R";
                }
            }
        };
        SpatialSir.prototype.run_simulation = function (grid, params, generations) {
            var simulation = [];
            var steps = [];
            steps.push(_.cloneDeep(grid));
            for (var i = 0; i < generations - 1; i++) {
                simulation.push(this.run_iteration(grid, params));
                steps.push(_.cloneDeep(grid));
            }
            this.grids.push(steps);
            this.simulation_data.push(simulation);
        };
        SpatialSir.prototype.run_iteration = function (grid, params) {
            var temp_grid = _.cloneDeep(grid);
            for (var i = 0; i < this.grid_length; i++) {
                for (var j = 0; j < this.grid_length; j++) {
                    if (grid[i][j] == "I") {
                        this.expose_neighbours(grid, temp_grid, i, j, params);
                        this.recovery(grid, temp_grid, i, j, params);
                    }
                }
            }
            grid.length = 0;
            for (var i = 0; i < this.grid_length; i++) {
                var temp = [];
                for (var j = 0; j < this.grid_length; j++) {
                    temp[j] = temp_grid[i][j];
                }
                grid.push(temp);
            }
            var rec = _.filter(_.flatten(grid), function (o) { if (o == "R")
                return o; }).length;
            var inf = _.filter(_.flatten(grid), function (o) { if (o == "I")
                return o; }).length;
            var sus = _.filter(_.flatten(grid), function (o) { if (o == "S")
                return o; }).length;
            return { rec: rec, inf: inf, sus: sus };
        };
        SpatialSir = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Object, Object, Object, Object])
        ], SpatialSir);
        return SpatialSir;
    }());
    exports.SpatialSir = SpatialSir;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLENBQUE7UUFDdkMsQ0FBQztRQW5LVSxVQUFVO1lBRHRCLDhCQUFVOztXQUNFLFVBQVUsQ0FvS3RCO1FBQUQsaUJBQUM7S0FwS0QsQUFvS0MsSUFBQTtJQXBLWSxnQ0FBVSIsImZpbGUiOiJtb2RlbHMvc3BhdGlhbC1zaXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtTYW1wbGluZ30gZnJvbSBcIi4uL2hlbHBlci9zYW1wbGluZ1wiXHJcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiXHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiXHJcblxyXG4vLyBUaGlzIG1hZ2ljIGxpbmUgcmVtb3ZlZCB0aGUgZXJyb3IgbWVzc2FnZXMgZm9yIG51bWVyaWNcclxuZGVjbGFyZSB2YXIgbG9ib3M6IGFueTtcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBTcGF0aWFsU2lyIHtcclxuICBwYXJhbXMgPSBbXTtcclxuICBncmlkcyA9IFtdO1xyXG4gIHNpbXVsYXRpb25fZGF0YSA9IFtdO1xyXG4gIHNhbXBsaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyaWRfbGVuZ3RoLCBwcml2YXRlIGFscGhhX3JhbmdlLCBwcml2YXRlIGJldGFfcmFuZ2UsIHByaXZhdGUgZ2FtbWFfcmFuZ2UpIHtcclxuICAgIHRoaXMuc2FtcGxpbmcgPSBuZXcgU2FtcGxpbmcoXCJzb2JvbFwiKTtcclxuICB9XHJcblxyXG4gIGNvbXB1dGVfbW9kZWwobl9zYW1wbGVzLCBnZW5lcmF0aW9ucykge1xyXG4gICAgdGhpcy5zaW11bGF0aW9uX2RhdGEubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuZ3JpZHMubGVuZ3RoID0gMDtcclxuXHJcbiAgICB0aGlzLmdldF9wYXJhbXModGhpcy5zYW1wbGluZy5nZXRfcG9pbnRzKG5fc2FtcGxlcywgMykpXHJcblxyXG4gICAgdGhpcy5wYXJhbXMuZm9yRWFjaCggZCA9PiB7XHJcbiAgICAgICAgbGV0IGdyaWQgPSA8YW55W10+IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRfc2ltdWxhdGlvbihncmlkKVxyXG4gICAgICAgIHRoaXMucnVuX3NpbXVsYXRpb24oZ3JpZCwgZCwgZ2VuZXJhdGlvbnMpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldF9wYXJhbXMocG9pbnRzKSB7XHJcbiAgICBsZXQgYWxwaGFfc2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgIC5kb21haW4oWzAsIDFdKVxyXG4gICAgICAucmFuZ2UodGhpcy5hbHBoYV9yYW5nZSk7XHJcbiAgICBsZXQgYmV0YV9zY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcclxuICAgICAgLmRvbWFpbihbMCwgMV0pXHJcbiAgICAgIC5yYW5nZSh0aGlzLmJldGFfcmFuZ2UpO1xyXG4gICAgbGV0IGdhbW1hX3NjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAuZG9tYWluKFswLCAxXSlcclxuICAgICAgLnJhbmdlKHRoaXMuZ2FtbWFfcmFuZ2UpO1xyXG5cclxuICAgIHBvaW50cy5mb3JFYWNoKCBkID0+IHtcclxuICAgICAgICB0aGlzLnBhcmFtcy5wdXNoKFtcclxuICAgICAgICAgIGFscGhhX3NjYWxlKGRbMF0pLFxyXG4gICAgICAgICAgYmV0YV9zY2FsZShkWzFdKSxcclxuICAgICAgICAgIGdhbW1hX3NjYWxlKGRbMl0pXHJcbiAgICAgICAgXSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRfcmFuZG9tX2ludChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgfVxyXG5cclxuICBpbml0X3NpbXVsYXRpb24oZ3JpZCkge1xyXG4gICAgLy8gRmlsbCBHcmlkIHdpdGggaW5pdGlhbCBkYXRhXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkX2xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB0ZW1wID0gW11cclxuXHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5ncmlkX2xlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgdGVtcFtqXSA9IFwiU1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBncmlkLnB1c2godGVtcClcclxuICAgIH1cclxuXHJcbiAgICBncmlkW3RoaXMuZ2V0X3JhbmRvbV9pbnQoMCx0aGlzLmdyaWRfbGVuZ3RoLTEpXVt0aGlzLmdldF9yYW5kb21faW50KDAsdGhpcy5ncmlkX2xlbmd0aC0xKV0gPSBcIklcIjtcclxuICB9XHJcblxyXG4gIGdldF9ib3VuZGVkX2luZGV4KGluZGV4KSB7XHJcbiAgICBsZXQgYm91bmRlZF9pbmRleCA9IGluZGV4O1xyXG5cclxuICAgIGlmKGluZGV4IDwgMCkge1xyXG4gICAgICBib3VuZGVkX2luZGV4ID0gaW5kZXggKyB0aGlzLmdyaWRfbGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgaWYoaW5kZXggPj0gdGhpcy5ncmlkX2xlbmd0aCkge1xyXG4gICAgICBib3VuZGVkX2luZGV4ID0gaW5kZXggLSB0aGlzLmdyaWRfbGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBib3VuZGVkX2luZGV4XHJcbiAgfVxyXG5cclxuICBleHBvc2VfbmVpZ2hib3VycyhncmlkLCB0ZW1wX2dyaWQsIGksIGosIHBhcmFtcykge1xyXG4gICAgZm9yKGxldCBuX2kgPSBpIC0gMTtuX2kgPD0gaSArIDE7IG5faSsrKSB7XHJcbiAgICAgIGZvcihsZXQgbl9qID0gaiAtIDE7bl9qIDw9IGogKyAxOyBuX2orKykge1xyXG4gICAgICAgIC8vIFRha2UgY2FyZSBvZiBwb3NzaWJsZSBzZWxmdCBpbmZlY3Rpb25cclxuICAgICAgICBpZihuX2kgPT0gaSAmJiBuX2ogPT0gaikge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGFuY2Ugb2YgYW4gbG9uZyBkaXN0YW5jZSBpbnRlcmFjdGlvblxyXG4gICAgICAgIGlmKE1hdGgucmFuZG9tKCkgPD0gcGFyYW1zWzBdKSB7XHJcbiAgICAgICAgICBsZXQgcl9pID0gdGhpcy5nZXRfcmFuZG9tX2ludCgwLCB0aGlzLmdyaWRfbGVuZ3RoIC0xKTtcclxuICAgICAgICAgIGxldCByX2ogPSB0aGlzLmdldF9yYW5kb21faW50KDAsIHRoaXMuZ3JpZF9sZW5ndGggLTEpO1xyXG5cclxuICAgICAgICAgIC8vIFRha2UgY2FyZSBvZiBwb3NzaWJsZSBzZWxmdCBpbmZlY3Rpb25cclxuICAgICAgICAgIGlmKHJfaSA9PSBpICYmIHJfaiA9PSBqKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5pbmZlY3Rpb24oZ3JpZCwgdGVtcF9ncmlkLCB0aGlzLmdldF9ib3VuZGVkX2luZGV4KHJfaSksIHRoaXMuZ2V0X2JvdW5kZWRfaW5kZXgocl9qKSwgcGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmluZmVjdGlvbihncmlkLCB0ZW1wX2dyaWQsIHRoaXMuZ2V0X2JvdW5kZWRfaW5kZXgobl9pKSwgdGhpcy5nZXRfYm91bmRlZF9pbmRleChuX2opLCBwYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5mZWN0aW9uKGdyaWQsIHRlbXBfZ3JpZCwgaSwgaiwgcGFyYW1zKSB7XHJcbiAgICBpZihncmlkW2ldW2pdID09IFwiU1wiKSB7XHJcbiAgICAgIGlmKE1hdGgucmFuZG9tKCkgPCBwYXJhbXNbMV0pIHtcclxuICAgICAgICB0ZW1wX2dyaWRbaV1bal0gPSBcIklcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVjb3ZlcnkoZ3JpZCwgdGVtcF9ncmlkLGksIGosIHBhcmFtcykge1xyXG4gICAgaWYoZ3JpZFtpXVtqXSA9PSBcIklcIikge1xyXG4gICAgICBpZihNYXRoLnJhbmRvbSgpIDwgcGFyYW1zWzJdKSB7XHJcbiAgICAgICAgdGVtcF9ncmlkW2ldW2pdID0gXCJSXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJ1bl9zaW11bGF0aW9uKGdyaWQsIHBhcmFtcywgZ2VuZXJhdGlvbnMpIHtcclxuICAgIGxldCBzaW11bGF0aW9uID0gW107XHJcbiAgICBsZXQgc3RlcHMgPSBbXVxyXG5cclxuICAgIHN0ZXBzLnB1c2goXy5jbG9uZURlZXAoZ3JpZCkpXHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGdlbmVyYXRpb25zIC0gMTsgaSsrKSB7XHJcbiAgICAgIHNpbXVsYXRpb24ucHVzaCh0aGlzLnJ1bl9pdGVyYXRpb24oZ3JpZCwgcGFyYW1zKSlcclxuICAgICAgc3RlcHMucHVzaChfLmNsb25lRGVlcChncmlkKSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdyaWRzLnB1c2goc3RlcHMpXHJcbiAgICB0aGlzLnNpbXVsYXRpb25fZGF0YS5wdXNoKHNpbXVsYXRpb24pXHJcbiAgfVxyXG5cclxuICBydW5faXRlcmF0aW9uKGdyaWQsIHBhcmFtcykge1xyXG4gICAgLy8gRHVwbGljYXRlIHRvIHRlbXBfZ3JpZFxyXG4gICAgbGV0IHRlbXBfZ3JpZCA9IF8uY2xvbmVEZWVwKGdyaWQpO1xyXG5cclxuICAgIC8vIFNpbXVsYXRpb25cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmdyaWRfbGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZF9sZW5ndGg7IGorKykge1xyXG4gICAgICAgIC8vIEluZmVjdCBzdXJyb3VuZGluZyBob3N0c1xyXG4gICAgICAgIGlmKGdyaWRbaV1bal0gPT0gXCJJXCIpIHtcclxuICAgICAgICAgIHRoaXMuZXhwb3NlX25laWdoYm91cnMoZ3JpZCwgdGVtcF9ncmlkLGksIGosIHBhcmFtcyk7XHJcbiAgICAgICAgICB0aGlzLnJlY292ZXJ5KGdyaWQsIHRlbXBfZ3JpZCxpLCBqLCBwYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSBncmlkIHdpdGggdmFsdWVzIGZyb20gdGVtcF9ncmlkXHJcbiAgICBncmlkLmxlbmd0aCA9IDA7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkX2xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB0ZW1wID0gW11cclxuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZF9sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHRlbXBbal0gPSB0ZW1wX2dyaWRbaV1bal1cclxuICAgICAgfVxyXG4gICAgICBncmlkLnB1c2godGVtcClcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVjID0gXy5maWx0ZXIoXy5mbGF0dGVuKGdyaWQpLCBmdW5jdGlvbihvKSB7IGlmIChvID09IFwiUlwiKSByZXR1cm4gbyB9KS5sZW5ndGg7XHJcbiAgICBsZXQgaW5mID0gXy5maWx0ZXIoXy5mbGF0dGVuKGdyaWQpLCBmdW5jdGlvbihvKSB7IGlmIChvID09IFwiSVwiKSByZXR1cm4gbyB9KS5sZW5ndGg7XHJcbiAgICBsZXQgc3VzID0gXy5maWx0ZXIoXy5mbGF0dGVuKGdyaWQpLCBmdW5jdGlvbihvKSB7IGlmIChvID09IFwiU1wiKSByZXR1cm4gbyB9KS5sZW5ndGg7XHJcblxyXG4gICAgcmV0dXJuIHtyZWM6IHJlYywgaW5mOiBpbmYsIHN1czogc3VzfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"ion-rangeslider/css/ion.rangeSlider.css\"></require><require from=\"ion-rangeslider/css/ion.rangeSlider.skinHTML5.css\"></require><require from=\"./app.css\"></require><require from=\"./navbar\"></require><nav-bar router.bind=\"router\"></nav-bar><loading-indicator loading.bind=\"router.isNavigating\"></loading-indicator><div class=\"container\" style=\"width:100%\"><router-view></router-view></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "body { padding-top: 70px; }\n\nsection {\n  margin: 0 20px;\n}\n\na:focus {\n  outline: none;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n.no-selection {\n  margin: 20px;\n}\n\n.contact-list {\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.panel {\n  margin: 20px;\n}\n\n.button-bar {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #ddd;\n  background: white;\n}\n\n.button-bar > button {\n  float: right;\n  margin: 20px;\n}\n\nli.list-group-item {\n  list-style: none;\n}\n\nli.list-group-item > a {\n  text-decoration: none;\n}\n\nli.list-group-item.active > a {\n  color: white;\n}\n"; });
define('text!simulation/chart.css', ['module'], function(module) { module.exports = ".background path {\n  fill: none;\n  stroke: #ddd;\n  shape-rendering: crispEdges;\n}\n\n.foreground path {\n  fill: none;\n  stroke: steelblue;\n}\n\n.brush .extent {\n  fill-opacity: .3;\n  stroke: #fff;\n  shape-rendering: crispEdges;\n}\n\n.axis line,\n.axis path {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\nrect.grass {\n  fill: #36be3c;\n}\n\nrect.grass_fresh {\n  fill: #217c25;\n}\n\nrect.dirt{\n  fill: #d2c254;\n}\n\nrect.sheep {\n  fill: #f2f2f2;\n}\n\nrect.wolf{\n  fill: #554934;\n}\n\n.axis text {\n  text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff;\n}\n\n.line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 1.5px;\n  shape-rendering: crispEdges;\n}\n\n.focusline {\n  fill: none;\n  stroke: black;\n  stroke-width: 1px;\n  shape-rendering: crispEdges;\n}\n\n.line.highlight {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 2px;\n  shape-rendering: crispEdges;\n}\n\n.line.background {\n  fill: none;\n  stroke: #ddd;\n  stroke-width: 2px;\n  opacity: 0.5;\n  shape-rendering: crispEdges;\n}\n\n.focus_element {\n  fill: steelblue;\n  opacity: 0.1;\n}\n\nrect.bar {\n  fill: steelblue;\n  outline-width: thin;\n  outline-style: solid;\n  outline-color: #c7c7c7;\n}\n"; });
define('text!navbar.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle Navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-home\"></i> <span>${router.title}</span></a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li class=\"loader\" if.bind=\"router.isNavigating\"><i class=\"fa fa-spinner fa-spin fa-2x\"></i></li></ul></div></nav></template>"; });
define('text!empty/no-selection.html', ['module'], function(module) { module.exports = "<template><div class=\"no-selection text-center\"><h3>${message}</h3><h2>Enjoy!</h2></div></template>"; });
define('text!simulation/playground.html', ['module'], function(module) { module.exports = "<template><require from=\"./chart.css\"></require><require from=\"../charts/line-chart-live\"></require><require from=\"../charts/spatial-grid\"></require><h2>Simulation of Sheep and Wolf Populations</h2><span>work in progress</span><hr><div class=\"row\"><div class=\"col-md-6\"><button class=\"btn btn-default btn-block\" click.delegate=\"switch()\">Toggle Parameter Selection</button><div aubs-collapse=\"collapsed.bind: collapsed_input\"><div style=\"margin-left:15px;margin-right:15px\"><label>Grid Length</label><div class=\"row\"><input type=\"text\" id=\"grid_length\"></div><label>Maximum Mating Distance</label><div class=\"row\"><input type=\"text\" id=\"mating\"></div><br></div></div><div aubs-collapse=\"collapsed.bind: collapsed_grid\"></div><br><div aubs-collapse=\"collapsed.bind: collapsed_out\"></div><button class=\"btn btn-primary btn-block\" click.delegate=\"initializeWorld()\">Initialize Simulation</button> <button disabled.bind=\"simulation_initialized\" class=\"btn btn-success btn-block\" click.delegate=\"compute()\">Run Simulation</button> <button class=\"btn btn-warning btn-block\" click.delegate=\"stopSimulation()\">Stop Simulation</button></div><div class=\"col-md-6\"><div class=\"row\"><spatial-grid data.bind=\"data_grid\" redraw.bind=\"redraw\"></spatial-grid></div></div></div><div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map