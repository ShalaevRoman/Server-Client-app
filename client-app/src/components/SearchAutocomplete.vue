<template>
  <div class="autocomlete">
    <h2>Choose your favorite state</h2>
    <input
      class="autocomlete-search"
      v-model="search"
      @input="onChange"
      type="text">
    <ul
      v-show="isOpen"
      class="autocomplete-results"
    >
      <li
        v-for="(result, i) in results"
        :key="i" 
        @click="setResult(result)"
        class="autocomplete-result">
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchAutocomplete',
  props: {
    states: Array,
    default: () => [],
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  data() {
    return {
      search: '',
      results: [],
      isOpen: false,
    };
  },
  methods: {
    filterResults() {
      this.results = this.states.filter(state => state.toLowerCase().includes(this.search.toLowerCase()));
    },
    onChange() {
      this.filterResults();
      this.isOpen = true;
    },
    setResult(result) {
      this.search = result;
      this.isOpen = false;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    }
  }
};
</script>

<style>
  .autocomlete {
    width: 80%;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .autocomlete-search {
    height: 30px;
    border: 1px solid #4AAE9B;
    border-radius: 10px;
    background-color: #aaf8ea;
  }

  .autocomplete-results {
    width: 150px;
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 150px;
    min-height: 2em;
    max-height: 8em;
    overflow: auto;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }
</style>