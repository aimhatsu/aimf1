import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from "../services/api/api.service";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoadingController, NavController, ModalController, NavParams } from '@ionic/angular';
import { Events } from '../services/events';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.page.html',
  styleUrls: ['./form-modal.page.scss'],
})
export class FormModalPage implements OnInit {
  @Input() title: string;
  @Input() form_type: string;
  item: any;

  multipleForm: FormGroup;
  gestaltForm: FormGroup;
  binariaForm: FormGroup;
  levelForm: FormGroup;

  statusForm: FormGroup;
  biomarkForm: FormGroup;

  tratamentoForm: FormGroup;
  contentForm: FormGroup;
  foodForm: FormGroup;
  activityForm: FormGroup;

  constructor(public router: Router, public loadingCtrl: LoadingController,
    public modalController: ModalController, public navParams: NavParams,
    public formBuilder: FormBuilder, public api: ApiService) {

    this.title = navParams.get('title');
    this.form_type = navParams.get('form_type');
    this.item = navParams.get('item');

    this.statusForm = formBuilder.group({
      patolog: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      category: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      cid: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      type: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      form: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      parametro: ['', Validators.compose([Validators.maxLength(150), Validators.required])]
    });

    if (this.title == 'Editar Estado Clínico / Patologia:') {
      this.statusForm = formBuilder.group({
        patolog: [this.item.patolog, Validators.compose([Validators.maxLength(150), Validators.required])],
        category: [this.item.category, Validators.compose([Validators.maxLength(150), Validators.required])],
        cid: [this.item.cid, Validators.compose([Validators.maxLength(150), Validators.required])],
        type: [this.item.type, Validators.compose([Validators.maxLength(150), Validators.required])],
        form: [this.item.form, Validators.compose([Validators.maxLength(150), Validators.required])],
        parametro: [this.item.parametro, Validators.compose([Validators.maxLength(150), Validators.required])]
      });
    }

    this.biomarkForm = formBuilder.group({
      status: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      biomark: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      category: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ref1: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ref2: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ref3: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ref4: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ref5: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      imgref: [''],
    });

    this.tratamentoForm = formBuilder.group({
      status: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      category: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ordem: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      arquivo: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      video: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      tratamento: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      duracao: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      title1: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      text1: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      title2: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      text2: ['', Validators.compose([Validators.maxLength(150), Validators.required])]
    });

    this.contentForm = formBuilder.group({
      status: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      category: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ordem: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      arquivo: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      video: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      conteudo: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      duracao: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      title1: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      text1: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      title2: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      text2: ['', Validators.compose([Validators.maxLength(150), Validators.required])]
    });

    this.foodForm = formBuilder.group({
      status: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      category: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ordem: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      arquivo: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      video: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      alimento: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      quantidade: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      medida: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      title1: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      text1: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      title2: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      text2: ['', Validators.compose([Validators.maxLength(150), Validators.required])]
    });

    this.activityForm = formBuilder.group({
      status: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      category: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ordem: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      arquivo: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      video: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      atividade: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      duracao: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      title1: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      text1: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      title2: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      text2: ['', Validators.compose([Validators.maxLength(150), Validators.required])]
    });

    this.multipleForm = formBuilder.group({
      category: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      nform: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      formulario: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      fordem: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      nivel: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ordem: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      parametro: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      pergunta: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ans1: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ans2: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ans3: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ans4: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ans5: ['', Validators.compose([Validators.maxLength(150), Validators.required])]
    });

    if (this.title == 'Edit MULTIPLE CHOICE QUESTION') {
      this.multipleForm = formBuilder.group({
        category: [this.item.category, Validators.compose([Validators.maxLength(150), Validators.required])],
        nform: [this.item.nform, Validators.compose([Validators.maxLength(150), Validators.required])],
        formulario: [this.item.formulario, Validators.compose([Validators.maxLength(150), Validators.required])],
        fordem: [this.item.fordem, Validators.compose([Validators.maxLength(150), Validators.required])],
        nivel: [this.item.nivel, Validators.compose([Validators.maxLength(150), Validators.required])],
        ordem: [this.item.ordem, Validators.compose([Validators.maxLength(150), Validators.required])],
        pergunta: [this.item.pergunta, Validators.compose([Validators.maxLength(150), Validators.required])],
        parametro: [this.item.parametro, Validators.compose([Validators.maxLength(150), Validators.required])],
        ans1: [this.item.ans1, Validators.compose([Validators.maxLength(150), Validators.required])],
        ans2: [this.item.ans2, Validators.compose([Validators.maxLength(150), Validators.required])],
        ans3: [this.item.ans3, Validators.compose([Validators.maxLength(150), Validators.required])],
        ans4: [this.item.ans4, Validators.compose([Validators.maxLength(150), Validators.required])],
        ans5: [this.item.ans5, Validators.compose([Validators.maxLength(150), Validators.required])]
      });
    }

    this.gestaltForm = formBuilder.group({
      category: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      nform: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      formulario: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      fordem: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      nivel: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      tipo: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ordem: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      parametro: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      img: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      nome: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ans1: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ans2: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ans3: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ans4: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ans5: ['', Validators.compose([Validators.maxLength(150), Validators.required])]
    });

    this.binariaForm = formBuilder.group({
      category: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      nform: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      formulario: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      fordem: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      nivel: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      tipo: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ordem: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      parametro: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      pergunta: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ans1: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ans2: ['', Validators.compose([Validators.maxLength(150), Validators.required])]
    });

    this.levelForm = formBuilder.group({
      category: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      formulario: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      fordem: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      nivel: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ordem: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      pergunta: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      parametro: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ans1: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ans2: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ans3: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ans4: ['', Validators.compose([Validators.maxLength(150), Validators.required])],
      ans5: ['', Validators.compose([Validators.maxLength(150), Validators.required])]
    });
  }

