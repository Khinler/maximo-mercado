<!--Hay que instalar jquery, para que pueda funcionar bootstrap 4
a la perfección -->
<template>
 <div>
    <div class="container contactos">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center my-4 item_contact">Contactos</h1>
          <!-- <img src="@/assets/contact.svg" class="img-fluid img_contact" alt=""> -->
          <img 
           src="https://res.cloudinary.com/dqhme1rod/image/upload/v1589740922/mis_images/result_dn3jgl.svg"
           class="img-fluid img_contact"
           alt="">
          <p class="item_contact text-center">
            Cra 8A #1479/B Buenavista <br>
            Montería Córdoba <br>
            Teléfonos:7894762<br>
            Email:colmaximer2012@hotmail.com <br><br>
          </p>
          <p class="redes_sociales">
            <a href="https://es-la.facebook.com/evaristo.bejarano.3"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/liceomaximomercado/"><i class="mx-4 fab fa-instagram"></i></a>
          </p>
        </div>
      </div>
    </div>
    <hr>
    <Footer/>
 </div>
</template>
<script>
  import Footer from '@/components/Footer.vue'
  export default {
    name:'contactos',
    components:{
       Footer
    }
  }
</script>
<style>
 .imagen-contacto{
    width: 350px;
    height: 350px;
 }
 .item_contact{
   text-align: center;
   font-family: 'Anton', sans-serif;
   color: red;
 }
 .facebook, .instagram{
    font-size: 40px;
    display: inline;
    padding: 20px;
    text-align:center;
 }
 .redes_sociales{
   text-align: center;
   font-size: 40px;
   text-decoration:none;
 }
 .img_contact{
   width: 350px;
   display: block;
   margin-left:auto;
   margin-right:auto;
 }
</style>