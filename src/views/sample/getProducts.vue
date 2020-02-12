<template>
  <div style="color: whitesmoke">
    <div>Demo</div>
    <div>
      <div v-for="(item, index) in products" :key="index">
        {{ item['classification'] }}
        <div v-for="(product, index) in item.items" :key="index">
          {{ product.pid }}
          {{ product.name }}
          {{ product.price }}
          <img :src="product.img" alt="" />
        </div>
      </div>
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
