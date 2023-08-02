
import { Component, Input } from '@angular/core';
import { offer } from 'src/app/interfaces/offer';
import { OfferService } from 'src/app/services/offer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  @Input() params!:string
  offers!:offer[]
  constructor(
    private _OfferService:OfferService
  ){

  }
  ngOnInit(){
    this._OfferService.getOffersParams(this.params).subscribe({
      next: (e)=> this.offers = e,
      error: (error)=>{
      if(error.error = 'validation token error') {localStorage.removeItem('token'); window.location.reload()}
      console.log(error)}  
    })
  }
 

//   offers:offer[] = [
// {id:1, modality:"presencial" ,title:"Buscamos enfermero", company:"clinica cityGost"
// ,description:"Estamos buscando enfermeras/os altamente motivados y comprometidos para unirse a nuestro equipo en la clinica cityGost. Como enfermera/o serás responsable de proporcionar atención y cuidado de calidad a los pacientes" 
// , updateDate:"28/3/2023" , career: "enfermeria" ,
//  text:`siguiendo los estándares éticos y las mejores prácticas médicas. Trabajarás en estrecha colaboración con médicos, personal de enfermería y otros profesionales de la salud para asegurar la mejor atención posible a nuestros pacientes. Proporcionar cuidados de enfermería compasivos y centrados en el paciente.
//  Administrar medicamentos y tratamientos según las prescripciones médicas.
//  Monitorear y evaluar el estado de los pacientes, registrando y comunicando cualquier cambio significativo. `
// },
// {
//   "id": 2,
//   "modality": "presencial",
//   "title": "Buscamos enfermero",
//   "company": "Clínica CityGost",
//   "description": "Estamos buscando enfermeras/os altamente motivados y comprometidos para unirse a nuestro equipo en la Clínica CityGost. Como enfermera/o, serás responsable de proporcionar atención y cuidado de calidad a los pacientes siguiendo los estándares éticos y las mejores prácticas médicas.",
//   "updateDate": "28/3/2023",
//   "career": "enfermería",
//   "text": "Trabajarás en estrecha colaboración con médicos, personal de enfermería y otros profesionales de la salud para asegurar la mejor atención posible a nuestros pacientes. Proporcionarás cuidados de enfermería compasivos y centrados en el paciente, administrando medicamentos y tratamientos según las prescripciones médicas. Además, monitorearás y evaluarás el estado de los pacientes, registrando y comunicando cualquier cambio significativo."
// },
// {
//   "id": 3,
//   "modality": "presencial",
//   "title": "Buscamos programador",
//   "company": "Empresa Tecnológica Innovadora",
//   "description": "Estamos buscando programadores altamente motivados y talentosos para unirse a nuestro equipo en la Empresa Tecnológica Innovadora. Como programador, serás responsable de desarrollar y mantener soluciones innovadoras para nuestros clientes, utilizando las últimas tecnologías y mejores prácticas de programación.",
//   "updateDate": "15/5/2023",
//   "career": "programación",
//   "text": "Trabajarás en estrecha colaboración con un equipo multidisciplinario para diseñar, desarrollar y probar aplicaciones y sistemas. Serás responsable de escribir código limpio y eficiente, realizar pruebas de software y solucionar problemas técnicos. Además, participarás en la mejora continua de nuestros productos y en la investigación de nuevas tecnologías para mantenernos a la vanguardia del mercado."
// },

