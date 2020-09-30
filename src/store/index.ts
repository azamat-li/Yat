import Vue from 'vue'
import Vuex from 'vuex'
import defaultSchoolTimetable from '@/default-timetable'
import { saveStatePlugin, uid } from '../utils'

Vue.use(Vuex)

const schooltimetableJson = localStorage.getItem('schooltimetable')

const schooltimetable =
  schooltimetableJson !== null
    ? JSON.parse(schooltimetableJson)
    : defaultSchoolTimetable

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
      return (id: number) => {
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
      state.schooltimetable.forms.filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (form: any) => form.id === formWithNewName.id
      ).name = formWithNewName.name
    },
    CREATE_LESSON(state, { lessons, name }) {
      lessons.push({
        name,
        id: uid()
      })
    },
    CREATE_BLOCK(state, { form, newBlockName }) {
      form.days.push({
        name: newBlockName,
        lessons: [],
        id: uid()
      })
    },
    CREATE_DRAFT(state, { form, newdraftName }) {
      form.drafts.push({
        name: newdraftName,
        lessons: [],
        id: uid()
      })
    },
    UPDATE_LESSON(state, { lesson, key, value }) {
      Vue.set(lesson, key, value)
    },
    TOGGLE_EDITABILITY(state, { key, value }) {
      state[key] = value
    },
    DROP_LESSON(
      state,
      { fromLessons, toLessons, fromLessonIndex, toLessonIndex }
    ) {
      const lessonToMove = fromLessons.splice(fromLessonIndex, 1)[0]
      toLessons.splice(toLessonIndex, 0, lessonToMove)
    },
    DROP_BLOCK(state, { fromBlockIndex, toBlockIndex, formId, getters }) {
      const blockList = getters.getFormById(formId).days
      const blockToMove = blockList.splice(fromBlockIndex, 1)[0]
      blockList.splice(toBlockIndex, 0, blockToMove)
    }
  },
  actions: {
    persistSchoolTimetable({ state }) {
      localStorage.setItem(
        'schooltimetable',
        JSON.stringify(state.schooltimetable)
      )
    },
    updateFormName({ commit, dispatch }, formWithNewName) {
      commit('UPDATE_FORM_NAME', formWithNewName)
      dispatch('persistSchoolTimetable')
    },
    createLesson({ commit, dispatch }, { lessons, name }) {
      commit('CREATE_LESSON', { lessons, name })
      dispatch('persistSchoolTimetable')
    },
    createBlock({ commit, dispatch }, { form, newBlockName }) {
      commit('CREATE_BLOCK', { form, newBlockName })
      dispatch('persistSchoolTimetable')
    },
    createDraft({ commit, dispatch }, { form, newdraftName }) {
      commit('CREATE_DRAFT', { form, newdraftName })
      dispatch('persistSchoolTimetable')
    },
    updateLesson({ commit, dispatch }, { lesson, key, value }) {
      commit('UPDATE_LESSON', { lesson, key, value })
      dispatch('persistSchoolTimetable')
    },
    dropBlock({ commit, getters }, { fromBlockIndex, toBlockIndex, formId }) {
      commit('DROP_BLOCK', { fromBlockIndex, toBlockIndex, formId, getters })
    }
  }
})
