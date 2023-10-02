import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infoContent',
  templateUrl: './infoContent.component.html',
  styleUrls: ['./infoContent.component.css'],
})
export class InfoContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  questions: { question: string; response: string }[] = [
    {
      question:
        '¿Cómo puedo registrarme en "LookingFor" como estudiante o graduado?',
      response:
        'dirígete a /signup o desde en formulario de inicio de sección de estudiante en la barra de navegación luego completa en formulario con tu email institucional itb, y tras una validación via email ya estarás listo para disfrutar la experiencia lookingfor ',
  },{question: '¿como recupero mi contraseña?' , response: 'Click e en validación de códigos o en escudo en la barra de navegación allí seleccione cambiar contraseña ,ingrese en código que le llego a su email , sino llego ingrese su email y presione generar código , luego ingrese email , código y su nueva contraseña'},
    {question: '¿que hago si me inscribí por error?' , response: 'no se preocupe luego de escuchar varias situaciones parecidas hemos decidido agregar una confirmación adicionan y la opción cancelar inscripción para una futura actualización por ahora comuníquese con soporte'}
  ];
}
