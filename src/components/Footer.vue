<template>
  <!-- Footer original -->
  <!-- <div class=" hello card">
    <div class="row justify-content-between text-center footer" style="background:black">
       <div class="col-md-5 text-md-left">
          <p class="text-muted mt-4" style="text-align: center; color:white; font-family: 'Inder', sans-serif;">Liceo Máximo Mercado: "Disciplina, Esfuerzo y Cumplimiento</p>
       </div>
       <div class=" h3 col-md-4 mt-4">
          <p class="text-muted">
           <a href="https://www.facebook.com/evaristo.bejarano.3?fref=search&__tn__=%2Cd%2CP-R&eid=ARAmWHEDnBwe0q3QCzLbxqK8TElEyCLHRvXOBf3LUev53RB19TbUActQGz2Qpf4y7IDK3QhBfr9BvDYp" class="fab fa-facebook-square" target="_black"></a>
          </p>
       </div>
    </div>
  </div>   -->
  <!-- Footer Original  -->
   <footer>
       <p class="text-align:left">Liceo Máximo Mercado: "Disciplina, Esfuerzo y Cumplimiento"</p>
        <!-- <p>Maximo Mercado: {{getFecha()}}</p> -->
   </footer>
</template> 
<script>
export default {
  name: 'Footer',
  // data(){
  //   return{
  //     fecha:''
  //   }
  // },
  /* methods:{
    getFecha(){
        this.fecha= new Date();
        return this.fecha.getFullYear()
    }
  } */
} 
</script>
<style>
  footer{ 
    background:black;
    color:white;
    width: 100%; 
    /* position: fixed;  */
    bottom: 0px;
    text-align: center;
    /* height: 150px; */
    padding: 20px; 
  }
</style>