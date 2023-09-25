<template>
  <div id="Exam-Result">
    <!--
    <p> {{$route.query.name}}, your success grade: <strong> {{result}}% </strong></p>
    -->
    <p> {{this.gradeNote}} {{$route.query.name}}, your success rate: <strong> {{successRate}}% </strong></p>
    <p> Your Letter Grade: <strong> {{successGrade}} </strong></p>
  </div>
</template>








<script>
export default {
  name: 'ExamResult',
  props: {
    resultList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      gradeNote: ""
    }
  },
  computed:{
    successRate(){
      let count = 0;
      this.resultList.forEach((result)=>{
        if (result.question.id == result.selected)
          count++;
      });
      return ((count / parseInt(this.$route.query.number)) * 100).toFixed(0);
    },
    successGrade(){
      const result = this.successRate;
      if(result>85){
        return "A";
      }
      else if (result>70){
        return "B";
      }
      else if (result>50){
        return "C";
      }
      else if (result>25){
        return "D";
      }
      else{
        return "F";
      }
      
    }
  },
  /*
  methods: {
    getResult(){
      this.result = this.successRate;
    }
  },
  */
  created() {
    //this.getResult();
    if(this.successRate >= 50){
      this.gradeNote = "Congratulations";
    }
    else{
      this.gradeNote = "Bad Luck";
    }
  }
}
</script>






<style scoped>

</style>
