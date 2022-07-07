<template>
  <div>
    <van-loading v-if="isLoading" size=".53333rem"/>
    <van-icon
      v-else
      color="#777"
      :name="is_collected ? 'star' : 'star-o'"
      @click="onClick"
    />
  </div>
</template>

<script>
import { addCollect, delCollect } from '@/api/article'
export default {
  props: {
    is_collected: {
      type: Boolean,
      required: true
    }
  },
  name: 'CollectArticle',
  created () { },
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    async onClick () {
      this.isLoading = true
      const target = this.$route.params.article_id
      if (this.is_collected) {
        try {
          await delCollect(target)
          this.$emit('update:is_collected', !this.is_collected)
        } catch (e) { console.log(e) }
      } else {
        try {
          await addCollect(target)
          this.$emit('update:is_collected', !this.is_collected)
        } catch (e) { console.log(e) }
      }
      this.isLoading = false
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
