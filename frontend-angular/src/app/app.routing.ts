import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
 import { HomeComponent} from './components/home/home.component';
 import { BlogComponent} from './components/blog/blog.component';
 import { ErrorsComponent} from './components/errors/errors.component';
 import {FormularioComponent} from './components/formulario/formulario.component';
 import { ArticleComponent } from './components/article/article.component';
 import { SearchComponent } from './components/search/search.component';
 import {ArticleNewComponent} from './components/article-new/article-new.component' 
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
 const appRoutes: Routes = [
     {path:'',component:HomeComponent},
     {path:'home',component:HomeComponent},
     {path:'blog',component:BlogComponent},
     {path:'blog/articulo/:id',component:ArticleComponent},
     {path:'blog/crear',component:ArticleNewComponent},
     {path:'blog/editar/:id',component:ArticleEditComponent},
     {path:'buscar/:search',component:SearchComponent},
     {path:'formulario',component:FormularioComponent},
     {path: '**',component:ErrorsComponent}
 ];

 export const appRoutingProviders:any[] =[];
 export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);