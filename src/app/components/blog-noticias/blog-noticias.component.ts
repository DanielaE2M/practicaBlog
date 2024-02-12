import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia.interface';
import { event } from 'jquery';

@Component({
  selector: 'app-blog-noticias',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog-noticias.component.html',
  styleUrl: './blog-noticias.component.css'
})
export class BlogNoticiasComponent {

  @Input () noticias: INoticia [] = [];

  ngOnInit(): void{
    this.cargarNoticia()
  }

  cargarNoticia():any {
    let html = "";
    this.noticias.forEach(publicacion => {
      html += `<p>${publicacion.Titulo} <br> 
                ${publicacion.Imagen} <br>
                ${publicacion.Cuerpo} <br>
                ${publicacion.Fecha} <br>
                </p>`
    })
     return html;
}

  nuevaNoticia: INoticia = {Titulo:"", Imagen:"", Cuerpo:"", Fecha:""}
  @Output() noticiaEmitida : EventEmitter<INoticia> = new EventEmitter()

  publicarNoticia(): void {
    if(this.nuevaNoticia.Titulo !==""&&this.nuevaNoticia.Imagen !==""&&this.nuevaNoticia.Cuerpo !==""&&this.nuevaNoticia.Fecha !=="") {
      this.noticiaEmitida.emit(this.nuevaNoticia)
      this.nuevaNoticia = {Titulo:"", Imagen:"", Cuerpo:"", Fecha:""}
    } else{
      alert("No puede tener campos vacíos")
    }
  }
}