  ngOnInit() {

  }

  close() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async submitStatus(data: any) {
    let fd = new FormData();
    fd.append('patolog', data.patolog);
    fd.append('category', data.category);
    fd.append('cid', data.cid);
    fd.append('type', data.type);
    fd.append('form', data.form);
    fd.append('parametro', data.parametro);

    if (this.title == 'Edit Status') {
      this.post_API('editpato', fd);
    } else {
      this.post_API('inspato', fd);
    }
  }

  async submitBiomark(data: any) {
    let fd = new FormData();
    fd.append('status', data.status);
    fd.append('biomark', data.biomark);
    fd.append('category', data.category);
    fd.append('ref1', data.ref1);
    fd.append('ref2', data.ref2);
    fd.append('ref3', data.ref3);
    fd.append('ref4', data.ref4);
    fd.append('ref5', data.ref5);
    fd.append('imgref', data.imgref);

    this.post_API('insbiomark', fd);
  }

  async submitTratamento(data: any) {
    let fd = new FormData();
    fd.append('status', data.status);
    fd.append('categoria', data.category);
    fd.append('ordem', data.ordem);
    fd.append('arquivo', data.arquivo);
    fd.append('video', data.video);
    fd.append('tratamento', data.tratamento);
    fd.append('duracao', data.duracao);
    fd.append('title1', data.title1);
    fd.append('txt1', data.text1);
    fd.append('title2', data.title2);
    fd.append('txt2', data.text2);

    this.post_API('instreatm', fd);
  }

  async submitContent(data: any) {
    let fd = new FormData();
    fd.append('status', data.status);
    fd.append('categoria', data.category);
    fd.append('ordem', data.ordem);
    fd.append('arquivo', data.arquivo);
    fd.append('video', data.video);
    fd.append('conteudo', data.conteudo);
    fd.append('duracao', data.duracao);
    fd.append('title1', data.title1);
    fd.append('txt1', data.text1);
    fd.append('title2', data.title2);
    fd.append('txt2', data.text2);

    this.post_API('inscontent', fd);
  }

