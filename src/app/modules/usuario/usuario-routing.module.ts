import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ListagemComponent } from "./listagem/listagem.component";

const routes: Routes = [
  { path:'usuario',
    children: [
      {path: '', redirectTo: 'usuario', pathMatch: 'full'},
      {path: 'cadastrar',component: CadastroComponent},
      {path: 'listagem', component: ListagemComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule{

}
