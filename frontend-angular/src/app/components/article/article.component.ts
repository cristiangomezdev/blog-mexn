import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import swal from 'sweetalert';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[ArticleService]
})
export class ArticleComponent implements OnInit {
public article:Article;
public url:string;
  constructor(
    public _articleService:ArticleService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params=>{
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(response =>{
        if(response.article){
          this.article = response.article;
        }else{
          this._router.navigate(['/home']);
        }
        
      },
      error =>{
        console.log(error);
        this._router.navigate(['/home']);
      }
    )
    });
    
  }
delete(id:any){
  swal({
    title: "estas seguro que quieres eliminar?",
    text: "una vez borrado, no se podra recuperar el archivo",
    icon: "warning",
    dangerMode: true,
    buttons: [true,true],
  })
  .then((willDelete) => {
    if (willDelete) {
      this._articleService.delete(id).subscribe(
        response => {
          this._router.navigate(['/blog']);
        },
        error=>{
          this._router.navigate(['/blog']);
        }
      )
      swal("Se borro el archivo", {
        icon: "success",
      });
    } else {
      swal("No se borro el articulo");
    }
  });

  
 
}
}
