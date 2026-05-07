<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Órganos de control del sistema LA/FT
    p.mb-4 La prevención y el control del lavado de activos y la financiación del terrorismo requieren la participación activa de diferentes entidades del Estado encargadas de supervisar, regular e investigar las actividades financieras y comerciales que puedan estar relacionadas con estos delitos. Estos organismos cumplen un papel fundamental dentro del sistema de control, ya que establecen normas, supervisan su cumplimiento y coordinan acciones orientadas a prevenir el uso indebido del sistema financiero.
    .bloque-texto-gg.tarjeta.bt06.mb-4
      .bloque-texto-gg__texto.p-4
        .row
            .col-lg-auto.d-none.d-lg-block.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img2.svg', style="width:100px", alt='Texto que describa la imagen')
            .col-lg-12
              p.mb-0 En el sistema financiero, los órganos de control desarrollan diversas funciones que permiten garantizar la adecuada implementación de los mecanismos de prevención del lavado de activos y la financiación del terrorismo. Estas funciones se orientan al seguimiento, análisis y verificación de las operaciones realizadas por las entidades vigiladas, como se describe a continuación:
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img1.svg')})`}"
      )
    .BGINTRO01.px-5.mb-4
      SlyderF(columnas="col-lg-6 col-xl-4").mb-4
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema4/img3.svg' alt='AvatarTop')
          h5.text-center Supervisión de entidades
          p.text-center consiste en verificar que las organizaciones cumplan con la normativa vigente y apliquen correctamente los mecanismos de prevención establecidos.
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema4/img4.svg' alt='AvatarTop')
          h5.text-center Análisis de información
          p.text-center  implica revisar los datos reportados por las entidades para identificar comportamientos inusuales o inconsistentes en las operaciones financieras. 
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema4/img5.svg' alt='AvatarTop')
          h5.text-center Investigación de operaciones
          p.text-center corresponde a la evaluación detallada de situaciones que pueden estar relacionadas con actividades ilícitas.
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema4/img6.svg' alt='AvatarTop')
          h5.text-center Control del cumplimiento
          p.text-center permite asegurar que las entidades implementen de manera efectiva las políticas y procedimientos definidos. 
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema4/img7.svg' alt='AvatarTop')
          h5.text-center Fortalecimiento de la transparencia
          p.text-center contribuye a garantizar que las operaciones financieras se realicen de forma clara, verificable y conforme a la normativa.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/intro/img3.svg', style="width:100px", alt='Texto que describa la imagen')
          .col-lg-9
            p.mb-0 Las funciones descritas permiten comprender el papel fundamental de los órganos de control en la supervisión y verificación de las actividades financieras. Su intervención contribuye a fortalecer los mecanismos de prevención y a garantizar la integridad y transparencia en el funcionamiento del sistema financiero.
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema4/img8.svg', style="width:100px", alt='Texto que describa la imagen')
          .col-lg-9
            p.mb-0 Asimismo, la coordinación entre los diferentes organismos de control permite mejorar la efectividad de las estrategias de prevención y detección del lavado de activos y la financiación del terrorismo. La cooperación institucional facilita el intercambio de información, el desarrollo de investigaciones y la aplicación de sanciones cuando se identifican conductas que incumplen la normativa vigente.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
              img(src='@/assets/curso/temas/tema4/img9.svg', width='180', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .tarjeta-avatar.mb-4
            img(src='@/assets/curso/temas/tema4/img10.svg', alt='AvatarTop')
            .tarjeta.color-primario.rounded-0.p-4
              p.text-center.mb-0 El control efectivo del lavado de activos exige más que normas: requiere entidades especializadas que actúen de manera articulada, oportuna y con capacidad real de sanción.
    p.mb-4 A continuación, se presentan algunas de las principales entidades encargadas de la supervisión, control e investigación de las actividades relacionadas con el lavado de activos y la financiación del terrorismo en el sistema financiero colombiano.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Principales órganos de control del sistema LA/FT en Colombia
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Entidad
                  th Función principal
              tbody
                tr
                  th Superintendencia Financiera de Colombia
                  td Supervisar y regular las entidades del sistema financiero, verificando el cumplimiento de las normas relacionadas con el SARLAFT.
                tr 
                  th Unidad de Información y Análisis Financiero (UIAF)
                  td Recibir, analizar y procesar información relacionada con posibles operaciones de lavado de activos o financiación del terrorismo.
                tr
                  th Fiscalía General de la Nación
                  td Investigar y judicializar los delitos relacionados con el lavado de activos y la financiación del terrorismo.
                tr
                  th Superintendencia de Sociedades
                  td Supervisar el cumplimiento de normas de prevención del LA/FT en el sector empresarial.
                tr
                  th Dirección de Impuestos y Aduanas Nacionales (DIAN)
                  td Controlar operaciones relacionadas con comercio exterior y posibles delitos financieros.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img11.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p Las entidades relacionadas en la tabla anterior conforman el sistema institucional de control frente al lavado de activos y la financiación del terrorismo en Colombia. Cada una actúa desde su ámbito específico de competencia, y su trabajo coordinado fortalece la capacidad del Estado para prevenir, detectar y sancionar estas actividades ilícitas. 
        .row.align-items-center.tarjeta.bt06.p-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema4/img12.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 Entre las entidades que integran el sistema institucional de control frente al lavado de activos y la financiación del terrorismo, la Superintendencia Financiera de Colombia constituye el principal organismo de supervisión y regulación del sector financiero. Su mandato comprende la inspección permanente de bancos, aseguradoras y demás instituciones vigiladas, con el fin de verificar el cumplimiento de las disposiciones del SARLAFT. El análisis de sus funciones resulta fundamental para comprender cómo se articula la supervisión institucional en la prevención de estas conductas ilícitas.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Superintendencia Financiera de Colombia
    p.mb-4 La Superintendencia Financiera de Colombia es la entidad encargada de supervisar y regular el funcionamiento de las instituciones que conforman el sistema financiero colombiano. Su principal objetivo es garantizar la estabilidad, transparencia y eficiencia de las actividades financieras, protegiendo los intereses de los usuarios y promoviendo el adecuado funcionamiento de los mercados financieros.
    .bloque-texto-g.bloque-texto-g--inverso.tarjeta.bt04.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img13.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En el contexto de la prevención del lavado de activos y la financiación del terrorismo, la Superintendencia Financiera desempeña un papel fundamental en la supervisión del cumplimiento de las normas relacionadas con el sistema SARLAFT. Esta entidad establece lineamientos y disposiciones que las instituciones financieras deben implementar para prevenir que sus operaciones sean utilizadas para ocultar recursos provenientes de actividades ilícitas o para financiar actos relacionados con el terrorismo.
    p.mb-4 Para cumplir con este mandato, la Superintendencia Financiera desarrolla un conjunto de procesos sistemáticos orientados a garantizar que las entidades vigiladas implementen adecuadamente los mecanismos de prevención y control exigidos por la normativa vigente, entre los cuales se destacan los siguientes:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img14.svg', alt='Texto que describa la imagen')
          
        h2.text-center Inspección
        p consiste en la revisión directa y sistemática de las operaciones, registros y procedimientos de las entidades financieras, con el fin de verificar el cumplimiento de las normas del SARLAFT.
      .col-md.tarjeta.bt08.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img15.svg', alt='Texto que describa la imagen')
          
        h2.text-center Vigilancia y control
        p implica el seguimiento continuo de las actividades desarrolladas por las organizaciones supervisadas, identificando posibles irregularidades o incumplimientos en los mecanismos de prevención establecidos.
      .col-md.tarjeta.bt02.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img15.svg', alt='Texto que describa la imagen')
          
        h2.text-center Análisis de información financiera
        p corresponde al estudio detallado de los reportes y datos suministrados por las entidades, permitiendo detectar operaciones inusuales o sospechosas relacionadas con el lavado de activos o la financiación del terrorismo.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p.mb-2 Los procesos descritos se desarrollan de manera articulada y permanente, configurando un sistema de supervisión que permite a la Superintendencia Financiera de Colombia identificar oportunamente situaciones de riesgo y adoptar las medidas correctivas necesarias para salvaguardar la integridad del sistema financiero.
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/intro/img3.svg', style="width:100px", alt='Texto que describa la imagen')
          .col-lg-9
            p.mb-0 Junto a la Superintendencia Financiera, la Fiscalía General de la Nación cumple un rol determinante en la lucha contra el lavado de activos y la financiación del terrorismo, actuando desde el ámbito de la investigación y la judicialización de las conductas que vulneran el ordenamiento jurídico colombiano. Su intervención representa la instancia encargada de llevar ante la justicia a quienes incurren en estas conductas ilícitas.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
              img(src='@/assets/curso/temas/tema2/img31.png', width='180', alt='Texto que describa la imagen')
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Fiscalía General de la Nación
    p.mb-4 La Fiscalía General de la Nación es la entidad del Estado colombiano encargada de investigar y acusar ante los jueces a las personas que presuntamente han cometido delitos. Su función principal es adelantar procesos de investigación penal que permitan esclarecer hechos delictivos y garantizar la aplicación de la ley dentro del marco del sistema judicial colombiano.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img17.png', width='180', alt='Texto que describa la imagen')
      .col-lg-8.tarjeta.bt04.p-5
        .row
            .col-lg-auto.d-none.d-lg-block.mb-2
              figure
                img(src='@/assets/curso/temas/tema4/img18.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-12
              p.mb-0 En el contexto de la prevención y control del lavado de activos y la financiación del terrorismo, la Fiscalía General de la Nación cumple un papel fundamental en la investigación de las conductas relacionadas con estos delitos. A partir de la información suministrada por entidades como la Unidad de Información y Análisis Financiero (UIAF) y otros organismos de control, la Fiscalía puede iniciar procesos de investigación orientados a identificar a los responsables de estas actividades ilícitas.
    p.mb-4 Esta coordinación con instituciones nacionales e internacionales se materializa en acciones concretas que fortalecen los procesos de investigación frente a los delitos financieros, entre las cuales se destacan:
    .row.mb-4
      .col-lg-4
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/img19.svg' alt='AvatarTop')
            .tarjeta.color-primario.w-100.h-100
              .p-4
                h5.text-center Intercambio de información
                p consiste en compartir datos relevantes con otros organismos de control, con el fin de construir evidencia sólida sobre posibles operaciones relacionadas con el lavado de activos o la financiación del terrorismo. 
      .col-lg-4
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/img20.svg' alt='AvatarTop')
            .tarjeta.color-primario.w-100.h-100
              .p-4
                h5.text-center Seguimiento de operaciones financieras
                p implica el monitoreo sistemático de transacciones y movimientos de recursos que presenten características inusuales o sospechosas dentro del sistema financiero.
      .col-lg-4
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/img21.svg' alt='AvatarTop')
            .tarjeta.color-primario.w-100.h-100
              .p-4
                h5.text-center Identificación de redes criminales
                p corresponde a la detección y análisis de estructuras organizadas que puedan estar vinculadas a actividades ilícitas relacionadas con el lavado de activos o la financiación del terrorismo.   
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p Estas acciones, desarrolladas de forma coordinada con el sistema institucional de control, otorgan a la Fiscalía General de la Nación la capacidad de adelantar procesos judiciales contra personas o entidades responsables del lavado de activos y la financiación del terrorismo, contribuyendo a recuperar activos de origen ilícito y a fortalecer la respuesta del Estado frente a estos delitos.
        .row.align-items-center.bt02.p-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema4/img22.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 Otra entidad fundamental dentro del sistema de control es la Unidad de Información y Análisis Financiero (UIAF), organismo especializado en la recopilación, procesamiento y análisis de información financiera orientada a detectar operaciones sospechosas. Su función resulta clave porque alimenta con datos estratégicos la labor investigativa de las demás entidades del sistema.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema4/img23.png', width='180', alt='Texto que describa la imagen')
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3 Unidad de Información y Análisis Financiero (UIAF)
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-8.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema4/img24.svg', width='180', alt='Texto que describa la imagen')
        .col-lg-8
          p La Unidad de Información y Análisis Financiero (UIAF) es una entidad adscrita al Ministerio de Hacienda y Crédito Público de Colombia encargada de prevenir y detectar posibles operaciones relacionadas con el lavado de activos y la financiación del terrorismo. Su función principal consiste en recibir, analizar y procesar información financiera proveniente de diferentes entidades del sector financiero y de otros sectores económicos que están obligados a reportar determinadas operaciones.
          .bt06.p-4
            p.mb-0 Dentro del sistema de prevención del lavado de activos y financiación del terrorismo, la UIAF cumple un papel estratégico al centralizar la información reportada por las entidades vigiladas. A través del análisis de estos datos, la entidad puede identificar patrones de comportamiento financiero, detectar transacciones sospechosas y generar informes que contribuyan a la investigación de posibles actividades ilícitas.
        
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p.mb-2 Asimismo, la UIAF trabaja de manera coordinada con diferentes organismos de control y autoridades judiciales, como la Fiscalía General de la Nación, la Superintendencia Financiera de Colombia y otras entidades nacionales e internacionales. Esta cooperación institucional permite fortalecer los procesos de investigación y mejorar la capacidad del Estado para detectar y combatir actividades relacionadas con el lavado de activos y la financiación del terrorismo.
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/intro/img3.svg', style="width:100px", alt='Texto que describa la imagen')
          .col-lg-9
            p.mb-0 La información procesada por la UIAF tiene un alcance que va más allá del análisis interno. Sus resultados se orientan hacia propósitos estratégicos fundamentales que fortalecen la capacidad del sistema de control frente al lavado de activos y la financiación del terrorismo, entre los cuales se destacan los siguientes:
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
              img(src='@/assets/curso/temas/tema4/img25.png', width='180', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img26.png', alt='')
      .col-lg-7
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Apoyo a investigaciones judiciales")
            p.mb-0 los informes generados por la UIAF sirven como insumo técnico para que las autoridades competentes adelanten procesos de investigación y judicialización frente a delitos financieros. 
          .row(numero="2" titulo="Desarrollo de estrategias de prevención")
            p.mb-0 el análisis de patrones y tendencias financieras permite diseñar medidas orientadas a reducir el riesgo de que el sistema financiero sea utilizado para actividades ilícitas. 
          .row(numero="3" titulo="Inteligencia financiera")
            p.mb-0 el estudio sistemático de la información reportada posibilita identificar estructuras y redes que operan de manera encubierta dentro del sistema económico colombiano. 
          .row(numero="4" titulo="Fortalecimiento de la transparencia")
            p.mb-0 la labor analítica de la UIAF contribuye a garantizar que las operaciones económicas se realicen de manera clara, verificable y conforme a la normativa vigente.
      
    p.mb-4 Los cuatro propósitos descritos consolidan a la UIAF como el centro de inteligencia financiera del sistema de control colombiano, cuya labor resulta indispensable para articular la información disponible y convertirla en herramientas concretas de prevención, investigación y sanción frente al lavado de activos y la financiación del terrorismo.
    .row.justify-content-center.align-items-center.mb-4.fondo-1
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img27.png', width='180', alt='Texto que describa la imagen')
      .col-lg-8
        .row
            .col-lg-auto.d-none.d-lg-block.mb-2
              figure
                img(src='@/assets/curso/temas/tema4/img28.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-12
              p.mb-0 Los aspectos recogidos en la tabla anterior permiten comprender que la financiación del terrorismo presenta características propias que la distinguen de otras actividades ilícitas, tanto por la procedencia de sus recursos como por la finalidad a la que estos se destinan. Su capacidad para mezclarse con transacciones aparentemente legítimas la convierte en uno de los fenómenos de mayor dificultad de detección dentro del sistema financiero, lo que exige la implementación de mecanismos especializados de supervisión y control. 
    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.4 Unidad de Información y Análisis Financiero (UIAF)
    .row.justify-content-center.align-items-center.mb-4
      .col-9.order-2.order-lg-1
        p Los organismos de control desempeñan un papel fundamental en la prevención y combate del lavado de activos y la financiación del terrorismo dentro del sistema financiero y empresarial. Estas entidades tienen la responsabilidad de supervisar el cumplimiento de la normativa vigente, investigar posibles actividades ilícitas y garantizar que las organizaciones implementen adecuadamente los mecanismos de prevención establecidos en el sistema SARLAFT.
        .bt01.p-4  
          p.mb-0 En el marco del sistema de control del Estado, los organismos encargados de la supervisión y vigilancia desarrollan diferentes actividades orientadas a fortalecer la transparencia en las operaciones financieras. A través de procesos de inspección, monitoreo y análisis de información, estas entidades pueden identificar irregularidades, detectar riesgos asociados al lavado de activos y adoptar medidas que permitan prevenir el uso indebido del sistema financiero.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema4/img31.png', alt='Ilustración de personas analizando datos financieros')
      
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img29.svg', alt='Ilustración de personas analizando datos financieros')
      
      .col-lg-9
        p.mb-4 En el marco del sistema de control del Estado, los organismos encargados de la supervisión y vigilancia desarrollan diferentes actividades orientadas a fortalecer la transparencia en las operaciones financieras. A través de procesos de inspección, monitoreo y análisis de información, estas entidades pueden identificar irregularidades, detectar riesgos asociados al lavado de activos y adoptar medidas que permitan prevenir el uso indebido del sistema financiero.
        .bt02.p-5
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema4/img30.svg', width='70', alt='Icono de cooperación global')
            .col-lg
              p.mb-0 Asimismo, los organismos de control trabajan de manera coordinada con diferentes instituciones nacionales e internacionales con el fin de fortalecer los procesos de investigación y sanción frente a delitos financieros. Esta cooperación institucional facilita el intercambio de información, el seguimiento de operaciones sospechosas y la identificación de redes criminales que puedan estar involucradas en actividades ilícitas.

    .row.align-items-center
      .col-lg-10
        p.mb-0 La coordinación interinstitucional descrita no constituye un fin en sí mismo, sino el medio a través del cual los organismos de control logran resultados concretos y verificables dentro del sistema financiero colombiano. Su actuación articulada genera efectos que se traducen en beneficios directos para la integridad del sistema económico y la seguridad institucional del país, entre los cuales se destacan los siguientes:
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
    .row.mb-4
      .col-lg-4
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/img19.svg' alt='AvatarTop')
            .tarjeta.color-primario.w-100.h-100
              .p-4
                h5.text-center A. Cumplimiento normativo
                p.mb-0 Garantiza que las entidades vigiladas apliquen correctamente las disposiciones del SARLAFT y demás normas relacionadas con la prevención del lavado de activos y la financiación del terrorismo. 
      .col-lg-4
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/img20.svg' alt='AvatarTop')
            .tarjeta.color-primario.w-100.h-100
              .p-4
                h5.text-center B. Lucha contra el crimen organizado
                p.mb-0 Contribuye a desarticular estructuras delictivas que intentan utilizar el sistema financiero para ocultar recursos de origen ilícito.
      .col-lg-4
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/img21.svg' alt='AvatarTop')
            .tarjeta.color-primario.w-100.h-100
              .p-4
                h5.text-center C. Protección de la estabilidad económica
                p.mb-0 Salvaguarda la integridad del sistema financiero, previniendo que actividades ilícitas afecten la confianza institucional y el funcionamiento de los mercados.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10 
        p Los tres efectos descritos evidencian que la labor de los organismos de control trasciende la simple verificación normativa, pues su actuación conjunta constituye un mecanismo integral de protección del sistema financiero colombiano frente a las amenazas del lavado de activos y la financiación del terrorismo.
    p.mb-4 En ese marco, las funciones específicas que los organismos de control desarrollan de manera permanente en la prevención del lavado de activos y la financiación del terrorismo se destacan las siguientes:
    .BGINTRO03.px-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          .tarjeta.bt06.p-4
            ul.lista-ul
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | Supervisar el cumplimiento de las normas relacionadas con el sistema SARLAFT.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | Analizar información financiera reportada por las entidades vigiladas.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | Investigar posibles operaciones vinculadas con el lavado de activos o la financiación del terrorismo.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | Coordinar acciones con otras entidades nacionales e internacionales.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | Aplicar sanciones cuando se identifiquen incumplimientos normativos.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | Promover la implementación de mecanismos de control y prevención dentro de las organizaciones.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | Fortalecer la cooperación institucional en la lucha contra el crimen financiero.
    .row.justify-content-center.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img34.svg', width='180', alt='Texto que describa la imagen')     
      .col-lg-8       
        p El conjunto de funciones descritas demuestra que los organismos de control actúan como pilares fundamentales del sistema institucional colombiano, cuya intervención oportuna y coordinada resulta determinante para prevenir, detectar y sancionar las conductas asociadas al lavado de activos y la financiación del terrorismo.
        p El incumplimiento de las obligaciones establecidas en el marco normativo del sistema LA/FT genera consecuencias de orden legal y económico para las entidades que no adoptan las medidas de prevención y control exigidas. El siguiente apartado describe los tipos de sanciones aplicables y las condiciones bajo las cuales estas se imponen.
                       


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
