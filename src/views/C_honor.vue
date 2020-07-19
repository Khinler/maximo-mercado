<template>
  <div>
     <div class="container">
       <div class="row">
          <div class="col-lg-12">
            <h4 class="my-2 text-center">Cuadro de honor</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur
             adipisicing elit. Laudantium accusamus ullam 
             animi soluta expedita nemo quisquam rerum laborum 
             voluptate est dolores dolore deleniti, possimus aliquam.
            </p>
          </div>
       </div>
       <div class="row">
         <div class="col-md-4 col-lg-4 pequeño">
           <!-- <img src="@/assets/cuadro_honor/honor_1.jpg" class="img-fluid img_honor" alt=""> -->
           <img 
            src="https://res.cloudinary.com/dqhme1rod/image/upload/v1589738990/mis_images/honor_1_o5hclj.jpg" 
            class="img-fluid img_honor" 
            alt="">
         </div>
         <div class="col-md-4 col-lg-4 pequeño">
           <img 
            src="https://res.cloudinary.com/dqhme1rod/image/upload/v1589738990/mis_images/honor_1_o5hclj.jpg"
            class="img-fluid img_honor" 
            alt="">
         </div>
         <div class="col-md-4 col-lg-4 pequeño">
           <img 
            src="https://res.cloudinary.com/dqhme1rod/image/upload/v1589738990/mis_images/honor_1_o5hclj.jpg"
            class="img-fluid img_honor"
            alt="">
         </div>
       </div>
       <div class="my-2 row">
         <div class="col-md-4 col-lg-4 pequeño">
           <img 
            src="https://res.cloudinary.com/dqhme1rod/image/upload/v1589738990/mis_images/honor_1_o5hclj.jpg"
            class="img-fluid img_honor"
            alt="">
         </div>
         <div class="col-md-4 col-lg-4 pequeño">
           <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1589738990/mis_images/honor_1_o5hclj.jpg" class="img-fluid img_honor" alt="">
         </div>
         <div class="col-md-4 col-lg-4 pequeño">
           <img 
            src="https://res.cloudinary.com/dqhme1rod/image/upload/v1589738990/mis_images/honor_1_o5hclj.jpg"
            class="img-fluid img_honor"
            alt="">
         </div>
       </div>
       <div class="my-2 row">
         <div class="col-md-4 col-lg-4 pequeño">
           <img 
            src="https://res.cloudinary.com/dqhme1rod/image/upload/v1589738990/mis_images/honor_1_o5hclj.jpg"
            class="img-fluid img_honor"
            alt="">
         </div>
         <div class="col-md-4 col-lg-4 pequeño">
           <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1589738990/mis_images/honor_1_o5hclj.jpg"
            class="img-fluid img_honor"
            alt="">
         </div>
         <div class="col-md-4 col-lg-4 pequeño">
           <img 
            src="https://res.cloudinary.com/dqhme1rod/image/upload/v1589738990/mis_images/honor_1_o5hclj.jpg"
            class="img-fluid img_honor"
            alt="">
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
    name:'c_honor',
    components:{
        Footer
    }
 }
</script>

<style>
  @media screen and (max-width:576px){
    .pequeño{
      padding-top:3px;
    }
  }
  /* orientación :horizontal */
  @media only screen and (orientation:landscape){
    .pequeño{
      padding-top:6px;
    }
  }
</style>