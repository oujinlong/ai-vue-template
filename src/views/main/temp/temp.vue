<template>
  <div>
    <img class="logo" src="../../../assets/logo.png"/>
    <div class="title" style="margin-top: 20px">
      Welcome to AI-Vue-Template
    </div>
    <div class="copyright" style="margin-top: 15px">
      @copyright Asiainfo
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: '',
  data () {
    return {}
  },
  props: {},
  methods: {},
  mounted () {
  },
  computed: {
    ...mapState({})
  },
  components: {}
}
</script>

<style scoped>
@import "style/temp.scss";
</style>
