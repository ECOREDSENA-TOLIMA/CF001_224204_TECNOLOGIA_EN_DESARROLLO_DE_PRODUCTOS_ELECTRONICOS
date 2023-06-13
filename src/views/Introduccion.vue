<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mt-4(data-aos="fade-up") Antes de ingresar en materia de contenidos, es importante conocer el porqué de la importancia de la electrónica y su nacimiento. La siguiente infografía es un repaso de la historia y evolución de la misma.
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0pbCUzGysts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mt-4
      .col-4.col-lg-4.offset-4.offset-lg-0
        figure
          img(src="@/assets/curso/temas/tema-0-1.png", alt="Texto que describa la imagen" data-aos="zoom-in")
      .col-12.col-lg-8(data-aos="fade-right")
        p Un circuito eléctrico se puede entender como una colección de dispositivos eléctricos en la que se pueden encontrar, entre otros, fuentes de voltaje y de corriente, resistencias, inductores, capacitores, transistores, amplificadores y transformadores, interconectados de varias maneras. 
        p.mt-3 El diagnóstico de circuitos electrónicos se realiza mediante el cálculo y la medición de las magnitudes eléctricas y electrónicas, revisando las características físicas de los componentes.
        p.mt-3 Las magnitudes son propiedades que pueden ser medidas; entre ellas, la longitud es la medida básica, luego están el tiempo y la velocidad. En los circuitos eléctricos y electrónicos, básicamente se miden la corriente, el voltaje y la resistencia, a partir de cuya interacción se conforma el triángulo de Ohm. También se pueden medir otras magnitudes, como son la potencia o la conductancia.
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-primario.p-4.mb-4.bg-azul-claro
          .row
            .col-12(data-aos="fade-right")
              .h4 En este componente formativo, se aborda el estudio del cálculo y la medición de magnitudes eléctricas y electrónicas.
              p Para la elaboración de este componente, se abordaron varios autores conocidos en cálculo y medición de magnitudes eléctricas y electrónicas, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos del desarrollo de productos electrónicos.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
