<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col center-all-around">
          <router-link :to="'/managementUsers' + item.link" v-for="item in links" :key="item.id" class="p-3 h4 bg-light butt" router-link-active>{{item.text}}
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'managementUsers',
    components: {
      // HelloWorld
    },
    data() {
      return {
        links: [
          {
            text: "Show all users",
            link: "/",
            id: 1
          },
          // {
          //   text: "Show connected users",
          //   link: "/connectedUsers",
          //   id: 2
          // },
          {
            text: "Add user",
            link: "/addUser",
            id: 3
          },
        ]
      }
    },
    computed: {

    }
  }
</script>

<style scoped>
  @media (max-width: 767.98px) {}
</style>