<template>
  <div class="row">
    <div class="col screen-height center-all ">
      <div class="box-menu shadow center-all-around pt-5  pb-5 p-3">
        <router-link :to="item.link" v-for="item in links" :key="item.id" class="p-3 h2 bg-light butt">{{item.text}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {
      // HelloWorld
    },
    data() {
      return {
        links: [{
            text: "Create Account",
            link: "/createAccount",
            id: 1
          },
          {
            text: "Log In",
            link: "/logIn",
            id: 2
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .box-menu {
    width: 710px;
  }

  

 

   @media (max-width: 767.98px) {
      .box-menu {
    width: 100%;
  }

  .box-menu .butt {
    width: 100%;
  }
   }
</style>