<template>
<div>
 <div class="container fundadores my-4">
     <h3 class="text-center titulo-fund">Fundadores</h3>
      <p>La sección de fundadores se esta organizando....</p>
 </div>
 <Footer class="footer-fun"/>
</div>
</template>
<script>
 import Footer from '@/components/Footer.vue'
  export default {
      name: 'fundadores',
      components:{
          Footer
      }
  }
</script>
<style>
 .tituto-fund{
    font-family: 'Inder', sans-serif;
 }
 .footer-fun{
     bottom:0px;
     position:fixed;
 }
</style>