//   {
//     "id": 4,
//     "modality": "presencial",
//     "title": "Diseñador Industrial",
//     "company": "Empresa de Diseño Industrial",
//     "description": "Estamos buscando un diseñador industrial creativo y motivado para unirse a nuestro equipo en la Empresa de Diseño Industrial. Como diseñador industrial, serás responsable de desarrollar soluciones innovadoras y atractivas para nuestros clientes.",
//     "updateDate": "15/05/2023",
//     "career": "diseño industrial",
//     "text": "Trabajarás en estrecha colaboración con un equipo multidisciplinario para diseñar productos que satisfagan las necesidades del mercado. Serás responsable de investigar tendencias y nuevas tecnologías, desarrollar prototipos y llevar a cabo pruebas de usabilidad para asegurar la calidad del producto final."
//   },
//   {
//     "id": 5,
//     "modality": "remoto",
//     "title": "Programador Frontend",
//     "company": "Agencia Digital",
//     "description": "Estamos buscando un programador frontend experimentado y altamente motivado para unirse a nuestro equipo en la Agencia Digital. Como programador frontend, serás responsable de desarrollar y mantener soluciones web atractivas y fáciles de usar para nuestros clientes.",
//     "updateDate": "20/05/2023",
//     "career": "programación",
//     "text": "Trabajarás en estrecha colaboración con diseñadores y otros desarrolladores para traducir diseños en código limpio y eficiente. Serás responsable de escribir código HTML, CSS y JavaScript de alta calidad y de asegurarte de que las soluciones sean compatibles con diferentes navegadores y dispositivos."
//   },
//   {
//     "id": 6,
//     "modality": "presencial",
//     "title": "Enfermero/a Especialista en Cuidados Intensivos",
//     "company": "Hospital de la Ciudad",
//     "description": "Estamos buscando enfermeros/as altamente capacitados y comprometidos para unirse a nuestro equipo en el Hospital de la Ciudad. Como enfermero/a especialista en cuidados intensivos, serás responsable de brindar atención de alta calidad a los pacientes que requieren cuidados intensivos.",
//     "updateDate": "25/05/2023",
//     "career": "enfermería",
//     "text": "Trabajarás en estrecha colaboración con médicos y otros profesionales de la salud para proporcionar cuidados de enfermería compasivos y centrados en el paciente. Serás responsable de administrar medicamentos y tratamientos según las prescripciones médicas, monitorear y evaluar el estado de los pacientes y comunicar cualquier cambio significativo al equipo médico."
//   },{
//     "id": 7,
//     "modality": "presencial",
//     "title": "Diseñador Industrial",
//     "company": "Empresa de Diseño Industrial",
//     "description": "Estamos buscando un diseñador industrial creativo y motivado para unirse a nuestro equipo en la Empresa de Diseño Industrial. Como diseñador industrial, serás responsable de desarrollar soluciones innovadoras y atractivas para nuestros clientes.",
//     "updateDate": "15/05/2023",
//     "career": "diseño industrial",
//     "text": "Trabajarás en estrecha colaboración con un equipo multidisciplinario para diseñar productos que satisfagan las necesidades del mercado. Serás responsable de investigar tendencias y nuevas tecnologías, desarrollar prototipos y llevar a cabo pruebas de usabilidad para asegurar la calidad del producto final."
//   },{
//     "id": 11,
//     "modality": "remoto",
//     "title": "Analista de Sistemas",
//     "company": "Empresa Tecnológica Innovadora",
//     "description": "Buscamos un analista de sistemas para contribuir al desarrollo y mantenimiento de soluciones tecnológicas. Trabaja en equipo, analiza requisitos, diseña y prueba sistemas eficientes.",
//     "updateDate": "20/06/2023",
//     "career": "analista de sistemas",
//     "text": "Como Analista de Sistemas en nuestra Empresa Tecnológica Innovadora, tendrás la oportunidad de contribuir al desarrollo y mantenimiento de soluciones tecnológicas innovadoras. Serás parte de un equipo dinámico en el que podrás analizar requisitos, diseñar arquitecturas eficientes y poner a prueba sistemas para garantizar su funcionamiento óptimo. Si eres un profesional apasionado por la tecnología y la resolución de problemas, ¡te invitamos a unirte a nuestro equipo y formar parte de nuestra misión de ofrecer soluciones tecnológicas de vanguardia!"
//   }
//   ]

}