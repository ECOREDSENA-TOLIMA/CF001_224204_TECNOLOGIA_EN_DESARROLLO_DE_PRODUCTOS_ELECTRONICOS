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
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
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
