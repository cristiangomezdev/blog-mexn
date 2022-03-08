import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import {Router,ActivatedRoute, Params} from '@angular/router';
import { Global } from 'src/app/services/global';
import swal from 'sweetalert';
@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers:[ArticleService]
})
export class ArticleEditComponent implements OnInit {
  public article:Article;
  public status:string;
  public is_edit:boolean;
  public page_title:string;
  public url:string;
  public afuConfig:any;
  
    constructor(
      private _route:ActivatedRoute,
      private _router:Router,
      private _articleService:ArticleService
    ) {
      this.afuConfig = {
        multiple: false,
        formatsAllowed: ".jpg,.png,.gif ,.jpeg",
        maxSize: "50",
        uploadAPI:  {
          url: Global.url+'upload-image'
        },
        theme: "attachPin",
        hideProgressBar: true,
        hideResetBtn: true,
        hideSelectBtn: true,
        autoUpload: false,
       atachPinText:"sube la imagen del articulo"
      }
  
      this.article = new Article('','','',null,null);
      this.is_edit = true;
      this.page_title = 'editar articulo  ';
      this.url = Global.url;
     }

  ngOnInit(): void {
    this.getArticle();
  }
  onSubmit(){
  
    this._articleService.update(this.article._id,this.article).subscribe(
      response => {
        if (response.status = 'success'){
          this.status = 'success';
          this.article = response.article;
          swal('articulo editado','el articulo se edito correctamente',
        'success')
          this._router.navigate(['/blog/articulo', this.article._id]);
        }else{
          this.status = 'error';
        }
      },
      error =>{
        console.log(error);
        swal('articulo no editado','el articulo no se edito correctamente',
        'error')
        this.status = 'error';
      }
    )
  }
  imageUpload(data:any){
    console.log(data)
    let image_data = data.body.image;
    this.article.image = image_data;
  }
  getArticle(){
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
}
