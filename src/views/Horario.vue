<template>
  <div>
    <div class="container horario">
      <div class="row">
        <div class="col-lg-12">
          <h4 class="my-2 text-center">Horario de clases</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. At reprehenderit 
            soluta quod veniam, debitis cupiditate.
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. At reprehenderit 
            soluta quod veniam, debitis cupiditate.
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. At reprehenderit 
            soluta quod veniam, debitis cupiditate.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 horario_c">
          <!-- <img src="@/assets/horario_clase/horario_maximo_m.jpg" class="img-fluid" alt=""> -->
          <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1589741959/mis_images/horario_maximo_m_icl4sq.jpg"
           class="img-fluid"
           alt="">
        </div>
        <div class="col-lg-6 horario_c">
          <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1589741959/mis_images/horario_3_jn5bi1.jpg"
           class="img-fluid"
           alt="">
        </div>
      </div>
      <br><br><br>
      <hr>
    </div>
    <hr>
    <Footer class="footer-horario"/>
  </div>
</template>

<script>
 import Footer from '@/components/Footer.vue'
  export default {
    name: "horario",
    components: {
       Footer
    }
  }
</script>

<style>
  .footer-horario{
    bottom:0px;
    position:fixed;
 }

 @media screen and (max-width:768px){
   .horario_c{
     margin-top: 10px;
   }
 }
</style>

