<template>
  <div id="Exam-Question ">
    <p> Hi {{form.name}}, please select the correct answer for the following words:</p>
    <b-form class="p-3" @submit="onSubmit" @reset="onReset">
      <b-container class="bv-example-row ">
        <b-row align-v="center">
          <b-col class="border-dark border-width p-1" cols="12" v-for="questionItem in questionList" :key="questionItem.num">
            <b-card class="question" bg-variant="dark" text-variant="white" :title="questionItem.num+'. Question'"> 
              <b-card-text class = "question">
                Please choose the correct meaning of <strong>{{ questionItem.question.word }}</strong>
              </b-card-text>
              <b-form-radio v-model="questionItem.selected" :name="'question' + questionItem.num" :value="questionItem.options[0].id">{{ questionItem.options[0].mean }}</b-form-radio>
              <b-form-radio v-model="questionItem.selected" :name="'question' + questionItem.num" :value="questionItem.options[1].id">{{ questionItem.options[1].mean }}</b-form-radio>
              <b-form-radio v-model="questionItem.selected" :name="'question' + questionItem.num" :value="questionItem.options[2].id">{{ questionItem.options[2].mean }}</b-form-radio>
              <b-form-radio v-model="questionItem.selected" :name="'question' + questionItem.num" :value="questionItem.options[3].id">{{ questionItem.options[3].mean }}</b-form-radio>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>






<script>

export default {
  name: 'ExamQuestions',
  props: {
    dataAllWords: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      form: {  },
      questionList:[]
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.$emit("SubmitExamQuestions", this.questionList)
    },
    onReset(event) {
      event.preventDefault()
      this.questionList.forEach(question => {
        if(question.selected != null){
          question.selected = "";
        }
      });
    },
    getAllQuestions(){
      const list = this.dataAllWords;
      
      for (let i = 0; i < this.form.number; i++) {
        let questionObj = {
          num:0,
          question:{id:0, word:""},
          options: [{id:0, mean:""},{id:0, mean:""},{id:0, mean:""},{id:0, mean:""}]
        };
        questionObj.num = i+1;
        questionObj.question.id = list[i].id;
        questionObj.question.word = list[i].word;
        const r = Math.floor(Math.random() * 10) % 4;
        questionObj.options[r].id = list[i].id;
        questionObj.options[r].mean = list[i].mean;
        let j = 0;
        questionObj.options.forEach(option => {
          if(option.mean === ""){
            option.id = list[(i+1)*(j+1)+parseInt(this.form.number)-1].id;
            option.mean = list[(i+1)*(j+1)+parseInt(this.form.number)-1].mean;
            j += 1;
          }
        });
        this.questionList.push(questionObj);
      }
    }
  },
  created() {
    setTimeout(() => {
        this.getAllQuestions();
      }, 2500);
    this.form = this.$route.query;
  }
}
</script>






<style scoped>
h3 {
  margin: 5px;
  text-align: left;

}
.question {
  text-align: left;
  padding: 2px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
