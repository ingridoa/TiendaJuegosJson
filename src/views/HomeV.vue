<template>
  <div>
    <h1>Lista de Juegos</h1>
    <ul>
      <li v-for="(juego, index) in juegos" :key="index">
                {{ juego.nombre }} - {{ juego.precio }} - {{ juego.color }}- {{ juego.stock }}
      <button @click="AgregarUno(index)">➕</button>
      <button @click="QuitarUno (index)">➖</button>          
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState,mapActions} from 'vuex';

export default {
  computed: {
    ...mapState(['juegos'])
  },
  methods: {
 ...mapActions(['AgregarUno','QuitarUno'])



  },
};
</script>