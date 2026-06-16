<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .BGINTRO01.px-5.mb-4
      p.mb-4 El sistema de administración del riesgo de lavado de activos y financiación del terrorismo (SARLAFT) requiere no solo el conocimiento de sus fundamentos, sino también la aplicación práctica de sus procedimientos dentro de las organizaciones. En este contexto, las entidades deben implementar mecanismos que permitan identificar, analizar y controlar las operaciones financieras con el fin de prevenir que sus servicios sean utilizados para actividades ilícitas.
      .row.justify-content-center
        .col-lg-9.order-2.order-lg-1
          .row.align-items-center.mb-4
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/intro/img3.svg', style="width:100px", alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 En este componente formativo se abordan los principales procedimientos que permiten aplicar el sistema SARLAFT en las organizaciones. Entre estos se destacan el conocimiento del cliente, la identificación y análisis de operaciones financieras, los sistemas de reporte de información y el papel de los organismos de control encargados de supervisar el cumplimiento de la normativa relacionada con la prevención del lavado de activos y la financiación del terrorismo.
          .tarjeta.tarjeta.bt01.p-3
            .row.justify-content-center.align-items-center
              .col-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/intro/img2.svg',style="width:100px", alt='')
              .col-lg-10
                p.mb-0 El desarrollo de los contenidos se realiza mediante un enfoque normativo y procedimental que permite comprender las consecuencias del incumplimiento de la normativa, analizar las funciones de los organismos de control y reconocer la importancia de la gestión documental y la protección de la información dentro de las organizaciones. De esta manera, se busca que el aprendiz adquiera capacidades para identificar situaciones de riesgo, aplicar los mecanismos de prevención establecidos por el sistema SARLAFT y cumplir con las disposiciones orientadas a garantizar la seguridad, la legalidad y la transparencia en las actividades financieras y empresariales.
        .col-lg-3.mb-4.mb-lg-0.col-10.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/intro/img1.png', alt='')
        
    p.mb-4 Para ampliar la comprensión de los conceptos abordados y contextualizarlos en la aplicación práctica del sistema SARLAFT, se recomienda acceder al recurso audiovisual que acompaña este componente formativo.
    figure
      .video
        iframe(width="1346" height="757" src="https://www.youtube.com/embed/r-5W6-nNrl4" title="Aplicación del sistema SARLAFT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
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
