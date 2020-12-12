<template>
    <div class="container">
         <div class="row">
              <div class="col-md-4"></div>
         <div class="col-md-4">
              <b-form @submit.prevent="login">
        <b-form-group
            id="input-group-1"
            label="Correo electrónico"
            label-for="input-1"
        >
            <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Escribe tu email"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Contraseña" label-for="input-2">
            <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            required
            placeholder="Escribe tu contraseña"
            ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Iniciar sesión</b-button>
        </b-form>
         </div>
         <div class="col-md-4"></div>
         </div>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'Formulario',
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      login(){
          if (this.form.email && this.form.password){
              firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
              .then(resp => {
                  console.log(resp.user);
                  this.$router.push('/home');
              })
              .catch(error => {
                if (error.code == "auth/wrong-password") {
                    this.$notify.error({
                    title: 'Error',
                    message: 'Su contraseña es inválida'
                });
                } else if (error.code == "auth/user-not-found") {
                    this.$notify.error({
                    title: 'Error',
                    message: 'Su email es inválido'
                });
                } 
              })
          }
      }
    },
  }
</script>

<style>
    
</style>