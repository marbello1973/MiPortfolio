import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //servicio backend
  data: {name: string, image: string, description: string}[]= [
    {name: 'GitHub', image: 'assets/iconos/git.svg', description: ''},
    {name: 'JavaScript', image: 'assets/iconos/javascript.svg', description: ''},
    {name: 'TypeScript', image: 'assets/iconos/ts.svg', description: 'TS Typado'},
    {name: 'Java', image: 'assets/iconos/java.svg', description: ''}, 
    {name: 'PostgreSQL', image: 'assets/postgre.png', description: ''},
    {name: 'MongoDB', image: 'assets/mongodb.png', description: ''},
    {name: 'H2', image: 'assets/h2.png', description: 'H2 Database'},  
    {name: 'NodeJS', image: 'assets/node.png', description: ''},
    {name: 'Spring-Boot', image: 'assets/spring.svg', description: ''},
  ]
  //servicio frontend
  dataFront: {name: string, image: string, description: string}[]= [
    {name: 'Angular', image: 'assets/iconos/angular.svg', description: ''},
    {name: 'JavasCript', image: 'assets/iconos/javascript.svg', description: ''},
    {name: 'Typescript', image: 'assets/iconos/ts.svg', description: 'TS Typado'},
    {name: 'React', image: 'assets/iconos/react.svg', description: ''}, 
    {name: 'HTML', image: 'assets/iconos/html.svg', description: ''},
    {name: 'CSS', image: 'assets/iconos/css.svg', description: ''},
    {name: 'Jest', image: 'assets/iconos/jest.svg', description: 'H2 Database'},  
    
  ]

  private dataProject: {id: number, name: string, imagen: string, url: string, title: string, subtitle:{[key:string]: string}[],  description: string, tecnologies: string[]}[]= [
    {
      id: 1,
      name: 'Gym-Go', 
      imagen: 'assets/project/gymgo.png', 
      url: 'https://gym-go-five.vercel.app/',
      title: 'Estilo de vida saludable y activo',
      subtitle: [          
        {algoritmos:"Descubre rutinas de ejercicios adaptadas a tus preferencias y objetivos, gracias a nuestros avanzados algoritmos de aprendizaje."},
        {recursos:"Accede a una variada biblioteca de materiales interactivos que hacen que tu viaje de aprendizaje sea atractivo y educativo."},
        {streaming:"Vive una experiencia de transmisión de video mejorada, desde sesiones de ejercicios en tiempo real hasta tutoriales guiados por expertos."},
        {cuestionarios:"Personaliza tus pruebas de conocimientos para evaluar tu progreso y recibir retroalimentación específica, llevando tus habilidades al siguiente nivel."},       
      ],
      description:'Desarrollada con JavaScript, Node.js y Express, utiliza PostgreSQL con Sequelize para la gestión de datos. Además, integra JWT y bcrypt para garantizar la seguridad de la autenticación y el cifrado de contraseñas.' , 
      tecnologies: 
        ['JavasCript', 'Nodejs', 'Express', 'PostrgreSQL', 'Sequelize', 'Jwt', 'Bcrypt']
      },
    {
      id: 2,
      name: 'Contries', 
      imagen: 'assets/project/paises.png', 
      url: 'https://country-app-fawn-three.vercel.app/countries/by-region',
      title: 'Información detallada sobre países de todo el mundo',
      subtitle: [
        { algoritmos: 'Descubre información completa y detallada sobre una amplia gama de países, desde datos demográficos hasta detalles geográficos.'},
        { recursos: 'Disfruta de una interfaz fácil de usar que te permite navegar y explorar la información de manera eficiente.' },
        { streaming: 'Con imágenes y diseño visual atractivo, la aplicación te sumerge en la riqueza cultural y geográfica de cada país.' },
        { cuestionarios: 'Pon a prueba tus conocimientos con cuestionarios interactivos.' },
      ],
      description: 'Aplicación web desarrollada en Angular que te permite explorar información detallada sobre países de todo el mundo. Interfaz intuitiva y atractiva, la aplicación aprovecha una API de países para proporcionar datos actualizados y precisos.', 
      tecnologies: 
        ['Angular', 'Typescript', 'HTML', 'CSS', 'Bootstrap', 'API']
    },
    {
      id:3,
      name: 'Rick and Morty', 
      imagen: 'assets/project/rick.png', 
      url: 'https://03-pi-marbello1973.vercel.app/',
      title: 'Explora el universo de Rick and Morty',
      subtitle: [
        { algoritmos:'Viaja a través de los episodios, personajes y ubicaciones de "Rick and Morty" con detalles precisos y datos curiosos.'},
        { recursos: 'Disfruta de una experiencia interactiva que hace que aprender sobre la serie sea emocionante y entretenido.' },
        { streaming: 'Sumérgete en el universo animado con un diseño visual atractivo que refleja la esencia única de la serie.' },
        { cuestionarios: 'Evalúa tus conocimientos sobre "Rick and Morty" de manera personalizada y lleva tu comprensión de la serie a nuevas alturas.'},
      ],
      description: 'Experiencia sólida en React, JavaScript, HTML y CSS, junto con integración de la API Rick and Morty. Capacidad para desarrollar experiencias interactivas y educativas basadas en el universo de la serie.', 
      tecnologies: 
        ['React', 'JavaScript', 'HTML', 'CSS', 'API Rick and Morty']
    },
    {
      id:4,
      name: 'Task-List', 
      imagen: 'assets/project/task.png', 
      url: 'https://mi-task-list-marbello1973.vercel.app/',
      title: 'Organiza tus tareas diarias',
      subtitle: [
        { algoritmos:'Un espacio digital para mantener un seguimiento ordenado de tus responsabilidades cotidianas.'},
        { recursos: 'Task-List está diseñada para ser intuitiva, permitiéndote navegar de manera eficiente y acceder a las funciones esenciales de manera rápida y sencilla.' },
        { streaming: 'Task-List te permite evaluar tu avance en la realización de tareas. Establece metas, marca tareas completadas y recibe estadísticas visuales para mejorar tu productividad.' },
        { cuestionarios: 'Mantén un flujo de trabajo eficiente y cumple con tus plazos de manera consistente.'},

      ],
      description: 'Es una aplicación simple y eficiente desarrollada en React y JavaScript que ayuda a los usuarios a gestionar sus tareas diarias de manera organizada. Diseñada con una interfaz intuitiva y fácil de usar, la aplicación permite a los usuarios agregar, editar y eliminar tareas, así como realizar un seguimiento de su progreso.', 
      tecnologies: 
        ['React', 'JavaScript', 'HTML', 'CSS', 'API Rick and Morty']
    },
    {
      id:5,
      name: 'Rita Uttara', 
      imagen: 'assets/project/rita.png', 
      url: 'https://ritauttara.netlify.app/',
      title: '¡Vive cada etapa sin sufrir!',
      subtitle: [
        { algoritmos:'Descubre procesos personalizados para cada etapa de tu viaje sin sufrir, gracias a nuestros avanzados algoritmos de bienestar emocional.'},
        { recursos: 'Disfruta de una experiencia interactiva que hace que aprender sobre la serie sea emocionante y entretenido.' },
        { streaming: 'Disfruta de sesiones de streaming diseñadas para fortalecer tu salud mental. Desde charlas motivacionales hasta actividades de relajación, te ofrecemos contenido streaming que se adapta a tus necesidades emocionales' },
        { cuestionarios: 'Evalúa tu bienestar emocional con cuestionarios personalizados. Obtén retroalimentación específica y consejos adaptados a tus respuestas, guiándote hacia una vida sin sufrimientos innecesarios.'},
      ],
      description: 'Desarrollé el backend con Typescript, Node.js y Express. Implementé middleware para roles de usuarios, JWT para la autenticación. Garanticé la seguridad de las contraseñas cifrado bcrypt en PostgreSQL, y definí modelos MVC con Sequelize.', 
      tecnologies: 
        ['Typescript', 'NodeJS', 'PostrgrSQL', 'Sequelize', 'Express', 'Bcrypt','Jwt', 'Nodemailer']
    },
    {
      id:6,
      name: 'Encriptador', 
      imagen: 'assets/project/Encripter.png', 
      url: 'https://marbello1973.github.io/Encripter/',
      title: '¡Encriptador de palabras!',
      subtitle: [
        { algoritmos:'Descubre procesos personalizados para cada etapa de tu viaje sin sufrir, gracias a nuestros avanzados algoritmos de bienestar emocional.'},
        { recursos: 'Disfruta de una experiencia interactiva que hace que aprender sobre la serie sea emocionante y entretenido.' },
        { streaming: 'Disfruta de sesiones de streaming diseñadas para fortalecer tu salud mental. Desde charlas motivacionales hasta actividades de relajación, te ofrecemos contenido streaming que se adapta a tus necesidades emocionales' },
        { cuestionarios: 'Evalúa tu bienestar emocional con cuestionarios personalizados. Obtén retroalimentación específica y consejos adaptados a tus respuestas, guiándote hacia una vida sin sufrimientos innecesarios.'},
      ],
      description: 'En resumen, el encriptador desarrollado con CSS, HTML y JavaScript es una aplicación web que permite a los usuarios cifrar y descifrar palabras utilizando tecnologías web estándar para el diseño, la interacción y la lógica.', 
      tecnologies: 
        ['JavaScript', 'HTML', 'CSS']
    },
    {
      id:7,
      name: 'Seguimiento de gastos java', 
      imagen: 'assets/project/gastos.png', 
      url: 'https://github.com/marbello1973/Upskilling-Java-pf/tree/main/Admin-Gastos',
      title: '¡Seguimiento de gastos!',
      subtitle: [
        { algoritmos:'Descubre procesos personalizados para cada etapa de tu viaje sin sufrir, gracias a nuestros avanzados algoritmos de bienestar emocional.'},
        { recursos: 'Disfruta de una experiencia interactiva que hace que aprender sobre la serie sea emocionante y entretenido.' },
        { streaming: 'Disfruta de sesiones de streaming diseñadas para fortalecer tu salud mental. Desde charlas motivacionales hasta actividades de relajación, te ofrecemos contenido streaming que se adapta a tus necesidades emocionales' },
        { cuestionarios: 'Evalúa tu bienestar emocional con cuestionarios personalizados. Obtén retroalimentación específica y consejos adaptados a tus respuestas, guiándote hacia una vida sin sufrimientos innecesarios.'},
      ],
      description: 'El proyecto Seguimiento de gastos Java es una aplicación web desarrollada utilizando el framework Spring Boot en Java. Permite a los usuarios llevar un registro detallado de sus gastos, incluyendo categorías, montos y fechas.', 
      tecnologies: 
        ['java', 'spring-boot']
    },
    
  ] 


  //https://github.com/marbello1973/Upskilling-Java-pf/tree/main/Admin-Gastos
  
  id: number = 0;
  constructor() {
    this.id = this.id;
   }

  getDataFront(){
    return this.dataFront;
  }

  getDataProject(){
    return this.dataProject;
  }

  getData(){
    return this.data;
  } 
}
