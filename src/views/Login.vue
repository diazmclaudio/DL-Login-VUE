<template>
  <div>
    <h1 class="text-center my-5">Iniciar Sesión</h1>
    <Formulario />
  </div>
</template>

<script>
import Formulario from '@/components/Formulario.vue'
export default {
  name: 'Login',
  components: {
    Formulario,
  },
}
</script>