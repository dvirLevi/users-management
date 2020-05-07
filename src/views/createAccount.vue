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
  import Swal from 'sweetalert2'

  export default {
    name: 'Home',
    components: {
      // HelloWorld
    },
    data() {
      return {
        data: {
          companyName: "",
          userName: "",
          password: "",
          emailAddress: ""
        },
        validationPassword: "",
        textButt: "send"
      }
    },
    methods: {
      async sendData() {
        if (this.data.password === this.validationPassword) {
          try {
            if (this.textButt === "send") {
              this.textButt = "await...";
              await this.$store.dispatch('createAccount', this.data);
              this.data = {
                companyName: "",
                userName: "",
                password: "",
                emailAddress: ""
              };
              Swal.fire({
                icon: 'success',
                title: 'success',
                text: 'The registration was successful!',
                timer: 1500
              });
              this.textButt = "send";
              this.$router.push('/managementUsers/');
            }
          } catch (err) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              timer: 1500
            });
            this.textButt = "send";
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Passwords not corresponding',
            timer: 1500
          });
        }
      },
    }
  }
</script>

<style scoped>
 

  @media (max-width: 767.98px) {
   
  }
</style>