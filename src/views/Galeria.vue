<template>
  <div>
    <div class="container galeria">
      <h3 class="text-center display-4 my-4 font">
        <!--<i class="far fa-address-book">-->
        Galería Maximo Mercado
        <!--</i>-->
        <p class="parrafo_lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem illo mollitia distinctio
          aspernatur quae commodi unde. Incidunt distinctio tempore non?
        </p>
      </h3>
      <!-- CARDS -->
      <div class="row">
        <div class="col-sm-4">
          <div class="card-galeria">
            <!-- Imagen local -->
            <!-- <img src="../assets/galeria/02.jpg" class="img-fluid card-galeria" /> -->
            <!-- Img nube -->
            <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1579211702/mis_images/galeria/02_reymrg.jpg"
             class="img-fluid card-galeria img1"/>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card-galeria">
             <!-- Img Local -->
             <!-- <img src="../assets/galeria/06.jpg" class="img-fluid card-galeria" /> -->
             <!-- Img nube -->
             <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1579211696/mis_images/galeria/06_jn3w7k.jpg" 
             class="img-fluid card-galeria img2"/>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card-galeria">
            <!-- Img Local -->
            <!-- <img src="../assets/galeria/07.jpg" class="img-fluid card-galeria" /> -->
            <!-- Img nube -->
            <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1579211709/mis_images/galeria/07_m23nsm.jpg" 
            class="img-fluid card-galeria img3" />
          </div>
        </div>
      </div>
      <hr>
      <div class="row my-2">
        <div class="col-sm-4">
          <div class="card-galeria">
             <!-- Img Local -->
             <!-- <img src="../assets/galeria/04.jpg" class="img-fluid card-galeria" /> -->
             <!-- Img Nube -->
             <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1579211685/mis_images/galeria/04_ypue7d.jpg" 
             class="img-fluid card-galeria img4" />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card-galeria">
            <!-- Img Local -->
            <!-- <img src="../assets/galeria/02.jpg" class="img-fluid card-galeria" /> -->
            <!-- Img Nube -->
            <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1579211702/mis_images/galeria/02_reymrg.jpg"
            class="img-fluid card-galeria img5" />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card-galeria">
            <!-- Img Local -->
             <!-- <img src="../assets/galeria/06.jpg"  class="img-fluid card-galeria" /> -->
             <!-- Img Nube -->
             <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1579211696/mis_images/galeria/06_jn3w7k.jpg"
              class="img-fluid card-galeria img6" />
          </div>
        </div>
      </div>
      
      <!-- CARDS -->
    </div>
    <!-- Component Footer -->
    <Footer />
    <!-- Component Footer -->
  </div>
</template>
<script>
// Import
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
export default {
  name: "galeria",
  components: {
    Footer
  }
};
</script> 
<style>
:root{
  --sombra-img: 0 8px 10px -3px rgba(0,0,0,.5);
}
.tamaño {
  width: 350px;
  height: 250px;
}
.font {
  font-family: "Big Shoulders Display", cursive;
}
.parrafo_lorem {
  font-size: 15px;
  font-family: "Faustina", serif;
}
.card-galeria{
   width: 350px;
   height: 300px;
   /* background: black; */
}
.img1, .img2, .img3, .img4, .img5,.img6{
  box-shadow: var(--sombra-img);
}
@media screen and (max-width:768px){
   .card-galeria {
      padding:2px;
      width:auto;
      height: auto;
      margin-left: auto;
      margin-right: auto
   }
}
@media screen and (min-height:768px){
  .card-galeria {
    padding: 2px;
  }
}
</style>