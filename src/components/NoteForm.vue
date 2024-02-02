<script>
  export default {
    data() {
      return {
        newText: '',
      }
    },
    methods: {
      save() {
        // убедиться, что было что-либо введено
        if (!this.newText) {
          return;
        }
        this.$emit('add', this.newText);
      }
    }
  }
</script>

<template>
  <div class="block-form">
    <label class="green" for="story">Add new Note:</label>
    <div class="form">
      <textarea id="story" v-model="newText"></textarea>
      <button class="btn" @click="save">save</button>
    </div>
  </div>
</template>

<style scoped>
  .block-form{
    display: flex;
    flex-direction: column;
    margin: 20px 0  40px 15px;
  }
  .form{
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 350px;
    width: 100%;
  }
  textarea{
    display: block;
    border-radius: 5px;
    min-height: 60px;
    max-width: 250px;
    width: 100%;
    padding: 5px;
    line-height: 1.5;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
  }
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 20px;
  }
  @media (max-width: 535px) {
    .form {
      display: flex;
      flex-direction: column;
    }
  }

</style>