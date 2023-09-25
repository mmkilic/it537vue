<template>
  <div class="container p-4">
    <div class="row justify-content-center">
      <div class="col-6">
        <b-form @submit="onSubmit" @reset="onReset" action="./exam" method="get">
          <b-form-group id="input-group-1" label="Participant Name:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Number of Question:" label-for="input-2">
            <b-form-spinbutton
              id="input-2"
              v-model="form.number"
              min="5" max="15"
              required
            ></b-form-spinbutton>
          </b-form-group>

          <b-button type="submit" variant="primary">Start</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result" v-if="show">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HomeForm',
  props: {
    msg: String
  },
  data() {
    return {
      form: {
        name: '',
        number: 10,
        theComponent: 'ExamQuestions'
      }
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.$router.push({path: '/exam', query:this.form})
      //this.$emit("submitHomeForm", this.form)
    },
    onReset(event) {
      event.preventDefault()
      this.form.name = '';
      this.form.number = 10;
    }
  }
}
</script>







<style scoped>

</style>