  async submitFood(data: any) {
    let fd = new FormData();
    fd.append('status', data.status);
    fd.append('categoria', data.category);
    fd.append('ordem', data.ordem);
    fd.append('arquivo', data.arquivo);
    fd.append('video', data.video);
    fd.append('alimento', data.alimento);
    fd.append('quantidade', data.quantidade);
    fd.append('medida', data.medida);
    fd.append('title1', data.title1);
    fd.append('txt1', data.text1);
    fd.append('title2', data.title2);
    fd.append('txt2', data.text2);

    this.post_API('insfood', fd);
  }

  async submitActivity(data: any) {
    let fd = new FormData();
    fd.append('status', data.status);
    fd.append('categoria', data.category);
    fd.append('ordem', data.ordem);
    fd.append('arquivo', data.arquivo);
    fd.append('video', data.video);
    fd.append('atividade', data.atividade);
    fd.append('duracao', data.duracao);
    fd.append('title1', data.title1);
    fd.append('txt1', data.text1);
    fd.append('title2', data.title2);
    fd.append('txt2', data.text2);

    this.post_API('insactivie', fd);
  }

  async submitMultiple(data: any) {
    let fd = new FormData();
    fd.append('category', data.category);
    fd.append('nform', data.nform);
    fd.append('formulario', data.formulario);
    fd.append('fordem', data.fordem);
    fd.append('nivel', data.nivel);
    fd.append('ordem', data.ordem);
    fd.append('parametro', data.parametro);
    fd.append('pergunta', data.pergunta);
    fd.append('ans1', data.ans1);
    fd.append('ans2', data.ans2);
    fd.append('ans3', data.ans3);
    fd.append('ans4', data.ans4);
    fd.append('ans5', data.ans5);

    if (this.title == 'Edit MULTIPLE CHOICE QUESTION') {
      this.post_API('changequest/' + data.ordem, fd);
    } else {
      this.post_API('insertquest', fd);
    }
  }

  async submitGestalt(data: any) {
    let fd = new FormData();
    fd.append('category', data.category);
    fd.append('nform', data.nform);
    fd.append('formulario', data.formulario);
    fd.append('fordem', data.fordem);
    fd.append('nivel', data.nivel);
    fd.append('ord', data.ordem);
    fd.append('tipo', data.tipo);
    fd.append('parametro', data.parametro);
    fd.append('nome', data.nome);
    fd.append('img', data.img);
    fd.append('ans1', data.ans1);
    fd.append('ans2', data.ans2);
    fd.append('ans3', data.ans3);
    fd.append('ans4', data.ans4);
    fd.append('ans5', data.ans5);

    this.post_API('imgselect', fd);
  }

  async submitBinaria(data: any) {
    let fd = new FormData();
    fd.append('category', data.category);
    fd.append('nform', data.nform);
    fd.append('formulario', data.formulario);
    fd.append('fordem', data.fordem);
    fd.append('nivel', data.nivel);
    fd.append('ord', data.ordem);
    fd.append('tipo', data.tipo);
    fd.append('parametro', data.parametro);
    fd.append('pergunta', data.pergunta);
    fd.append('ans1', data.ans1);
    fd.append('ans2', data.ans2);

    this.post_API('insertquest2', fd);
  }

  async submitLevels(data: any){
    let fd = new FormData();
    fd.append('category', data.category);
    fd.append('formulario', data.formulario);
    fd.append('fordem', data.fordem);
    fd.append('nivel', data.nivel);
    fd.append('ordem', data.ordem);
    fd.append('parametro', data.parametro);
    fd.append('pergunta', data.pergunta);
    fd.append('ans1', data.ans1);
    fd.append('ans2', data.ans2);
    fd.append('ans3', data.ans3);
    fd.append('ans4', data.ans4);
    fd.append('ans5', data.ans5);

    this.post_API('insertnivel', fd);
  }

  async post_API(url, fd){
    this.api.post_params(url, fd).then((res: any) => {
      console.log("After parse ", res);
      if (res) {
        res.subscribe((data) => {
          console.log("Multiple form submit API > ", data.text());

        }, (err) => {
          console.log("API error -> ", err);
          this.api.proccessError(err)
        });
      }
    });
  }
}
