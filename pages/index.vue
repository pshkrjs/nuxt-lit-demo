<template>
  <lit-component :name="name" :age="age"></lit-component>
</template>

<script>
import LitComponent from '@/components/LitComponent.js'
export default {
  name: 'IndexPage',
  components: {
    LitComponent
  },
  data () {
    return {
      age: 0,
      name: 'Pushkaraj'
    }
  },
  mounted () {
    this.$axios.get(
      `https://api.agify.io/?name=${this.name}`
    ).then((response) => {
      setTimeout(() => {
        this.age = response.data.age
        console.log(response.data)
      }, 2000)
    }).catch((e) => {
      console.log(e)
    })
  }
}
</script>
