<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col center-all">
          <h1>Create Account</h1>
        </div>
      </div>
      <div class="row">
        <div class="col screen-height center-all ">
          <form class="w-100 center-all" @submit.prevent="sendData">
            <div class="w-100 center-all">
              <input type="text" placeholder="Company name" v-model="data.companyName" required>
            </div>
            <div class="w-100 center-all">
              <input type="text" placeholder="User name" v-model="data.userName" required>
            </div>
            <div class="w-100 center-all">
              <input type="password" placeholder="Password" v-model="data.password" required>
            </div>
            <div class="w-100 center-all">
              <input type="password" placeholder="Password validation" v-model="validationPassword" required>
            </div>
            <div class="w-100 center-all">
              <input type="email" placeholder="Email addres" v-model="data.emailAddress" required>
            </div>

            <div class="w-100 center-all">
              <button type="submit" class="btn btn-success">{{textButt}}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'formComponenet',
    components: {
      // HelloWorld
    },
    props: {
      fields: Array,
      textButt: String,
      ifDone: Boolean
    },
    data() {
      return {
        data: {
          
        },
        validationPassword: "",
      }
    },
    methods: {
      sendData() {

      },
    }
  }
</script>

<style scoped>
  form input {
    margin: 10px;
    width: 30%;
  }

  @media (max-width: 767.98px) {
    form input {
      width: 100%;
    }
  }
</style>