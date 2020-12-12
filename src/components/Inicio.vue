<template>
  <div>
    <b-jumbotron header="Bienvenido" lead="Haz iniciado sesión correctamente">
      <b-button variant="danger" @click="logout">Salir</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import firebase from 'firebase/app';
export default {
  name: 'Inicio',
  methods: {
    logout() {
      firebase.auth().signOut().then((resp) => {
          this.$router.push('/');
          console.log(resp);
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
          console.error(error);
        });
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
