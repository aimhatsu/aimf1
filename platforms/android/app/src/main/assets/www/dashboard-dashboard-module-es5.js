(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
    /***/
    "NcNw":
    /*!*********************************************!*\
      !*** ./src/app/dashboard/dashboard.page.ts ***!
      \*********************************************/

    /*! exports provided: DashboardPage */

    /***/
    function NcNw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
        return DashboardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/storage/storage.service */
      "E2f4");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/api/api.service */
      "oZWX");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! chart.js */
      "MO+k");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _components_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components/user-bar/user-bar.component */
      "Rw8l");
      /* harmony import */


      var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-circle-progress */
      "K1R0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["slider"];

      function DashboardPage_h4_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h4", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, " PACIENTES");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", ctx_r0.geralpoint, " MEUS ");
        }
      }

      function DashboardPage_div_123_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h2", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Fim das pend\xEAncias de hoje!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return {
          "width": "33%"
        };
      };

      var _c2 = function _c2() {
        return {
          "width": "50%"
        };
      };

      var _c3 = function _c3() {
        return {
          "width": "25%"
        };
      };

      var _c4 = function _c4() {
        return {
          "width": "75%"
        };
      };

      var _c5 = function _c5() {
        return {
          "width": "5%"
        };
      };

      var _c6 = function _c6() {
        return {
          "width": "20%"
        };
      };

      var _c7 = function _c7() {
        return {
          "width": "35%"
        };
      };

      var _c8 = function _c8() {
        return {
          "width": "30%"
        };
      };

      var DashboardPage = /*#__PURE__*/function () {
        // Slides option End 
        function DashboardPage(api, storage, navCtrl) {
          _classCallCheck(this, DashboardPage);

          this.api = api;
          this.storage = storage;
          this.navCtrl = navCtrl;
          this.slideLength = [];
          this.slideCount = 0;
          this.months = ['Janeiro', 'Fevereiro', 'Mar??o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']; // Slides option start

          this.slideOpts = {
            slidesPerView: 1,
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            },
            on: {
              beforeInit: function beforeInit() {
                var swiper = this;
                swiper.classNames.push("".concat(swiper.params.containerModifierClass, "coverflow"));
                swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
              },
              setTranslate: function setTranslate() {
                var swiper = this;
                var swiperWidth = swiper.width,
                    swiperHeight = swiper.height,
                    slides = swiper.slides,
                    $wrapperEl = swiper.$wrapperEl,
                    slidesSizesGrid = swiper.slidesSizesGrid,
                    $ = swiper.$;
                var params = swiper.params.coverflowEffect;
                var isHorizontal = swiper.isHorizontal();
                var transform$$1 = swiper.translate;
                var center = isHorizontal ? -transform$$1 + swiperWidth / 2 : -transform$$1 + swiperHeight / 2;
                var rotate = isHorizontal ? params.rotate : -params.rotate;
                var translate = params.depth; // Each slide offset from center

                for (var i = 0, length = slides.length; i < length; i += 1) {
                  var $slideEl = slides.eq(i);
                  var slideSize = slidesSizesGrid[i];
                  var slideOffset = $slideEl[0].swiperSlideOffset;
                  var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
                  var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                  var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

                  var translateZ = -translate * Math.abs(offsetMultiplier);
                  var translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
                  var translateX = isHorizontal ? params.stretch * offsetMultiplier : 0; // Fix for ultra small values

                  if (Math.abs(translateX) < 0.001) translateX = 0;
                  if (Math.abs(translateY) < 0.001) translateY = 0;
                  if (Math.abs(translateZ) < 0.001) translateZ = 0;
                  if (Math.abs(rotateY) < 0.001) rotateY = 0;
                  if (Math.abs(rotateX) < 0.001) rotateX = 0;
                  var slideTransform = "translate3d(".concat(translateX, "px,").concat(translateY, "px,").concat(translateZ, "px)  rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)");
                  $slideEl.transform(slideTransform);
                  $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

                  if (params.slideShadows) {
                    // Set shadows
                    var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                    if ($shadowBeforeEl.length === 0) {
                      $shadowBeforeEl = swiper.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
                      $slideEl.append($shadowBeforeEl);
                    }

                    if ($shadowAfterEl.length === 0) {
                      $shadowAfterEl = swiper.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
                      $slideEl.append($shadowAfterEl);
                    }

                    if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                    if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                  }
                } // Set correct perspective for IE10


                if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
                  var ws = $wrapperEl[0].style;
                  ws.perspectiveOrigin = "".concat(center, "px 50%");
                }
              },
              setTransition: function setTransition(duration) {
                var swiper = this;
                swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
              }
            }
          };
          this.date = new Date();
          this.year = this.date.getFullYear();
          this.monthIndex = this.date.getMonth();
          this.loadUserData();
          this.loadTotals();
          this.loadSlides();
          this.loadRiskFactor();
          this.loadAudience();
        }

        _createClass(DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.initMap();
          } // initMap() {
          //   this.map = new google.maps.Map(document.getElementById("map"), {
          //     zoom: 13,
          //     center: { lat: 37.775, lng: -122.434 }
          //   });
          //   this.heatmap = new google.maps.visualization.HeatmapLayer({
          //     data: this.getPoints(),
          //     map: this.map
          //   });
          // }
          // getPoints() {
          //   return [
          //     new google.maps.LatLng(37.782551, -122.445368),
          //     new google.maps.LatLng(37.782745, -122.444586),
          //     new google.maps.LatLng(37.782842, -122.443688),
          //     new google.maps.LatLng(37.782919, -122.442815),
          //     new google.maps.LatLng(37.782992, -122.442112),
          //     new google.maps.LatLng(37.7831, -122.441461),
          //     new google.maps.LatLng(37.783206, -122.440829),
          //     new google.maps.LatLng(37.783273, -122.440324),
          //     new google.maps.LatLng(37.783316, -122.440023),
          //     new google.maps.LatLng(37.783357, -122.439794),
          //   ]
          // }

        }, {
          key: "slidesDidLoad",
          value: function slidesDidLoad(slides) {
            slides.startAutoplay();
          }
        }, {
          key: "slideChanged",
          value: function slideChanged(slides) {}
        }, {
          key: "openAtendimento",
          value: function openAtendimento() {
            this.navCtrl.navigateForward('atendimento');
          }
        }, {
          key: "openProntuario",
          value: function openProntuario(category) {
            var navigationExtras = {
              queryParams: {
                patientId: this.slide_Uid,
                category: category,
                year: this.year,
                month: this.monthIndex
              }
            };
            this.navCtrl.navigateForward('prontuario', navigationExtras);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.loadHistoricoGeral();
          }
        }, {
          key: "nextYear",
          value: function nextYear() {
            this.year = this.year + 1;
            this.loadHistoricoGeral();
            this.loadRiskFactor();
          }
        }, {
          key: "prevYear",
          value: function prevYear() {
            this.year = this.year - 1;
            this.loadHistoricoGeral();
            this.loadRiskFactor();
          }
        }, {
          key: "loadHistoricoGeral",
          value: function loadHistoricoGeral() {
            var _this = this;

            //get /totalpati
            this.api.get("grafhista/".concat(this.year)).then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("grafhista/{year} > ", data);
                  var meses = [];
                  var corpo = [];
                  var mente = [];
                  var emocoes = [];
                  data.forEach(function (el) {
                    meses.push(_this.months[el._id - 1]);
                    corpo.push(el.corpo);
                    mente.push(el.mente);
                    emocoes.push(el.emocoes);
                  });
                  setTimeout(function () {
                    var dataset = {
                      labels: meses,
                      datasets: [{
                        label: 'corpo',
                        fill: false,
                        data: corpo,
                        borderWidth: 2,
                        borderColor: '#2694a3',
                        backgroundColor: '#2694a3'
                      }, {
                        label: 'mente',
                        fill: false,
                        data: mente,
                        borderWidth: 2,
                        borderColor: '#ffce00',
                        backgroundColor: '#ffce00'
                      }, {
                        label: 'emo????es',
                        fill: false,
                        data: emocoes,
                        borderWidth: 2,
                        borderColor: '#F1B4AE',
                        backgroundColor: '#F1B4AE'
                      }]
                    };

                    _this.renderChartHistoricoGeral(dataset);
                  }, 150);
                }, function (err) {
                  console.log(err);

                  _this.api.proccessError(err);
                });
              }
            });
          }
        }, {
          key: "loadAudience",
          value: function loadAudience() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.api.get('audiency/' + this.year).then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Audience Year > ", data);
                          }, function (err) {
                            console.log("Audience API error -> ", err);

                            _this2.api.proccessError(err);
                          });
                        }
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "audienceMonthly",
          value: function audienceMonthly() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.api.get('audiency/' + this.year + '/' + this.months[this.monthIndex]).then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Audience monthly > ", data);
                          }, function (err) {
                            console.log("Audience API error -> ", err);

                            _this3.api.proccessError(err);
                          });
                        }
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "audienceChart",
          value: function audienceChart(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var ctx, myLineChart;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      ctx = document.getElementById('audienceChart');
                      myLineChart = new chart_js__WEBPACK_IMPORTED_MODULE_5___default.a(ctx, {
                        type: 'line',
                        data: data,
                        options: {
                          scales: {
                            yAxes: [{
                              ticks: {
                                beginAtZero: true
                              }
                            }]
                          }
                        }
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }, {
          key: "radarChart",
          value: function radarChart(corpo, emot, mente) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var ctx, radarOptions, radarChart;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      ctx = document.getElementById('radarChart');
                      radarOptions = {
                        legend: {
                          position: 'bottom',
                          display: false
                        }
                      };
                      radarChart = new chart_js__WEBPACK_IMPORTED_MODULE_5___default.a(ctx, {
                        type: 'radar',
                        data: {
                          labels: ['Corpo', 'Mente', 'Emo????es'],
                          datasets: [{
                            backgroundColor: "#F1B4AE",
                            borderColor: "#2694a3",
                            pointBackgroundColor: "#2694a3",
                            data: [corpo, emot, mente]
                          }]
                        },
                        options: radarOptions
                      });

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          }
        }, {
          key: "renderChartHistoricoGeral",
          value: function renderChartHistoricoGeral(data) {
            var ctx = document.getElementById('myChart');
            var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_5___default.a(ctx, {
              type: 'line',
              data: data,
              options: {
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
                }
              }
            });
          }
        }, {
          key: "loadUserData",
          value: function loadUserData() {
            var _this4 = this;

            this.storage.get('mia_user_data').then(function (user) {
              _this4.userData = user;
            });
          }
        }, {
          key: "nextSlide",
          value: function nextSlide() {
            if (this.slideCount == 0 || this.slideCount > 0) {
              this.slideCount++;
              this.loadSlides();
            }
          }
        }, {
          key: "prevSlide",
          value: function prevSlide() {
            if (this.slideCount < 0) {} else {
              if (this.slideCount != 0) {
                this.slideCount--;
                this.loadSlides();
              }
            }
          }
        }, {
          key: "loadSlides",
          value: function loadSlides() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.api.get('flowscientist/' + this.slideCount).then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Scientist > ", data);
                            _this5.slideLength = data;

                            if (_this5.slideLength.length != 0) {
                              _this5.slideDate = data[0].date;
                              _this5.slide_Uid = data[0]._id;
                              _this5.slidePatology = data[0].patology;

                              _this5.radarChart(data[0].corpo, data[0].emocoes, data[0].mente);
                            } else {
                              _this5.radarChart(1, 1, 1);
                            }
                          }, function (err) {
                            console.log("Scientist API error -> ", err);

                            _this5.api.proccessError(err);
                          });
                        }
                      });

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "get_corpo",
          value: function get_corpo() {
            var _this6 = this;

            this.api.get('prontuario/today/corpo').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("Corpo > ", data);
                }, function (err) {
                  console.log("Corpo API error -> ", err);

                  _this6.api.proccessError(err);
                });
              }
            });
          }
        }, {
          key: "get_mente",
          value: function get_mente() {
            var _this7 = this;

            this.api.get('prontuario/today/mente').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("Mente > ", data);
                }, function (err) {
                  console.log("Mente API error -> ", err);

                  _this7.api.proccessError(err);
                });
              }
            });
          }
        }, {
          key: "get_emot",
          value: function get_emot() {
            var _this8 = this;

            this.api.get('prontuario/today/emocoes').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("Emot > ", data);
                }, function (err) {
                  console.log("Emot API error -> ", err);

                  _this8.api.proccessError(err);
                });
              }
            });
          }
        }, {
          key: "loadTotals",
          value: function loadTotals() {
            var _this9 = this;

            //get /totalpati
            this.api.get('totalpati').then(function (res) {
              console.log("Total pati API -> ", res);

              if (res) {
                res.subscribe(function (data) {
                  console.log("totalpati > ", data);
                  _this9.totalpati = data && data[0] && data[0].totalpatients ? data[0].totalpatients : '0';
                }, function (err) {
                  console.log("Total pati API error -> ", err);

                  _this9.api.proccessError(err);
                });
              }
            }); //get /geralpoint

            this.api.get('geralpoint').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("geralpoint > ", data);
                  _this9.geralpoint = data && data[0] && data[0].mediafinal ? data[0].mediafinal.$numberDecimal : '0';
                }, function (err) {
                  console.log(err);

                  _this9.api.proccessError(err);
                });
              }
            }); //get /globalpoint

            this.api.get('globalpoint').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("globalpoint > ", data);
                  _this9.globalpoint = data && data[0] && data[0].mediafinal ? data[0].mediafinal : '0';
                  _this9.globalpoint = _this9.globalpoint.toFixed(2);
                }, function (err) {
                  console.log(err);

                  _this9.api.proccessError(err);
                });
              }
            }); // bios

            this.api.get('bios').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("Bios > ", data);
                }, function (err) {
                  console.log(err);

                  _this9.api.proccessError(err);
                });
              }
            }); // totalglobal

            this.api.get('totalglobal').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("total global > ", data);
                }, function (err) {
                  console.log(err);

                  _this9.api.proccessError(err);
                });
              }
            }); //get /instaveis

            this.api.get('instavel').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("instaveis > ", data);
                  _this9.instaveis = data && data[0] && data[0].PacientesInstaveis ? data[0].PacientesInstaveis : '0';
                }, function (err) {
                  console.log(err);

                  _this9.api.proccessError(err);
                });
              }
            }); //get /estaveis

            this.api.get('estavel').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("estaveis > ", data);
                  _this9.estaveis = data && data[0] && data[0].PacientesEstaveis ? data[0].PacientesEstaveis : '0';
                }, function (err) {
                  console.log(err);

                  _this9.api.proccessError(err);
                });
              }
            }); //get /inativos

            this.api.get('inativo').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("inativos > ", data);
                  _this9.inativos = data && data[0] && data[0].PacientesEstaveis ? data[0].PacientesEstaveis : '0';
                }, function (err) {
                  console.log(err);

                  _this9.api.proccessError(err);
                });
              }
            });
          }
        }, {
          key: "loadRiskFactor",
          value: function loadRiskFactor() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this10 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.api.get('grafrisk/food/' + this.year).then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Risk factor food > ", data);
                          }, function (err) {
                            console.log("Risk factor food API error -> ", err);

                            _this10.api.proccessError(err);
                          });
                        }
                      });
                      this.api.get('grafrisk/activie/' + this.year).then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Risk factor activie > ", data);
                          }, function (err) {
                            console.log("Risk factor activie API error -> ", err);

                            _this10.api.proccessError(err);
                          });
                        }
                      });
                      this.api.get('grafrisk/content/' + this.year).then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Risk factor content > ", data);
                          }, function (err) {
                            console.log("Risk factor content API error -> ", err);

                            _this10.api.proccessError(err);
                          });
                        }
                      });
                      this.api.get('grafrisk/treatm/' + this.year).then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Risk factor treatm > ", data);
                          }, function (err) {
                            console.log("Risk factor treatm API error -> ", err);

                            _this10.api.proccessError(err);
                          });
                        }
                      });

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "mensal_RiskFactor",
          value: function mensal_RiskFactor() {
            var _this11 = this;

            this.api.get('grafrisk/food/' + this.year + '/' + this.monthIndex).then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("Mensal RF food > ", data);
                }, function (err) {
                  console.log("Mensal RF food API error -> ", err);

                  _this11.api.proccessError(err);
                });
              }
            });
            this.api.get('grafrisk/activie/' + this.year + '/' + this.monthIndex).then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("Mensal RF activie > ", data);
                }, function (err) {
                  console.log("Mensal RF activie API error -> ", err);

                  _this11.api.proccessError(err);
                });
              }
            });
            this.api.get('grafrisk/content/' + this.year + '/' + this.monthIndex).then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("Mensal RF content > ", data);
                }, function (err) {
                  console.log("Mensal RF content API error -> ", err);

                  _this11.api.proccessError(err);
                });
              }
            });
            this.api.get('grafrisk/treatm/' + this.year + '/' + this.monthIndex).then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("Mensal RF treatm > ", data);
                }, function (err) {
                  console.log("Mensal RF treatm API error -> ", err);

                  _this11.api.proccessError(err);
                });
              }
            });
          }
        }]);

        return DashboardPage;
      }();

      DashboardPage.??fac = function DashboardPage_Factory(t) {
        return new (t || DashboardPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]));
      };

      DashboardPage.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: DashboardPage,
        selectors: [["app-dashboard"]],
        viewQuery: function DashboardPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.slider = _t.first);
          }
        },
        decls: 398,
        vars: 82,
        consts: [[1, "toolbar-bg"], [1, "ion-no-padding"], ["src", "../../assets/images/mia-wht.png", "width", "200", "alt", ""], ["slot", "end", 1, "ion-text-right"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [3, "click"], ["name", "md-funnel"], ["wrap-box", ""], [1, "sub-toolbar"], [1, "card-stats", 2, "margin-left", "0px"], ["size-md", "3", "size-sm", "3", "size-lg", "3", "size-xs", "3", 1, "ion-no-padding", 2, "padding-top", "16px"], ["color", "primary", 1, "ion-text-center"], [2, "color", "#9F9C9C !important", "font-size", "12px"], ["size-md", "2", "size-sm", "2", "size-lg", "2", "size-xs", "2", 1, "ion-no-padding", 2, "text-align", "center"], [3, "percent", "clockwise", "showTitle", "showSubtitle", "space", "radius", "outerStrokeWidth", "innerStrokeWidth", "outerStrokeColor", "titleColor", "innerStrokeColor", "animation", "animationDuration", "showUnits"], ["size-md", "2.5", "size-sm", "2.5", "size-lg", "2.5", "size-xs", "2.5", 1, "ion-no-padding"], ["style", "color: #2694A3", "class", "h4-stats", 4, "ngIf"], [1, "h4-stats", 2, "color", "#EF9C92"], [1, "card-stats", 2, "margin-right", "0px"], ["size", "3"], ["lines", "none", 2, "border-right", "1px solid #999999"], ["color", "secondary", 1, "ion-text-center"], ["name", "sad", 1, "icon-stats"], [1, "p-stats"], ["name", "phone-portrait", 1, "icon-stats"], ["name", "logo-rss", 1, "icon-stats"], ["lines", "none"], ["name", "happy", 1, "icon-stats"], ["size", "1"], [1, "arrow-circle"], ["src", "../../assets/images/back-arrow.png", 1, "arrow-img", 3, "click"], ["size", "10"], [3, "hidden"], ["no-padding", "", 3, "options", "ionSlidesDidLoad", "ionSlideDidChange"], ["slider", ""], [1, "slide-card"], ["src", "../../assets/images/person.png", 1, "slide-img"], ["size", "9"], [1, "h4-slide"], [1, "p-slide-title"], [1, "p-slide-subtitle"], ["size", "12", 2, "background", "#F78888 0% 0% no-repeat padding-box"], [1, "p-slide-bottom"], ["size", "12"], ["src", "../../assets/images/mind-icon.png", 1, "mind-img", 3, "click"], ["src", "../../assets/images/body-icon.png", 1, "body-img", 3, "click"], ["src", "../../assets/images/emot-icon.png", 1, "emot-img", 3, "click"], ["id", "radarChart", "width", "300", "height", "320", "responsive", "true", 2, "margin-top", "45px"], [2, "margin-top", "11%"], ["size", "6", 2, "padding", "0px"], ["expand", "block", "color", "secondary", 1, "slide-btn", 3, "click"], ["slot", "start", "name", "heart", 2, "color", "#00000042"], ["expand", "block", "color", "primary", 1, "slide-btn", 3, "click"], ["slot", "start", "name", "checkmark"], [4, "ngIf"], ["src", "../../assets/images/forward-arrow.png", 1, "arrow-img", 3, "click"], [1, "ion-no-padding", "ion-no-margin", "card-style"], [2, "padding-bottom", "0px"], ["color", "primary", 1, "ion-text-wrap"], [2, "color", "#3C3C3C"], ["slot", "start", "name", "ios-arrow-back", 3, "click"], [1, "ion-text-center"], ["size", "small", "shape", "round", "mode", "ios"], ["size", "small", "shape", "round", "mode", "ios", "fill", "outline"], ["slot", "end", "name", "ios-arrow-forward", 3, "click"], [2, "padding-left", "60%"], ["placeholder", "Select One", "value", "covid", "ok-text", "Okay", "cancel-text", "Dismiss"], ["value", "covid"], ["value", "hiv"], ["size", "1.3"], ["name", "pin", 1, "icon-stats"], ["name", "bug", 1, "icon-stats"], ["name", "people", 1, "icon-stats"], ["name", "person", 1, "icon-stats"], [2, "padding", "0"], [1, "card-style"], ["size", "small", "shape", "round", "mode", "ios", "fill", "outline", 3, "click"], ["id", "myChart", "responsive", "true"], ["size", "small", "shape", "round", "mode", "ios", 3, "click"], [1, "ion-align-items-center"], ["src", "../../assets/images/img2.jpeg", "alt", ""], ["size", "11"], [1, "bar"], [1, "bar-1", 3, "ngStyle"], [1, "bar-2", 3, "ngStyle"], [1, "bar-3", 3, "ngStyle"], ["src", "../../assets/images/img5.jpeg", "alt", ""], ["src", "../../assets/images/img1.jpeg", "alt", ""], ["src", "../../assets/images/img3.jpeg", "alt", ""], ["src", "../../assets/images/img4.jpeg", "alt", ""], ["id", "audienceChart", "responsive", "true"], [1, "h4-stats", 2, "color", "#2694A3"], [2, "text-align", "center", "margin-top", "100px"]],
        template: function DashboardPage_Template(rf, ctx) {
          if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "ion-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "ion-buttons", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "app-user-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "ion-fab", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "ion-fab-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_ion_fab_button_click_9_listener() {
              return ctx.openAtendimento();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "ion-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "ion-row", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "DASHBOARD");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Vis\xE3o geral de resultados");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "ion-slides");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "ion-slide");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "ion-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "ion-grid", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "ion-row", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "ion-col", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "ion-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Pacientes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "ion-col", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "circle-progress", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "ion-col", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](34, DashboardPage_h4_34_Template, 5, 1, "h4", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "ion-col", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](36, "circle-progress", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "ion-col", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "POPULA\xC7\xC3O ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, " GLOBAL");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "ion-slide");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "ion-col", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "ion-item", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "ion-label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](49, "ion-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "INST\xC1VEIS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "ion-col", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "ion-item", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "ion-label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](57, "ion-icon", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "INATIVOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "ion-col", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "ion-item", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "ion-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](65, "ion-icon", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, "BIOCONECTADOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "ion-col", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "ion-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](73, "ion-icon", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "EST\xC1VEIS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "ion-col", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_img_click_82_listener() {
              return ctx.prevSlide();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "ion-col", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "ion-slides", 33, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ionSlidesDidLoad", function DashboardPage_Template_ion_slides_ionSlidesDidLoad_85_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](86);

              return ctx.slidesDidLoad(_r1);
            })("ionSlideDidChange", function DashboardPage_Template_ion_slides_ionSlideDidChange_85_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](86);

              return ctx.slideChanged(_r1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "ion-slide");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "ion-card", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "ion-col", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](91, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "ion-col", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "h4", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](96, "slice");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "p", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, "Historic 360");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "ion-col", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "p", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "Paciente com:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "p", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](106);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "ion-col", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_img_click_109_listener() {
              return ctx.get_emot();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_img_click_110_listener() {
              return ctx.get_corpo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_img_click_111_listener() {
              return ctx.get_mente();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](112, "canvas", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "ion-row", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "ion-col", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "ion-button", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_ion_button_click_115_listener() {
              return ctx.openProntuario("body");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](116, "ion-icon", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](118, "PRONTUARIO");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "ion-col", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "ion-button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_ion_button_click_120_listener() {
              return ctx.nextSlide();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](121, "ion-icon", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](122, " OK ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](123, DashboardPage_div_123_Template, 3, 0, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "ion-col", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "img", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_img_click_126_listener() {
              return ctx.nextSlide();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "ion-card", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "ion-card-header", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "ion-label", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](136, "CONTROLE EPID\xCAMIOL\xD3GICO");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](138, "Indicadores e mapa de calor");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "p", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](140, "DE 10/03/2020 \xE1 20/03/2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "ion-icon", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_ion_icon_click_143_listener() {
              return ctx.prevYear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "ion-label", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](146, "Selecione o ano");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](149);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "ion-button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](151, "Mensal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "ion-button", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](153, "Anual");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "ion-icon", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_ion_icon_click_154_listener() {
              return ctx.nextYear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "ion-label", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "p", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "Selecione a patologia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "ion-select", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "ion-select-option", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](163, "COVID 19");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "ion-select-option", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](165, "HIV");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "ion-col", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "ion-label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](170, "ion-icon", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](172, "2000");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](174, "SUSPEITOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "ion-col", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](176, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "ion-label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](178, "ion-icon", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](179, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](180, "253");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](182, "NOTIFICADOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "ion-col", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "ion-label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](186, "ion-icon", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](188, "15");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](190, "DIAGNOSTICADOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "ion-col", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "ion-label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](194, "ion-icon", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](196, "180");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](198, "RECUPERADOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "ion-col", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "ion-label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](202, "ion-icon", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](204, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](206, "\xD3BITOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "ion-col", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "ion-label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](210, "ion-icon", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](211, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](212, "2,8");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](214, "CONT\xC1GIO");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](215, "ion-col", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "ion-label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](218, "ion-icon", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](219, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](220, "42%");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](222, "I.I.S.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "ion-col", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "ion-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](226, "ion-icon", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](228, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](230, "LEITOS DE UTI");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](231, "ion-col", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "ion-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](234, "ion-icon", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, "60");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](238, "ENFERMARIA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](239, "ion-card-content", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "ion-card", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](241, "ion-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](243, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](244, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](246, "ion-label", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](247, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](249, "HIST\xD3RICO GERAL");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](251, "Linha do tempo de evolu\xE7\xE3o dos meus pacientes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](252, "p", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](253, "DE 10/03/2020 \xE1 20/03/2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](254, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "ion-icon", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_ion_icon_click_256_listener() {
              return ctx.prevYear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](257, "ion-label", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](258, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](259, "Selecione o ano");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](261, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](262);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "ion-button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](264, "Mensal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](265, "ion-button", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_ion_button_click_265_listener() {
              return ctx.loadHistoricoGeral();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](266, "Anual ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](267, "ion-icon", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_ion_icon_click_267_listener() {
              return ctx.nextYear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](268, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "ion-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](270, "canvas", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](271, "ion-card", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](272, "ion-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](273, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](274, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](276, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "ion-label", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](278, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](279, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](280, "FATORES DE RISCO");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](282, "Fatores que impactam na qualidade de vida dos meus pacientes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](283, "p", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](284, "De 10/03/2020 \xE1 20/03/2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](285, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](286, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](287, "ion-icon", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_ion_icon_click_287_listener() {
              return ctx.prevYear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](288, "ion-label", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](289, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](290, "Selecione o m\xEAs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](291, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](292, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](293);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](294, "ion-button", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_ion_button_click_294_listener() {
              return ctx.mensal_RiskFactor();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](295, "Mensal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](296, "ion-button", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_ion_button_click_296_listener() {
              return ctx.loadRiskFactor();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](297, "Anual ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](298, "ion-icon", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_ion_icon_click_298_listener() {
              return ctx.nextYear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](299, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](300, "ion-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](301, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](302, "ion-row", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](303, "ion-col", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](304, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](305, "ion-avatar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](306, "img", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](307, "ion-col", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](309, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](310, "33");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](311, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](312, "33");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](313, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](314, "33");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](315, "ion-row", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](316, "ion-col", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](317, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](318, "ion-avatar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](319, "img", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](320, "ion-col", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](321, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](322, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](323, "50");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](324, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](325, "25");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](326, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](327, "25");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](328, "ion-row", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](329, "ion-col", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](330, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](331, "ion-avatar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](332, "img", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](333, "ion-col", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](334, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](335, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](336, "75");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](337, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](338, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](339, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](340, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](341, "ion-row", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](342, "ion-col", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](343, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](344, "ion-avatar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](345, "img", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](346, "ion-col", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](347, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](348, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](349, "35");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](350, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](351, "35");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](352, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](353, "30");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](354, "ion-row", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](355, "ion-col", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](356, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](357, "ion-avatar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](358, "img", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](359, "ion-col", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](360, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](361, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](362, "33");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](363, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](364, "33");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](365, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](366, "33");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](367, "ion-card", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](368, "ion-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](369, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](370, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](371, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](372, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](373, "ion-label", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](374, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](375, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](376, "AUDI\xCANCIA DOS MEUS PACIENTES");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](377, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](378, "Audi\xEAncia segmentada por g\xEAnero");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](379, "p", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](380, "DE 10/03/2020 \xE1 20/03/2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](381, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](382, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](383, "ion-icon", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_ion_icon_click_383_listener() {
              return ctx.prevYear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](384, "ion-label", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](385, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](386, "Selecione o ano");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](387, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](388, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](389);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](390, "ion-button", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_ion_button_click_390_listener() {
              return ctx.audienceMonthly();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](391, "Mensal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](392, "ion-button", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_ion_button_click_392_listener() {
              return ctx.loadAudience();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](393, "Anual ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](394, "ion-icon", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPage_Template_ion_icon_click_394_listener() {
              return ctx.nextYear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](395, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](396, "ion-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](397, "canvas", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("2,108", ctx.totalpati, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("percent", ctx.geralpoint);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("clockwise", false)("showTitle", true)("showSubtitle", false)("space", -10)("radius", 28)("outerStrokeWidth", 10)("innerStrokeWidth", 10)("outerStrokeColor", "#2694A3")("titleColor", "#2694A3")("innerStrokeColor", "#e7e8ea")("animation", true)("animationDuration", 300)("showUnits", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.geralpoint);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("percent", ctx.globalpoint);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("clockwise", false)("showTitle", true)("showSubtitle", false)("space", -10)("radius", 28)("outerStrokeWidth", 10)("innerStrokeWidth", 10)("outerStrokeColor", "#EF9C92")("titleColor", "#EF9C92")("innerStrokeColor", "#e7e8ea")("animation", true)("animationDuration", 300)("showUnits", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("54 ", ctx.instaveis, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("321 ", ctx.inativos, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.bioconectados || 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("1.200", ctx.estaveis, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", ctx.slideLength.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("options", ctx.slideOpts);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("ID: ", "*******************" + _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind3"](96, 63, ctx.slide_Uid, 20, 24), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Ultima analise as ", ctx.slideDate, ", hoje");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.slidePatology);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.slideLength.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", ctx.months[ctx.monthIndex], " ", ctx.year, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](113);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", ctx.months[ctx.monthIndex], " ", ctx.year, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", ctx.months[ctx.monthIndex], " ", ctx.year, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](67, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](68, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](69, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](70, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](71, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](72, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](73, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](74, _c5));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](75, _c6));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](76, _c7));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](77, _c7));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](78, _c8));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](79, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](80, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](81, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", ctx.months[ctx.monthIndex], " ", ctx.year, "");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _components_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_6__["UserBarComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["CircleProgressComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"]],
        styles: [".toolbar-bg[_ngcontent-%COMP%] {\n  background: transparent linear-gradient(264deg, #2694A3 0%, #01426A 100%) 0% 0% no-repeat padding-box !important;\n  box-shadow: 0px 3px 20px #00000059;\n  display: flex;\n  margin: 0px;\n}\n\n.bar[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  width: 90%;\n  height: 25px;\n  background: #F1B4AE;\n  display: flex;\n  color: black;\n  text-align: center;\n}\n\n.bar-1[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-bottom-left-radius: 15px;\n  height: 25px;\n  background: #2694a3;\n}\n\n.bar-2[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n  height: 25px;\n  background: #ffce00;\n}\n\nion-select[_ngcontent-%COMP%] {\n  font-weight: bold;\n  float: right;\n}\n\n#map[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.card-style[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.arrow-circle[_ngcontent-%COMP%] {\n  background-color: #009688;\n  border-radius: 25px;\n  width: 35px;\n  height: 35px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 250px;\n}\n\n.arrow-img[_ngcontent-%COMP%] {\n  padding-top: 7px;\n  width: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.card-stats[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.p-stats[_ngcontent-%COMP%] {\n  color: #9F9C9C !important;\n  font-size: 10px;\n}\n\n.h4-stats[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-align: center;\n  margin-top: 30px;\n}\n\n.icon-stats[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.slide-card[_ngcontent-%COMP%] {\n  width: 310px;\n  height: 575px;\n  border-radius: 10px;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 5px 5px 55px #505C6229;\n}\n\n.slide-card[_ngcontent-%COMP%]   .mind-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 292px;\n  left: 240px;\n}\n\n.slide-card[_ngcontent-%COMP%]   .emot-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 292px;\n  right: 240px;\n}\n\n.slide-card[_ngcontent-%COMP%]   .body-img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 125px;\n}\n\n.slide-img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 40px;\n}\n\n.h4-slide[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: left;\n  margin-top: 12px;\n  color: #238E9E;\n}\n\n.p-slide-title[_ngcontent-%COMP%] {\n  color: #3C3C3C;\n  text-align: left;\n}\n\n.p-slide-subtitle[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #00000059;\n}\n\n.p-slide-bottom[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #01436D;\n  font-weight: bold;\n}\n\n.slide-btn[_ngcontent-%COMP%] {\n  --border-radius: 10px;\n  font-weight: normal;\n  margin: 5px 0px 0px 0px;\n}\n\n.slide-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #3C3C3C !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnSEFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ1I7O0FBRUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQVI7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFEUjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRko7O0FBR0k7RUFDSSx5QkFBQTtBQURSIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci1iZ3tcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjY0ZGVnLCAjMjY5NEEzIDAlLCAjMDE0MjZBIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMjBweCAjMDAwMDAwNTk7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5iYXJ7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjFCNEFFO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhci0xe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjY5NGEzO1xufVxuXG4uYmFyLTJ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmY2UwMDtcbn1cblxuaW9uLXNlbGVjdHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbiNtYXB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmNhcmQtc3R5bGV7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmFycm93LWNpcmNsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyNTBweDtcbn1cblxuLmFycm93LWltZ3tcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcmQtc3RhdHN7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnAtc3RhdHN7XG4gICAgY29sb3I6ICM5RjlDOUMgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5oNC1zdGF0c3tcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5pY29uLXN0YXRze1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnNsaWRlLWNhcmR7XG4gICAgd2lkdGg6IDMxMHB4O1xuICAgIGhlaWdodDogNTc1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDU1cHggIzUwNUM2MjI5O1xuXG4gICAgLm1pbmQtaW1ne1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMjkycHg7XG4gICAgICAgIGxlZnQ6IDI0MHB4O1xuICAgIH1cblxuICAgIC5lbW90LWltZ3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDI5MnB4O1xuICAgICAgICByaWdodDogMjQwcHg7XG4gICAgfVxuXG4gICAgLmJvZHktaW1ne1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDEyNXB4O1xuICAgIH1cbn1cblxuLnNsaWRlLWltZ3tcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbn1cblxuLmg0LXNsaWRle1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgY29sb3I6ICMyMzhFOUU7XG59XG5cbi5wLXNsaWRlLXRpdGxle1xuICAgIGNvbG9yOiAjM0MzQzNDO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5wLXNsaWRlLXN1YnRpdGxle1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMwMDAwMDA1OTtcbn1cblxuLnAtc2xpZGUtYm90dG9te1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzAxNDM2RDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNsaWRlLWJ0bntcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcbiAgICBwe1xuICAgICAgICBjb2xvcjogIzNDM0MzQyAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](DashboardPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.page.html',
            styleUrls: ['./dashboard.page.scss']
          }]
        }], function () {
          return [{
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
          }];
        }, {
          slider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['slider']
          }]
        });
      })();
      /***/

    },

    /***/
    "TDBs":
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.module.ts ***!
      \***********************************************/

    /*! exports provided: DashboardPageModule */

    /***/
    function TDBs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
        return DashboardPageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard.page */
      "NcNw");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components/components.module */
      "j1ZV");
      /* harmony import */


      var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-circle-progress */
      "K1R0");

      var routes = [{
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_5__["DashboardPage"]
      }];

      var DashboardPageModule = function DashboardPageModule() {
        _classCallCheck(this, DashboardPageModule);
      };

      DashboardPageModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: DashboardPageModule
      });
      DashboardPageModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function DashboardPageModule_Factory(t) {
          return new (t || DashboardPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"].forRoot({
          // set defaults here
          radius: 35,
          outerStrokeWidth: 10,
          innerStrokeWidth: 10,
          outerStrokeColor: "#2694A3",
          innerStrokeColor: "#2694A3",
          animationDuration: 300
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DashboardPageModule, {
          declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_5__["DashboardPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"].forRoot({
              // set defaults here
              radius: 35,
              outerStrokeWidth: 10,
              innerStrokeWidth: 10,
              outerStrokeColor: "#2694A3",
              innerStrokeColor: "#2694A3",
              animationDuration: 300
            })],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_5__["DashboardPage"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map