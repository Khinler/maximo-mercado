<template>
  <div id="app">
   <b-navbar toggleable="lg" type="dark" variant="secondary" class='menu-g p-3'>
     <b-container>
       <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
       <b-navbar-brand href="#" class="navbar">Máximo Mercado :)</b-navbar-brand>
        <!-- <img src="@/assets/simbolos_institucionales/03.png" alt="icon" id="logo">     -->
        <img 
          src="https://res.cloudinary.com/dqhme1rod/image/upload/v1579212629/mis_images/simb_inst/03_o0gjkh.png" 
          alt="icon" 
          id="logo"
         >    
       <b-collapse is-nav id="nav_collapse">
         <b-navbar-nav class="navbar_texto">
           <b-nav-item :to="{name:'home'}">Inicio</b-nav-item>
           <b-nav-item :to="{name:'galeria'}">Galeria</b-nav-item>
           <b-nav-item-dropdown text='Institucional' right>
              <b-dropdown-item :to="{name:'mision'}">Direccionamiento</b-dropdown-item>
              <b-dropdown-item href="https://res.cloudinary.com/dqhme1rod/image/upload/v1575225169/docs/MANUAL_DE_CONVIVENCIA_2019_ozah9o.pdf" target="_blank">Pei</b-dropdown-item>
              <b-dropdown-item href="https://res.cloudinary.com/dqhme1rod/image/upload/v1575225169/docs/MANUAL_DE_CONVIVENCIA_2019_ozah9o.pdf" target="_blank">Manual de convivencia</b-dropdown-item>
              <b-dropdown-item href="https://res.cloudinary.com/dqhme1rod/image/upload/v1581004795/mis_images/plan_area_tec_infor_modrhn.pdf" target='_blank'>Malla Curricular</b-dropdown-item>
              <b-dropdown-item :to="{name:'s_insti'}">Simbolos Institucionales</b-dropdown-item>
              <b-dropdown-item :to="{name:'himno'}">Himno</b-dropdown-item>
              <b-dropdown-item :to="{name:'fundadores'}" class="fundador">
                Fundadores
                <b-dropdown-item :to="{name:'himno'}" class="f_item_1">Evaristo Antonio Bejarano Bermudez</b-dropdown-item>
                <b-dropdown-item :to="{name:'mision'}" class="f_item_2">Pedro Antonio Bejarano Bermudez</b-dropdown-item>
              </b-dropdown-item>
           </b-nav-item-dropdown>
           <b-nav-item :to="{name:'contactos'}">Contactos</b-nav-item>
           <b-nav-item :to="{name:'c_honor'}">Cuadro de honor</b-nav-item>
           <b-nav-item :to="{name:'horario'}">Horarios</b-nav-item>
         </b-navbar-nav>
         <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
         </b-navbar-nav>
       </b-collapse>
     </b-container>
   </b-navbar> 
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to='/navbar'>Navbar</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<style>
 #logo{
   width:5%;
   height:5%
 }
  .navbar{
    text-align: center; color:white; font-family: 'Inder', sans-serif;
    font-weight: 200px;
 }
 .navbar_texto{
   font-family: 'Anton', sans-serif;
 }
 .fundador:hover{
    background:red;
 }
 /* .f_item_2{

 } */
</style>
