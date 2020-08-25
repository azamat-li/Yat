import Vue from 'vue'
import Vuex from 'vuex'
import defaultForm from '../default-form'
import { saveStatePlugin } from '../utils'

Vue.use(Vuex)

const form = JSON.parse(localStorage.getItem('form')) || defaultForm

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    form
  },
  mutations: {}
})
