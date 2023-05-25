<template lang="pug">
.curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal
        .titulo-principal__numero
          span 1
        h1 Mediciones de acuerdo con procedimientos técnicos y especificaciones del fabricante
      .row.mt-5
        .col-12.col-lg-7
          p Para entender el funcionamiento de los circuitos eléctricos y electrónicos, es importante reconocer las características eléctricas de sus componentes para, posteriormente, entender cómo es su diseño.  Las magnitudes se pueden medir a través de diferentes equipos, entre ellos el multímetro.
          p.mt-3 Las mediciones de los circuitos eléctricos y electrónicos son básicas y serán detalladas más adelante en el estudio de las características físicas de los componentes; sin embargo, cuando los circuitos hacen parte de una tarjeta o de un equipo, se deberán tener en cuenta procedimientos, protocolos y especificaciones definidas por el respectivo fabricante.
          .h5.mb-0.mt-3 Existen dos sistemas comúnmente usados: el sistema métrico internacional y el sistema inglés/americano.
          p.mt-3 Cada fabricante establece unos parámetros de revisión para sus equipos, si las medidas dan por fuera de los límites establecidos, se deberá aplicar la recomendación que el fabricante emita ante esa situación, como calibración de equipo, mantenimiento preventivo, mantenimiento correctivo, o disposición final por deterioro total o difícil recuperación.
        .col-4.col-lg-5.offset-4.offset-lg-0
          figure
            img(src="@/assets/curso/temas/tema-1-1.png", alt="Texto que describa la imagen")
      .row.mt-5
        .col-12
          .cajon.color-primario.p-4.mb-4.bg-azul-claro
            .row
              .col-2.col-lg-1
                figure
                  img(src="@/assets/curso/temas/tema-1-2.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p #[strong Las especificaciones del fabricante están basadas en los elementos utilizados y sus respectivas características técnicas], incluyendo tipo de materiales, color, construcción, detalles, combinaciones, temperatura utilizada, confiabilidad y resistencia a diferentes factores; de acuerdo con estas especificaciones, la medición de los componentes y/o equipos afecta.
      .row.mt-5
        .col-10.offset-1
          .row
            .col-12.col-lg-6.p-0
              figure
                img(src="@/assets/curso/temas/tema-1-3.png", alt="Texto que describa la imagen")
            .col-12.col-lg-6.py-5.py-lg-0.px-4.borde-primario.centrar-hijo-vertical
              p.m-0 #[strong Un ejemplo común son las resistencias.] Vienen diseñadas con porcentajes del 5, 10 y 20 por ciento de precisión, por lo cual se identifican, respectivamente, con una banda dorada, plateada y sin banda adicional. #[strong Varios autores denominan esta banda como de tolerancia.]
      .titulo-segundo.mt-5
        #t_1_1.h4 1.1 Mediciones e instrumentos de medición
      .row.mt-4 
        .col-lg-2.d-none.d-lg-flex.rounded-25.bg-amarillo.py-3.px-5.text-center.align-left-center
          figure.align-self-center
            img(src="@/assets/curso/temas/tema-1-4.svg", alt="Texto que describa la imagen")
        .col-12.col-lg-10
          p Las mediciones eléctricas son los métodos, cálculos, comparaciones y otras acciones que miden las magnitudes eléctricas, las cuales pueden variar desde una medida simple con un multímetro, que puede ser físico o virtual, hasta la utilización de otras propiedades físicas de los componentes del circuito, como la temperatura, presión, fuerza y/o flujo, pero en este caso se requieren de otros elementos, como transductores.
          p.mt-3 Para cada magnitud se utiliza un dispositivo, tal como se visualiza en la siguiente figura.
      .row.mt-5
        .col-10.offset-1
          figure
            img(src="@/assets/curso/temas/tema-1-5.png", alt="Texto que describa la imagen")
      .row.mt-5
        .col-12.col-lg-7
          p Las unidades de longitud se utilizan para medir la distancia entre dos puntos, la cual puede ser un segmento, una línea recta o una curva.  La unidad de distancia está determinada de acuerdo con un sistema de medidas por convención. En los orígenes de la humanidad, se utilizaron partes del cuerpo, cada país o región tenía sus propias medidas y, a menudo, una medida era diferente en cada lugar. Estas situaciones requirieron de la necesidad de un sistema métrico universal.
          .row.mb-5
            .col
              //- .bloque-texto-d debe ir acompañado de una de una de estas clases =>
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              .bloque-texto-d.color-acento-botones.p-3
                .bloque-texto-d__texto.mb-4
                  i.fas.fa-quote-left
                  p.text-regular El primer sistema se basó en la medida de la longitud de un minuto de arco de un meridiano de la tierra, por el astrónomo y religioso francés Gabriel Mouton, en 1670. Posteriormente, durante la Revolución Francesa, en 1790, se definió el metro como la diezmillonésima parte de la distancia del Polo Norte al Ecuador, a lo largo del meridiano que pasa entre Dunkerque y Barcelona. El metro se divide en partes de 10, y es el inicio del sistema métrico decimal.
                  i.fas.fa-quote-right
                .bloque-texto-d__autor
                  .h5.mb-0 Quincy, 1821
        .col-lg-5.d-none.d-lg-flex.p-0
          figure
            img(src="@/assets/curso/temas/tema-1-6.png", alt="Texto que describa la imagen")
      .row.mt-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema-1-7.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Se podría decir que la longitud es la magnitud básica y de ella se derivan otras magnitudes, por lo cual está catalogada como una magnitud física fundamental. La longitud no debe confundirse con la distancia, porque no siempre son iguales, especialmente cuando se trata de líneas curvas. La longitud está intrínseca en las medidas de las variables eléctricas y/o electrónicas, porque, de acuerdo con la distancia entre elementos o por el tamaño de los mismos, varía la medición electrónica. Ejemplo de ello es la distancia entre placas o la longitud de una resistencia en largo o grueso.
      .row.mt-5
        .col-10.offset-1
          .cajon.color-primario.p-4.mb-4.bg-azul-claro
            .row
              .col-12
                p El sistema internacional de medidas está basado en el metro, cuyo símbolo es m, tiene múltiplos y submúltiplos denominados con prefijos, siempre basados en divisiones o amplificaciones por 10. #[strong El metro, actualmente, se define como la distancia que recorre la luz en el vacío durante un intervalo de 1/299.792.458 de segundo.]
      .row.mt-5
        figure.p-0
          img(src="@/assets/curso/temas/tema-1-8.svg", alt="Texto que describa la imagen")
      .row.mt-5
        .col-lg-2.d-none.d-lg-flex.rounded-25.bg-amarillo.py-3.px-5.text-center.align-left-center
          figure.align-self-center
            img(src="@/assets/curso/temas/tema-1-9.svg", alt="Texto que describa la imagen")
        .col-12.col-lg-10
          p El sistema métrico internacional es gobernado por la Organización Internacional de Metrología Legal (OIML), creada en 1955, y se ocupa de la armonización internacional de esas legislaciones.
          p.mt-3 Existen otros sistemas de medidas, como el sistema anglosajón, también conocido como sistema inglés, y el sistema náutico. Para este programa, se utilizará el sistema internacional de medidas y medidas físicas que hacen parte del mismo.
      .row.mt-5 
        .col-10.offset-1
          .cajon.color-primario.p-4.mb-4.bg-azul-claro
            .row
              .col-12
                p #[strong El sistema anglosajón] es utilizado en países de habla inglesa y presenta algunas diferencias entre la utilización en los Estados Unidos y el Reino Unido, pues no está basado en un acuerdo internacional ni tiene un control supranacional, y fue inicialmente conocido como sistema imperial.
      .titulo-segundo.mt-5
        #t_1_2.h4 1.2  Magnitudes eléctricas y electrónicas
      .row.mt-5
        .col-12.col-lg-7
          p #[strong Las magnitudes eléctricas y electrónicas consisten básicamente en corriente, voltaje (tensión) y resistencia.] Se relacionan con fórmulas matemáticas, basadas en leyes de relaciones de la naturaleza, por lo general, físicas, como la Ley de Coulomb.
          p.mt-3 La Ley de Coulomb está determinada por la fuerza de atracción o repulsión entre dos cargas, que es directamente proporcional a la carga e inversamente proporcional al cuadrado de la distancia entre ellas. Fue encontrada por Coulomb mediante la experimentación de un fenómeno que existe en la naturaleza. 
          p.mt-3 Las variables eléctricas y electrónicas utilizan las fuentes de corriente y fuentes de voltaje, cuyos componentes se valoran mediante el uso de las matemáticas, en los respectivos circuitos, incluyendo teoremas como el de Thevenin y el Teorema de Norton.
          .h5.mt-3 A continuación, se explica cada una de ellas.
        .col-4.col-lg-5 
          figure
            img(src="@/assets/curso/temas/tema-1-10.png", alt="Texto que describa la imagen")
      .h4.mt-5 &nbsp;&nbsp; Magnitudes eléctricas y electrónicas
      .row.mt-5
        .h4.mb-4.borde-secundario-izq.mx-3 Parámetros eléctricos
        .col-12.col-lg-7
          p Los parámetros eléctricos son los que se presentan en los circuitos eléctricos, como la corriente, la resistencia, el voltaje, la potencia, entre otros, al igual que en los dispositivos electrónicos que utilizamos comúnmente en el hogar o la oficina y los manejados en la industria.   Comprender estos conceptos hace más fácil el aprendizaje virtual y la aplicación en el trabajo.
          p.mt-3 Se basan en la conducción de la corriente mediante las cargas positivas y negativas de los electrones.  Las cargas están en reposo, pero, al reaccionar, se ponen en movimiento y producen la corriente eléctrica, generando las diferentes clases de parámetros eléctricos.
        .col-4.col-lg-5
          figure
            img(src="@/assets/curso/temas/tema-1-11.png", alt="Texto que describa la imagen")
      .row.mt-5
        .col-10.col-lg-8.offset-1.offset-lg-2
          p.mb-4.borde-secundario-izq.mx-3.px-3 <b>Figura:</b> &nbsp;&nbsp; Esquema de corriente eléctrica
          figure.mt-4
            img(src="@/assets/curso/temas/tema-1-12.png", alt="Texto que describa la imagen")
          figcaption Nota: Tomado de Wilson15b. (2020)   
      TabsA.color-acento-botones.mt-5
        .tarjeta.color-acento-botones--borde.p-4(titulo="1. Corriente")
          h4 La corriente se define como la rapidez de flujo de la carga, esto es:
          .row.mt-4
            .col-4.col-lg-3.offset-4.offset-lg-4.rounded-25.bg-amarillo.py-3.px-3.text-center
              .h5.m-0 I(t) = dq(t)/dt
            p.mt-5 Las unidades de corriente culombios por segundo, C/s, se denominan amperes o amperios (A), en honor al físico francés André Ampère; pero fue Benjamin Franklin quien seleccionó como sentido de la corriente aquel en el cual fluiría la carga positiva.
            .col-10.col-lg-8.offset-1.offset-lg-2
              p.mb-4.borde-secundario-izq.mx-3.px-3 Gráfica de fuente de corriente
              figure.mt-4
                img(src="@/assets/curso/temas/tema-1-13.png", alt="Texto que describa la imagen")
              figcaption Nota: Tomada de Fernández (2019).
            p.mt-4 Una fuente ideal de corriente es un dispositivo que, cuando se conecta, extraerá I amperios de la terminal 2 y empujará amperios hacia la terminal 1 (y viceversa, si la flecha señala en el sentido opuesto).   La cantidad de corriente producida por una fuente ideal será función del tiempo.  
            p.mt-4 En los circuitos, se presenta corriente directa CD, o continua CC, (DC, por las siglas en inglés) y corriente alterna CA (AC, por las siglas en inglés). Teniendo en cuenta el origen de la corriente, según la fuente de poder, se usa una batería para la corriente directa y para la energía alterna, la cual normalmente varía la frecuencia o su señal senoidal en 60 Hertz. 
            p.mt-4 Los divisores de corriente son dispositivos utilizados para repartir la corriente entre resistencias en paralelo de un circuito y están fundamentados en la Ley de Kirchhoff.
        .tarjeta.color-acento-botones--borde.p-4(titulo="2. Voltaje")
          p #[strong El voltaje es producido por una fuente de voltaje o diferencia de potencial de v voltios entre sus terminales,] sin importar a qué esté conectada.  La cantidad de voltaje (v) puede ser un número positivo o negativo; este último se da cuando es producida por una fuente de voltaje alterna (como, por ejemplo, el suministro de energía eléctrica residencial o comercial de las ciudades). El voltaje es positivo cuando se refiere al producido por una fuente de voltaje directa.
          p.mt-3 El voltaje también es conocido como tensión o caída de tensión, debido a la polarización, y es muy utilizado en el diseño de elementos para circuitos electrónicos, en unión con el tema de corriente inversa, el cual se refiere a la corriente con polarización diferente a la de la tensión, y es adicionada con la corriente producida térmicamente y la corriente superficial de fugas.
          p.mt-3 La tensión a partir de la cual la corriente empieza a incrementar rápidamente se denomina tensión de umbral del diodo, que es igual a la barrera de potencial.
          .col-10.col-lg-8.offset-1.offset-lg-2
            p.mb-4.borde-secundario-izq.mx-3.px-3 Gráfica de fuente de voltaje
            figure.mt-4
              img(src="@/assets/curso/temas/tema-1-14.png", alt="Texto que describa la imagen")
            figcaption Nota: Tomado de Tutoriales de electrónica básica (2019).
          .row.mt-4 
            .col-12
              .cajon.color-acento-contenido.p-4.mb-4.bg-morado-claro
                .row
                  .col-12
                    p #[strong La Ley de Kirchhoff de los voltajes] indica que si se recorre cualquier ciclo de un circuito, en cada instante de tiempo, la suma de los voltajes de una polaridad es igual a la suma de los voltajes de la otra polaridad.
        .tarjeta.color-acento-botones--borde.p-4(titulo="3. Resistencia")
          p Como ya hemos hablado de corriente y voltaje, en su relación aparece la resistencia, cuya unidad (voltios por amperio) se denomina ohm, denominada así en honor al físico alemán Georg Ohm, y se representa por medio de la letra mayúscula omega (Ω) del alfabeto griego. 
          p.mt-3 Si la corriente i(t) es siempre directamente proporcional al voltaje, para cualquier función v(t), entonces el material se denomina resistor lineal o simplemente resistor.  Dado que el voltaje y la corriente son directamente proporcionales para un resistor, existe una constante de proporcionalidad R, a la que se denomina resistencia, tal que: 
          .row.mt-4
            .col-4.col-lg-3.offset-4.offset-lg-4.rounded-25.bg-amarillo.py-3.px-3.text-center
              .h5.m-0 v(t) = Ri(t)
          p.mt-4 Dividiendo ambos miembros de esta ecuación entre i(t), se obtiene:
          .row.mt-4
            .col-4.col-lg-3.offset-4.offset-lg-4.rounded-25.bg-amarillo.py-3.px-3.text-center
              .h5.m-0 R = v(t)/i(t)
            .col-10.col-lg-8.offset-1.offset-lg-2.mt-4
              p.mb-4.borde-secundario-izq.mx-3.px-3 Gráfica representativa de la resistencia
              figure.mt-4
                img(src="@/assets/curso/temas/tema-1-15.png", alt="Texto que describa la imagen")
              figcaption Nota: Tomada de Julián (s. f.).
          .row.mt-4 
            .col-12
              .cajon.color-acento-contenido.p-4.mb-4.bg-morado-claro
                .row
                  .col-12
                    p #[strong Una resistencia de cero ohmios equivale a una fuente ideal de voltaje cuyo valor es cero voltios,] siempre que la corriente circulante sea finita. Esta situación se denomina corto circuito. Una resistencia de valor infinito, equivale a una fuente ideal de corriente cuyo valor es cero amperios y se denomina circuito abierto.
        .tarjeta.color-acento-botones--borde.p-4(titulo="4. Potencia")
          p Cuando los electrones fluyen a través de un resistor, desde un potencial dado hasta un potencial más alto, la corriente fluye de un potencial dado a uno más bajo.  La diferencia de potencial, o voltaje, es una medida del trabajo realizado por una unidad de carga, julios por culombios.  Para obtener una corriente a través de un elemento, se requiere de una cierta de cantidad de energía o trabajo, la cual es absorbida por el elemento.  Si se toma el producto del voltaje (energía por unidad de carga) y la corriente (carga por unidad de tiempo), se obtiene una cantidad que mide energía por unidad de tiempo.  Esta situación física se conoce como potencia, definida p(t), potencia instantánea absorbida por un elemento, como el producto del voltaje y la corriente. 
          .row.mt-4
            .col-4.col-lg-3.offset-4.offset-lg-4.rounded-25.bg-amarillo.py-3.px-3.text-center
              .h5.m-0 p(t) = v(t) i(t)
          p.mt-4 La unidad de potencia (julios por segundos) se denomina watt, en inglés, o vatios.
          .row.mt-4
            .col-10.col-lg-8.offset-1.offset-lg-2.mt-4
              p.mb-4.borde-secundario-izq.mx-3.px-3 Potencia absorbida por un elemento
              figure.mt-4
                img(src="@/assets/curso/temas/tema-1-16.png", alt="Texto que describa la imagen")
              figcaption Nota: Tomada de Acosta (s. f.).
          p.mt-4 En atención a que la potencia absorbida en un elemento dado puede ser una cantidad positiva o negativa, dependiendo de la relación entre el voltaje y la corriente del elemento dado, puede expresarse que el elemento absorbe vatios, o en forma equivalente, suministra o entrega vatios.
        .tarjeta.color-acento-botones--borde.p-4(titulo="5. Continuidad")
          p En matemáticas, una función continua es aquella para la cual, intuitivamente, para puntos cercanos del dominio se producen pequeñas variaciones en los valores de la función; aunque en rigor, en un espacio métrico como en variable real, significa que pequeñas variaciones de la función implican que deben estar cercanos los puntos (Wikipedia, 2021).
          p.mt-4 Las medidas de continuidad eléctrica se pueden medir a través del polímetro o multímetro; también pueden ser medidas con un óhmetro, que mide resistencia o continuidad, pues en cierta forma la continuidad es una propiedad contraria a la resistencia y muestra que el circuito está cerrado. 
          p.mt-4 Al hablar de continuidad, es importante tener en cuenta que los metales se caracterizan por la conducción y que el mejor conductor es el oro, seguido por la plata y el cobre; al ser los dos primeros de alto costo, por lo general, los circuitos electrónicos están diseñados con cobre. 
        .tarjeta.color-acento-botones--borde.p-4(titulo="6. Ley de Ohm")
          p La Ley de Ohm es una ley básica pero muy importante para la comprensión de los conceptos de los circuitos electrónicos.  
          p.mt-4 Fue Georg Simon Ohm, físico y matemático alemán, quien descubrió que si un resistor R tiene un voltaje v(t) aplicado y una corriente i(t) que lo recorre, entonces, si uno es la causa, el otro es el efecto, definiendo la siguiente ecuación:
          .row.mt-4
            .col-4.col-lg-3.offset-4.offset-lg-4.rounded-25.bg-amarillo.py-3.px-3.text-center
              .h5.m-0 v(t) = Ri(t)
          p.mt-4 A esta ecuación se le denomina Ley de Ohm y a partir de ella se deduce:
          .row.mt-4
            .col-4.col-lg-3.offset-lg-1.rounded-25.bg-amarillo.py-3.px-3.text-center
              .h5.m-0 R = v(t)/i(t)
            .col-4.col-lg-3.text-center.align-self-center
              .h5 e
            .col-4.col-lg-3.rounded-25.bg-amarillo.py-3.px-3.text-center
              .h5.m-0 i(t) = v(t)/ R
          p.mt-4 Se debe tener en cuenta que el sentido de las corrientes y la polaridad de los voltajes tienen importancia fundamental al escribir la Ley de Ohm; el sentido negativo se puede cambiar, cambiando la dirección de la corriente.
          p.mt-4 La Ley de Ohm también es utilizada para deducir la impedancia de los circuitos con inductores.
          .row.mt-4
            .col-4.col-lg-3.offset-4.offset-lg-4.rounded-25.bg-amarillo.py-3.px-3.text-center
              .h5.m-0 Z(jw) = v(jw)/i(jw)    
        .tarjeta.color-acento-botones--borde.p-4(titulo="7. Ley de Watt")
          p Del producto del voltaje (energía por unidad de carga) por la corriente (carga por unidad de tiempo) se obtiene una cantidad que mide energía por unidad de tiempo, la cual se conoce como potencia.  Por esta razón, se define p(t) como la potencia instantánea absorbida por un elemento, y es equivalente al producto del voltaje por la corriente.
          .row.mt-4
            .col-4.col-lg-3.offset-4.offset-lg-4.rounded-25.bg-amarillo.py-3.px-3.text-center
              .h5.m-0 p(t) = v(t) i(t)
          p.mt-4 La unidad de potencia (julios por segundo) se denomina watt, abreviada W, en honor al inventor escocés James Watt.
          p.mt-4 Como en el caso de la Ley de Ohm, cuando se emplee la fórmula para la potencia absorbida se debe siempre estar consciente tanto de la polaridad del voltaje como de la dirección de la corriente.
          p.mt-4 Igual aplicación se da para la impedancia Z en los circuitos con inductores.  
          p.mt-4 La Ley de Watt hace referencia a la potencia eléctrica de un componente electrónico o un aparato y se define como la potencia consumida por la carga, es directamente proporcional al voltaje suministrado y a la corriente que circula por este. La unidad de la potencia es el watt. El símbolo para representar la potencia es “P” (Mecatrónica LATAM, 2021).
          p.mt-4 Para encontrar la potencia eléctrica (P), se pueden emplear las siguientes fórmulas:
          .row.mt-4
            .col-8.offset-2.rounded-25.bg-amarillo.py-3.px-3
              .row
                .col-10.px-4
                  .h5.m-0 Conociendo el voltaje y la corriente:
                .col-2
                  .h5.m-0 P = V x I
          .row.mt-3
            .col-8.offset-2.rounded-25.bg-amarillo.py-3.px-3
              .row
                .col-10.px-4
                  .h5.m-0 Conociendo la resistencia eléctrica y la corriente:
                .col-2
                  .h5.m-0 P = R x I<sup>2</sup>
          .row.mt-3
            .col-8.offset-2.rounded-25.bg-amarillo.py-3.px-3
              .row
                .col-10.px-4
                  .h5.m-0 Conociendo el voltaje y la resistencia eléctrica:
                .col-2
                  .h5.m-0 P = V<sup>2</sup>/R
          p.mt-4 En las anteriores fórmulas, únicamente se sustituyeron las incógnitas correspondientes, empleando la fórmula de la ley de Ohm.
      .row.mt-4
        .col-12.mt-4
          .h5.mb-4.borde-secundario-izq.mx-1.px-3 Influencia de la estática   
      .row.mt-4
        .col-12.col-lg-7
          p El término electricidad estática se refiere a la acumulación de un exceso de carga eléctrica (positivas o negativas) en un material conductor o aislante. Los efectos de la electricidad estática son familiares para la mayoría de las personas, porque pueden ver, notar e incluso llegar a sentir las chispas de las descargas que se producen cuando el esfuerzo de carga del objeto cargado se pone cerca de un buen conductor eléctrico (como un conductor conectado a una toma de tierra) u otro objeto con un exceso de carga pero con la polaridad opuesta.
        .col-4.col-lg-5.offset-4.offset-lg-0
          figure
            img(src="@/assets/curso/temas/tema-1-17.png", alt="Texto que describa la imagen")
      .row.mt-5 
        .col-12
          .cajon.color-acento-botones.p-4.mb-4.bg-amarillo-claro
            .row
              .col-2.col-lg-1
                figure
                  img(src="@/assets/curso/temas/tema-1-18.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p La electricidad estática se produce por la acumulación de cargas en una zona del material. Los materiales cargados, para volver a su condición de equilibrio eléctrico, necesitan descargarse; esto hace que pueda producirse una descarga eléctrica cuando dicho objeto se pone en contacto con otro. 
                p.mt-4 Cuando se carga un material, se está acumulando carga en una región del mismo. La forma más sencilla de cargar la materia es por frotamiento. Entonces, si el material adquiere una carga muy elevada, los electrones pueden pasar a otro cuerpo sin necesidad de que haya un contacto físico entre ellos. En este caso, la descarga eléctrica forma un arco luminoso, como puede verse en los rayos durante las tormentas.
      .row.mb-5
        .col-
          //- .bloque-texto-d debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          .bloque-texto-d.color-acento-botones.p-4
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              .h4 Quizá la forma más antigua que conoció el hombre de experimentar fenómenos eléctricos fue con la fricción o frotación. La historia dice que fue Tales de Mileto quien observó dicho fenómeno al frotar un trozo de ámbar con un trozo de piel. Tras la frotación, observó que podían atraerse pequeños objetos y llamó a esa fuerza invisible elektron.
              i.fas.fa-quote-right
              p.m-5 —ámbar—.(Arboledas, 2014).
      .row.mt-5 
        .col-12.bg-color-acento-botones.rounded-10
            .row
              .col-2.col-lg-1.py-4.text-center
                figure
                  img(src="@/assets/curso/temas/tema-1-19.svg", alt="Texto que describa la imagen").w-75.d-inline
              .col-10.col-lg-11
                .h4.mt-4 Recuerde
                p.mt-3 Las magnitudes son propiedades que pueden ser medidas en los circuitos eléctricos y electrónicos. Básicamente, se mide la corriente, el voltaje y la resistencia. Ahora bien, por la interacción de estas tres, que conforman el triángulo de Ohm, se pueden medir otras magnitudes, como la potencia o la conductancia.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
