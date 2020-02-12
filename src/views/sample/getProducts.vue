<template>
  <div style="color: whitesmoke">
    <div>Demo</div>
    <div>
      <div v-for="(item, index) in products" :key="index">{{ item['classification'] }}</div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

  export default {
    name: 'getProducts',
    methods: {
      ...mapActions({
        getProductsData: 'index/getProducts',
      }),
      delayFunction () {
        console.log('Hello World');
      },
    },
    created () {
      this.getProductsData({
        success: () => {
          this.delayFunction();
        },
      });
    },
    computed: {
      ...mapState({
        products: (state) => state.index.products,
      }),
    },
  };
</script>

<style scoped>

</style>
