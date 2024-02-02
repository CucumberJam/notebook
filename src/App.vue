<script>
  import Notebook from './components/Notebook.vue'
  export default {
    components: {
      Notebook
    }
  }
</script>

<template>
  <header>
    <span class="green">NoteBook</span>
  </header>

  <main>
    <Notebook></Notebook>
  </main>

</template>

<style scoped>
header {
  line-height: 1.5;
  margin-bottom: 30px;
}
span{
  font-size: 45px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
