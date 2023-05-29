<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Protocolos de pruebas
    .row.mt-4
      .col-12.col-lg-7
        p #[strong Existen varias metodologías para establecer las pruebas en circuitos electrónicos,] entre ellas están las técnicas dinámicas o estadísticas, que recurren a la simulación para obtener las actividades de un circuito.  También existen los métodos estáticos, que calculan la actividad de un circuito sin utilizar la simulación, mediante la técnica del análisis, por lo cual son llamados analíticos o probabilísticos.  
        p.mt-3 Los protocolos de pruebas son establecidos por los fabricantes, de acuerdo con las características de los elementos, procedimientos establecidos en la fabricación, utilización proyectada y otras referencias del respectivo fabricante, y varían de acuerdo con la complejidad del circuito o del dispositivo.
      .col-4.col-lg-5
        img(src="@/assets/template/tema-2-1.png", alt="Texto que describa la imagen")
    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Técnicas caza de fallas (troubleshooting)" :icono="require('@/assets/template/tema-2-2.svg')")
        .row
          .col-12.col-lg-7
            p Las técnicas caza de fallas están diseñadas, y son necesarias, para identificar y clasificar correctamente las fallas que se presentan en un circuito electrónico o en un dispositivo.  Detallan qué parte del circuito o del dispositivo está rechazando la corriente eléctrica.  Se realizan medidas de las características eléctricas, como la corriente y el voltaje, para determinar la falla.
            p.mt-3 Los dos objetivos fundamentales en la verificación de la operación de circuitos electrónicos son la detección y la localización de fallas. Una falla puede ser definida como cualquier anomalía que se presenta en el circuito y que causa el funcionamiento inadecuado del mismo.  El método de verificación para detección de fallas consiste en averiguar si existe o no una falla en el circuito bajo comprobación.  Los tipos de fallas que pueden encontrarse en un circuito digital son muy variados. Los niveles de tensión del circuito pueden ser inadecuados, interconexiones abiertas o en cortocircuito, etc. (Cuervo, 2004). 
          .col-4.col-lg-5.offset-4.offset-lg-0
            figure
              img(src='@/assets/template/tema-2-5.png', alt='Texto que describa la imagen')
              figcaption.mt-3 Se presentan problemas en todos los circuitos; por esta razón, las técnicas de caza de fallas son de alto uso para probar los equipos o para prevenir daños superiores o mayores y especialmente para solucionar un problema.
      .py-4.py-md-5(titulo="Verificación del listado de errores del fabricante" :icono="require('@/assets/template/tema-2-3.svg')")
        .row
          .col-12.col-lg-7
            p El listado de errores del fabricante es proporcionado para facilitar a los clientes la solución a problemas y encontrar fácilmente la falla del circuito o del dispositivo.  Están basados en las autopruebas en fábrica con técnicas caza de fallas y en la información de los propios clientes que reportan al fabricante.
            p.mt-3 Los listados de errores del fabricante son publicados frecuentemente en las respectivas páginas web o entregados en los manuales de los equipos o dispositivos electrónicos.  Algunos fabricantes codifican su respectivo listado de errores.  
          .col-4.col-lg-5.offset-4.offset-lg-0
            figure
              img(src='@/assets/template/tema-2-6.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Reporte de diagnóstico" :icono="require('@/assets/template/tema-2-4.svg')")
        .row
          .col-12.col-lg-7
            p El reporte de diagnóstico se utiliza para registrar adecuadamente las fallas y que pueda servir para solucionar el caso del reporte, pero también para el análisis del equipo e inclusión en el listado de errores del fabricante, si es un error o falla que le compete.
            p.mt-3 Los reportes de diagnóstico se pueden registrar en formatos como listas de chequeo o en formularios en línea que almacenan directamente la información.
            .row.mt-5 
              .col-12
                .cajon.color-acento-botones.p-4.mb-4.bg-amarillo-claro
                  .row
                    .col-2.col-lg-2
                      figure
                        img(src="@/assets/template/tema-1-18.svg", alt="Texto que describa la imagen")
                    .col-10.col-lg-10
                      p En el diagnóstico se puede detectar la causa de la falla, el tipo de falla o error, si es por operación del usuario, si hay problemas de tiempo, temperatura, efectos ambientales o eléctricos, fallas de potencia o energía.  #[strong El reporte del diagnóstico debe llevar información sobre la recolección de datos, localización del problema, operación del mantenimiento preventivo o correctivo y pruebas de verificación de la solución.]
          .col-4.col-lg-5.offset-4.offset-lg-0
            figure
              img(src='@/assets/template/tema-2-8.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({}),
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

<style lang="sass" scoped></style>
