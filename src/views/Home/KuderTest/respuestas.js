const respuestas = [
  [
    { "texto": "Ser un(a) artista.", "valor": 'musical' },
    { "texto": "Dirigir la crianza de ganado", "valor": 'exterior' }
  ],
  [
    { "texto": "Conocer datos útiles para navegar en internet.", "valor": 'mecanica' },
    { "texto": "Dar charlas sobre química.", "valor": 'cientifica' }
  ],
  [
    { "texto": "Trabajar en una agencia de publicidad.", "valor": 'persuasiva' },// 5
    { "texto": "Estudiar métodos de regadío.", "valor": 'exterior' }
  ],
  [
    { "texto": "Tomar clases de locución y expresión corporal.", "valor": 'artistica' },
    { "texto": "Realizar experimentos.", "valor": 'cientifica' }
  ],
  [
    { "texto": "Ilustrar cuentos infantiles.", "valor": 'artistica' },
    { "texto": "Ser protagonista de una obra de teatro.", "valor": 'literaria' } // 10
  ],
  [
    { "texto": "Animar un programa de televisión.", "valor": 'persuasiva' },
    { "texto": "Crear el vestuario para una obra de teatro.", "valor": 'artistica' }
  ],
  [
    { "texto": "Ser guía de excursiones.", "valor": 'exterior' },
    { "texto": "Participar en campaña de ayuda a niños discapacitados.", "valor": 'servicio' }
  ],
  [
    { "texto": "Aprender bailes folclóricos.", "valor": 'musical' }, // 15
    { "texto": "Ser escultor(a).", "valor": 'artistica' }
  ],
  [
    { "texto": "Trabajar como soporte técnico computacional.", "valor": 'calculo' },
    { "texto": "Asistir a una conferencia sobre los derechos de los trabajadores.", "valor": 'persuasiva' }
  ],
  [
    { "texto": "Enseñar cómo funciona un motor de avión.", "valor": 'mecanica' },
    { "texto": "Dirigir la clasificación de fruta según su calidad.", "valor": 'exterior' } // 20
  ],
  [
    { "texto": "Participar en un Comité de Navidad recolectando juguetes para niños de escasos recursos.", "valor": 'servicio' },
    { "texto": "Componer la música para un poema.", "valor": 'musical' }
  ],
  [
    { "texto": "Crear afiches para una agencia de publicidad.", "valor": 'persuasiva' },
    { "texto": "Saber armar y desarmar computadores.", "valor": 'mecanica' }
  ],
  [
    { "texto": "Intervenir en un conflicto familiar ante tribunales de justicia.", "valor": 'servicio' }, // 25
    { "texto": "Ser relacionador(a) pública ante una empresa.", "valor": 'oficina' }
  ],
  [
    { "texto": "Dirigir una función teatral de aficionados.", "valor": 'artistica' },
    { "texto": "Investigar sobre los nuevos usos de las matemáticas.", "valor": 'calculo' }
  ],
  [
    { "texto": "Aprender estadística.", "valor": 'calculo' },
    { "texto": "Ser conocido(a) como un(a) buen(a) escritor(a).", "valor": 'literaria' }// 30
  ],
[
    { "texto": "Ser programador(a) en computación.", "valor": 'calculo' },
    { "texto": "Manejar aparatos y maquinas industriales como prensas, tornos, etc.", "valor": 'mecanica' }
  ],
  [
    { "texto": "Efectuar análisis de muestras de sangre.", "valor": 'cientifica' },
    { "texto": "Investigar las causas de enfermedades mentales.", "valor": 'servicio' }
  ],
  [
    { "texto": "Pertenecer a una Academia Literaria.", "valor": 'literaria' }, //35
    { "texto": "Tener a cargo el equipo agrícola en su fundo.", "valor": 'mecanica' }
  ],
  [
    { "texto": "Pertenecer a un grupo musical.", "valor": 'musical' },
    { "texto": "Ser dentista.", "valor": 'cientifica' }
  ],
  [
    { "texto": "Ayudar a niños con dificultades de aprendizaje.", "valor": 'servicio' },
    { "texto": "Dirigir investigaciones sobre televisión.", "valor": 'persuasiva' }// 40
  ],
  [
    { "texto": "Realizar un estudio sobre el desarrollo económico en una empresa.", "valor": 'oficina' },
    { "texto": "Pintar loza.", "valor": 'artistica' }
  ],
  [
    { "texto": "Ser gerente de ventas de una revista.", "valor": 'oficina' },
    { "texto": "Manejar bases de datos.", "valor": 'calculo' }
  ],
  [
    { "texto": "Investigar los roles del hombre y de la mujer en algunas sociedades primitivas.", "valor": 'persuasiva' },//  45
    { "texto": "Inventar nuevas formas de poesía.", "valor": 'musical' }
  ],
  [
    { "texto": "Trabajar en un laboratorio.", "valor": 'cientifica' },
    { "texto": "Entrevistar aspirantes a un empleo.", "valor": 'persuasiva' }
  ],
  [
    { "texto": "Ser químico(a).", "valor": 'cientifica' },
    { "texto": "Leer artículos acerca de los avances tecnológicos en computación.", "valor": 'calculo' } //50
  ],
  [
    { "texto": "Seguir un curso de biología.", "valor": 'cientifica' },
    { "texto": "Escribir una obra de teatro.", "valor": 'literaria' }
  ],
  [
    { "texto": "Dar una conferencia sobre literatura universal.", "valor": 'literaria' },
    { "texto": "Asistir a la ceremonia de entrega de los premios Oscar.", "valor": 'persuasiva' }
  ],
  [
    { "texto": "Ser el (la) director(a) de una película.", "valor": 'artistica' },// 55
    { "texto": "Ser experto(a) en cuidar árboles.", "valor": 'exterior' }
  ],
  [
    { "texto": "Mantener en buen estado y reparar calculadoras electrónicas.", "valor": 'mecanica' },
    { "texto": "Componer música.", "valor": 'musical' }
  ],
  [
    { "texto": "Ayudar en un servicio de Asistencia Social.", "valor": 'servicio' },
    { "texto": "Arreglar un motor.", "valor": 'mecanica' }// 60
  ],
  [
    { "texto": "Calcular el costo de producción de un artículo.", "valor": 'calculo' },
    { "texto": "Recolectar dinero para obras sociales.", "valor": 'servicio' }
  ],
   [
    { "texto": "Solucionar conflictos interpersonales.", "valor": 'servicio' },
    { "texto": "Escribir el guion para una película.", "valor": 'literaria' }
  ],
  [
    { "texto": "Diseñar equipos para excursionistas.", "valor": 'mecanica' },//65
    { "texto": "Confeccionar el presupuesto de materiales para una empresa.", "valor": 'oficina' }
  ],
  [
    { "texto": "Ser el rostro de un producto recién lanzado al mercado.", "valor": 'persuasiva' },
    { "texto": "Dictar un curso sobre sistemas de rendimiento en las oficinas.", "valor": 'oficina' }
  ],
  [
    { "texto": "Analizar la calidad de la tierra para fines agrícolas.", "valor": 'exterior' },
    { "texto": "Instalar redes internas en diversas empresas.", "valor": 'calculo' }//70
  ],
  [
    { "texto": "Asistir a una conferencia sobre nuevos métodos para aprovechar la madera.", "valor": 'exterior' },
    { "texto": "Realizar el balance anual de una empresa.", "valor": 'oficina' }
  ],
  [
    { "texto": "Planificar campañas de publicidad.", "valor": 'oficina' },
    { "texto": "Estudiar ballet.", "valor": 'musical' }
  ],
  [
    { "texto": "Hacer análisis químicos de nuevos productos.", "valor": 'cientifica' },//75
    { "texto": "Cultivar verduras para el mercado.", "valor": 'exterior' }
  ],
  [
    { "texto": "Reparar fallas de artefactos electrónicos (planchas, jugueras, secadores de pelo, etc).", "valor": 'mecanica' },
    { "texto": "Escribir para una revista de arte.", "valor": 'artistica' }
  ],
  [
    { "texto": "Arreglar música para una orquesta.", "valor": 'musical' },
    { "texto": "Inventar problemas matemáticos.", "valor": 'calculo' }//80
  ],
  [
    { "texto": "Recomendar sitios de veraneo.", "valor": 'exterior' },
    { "texto": "Ser el (la) autor(a) de un libro.", "valor": 'literaria' }
  ],
  [
    { "texto": "Seguir un curso de literatura moderna.", "valor": 'literaria' },
    { "texto": "Calcular las ganancias y pérdidas de un producto.", "valor": 'oficina' }
  ],
  [
    { "texto": "Diseñar joyas.", "valor": 'artistica' },//85
    { "texto": "Participar en una campaña contra el alcoholismo.", "valor": 'servicio' }
  ],
  [
    { "texto": "Dirigir y supervisar a los empleados de una oficina.", "valor": 'oficina' },
    { "texto": "Ser secretario(a) de un científico famoso.", "valor": 'cientifica' }
  ],
  [
    { "texto": "Enseñar sobre los diferentes estilos literarios.", "valor": 'literaria' },
    { "texto": "Cantar en un coro.", "valor": 'musical' }//90
  ]
]

export default respuestas;