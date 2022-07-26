import Vue from 'vue'
import numeral from 'numeral'

Vue.filter('formatNumber', function (value) {
  return numeral(value).format('0,0')
})
Vue.filter('formatNumberDecimal', function (value) {
  return numeral(value).format('0,0.[00]')
})
