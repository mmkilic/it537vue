<template>
  <div id="Exam">
    <h1 class="p-2"> Words Game Questions</h1>
    <!--
    <component :dataWord="this.dataWord" @submitHomeForm="form = $event" v-bind:is="form.theComponent"></component>
    -->
    <exam-questions v-bind:dataAllWords=dataAllWords v-on:SubmitExamQuestions="getResults" v-if="result == false"></exam-questions>
    <exam-result :resultList=resultList v-if="result"></exam-result>
  </div>
</template>








<script>
import ExamQuestions from '@/components/ExamQuestions.vue'
import ExamResult from '@/components/ExamResult.vue'
import axios from 'axios';

export default {
  
  name: 'Exam',
  components: {
    ExamQuestions,
    ExamResult
  },
  data(){
    return{
      form: {  },
      dataAllWords:[],
      resultList:[],
      result: false
    }
  },
  methods: {
    getResults(questions){
      this.resultList = questions;
      this.result = true;
    },
    getAll(num){
      const urlWord = `https://random-word-api.herokuapp.com/word?number=${num}`;
      axios.get(urlWord)
      .then((response) => {return response.data})
      .then(words => {
        let wordsAndMeans = [];
        for (let i = 0; i < words.length; i++) {
          const urlDic = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${words[i]}`;
          axios.get(urlDic)
          .then(response => {return response.data[0].meanings[0].definitions[0].definition})
          .then((definition) => {
            if(definition != null && wordsAndMeans.length < this.form.number * 4){
              wordsAndMeans.push({"id" : i, "word" : words[i], "mean" : definition})
            }
          });
        }
        this.dataAllWords = wordsAndMeans;
      });
    }
  },
  created() {
    this.form = this.$route.query;
    this.getAll(this.form.number * 4 * 4);
  }
}
</script>
