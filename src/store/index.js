import Vue from 'vue'
import Vuex from 'vuex'
import defaultSchoolTimetable from '../default-timetable'
import { saveStatePlugin, uid } from '../utils'

Vue.use(Vuex)

const schooltimetable =
  JSON.parse(localStorage.getItem('schooltimetable')) || defaultSchoolTimetable

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    schooltimetable
  },
  getters: {
    getFormById: state => id => {
      return state.schooltimetable.forms.find(form => form.id === id)
    }
  },
  mutations: {
    UPDATE_FORM_NAME(state, formWithNewName) {
      state.schooltimetable.forms.filter(form => {
        form.id === formWithNewName.id
      }).name = formWithNewName.name
    },
    CREATE_LESSON(state, { lessons, name }) {
      lessons.push({
        name,
        id: uid()
      })
    }
  },
  actions: {
    updateFormName({ commit }, formWithNewName) {
      commit('UPDATE_FORM_NAME', formWithNewName)
    }
  }
})
