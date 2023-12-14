let preguntas = [
    {
        pregunta: "¿Quién lideró la construcción del arca según el Antiguo Testamento?",
        respuestas: ["Moisés", "Noé", "Abraham", "David"],
        respuestaCorrecta: "Noé"
    },
    {
        pregunta: "¿Cuántos años vivió Abraham según la Biblia?",
        respuestas: ["175", "100", "150", "200"],
        respuestaCorrecta: "175"
    },
    {
        pregunta: "¿Quién fue el profeta que realizó milagros, incluyendo la multiplicación de harina y aceite?",
        respuestas: ["Isaías", "Elías", "Jeremías", "Daniel"],
        respuestaCorrecta: "Elías"
    },
    {
        pregunta: "¿Quién escribió la mayoría de los Salmos en el Libro de los Salmos?",
        respuestas: ["David", "Salomón", "Asaf", "Moisés"],
        respuestaCorrecta: "David"
    },
    {
        pregunta: "¿Cuál fue el símbolo del pacto de Dios con Noé después del diluvio?",
        respuestas: ["Arcoiris", "Estrella", "Cruz", "Estrella de David"],
        respuestaCorrecta: "Arco iris"
    },
    {
        pregunta: "¿Quién fue la madre de Samuel, el profeta?",
        respuestas: ["Raquel", "Débora", "Ana", "Abigail"],
        respuestaCorrecta: "Ana"
    },
    {
        pregunta: "¿Cuántos días y noches duró el diluvio durante los tiempos de Noé?",
        respuestas: ["40", "7", "100", "365"],
        respuestaCorrecta: "40"
    },
    {
        pregunta: "¿Quién fue el primer rey de Israel?",
        respuestas: ["Saúl", "David", "Salomón", "Saúl y David"],
        respuestaCorrecta: "Saúl"
    },
    {
        pregunta: "¿Cuántos hermanos tenía José en el Antiguo Testamento?",
        respuestas: ["10", "11", "12", "13"],
        respuestaCorrecta: "11"
    },
    {
        pregunta: "¿Qué instrumento musical usaba David para calmar a Saúl?",
        respuestas: ["Arpa", "Flauta", "Lira", "Trompeta"],
        respuestaCorrecta: "Arpa"
    },
    {
        pregunta: "¿Cuántos días estuvo Jesús en el desierto siendo tentado por Satanás?",
        respuestas: ["20", "30", "40", "50"],
        respuestaCorrecta: "40"
    },
    {
        pregunta: "¿Quién fue el profeta que clamó en el desierto 'Preparad el camino del Señor'?",
        respuestas: ["Isaías", "Jeremías", "Juan el Bautista", "Malaquías"],
        respuestaCorrecta: "Juan el Bautista"
    },
    {
        pregunta: "¿Cuál fue el primer milagro registrado de Jesús?",
        respuestas: ["Multiplicación de panes y peces", "Convertir agua en vino", "Sanar a un ciego", "Resucitar a Lázaro"],
        respuestaCorrecta: "Convertir agua en vino"
    },
    {
        pregunta: "¿Qué ciudad fue conocida como 'la ciudad de David' en el Antiguo Testamento?",
        respuestas: ["Belén", "Jerusalén", "Hebrón", "Nazaret"],
        respuestaCorrecta: "Jerusalén"
    },
    {
        pregunta: "¿Cuál de los apóstoles era conocido como 'el discípulo amado'?",
        respuestas: ["Pedro", "Andrés", "Juan", "Tomás"],
        respuestaCorrecta: "Juan"
    },
    {
        pregunta: "¿Cuál es el último libro del Nuevo Testamento?",
        respuestas: ["Apocalipsis", "Hechos", "Romanos", "1 Juan"],
        respuestaCorrecta: "Apocalipsis"
    },
    {
        pregunta: "¿Cuál fue el tema central del mensaje de Juan el Bautista?",
        respuestas: ["Amor", "Arrepentimiento", "Prosperidad", "Justicia social"],
        respuestaCorrecta: "Arrepentimiento"
    },
    {
        pregunta: "¿Quién fue el sumo sacerdote que interrogó a Jesús antes de su crucifixión?",
        respuestas: ["Caifás", "Anás", "Gamaliel", "Herodes"],
        respuestaCorrecta: "Anás"
    },
    {
        pregunta: "¿Cuántos días después de la resurrección ascendió Jesús al cielo?",
        respuestas: ["20", "30", "40", "50"],
        respuestaCorrecta: "40"
    },
    {
        pregunta: "¿En qué ciudad nació Jesús según el Nuevo Testamento?",
        respuestas: ["Belén", "Jerusalén", "Nazaret", "Hebrón"],
        respuestaCorrecta: "Belén"
    },
    {
        pregunta: "¿Quién fue el apóstol que negó a Jesús tres veces antes del amanecer?",
        respuestas: ["Pedro", "Juan", "Santiago", "Andrés"],
        respuestaCorrecta: "Pedro"
    },
    {
        pregunta: "¿Cuál es la enseñanza principal de Juan 3:16?",
        respuestas: ["El amor de Dios y la salvación por fe en Jesús", "La importancia de la obediencia a la ley", "La necesidad de buenas obras para la salvación", "La recompensa de la riqueza material"],
        respuestaCorrecta: "El amor de Dios y la salvación por fe en Jesús"
    }
];

let correctas = 0;
let incorrectas = 0;
let preguntaActual = 0;

// Elementos HTML
let correctasElement = document.getElementById('correctas');
let incorrectasElement = document.getElementById('incorrectas');
let mensajeDiv = document.createElement('div');
document.body.appendChild(mensajeDiv);

//funcion mostrar pregunta

let mostrarPregunta = () => {
  let pregunta = preguntas[preguntaActual];
  document.getElementById('pregunta').innerText = pregunta.pregunta;

  let botones = document.getElementsByClassName('opcion');
  for (let i = 0; i < botones.length; i++) {
    botones[i].innerText = pregunta.respuestas[i];
    botones[i].onclick = function () {
      verificarRespuesta(pregunta.respuestas[i]);
    };
  }
}

//funcion verificar respuesta

let verificarRespuesta = (respuesta) => {
  if (preguntaActual >= preguntas.length) {
    console.log('No hay más preguntas');
    return;
  }

  let pregunta = preguntas[preguntaActual];
  if (respuesta === pregunta.respuestaCorrecta) {
    correctas++;
    correctasElement.textContent = correctas;
    mensajeDiv.textContent = '¡CORRECTO!';
  } else {
    incorrectas++;
    incorrectasElement.textContent = incorrectas;
    mensajeDiv.textContent = 'Incorrecto, era ' + pregunta.respuestaCorrecta;
  }
  siguientePregunta();
}

//funcion siguiente pregunta

let siguientePregunta = () => {
  preguntaActual++;
  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    mensajeDiv.textContent = '¡Juego terminado!';
    // Puedes agregar aquí lógica para reiniciar el juego o mostrar la puntuación final.
  }
}

// Llama a mostrarPregunta por primera vez cuando se carga la página
mostrarPregunta();
