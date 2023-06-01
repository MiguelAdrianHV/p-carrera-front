const preguntas = [
  {
    pregunta: "¿Cuál de las siguientes actividades disfrutas más?",
    respuestas: [
      {
        valor: "auditivo",
        respuesta: "a) Escuchar música",
      },
      {
        valor: "visual",
        respuesta: "b) Ver películas",
      },
      {
        valor: "kinestesico",
        respuesta: "c) Bailar con buena música",
      },
    ],
  },
  {
    pregunta: "¿Qué programa de televisión prefieres?",
    respuestas: [
      {
        valor: "visual",
        respuesta: "a) Reportajes de descubrimientos y lugares",
      },
      {
        valor: "kinestesico",
        respuesta: "b) Cómico y de entretenimiento",
      },
      {
        valor: "auditivo",
        respuesta: "c) Noticias del mundo",
      },
    ],
  },
  {
    pregunta: "Cuando conversas con otra persona, tú:",
    respuestas: [
      {
        valor: "auditivo",
        respuesta: "a) La escuchas atentamente",
      },
      {
        valor: "visual",
        respuesta: "b) La observas",
      },
      {
        valor: "kinestesico",
        respuesta: "c) Tiendes a tocarla",
      },
    ],
  },
  {
    pregunta: "Si pudieras adquirir uno de los siguientes artículos, ¿cuál elegirías?",
    respuestas: [
      {
        valor: "kinestesico",
        respuesta: "a) Un jacuzzi",
      },
      {
        valor: "auditivo",
        respuesta: "b) Un estéreo",
      },
      {
        valor: "visual",
        respuesta: "c) Un televisor",
      },
    ],
  },
  {
    pregunta: "¿Qué prefieres hacer un sábado por la tarde?",
    respuestas: [
      {
        valor: "kinestesico",
        respuesta: "a) Quedarte en casa",
      },
      {
        valor: "auditivo",
        respuesta: "b) Ir a un concierto",
      },
      {
        valor: "visual",
        respuesta: "c) Ir al cine",
      },
    ],
  },
  {
    pregunta: "¿Qué tipo de exámenes se te facilitan más?",
    respuestas: [
      {
        valor: "auditivo",
        respuesta: "a) Examen oral",
      },
      {
        valor: "visual",
        respuesta: "b) Examen escrito",
      },
      {
        valor: "kinestesico",
        respuesta: "c) Examen de opción múltiple",
      },
    ],
  },
  {
    pregunta: "¿Cómo te orientas más fácilmente?",
    respuestas: [
      {
        valor: "visual",
        respuesta: "a) Mediante el uso de un mapa",
      },
      {
        valor: "auditivo",
        respuesta: "b) Pidiendo indicaciones",
      },
      {
        valor: "kinestesico",
        respuesta: "c) A través de la intuición",
      },
    ],
  },
  {
    pregunta: "¿En qué prefieres ocupar tu tiempo en un lugar de un descanso?",
    respuestas: [
      {
        valor: "auditivo",
        respuesta: "a) Pensar",
      },
      {
        valor: "visual",
        respuesta: "b) Caminar por los alrededores",
      },
      {
        valor: "kinestesico",
        respuesta: "c) Descansar",
      },
    ],
  },
  {
    pregunta: "¿Qué te halaga más?",
    respuestas: [
      {
        valor: "visual",
        respuesta: "a) Que te digan que tienes buen aspecto",
      },
      {
        valor: "kinestesico",
        respuesta: "b) Que te digan que tienes un trato muy agradable",
      },
      {
        valor: "auditivo",
        respuesta: "c) Que te digan que tienes una conversación interesante",
      },
    ],
  },
  {
    pregunta: "¿Cuál de estos ambientes te atrae más?",
    respuestas: [
      {
        valor: "kinestesico",
        respuesta: "a) Uno en el que se sienta un clima agradable",
      },
      {
        valor: "auditivo",
        respuesta: "b) Uno en el que se escuchen las olas del mar",
      },
      {
        valor: "visual",
        respuesta: "c) Uno con una hermosa vista al océano",
      },
    ],
  },
  {
    pregunta: "¿De qué manera se te facilita aprender algo?",
    respuestas: [
      {
        valor: "auditivo",
        respuesta: "a) Repitiendo en voz alta",
      },
      {
        valor: "visual",
        respuesta: "b) Escribiéndolo varias veces",
      },
      {
        valor: "kinestesico",
        respuesta: "c) Relacionándolo con algo divertido",
      },
    ],
  },
  {
    pregunta: "¿A qué evento preferirías asistir?",
    respuestas: [
      {
        valor: "kinestesico",
        respuesta: "a) A una reunión social",
      },
      {
        valor: "visual",
        respuesta: "b) A una exposición de arte",
      },
      {
        valor: "auditivo",
        respuesta: "c) A una conferencia",
      },
    ],
  },
  {
    pregunta: "¿De qué manera te formas una opinión de otras personas?",
    respuestas: [
      {
        valor: "auditivo",
        respuesta: "a) Por la sinceridad en su voz",
      },
      {
        valor: "kinestesico",
        respuesta: "b) Por la forma de estrecharte la mano",
      },
      {
        valor: "visual",
        respuesta: "c) Por su aspecto",
      },
    ],
  },
  {
    pregunta: "¿Cómo te consideras?",
    respuestas: [
      {
        valor: "visual",
        respuesta: "a) Atlético",
      },
      {
        valor: "auditivo",
        respuesta: "b) Intelectual",
      },
      {
        valor: "kinestesico",
        respuesta: "c) Sociable",
      },
    ],
  },
  {
    pregunta: "¿Qué tipo de películas te gustan más?",
    respuestas: [
      {
        valor: "auditivo",
        respuesta: "a) Clásicas",
      },
      {
        valor: "visual",
        respuesta: "b) De acción",
      },
      {
        valor: "kinestesico",
        respuesta: "c) De amor",
      },
    ],
  },
  {
    pregunta: "¿Cómo prefieres mantenerte en contacto con otra persona?",
    respuestas: [
      {
        valor: "visual",
        respuesta: "a) por correo electrónico",
      },
      {
        valor: "kinestesico",
        respuesta: "b) Tomando un café juntos",
      },
      {
        valor: "auditivo",
        respuesta: "c) Por teléfono",
      },
    ],
  },
  {
    pregunta: "¿Cuál de las siguientes frases se identifican más contigo?",
    respuestas: [
      {
        valor: "kinestesico",
        respuesta: "a) Me gusta que mi coche se sienta bien al conducirlo",
      },
      {
        valor: "auditivo",
        respuesta: "b) Percibo hasta el más ligero ruido que hace mi coche",
      },
      {
        valor: "visual",
        respuesta:
          "c) Es importante que mi coche esté limpio por fuera y por dentro",
      },
    ],
  },
  {
    pregunta: "¿Cómo prefieres pasar el tiempo con tu novia o novio?",
    respuestas: [
      {
        valor: "auditivo",
        respuesta: "a) Conversando",
      },
      {
        valor: "kinestesico",
        respuesta: "b) Acariciándose",
      },
      {
        valor: "visual",
        respuesta: "c) Mirando algo juntos",
      },
    ],
  },
  {
    pregunta: "Si no encuentras las llaves en una bolsa",
    respuestas: [
      {
        valor: "visual",
        respuesta: "a) La buscas mirando",
      },
      {
        valor: "auditivo",
        respuesta: "b) Sacudes la bolsa para oír el ruido",
      },
      {
        valor: "kinestesico",
        respuesta: "c) Buscas al tacto",
      },
    ],
  },
  {
    pregunta: "Cuando tratas de recordar algo, ¿cómo lo haces?",
    respuestas: [
      {
        valor: "visual",
        respuesta: "a) A través de imágenes",
      },
      {
        valor: "kinestesico",
        respuesta: "b) A través de emociones",
      },
      {
        valor: "auditivo",
        respuesta: "c) A través de sonidos",
      },
    ],
  },
  {
    pregunta: "Si tuvieras dinero, ¿qué harías?",
    respuestas: [
      {
        valor: "kinestesico",
        respuesta: "a) Comprar una casa",
      },
      {
        valor: "visual",
        respuesta: "b) Viajar y conocer el mundo",
      },
      {
        valor: "auditivo",
        respuesta: "c) Adquirir un estudio de grabación",
      },
    ],
  },
  {
    pregunta: "¿Con qué frase te identificas más?",
    respuestas: [
      {
        valor: "auditivo",
        respuesta: "a) Reconozco a las personas por su voz",
      },
      {
        valor: "kinestesico",
        respuesta: "b) No recuerdo el aspecto de la gente",
      },
      {
        valor: "visual",
        respuesta: "c) Recuerdo el aspecto de alguien, pero no su nombre",
      },
    ],
  },
  {
    pregunta: "Si tuvieras que quedarte en una isla desierta, ¿qué preferirías llevar contigo?",
    respuestas: [
      {
        valor: "visual",
        respuesta: "a) Algunos buenos libros",
      },
      {
        valor: "auditivo",
        respuesta: "b) Un radio portátil de alta frecuencia",
      },
      {
        valor: "kinestesico",
        respuesta: "c) Golosinas y comida enlatada",
      },
    ],
  },
  {
    pregunta: "¿Cuál de los siguientes entretenimientos prefieres?",
    respuestas: [
      {
        valor: "auditivo",
        respuesta: "a) Tocar un instrumento musical",
      },
      {
        valor: "visual",
        respuesta: "b) Sacar fotografías",
      },
      {
        valor: "kinestesico",
        respuesta: "c) Actividades manuales",
      },
    ],
  },
  {
    pregunta: "¿Cómo es tu forma de vestir?",
    respuestas: [
      {
        valor: "visual",
        respuesta: "a) Impecable",
      },
      {
        valor: "auditivo",
        respuesta: "b) Informal",
      },
      {
        valor: "kinestesico",
        respuesta: "c) Muy informal",
      },
    ],
  },
  {
    pregunta: "¿Qué es lo que más te gusta de una fogata nocturna?",
    respuestas: [
      {
        valor: "kinestesico",
        respuesta: "a) El calor del fuego y los bombones asados",
      },
      {
        valor: "auditivo",
        respuesta: "b) El sonido del fuego quemando la leña",
      },
      {
        valor: "visual",
        respuesta: "c) Mirar el fuego y las estrellas",
      },
    ],
  },
  {
    pregunta: "¿Cómo se te facilita entender algo?",
    respuestas: [
      {
        valor: "auditivo",
        respuesta: "a) Cuando te lo explican verbalmente",
      },
      {
        valor: "visual",
        respuesta: "b) Cuando utilizan medios visuales",
      },
      {
        valor: "kinestesico",
        respuesta: "c) Cuando se realiza a través de alguna actividad",
      },
    ],
  },
  {
    pregunta: "¿Por qué te distingues?",
    respuestas: [
      {
        valor: "kinestesico",
        respuesta: "a) Por tener una gran intuición",
      },
      {
        valor: "auditivo",
        respuesta: "b) Por ser un buen conversador",
      },
      {
        valor: "visual",
        respuesta: "c) Por ser un buen observador",
      },
    ],
  },
  {
    pregunta: "¿Qué es lo que más disfrutas de un amanecer?",
    respuestas: [
      {
        valor: "kinestesico",
        respuesta: "a) La emoción de vivir un nuevo día",
      },
      {
        valor: "visual",
        respuesta: "b) Las tonalidades del cielo",
      },
      {
        valor: "auditivo",
        respuesta: "c) El canto de las aves",
      },
    ],
  },
  {
    pregunta: "Si pudieras elegir ¿qué preferirías ser?",
    respuestas: [
      {
        valor: "kinestesico",
        respuesta: "a) Un gran médico",
      },
      {
        valor: "auditivo",
        respuesta: "b) Un gran músico",
      },
      {
        valor: "visual",
        respuesta: "c) Un gran pintor",
      },
    ],
  },
  {
    pregunta: "Cuando eliges tu ropa, ¿qué es lo más importante para ti?",
    respuestas: [
      {
        valor: "auditivo",
        respuesta: "a) Que sea adecuada",
      },
      {
        valor: "visual",
        respuesta: "b) Que luzca bien",
      },
      {
        valor: "kinestesico",
        respuesta: "c) Que sea cómoda",
      },
    ],
  },
  {
    pregunta: "¿Qué es lo que más disfrutas de una habitación?",
    respuestas: [
      {
        valor: "auditivo",
        respuesta: "a) Que sea silenciosa",
      },
      {
        valor: "kinestesico",
        respuesta: "b) Que sea confortable",
      },
      {
        valor: "visual",
        respuesta: "c) Que esté limpia y ordenada",
      },
    ],
  },
  {
    pregunta: "¿Qué es más sexy para ti?",
    respuestas: [
      {
        valor: "visual",
        respuesta: "a) Una iluminación tenue",
      },
      {
        valor: "kinestesico",
        respuesta: "b) El perfume",
      },
      {
        valor: "auditivo",
        respuesta: "c) Cierto tipo de música",
      },
    ],
  },
  {
    pregunta: "¿A qué tipo de espectáculo preferirías asistir?",
    respuestas: [
      {
        valor: "auditivo",
        respuesta: "a) A un concierto de música",
      },
      {
        valor: "visual",
        respuesta: "b) A un espectáculo de magia",
      },
      {
        valor: "kinestesico",
        respuesta: "c) A una muestra gastronómica",
      },
    ],
  },
  {
    pregunta: "¿Qué te atrae más de una persona?",
    respuestas: [
      {
        valor: "kinestesico",
        respuesta: "a) Su trato y forma de ser",
      },
      {
        valor: "visual",
        respuesta: "b) Su aspecto físico",
      },
      {
        valor: "auditivo",
        respuesta: "c) Su conversación",
      },
    ],
  },
  {
    pregunta: "Cuando vas de compras, ¿en dónde pasas mucho tiempo?",
    respuestas: [
      {
        valor: "visual",
        respuesta: "a) En una librería",
      },
      {
        valor: "kinestesico",
        respuesta: "b) En una perfumería",
      },
      {
        valor: "auditivo",
        respuesta: "c) En una tienda de discos",
      },
    ],
  },
  {
    pregunta: "¿Cuál es tu idea de una noche romántica?",
    respuestas: [
      {
        valor: "visual",
        respuesta: "a) A la luz de las velas",
      },
      {
        valor: "auditivo",
        respuesta: "b) Con música romántica",
      },
      {
        valor: "kinestesico",
        respuesta: "c) Bailando tranquilamente",
      },
    ],
  },
  {
    pregunta: "¿Qué es lo que más disfrutas de viajar?",
    respuestas: [
      {
        valor: "kinestesico",
        respuesta: "a) Conocer personas y hacer nuevos amigos",
      },
      {
        valor: "visual",
        respuesta: "b) Conocer lugares nuevos",
      },
      {
        valor: "auditivo",
        respuesta: "c) Aprender sobre otras costumbres",
      },
    ],
  },
  {
    pregunta: "Cuando estás en la ciudad, ¿qué es lo que más echas de menos del campo?",
    respuestas: [
      {
        valor: "kinestesico",
        respuesta: "a) El aire limpio y refrescante",
      },
      {
        valor: "visual",
        respuesta: "b) Los paisajes",
      },
      {
        valor: "auditivo",
        respuesta: "c) La tranquilidad",
      },
    ],
  },
  {
    pregunta: "Si te ofrecieran uno de los siguientes empleos, ¿cuál elegirías?",
    respuestas: [
      {
        valor: "auditivo",
        respuesta: "a) Director de una estación de radio",
      },
      {
        valor: "kinestesico",
        respuesta: "b) Director de un club deportivo",
      },
      {
        valor: "visual",
        respuesta: "c) Director de una revista",
      },
    ],
  },
];
export default preguntas;
