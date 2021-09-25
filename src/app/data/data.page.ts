<<<<<<< Updated upstream
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from "@angular/core";
=======
import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";
>>>>>>> Stashed changes
import {
  NavController,
  AlertController,
  ModalController,
  LoadingController,
} from "@ionic/angular";
import { ApiService } from "../services/api/api.service";
import { FormModalPage } from "../../app/form-modal/form-modal.page";

@Component({
  selector: "app-data",
  templateUrl: "./data.page.html",
  styleUrls: ["./data.page.scss"],
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
})
export class DataPage implements OnInit {
  tab: string = "forms";
  filterArray: any = [];
  allFilters: any = [];
  status_biomark: any = [];
  filterInputs_alert = [];
  moreOptions: boolean = true;

<<<<<<< Updated upstream

  @ViewChildren('formIndex') formIndex: QueryList<ElementRef>;
  
=======
  @ViewChildren("formIndex") formIndex: QueryList<ElementRef>;

>>>>>>> Stashed changes
  constructor(
    public api: ApiService,
    public alertController: AlertController,
    public modalController: ModalController,
    public loadingController: LoadingController
  ) {
<<<<<<< Updated upstream
 
=======
>>>>>>> Stashed changes
    this.loadForms();
  }

  ngOnInit() {}

<<<<<<< Updated upstream
  ionViewDidEnter(){
  
  }
=======
  ionViewDidEnter() {}
>>>>>>> Stashed changes

  segmentChange($event) {
    if (this.tab == "forms") {
      this.filterArray = [];
      this.loadForms();
    }

    if (this.tab == "status") {
      this.filterArray = [];
      this.status_biomark = [];
      this.filterArray = [
        {
          checked: true,
          form: "corpo",
          nform: "Corpo",
        },
        {
          checked: true,
          form: "mente",
          nform: "Mente",
        },
        {
          checked: true,
          form: "emocoes",
          nform: "Emocoes",
        },
      ];

      this.filterInputs_alert = [];
      this.filterInputs_alert = this.fillAlertInputs();

      for (var i = 0; i < this.filterArray.length; i++) {
        this.loadStatus(this.filterArray[i].form, this.filterArray[i].checked);
      }
    }

    if (this.tab == "rec") {
      this.filterArray = [];
      this.loadForms();
    }
  }

