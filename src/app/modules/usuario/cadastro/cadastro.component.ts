import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup} from "@angular/forms";
import { UsuarioService } from "src/app/service/usuario.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form: FormGroup;
  constructor(private formbuilder:FormBuilder, private usuarioService: UsuarioService){
    this.form = this.formbuilder.group({});
  }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      nome: [''],
      email: [''],
      senha: [''],
      nascimento: [''],
      nomePai: [''],
      nomeMae: [''],
      nomeIrmao: ['']
    });


  }
  cadastro(){
    this.usuarioService.add(this.form.value);

  }


}


