<template>
  <div>
    <div class="container himno">
      <div class="card my-2">
        <div class="card-header text-center titulo-himno">Nuestro Himno</div>
        <div class="card-body img-himno">
          <!-- <img src="@/assets/himno/himno.jpg" class="img-fluid"> -->
          <img 
           src="https://res.cloudinary.com/dqhme1rod/image/upload/v1579212922/mis_images/himno/himno_xsvlci.jpg"
           class="img-fluid"
           >
        </div>
        <div class="card-footer text-muted">
          <p class="card-text">Música: Álvaro Ramírez Cabrera (exalumno) - Profesora: Edilma Zumaque</p>
      </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
export default {
  name: "himno",
  components:{
     Footer
  }
};
</script>
<style>
 .titulo-himno {
    font-size: 25px;
    font-family: 'Inder', sans-serif;
 }
 .img-himno{
    margin-left: auto;
    margin-right: auto

 }
 
</style>