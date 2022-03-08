import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()

export class PeliculaService{
    public peliculas:Pelicula[];
    constructor(){
        this.peliculas = [
            new Pelicula("spiderman",2021,"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/07/spider-man-2002-2413817.jpg?itok=CUk-5x0s"),
            new Pelicula("batman",2015,'https://datosjam.net.pe/wp-content/uploads/2021/04/fc64d0f35d17ddfc7d668b24e99f8b95cfe4ea5c.jpg'),
            new Pelicula("avengers",2017,'https://c-cl.cdn.smule.com/s-sf-bck1/arr/43/7e/5aefe2e5-c2f7-461f-9c6d-7cd518e52b47.jpg')
          ];
    }
    holamund(){
        console.log("wow");
    }
    getPeliculas(){
        return this.peliculas;
    }
}