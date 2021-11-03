import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ToastController } from "@ionic/angular";
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
  sintomasTriag: any = '';
  opiniaoTriag: any = '';
  sintomasDiag: any = '';
  opiniaoDiag: any = '';
  conhecimento: any = '';
  link: any = '';
  conhecimentohDia: any = '';
  tratamento: any = '';
  alimento: any = '';
  alimentohDia: any = '';
  agendar: any = '';
  agendarhDia: any = '';
  agendarHorario: any = '';
  agendarDuracao: any = '';
  atividadehDia: any = '';
  especialista: any = '';
  atividade: any = '';
  examesTriag: any = '';
  anomaliasTriag: any = '';
  examesDiag: any = '';
  anomaliasDiag: any = '';
  tabsShown: boolean = false;

  constructor(public api: ApiService, public storage: StorageService,
    public navCtrl: NavController, private route: ActivatedRoute, private toastController: ToastController) {

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

  sendSintOpin(triagem?) {
    let postData = new FormData();
    postData.append("sintomas", triagem ? this.sintomasTriag : this.sintomasDiag);
    postData.append("opiniao", triagem ? this.opiniaoTriag : this.opiniaoDiag);
    
    this.api.post_params(triagem ? "triag/" + this.patientId : "diag/" + this.patientId, postData).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("post API > ", data);

            triagem ? this.sintomasTriag = '' : this.sintomasDiag = ''
            triagem ? this.opiniaoTriag = '' : this.opiniaoDiag = ''
          },
          (err) => {
            console.log("API error -> ", err);
            this.api.proccessError(err);
            if (err.status === 200 && err.statusText === 'OK') {
              triagem ? this.sintomasTriag = '' : this.sintomasDiag = ''
              triagem ? this.opiniaoTriag = '' : this.opiniaoDiag = ''
              this.presentToast(err.error.text)
            }
          }
        );
      }
    });
  }

  sendExamAnom(triagem?) {
    let postData = new FormData();
    postData.append("expres", triagem ? this.examesTriag : this.examesDiag);
    postData.append("valor", triagem ? this.anomaliasTriag : this.anomaliasDiag);
    
    this.api.post_params(triagem ? "triag/expres/" + this.patientId : "diag/expres/" + this.patientId, postData).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("post API > ", data);

            triagem ? this.examesTriag = '' : this.examesDiag = ''
            triagem ? this.anomaliasTriag = '' : this.anomaliasDiag = ''
          },
          (err) => {
            console.log("API error -> ", err);
            this.api.proccessError(err);
            if (err.status === 200 && err.statusText === 'OK') {
              triagem ? this.examesTriag = '' : this.examesDiag = ''
              triagem ? this.anomaliasTriag = '' : this.anomaliasDiag = ''
              this.presentToast(err.error.text)
            }
          }
        );
      }
    });
  }

  sendConhecimento() {
    let postData = new FormData();
    postData.append("content", this.conhecimento);
    postData.append("contentlink", this.link);
    postData.append("contentqtd", this.conhecimentohDia);

    this.api.post_params("tratamento/mcontent/" + this.patientId, postData).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("post API > ", data);

            this.conhecimento = ''
            this.link = ''
            this.conhecimentohDia = ''
          },
          (err) => {
            console.log("API error -> ", err);
            this.api.proccessError(err);
            if (err.status === 200 && err.statusText === 'OK') {
              this.conhecimento = ''
              this.link = ''
              this.conhecimentohDia = ''
              this.presentToast(err.error.text)
            }
          }
        );
      }
    });
  }

  sendAlimentacao() {
    let postData = new FormData();
    postData.append("food", this.alimento);
    postData.append("fqtd", this.alimentohDia);

    this.api.post_params("tratamento/mfood/" + this.patientId, postData).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("post API > ", data);

            this.alimento = ''
            this.alimentohDia = ''
          },
          (err) => {
            console.log("API error -> ", err);
            this.api.proccessError(err);
            if (err.status === 200 && err.statusText === 'OK') {
              this.alimento = ''
              this.alimentohDia = ''
              this.presentToast(err.error.text)
            }
          }
        );
      }
    });
  }

  sendAtividades() {
    let postData = new FormData();
    postData.append("activies", this.atividade);
    postData.append("aqtd", this.atividadehDia);

    this.api.post_params("tratamento/mactivie/" + this.patientId, postData).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("post API > ", data);

            this.atividade = ''
            this.atividadehDia = ''
          },
          (err) => {
            console.log("API error -> ", err);
            this.api.proccessError(err);
            if (err.status === 200 && err.statusText === 'OK') {
              this.atividade = ''
              this.atividadehDia = ''
              this.presentToast(err.error.text)
            }
          }
        );
      }
    });
  }

  sendEspecialista() {
    let postData = new FormData();
    postData.append("especialista", this.especialista);

    this.api.post_params("tratamento/mtreatm/" + this.patientId, postData).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("post API > ", data);

            this.especialista = ''
          },
          (err) => {
            console.log("API error -> ", err);
            this.api.proccessError(err);
            if (err.status === 200 && err.statusText === 'OK') {
              this.especialista = ''
              this.presentToast(err.error.text)
            }
          }
        );
      }
    });
  }

  sendTratamento() {
    let postData = new FormData();
    postData.append("tratamento", this.tratamento);
    
    this.api.post_params("tratamento/" + this.patientId, postData).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("post API > ", data);

            this.tratamento = ''
            this.tabsShown = false
            this.cardContentSelected = 'PRONTUARIO'
          },
          (err) => {
            console.log("API error -> ", err);
            this.api.proccessError(err);
            if (err.status === 200 && err.statusText === 'OK') {
              this.tratamento = ''
              this.presentToast(err.error.text)
              this.tabsShown = false
              this.cardContentSelected = 'PRONTUARIO'
            }
          }
        );
      }
    });
  }

  sendAgendar() {
    console.log(this.agendarhDia)
    let split_tz = this.agendarhDia.toString().substr(this.agendarhDia.toString().indexOf('+')+1, this.agendarhDia.toString().length).replace(':', '')
    let seconds = this.agendarhDia.toString().substring(0, this.agendarhDia.toString().indexOf('+')-6) + '00.000+' + split_tz
    this.agendarDuracao = this.agendarDuracao.split(':');
    this.agendarDuracao = (+this.agendarDuracao[0]) * 60 + (+this.agendarDuracao[1])
    let postData = new FormData();
    postData.append("servico", this.agendar);
    postData.append("dataiso", seconds);
    postData.append("duracao", this.agendarDuracao);
    
    this.api.post_params("reagendar/" + this.patientId, postData).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("post API > ", data);

            this.agendar = ''
            this.agendarhDia = ''
            //this.agendarHorario = ''
            this.agendarDuracao = ''
          },
          (err) => {
            console.log("API error -> ", err);
            this.api.proccessError(err);
            if (err.status === 200 && err.statusText === 'OK') {
              this.agendar = ''
              this.agendarhDia = ''
              //this.agendarHorario = ''
              this.agendarDuracao = ''
              this.presentToast(err.error.text)
            }
          }
        );
      }
    });
  }

  setAnomalias(data, triagem?) {
    triagem ? this.anomaliasTriag = data.detail.value : this.anomaliasDiag = data.detail.value
  }

  setExames(data, triagem?) {
    triagem ? this.examesTriag = data.detail.value : this.examesDiag = data.detail.value
  }

  setOpiniao(data, triagem?) {
    triagem ? this.opiniaoTriag = data.detail.value : this.opiniaoDiag = data.detail.value
  }

  setSintomas(data, triagem?) {
    triagem ? this.sintomasTriag = data.detail.value : this.sintomasDiag = data.detail.value
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
    if (type === 'examesTriag')
      this.examesTriag = tag
    else if (type === 'examesDiag')
      this.examesDiag = tag
    else if (type === 'conhecimento')
      this.conhecimento = tag
    else if (type === 'agendar')
      this.agendar = tag
    else if (type === 'atividade')
      this.atividade = tag
    else if (type === 'especialista')
      this.especialista = tag
    else if (type === 'alimento')
      this.alimento = tag
  }

  async presentToast(response) {
		const toast = await this.toastController.create({
			message: response,
			duration: 2000,
		});
		toast.present();
	}

  showTabs() {
    this.tabsShown = true
    this.cardContentSelected = 'TRIAGEM'
  }

}
