import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { StorageService } from "../services/storage/storage.service";
import { ApiService } from "../services/api/api.service";
import Chart from 'chart.js';

@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.page.html',
  styleUrls: ['./prontuario.page.scss'],
})
export class ProntuarioPage implements OnInit {
  tab: string = 'hoje';
  year: any;
  month: any;
  patientId: any;
  category: any;
  userData: any;
  totalpati: any; geralpoint: any; globalpoint: any;
  estaveis: any; instaveis: any; bioconectados: any; inativos: any;
  cardContentSelected: any = 'PRONTUARIO';
  triagTags: any = [];
  diagTags: any = [];
  sintomas: any;
  opiniao: any;
  conhecimento: any;
  link: any;
  conhecimentohDia: any;
  tratamento: any;
  alimento: any;
  alimentohDia: any;
  agendar: any;
  agendarhDia: any;
  agendarHorario: any;
  agendarDuracao: any;
  atividadehDia: any;
  especialista: any;
  atividade: any;
  exames: any;
  anomalias: any;

  constructor(public api: ApiService, public storage: StorageService,
    public navCtrl: NavController, private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      this.patientId = params["patientId"];
      this.category = params["category"];
      this.year = params["year"];
      this.month = params["month"];
      this.loadHoje(this.category);
      this.loadUserData();
      this.loadTotals();
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.prontuarioChart(1, 2, 3, 4, 5, 6);
    }, 1000);
  }

  async prontuarioChart(corpo, emot, mente, item1, item2, item3) {
    var yourImage = new Image();
    yourImage.src ='https://i.ibb.co/72pc2kH/add-circle-icon.png';

    var ctx = document.getElementById('prontChart');
    var radarOptions = {
      legend: {
        position: 'bottom',
        display: false
      },
      scales: {
          ticks: {
            fontFamily: 'FontAwesome'
          }
        
      }
    };
    var prontChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Sol', 'Energia', 'Sistemas', 'Condicionamento fisico', 'Sono', 'Nutrição'],
        datasets: [{
          backgroundColor: "#F1B4AE",
          borderColor: "#2694a3",
          pointBackgroundColor: "#2694a3",
          data: [corpo, emot, mente, item1, item2, item3]
        }],
      },
      options: radarOptions
    });
  }

  loadUserData() {
    this.storage.get('mia_user_data').then((user) => {
      this.userData = user;
    })
  }

  openPage(page) {
    this.navCtrl.navigateRoot(page);
  }

  segmentChange($event) {
    if (this.tab == "hoje") {
      this.loadHoje(this.category);
    }

    if (this.tab == "historico") {
      this.loadHistorico();
    }

    if (this.tab == "exames") {
      this.loadExames();
    }

    if (this.tab == "biosensores") {
      this.loadBio();
    }

    if (this.tab == "autocuidado") {
      this.loadAutocuidado();
    }

    if (this.tab == "familia") {
      this.loadFamilia();
    }

    if (this.tab == "opinioes") {
      this.loadOpinioes();
    }
  }

  loadTotals() {
    //get /totalpati
    this.api.get('totalpati').then((res: any) => {
      console.log("Total pati API -> ", res);
      if (res) {
        res.subscribe((data) => {
          console.log("totalpati > ", data);
          this.totalpati = (data && data[0] && data[0].totalpatients) ? data[0].totalpatients : '0'
        }, (err) => {
          console.log("Total pati API error -> ", err);
          this.api.proccessError(err)
        });
      }
    });

    //get /geralpoint
    this.api.get('geralpoint').then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("geralpoint > ", data);
          this.geralpoint = (data && data[0] && data[0].mediafinal) ? data[0].mediafinal.$numberDecimal : '0'
        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });

    //get /globalpoint
    this.api.get('globalpoint').then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("globalpoint > ", data);
          this.globalpoint = (data && data[0] && data[0].mediafinal) ? data[0].mediafinal : '0'
          this.globalpoint = this.globalpoint.toFixed(2);
        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });

    // bios
    this.api.get('bios').then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("Bios > ", data);
        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });

    // totalglobal
    this.api.get('totalglobal').then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("total global > ", data);
        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });

    //get /instaveis
    this.api.get('instavel').then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("instaveis > ", data);
          this.instaveis = (data && data[0] && data[0].PacientesInstaveis) ? data[0].PacientesInstaveis : '0'
        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });

    //get /estaveis
    this.api.get('estavel').then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("estaveis > ", data);
          this.estaveis = (data && data[0] && data[0].PacientesEstaveis) ? data[0].PacientesEstaveis : '0'
        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });

    //get /inativos
    this.api.get('inativo').then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("inativos > ", data);

          this.inativos = (data && data[0] && data[0].PacientesEstaveis) ? data[0].PacientesEstaveis : '0'
        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });

    //get triag tags
    this.api.get('triag/tags').then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("triag tags > ", data);

          data.forEach(element => {
            this.triagTags.push(element.expres)
          });
        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });

    //get diag tags
    this.api.get('diag/tags').then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("diag tags > ", data);

          data.forEach(element => {
            this.diagTags.push(element.expres)
          });
        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });
  }

  async loadHoje(category) {
    this.api.get('prontuario/today/' + this.patientId + '/' + category).then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("inativos > ", data);

          this.inativos = (data && data[0] && data[0].PacientesEstaveis) ? data[0].PacientesEstaveis : '0'
        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });
  }

  // Historico
  async loadHistorico() {
    this.api.get('prontuario/historic/0/30').then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("historico > ", data);


        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });
  }

  // Exames
  async loadExames() {
    this.api.get('prontuario/exams/0/30').then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("Exams > ", data);


        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });
  }

  // AUTOCUIDADO
  async loadAutocuidado() {
    this.api.get('grafrisk/food/' + this.year).then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("Autocuidado food > ", data);


        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });

    this.api.get('grafrisk/activie/' + this.year).then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("Autocuidado activie > ", data);


        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });

    this.api.get('grafrisk/content/' + this.year).then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("Autocuidado content > ", data);


        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });

    this.api.get('grafrisk/treatm/' + this.year).then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("Autocuidado treatm > ", data);


        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });

    //Autocuidado Mes
    this.api.get('grafrisk/food/' + this.year + '/' + this.month).then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("Autocuidado food mes > ", data);


        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });

    this.api.get('grafrisk/activie/' + this.year + '/' + this.month).then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("Autocuidado activie mes > ", data);


        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });

    this.api.get('grafrisk/content/' + this.year + '/' + this.month).then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("Autocuidado content mes > ", data);


        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });

    this.api.get('grafrisk/treatm/' + this.year + '/' + this.month).then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("Autocuidado treatm mes > ", data);


        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });
  }

  // Biosensores
  async loadBio() {
    this.api.get('prontuario/biosensors/0/30').then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("Bio > ", data);

        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });
  }

  // Familia
  async loadFamilia() {
    this.api.get('prontuario/family/0/30').then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("Family > ", data);

        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });
  }

  // Opinioes
  async loadOpinioes() {
    this.api.get('prontuario/opinions/0/30').then((res: any) => {
      if (res) {
        res.subscribe((data) => {
          console.log("Family > ", data);

        }, (err) => {
          console.log(err);
          this.api.proccessError(err)
        });
      }
    });
  }

  changeContent(type: any) {
    this.cardContentSelected = type
  }

  sendTriagSintOpin() {
    let postData = new FormData();
    postData.append("sintomas", this.sintomas);
    postData.append("opiniao", this.opiniao);
    
    this.api.post_params("triag/" + this.patientId, postData).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("Triagem post API > ", data);

            this.sintomas = ''
            this.opiniao = ''
          },
          (err) => {
            console.log("API error -> ", err);
            this.api.proccessError(err);
            if (err.status === 200 && err.statusText === 'OK') {
              this.sintomas = ''
              this.opiniao = ''
            }
          }
        );
      }
    });
  }

  sendDiagSintOpin() {
    let postData = new FormData();
    postData.append("sintomas", this.sintomas);
    postData.append("opiniao", this.opiniao);
    
    this.api.post_params("diag/" + this.patientId, postData).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("Diagnostico post API > ", data);

            this.sintomas = ''
            this.opiniao = ''
          },
          (err) => {
            console.log("API error -> ", err);
            this.api.proccessError(err);
            if (err.status === 200 && err.statusText === 'OK') {
              this.sintomas = ''
              this.opiniao = ''
            }
          }
        );
      }
    });
  }

  setAnomalias(data) {
    this.anomalias = data.detail.value
  }

  setExames(data) {
    this.exames = data.detail.value
  }

  setOpiniao(data) {
    this.opiniao = data.detail.value
  }

  setSintomas(data) {
    this.sintomas = data.detail.value
  }

  setConhecimento(data) {
    this.conhecimento = data.detail.value
  }

  setLink(data) {
    this.link = data.detail.value
  }

  setConhecimentohDia(data) {
    this.conhecimentohDia = data.detail.value
  }

  setTratamento(data) {
    this.tratamento = data.detail.value
  }

  setAlimento(data) {
    this.alimento = data.detail.value
  }

  setAlimentohDia(data) {
    this.alimentohDia = data.detail.value
  }

  setAgendar(data) {
    this.agendar = data.detail.value
  }

  setAgendarhDia(data) {
    this.agendarhDia = data.detail.value
  }

  setAgendarHorario(data) {
    this.agendarHorario = data.detail.value
  }

  setAgendarDuracao(data) {
    this.agendarDuracao = data.detail.value
  }

  setAtividade(data) {
    this.atividade = data.detail.value
  }

  setAtividadehDia(data) {
    this.atividadehDia = data.detail.value
  }

  setEspecialista(data) {
    this.especialista = data.detail.value
  }

  setTag(type, tag) {
    if (type === 'exames')
      this.exames = tag
  }

  nextPage() {
    if (this.cardContentSelected === 'PRONTUARIO')
      this.cardContentSelected = 'TRIAGEM'
    else if (this.cardContentSelected === 'TRIAGEM')
      this.cardContentSelected = 'DIAGNOSTICO'
    else if (this.cardContentSelected === 'DIAGNOSTICO')
      this.cardContentSelected = 'TRATAMENTO'
  }

}
