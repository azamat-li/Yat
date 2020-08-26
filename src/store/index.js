import Vue from 'vue'
import Vuex from 'vuex'
import defaultSchoolTimetable from '../default-timetable'
import { saveStatePlugin } from '../utils'

Vue.use(Vuex)

const schooltimetable =
  JSON.parse(localStorage.getItem('schooltimetable')) || defaultSchoolTimetable

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    schooltimetable
  },
  getters: {
    getForm(state) {
      return id => {
        for (const form of state.schooltimetable.forms) {
          if (form.id === id) {
            return form
          }
        }
      }
    }
  },
  mutations: {
    SET_DEFAULT_FORMS(state) {
      for (var i = 1; i <= 12; i++) {
        Object.values(state.schooltimetable).forEach(form => {
          form.name = '0'
        })
      }
    }
  },
  actions: {
    setDefaultForms({ commit }) {
      commit('SET_DEFAULT_FORMS')
    }
  }
})
