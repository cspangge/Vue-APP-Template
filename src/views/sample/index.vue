<template>
  <div>
    <!--    <div>State: {{ msg1 }}</div>-->
    <!--    <div>Getter: {{ getMessage }}</div>-->
    <!--    <button type="button" @click="updateMessage">Update Message</button>-->
    <!--    <br>-->
    <!--    <button type="button" @click="updateMessageByAction">Update Message</button>-->

  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

  export default {
    name: 'index',
    computed: {
      // 获取State值
      ...mapState('sample', {
        msg1: state => state.msg,
      }),

      // 通过Getter获取值
      ...mapGetters('sample', [
        'getMessage',
      ]),
    },
    methods: {
      ...mapMutations('sample', [
        'updateMessage',
      ]),

      ...mapActions([
        'sample', [
          'updateMessageByAction',
        ],
      ]),
    },
    created () {

    },
  };
</script>

<style scoped>

</style>
