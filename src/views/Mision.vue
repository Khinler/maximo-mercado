<template>
  <div class="padre"> <!-- DIV PADRE -->
    <div class="container mision"> <!-- Inicio container central -->
      <h3 class="text-center mt-5 titulo-direc">Direccionamiento</h3> 
      <hr />
      <!-- INICIO ROW -->
      <div class="row"> 
        <div class="col-sm-6 cm">
          <div class="card">
              <img 
               src="https://res.cloudinary.com/dqhme1rod/image/upload/v1579212224/mis_images/direccionamiento/03_v8udkl.png"
               class="image-mision"
               >
            <div class="card-body">
              <h5 class="card-title">Misión</h5>
              <p class="card-text ">
                Formar bachilleres integrales, teniendo en cuenta los aspectos cognitivos, físicos,
                estéticos, ético-morales y de habilidades comunicativas de tal forma que le permita
                desarrollarse eficientemente en el grupo social en el cual se mueve.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 my-2 cm">
          <div class="card">
             <img 
              src="https://res.cloudinary.com/dqhme1rod/image/upload/v1579212224/mis_images/direccionamiento/02_hmn88c.jpg" 
              class="image-mision">
            <div class="card-body">
              <h5 class="card-title">Filosofía</h5>  
              <p class="card-text">
                La filosofía de la educación en el LICEO MÁXIMO MERCADO, está basada en
              principios de participación, tolerancia, democracia, ética, responsabilidad, respeto,
              disciplina, esfuerzo, cumplimiento, sentido de pertenencia y honestidad.
              </p>
              
            </div>
          </div>
        </div>
      </div> 
      <div class="row my-2">
        <div class="col-sm-6 my-2 cm">
          <div class="card">
             <img 
               src="https://res.cloudinary.com/dqhme1rod/image/upload/v1579212224/mis_images/direccionamiento/03_v8udkl.png"
               class="image-mision">
            <div class="card-body">
              <h5 class="card-title">Visión</h5>
              <p class="card-text">
               El Liceo Máximo Mercado para el año 2020 busca consolidarse como una institución
               educativa competitiva y acreditada con alta calidad humanística, académica y valores
               democráticos para la convivencia, junto a la aplicación de nuevas tecnologías acorde
               con el mundo contemporáneo.
              </p>
              
            </div>
          </div>
        </div>

        <div class="col-sm-6 my-2 cm">
          <div class="card">
             <img
              src="https://res.cloudinary.com/dqhme1rod/image/upload/v1579212224/mis_images/direccionamiento/01_ucfbf9.jpg" 
              class="image-mision">
            <div class="card-body">
              <h5 class="card-title">Política de calidad</h5>
              <p class="card-text ">
                El Liceo Máximo Mercado tiene como política de calidad formar estudiantes
                competentes y activos, mediante procesos continuos de formación integral humana y
                académica, fundamentada en la práctica de valores, para satisfacer las necesidades
                del entorno socio-cultural en el que se desenvuelve, así mismo mejorar la calidad de
                su servicio educativo.
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <!-- FIN ROW -->
    </div>  <!-- Fin container central -->
    <hr />
    <!-- Footer -->
    <Footer />
    <!-- Footer -->
  </div> <!-- Fin div padre -->
</template>
  <!--scripts -->
<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "mision",
  components: {
    Footer
  }
};
</script>
<style>
.title {
  font-family: "Anton", sans-serif;
}
/* .texto-justificado{
   text-align: justify;
} */
.card-title {
  text-align: center;
}

.image-mision{
   width: 100%;
   height: 250px;
}
.titulo-direc{
  font-family: "Anton", sans-serif;
}
@media screen and (max-height: 630px){
   .cm{
      padding: 4px;
   }
}
</style>
