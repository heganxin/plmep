/**
 * Created by heganxin on 2019/2/15.
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enlocale from './en'
import zhlocale from './zh'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.lang || 'zh',
  messages: {
    en: {
      ...enlocale,
      ...elementEnLocale
    },
    zh: {
      ...zhlocale,
      ...elementZhLocale
    }
  } })
export default i18n
