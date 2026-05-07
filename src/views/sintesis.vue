<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La aplicación del sistema SARLAFT en las organizaciones comprende el conocimiento del cliente, la identificación y el análisis de operaciones financieras, los sistemas de reporte y el papel de los organismos de control como mecanismos articulados para prevenir el lavado de activos y la financiación del terrorismo. A lo largo de los contenidos se examinan, además, las responsabilidades frente al cumplimiento normativo, las sanciones derivadas de su incumplimiento y la importancia de la gestión y protección de la información institucional, elementos que permiten al aprendiz comprender cómo se implementan en la práctica los procesos de prevención, detección y reporte de operaciones ilícitas dentro del entorno organizacional. A continuación, el mapa conceptual presenta, de manera visual, la organización de los contenidos y la relación entre sus ejes temáticos.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual titulado “Aplicación del sistema SARLAFT “organiza el tema central en cuatro ejes: el conocimiento del cliente (KYC), que comprende la identificación, verificación de datos y la definición del perfil financiero; los sistemas de reporte, que incluyen el ROS, el reporte de transacciones en efectivo y el reporte de operaciones múltiples; los órganos de control en Colombia, integrado por la Superintendencia Financiera, la Fiscalía General de la Nación y la UIAF; y la conservación de información, que abarca la gestión documental y la protección de datos del cliente.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
