
document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector(".check");

  
  const textos = {
    es: {
      titulo: "Hola, Soy Alberto Márquez",
      subtitulo: "Desarrollador De Software",
      descripcion:
        "Desarrollador de software con 2 años de experiencia en React, React Native, Python y N8N. Enfoque en desarrollo web y móvil, automatización de procesos y creación de soluciones eficientes y escalables.",
      scroll: "Desplázate Hacia Abajo",
      proyectosR: "Proyectos",
      descrip:"Aplicación móvil desarrollada con React Native (Expo) que permite a los usuarios encontrar el parqueadero más cercano según su ubicación actual. La app muestra en tiempo real los espacios disponibles e indica si el estacionamiento es público o privado, así como si es gratuito o de pago. Se integra con la API de Google Maps para la geolocalización y visualización de los lugares, y utiliza Firebase como base de datos para la gestión de la información y sincronización de los datos.",
      ver:"Ver en:",
      tec:"Tecnologías utilizadas:",
      descrip2:"Aplicación web de e-commerce llamada SKICK'S, especializada en la venta de zapatos. Desarrollada con React para el frontend, ofrece una interfaz moderna y responsiva utilizando Tailwind CSS. El backend está implementado con Node.js, que expone una API REST encargada de la comunicación con una base de datos SQL, donde se gestionan productos, usuarios y pedidos. La plataforma permite explorar el catálogo, filtrar por categorías, realizar compras seguras y gestionar cuentas de usuario de manera eficiente.",
      ver1:"Ver en:",
      tec1:"Tecnologías utilizadas:",
      tecnologia: "Tecnologias"     
    },
    en: {

      titulo: "Hi, I'm Alberto Márquez",
      subtitulo: "Software Developer",
      descripcion:
        "Software developer with 2 years of experience in React, React Native, Python, and N8N. Focused on web and mobile development, process automation, and creating efficient and scalable solutions.",
      scroll: "Scroll Down",
      proyectosR: "Projects",
      descrip:"Mobile application developed with React Native (Expo) that allows users to find the nearest parking lot based on their current location. The app displays available spaces in real time and indicates whether the parking is public or private, as well as whether it is free or paid. It integrates with the Google Maps API for geolocation and visualization of locations, and uses Firebase as the database for information management and data synchronization.",
      ver: "View on:",
      tec:"Technologies used:",
      descrip2:"E-commerce web application called SKICK'S, specialized in the sale of shoes. Developed with React for the frontend, it offers a modern and responsive interface using Tailwind CSS. The backend is implemented with Node.js, exposing a REST API responsible for communication with an SQL database, where products, users, and orders are managed. The platform allows users to browse the catalog, filter by categories, make secure purchases, and efficiently manage their accounts.",
      ver1: "View on:",
      tec1:"Technologies used:",
      tecnologia: "Stack"
    },
  };

  

  const titulo = document.querySelector(".titulo");
  const descrip = document.querySelector(".descrip")
  const proyectosR = document.querySelector(".proyectosR");
  const subtitulo = document.querySelector(".subtitulo");
  const descripcion = document.querySelector(".descripcion");
  const scrollText = document.querySelector(".container_mouse p");
  const ver = document.querySelector(".ver");
  const ver1 = document.querySelector(".ver1")
  const tec = document.querySelector(".tec");
  const tec1 = document.querySelector(".tec1");
  const descrip2 = document.querySelector(".descrip-2");
  const tecnologia = document.querySelector(".tecnologia");


  
  function cambiarIdioma(idioma) {
    descrip.textContent = textos[idioma].descrip;
    titulo.textContent = textos[idioma].titulo;
    subtitulo.textContent = textos[idioma].subtitulo;
    descripcion.textContent = textos[idioma].descripcion;
    scrollText.textContent = textos[idioma].scroll;
    proyectosR.textContent = textos[idioma].proyectosR;
    ver.textContent = textos[idioma].ver;
    tec.textContent = textos[idioma].tec;
    descrip2.textContent = textos[idioma].descrip2;
    ver1.textContent = textos[idioma].ver1;
    tec1.textContent = textos[idioma].tec1;
    tecnologia.textContent=textos[idioma].tecnologia;

    
  }

 
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      cambiarIdioma("en");
    } else {
      cambiarIdioma("es");
    }
  });


  cambiarIdioma("es");
});
