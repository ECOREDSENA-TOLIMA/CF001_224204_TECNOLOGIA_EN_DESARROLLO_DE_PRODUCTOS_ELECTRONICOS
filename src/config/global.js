export default {
  global: {
    componenteFormativo:
      'Cálculo y medición de magnitudes eléctricas y electrónicas',
    descripcionCurso:
      'Comprender las magnitudes eléctricas permite tener un acercamiento al mundo de la electrónica; tal como un electrón cruza a través de los conductores, encontrando resistencia y transportando la corriente eléctrica, alimentándose del voltaje, y permitiendo la energía para que el circuito eléctrico tenga la potencia de trabajo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Mediciones de acuerdo con procedimientos técnicos y especificaciones del fabricante',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Mediciones e instrumentos de medición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Magnitudes eléctricas y electrónicas',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Protocolos de pruebas',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
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
        'Acosta, A. (s. f.). Ley de Kirchhoff. Tecnología & Pedagogía.',
      link:
        'https://www.tecnologiaypedagogia.net/2019/10/ley-de-kirchhoff-desarrollada-por-el.html',
    },
    {
      referencia: 'Arboledas, D. (2014). Electricidad básica. RA-MA.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/106570?page=24.',
    },
    {
      referencia:
        'Cuervo, A. (s.f.). Guías únicas de laboratorio: detección de fallas [Universidad Santiago de Cali, Departamento de Laboratorios]. Recuperado de',
      link:
        'https://docplayer.es/48669388-Guias-unicas-de-laboratorio-deteccion-de-fallas-autor-alberto-cuervo-santiago-de-cali-universidad-santiago-de-cali-departamento-de-laboratorios.html',
    },
    {
      referencia: 'Escalona, M. (2012). Sistema métrico Sistema internacional.',
      link: 'https://dialnet.unirioja.es/servlet/libro?codigo=558060',
    },
    {
      referencia:
        'Fernández, O. (2019). Fuente de corriente. Código Electrónica.',
      link: 'http://codigoelectronica.com/blog/fuente-corriente',
    },
    {
      referencia:
        'Julián, C. (s. f.). Ley de Ohm - Ejercicios Resueltos. Fisimat | Blog de Física y Matemáticas.',
      link: 'https://www.fisimat.com.mx/ley-del-ohm/',
    },
    {
      referencia: 'Mecatrónica LATAM. (2021). Ley de Watt.',
      link:
        'https://www.mecatronicalatam.com/es/tutoriales/teoria/ley-de-watt/',
    },
    {
      referencia:
        'Quincy, J. (1821). A brief history of measurement systems. Report to the Congress. U.S. Department of Commerce.',
      link:
        'https://www.nist.gov/system/files/documents/2017/05/09/NIST-SP-304A-Brief-History-Measurement-Systems-w-Color-Chart-1997.pdf',
    },
    {
      referencia:
        'De la Fuente, J. M. (2019). Historia de las unidades: desde el sistema métrico decimal hasta la reciente revisión del Sistema Internacional de Unidades. e-medida, 15, 3-13. Recuperado de',
      link:
        'https://www.e-medida.es/numero-15/historia-de-las-unidades-desde-el-sistema-metrico-decimal-hasta-la-reciente-revision-del-sistema-internacional-de-unidades/',
    },
    {
      referencia:
        'Tutoriales de electrónica básica. (s.f.). Electrónica básica.',
      link:
        'https://www.areatecnologia.com/TUTORIALES/ELECTRONICA%20BASICA.htm',
    },
    {
      referencia: 'Wikipedia. (2021). Función continua.',
      link: 'https://es.wikipedia.org/wiki/Funci%C3%B3n_continua',
    },
  ],
  complementario: [
    {
      texto:
        'Hernández, N., Medel, P. y Ramírez, J. (2003). Dispositivos y circuitos electrónicos. Prácticas de laboratorio. Universidad Nacional Autónoma de México.',
      tipo: 'PDF',
      descarga: 'downloads/M_Dispositivos_Circuitos_Electronicos.pdf',
    },
    {
      texto: 'Arboledas, D. (2014). Electricidad básica. RA-MA.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/106570?page=24.',
    },
  ],
  glosario: [
    {
      termino: 'Amperio',
      significado: 'Unidad de corriente.',
    },
    {
      termino: 'Ángstrom',
      significado:
        'El ángstrom no es una unidad del sistema internacional de medidas. Sin embargo, está considerada como una de las unidades útiles para responder a necesidades específicas de ciertos campos científicos técnicos. Es la unidad de longitud equivalente a la diez mil millonésima (10-10) parte del metro. (Símb. Å).',
    },
    {
      termino: 'Continuidad',
      significado: 'Facilidad de paso de la corriente.',
    },
    {
      termino: 'Diferencia de potencial',
      significado:
        'Caída de voltaje al paso de la corriente por un determinado resistor o resistencia.',
    },
    {
      termino: 'Estática',
      significado:
        'Relacionada con la física en electrónica y mecánica. En electrónica, se refiere a la energía que se almacena en elementos, y en mecánica, a elementos en quietud o sin movimiento.',
    },
    {
      termino: 'Impedancia',
      significado: 'Resistencia al paso de la corriente.',
    },
    {
      termino: 'Julios',
      significado: 'Unidad de energía.',
    },
    {
      termino: 'Ohmios',
      significado: 'Unidad de resistencia.',
    },
    {
      termino: 'Voltios',
      significado: 'Unidad de voltaje.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Rocío Sánchez Ruiz',
          cargo: 'Experto Temático',
          centro: 'Centro de Electricidad, Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Miroslava González H.',
          cargo: 'Diseñador y Evaluador Instruccional',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: '',
        },
        {
          nombre: 'Álix Cecilia Chinchilla Rueda',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñones',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Comercio y Servicios',
        },
        {
          nombre: 'Rafael Neftalí Lizcano',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Revisión y Corrección de Estilo',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
