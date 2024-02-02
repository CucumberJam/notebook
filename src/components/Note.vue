<script>
  export default {
      props: {
      id: Number,
      text: String,
      date: String,
    },
    data(){
      return{
        isEdit: false,
        newText: this.text,
      }
    },
    emits: ['change', 'remove'],
    methods: {
      edit(){
        this.isEdit = true;
      },
      save(){
        this.isEdit = false;
        this.$emit('change', this.id, this.newText);
      },
    }
  }

</script>

<template>
  <div class="green bord" v-bind:id="id">
    <p>{{date}}</p>
    <template v-if="!isEdit">
      <p>{{text}}</p>
      <button class="btn" @click="edit">Edit</button>
      <button class="btn" @click="$emit('remove', id)">Remove</button>
    </template>
    <template v-else>
      <textarea v-model="newText"></textarea>
      <button class="btn" @click="save">Save</button>
    </template>
  </div>
</template>

<style>
  .bord{
    max-width: 700px;
    width: 100%;
    min-height: 50px;

    padding: 5px 20px;
    margin: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 1px solid #38e0a2;/*hsla(160, 100%, 37%, 1);*/
  }
  .btn{
    font-size: medium;
    background-color: #38e0a2;/*hsla(160, 100%, 37%, 1);*/
    border: transparent;
    cursor: pointer;
    width: 70px;
    height: 30px;
    color: #f8f8f8;
    border-radius: 7px;
    transition: all linear 500ms;
  }
  .btn:hover{
    background-color: #f8f8f8;
    color: hsla(160, 100%, 37%, 1)
  }
  .btn:active{
    background-color: #38e0a2;/*hsla(160, 100%, 37%, 1);*/
    color: orange;
    opacity: 30%;
    box-shadow: 0 5px #666;
    transform: translateY(2px);
  }
  @media (max-width: 535px) {
    .bord {
      display: flex;
      flex-direction: column;
    }
    .bord p,button, textarea:not(:last-child) {
     margin: 10px 0;
    }
  }
</style>