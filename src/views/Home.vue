<template>
  <div id="home">
    <home-main></home-main>
    <home-form></home-form>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMain from '@/components/HomeMain.vue'
import HomeForm from '@/components/HomeForm.vue'

export default {
  name: 'Home',
  components: {
    HomeMain, HomeForm
  }
}
</script>
