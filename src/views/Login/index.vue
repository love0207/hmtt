<template>
  <div>
    <van-nav-bar title="登录" @click-left="$router.back()">
      <template #left><van-icon name="cross" /></template>
    </van-nav-bar>
    <van-form @submit="onSubmit" ref="form">
      <van-field
        v-model="mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="[
          {
            pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
            message: '请输入正确的手机号',
          },
        ]"
      >
        <template #left-icon><i class="toutiao toutiao-shouji"></i></template>
      </van-field>
      <van-field
        v-model.trim="code"
        type="password"
        name="code"
        placeholder="请输入验证码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\d{6}$/, message: '验证码为6位' },
        ]"
      >
        <template #left-icon
          ><i class="toutiao toutiao-yanzhengma"></i>
        </template>
        <!-- <MyIcon name="yanzhengma" slot="left-icon"></MyIcon> -->
        <template #button>
          <van-count-down
            v-if="isCountDownShow"
            :time="time"
            format="ss s"
            @finish="isCountDownShow = false"
          />
          <van-button
            v-else
            size="small"
            class="yzm"
            native-type="button"
            @click="sendSms"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button round block native-type="submit" class="denglu-button"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { getSmsCode, login } from '@/api/index.js'

export default {
  created () { },
  data () {
    return {
      mobile: '13911111221',
      code: '246810',
      time: 5 * 1000,
      isCountDownShow: false
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        const res = await login(values)
        console.log(res)
        this.$store.commit('setUser', res.data.data)
        this.$router.push({ name: 'my' })
      } catch (err) {
        console.log(err)
      }
    },
    async sendSms () {
      try {
        await this.$refs.form.validate('mobile')
        this.isCountDownShow = true
        try {
          await getSmsCode(this.mobile)
          this.$toast.success('发送成功')
        } catch (err) {
          console.log(err)
          this.$toast.fail('发送失败,请重试')
        }
      } catch (err) {
        console.log(err)
        console.log('校验失败')
        // 轻提示
        this.$toast.fail('手机号不正确')
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.toutiao {
  font-size: 37px;
}
.yzm {
  width: 152px;
  height: 46px;
  background-color: #ededed;
  border-radius: 23px;
  .van-button__text {
    zoom: 0.95;
  }
}
.denglu-button {
  width: 694px;
  height: 88px;
  font-size: 30px;
  color: #ededed;
  background-color: #6db4fb;
  border-radius: 10px;
}
.van-count-down {
  position: fixed;
  right: 18px;
}
.yzm {
  position: fixed;
  right: 10px;
}
</style>
