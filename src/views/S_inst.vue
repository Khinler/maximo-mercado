<template>
  <div>
    <div class="container s_insti my-4 text-center">
      <h4 class="simbolos">SIMBOLOS INSTITUCIONALES</h4>
      <div class="row my-4">
        <div class="col-lg-4">
          <img
            class="bandera"
            src="https://res.cloudinary.com/dqhme1rod/image/upload/v1579212629/mis_images/simb_inst/01_cv06dr.png"
            alt="bandera_maximer"
          />
          <h5>
            <b>Nuestra Bandera</b>
          </h5>
          <p class="des-inst">
            Diseñada por la Comisión Artistica del Liceo "Máximo Mercado" Coordinador ULISES SUAREZ CABARCAS
            que en paz descanse, mayo 20 de 1976.
            La Bandera está divida en dos franjas horizontales iguales, la primera franja superior
            ROJA simboliza la vida, esfuerzo y triunfo. EL BLANCO simboliza pureza, sencilles y paz.
          </p>
        </div>
        <div class="col-lg-4">
          <img
            class="escudo"
            src="https://res.cloudinary.com/dqhme1rod/image/upload/v1579212629/mis_images/simb_inst/02_ka0ayj.jpg"
            alt="logo_maximer"
          />
          <h5>
            <b>Nuestro Escudo</b>
          </h5>
          <p class="des-inst">
            Diseñado por la Comisión Artistica del Liceo "Máximo Mercado" Coodinador ULISES
            SUAREZ CABARCAS que en paz descanse, mayo 20 de 1976.
            DESCRIPCIÓN: Presenta forma acorazonada; la parte superior reviste color rojo y la
            inferior amarrillo, símbolo de nuestra riquezas naturales; en el centro porta una tea
            encendida símbolo de luz e inteligencia, rodeada de dos ramos de laureles que
            galardona el triunfo. La base la constituye las iniciales de la Institución L. M.M. Seguido
            luce el lema “Disciplina; Esfuerzo y Cumplimiento” fundado en el triunfo o éxito.
          </p>
        </div>
        <div class="col-lg-4">
          <img
            class="logo"
            src="https://res.cloudinary.com/dqhme1rod/image/upload/v1579212629/mis_images/simb_inst/03_o0gjkh.png"
            alt="escudo_maximer"
          />
          <h5>
            <b>Nuestro Logo</b>
          </h5>
          <p
            class="des-inst"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis natus ab nam ea commodi!</p>
        </div>
      </div>
      <div class="container border border-success">
        <hr />
        <h4 class="text-center mx-4">
          <b>Nuestra Ubicación</b>
        </h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.2004097012746!2d-75.89039752974782!3d8.746266962372372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5a2ffd46996345%3A0x6faf57e3bb29874a!2sLiceo%20M%C3%A1ximo%20Mercado!5e0!3m2!1ses!2sco!4v1575238041477!5m2!1ses!2sco"
          width="100%"
          height="400"
          frameborder="0"
          style="border:0;"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <!-- footer -->
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "s_insti",
  components: {
    Footer
  }
};
</script>
<style>
.simbolos {
  font-family: "Patua One", cursive;
  /* font-size:35px; */
}
.bandera {
  width: 250px;
  height: 250px;
}
.escudo {
  width: 240px;
  height: 250px;
}
.logo {
  width: 250px;
  height: 250px;
}
h5 .des-inst {
  font-family: "Khand", sans-serif;
}
.himno {
  width: 100%;
  height: auto;
}
/* .des-inst{

  } */
</style>
<style lang="stylus" scoped></style>