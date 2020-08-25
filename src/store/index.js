import Vue from 'vue'
import Vuex from 'vuex'
import defaultSchoolTimetable from '../default-school-timetable'
import defaultForms from '../default-forms'
import { saveStatePlugin } from '../utils'

Vue.use(Vuex)

const schooltimetable =
  JSON.parse(localStorage.getItem('schooltimetable')) || defaultSchoolTimetable

const forms = JSON.parse(localStorage.getItem('forms')) || defaultForms

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    schooltimetable,
    forms
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
  mutations: {}
})
