import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'espar'
})

export class EsParPipe implements PipeTransform{
    transform(value:any){
        var espar = false
        if(value % 2 ==0){
            espar = true;
        }
        return "El año es: "+value+" y " +espar;
    }
}