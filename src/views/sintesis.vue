<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p La síntesis del componente formativo 01 está desarrollada en torno al concepto de cálculo de magnitudes. En la parte inicial y central se encuentra el concepto de magnitud y algunas de las más utilizadas. Esta rama se divide en dos subramas: La primera que hace referencia a los procedimientos técnicos y la segunda sobre las magnitudes. Para la primera subrama se desarrollan temas como los tipos de sistemas de medidas que se manejan: Sistema internacional y sistema inglés y los instrumentos que se usan para medir cada una de las magnitudes, en este caso amperímetro para corriente, óhmetro para resistencia y voltímetro para voltaje. En la segunda subrama se indican las magnitudes más relevantes para esta temática tales como: Corriente que hace referencia a la carga, voltaje a la polarización, resistencia a la corriente, Potencia a la transferencia y continuidad al flujo.
    p.mb-5 La síntesis se establece de la siguiente manera: 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.jpeg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