  async loadForms() {
    this.presentLoading();
    this.api.get("forms").then((res: any) => {
      this.allFilters = [];
      if (res) {
        res.subscribe(
          (data) => {
            console.log("Forms API > ", data);
            this.filterArray = data;
<<<<<<< Updated upstream
          
=======

>>>>>>> Stashed changes
            for (var i = 0; i < this.filterArray.length; i++) {
              this.filterArray[i].checked = true;
              if (this.tab == "forms") {
                this.loadFormFilters(
                  this.filterArray[i].form,
                  this.filterArray[i].checked
                );
              }

              if (this.tab == "rec") {
                this.loadRecomen(
                  this.filterArray[i].form,
                  this.filterArray[i].checked
                );
              }
            }
            this.filterInputs_alert = this.fillAlertInputs();
          },
          (err) => {
            this.alertController.dismiss();
            console.log("API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }

   
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
<<<<<<< Updated upstream
      cssClass: 'my-custom-class',
      message: 'Aguarde...',
     
=======
      cssClass: "my-custom-class",
      message: "Aguarde...",
>>>>>>> Stashed changes
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
<<<<<<< Updated upstream
    console.log('Loading dismissed!');
  }

  async loadRecomen(form, checked) {
   
    if (checked) {
      this.api.get("recomen/" + form).then((res: any) => {
        this.loadingController.dismiss()
=======
    console.log("Loading dismissed!");
  }

  async loadRecomen(form, checked) {
    if (checked) {
      this.api.get("recomen/" + form).then((res: any) => {
        this.loadingController.dismiss();
>>>>>>> Stashed changes
        if (res) {
          res.subscribe(
            (data) => {
              console.log("Recomen API > ", data);
              if (data.length > 0) {
                for (let i = 0; i < data.length; i++) {
                  this.allFilters.push(data[i]);
                }
                console.log("Recomen filter > ", this.allFilters);
              }
            },
            (err) => {
              console.log("API error -> ", err);
<<<<<<< Updated upstream
              this.loadingController.dismiss()
=======
              this.loadingController.dismiss();
>>>>>>> Stashed changes
              this.api.proccessError(err);
            }
          );
        }
      });
    }
  }

  async loadStatus(form, checked) {
    this.allFilters = [];
    if (checked) {
      this.api.get("pato/status/" + form).then((res: any) => {
        if (res) {
          res.subscribe(
            (data) => {
              console.log("Status API > ", data);
              if (data.result.length > 0) {
                for (let i = 0; i < data.result.length; i++) {
                  this.allFilters.push(data.result[i]);
                }
                console.log("Status filter > ", this.allFilters);
              }
            },
            (err) => {
              console.log("API error -> ", err);
              this.api.proccessError(err);
            }
          );
        }
      });

      this.api.get("biomark/" + form).then((res: any) => {
        if (res) {
          res.subscribe(
            (data) => {
              console.log("Status biomark API > ", data);
              if (data.result.length > 0) {
                for (let i = 0; i < data.result.length; i++) {
                  this.status_biomark.push(data.result[i]);
                }
                console.log("Status biomark filter > ", this.status_biomark);
              }
            },
            (err) => {
              console.log("API error -> ", err);
              this.api.proccessError(err);
            }
          );
        }
      });
    }
  }

  async del_multiple(item) {
    let fd = new FormData();
    fd.append("YES", "YES");

    const alert = await this.alertController.create({
      header: "Are you sure",
      message: "Are you sure, you want to delete this QUESTION",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Delete",
          handler: () => {
            this.api
              .post_params("delquest/" + item.formulario + "/" + item.ordem, fd)
              .then((res: any) => {
                if (res) {
                  res.subscribe(
                    (data) => {
                      console.log("Multiple del API > ", data);
                    },
                    (err) => {
                      console.log("API error -> ", err);
                      this.api.proccessError(err);
                    }
                  );
                }
              });
          },
        },
      ],
    });

    await alert.present();
  }

  async delStatus() {
    const alert = await this.alertController.create({
      header: "Are you sure",
      message: "Are you sure, you want to delete this status",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Delete",
          handler: () => {
            this.api.get("delpato").then((res: any) => {
              if (res) {
                res.subscribe(
                  (data) => {
                    console.log("Status del API > ", data);
                  },
                  (err) => {
                    console.log("API error -> ", err);
                    this.api.proccessError(err);
                  }
                );
              }
            });
          },
        },
      ],
    });

    await alert.present();
  }

  async delBiomark(biomark) {
    const alert = await this.alertController.create({
      header: "Are you sure",
      message: "Are you sure, you want to delete this Biomark",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Delete",
          handler: () => {
            this.api.post("delbiomark/" + biomark).then((res: any) => {
              if (res) {
                res.subscribe(
                  (data) => {
                    console.log("Status Biomark del API > ", data);
                  },
                  (err) => {
                    console.log("API error -> ", err);
                    this.api.proccessError(err);
                  }
                );
              }
            });
          },
        },
      ],
    });

    await alert.present();
  }

  async loadFormFilters(form, checked) {
    if (checked) {
      this.api.get("forms/" + form).then((res: any) => {
        if (res) {
          res.subscribe(
            (data) => {
              console.log(form + " filter > ", data);
<<<<<<< Updated upstream
              
           
              this.allFilters.push(data);

                   this.loadingController.dismiss()
                   console.log("filter > ", this.allFilters);
          
            },
            (err) => {
              this.loadingController.dismiss()
=======

              this.allFilters.push(data);

              this.loadingController.dismiss();
              console.log("filter > ", this.allFilters);
            },
            (err) => {
              this.loadingController.dismiss();
>>>>>>> Stashed changes
              console.log("API error -> ", err);
              this.api.proccessError(err);
            }
          );
        }
      });
    }

   
  }

  queryFormIndex(index){
   
    const forms = this.formIndex.toArray()
    console.log(forms[index])
  }

  queryFormIndex(item, index) {
    const height = item.questoes.length * 75;
    console.log(item);


    if (item.show) {
      item.show = false;
    } else {
      item.show = true;
    }
    console.log(item.show);
  }

  fillAlertInputs() {
    const theNewInputs = [];
    for (let i = 0; i < this.filterArray.length; i++) {
      theNewInputs.push({
        type: "checkbox",
        label: this.filterArray[i].nform,
        value: this.filterArray[i],
        checked: this.filterArray[i].checked,
      });
    }
    return theNewInputs;
  }

  async openFilter() {
    const alert = await this.alertController.create({
      header: "Filtros",
      inputs: this.filterInputs_alert,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Ok",
          handler: (data) => {
            console.log("Confirm Ok", data);

            let isMatch = false;
            for (let i = 0; i < this.filterArray.length; i++) {
              for (let j = 0; j < data.length; j++) {
                if (data[j].form == this.filterArray[i].form) {
                  isMatch = true;
                  break;
                } else {
                  isMatch = false;
                }
              }

              if (isMatch) {
                // To make filter true again
                if (this.filterArray[i].checked == false) {
                  this.filterArray[i].checked = true;
                }
              } else {
                this.filterArray[i].checked = false;
                isMatch = false;
              }
            }
            console.log("Filter array -> ", this.filterArray);

            // Call to API according to selected filters
            if (this.tab == "forms") {
              this.allFilters = [];
              for (var i = 0; i < this.filterArray.length; i++) {
                this.loadFormFilters(
                  this.filterArray[i].form,
                  this.filterArray[i].checked
                );
              }
            }

            if (this.tab == "status") {
              for (var i = 0; i < this.filterArray.length; i++) {
                this.loadStatus(
                  this.filterArray[i].form,
                  this.filterArray[i].checked
                );
              }
            }

            if (this.tab == "rec") {
              for (var i = 0; i < this.filterArray.length; i++) {
                this.loadRecomen(
                  this.filterArray[i].form,
                  this.filterArray[i].checked
                );
              }
            }

            // Filling alert array
            this.filterInputs_alert = [];
            this.filterInputs_alert = this.fillAlertInputs();
          },
        },
      ],
    });

    await alert.present();
  }

  async open_patologia() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "patologia",
        title: "Inserir novo Estado Clínico / Patologia",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("patologia Modal Dismiss ", data);
  }

