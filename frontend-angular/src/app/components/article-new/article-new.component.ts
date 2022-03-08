import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import {Router,ActivatedRoute, Params} from '@angular/router';
import { Global } from 'src/app/services/global';
import swal from 'sweetalert';


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers:[ArticleService]
})
export class ArticleNewComponent implements OnInit {
public article:Article;
public status:string;
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
   }

  ngOnInit(): void {
  }
  onSubmit() {
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;

          // Alerta
          swal(
            'Articulo creado!!',
            'El artículo se ha creado correctamente',
            'success'
          );

          this._router.navigate(['/blog']);
        } else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
      }
    );
  }

  imageUpload(data:any){
    this.article.image=data.body.image;

  }


}
