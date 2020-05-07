<template>
  <div class="row">
    <div class="col">
      <form class="w-100 center-all" @submit.prevent="sendData">
        <div class="w-100 center-all">
          <input type="text" placeholder="Add ip" v-model="ip">
          <div class="w-100 center-all">
            <p v-for="item in data.listOfIps" class="p-1" :key="item">{{item}}</p>
          </div>
          <div class="w-100 center-all">
            <div class="btn btn-success" @click="addIp">Add ip</div>
          </div>
        </div>
        <div class="w-100 center-all">
           <v-select class="vselect" v-model="data.listOfProtocols" dir="ltr" :searchable="false"
            :options="['a', 'b', 'c']" placeholder="protocols">
          </v-select>
        </div>
        <div class="w-100 center-all">
          <input type="password" placeholder="Password" v-model="data.password" required>
        </div>
        <div class="w-100 center-all">
          <input type="password" placeholder="Password validation" v-model="validationPassword" required>
        </div>
        <div class="w-100 center-all">
          <input type="email" placeholder="Email addres" v-model="data.email" required>
        </div>

        <div class="w-100 center-all">
          <button type="submit" class="btn btn-success">{{textButt}}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import vSelect from 'vue-select'
  import 'vue-select/dist/vue-select.css'
  import Swal from 'sweetalert2'

  export default {
    name: 'addUser',
    components: {
      // HelloWorld
      vSelect
    },
    data() {
      return {
        data: {
          email: "",
          password: "",
          listOfIps: [],
          listOfProtocols: "",
          accountId: ""
        },
        validationPassword: "",
        ip: "",
        textButt: "send"
      }
    },
    methods: {
      addIp() {
        if(this.ip) {
          this.data.listOfIps.push(this.ip);
          this.ip = ""
        }
      },
      async sendData() {
        
        if (this.data.password === this.validationPassword && this.data.listOfIps.length) {
          try {
            if (this.textButt === "send") {
              this.textButt = "await...";
              this.data.accountId = this.accountId;
              console.log(this.data.accountId)
              await this.$store.dispatch('addUser', this.data);
              this.data = {
                email: "",
                password: "",
                listOfIps: [],
                listOfProtocols: "",
                accountId: this.accountId
              };
              Swal.fire({
                icon: 'success',
                title: 'success',
                text: 'The registration was successful!',
                timer: 1500
              });
              this.textButt = "send";
              // this.$router.push('/managementUsers/addUsers');
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
            text: 'Passwords not corresponding or you forget to add ips',
            timer: 1500
          });
        }
      },
    },
    computed: {
      accountId() {
        return this.$store.state.userId
      }
    }
  }
</script>

<style scoped>
  @media (max-width: 767.98px) {}
</style>