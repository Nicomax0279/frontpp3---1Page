import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-nav-bar',
  templateUrl: './basic-nav-bar.component.html',
  styleUrls: ['./basic-nav-bar.component.css']
})
export class basicNavBarComponent {

  isScreenWideEnough(): boolean {
    // Define un ancho de pantalla mínimo (en píxeles) a partir del cual se mostrarán los botones de texto
    const minWidthForTextButtons = 768; // Puedes ajustar este valor según tus necesidades

    // Obtiene el ancho actual de la ventana del navegador
    const windowWidth = window.innerWidth;

    // Compara el ancho de la pantalla con el ancho mínimo definido
    return windowWidth >= minWidthForTextButtons;
  }
}
