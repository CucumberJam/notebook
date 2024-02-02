<script>
  import Note from "@/components/Note.vue";
  import NoteForm from "@/components/NoteForm.vue";
  import { uuid } from 'vue-uuid';

  export default {
    components: {
      Note,
      NoteForm
    },
    data() {
      return {
        visible: true,
        notes: [],
        selected: 'Сортировать по:',
      }
    },
    mounted() {
      if (localStorage.getItem('notes')) {
        try {
          this.notes = JSON.parse(localStorage.getItem('notes'));
        } catch(e) {
          localStorage.removeItem('notes ');
        }
      }
    },
    methods: {
      hide: function() {
        this.visible = false;
      },
      show: function(){
        this.visible = true;
      },
      add(text){
        let id = uuid.v1();
        let date = new Date().toLocaleDateString();
        let isEdit= false;
        this.notes.push({
          id,
          date,
          text,
          isEdit
        });
        this.saveNotes();
      },
      remove(id) {
        this.notes = this.notes.filter((note) => {
          return note.id !== id;
        });
      },
      change(id, text) {
        this.notes = this.notes.map((note) => {
          if (note.id === id) {
            note.text = text;
          }
          return note;
        });
      },
      saveNotes() {
        const parsed = JSON.stringify(this.notes);
        localStorage.setItem('notes', parsed);
      },
      sort(str){
        if(str === 'text'){
          this.notes.sort(this.compareByText);
        }else {
          this.notes.sort(this.compareDate);
        }
      },
      compareByText(a, b){
        return a.name.localeCompare(b.name);
      },
      compareDate(a, b) {
        return (a.date > b.date) ? a.date : b.date;
      }

    }
  }
</script>

<template>
  <NoteForm @add="add"/>
  <header v-show="visible" class="top">
    <span>List of notes:</span>
<!--    <select v-model="selected">
      <option disabled>Сортировать по:</option>
      <option @click="sort('date')">По дате</option>
      <option @click="sort('text')">По названию</option>
    </select>-->
  </header>

  <main v-show="visible" class="block">
    <Note v-for="note in notes"
          :key="note.id"
          :id="note.id"
          :date="note.date"
          :text="note.text"
          @remove="remove"
          @change="change"
    ></Note>
  </main>
</template>

<style scoped>
  .top{
    margin: 20px auto;
    color: hsla(160, 100%, 37%, 1);
    text-align: center;
    font-size: x-large;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .top span{
    margin-right: 20px;
  }
  select{
    border-radius: 4px;
    margin-top: 2px;
    outline: none;
    width: 130px;
    background-color: #cccccc;
    color: #2c3e50;
  }
  .block{
    max-width: 1500px;
    width: 100%;
    height: 100%;

    padding: 5px 20px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>