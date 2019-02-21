<template>
  <div ref="backgroundDiv" class="bg">
    <div class="drag">
      <div style="padding: 25px">
        <!-- <div class="lang">
          <el-select :change="langChage(lang)" size="mini" style="opacity:0.7;width: 80px;border: 0px" v-model="lang" placeholder="请选择">
            <el-option
              v-for="item in langs"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div> -->
        <div class="lang">
          <el-dropdown @command="langChage">
              <span class="el-dropdown-link">
                {{langValue}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="zh">中文</el-dropdown-item>
                  <el-dropdown-item command="en">English</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
        </div>
        <div class="tilte">{{$t('m.loginTitle')}}</div>
        <el-form ref="form"  :model="temp" label-width="0px">
          <el-form-item label="">
            <el-input :placeholder="$t('placeholder.username')" v-model="temp.username"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input @keyup.enter.native="handleLogin" :placeholder="$t('placeholder.password')" type="password" v-model="temp.password"></el-input>
          </el-form-item>
        </el-form>
        <el-button :loading="loading" @click="handleLogin" style="width:100%;" type="primary">{{$t('m.login')}}</el-button>
      </div>
    </div>
  </div>
</template>
<script>
// import { setToken } from '@/utils/auth' // getToken from cookie
import { login } from '@/api/login'

export default {
  name: 'login',
  Created: function () {
  },
  mounted: function () {
    this.langValue = this.$store.getters.guojihua === 'zh' ? '中文' : 'English'
  },
  methods: {
    langChage (command) {
      this.langValue = command === 'zh' ? '中文' : 'English'
      this.$i18n.locale = command
      this.$store.commit('SET_GUOJIHUA', command)
    },
    handleLogin () {
      if (!this.temp.username) {
        this.$message(this.$t('validate.username'))
      } else if (!this.temp.password) {
        this.$message(this.$t('validate.password'))
      } else {
        this.loading = true
        login(this.temp.username, this.temp.password).then(r => {
          console.log('登录返回信息->', r.data.result)
          if (r.data.msg !== '') {
            this.$message(this.$t(r.data.msg))
            this.loading = false
            return
          }

          this.$store.commit('SET_USERINFO', {username: this.temp.username, password: this.temp.password, type: r.data.type})
          this.$store.commit('SET_ISLOGIN', true)
          this.$router.push({ path: '/home' })
          this.loading = false
        }, r => {
          console.log('登录返回信息->', r)
          this.loading = false
        })
        // this.$store.commit('SET_USERINFO', {name: '姚远'})
        // this.$store.commit('SET_ISLOGIN', true)
      }
    }
  },
  data () {
    return {
      temp: {},
      loading: false,
      lang: 'zh',
      langs: [{
        value: 'zh',
        label: '中文'
      }, {
        value: 'en',
        label: 'English'
      }],
      langValue: '中文'
    }
  }
}
</script>
<style>
  .el-dropdown-link {
    cursor: pointer;
    color: white;
  }
  @keyframes bgchage
  {
    0%   {filter: blur(1px);}
    25%   {filter: blur(4px);}
    50%   {filter: blur(8px);}
    75%   {filter: blur(4px);}
    100%   {filter: blur(1px);}
  }

  @-webkit-keyframes bgchage /* Safari and Chrome */
  {
    0%   {filter: blur(1px);}
    25%   {filter: blur(4px);}
    50%   {filter: blur(8px);}
    75%   {filter: blur(4px);}
    100%   {filter: blur(1px);}
  }
  .lang{
    position: absolute;
    top: 1px;
    right: 2px;
  }
  .tilte{
    font-size: 20px;
    color: white;
    margin-bottom: 25px;
  }
  .bg{
    width:100%;
    height:100%;
    position: fixed;
    background: url("../../assets/image/bg1.jpg") no-repeat fixed;
    padding:1px;
    box-sizing:border-box;
  }
  .bg:after{
    content: "";
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background: inherit;
    animation:bgchage 8s;
    -webkit-animation:bgchage 8s; /* Safari and Chrome */
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    z-index: 1;
  }
  .drag{
    position: absolute;
    left:65%;
    top:15%;
    /*transform: translate(-50%,-50%);*/
    width:400px;
    height:295px;
    text-align: center;
    background: inherit;
    z-index:11;
    box-shadow:  0px 0px 1px 0px rgba(0,0,0,.5);
    -webkit-box-shadow: 0px 0px 1px 0px rgba(0,0,0,.5);
    -moz-box-shadow: 0px 0px 1px 0px rgba(0,0,0,.5);
    /*-moz-box-shadow: 0 0 1px 0px rgba(0,0,0,.5);*/
  }
  </style>
