<template>
  <div class="home mt-2">
    <!-- Modal -->
    <Modal/>
    <!-- img-thumbnail -->
    <div class="container-fluid">
      <b-carousel
        class="ml-3 mr-3 mb-3"
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="100"
        img-height="auto"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- src="../assets/uno.jpg" -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="img-thumbnail d-block w-100 altura"
              src="https://res.cloudinary.com/dqhme1rod/image/upload/v1579211538/mis_images/inicio/uno_hno88x.jpg"
              alt="image slot"
              id="img1"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="img-thumbnail d-block w-100 altura"
              src="https://res.cloudinary.com/dqhme1rod/image/upload/v1579211537/mis_images/inicio/dos_fhzko0.jpg"
              alt="image slot"
              id="img3"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <Footer class="footer-home" />
    <!-- <Footer msg="Welcome to Your Vue.js" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// importar componente --Arkad
// import HelloWorld from "@/components/HelloWorld.vue";
import Modal from '@/components/Modal.vue';
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  // components: {
  //   HelloWorld
  // },
  components: {
    Footer,
    Modal
  },
  data() {
    return {
      img: '@/galeria/01.jpg',
      slide: 0,
      sliding: null
      // altura:0
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },

  // ================================
  //   Vue-simple-alert
  // ================================
  // mounted() {
  //   this.$prompt("Input your name").then((text) => {
  //   });
  // }
};
</script>

<style>
#img1 {
  height: 570px;
}
#img3 {
  height: 570px;
}
@media screen and (max-width: 768px) {
  .altura {
    max-height: 350px; 
    width: 900px;
  }
}
.footer-home {
  background: black;
}
</style>