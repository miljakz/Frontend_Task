<template>
  <base-loader>
    <template #default>
      <!-- Main content that is dependent on data loading goes here -->
      <div v-if="someData">Content loaded successfully with data: {{ someData }}</div>
    </template>
  </base-loader>
</template>

<script>
import BaseLoader from '@/components/BaseLoader.vue';

export default {
  components: {
    BaseLoader
  },
  data() {
    return {
      someData: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // Simulate an API call
      setTimeout(() => {
        this.someData = 'Data loaded!';
        this.$store.commit('setLoading', false);
      }, 2000);
      this.$store.commit('setLoading', true);
    }
  }
}
</script>
