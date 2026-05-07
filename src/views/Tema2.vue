<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Identificación y análisis de operaciones financieras
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema2/img1.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-8
        p La identificación y el análisis de las operaciones financieras constituyen un proceso fundamental dentro del sistema SARLAFT, ya que permiten a las organizaciones monitorear las transacciones realizadas por los clientes y detectar posibles actividades relacionadas con el lavado de activos o la financiación del terrorismo. A través de este proceso, las entidades evalúan si las operaciones realizadas corresponden con el perfil financiero y la actividad económica declarada por el cliente, lo que facilita la detección oportuna de situaciones de riesgo.
        .bt06.p-4
          p.mb-0 Dentro del sistema SARLAFT, las organizaciones deben establecer mecanismos de control que faciliten el seguimiento permanente de las operaciones financieras, con el fin de analizar su frecuencia, monto, origen y destino. Del mismo modo, cuando se identifican transacciones inusuales o inconsistentes con el perfil del cliente, las entidades deben aplicar procedimientos de revisión y análisis que permitan determinar si dichas operaciones corresponden a actividades legítimas o si requieren ser reportadas a las autoridades competentes.
        
    .row.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', style="width:120px", alt='Texto que describa la imagen')
      .col-lg-7
        p.mb-0 Las operaciones financieras dentro del sistema SARLAFT se clasifican en cuatro tipos según su comportamiento y nivel de riesgo: las operaciones habituales, que corresponden al perfil normal del cliente; las operaciones inusuales, que presentan características atípicas sin justificación inmediata; las operaciones sospechosas, que tras ser analizadas presentan indicios de actividades ilícitas; y las señales de alerta, que activan los mecanismos de control y reporte. La siguiente tabla describe las características principales de cada tipo, el nivel de riesgo asociado y la acción que debe adoptar la organización en cada caso.
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema2/img2.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Clasificación y caracterización de las operaciones financieras en el sistema SARLAFT
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Tipo de operación
                  th Características principales
                  th Nivel de riesgo
                  th Acción requerida
              tbody
                tr
                  th Operaciones habituales
                  td Corresponden al comportamiento normal del cliente según su perfil financiero y actividad económica declarada.
                  td Bajo
                  td Registro y monitoreo de rutina.
                tr  
                  th Operaciones inusuales
                  td Se apartan del comportamiento habitual del cliente sin que exista una justificación inmediata y verificable.
                  td Medio
                  td Análisis interno y solicitud de información adicional al cliente.
                tr
                  th Operaciones sospechosas
                  td Presentan indicios, tras el análisis, de estar relacionadas con lavado de activos o financiación del terrorismo.
                  td Alto
                  td Elaboración y envío del Reporte de Operaciones Sospechosas (ROS) a la UIAF.
                tr
                  th Operaciones relevantes
                  td Por su monto, frecuencia o características requieren un monitoreo especial por parte de la organización.
                  td Medio-alto
                  td Seguimiento reforzado y documentación detallada de la transacción.
                tr
                  th Señales de alerta
                  td Indicadores que evidencian posibles riesgos y activan los mecanismos de control y prevención.
                  td Variable
                  td Activación inmediata de los protocolos internos de revisión y reporte.
    .bloque-texto-gg.tarjeta.bt02
      .bloque-texto-gg__texto.p-4
        .row
            .col-lg-auto.d-none.d-lg-block.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img4.svg', style="width:100px", alt='Texto que describa la imagen')
            .col-lg-12
              p.mb-0 Los tipos de operaciones descritos evidencian que cada transacción financiera exige una respuesta institucional diferenciada, que va desde el monitoreo de rutina hasta el reporte formal ante las autoridades competentes. Reconocer estas diferencias y actuar conforme a los procedimientos establecidos por la normativa vigente constituye el fundamento del control efectivo dentro del sistema SARLAFT. Los siguientes apartados profundizan en las características específicas de cada tipo de operación y en los criterios que permiten identificarlas dentro de las transacciones cotidianas de las organizaciones.
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img3.png')})`}"
      ) 
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Operaciones financieras habituales
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-9.order-2.order-lg-1
          p Las operaciones financieras habituales corresponden a aquellas transacciones que realizan los clientes dentro de su comportamiento normal y que están alineadas con su perfil financiero, su actividad económica y el uso esperado de los productos o servicios ofrecidos por la entidad. Estas operaciones se caracterizan por mantener patrones consistentes en términos de frecuencia, monto, origen y destino de los recursos.
          .bt01.p-4
            p.mb-0 En el contexto del sistema SARLAFT, la identificación de las operaciones habituales es un aspecto clave para el monitoreo adecuado de las transacciones realizadas por los clientes. Cuando una entidad conoce el perfil financiero de sus clientes, puede establecer un marco de referencia que permita diferenciar entre las operaciones normales y aquellas que presentan características atípicas o inusuales.
        .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/tema2/img5.svg', width='180', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .tarjeta-avatar.mb-4
            img(src='@/assets/curso/temas/tema2/img6.svg', alt='AvatarTop')
            .tarjeta.color-primario.rounded-0.p-4
              p.text-center.mb-0 Conocer el comportamiento habitual del cliente es el primer paso para detectar cualquier desviación que pueda representar un riesgo para la organización.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
              img(src='@/assets/curso/temas/tema2/img7.svg', alt='Texto que describa la imagen')
      .col-lg-8
        .row.mb-3
          .col-lg-11
            p.mb-0 Del mismo modo, el análisis de las operaciones financieras habituales facilita la detección temprana de posibles riesgos asociados al lavado de activos o la financiación del terrorismo. Al contar con información clara sobre el comportamiento financiero esperado de un cliente, las organizaciones pueden identificar con mayor facilidad transacciones que se aparten de dicho comportamiento y que requieran un análisis adicional.
          .col-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/intro/img3.svg', style="width:120px", alt='Texto que describa la imagen')
        .row.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img8.svg', style="width:120px", alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 Por esta razón, las entidades deben establecer mecanismos que permitan registrar y analizar de manera permanente las operaciones habituales de sus clientes. Este proceso contribuye a fortalecer los sistemas de control interno, mejorar el monitoreo de las transacciones financieras y garantizar el cumplimiento de las normas relacionadas con la prevención del lavado de activos y la financiación del terrorismo.
    p.mb-4 Entre algunos ejemplos de operaciones financieras habituales se encuentran las siguientes:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Depósito periódico de ingresos")
            p.mb-0 Abono regular de dinero en una cuenta, derivado de la actividad laboral o comercial del cliente y acorde con el monto de sus ingresos habituales. Ejemplo: consignación mensual de salario en cuenta de ahorros.
          .row(numero="2" titulo="Pago de obligaciones financieras")
            p.mb-0 Cancelación de cuotas de créditos, tarjetas o productos financieros adquiridos por el cliente, con frecuencia y montos coherentes con su perfil. Ejemplo: pago mensual de la cuota de un crédito de vivienda.
          .row(numero="3" titulo="Pago de servicios y gastos regulares")
            p.mb-0 Transferencias o débitos destinados a cubrir servicios públicos, seguros o gastos del hogar que corresponden al nivel de vida del cliente. Ejemplo: pago automático mensual de servicios de energía, agua o telefonía.
          .row(numero="4" titulo="Transferencia entre cuentas propias")
            p.mb-0 Movimiento de dinero entre cuentas del mismo titular en la misma entidad o entre entidades diferentes, sin cambio en la titularidad de los recursos. Ejemplo: traslado de fondos de cuenta corriente a cuenta de ahorros para administrar gastos.
          .row(numero="5" titulo="Pago a proveedores o empleados")
            p.mb-0 Desembolso de recursos por parte de una empresa hacia sus proveedores o colaboradores, dentro de su ciclo operativo normal. Ejemplo: transferencia semanal de nómina a empleados de una empresa comercial.
          .row(numero="6" titulo="Retiro en efectivo proporcional al perfil")
            p.mb-0 Extracción de dinero en montos acordes con el nivel de ingresos y el comportamiento financiero habitual del cliente. Ejemplo: retiro mensual en cajero automático equivalente al gasto personal habitual del cliente.
          .row(numero="7" titulo="Recepción de pagos por actividad económica")
            p.mb-0 Ingreso de recursos provenientes de clientes o compradores, coherente con la actividad comercial o profesional declarada. Ejemplo: consignación de un cliente por la compra de mercancía a una empresa distribuidora.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img9.png', alt='')
    p.mb-0 Las operaciones descritas comparten una característica esencial, son predecibles, verificables y coherentes con el perfil financiero del cliente. Esta consistencia es precisamente lo que permite a las organizaciones detectar cuándo una transacción se aparta del comportamiento esperado y requiere un análisis más detallado, situación que caracteriza a las operaciones inusuales, desarrolladas en el siguiente apartado.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Operaciones inusuales
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
              img(src='@/assets/curso/temas/tema2/img10.png', width='180', alt='Texto que describa la imagen')
      .col-lg-8
        p.mb-2 Las operaciones inusuales son aquellas transacciones financieras que presentan características atípicas o que no corresponden con el comportamiento habitual del cliente según su perfil financiero, su actividad económica o el tipo de relación que mantiene con la entidad. Estas operaciones pueden generar alertas dentro de los sistemas de monitoreo, ya que se apartan de los patrones normales previamente establecidos para el cliente.
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img11.svg', style="width:100px", alt='Texto que describa la imagen')
          .col-lg-9
            p.mb-0 Dentro del sistema SARLAFT, la identificación de operaciones inusuales constituye un mecanismo importante para la prevención del lavado de activos y la financiación del terrorismo. Cuando una organización detecta transacciones que no se ajustan al perfil del cliente, debe realizar un análisis más detallado con el fin de determinar si dichas operaciones tienen una justificación legítima o si pueden estar relacionadas con actividades ilícitas.
    .bloque-texto-gg.bloque-texto-gg--inverso.tarjeta.bt06.mb-4
      .bloque-texto-gg__texto.p-4
        p.mb-0 Una operación inusual no implica necesariamente la existencia de una actividad ilegal. Existen situaciones legítimas que pueden generar variaciones en el comportamiento financiero habitual del cliente y que, tras un proceso de verificación y análisis, cuentan con una justificación válida. La siguiente infografía presenta los cuatro contextos más frecuentes en los que puede originarse una operación inusual dentro del sistema SARLAFT.
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img12.svg')})`}"
      )  
    .row.justify-content-center.mb-4
      .col-lg-10
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/img13.svg', alt='Infografía de matriz RACI')
            .tarjeta.tarjeta.bt01.p-3(x="22.6%" y="50%" numero="+")
              p Modificación en la actividad laboral o comercial del cliente que genera variaciones en sus transacciones, sin que ello implique una actividad ilícita. 

            .tarjeta.tarjeta.bt01.p-3(x="40.7%" y="50%" numero="+")
              p Transacciones de mayor valor o frecuencia que obedecen a eventos puntuales verificables, como la venta de un bien o el cobro de una indemnización.
            
            .tarjeta.tarjeta.bt01.p-3(x="59.2%" y="50%" numero="+")
              p Operaciones que responden a necesidades particulares del cliente como los gastos médicos o compromisos comerciales, sustentadas mediante documentación de soporte.

            .tarjeta.tarjeta.bt01.p-3(x="77.5%" y="50%" numero="+")
              p Proceso mediante el cual la entidad solicita información adicional al cliente para determinar si la operación tiene justificación legítima o debe ser reportada.
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema2/img14.svg', alt='Matriz RACI para dispositivos móviles')
        .row.justify-content-center.align-items-center.tarjeta.bt02.p-4.mb-4
          .col-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img15.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p La detección oportuna de operaciones inusuales permite a las organizaciones fortalecer sus mecanismos de control y monitoreo dentro del sistema SARLAFT. A través del análisis de estas transacciones, las entidades pueden identificar posibles riesgos, solicitar información adicional al cliente y adoptar medidas preventivas que contribuyan a evitar el uso indebido del sistema financiero para actividades ilícitas.
    p.mb-4 Entre algunos ejemplos de operaciones inusuales se encuentran los siguientes:
    .BGINTRO01.px-5.mb-4
      SlyderF(columnas="col-lg-6 col-xl-4").mb-4
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema2/img16.svg' alt='AvatarTop')
          h5.text-center Exceso en el promedio habitual
          p.text-center movimientos de dinero que superan de manera significativa el monto promedio de las transacciones registradas en el historial financiero del cliente.
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema2/img17.svg' alt='AvatarTop')
          h5.text-center Depósitos o transferencias sin justificación
          p.text-center operaciones frecuentes cuyos recursos no tienen una explicación comercial, laboral o personal verificable que respalde su realización.
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema2/img18.svg' alt='AvatarTop')
          h5.text-center Inconsistencia con la actividad económica
          p.text-center transacciones cuyo monto, frecuencia u origen no corresponden con la actividad económica declarada por el cliente ante la entidad. 
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema2/img19.svg' alt='AvatarTop')
          h5.text-center Movimientos entre múltiples cuentas
          p.text-center traslados de dinero entre varias cuentas sin una razón comercial o financiera aparente que justifique la fragmentación de los recursos.
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema2/img29.svg' alt='AvatarTop')
          h5.text-center Incremento repentino en transacciones
          p.text-center aumento súbito en el número o volumen de operaciones realizadas por el cliente sin que exista un cambio verificable en su actividad económica.
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema2/img21.svg' alt='AvatarTop')
          h5.text-center Transferencias a zonas de alto riesgo
          p.text-center envíos de dinero hacia países o jurisdicciones que presentan deficiencias en sus sistemas de prevención del lavado de activos y la financiación del terrorismo. 
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema2/img22.svg' alt='AvatarTop')
          h5.text-center Uso excesivo de efectivo
          p.text-center manejo frecuente de grandes cantidades de dinero en efectivo que no guarda relación con la actividad económica ni con el perfil financiero del cliente. 
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema2/img23.svg' alt='AvatarTop')
          h5.text-center Operaciones realizadas por terceros
          p.text-center transacciones ejecutadas por personas sin vínculo comercial o familiar verificable con el cliente titular de la cuenta o del producto financiero.
    .row.justify-content-center.align-items-center
      .col-lg-8
        p Las situaciones descritas no constituyen por sí solas evidencias de actividad ilícita, pero sí representan señales que obligan a la organización a iniciar un proceso de verificación. La detección oportuna de estas transacciones y su análisis riguroso determinan si la operación cuenta con una justificación legítima o si debe ser escalada al siguiente nivel de control dentro del sistema SARLAFT.
        .bt02.p-4
          p.mb-0 Cuando el proceso de verificación no logra justificar adecuadamente el origen o la finalidad de los recursos involucrados en una operación inusual, esta adquiere una condición de mayor gravedad dentro del sistema de monitoreo. Este es el punto de partida de las operaciones sospechosas, cuyas características, criterios de identificación y obligaciones de reporte se desarrollan en el siguiente apartado.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img24.png', width='180', alt='Texto que describa la imagen')
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Operaciones sospechosas
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p Las operaciones sospechosas son aquellas transacciones financieras que, después de un proceso de análisis, presentan indicios o características que pueden estar relacionadas con actividades de lavado de activos o financiación del terrorismo. A diferencia de las operaciones inusuales, que inicialmente generan una alerta por apartarse del comportamiento habitual del cliente, las operaciones sospechosas surgen cuando, tras una revisión detallada, no es posible justificar adecuadamente el origen o la finalidad de los recursos involucrados.
        .row.align-items-center.tarjeta.bt02.p-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img25.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 Una herramienta clave dentro del sistema SARLAFT es la capacidad de distinguir entre una operación inusual y una operación sospechosa, ya que ambos conceptos comparten características similares, pero implican niveles de riesgo y acciones institucionales diferentes. La siguiente figura presenta esta distinción de manera clara y visual, con el fin de orientar el proceso de análisis y la toma de decisiones dentro de las organizaciones.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img26.png', width='180', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figure 2.
          span ¿Es la operación sospechosa o inusual?
    .row.justify-content-center.mb-4
      .col-lg-10
        .d-none.d-lg-block
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/img27.svg', alt='Infografía de matriz RACI')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema2/img27_1.svg', alt='Matriz RACI para dispositivos móviles')
    .row.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-11
        p.mb-0 Dentro del sistema SARLAFT, la identificación de operaciones sospechosas constituye un elemento clave para la prevención de actividades ilícitas dentro del sistema financiero. Cuando una organización detecta este tipo de transacciones, debe aplicar procedimientos internos de análisis y documentación que permitan evaluar la naturaleza de la operación y determinar si existen elementos suficientes para considerarla sospechosa.
    .bloque-texto-g.tarjeta.bt04.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img28.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Asimismo, cuando una operación es clasificada como sospechosa, la entidad tiene la obligación de reportarla a las autoridades competentes a través de los mecanismos establecidos por la normativa vigente. En el caso de Colombia, este reporte se realiza a la Unidad de Información y Análisis Financiero (UIAF), entidad encargada de recibir, analizar y procesar información relacionada con posibles actividades de lavado de activos y financiación del terrorismo.
    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema2/img29.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 La identificación y reporte de operaciones sospechosas permite fortalecer los mecanismos de control dentro del sistema financiero y contribuye a la lucha contra el crimen organizado. A través de estos procesos, las organizaciones colaboran con las autoridades en la detección de actividades ilícitas, protegen la integridad de sus operaciones y promueven la transparencia en el manejo de los recursos financieros.
    p.mb-4 Entre algunos ejemplos de operaciones sospechosas se encuentran los siguientes:
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .tarjeta.bt06.p-4
            .row.justify-content-center.align-items-center
              .col-lg-9.order-2.order-lg-1
                ol.lista-ol--cuadro.mb-0
                  li
                  i.fas.fa-lock(style="color: #CFDE90;")
                  |  Transacciones que no tienen una justificación económica o legal clara.
                  li
                  i.fas.fa-lock(style="color: #CFDE90;")
                  |  Movimientos de grandes sumas de dinero sin relación con la actividad económica del cliente.
                  li
                  i.fas.fa-lock(style="color: #CFDE90;")
                  |  Operaciones realizadas con el objetivo aparente de evitar controles o reportes regulatorios.
                  li
                  i.fas.fa-lock(style="color: #CFDE90;")
                  |  Transferencias frecuentes entre cuentas con el propósito de ocultar el origen de los recursos.
                  li
                  i.fas.fa-lock(style="color: #CFDE90;")
                  |  Uso de intermediarios o terceros sin una razón clara para realizar transacciones financieras.
                  li
                  i.fas.fa-lock(style="color: #CFDE90;")
                  |  Movimientos financieros vinculados con personas o entidades investigadas por actividades ilícitas.
                  li
                  i.fas.fa-lock(style="color: #CFDE90;")
                  |  Depósitos o retiros de grandes cantidades de dinero en efectivo sin explicación válida.
                  li
                  i.fas.fa-lock(style="color: #CFDE90;")
                  |  Operaciones que presentan estructuras complejas destinadas a dificultar el seguimiento del dinero.                  
              .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/tema2/img30.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
              img(src='@/assets/curso/temas/tema2/img31.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p.mb-4 Las situaciones descritas activan la obligación normativa de elaborar y enviar el Reporte de Operaciones Sospechosas (ROS) a la Unidad de Información y Análisis Financiero (UIAF), sin que sea necesario tener certeza absoluta sobre la actividad ilícita, sino indicios razonables que justifiquen el reporte. Este mecanismo protege a las organizaciones frente a riesgos legales y reputacionales, y contribuye al fortalecimiento del sistema de control financiero en Colombia.
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img32.svg', style="width:100px", alt='Texto que describa la imagen')
          .col-lg-9
            p.mb-0 La detección de operaciones sospechosas depende, en gran medida, de la capacidad de las organizaciones para reconocer con anticipación los indicadores que alertan sobre un posible riesgo. Estos indicadores, conocidos como señales de alerta, constituyen el primer eslabón en la cadena de control del sistema SARLAFT y se describen a continuación. 
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4 Señales de alerta en las transacciones financieras
    p.mb-4 Las señales de alerta en las transacciones financieras son indicadores o comportamientos que pueden evidenciar posibles riesgos relacionados con el lavado de activos o la financiación del terrorismo. Estas señales permiten a las organizaciones identificar situaciones que se apartan del comportamiento financiero habitual de los clientes y que pueden requerir un análisis más detallado dentro del sistema SARLAFT.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.order-2.order-lg-1
        .bt02.p-4.mb-3
          p.mb-2 En el proceso de monitoreo de operaciones financieras, las entidades deben establecer mecanismos que faciliten la detección de estas señales de alerta. Dichos mecanismos pueden incluir sistemas de monitoreo automatizado, análisis de patrones de comportamiento financiero y revisión de transacciones que presenten características atípicas o inconsistentes con el perfil del cliente.
        .tarjeta.color-primario.p-4.text-center
          p.mb-0 Una señal de alerta no equivale a una actividad ilícita, es un indicador que activa el proceso de verificación y análisis dentro de la organización.
      .col-lg-2.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
              img(src='@/assets/curso/temas/tema2/img33.png', width='180', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img34.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9   
        p.mb-4 En muchos casos, estas situaciones pueden tener explicaciones legítimas relacionadas con cambios en la actividad económica del cliente o con operaciones extraordinarias. Sin embargo, cuando se identifican estas señales, las organizaciones deben realizar procesos de verificación y análisis que permitan determinar la naturaleza de la transacción.
        .row
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img35.svg', style="width:150px", alt='Texto que describa la imagen')
          .col-lg-8
            p.mb-0 La identificación oportuna de señales de alerta contribuye al fortalecimiento de los mecanismos de control dentro de las organizaciones y facilita la detección temprana de posibles riesgos asociados al lavado de activos y la financiación del terrorismo. A través del análisis de estas señales, las entidades pueden adoptar medidas preventivas, solicitar información adicional a los clientes y, cuando sea necesario, reportar operaciones sospechosas a las autoridades competentes.
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/intro/img3.svg', style="width:150px", alt='Texto que describa la imagen')
    p.mb-4 Entre algunas de las principales señales de alerta en las transacciones financieras se encuentran las siguientes:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-1.order-lg-2
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Movimientos inconsistentes con el perfil")
            p.mb-0 transacciones cuyo monto u origen no corresponden con la actividad económica declarada por el cliente. Ejemplo: depósitos diarios en efectivo por parte de un cliente que declaró ser empleado con ingresos fijos mensuales. 
          .row(numero="2" titulo="Incremento repentino de transacciones")
            p.mb-0 aumento súbito en el número o volumen de operaciones sin que exista un cambio verificable en la actividad económica del cliente. Ejemplo: cliente que pasa de realizar dos transacciones mensuales a veinte en una semana. 
          .row(numero="3" titulo="Uso excesivo de efectivo")
            p.mb-0  manejo frecuente de grandes sumas en efectivo que no guardan relación con el perfil financiero ni con la actividad económica habitual del cliente. Ejemplo: comerciante que deposita diariamente montos elevados en efectivo sin soporte de ventas. 
          .row(numero="4" titulo="Transferencias a zonas de alto riesgo")
            p.mb-0 envíos recurrentes de dinero hacia países o jurisdicciones con deficiencias reconocidas en sus sistemas de prevención del lavado de activos. Ejemplo: transferencias semanales hacia países incluidos en listas internacionales de alto riesgo financiero. 
          .row(numero="5" titulo="Apertura injustificada de cuentas")
            p.mb-0 creación de múltiples productos financieros por parte de un mismo cliente sin una razón comercial o personal verificable que lo justifique. Ejemplo: apertura de cinco cuentas de ahorros en diferentes entidades en un periodo de treinta días.
          .row(numero="6" titulo="Operaciones realizadas por terceros")
            p.mb-0 transacciones ejecutadas por personas sin vínculo comercial o familiar comprobable con el titular del producto financiero. Ejemplo: terceros que realizan depósitos frecuentes en la cuenta de un cliente con el que no tienen relación demostrable. 
          .row(numero="7" titulo="Fragmentación de transacciones")
            p.mb-0 división de grandes sumas en múltiples operaciones de menor valor con el propósito de evadir los umbrales de reporte regulatorio. Ejemplo: cliente que realiza tres depósitos consecutivos de nueve millones de pesos para evitar el reporte obligatorio de diez millones. 
          .row(numero="8" titulo="Cancelación anticipada de productos")
            p.mb-0 liquidación prematura de productos financieros sin justificación económica clara, especialmente cuando implica pérdidas para el cliente. Ejemplo: cancelación anticipada de un CDT asumiendo penalidades, sin una razón financiera que lo sustente. 
          .row(numero="9" titulo="Estructuras financieras complejas")
            p.mb-0  operaciones que involucran múltiples instrumentos, cuentas o entidades sin una justificación económica clara, orientadas a dificultar el seguimiento del dinero. Ejemplo: recursos que transitan por cuatro cuentas en distintas entidades antes de llegar a su destino final sin propósito comercial evidente.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-2.order-lg-1
        figure
          img(src='@/assets/curso/temas/tema2/img36.png', alt='')
    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema2/img37.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 El reconocimiento oportuno de estas señales depende de la capacidad de las organizaciones para analizar el comportamiento financiero de sus clientes de manera integral y permanente. Ninguna señal debe evaluarse de forma aislada, su valor radica en el patrón que configura con otras transacciones y en la coherencia que guarda con el perfil financiero del cliente. Cuando estas señales persisten o se combinan entre sí sin una justificación verificable, las organizaciones tienen la obligación de activar los mecanismos de reporte establecidos por el sistema SARLAFT.
     

</template>

<script>
export default {
  name: 'Tema2',
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
