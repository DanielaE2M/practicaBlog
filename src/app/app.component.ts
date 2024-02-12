import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogNoticiasComponent } from './components/blog-noticias/blog-noticias.component';
import { INoticia } from './interfaces/inoticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogNoticiasComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrNoticias: INoticia [] = [
    {
      Titulo: "UNIR MEJOR UNIVERSIDAD",
      Imagen: "imagen",
      Cuerpo: "La UNIR ha sido nombrada como la mejor universidad de España.",
      Fecha: "01/01/2023",
    },
    {
      Titulo: "UNIR LOS MEJORES ALUMNOS",
      Imagen: "imagen2",
      Cuerpo: "La Universidad de la Rioja tiene a los alumnos más cualificados de España.",
      Fecha: "01/02/2023",
    }
  ]

  insertarNoticia($event:any) : void{
    this.arrNoticias.push($event);
  }
}
