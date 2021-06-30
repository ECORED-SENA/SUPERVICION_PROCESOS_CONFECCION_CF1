export default {
  global: {
    componenteFormativo: 'Sistemas de producción',
    descripcionCurso:
      'En este componente se aborda los sistemas de producción del proceso de confección de prendas de vestir, permitiendo contextualizar al aprendiz en el proceso productivo de la supervisión de procesos de confección.<br/><br/>Se realiza un recorrido de terminología, conceptos, definiciones de los sistemas de producción y su enfoque en la cadena productiva de la confección industrial de prendas de vestir, para fortalecer el nivel competitivo de las empresas del sector.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Sistemas de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Producción: concepto y terminología',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estructura del sistema de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Componentes de un sistema de producción',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación de los sistemas de producción',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Modelos de sistemas de producción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Tipos de sistemas de producción para procesos de Confección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Sistema de producción lineal',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Sistemas de producción por celdas',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Sistemas de producción modular',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Máquinas de producción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Ordenes de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-play-circle',
            numero: '6.1',
            titulo: 'Hojas de ruta',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Fichas técnicas',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-play-circle',
            numero: '6.3',
            titulo: 'Consumo de materiales',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Sistemas de gestión de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Seguridad e higiene en la industria',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Normas técnicas de salud',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'CAmbientales para plantas de confección',
            hash: 't_7_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ananth, I., Seshadri, S., & Vasher, R. (2010). Administración de la cadena de suministro Toyota. México: Mc Grow Hill.',
    },
    {
      referencia:
        'Bonilla Pastor, E. (2007). Diseño de un sistema de producción modular en una mediana empresa de confecciones. Lima, Perú: Fondoeditorial@ulima.edu.pe.',
    },
    {
      referencia:
        'Carrillo, J., Gomis, R. (2003). “Los retos de las maquiladoras ante la pérdida de competitividad”, Comercio Exterior, Vol. 53, No. 4, pp. 318-327, abril.',
    },
    {
      referencia:
        'Cero Accidentes. (2018). ¿Qué normas de seguridad y salud aplican al sector textil?. 28-05-2021, de Cero Accidentes 	Sitio web: ',
      link:
        'https://www.ceroaccidentes.pe/que-normas-de-seguridad-y-salud-aplican-al-sector-textil/',
    },
    {
      referencia:
        'Costa, M. T., & Duch, N. (2010). La renovación del sector textil- confección en España. Barcelona: Instituto de economía de Barcelona. ',
    },
    {
      referencia:
        'Chiavenato, I., y Villamizar, G. (2001). Administración (3ª ed., Págs. 147 - 200). Bogotá [etc.]: McGraw-Hill.',
    },
    {
      referencia:
        'Everett E. Adam, R. J. (1991). Administracion de la produccion y las operaciones: conceptos, modelos y funcionamiento. Pearson Educación.',
    },
    {
      referencia:
        'Gómez, E. (1996). Aseguramiento de calidad en compras. Bogotá: RAM Editores.',
    },
    {
      referencia:
        'Hincapié, S. and Saker, F. (2014). “Implementar un sistema de producción para la confección de camisas en Medellín para la marca Camisería Europea”. Tesis de grado, Universidad Pontificia Bolivariana, Medellín.',
    },
    {
      referencia:
        'Huamán Oscco, W. (2003). Ingeniería en la capacitación de operarios para la industria de la confección textil. Lima, Perú: Universidad Nacional Mayor de San Marcos. Facultad de Ingeniería Industrial. EAP.',
    },
    {
      referencia:
        'Krajewski, L. J., Ritzman, L. P., & Malhotra, M. K. (2008). Administración de operaciones. Procesos y cadenas de valor. Mexico: Pearson Educación.',
    },
    {
      referencia:
        'Lockyer, K. (1998). La Producción industrial. Mexico: Alfaomega.',
    },
    {
      referencia:
        'Medina, J. (2007). Modelo Integral de la productividad. Bogotá: Fondo de publicaciones Universidad Sergio Arboleda.',
    },
    {
      referencia:
        'Medina, J., & Cordero, N. (2010). Gestión Estratégica de la Calidad. Bogotá: Fondo de publicaciones Universidad Sergio Arboleda. Ministerio de Comercio, Industria y Turismo. (2009). Desarrollando sectores de clase mundial en Colombia. Bogotá: Autor. Organización de las Naciones Unidas para el Desarrollo Industrial. (S.f.). Guía para el Desarrollo de Proveedores. Recuperado de ',
      link:
        'https://www.unido.org/fileadmin/import/9605_GuaparelDesarrollodeProveedores.pdf',
    },
    {
      referencia:
        'NAHMIAS, S. (1999.). Análisis de la Producción y las Operaciones. Ed. CECSA, 1999. CECSA,.',
    },
    {
      referencia:
        'P.A. Sánchez, F. Ceballos, G. Sánchez Torres. (2015). Análisis del proceso productivo de una empresa de confecciones: modelación y simulación. Ciencia e Ingeniería Neogranadina, 25 (2), pp 137 - 150, DOI: ',
      link: 'http://dx.doi. org/10.18359/rcin.1436',
    },
    {
      referencia:
        'Sekine, K. (1993). Diseño de celdas de fabricación. Porlantd, Oregon: Tecnologías de Gerencia y Producción.',
    },
    {
      referencia:
        'Tawfik, L. (1987). Administración de la producción. Mexico: McGraw Hill.',
    },
    {
      referencia:
        'Vélez, L., Rodríguez, E., Camacho, M. (2013). “Informe desempeño del sector textil de confecciones 2008-2012”. Superintendencia de Sociedades. Bogotá. ',
    },
  ],
  glosario: [
    {
      termino: 'Accidente',
      significado:
        'un evento no deseado que da lugar a la muerte, enfermedad o lesión bien sea de personal de trabajo o de los equipos e instalaciones de la empresa. ',
    },
    {
      termino: 'Capacidad productiva',
      significado:
        'la capacidad que tiene una unidad productiva para producir su máximo nivel de bienes o servicios con una serie de recursos disponibles. Para su cálculo, se toma de referencia un periodo de tiempo determinado.',
    },
    {
      termino: 'Costos ',
      significado:
        'son aquellos que influyen directamente en la producción o fabricación de un producto o servicio e influirá en el precio final del mismo.',
    },
    {
      termino: 'Estandarizar',
      significado:
        'es el proceso de ajustar o adaptar características en un producto, servicio o procedimiento; con el objetivo de que éstos se parezcan a un tipo, modelo o norma en común.',
    },
    {
      termino: 'Incidente',
      significado:
        'es todo evento no deseado ni esperado que ocasiona una pérdida.',
    },
    {
      termino: 'MTM',
      significado:
        'es el acrónimo en inglés de Methods Time Measurement, es decir, Medida del Tiempo de los Métodos. En el contexto del estudio del trabajo los sistemas de tiempos predeterminados se definen como procedimientos que permiten calcular tiempos teóricos de ejecución de actividades totalmente influenciables por el hombre.',
    },
    {
      termino: 'Peligro',
      significado:
        'es la fuente de causar una lesión, daño o enfermedad en el ambiente de trabajo.',
    },
    {
      termino: 'Proceso productivo',
      significado:
        'serie de operaciones y procesos necesarios que se realizan de forma planificada y sucesiva para lograr la elaboración de productos.',
    },
    {
      termino: 'Producción continua',
      significado:
        'este método de producción se utiliza para fabricar, producir, o procesar materiales sin interrupción, a través de un proceso de flujo continuo que permite mantener los materiales en continuo movimiento y, generalmente, funcionando las 24 horas al día, siete días a la semana con alguna parada de mantenimiento, aunque poco frecuentes.',
    },
    {
      termino: 'Producción en masa',
      significado:
        'es la producción de grandes cantidades de productos estandarizados con base a líneas de montaje. Se caracteriza por la mecanización como medio para lograr un alto volumen de unidades producidas, obtenidas partiendo de una cuidadosa organización de flujo de materiales a través de varias etapas de la fabricación, y con base a la supervisión de los estándares de calidad y la división del trabajo.',
    },
    {
      termino: 'Restricción de tiempo',
      significado:
        'las restricciones de tiempo son límites de tiempo que se aplican a los elementos sometidos a apelación y que se utilizan para controlar el número de días en los que debe realizarse alguna acción.',
    },
    {
      termino: 'Sistemas de producción intermitente',
      significado:
        'los procesos de transformación de este tipo se suceden a intervalos irregulares y sin continuidad de flujo. Los productos son fabricados con base a los pedidos del cliente y, por eso, los bienes se producen en pequeña escala. En este sistema, se producen grandes variedades de productos en los que tamaño, diseño y otras características intrínsecas al bien pueden variar, por lo que la flexibilidad es una de las principales características que las diferencias de los tipos de sistemas de producción continua.',
    },
    {
      termino: 'Tiempo de producción',
      significado:
        'el tiempo de producción ("lead time") es el tiempo que transcurre desde que se inicia un proceso de producción hasta que se completa.',
    },
    {
      termino: 'Tiempo de espera',
      significado:
        'el tiempo que el proceso de producción espera a que el sistema acepte órdenes de producción antes de que se produzca un tiempo de espera excedido y el proceso se detenga.',
    },
    {
      termino: 'Tiempo de operación',
      significado:
        'es el tiempo necesario para realizar una o varias operaciones. Está compuesto por los tiempos de: espera, preparación, operación y transferencia.',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
