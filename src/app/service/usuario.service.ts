import { variable } from "@angular/compiler/src/output/output_ast";
import { Injectable} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Usuario } from "../model/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Usuario[];

  constructor() {
    this.usuarios = [];
  }

  remove(index: number) {
    this.usuarios.splice(index, 1);
  }

  add(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  list(filter: Usuario) {
    return this.usuarios.filter(usuario => {
      let isTrue = true;
      if(filter.nome && usuario.nome !== filter.nome) {
        isTrue = false;
      }

      if (filter.email && usuario.email !== filter.email) {
        isTrue = false;
      }

      if (filter.nascimento && usuario.nascimento !== filter.nascimento) {
        isTrue = false;
      }

      return isTrue;
    });
  }


}
