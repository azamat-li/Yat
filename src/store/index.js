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
    schooltimetable,
    isEditable: false,
    globalTimetableIsEditable: false
  },
  getters: {
    getFormById: state => id => {
      return state.schooltimetable.forms.find(form => form.id === id)
    },
    getLessonById(state) {
      return id => {
        for (const form of state.schooltimetable.forms) {
          for (const day of form.days) {
            for (const lesson of day.lessons) {
              if (lesson.id === id) {
                return lesson
              }
            }
          }
        }
      }
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
    },
    UPDATE_LESSON(state, { lesson, key, value }) {
      Vue.set(lesson, key, value)
    },
    TOGGLE_EDITABILITY(state, { key, value }) {
      state[key] = value
    }
  },
  actions: {
    updateFormName({ commit, dispatch }, formWithNewName) {
      commit('UPDATE_FORM_NAME', formWithNewName)
      dispatch('persistSchoolTimetable')
    },
    createLesson({ commit, dispatch }, { lessons, name }) {
      commit('CREATE_LESSON', { lessons, name })
      dispatch('persistSchoolTimetable')
    },
    persistSchoolTimetable({ state }) {
      localStorage.setItem(
        'schooltimetable',
        JSON.stringify(state.schooltimetable)
      )
    }
  }
})
