import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ɵangular_packages_forms_forms_v } from "@angular/forms";
import { Usuario } from "src/app/model/usuario";
import { UsuarioService } from "src/app/service/usuario.service";


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  form: FormGroup;
  usuarios: Usuario[];
  constructor(private formbuilder:FormBuilder, private usuarioservice:UsuarioService) {
    this.form = this.formbuilder.group({});
    this.usuarios = [];

  }
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      nome: [''],
      email:[''],
      nascimento: ['']
    });
  }

  filtrar(){
    this.usuarios = this.usuarioservice.list(this.form.value);

   }

}



