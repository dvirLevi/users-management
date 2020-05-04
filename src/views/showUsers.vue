<template>
  <div class="row">
    <div class="col">
      <template v-if="allUsers.length">
        <div class="row" v-for="item in allUsers" :key="item.accountId">
        <div class="col-md-3">{{item.email}}</div>
        <div class="col-md-3">{{item.password}}</div>
        <div class="col-md-3">{{item.listOfIps}}</div>
        <div class="col-md-3">{{item.listOfProtocols}}</div>
      </div>
      </template>
      <h2 v-else>No users</h2>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'addUser',
    components: {
      // HelloWorld
    },
    data() {
      return {

      }
    },
    async mounted() {
      await this.$store.dispatch('getAllUsers');
    },
    methods: {

    },
    computed: {
      allUsers() {
        return this.$store.state.allUsers
      }
    }
  }
</script>

<style scoped>
  @media (max-width: 767.98px) {}
</style>