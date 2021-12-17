import { async } from "@angular/core/testing";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NavController } from "@ionic/angular";
import { NavigationExtras } from "@angular/router";
import { StorageService } from "../services/storage/storage.service";
import { ApiService } from "../services/api/api.service";
import { IonSlides } from "@ionic/angular";
import Chart from "chart.js";
import { GraphModel } from "../services/models/3dgraph";
import { stringify } from "querystring";
declare var plotly: any;
declare var google: any;

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  date: any;
  year: any;
  monthIndex: any;
  userData: any;
  slideDate: any;
  slide_Uid: any;
  slideLength: any = [];
  slideCount: any = 0;
  slidePatology: any;
  totalpati: any;
  geralpoint: any;
  globalpoint: any;
  estaveis: any;
  instaveis: any;
  bioconectados: any;
  inativos: any;
  chartID: any;
  // map: any;
  heatmap: any;
  showImage: boolean = false;
  months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  @ViewChild("slider") slider: IonSlides;
  // Slides option start
  slideOpts = {
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    on: {
      beforeInit() {
        const swiper = this;

        swiper.classNames.push(
          `${swiper.params.containerModifierClass}coverflow`
        );
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate() {
        const swiper = this;
        const {
          width: swiperWidth,
          height: swiperHeight,
          slides,
          $wrapperEl,
          slidesSizesGrid,
          $,
        } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform$$1 = swiper.translate;
        const center = isHorizontal
          ? -transform$$1 + swiperWidth / 2
          : -transform$$1 + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        // Each slide offset from center
        for (let i = 0, length = slides.length; i < length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideSize = slidesSizesGrid[i];
          const slideOffset = $slideEl[0].swiperSlideOffset;
          const offsetMultiplier =
            ((center - slideOffset - slideSize / 2) / slideSize) *
            params.modifier;

          let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
          // var rotateZ = 0
          let translateZ = -translate * Math.abs(offsetMultiplier);

          let translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
          let translateX = isHorizontal ? params.stretch * offsetMultiplier : 0;

          // Fix for ultra small values
          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;

          const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

          $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex =
            -Math.abs(Math.round(offsetMultiplier)) + 1;
          if (params.slideShadows) {
            // Set shadows
            let $shadowBeforeEl = isHorizontal
              ? $slideEl.find(".swiper-slide-shadow-left")
              : $slideEl.find(".swiper-slide-shadow-top");
            let $shadowAfterEl = isHorizontal
              ? $slideEl.find(".swiper-slide-shadow-right")
              : $slideEl.find(".swiper-slide-shadow-bottom");
            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = swiper.$(
                `<div class="swiper-slide-shadow-${
                  isHorizontal ? "left" : "top"
                }"></div>`
              );
              $slideEl.append($shadowBeforeEl);
            }
            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = swiper.$(
                `<div class="swiper-slide-shadow-${
                  isHorizontal ? "right" : "bottom"
                }"></div>`
              );
              $slideEl.append($shadowAfterEl);
            }
            if ($shadowBeforeEl.length)
              $shadowBeforeEl[0].style.opacity =
                offsetMultiplier > 0 ? offsetMultiplier : 0;
            if ($shadowAfterEl.length)
              $shadowAfterEl[0].style.opacity =
                -offsetMultiplier > 0 ? -offsetMultiplier : 0;
          }
        }

        // Set correct perspective for IE10
        if (
          swiper.support.pointerEvents ||
          swiper.support.prefixedPointerEvents
        ) {
          const ws = $wrapperEl[0].style;
          ws.perspectiveOrigin = `${center}px 50%`;
        }
      },
      setTransition(duration) {
        const swiper = this;
        swiper.slides
          .transition(duration)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(duration);
      },
    },
  };

  // Slides option End
  graph: GraphModel 
  pointX: any;
  pointY: any;
  xNumber:any;
  yNumber:any;
  zNumber:any;
  graphPoints: any;
  graphHoverPoint: any;
  constructor(
    public api: ApiService,
    public storage: StorageService,
    public navCtrl: NavController
  ) {
    this.date = new Date();
    this.year = this.date.getFullYear();
    this.monthIndex = this.date.getMonth();
    
    this.createChart();
    this.loadUserData();
    this.loadTotals();
    this.loadSlides();
    this.loadRiskFactor();
    this.loadAudience();
  
    
    
  }

  ngOnInit() {
    // this.initMap();
  }

  // initMap() {
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

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  slideChanged(slides: IonSlides) {}

  openAtendimento() {
    this.navCtrl.navigateForward("atendimento");
  }

  openProntuario(category) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        patientId: this.slide_Uid,
        category: category,
        year: this.year,
        month: this.monthIndex,
      },
    };
    this.navCtrl.navigateForward("prontuario", navigationExtras);
  }

  ionViewDidEnter() {
    this.loadHistoricoGeral();
    this.slider.lockSwipes(true);
  }

  nextYear() {
    this.year = this.year + 1;
    this.loadHistoricoGeral();
    this.loadRiskFactor();
  }

  prevYear() {
    this.year = this.year - 1;
    this.loadHistoricoGeral();
    this.loadRiskFactor();
  }

  loadHistoricoGeral() {
    //get /totalpati
    this.api.get(`grafhista/${this.year}`).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("grafhista/{year} > ", data);

            let meses = [];
            let corpo = [];
            let mente = [];
            let emocoes = [];

            data.forEach((el) => {
              meses.push(this.months[el._id - 1]);
              corpo.push(el.corpo);
              mente.push(el.mente);
              emocoes.push(el.emocoes);
            });

            setTimeout(() => {
              let dataset = {
                labels: meses,
                datasets: [
                  {
                    label: "corpo",
                    fill: false,
                    data: corpo,
                    borderWidth: 2,
                    borderColor: "#2694a3",
                    backgroundColor: "#2694a3",
                  },
                  {
                    label: "mente",
                    fill: false,
                    data: mente,
                    borderWidth: 2,
                    borderColor: "#ffce00",
                    backgroundColor: "#ffce00",
                  },
                  {
                    label: "emoções",
                    fill: false,
                    data: emocoes,
                    borderWidth: 2,
                    borderColor: "#F1B4AE",
                    backgroundColor: "#F1B4AE",
                  },
                ],
              };

              this.renderChartHistoricoGeral(dataset);
            }, 150);
          },
          (err) => {
            // console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  async loadAudience() {
    this.api.get("audiency/" + this.year).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("Audience Year > ", data);
          },
          (err) => {
            // console.log("Audience API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  async audienceMonthly() {
    this.api
      .get("audiency/" + this.year + "/" + this.months[this.monthIndex])
      .then((res: any) => {
        if (res) {
          res.subscribe(
            (data) => {
              // console.log("Audience monthly > ", data);
            },
            (err) => {
              // console.log("Audience API error -> ", err);
              this.api.proccessError(err);
            }
          );
        }
      });
  }

  async audienceChart(data) {
    var ctx = document.getElementById("audienceChart");
    var myLineChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  async radarChart(corpo, emot, mente) {
    var ctx = document.getElementById("radarChart");
    var radarOptions = {
      legend: {
        position: "bottom",
        display: false,
      },
    };
    var radarChart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["Corpo", "Mente", "Emoções"],
        datasets: [
          {
            backgroundColor: "#F1B4AE",
            borderColor: "#2694a3",
            pointBackgroundColor: "#2694a3",
            data: [corpo, emot, mente],
          },
        ],
      },
      options: radarOptions,
    });
  }

  createChart() {  

   let width = 900;
   let height = 500

   this.graph = {
    data: [
      {
        y: [
        ],
        x: [],
        z: [],
        text:["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],
        labels: ['Text A', 'Text B', 'Text C', 'Text D', 'Text E','Text A', 'Text B', 'Text C', 'Text D', 'Text E','Text A', 'Text B', 'Text C', 'Text D', 'Text E','Text A', 'Text B', 'Text C', 'Text D'],
        
        type: "scatter3d",
        mode: "markers+ text",
        hoverinfo: "text",
        hovermode:"x unified",
        line:{
          width: 12
        },
      
       // hovermode: "x unified",
        
        showlegend: false,

        //text: ['Text A', 'Text B', 'Text C', 'Text D', 'Text E'],
        marker: {
          size: 12,
          sizemode:"area", 
          symbol: "circle",
          line: {
            width: 12,
          },
          color:"#3333FF",   
          opacity: 0.8,
       
        },
      },
      {
        y: [
        ],
        x: [],
        z:  [
        ],
        type: "scatter3d",
        mode: "lines",
        hoverinfo: "none",
        hovermode:"x unified",
        line:{
          width: 5
        },
        showlegend: false,

        text: ['Text A', 'Text B', 'Text C', 'Text D', 'Text E','Text A', 'Text B', 'Text C', 'Text D', 'Text E','Text A', 'Text B', 'Text C', 'Text D', 'Text E','Text A', 'Text B', 'Text C', 'Text D'],
        labels: ['Text A', 'Text B', 'Text C', 'Text D', 'Text E','Text A', 'Text B', 'Text C', 'Text D', 'Text E','Text A', 'Text B', 'Text C', 'Text D', 'Text E','Text A', 'Text B', 'Text C', 'Text D'],
        
        marker: {
          size: 200,
          sizemode:"area",
         
          symbol: "square",
          line: {
            width: 12,
          },
          color:"#AEB4B8",   
          opacity: 1,
          
        },
      },
      {
        y: [
        ],
        x: [],
        z:  [
        ],
        type: "scatter3d",
        mode: "lines",
       hoverinfo: "none", 
       hovermode:"x unified",
       line:{
        width: 8
      },
      
       
        showlegend: false,

        text: ['Text A', 'Text B', 'Text C', 'Text D', 'Text E','Text A', 'Text B', 'Text C', 'Text D', 'Text E','Text A', 'Text B', 'Text C', 'Text D', 'Text E','Text A', 'Text B', 'Text C', 'Text D'],
        labels: ['Text A', 'Text B', 'Text C', 'Text D', 'Text E','Text A', 'Text B', 'Text C', 'Text D', 'Text E','Text A', 'Text B', 'Text C', 'Text D', 'Text E','Text A', 'Text B', 'Text C', 'Text D'],
        
        marker: {
          size: 12,  sizemode:"area",
          
          symbol: "circle",
          line: {
            width: 8,
          },
          color:"#F43209",   
          opacity: 1,
        },
      }
    ],

    layout: {
      hovermode: "x unified",
      hoverdistance: 500,
      autosize: true,
      scene: { xaxis: { autorange: "reversed" }},
      margin: {
        l: 0,
        r: 10,
        b: 0,
        t: 0,
        pad: 0
    },
    width:width,
    height:height,
    },

  };


  }

  graphonHover(e) {
    console.log("Hover " + e);
    console.log(e);
    console.log("Value of x is", e.points[0].x)
    let hdata=this.graph.data[0].x
    console.log("Value of hdata is", hdata)
    let datax=[]
    let datay=[]//this.graph.data[0].y
    let dataz=[]//this.graph.data[0].z
  let iarr=[]
  hdata.forEach(function (value,index) {
    if(value==e.points[0].x)
    {
      iarr.push(index)
      //datay.push(this.graph.data[0].y[index])
      //dataz.push(this.graph.data[0].z[index])

    }
  console.log(">>>>>>>>>", iarr)
  });
let i=0
this.graph.data[2].x=[]
this.graph.data[2].y=[]
this.graph.data[2].z=[]
this.graph.data[1].x=[]
this.graph.data[1].y=[]
this.graph.data[1].z=[]
  for( i = 0; i < iarr.length; i++)
  {
    this.graph.data[2].x.push(this.graph.data[0].x[iarr[i]])
    this.graph.data[2].y.push(this.graph.data[0].y[iarr[i]])
    this.graph.data[2].z.push(this.graph.data[0].z[iarr[i]])

    this.graph.data[1].x.push(this.graph.data[0].x[iarr[i]])
    this.graph.data[1].y.push(this.graph.data[0].y[iarr[i]])
    this.graph.data[1].z.push(this.graph.data[0].z[iarr[i]])

    this.graph.data[1].x.push(this.graph.data[0].x[iarr[i]])
    this.graph.data[1].y.push(0)
    this.graph.data[1].z.push(0)

  }
  this.graph.data[2].x.push(this.graph.data[0].x[iarr[0]])
  this.graph.data[2].y.push(this.graph.data[0].y[iarr[0]])
  this.graph.data[2].z.push(this.graph.data[0].z[iarr[0]])
console.log(">>>>>", this.graph.data[2])
    

    this.graphHoverPoint = this.graphPoints[e.points[0].pointNumber]
 

    this.pointX = e.points[0].bbox.x0 - 100;
    //this.pointY = e.points[0].bbox.y0 - 100;
    this.xNumber = e.points[0].x
    this.yNumber = e.points[0].y
    this.zNumber = e.points[0].z

    setTimeout(() => {
      this.showImage = true;
    }, 10);
  }

  graphunHover(e) {
    this.graphHoverPoint = ''
    this.graph.data[2].x=[]
    this.graph.data[2].y=[]
    this.graph.data[2].z=[]
    this.graph.data[1].x=[]
    this.graph.data[1].y=[]
    this.graph.data[1].z=[]
    console.log("Unhover " + e);
    setTimeout(() => {
      this.showImage = false;
    }, 10);
  }

  renderChartHistoricoGeral(data) {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  loadUserData() {
    this.storage.get("mia_user_data").then((user) => {
      this.userData = user;
    });
  }

  loadGraphData(graphData:any) {
    
   
    this.graphPoints = graphData.AimChart[1].AimLabels
    let labels=[]

    for(let i=0; i<this.graphPoints.length; i++ )
    {
labels.push(this.graphPoints[i].toString())
    }
    console.log(this.graphPoints)
    this.graph.data[0].text=labels
    this.pointY =   graphData.AimChart[0].y[7]
    this.storage.get("mia_graph_data").then((data) => {
      if (data) { 
        /*x: (19) [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3]
y: (19) [10, 0, -10, -10, 0, 10, 0, 10,? 0, -10, -8, 0, 10, 10, 0, -10, -10, 0, 10]
z: (19) [-5, -10, -5, 5, ?10, 5, 0, -5, ? -10, -5, 4, 2, 5, -5, -10, -5, 5, 10, 5]
*/

        console.log("***********Graph data***********")
        console.log(data)
        this.graph.data[0].x = data.x;
        this.graph.data[0].y = data.y;
        this.graph.data[0].z = data.z;
        
       /* this.graph.data[1].x = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        this.graph.data[1].y = [10, 0, 0, 0,-10,0,-10,0,0,0,10]
        this.graph.data[1].z = [-5,0, -10,0, -5,0,5,0,10,0,5]
        this.graph.data[2].x=[1,1,1,1,1,1,1]
        this.graph.data[2].y= [10, 0, -10, -10, 0,10]
        this.graph.data[2].z= [-5, -10, -5, 5, 10, 5]*/
      } else {
    
        let grapDataObj = {x: graphData.AimChart[0].x,
         y:  graphData.AimChart[0].y,
         z:  graphData.AimChart[0].z,
      }
 /*
        let grapDataObj = {x: [
          1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3,
        ],
        y:[
          10, 0, -10, -10, 0, 10, 10, 0, -10, -8, 0, 10, 10, 0, -10, -10, 0, 10,
        ],
        z:[
          -5, -10, -5, 5, 10, 5, -5, -10, -5, 4, 2, 5, -5, -10, -5, 5, 10, 5,
        ]
      }*/

        this.storage.set('mia_graph_data',grapDataObj).then(()=>{
          this.graph.data[0].x = grapDataObj.x;
          this.graph.data[0].y = grapDataObj.y;
          this.graph.data[0].z = grapDataObj.z;
        })
      }
    });
  }

  nextSlide() {
    if (this.slideCount == 0 || this.slideCount > 0) {
      this.slider.lockSwipes(false);
      this.slideCount++;
      this.loadSlides();
      this.slider.lockSwipes(true);
    }
  }

  prevSlide() {
    if (this.slideCount < 0) {
    } else {
      if (this.slideCount != 0) {
        this.slider.lockSwipes(false);
        this.slideCount--;
        this.loadSlides();
        this.slider.lockSwipes(true);
      }
    }
  }

  async loadSlides() {
    this.api.get("flowscientist/" + this.slideCount).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log(data);
            // console.log("Scientist > ", data);
            this.slideLength = data.PerfilDoPaciente;
            if (this.slideLength.length != 0) {
              this.slideDate = data.PerfilDoPaciente[0].date;
              this.slide_Uid = data.PerfilDoPaciente[0]._id;
              this.slidePatology = data.PerfilDoPaciente[0].patology;

              console.log(data.PerfilDoPaciente[0].corpo);
              this.loadGraphData(data)
              //this.radarChart(data[0].corpo, data[0].emocoes, data[0].mente);
            } else {
              //this.radarChart(1, 1, 1);
            }
          },
          (err) => {
            // console.log("Scientist API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  get_corpo() {
    this.api.get("prontuario/today/corpo").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("Corpo > ", data);
          },
          (err) => {
            // console.log("Corpo API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  get_mente() {
    this.api.get("prontuario/today/mente").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("Mente > ", data);
          },
          (err) => {
            // console.log("Mente API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  get_emot() {
    this.api.get("prontuario/today/emocoes").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("Emot > ", data);
          },
          (err) => {
            // console.log("Emot API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  loadTotals() {
    //get /totalpati
    this.api.get("totalpati").then((res: any) => {
      // console.log("Total pati API -> ", res);
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("totalpati > ", data);
            this.totalpati =
              data && data[0] && data[0].totalpatients
                ? data[0].totalpatients
                : "0";
          },
          (err) => {
            // console.log("Total pati API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });

    //get /geralpoint
    this.api.get("geralpoint").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("geralpoint > ", data);
            this.geralpoint =
              data && data[0] && data[0].mediafinal
                ? data[0].mediafinal.$numberDecimal
                : "0";
          },
          (err) => {
            // console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });

    //get /globalpoint
    this.api.get("globalpoint").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("globalpoint > ", data);
            this.globalpoint =
              data && data[0] && data[0].mediafinal ? data[0].mediafinal : "0";
            this.globalpoint = this.globalpoint.toFixed(2);
          },
          (err) => {
            // console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });

    // bios
    this.api.get("bios").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("Bios > ", data);
          },
          (err) => {
            // console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });

    // totalglobal
    this.api.get("totalglobal").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("total global > ", data);
          },
          (err) => {
            // console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });

    //get /instaveis
    this.api.get("instavel").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("instaveis > ", data);
            this.instaveis =
              data && data[0] && data[0].PacientesInstaveis
                ? data[0].PacientesInstaveis
                : "0";
          },
          (err) => {
            // console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });

    //get /estaveis
    this.api.get("estavel").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("estaveis > ", data);
            this.estaveis =
              data && data[0] && data[0].PacientesEstaveis
                ? data[0].PacientesEstaveis
                : "0";
          },
          (err) => {
            // console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });

    //get /inativos
    this.api.get("inativo").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("inativos > ", data);

            this.inativos =
              data && data[0] && data[0].PacientesEstaveis
                ? data[0].PacientesEstaveis
                : "0";
          },
          (err) => {
            // console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  async loadRiskFactor() {
    this.api.get("grafrisk/food/" + this.year).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("Risk factor food > ", data);
          },
          (err) => {
            // console.log("Risk factor food API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });

    this.api.get("grafrisk/activie/" + this.year).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("Risk factor activie > ", data);
          },
          (err) => {
            // console.log("Risk factor activie API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });

    this.api.get("grafrisk/content/" + this.year).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("Risk factor content > ", data);
          },
          (err) => {
            // console.log("Risk factor content API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });

    this.api.get("grafrisk/treatm/" + this.year).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("Risk factor treatm > ", data);
          },
          (err) => {
            // console.log("Risk factor treatm API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  mensal_RiskFactor() {
    this.api
      .get("grafrisk/food/" + this.year + "/" + this.monthIndex)
      .then((res: any) => {
        if (res) {
          res.subscribe(
            (data) => {
              // console.log("Mensal RF food > ", data);
            },
            (err) => {
              // console.log("Mensal RF food API error -> ", err);
              this.api.proccessError(err);
            }
          );
        }
      });

    this.api
      .get("grafrisk/activie/" + this.year + "/" + this.monthIndex)
      .then((res: any) => {
        if (res) {
          res.subscribe(
            (data) => {
              // console.log("Mensal RF activie > ", data);
            },
            (err) => {
              // console.log("Mensal RF activie API error -> ", err);
              this.api.proccessError(err);
            }
          );
        }
      });

    this.api
      .get("grafrisk/content/" + this.year + "/" + this.monthIndex)
      .then((res: any) => {
        if (res) {
          res.subscribe(
            (data) => {
              // console.log("Mensal RF content > ", data);
            },
            (err) => {
              console.log("Mensal RF content API error -> ", err);
              this.api.proccessError(err);
            }
          );
        }
      });

    this.api
      .get("grafrisk/treatm/" + this.year + "/" + this.monthIndex)
      .then((res: any) => {
        if (res) {
          res.subscribe(
            (data) => {
              // console.log("Mensal RF treatm > ", data);
            },
            (err) => {
              console.log("Mensal RF treatm API error -> ", err);
              this.api.proccessError(err);
            }
          );
        }
      });
  }
}
