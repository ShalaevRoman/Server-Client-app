<template>
  <div id="app">
    <SearchAutocomplete 
      :states="this.arrayStates"
    />
  </div>
</template>

<script>
import SearchAutocomplete from './components/SearchAutocomplete.vue'

export default {
  name: 'App',
  data() {
    return {
      url: 'http://localhost:3000/states',
      arrayStates: []
    }
  },
  components: {
    SearchAutocomplete
  },
  async mounted() {
    await getStates(this.url, this.arrayStates)
    console.log("array states", this.arrayStates)
  }
}

async function getStates(url, arr) {
    const response = await fetch(url);
    const data = await response.json();
    for(let key in data) {
      arr.push(data[key])
    }
}
</script>

<style>

</style>
