<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Sistemas de reporte en la prevención del LA/FT
    .bloque-texto-g.tarjeta.bt04.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los sistemas de reporte constituyen un elemento fundamental dentro de las estrategias de prevención del lavado de activos y la financiación del terrorismo (LA/FT), ya que permiten a las organizaciones informar a las autoridades competentes sobre operaciones que puedan representar un riesgo para la integridad del sistema financiero. Estos sistemas facilitan el intercambio de información entre las entidades vigiladas y los organismos de control encargados de analizar posibles actividades ilícitas.
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.order-2.order-lg-1
          p En el marco del sistema SARLAFT, las organizaciones tienen la responsabilidad de implementar mecanismos que permitan identificar, analizar y reportar operaciones que presenten características inusuales o sospechosas. Estos reportes se realizan siguiendo procedimientos establecidos por la normativa vigente y permiten que las autoridades competentes realicen procesos de análisis e investigación sobre las transacciones que puedan estar relacionadas con actividades ilícitas.
          .bt06.p-4.mb-4
            p.mb-0 Asimismo, los sistemas de reporte contribuyen al fortalecimiento de los mecanismos de control dentro del sistema financiero, ya que promueven la transparencia en las operaciones y facilitan la detección temprana de posibles riesgos asociados al lavado de activos y la financiación del terrorismo. La adecuada aplicación de estos sistemas permite a las organizaciones cumplir con sus obligaciones regulatorias y colaborar con las autoridades en la lucha contra el crimen financiero.
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img3.svg', style="width:100px", alt='Texto que describa la imagen')
            .col-lg-9
              p.mb-0 Para garantizar la efectividad de los procesos de prevención del LA/FT, las organizaciones deben conocer y aplicar los diferentes tipos de reportes establecidos por las autoridades de supervisión y control. Estos reportes permiten registrar información relevante sobre determinadas operaciones financieras que, por sus características o comportamiento, requieren ser informadas a los organismos competentes para su análisis.
    
        .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/tema3/img2.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Principales sistemas de reporte en la prevención del lavado de activos y la financiación del terrorismo 
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Tipo de reporte
                  th Descripción
              tbody
                tr
                  th Reporte de Operaciones Sospechosas (ROS)
                  td Informe que las entidades envían a la autoridad competente cuando identifican operaciones que pueden estar relacionadas con actividades de lavado de activos o financiación del terrorismo.
                tr
                  th Reporte de transacciones en efectivo
                  td Registro de operaciones realizadas en efectivo que superan determinados montos establecidos por la normativa.
                tr
                  th Reporte de operaciones múltiples
                  td Reporte de varias transacciones realizadas por un mismo cliente que, en conjunto, superan los límites establecidos por la regulación.
                tr
                  th Reporte de ausencia de operaciones sospechosas
                  td Informe que las entidades presentan para indicar que, durante un periodo determinado, no se detectaron operaciones sospechosas.
                tr
                  th Reportes regulatorios periódicos
                  td Información que las entidades deben remitir periódicamente a las autoridades para el seguimiento y control de las operaciones financieras.
        p Los tipos de reportes presentados en la tabla anterior reflejan la diversidad de mecanismos que las organizaciones deben implementar para cumplir con sus obligaciones dentro del sistema SARLAFT. Cada uno de ellos responde a situaciones específicas y contribuye, desde su ámbito particular, a la detección y prevención del lavado de activos y la financiación del terrorismo, aspectos que se desarrollan en detalle en los siguientes apartados.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Reporte de operaciones sospechosas (ROS)
    .bloque-texto-g.bloque-texto-g--inverso.tarjeta.bt04.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img4.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El Reporte de Operaciones Sospechosas (ROS) es uno de los mecanismos más importantes dentro del sistema SARLAFT para la prevención del lavado de activos y la financiación del terrorismo. Este reporte consiste en la comunicación formal que realizan las entidades vigiladas a las autoridades competentes cuando identifican transacciones que presentan indicios de estar relacionadas con actividades ilícitas o que no tienen una justificación económica clara.
    p.mb-4 En el contexto del sistema financiero colombiano, el ROS debe ser enviado a la Unidad de Información y Análisis Financiero (UIAF), entidad encargada de recibir, analizar y procesar la información relacionada con posibles operaciones vinculadas al lavado de activos o a la financiación del terrorismo. Este reporte permite que las autoridades competentes realicen análisis especializados que contribuyan a la detección y prevención de actividades ilícitas dentro del sistema económico.
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .tarjeta-avatar.mb-4
            img(src='@/assets/curso/temas/tema3/img5.svg', alt='AvatarTop')
            .tarjeta.color-primario.rounded-0.p-4
              p.text-center.mb-0 El reporte de operaciones sospechosas permite alertar a las autoridades sobre transacciones que presentan comportamientos inusuales, facilitando su análisis y contribuyendo a la prevención de actividades ilícitas.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
              img(src='@/assets/curso/temas/tema3/img6.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p.mb-2 Es importante señalar que el reporte de operaciones sospechosas se basa en el análisis que realizan las organizaciones sobre las transacciones de sus clientes. Cuando una entidad identifica una operación que no corresponde con el perfil financiero del cliente o que presenta señales de alerta, debe aplicar procedimientos de análisis interno para determinar si la operación debe ser reportada como sospechosa.
        .row.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/intro/img3.svg', style="width:140px", alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 A su vez, el reporte de operaciones sospechosas constituye una herramienta clave para fortalecer la cooperación entre las entidades del sistema financiero y los organismos de control. A través de estos reportes, las organizaciones contribuyen activamente a la prevención del lavado de activos y la financiación del terrorismo, fortaleciendo la transparencia en las operaciones financieras y apoyando las acciones de las autoridades en la lucha contra el crimen organizado.
    p.mb-4 Entre algunos aspectos importantes relacionados con el reporte de operaciones sospechosas (ROS) se encuentran los siguientes:
    .BG01.px-5.p-4.mb-4
      .row.justify-content-center.fondo-slyder.mb-4
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema3/img7.png", alt="alt").img400.m-auto
        .col-lg-8
          p.mb-5
          SlyderF(columnas="col-lg-4 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-9
                  img(src="@/assets/curso/temas/tema3/img8.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 #[b Identificación de la operación:] debe elaborarse cuando una operación presenta indicios de estar relacionada con actividades ilícitas.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-9
                  img(src="@/assets/curso/temas/tema3/img9.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 #[b Análisis interno:] se basa en la evaluación realizada por la entidad sobre las operaciones de sus clientes.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-9
                  img(src="@/assets/curso/temas/tema3/img10.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 #[b Envío del reporte:] debe remitirse a la Unidad de Información y Análisis Financiero (UIAF). 
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-9
                  img(src="@/assets/curso/temas/tema3/img11.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 #[b Criterio de sospecha:] no requiere certeza absoluta sobre la actividad ilícita, sino indicios razonables. 
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-9
                  img(src="@/assets/curso/temas/tema3/img12.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 #[b Confidencialidad de la información:] la información contenida en el reporte es de carácter reservado. 
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-9
                  img(src="@/assets/curso/temas/tema3/img13.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 #[b Cumplimiento de plazos:] el reporte debe realizarse dentro de los tiempos establecidos por la normativa vigente.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-9
                  img(src="@/assets/curso/temas/tema3/img14.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 #[b Finalidad del reporte:] permite a las autoridades realizar análisis e investigaciones sobre posibles delitos financieros.
    p.mb-4 La correcta elaboración y envío oportuno del ROS es una de las obligaciones más importantes que tienen las entidades dentro del sistema SARLAFT. Su cumplimiento no solo fortalece los mecanismos de control frente al crimen financiero, sino que también protege a las organizaciones de posibles responsabilidades legales derivadas de la omisión en el reporte de operaciones sospechosas.
    .row.justify-content-center.align-items-center.tarjeta.bt02.p-4.mb-4
          .col-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img15.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p Además de los reportes asociados a operaciones sospechosas, las organizaciones deben considerar otros mecanismos de control orientados al registro y seguimiento de transacciones que, por sus características, pueden representar un riesgo dentro del sistema financiero. Entre estos mecanismos se encuentran aquellos relacionados con el manejo de dinero en efectivo, los cuales requieren un control específico debido a su mayor nivel de exposición a posibles usos indebidos.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Reporte de transacciones en efectivo
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p El reporte de transacciones en efectivo es un mecanismo de control utilizado dentro del sistema SARLAFT para registrar y reportar operaciones realizadas con dinero en efectivo que superan determinados montos establecidos por la normativa vigente. Este tipo de reporte permite a las entidades financieras y a las organizaciones vigiladas informar a las autoridades competentes sobre movimientos significativos de dinero en efectivo que podrían representar un riesgo relacionado con el lavado de activos o la financiación del terrorismo.
        .row.align-items-center.tarjeta.bt06.p-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img16.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 Dentro del sistema financiero, las operaciones en efectivo pueden presentar mayores riesgos debido a que este tipo de transacciones dificulta el seguimiento del origen y destino de los recursos. Por esta razón, las autoridades regulatorias han establecido obligaciones para que las entidades registren y reporten este tipo de operaciones cuando superan ciertos límites definidos por la regulación.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img17.png', width='180', alt='Texto que describa la imagen')
    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 El reporte de transacciones en efectivo permite a las autoridades contar con información relevante para el análisis de posibles actividades ilícitas dentro del sistema financiero. A través de estos reportes, entidades como la Unidad de Información y Análisis Financiero (UIAF) pueden identificar patrones de comportamiento como:
    
    .row.justify-content-center.mb-4
      .col-lg-2.col-8.mb-4.mb-lg-0
        .tarjeta--boton.bt09.rounded-0.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/img18.svg', alt='Texto que describa la imagen')
          p.text-center #[b Movimientos inusuales]
      .col-lg-2.col-8.mb-4.mb-lg-0  
        .tarjeta--boton.bt09.rounded-0.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/img19.svg', style="width:70px",  alt='Texto que describa la imagen')
          p.text-center #[b Operaciones sospechosas]
      .col-lg-2.col-8.mb-4.mb-lg-0 
        .tarjeta--boton.bt09.rounded-0.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/img20.svg', style="width:70px",  alt='Texto que describa la imagen')
          p.text-center #[b Riesgos financieros]
      .col-lg-2.col-8.mb-4.mb-lg-0  
        .tarjeta--boton.bt09.rounded-0.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/img21.svg', style="width:70px",  alt='Texto que describa la imagen')
          p.text-center #[b Lavado de activos]
      .col-lg-2.col-8.mb-4.mb-lg-0 
        .tarjeta--boton.bt09.rounded-0.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/img22.svg', style="width:70px",  alt='Texto que describa la imagen')
          p.text-center #[b Financición del terrorismo]
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img23.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p Igualmente, la implementación de este tipo de reportes fortalece los mecanismos de control dentro de las organizaciones, ya que promueve una mayor transparencia en las operaciones financieras realizadas por los clientes. El seguimiento de las transacciones en efectivo contribuye a mejorar los sistemas de monitoreo y facilita la detección temprana de operaciones que puedan representar riesgos para la integridad del sistema financiero.
        p Algunas transacciones en efectivo pueden presentar características que requieren ser reportadas, debido a su monto, frecuencia o comportamiento frente al perfil del cliente:    
    .BGINTRO03.px-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          .tarjeta.bt06.p-4
            ul.lista-ul
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                p.mb-0 #[b Depósitos en efectivo:] operaciones que superan los montos establecidos por la normativa vigente. 
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                p.mb-0 #[b Retiros en efectivo:] extracciones de grandes cantidades de dinero realizadas en una sola o varias operaciones.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                p.mb-0 #[b Operaciones frecuentes:] transacciones en efectivo realizadas de manera repetitiva en un corto periodo de tiempo.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                p.mb-0 #[b Depósitos de terceros:] consignaciones efectuadas por personas distintas al titular de la cuenta. 
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                p.mb-0 #[b Movimientos no justificados:] transacciones que no corresponden con la actividad económica del cliente.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                p.mb-0 #[b Fraccionamiento de operaciones:] división de depósitos en montos menores con el fin de evitar controles o reportes.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                p.mb-0 #[b Conversión de efectivo:] cambio de grandes cantidades de dinero en efectivo a otros instrumentos financieros.
    p El adecuado registro y reporte de estas transacciones en efectivo contribuye a la trazabilidad de los recursos dentro del sistema financiero y fortalece la capacidad de las autoridades para detectar posibles operaciones relacionadas con el lavado de activos. Este mecanismo se articula con otros procesos de control que permiten identificar patrones en la realización de múltiples transacciones por parte de un mismo cliente, lo cual facilita un análisis más integral de su comportamiento financiero.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Reporte de operaciones múltiples
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-8.mb-4.mb-lg-0
          figure
              img(src='@/assets/curso/temas/tema3/img24.png', width='180', alt='Texto que describa la imagen')
        .col-lg-8
          p El reporte de operaciones múltiples es un mecanismo de control utilizado dentro del sistema SARLAFT para identificar y registrar varias transacciones realizadas por un mismo cliente que, en conjunto, pueden representar un riesgo asociado al lavado de activos o la financiación del terrorismo. Este tipo de reporte se aplica cuando un cliente realiza varias operaciones individuales que, aunque por separado no superan los límites establecidos por la normativa, al sumarse alcanzan montos que requieren ser reportados a las autoridades competentes.
          .bt06.p-4
            .row
              .col-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema3/img25.svg', style="width:100px", alt='Texto que describa la imagen')
              .col-lg-9
                p.mb-0 En el contexto del sistema financiero, las operaciones múltiples pueden utilizarse como una estrategia para fragmentar grandes sumas de dinero en transacciones de menor valor con el objetivo de evadir controles establecidos por la normativa. Esta práctica, conocida como estructuración o fraccionamiento de operaciones, dificulta la identificación del origen de los recursos y puede representar un riesgo dentro del sistema financiero. El siguiente recurso interactivo muestra cómo se desarrolla este comportamiento:
        
        
          
    .row.justify-content-center.mb-4
      .col-lg-10
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/img26.svg', alt='Infografía de matriz RACI')
            .tarjeta.tarjeta.bt01.p-3(x="17.2%" y="75%" numero="+")
              p Recursos de valor significativo que requieren control. 

            .tarjeta.tarjeta.bt01.p-3(x="33.7%" y="75%" numero="+")
              p Fragmentación del monto en varias transacciones. 
            
            .tarjeta.tarjeta.bt01.p-3(x="50%" y="75%" numero="+")
              p Operaciones individuales por debajo de los límites establecidos. 

            .tarjeta.tarjeta.bt01.p-3(x="66.5%" y="75%" numero="+")
              p Intento de evitar reportes o mecanismos de supervisión. 
            
            .tarjeta.tarjeta.bt01.p-3(x="83%" y="75%" numero="+")
              p Posible ocultamiento del origen de los recursos.
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema3/img26_1.svg', alt='Matriz RACI para dispositivos móviles')
        p La representación anterior permite comprender cómo la división de un monto elevado en múltiples transacciones puede dificultar la detección de patrones inusuales. Este tipo de comportamiento requiere la implementación de mecanismos de monitoreo que faciliten la identificación de operaciones repetitivas o atípicas en un periodo determinado.     
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .tarjeta-avatar.mb-4
            img(src='@/assets/curso/temas/tema3/img27.svg', alt='AvatarTop')
            .tarjeta.color-primario.rounded-0.p-4
              p.text-center.mb-0 Los sistemas de control permiten analizar la frecuencia, el monto y la naturaleza de las operaciones para identificar aquellas que deben ser objeto de reporte.
    p.mb-4 Entre algunos ejemplos de situaciones que pueden generar un reporte de operaciones múltiples se encuentran los siguientes:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        .tarjeta.bt06.p-4
            ul.lista-ul
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | Realización de varios depósitos en efectivo en un mismo día por montos similares.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | Fragmentación de grandes sumas de dinero en múltiples transacciones pequeñas.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | Depósitos frecuentes realizados en diferentes sucursales de una misma entidad.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | Transferencias consecutivas entre cuentas relacionadas con un mismo cliente.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | Operaciones realizadas por varias personas en beneficio de un mismo titular de cuenta.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | Movimientos repetitivos de dinero en periodos cortos de tiempo.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | Uso de múltiples cuentas para movilizar recursos de manera fraccionada.
    
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema3/img28.svg', alt='Matriz RACI para dispositivos móviles')
    p Las situaciones descritas permiten identificar patrones de comportamiento asociados a la realización de múltiples transacciones en un periodo determinado. Estos comportamientos facilitan el reconocimiento de operaciones que pueden requerir análisis y seguimiento por parte de las entidades, con el fin de evaluar su coherencia frente al perfil del cliente.
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.4 Importancia de los sistemas de reporte
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p Los sistemas de reporte desempeñan un papel fundamental en la prevención del lavado de activos y la financiación del terrorismo dentro del sistema financiero y empresarial. A través de estos mecanismos, las organizaciones pueden informar a las autoridades competentes sobre operaciones que presentan características inusuales o sospechosas, contribuyendo así al fortalecimiento de los procesos de supervisión y control frente a posibles actividades ilícitas.
        .row.align-items-center.bt06.p-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img29.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 En el marco del sistema SARLAFT, los sistemas de reporte permiten que las entidades vigiladas registren y transmitan información relevante relacionada con determinadas transacciones financieras. Esta información es analizada posteriormente por las autoridades competentes, como la Unidad de Información y Análisis Financiero (UIAF), con el fin de identificar patrones de comportamiento que puedan estar vinculados con actividades de lavado de activos o financiación del terrorismo.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img30.png', width='180', alt='Texto que describa la imagen')
    p.mb-4 La importancia de los sistemas de reporte se evidencia en distintos aspectos que contribuyen al fortalecimiento del control, la transparencia y el cumplimiento dentro del sistema financiero. A continuación, se presentan algunos de los principales elementos que explican su relevancia:
    .BG02.p-5.mb-4
      .tarjeta.slider-custom-bg.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 Transparencia en la información
              p Los sistemas de reporte permiten registrar y comunicar información relevante sobre las operaciones financieras realizadas. Esto facilita el acceso a datos confiables y oportunos por parte de las autoridades. De esta manera, se promueve la claridad en las transacciones y se fortalece la confianza en el sistema financiero.
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img31.png', alt='Gráfico ilustrativo de uso de programa')
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 Detección de riesgos
              p Estos mecanismos contribuyen a identificar de manera temprana operaciones que presentan comportamientos inusuales o inconsistentes. A través del análisis de la información reportada, las entidades pueden reconocer posibles señales de alerta. Esto permite actuar de forma oportuna frente a situaciones que representen un riesgo.
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img32.png', alt='Gráfico ilustrativo de uso de programa')
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 Cumplimiento normativo
              p Los sistemas de reporte permiten a las organizaciones dar cumplimiento a las disposiciones establecidas por las autoridades de supervisión y control. Su adecuada implementación asegura el registro y envío de información dentro de los plazos definidos. Esto contribuye a evitar sanciones y fortalecer la gestión institucional.
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img33.png', alt='Gráfico ilustrativo de uso de programa')
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 Cultura organizacional
              p La aplicación de estos sistemas promueve prácticas orientadas a la responsabilidad y el control en la gestión de las operaciones financieras. Las entidades fortalecen sus procesos internos y adoptan medidas que favorecen el cumplimiento. De esta manera, se consolida una cultura organizacional basada en la transparencia y la legalidad.
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img34.png', alt='Gráfico ilustrativo de uso de programa')
    .row.justify-content-center.align-items-center
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img35.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p Los elementos descritos permiten comprender que los sistemas de reporte no solo facilitan el registro y análisis de la información, sino que también fortalecen la transparencia, el control y el cumplimiento dentro de las organizaciones. Su adecuada implementación contribuye a mejorar la gestión de las operaciones financieras y a prevenir posibles situaciones que puedan afectar la integridad del sistema.
        .row.align-items-center.tarjeta.bt02.p-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img36.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 En este contexto, resulta necesario reconocer el papel de las entidades encargadas de supervisar, regular y controlar estas actividades, ya que su intervención permite garantizar la correcta aplicación de los mecanismos establecidos. La participación de estos organismos es fundamental para asegurar el seguimiento de las operaciones y la articulación de acciones orientadas a la prevención de riesgos dentro del sistema financiero.
          

</template>

<script>
export default {
  name: 'Tema3',
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
