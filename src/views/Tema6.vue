<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Conservación de documentos e información
    p.mb-4 La conservación de documentos e información constituye un aspecto fundamental dentro del sistema SARLAFT, ya que permite a las organizaciones mantener registros claros y verificables de las operaciones realizadas por sus clientes. Estos registros facilitan la trazabilidad de las transacciones financieras y contribuyen al cumplimiento de las disposiciones legales relacionadas con la prevención del lavado de activos y la financiación del terrorismo.
    .bloque-texto-g.tarjeta.bt04.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En el marco de los procesos de control interno, las entidades deben garantizar que la información relacionada con la identificación de los clientes, las operaciones realizadas y los reportes efectuados a las autoridades competentes sea almacenada de manera segura y organizada. La adecuada conservación de estos documentos permite que las organizaciones puedan responder oportunamente a requerimientos de información por parte de los organismos de supervisión y control.
    .bt02.p-4.mb-4
        .row.justify-content-center.align-items-center
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img2.svg', width='70', alt='Icono de cooperación global')
          .col-lg
            p.mb-0 Asimismo, la gestión adecuada de la documentación contribuye a fortalecer la transparencia y la confiabilidad de los procesos institucionales. La disponibilidad de información clara y actualizada facilita la realización de auditorías internas y externas, permite el análisis de las operaciones financieras y apoya las investigaciones relacionadas con posibles actividades ilícitas dentro del sistema económico.
    p.mb-4 Para garantizar el adecuado manejo de la información dentro del sistema SARLAFT, las organizaciones deben implementar políticas y procedimientos que regulen la conservación, almacenamiento y protección de los documentos relacionados con las operaciones financieras y la información de los clientes.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Documentos e información que deben conservar las organizaciones
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Tipo de documento
                  th Descripción
              tbody
                tr
                  th Documentos de identificación del cliente
                  td Información que permite verificar la identidad de las personas naturales o jurídicas que mantienen relaciones con la entidad.
                tr  
                  th Registros de operaciones financieras
                  td Información detallada sobre las transacciones realizadas por los clientes dentro de la organización.
                tr
                  th Reportes de operaciones sospechosas
                  td Documentación relacionada con los reportes enviados a las autoridades competentes sobre operaciones que presentan indicios de irregularidad.
                tr
                  th Información de conocimiento del cliente (KYC)
                  td Datos recopilados durante el proceso de identificación y análisis del perfil financiero del cliente.
                tr
                  th Registros de monitoreo de operaciones
                  td Información generada por los sistemas de control y seguimiento de transacciones financieras.
                tr
                  th Documentos de auditoría y control interno
                  td Informes y registros relacionados con la verificación del cumplimiento de las políticas y procedimientos del sistema SARLAFT.
    .row.align-items-center
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 Los documentos relacionados en la tabla anterior conforman el conjunto de información que las organizaciones deben conservar para garantizar la trazabilidad de sus operaciones y el cumplimiento de sus obligaciones dentro del sistema SARLAFT. La adecuada gestión de estos registros es el fundamento de los procesos de gestión documental, cuya importancia se analiza en el siguiente apartado.
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.1 Importancia de la gestión documental
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema6/img3.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p La gestión documental es un proceso fundamental dentro de las organizaciones, especialmente en aquellas que manejan información financiera y deben cumplir con las disposiciones relacionadas con la prevención del lavado de activos y la financiación del terrorismo. Este proceso consiste en la organización, almacenamiento, control y conservación de los documentos que respaldan las operaciones realizadas por la entidad y la información relacionada con sus clientes.
        .row.align-items-center.tarjeta.bt06.p-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img4.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 En el contexto del sistema SARLAFT, la gestión documental cumple un papel estratégico al garantizar que las organizaciones conserven evidencia clara y verificable de sus operaciones. Los elementos que la conforman permiten sustentar el cumplimiento normativo ante las autoridades competentes y constituyen la base del sistema de control interno, entre los cuales se destacan los siguientes:
    .bg_img_01.mb-4
      .row.justify-content-center
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema6/img5.svg", alt="alt")
            h4.text-center Registros de transacciones financieras
            p.text-center.mb-0 documentación clara y verificable de todas las operaciones económicas realizadas por la entidad, que permite rastrear el origen y destino de los recursos y detectar movimientos inusuales o sospechosos dentro del sistema financiero.
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema6/img6.svg", alt="alt")
            h4.text-center Procesos de identificación del cliente
            p.text-center.mb-0 onjunto de procedimientos mediante los cuales la organización verifica y registra la identidad de sus clientes, con el fin de conocer su perfil de riesgo y garantizar que sus operaciones se encuentren dentro del marco legal establecido. 
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema6/img7.svg", alt="alt")
            h4.text-center Reportes a las autoridades competentes
            p.text-center.mb-0 informes periódicos que las entidades están obligadas a presentar ante los organismos de supervisión y control, con el propósito de comunicar operaciones sospechosas o situaciones que puedan estar relacionadas con el lavado de activos o la financiación del terrorismo.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1
        p Los tres elementos descritos constituyen una fuente de información esencial para el seguimiento de las operaciones y el análisis de posibles situaciones de riesgo. Su adecuada gestión no solo respalda el cumplimiento de las obligaciones regulatorias establecidas por las autoridades de supervisión y control, sino que fortalece la capacidad de la organización para responder oportunamente ante procesos de auditoría, supervisión e investigación relacionados con la prevención del lavado de activos y la financiación del terrorismo.
        .bt02.p-4
          p.mb-0 Asimismo, una adecuada gestión documental facilita el cumplimiento de las obligaciones regulatorias establecidas por las autoridades de supervisión y control. Las organizaciones deben garantizar que la información relevante esté disponible cuando sea requerida por los organismos de control, lo cual permite apoyar procesos de auditoría, supervisión e investigación relacionados con la prevención del lavado de activos y la financiación del terrorismo.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema6/img11.svg', width='180', alt='Texto que describa la imagen')
    p.mb-4 La implementación de políticas de gestión documental contribuye a mejorar la eficiencia administrativa de las organizaciones, al facilitar la organización, conservación y consulta oportuna de la información. Entre los principales beneficios de una gestión documental adecuada se destacan los siguientes:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema6/img12.svg' alt='AvatarTop')
            .tarjeta.color-primario.w-100
              .p-4
                h5.text-center Acceso y consulta de información
                p Garantiza la disponibilidad oportuna de los registros y documentos requeridos por las autoridades de supervisión, control o auditoría.
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema6/img3.svg' alt='AvatarTop')
            .tarjeta.color-primario.w-100
              .p-4
                h5.text-center Conservación de registros financieros  
                p Permite mantener evidencia confiable y verificable de las operaciones realizadas por la entidad dentro del sistema financiero. 
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema6/img14.svg' alt='AvatarTop')
            .tarjeta.color-primario.w-100
              .p-4
                h5.text-center Cumplimiento normativo
                p Fortalece la aplicación de las disposiciones relacionadas con el sistema SARLAFT, reduciendo el riesgo de sanciones por incumplimiento. 
      .col-lg-3
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema6/img15.svg' alt='AvatarTop')
            .tarjeta.color-primario.w-100
              .p-4
                h5.text-center Protección de la información
                p Salvaguarda los documentos y registros institucionales frente a pérdidas, alteraciones o accesos no autorizados, garantizando su integridad y confidencialidad.
    p.mb-4 Los beneficios descritos demuestran que una gestión documental sólida no solo responde a una exigencia regulatoria, sino que se convierte en un instrumento estratégico que fortalece la transparencia, la trazabilidad de las operaciones y la capacidad de respuesta institucional frente a los procesos de supervisión y control del sistema LA/FT.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bt02
          .row.justify-content-center.align-items-center.p-4.mb-4
            .col-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema6/img16.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-9
              p Junto a la gestión documental, la protección de la información personal y financiera de los clientes constituye otro pilar fundamental del sistema de prevención del lavado de activos y la financiación del terrorismo. El siguiente apartado describe los mecanismos que las organizaciones deben implementar para garantizar la confidencialidad, integridad y disponibilidad de estos datos.
    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.2 Protección de la información del cliente
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-9.order-2.order-lg-1
          p.mb-2 La protección de la información del cliente es un aspecto esencial dentro de los procesos de gestión de la información en las organizaciones, especialmente en aquellas que operan dentro del sistema financiero. Las entidades que recopilan y administran datos personales y financieros tienen la responsabilidad de garantizar que esta información sea utilizada de manera adecuada, evitando su divulgación, uso indebido o acceso no autorizado.
          .bt02.p-4
            p.mb-0 En el contexto del sistema SARLAFT, la información del cliente es fundamental para los procesos de conocimiento del cliente (KYC), monitoreo de operaciones y prevención del lavado de activos y la financiación del terrorismo. Por esta razón, las organizaciones deben implementar mecanismos que permitan proteger la confidencialidad, integridad y disponibilidad de los datos recopilados durante las relaciones comerciales o financieras.
        .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/tema6/img17.png', width='180', alt='Texto que describa la imagen')
    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 El marco legal colombiano respalda la protección de la información del cliente mediante disposiciones que regulan su tratamiento, almacenamiento y uso. En ese contexto, las organizaciones deben adoptar medidas concretas que garanticen la confidencialidad e integridad de los datos recopilados, entre las cuales se destacan las siguientes:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema6/img18.png', alt='')
      .col-lg-7.order-2.order-lg-1
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Políticas de seguridad de la información")
            p.mb-0 lineamientos internos que establecen los criterios para el manejo, protección y uso adecuado de los datos personales y financieros dentro de la organización. 
          .row(numero="2" titulo="Control de acceso")
            p.mb-0 mecanismos que restringen el ingreso a los sistemas de información, garantizando que solo el personal autorizado pueda consultar o modificar los datos de los clientes. 
          .row(numero="3" titulo="Herramientas tecnológicas de protección")
            p.mb-0 recursos digitales implementados para salvaguardar los datos almacenados frente a accesos no autorizados, pérdidas o alteraciones.
          .row(numero="4" titulo="Capacitación del personal")
            p.mb-0 formación continua dirigida a los colaboradores de la organización sobre el manejo responsable y confidencial de la información sensible de los clientes. 
          .row(numero="5" titulo="Procedimientos para el tratamiento de datos")
            p.mb-0 protocolos documentados que regulan la recopilación, procesamiento y conservación de la información personal conforme a la normativa vigente.
          .row(numero="6" titulo="Monitoreo y control permanente")
            p.mb-0  seguimiento continuo del uso de la información dentro de la organización, con el fin de detectar y prevenir situaciones de riesgo o incumplimiento normativo
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p Las medidas descritas configuran un sistema integral de protección que permite a las organizaciones cumplir con sus obligaciones legales en materia de privacidad, fortalecer la confianza de sus clientes y reducir el riesgo de que la información sensible sea utilizada para fines distintos a los autorizados dentro del marco del sistema LA/FT.
        .row.justify-content-center.align-items-center.tarjeta.bt06.p-4.mb-4
          .col-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img19.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p De igual manera, la implementación de políticas de protección de la información contribuye a fortalecer la confianza entre las organizaciones y sus clientes. Cuando las entidades demuestran que cuentan con mecanismos adecuados para proteger los datos personales y financieros, promueven una mayor transparencia en sus operaciones y fortalecen la seguridad de la información dentro de sus sistemas.
    p.mb-4 Entre algunas de las principales medidas para la protección de la información del cliente se encuentran las siguientes:             
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .tarjeta.bt06.p-4
            .row.justify-content-center.align-items-center
              .col-lg-8.order-2.order-lg-1
                ul.lista-ul
                  li
                    i.fas.fa-lock(style="color: #CFDE90;")
                    | Implementación de políticas de seguridad de la información dentro de la organización.
                  li
                    i.fas.fa-lock(style="color: #CFDE90;")
                    | Control de acceso a los sistemas que contienen información de los clientes.
                  li
                    i.fas.fa-lock(style="color: #CFDE90;")
                    | Uso de herramientas tecnológicas para proteger los datos almacenados.
                  li
                    i.fas.fa-lock(style="color: #CFDE90;")
                    | Capacitación del personal en el manejo adecuado de la información confidencial.
                  li
                    i.fas.fa-lock(style="color: #CFDE90;")
                    | Establecimiento de procedimientos para el tratamiento de datos personales.
                  li
                    i.fas.fa-lock(style="color: #CFDE90;")
                    | Protección de los documentos físicos y digitales que contienen información sensible.
                  li
                    i.fas.fa-lock(style="color: #CFDE90;")
                    | Cumplimiento de la normativa relacionada con la protección de datos personales.
                  li
                    i.fas.fa-lock(style="color: #CFDE90;")
                    | Monitoreo y control permanente del uso de la información dentro de la organización.
              .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/tema6/img20.svg', alt='Texto que describa la imagen')
    p La implementación de las medidas de protección descritas anteriormente requiere de un soporte normativo interno que oriente de manera sistemática su aplicación dentro de la organización. Las políticas de privacidad y confidencialidad constituyen ese soporte, al establecer los lineamientos que regulan el ciclo completo de la información desde su recopilación hasta su conservación o eliminación.
    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.3 Políticas de privacidad y confidencialidad
    p.mb-4 Las políticas de privacidad y confidencialidad constituyen un conjunto de lineamientos y normas internas que establecen cómo las organizaciones deben recopilar, utilizar, almacenar y proteger la información personal y financiera de sus clientes. Estas políticas son fundamentales para garantizar que los datos sean manejados de manera responsable, segura y conforme a las disposiciones legales vigentes.
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .tarjeta-avatar.mb-4
            img(src='@/assets/curso/temas/tema6/img21.svg', alt='AvatarTop')
            .tarjeta.color-primario.rounded-0.p-4
              p.text-center.mb-0 La privacidad y la confidencialidad no son opcionales: constituyen obligaciones legales y éticas que definen la forma en que las organizaciones gestionan la información de sus clientes.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p En el contexto del sistema SARLAFT, las políticas de privacidad y confidencialidad permiten asegurar que la información obtenida durante los procesos de conocimiento del cliente, monitoreo de operaciones y reporte de transacciones sea utilizada únicamente para los fines autorizados. De esta manera, las organizaciones pueden prevenir el uso indebido de los datos y proteger la información sensible relacionada con sus clientes.
        .row.align-items-center.tarjeta.bt02.p-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img22.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 Asimismo, la implementación de políticas claras de privacidad y confidencialidad fortalece la confianza entre las organizaciones y los usuarios de sus servicios. Cuando los clientes tienen la seguridad de que su información será protegida adecuadamente, se promueve una relación basada en la transparencia y el respeto por la protección de los datos personales.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema6/img23.png', width='180', alt='Texto que describa la imagen')
    p.mb-4 La implementación de políticas claras de privacidad y confidencialidad genera efectos concretos sobre la relación entre la organización y sus grupos de interés, entre los cuales se destacan los siguientes:
    .bg_img_01.mb-4
      .row.justify-content-center
        .col-lg-3.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema6/img24.svg", alt="alt")
            h4.text-center Confianza institucional
            p.text-center.mb-0 cuando los clientes tienen certeza de que su información será protegida adecuadamente, se fortalece el vínculo de transparencia y credibilidad entre la organización y sus usuarios.
        .col-lg-3.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema6/img25.svg", alt="alt")
            h4.text-center Cumplimiento normativo
            p.text-center.mb-0 las políticas de privacidad permiten a las organizaciones cumplir con las disposiciones legales relacionadas con la protección de datos personales y la seguridad de la información.
        .col-lg-3.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema6/img26.svg", alt="alt")
            h4.text-center Control de acceso a la información
            p.text-center.mb-0 el establecimiento de procedimientos claros garantiza que solo el personal autorizado pueda gestionar la información confidencial, previniendo accesos no autorizados o usos indebidos.
        .col-lg-3.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema6/img27.svg", alt="alt")
            h4.text-center Protección de datos sensibles
            p.text-center.mb-0 la definición de responsabilidades en el manejo de la información asegura que los datos de los clientes sean utilizados únicamente para los fines autorizados dentro del marco legal vigente.
    p.mb-4 Los cuatro aspectos descritos evidencian que las políticas de privacidad y confidencialidad no se limitan a proteger la información, sino que estructuran una cultura organizacional basada en la responsabilidad, la transparencia y el respeto por los derechos de los clientes dentro del sistema financiero colombiano.
    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 Los elementos que estructuran las políticas de privacidad y confidencialidad dentro de las organizaciones abarcan aspectos técnicos, normativos y operativos que actúan de manera articulada. La siguiente tabla presenta los componentes esenciales que dichas políticas deben contemplar para garantizar una gestión responsable y segura de la información:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Elementos de las políticas de privacidad y confidencialidad
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido.mb-4
          .tabla-a   
            table
              thead
                tr
                  th Elemento
                  th Descripción
              tbody
                tr
                  th Recolección de información
                  td Definición de los tipos de datos que la organización puede recopilar de sus clientes y los fines para los cuales serán utilizados.
                tr                               
                  th Uso de la información
                  td Establecimiento de los propósitos para los cuales se utilizarán los datos personales y financieros de los clientes.
                tr
                  th Protección de datos
                  td Implementación de medidas de seguridad para proteger la información frente a accesos no autorizados o uso indebido.
                tr
                  th Control de acceso
                  td Definición de quiénes dentro de la organización pueden acceder a la información y en qué condiciones.
                tr
                  th Conservación de la información
                  td Establecimiento de políticas para el almacenamiento y conservación segura de los datos recopilados.
                tr
                  th Confidencialidad
                  td Compromiso de la organización y de sus colaboradores de proteger la información de los clientes y evitar su divulgación indebida.
        p.mb-4 Los elementos descritos en la tabla anterior configuran el marco mínimo que toda organización debe implementar para garantizar una gestión responsable de la información de sus clientes. Su aplicación sistemática no solo reduce el riesgo de incumplimiento normativo, sino que fortalece la cultura de transparencia institucional y consolida la confianza de los grupos de interés en el sistema financiero colombiano. 
        .row.justify-content-center.align-items-center.tarjeta.bt02.p-4.mb-4
            .col-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema6/img28.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p El conocimiento de estos elementos resulta fundamental para comprender cómo las organizaciones estructuran sus mecanismos de protección dentro del sistema SARLAFT y dan cumplimiento a las disposiciones legales vigentes en materia de privacidad y confidencialidad de la información.
    
</template>

<script>
export default {
  name: 'Tema6',
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