  async editStatus(item) {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "patologia",
        title: "EEstado Clínico / Patologia",
        item: item,
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("Edit patologia Modal Dismiss ", data);
  }

  async open_biomarcador() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "biomark",
        title: "Inserior novo Biomarcador",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("biomark Modal Dismiss ", data);
  }

  async open_tratamento() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "tratamento",
        title: "Inserir novo Tratamento",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("Tratamento Modal Dismiss ", data);
  }

  async open_content() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "content",
        title: "Inserir novo Conteúdo",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("Content Modal Dismiss ", data);
  }

  async open_food() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "food",
        title: "Inserir nova Alimentação",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("Food Modal Dismiss ", data);
  }

  async open_activity() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "activity",
        title: "Inserir nova Atividade",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("Activity Modal Dismiss ", data);
  }

  async open_multiple() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "multiple",
        title: "Inserir Questão de Múltipla Escolha",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
<<<<<<< Updated upstream
    await modal.onWillDismiss().then(data=>{
       
      if (data.data) {
        this.loadForms();
      }else{
        return
=======
    await modal.onWillDismiss().then((data) => {
      if (data.data) {
        this.loadForms();
      } else {
        return;
>>>>>>> Stashed changes
      }
      console.log("Edit multiple Modal Dismiss ", data);
    });
  }

  async edit_multiple(item) {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "multiple",
        title: "Editar Questão de Múltipla Escolha",
        item: item,
      },
    });
    await modal.present();

<<<<<<< Updated upstream
    await modal.onWillDismiss().then(data=>{
      this.loadForms();
      console.log("Edit multiple Modal Dismiss ", data);
    });
    

=======
    await modal.onWillDismiss().then((data) => {
      this.loadForms();
      console.log("Edit multiple Modal Dismiss ", data);
    });
>>>>>>> Stashed changes
  }

  async open_gestalt() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "gestalt",
        title: "Inserir Questão de Gestalt",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("Gestalt Modal Dismiss ", data);
  }

  async open_binaria() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "binaria",
        title: "Inserir Questão de SIM ou NÃO",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("Binaria Modal Dismiss ", data);
  }

  async open_levels() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "levels",
        title: "Inserir Questão de Níveis",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("Level Modal Dismiss ", data);
  }
}
