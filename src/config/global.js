export default {
  global: {
    Name: 'Aplicación del sistema SARLAFT',
    Description:
      'Este componente formativo aborda la aplicación práctica del sistema SARLAFT dentro de las organizaciones, mediante el análisis de los procesos de conocimiento del cliente, identificación de operaciones financieras, sistemas de reporte y funciones de los organismos de control. Asimismo, permite comprender la importancia del cumplimiento normativo, la gestión de la información y los mecanismos de prevención orientados a evitar el lavado de activos y la financiación del terrorismo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conocimiento del cliente en el sistema SARLAFT',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de conocimiento del cliente (KYC)',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Importancia del conocimiento del cliente en la prevención del LA/FT',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Información requerida para la identificación del cliente',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Diferencias entre cliente y usuario en el sistema financiero',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Identificación y análisis de operaciones financieras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Operaciones financieras habituales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Operaciones inusuales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Operaciones sospechosas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Señales de alerta en las transacciones financieras',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas de reporte en la prevención del LA/FT',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Reporte de operaciones sospechosas (ROS)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Reporte de transacciones en efectivo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Reporte de operaciones múltiples',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Importancia de los sistemas de reporte',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Órganos de control del sistema LA/FT',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Superintendencia Financiera de Colombia',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Fiscalía General de la Nación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Unidad de Información y Análisis Financiero (UIAF)',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Funciones de los organismos de control',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sanciones por incumplimiento de las normas LA/FT',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Sanciones administrativas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Sanciones penales',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Sanciones financieras',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Consecuencias para las organizaciones',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Conservación de documentos e información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Importancia de la gestión documental',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Protección de la información del cliente',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Políticas de privacidad y confidencialidad',
            hash: 't_6_3',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Debida diligencia',
      significado:
        'proceso de verificación y conocimiento del cliente que permite identificar los riesgos asociados a las relaciones comerciales o financieras.',
    },
    {
      termino: 'Financiación del terrorismo',
      significado:
        'provisión o recolección de recursos financieros destinados a apoyar o facilitar actividades relacionadas con el terrorismo.',
    },
    {
      termino: 'GAFI',
      significado:
        'Grupo de Acción Financiera Internacional, organismo que establece estándares y recomendaciones para combatir el lavado de activos y la financiación del terrorismo.',
    },
    {
      termino: 'Lavado de activos',
      significado:
        'proceso mediante el cual se busca ocultar o disimular el origen ilícito de recursos provenientes de actividades ilegales para darles apariencia de legalidad.',
    },
    {
      termino: 'Oficial de cumplimiento',
      significado:
        'persona responsable dentro de la organización de supervisar la implementación y el funcionamiento del sistema SARLAFT.',
    },
    {
      termino: 'Operación inusual',
      significado:
        'transacción o actividad que no corresponde al comportamiento normal del cliente o que presenta características atípicas frente a su perfil financiero.',
    },
    {
      termino: 'Operación sospechosa',
      significado:
        'operación que, después de ser analizada, presenta indicios de estar relacionada con actividades de lavado de activos o financiación del terrorismo.',
    },
    {
      termino: 'SARLAFT',
      significado:
        'Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo, conjunto de políticas, procedimientos y controles implementados por las organizaciones para prevenir estas actividades ilícitas.',
    },
    {
      termino: 'UIAF',
      significado:
        'Unidad de Información y Análisis Financiero, entidad encargada de recibir, analizar y procesar reportes relacionados con posibles operaciones de lavado de activos y financiación del terrorismo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (1999). Ley 526 de 1999. Por medio de la cual se crea la Unidad de Información y Análisis Financiero (UIAF) y se dictan otras disposiciones relacionadas con la prevención del lavado de activos.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2006). Ley 1121 de 2006. Por la cual se dictan normas para la prevención, detección, investigación y sanción de la financiación del terrorismo.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2008). Ley 1266 de 2008. Por la cual se dictan disposiciones generales del habeas data y se regula el manejo de la información financiera y crediticia.',
      link: '',
    },
    {
      referencia:
        'Federación Latinoamericana de Bancos (FELABAN). (2016). Informe sobre prevención del lavado de activos y financiación del terrorismo en el sector financiero.',
      link: '',
    },
    {
      referencia:
        'Grupo de Acción Financiera Internacional (GAFI). (2012). Recomendaciones del GAFI para la lucha contra el lavado de activos y la financiación del terrorismo.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2017). Material de formación: Análisis del sistema de administración del riesgo de lavado de activos y financiación del terrorismo – SARLAFT.',
      link: '',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2022). Circular Básica Jurídica. Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo (SARLAFT).',
      link: '',
    },
    {
      referencia:
        'Unidad de Información y Análisis Financiero (UIAF). (2023). Lineamientos para la prevención y detección del lavado de activos y la financiación del terrorismo.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
          cargo: 'Desarrollador <em>full stack</em>',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
