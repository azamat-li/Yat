import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";
import defaultSchoolTimetable from "@/default-timetable";
import { getDays } from "@/DefaultDays";
import { saveStatePlugin, uid } from "../utils";

Vue.use(Vuex);

const schoolTimetableJson = localStorage.getItem("schoolTimetable");

const schoolTimetable =
  schoolTimetableJson !== null
    ? JSON.parse(schoolTimetableJson)
    : defaultSchoolTimetable;

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    schoolTimetable,
    isFormEditable: false,
    globalTimetableIsEditable: false,
    user: null
  },
  getters: {
    getEditableStateByName: state => editableStateString => {
      if (editableStateString === "isFormEditable") return state.isFormEditable;
      else if (editableStateString === "globalTimetableIsEditable") {
        return state.globalTimetableIsEditable;
      }
    },
    getFormById: state => id => {
      return state.schoolTimetable.forms.find(form => form.id === id);
    },
    getLessonById(state) {
      return id => {
        for (const form of state.schoolTimetable.forms) {
          for (const day of form.days) {
            for (const lesson of day.lessons) {
              if (lesson.id === id) {
                return lesson;
              }
            }
          }
        }
      };
    },
    loggedIn(state) {
      return state.user ? true : false;
    }
  },
  mutations: {
    UPDATE_FORM_NAME(state, formWithNewName) {
      state.schoolTimetable.forms.filter(
        form => form.id === formWithNewName.id
      ).name = formWithNewName.name;
    },
    CREATE_LESSON(state, { lessons, name }) {
      lessons.push({
        name,
        id: uid()
      });
    },
    REMOVE_LESSON(state, { block, lessonToRemoveIndex }) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const lessonToDelete = block.lessons.splice(lessonToRemoveIndex, 1)[1];
    },
    UPDATE_LESSON(state, { lesson, key, value }) {
      Vue.set(lesson, key, value);
    },
    CREATE_BLOCK(state, { form, newBlockName }) {
      form.days.push({
        name: newBlockName,
        lessons: [],
        id: uid()
      });
    },
    REMOVE_BLOCK(state, { form, blockToRemoveIndex }) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const blockToDelete = form.days.splice(blockToRemoveIndex, 1)[1];
    },
    CREATE_FORM(state, { newFormName }) {
      state.schoolTimetable.forms.push({
        id: uid(),
        name: newFormName,
        days: getDays()
      });
    },
    REMOVE_FORM(state, { toRemoveIndex }) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const formToDelete = state.schoolTimetable.forms.splice(
        toRemoveIndex,
        1
      )[1];
    },

    TOGGLE_EDITABILITY(state, { key, value }) {
      state[key] = value;
    },
    DROP_LESSON(
      state,
      { fromLessons, toLessons, fromLessonIndex, toLessonIndex }
    ) {
      const lessonToMove = fromLessons.splice(fromLessonIndex, 1)[0];
      toLessons.splice(toLessonIndex, 0, lessonToMove);
    },
    DROP_BLOCK(state, { fromBlockIndex, toBlockIndex, form }) {
      const blockToMove = form.days.splice(fromBlockIndex, 1)[0];
      form.days.splice(toBlockIndex, 0, blockToMove);
    },
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      const auth = "Authorization";
      axios.defaults.headers.common[auth] = `Bearer ${userData.token}`;
    },
    LOGOUT() {
      localStorage.removeItem("user");
      location.reload();
    }
  },
  actions: {
    persistSchoolTimetable({ state }) {
      localStorage.setItem(
        "schoolTimetable",
        JSON.stringify(state.schoolTimetable)
      );
    },
    updateFormName({ commit, dispatch }, formWithNewName) {
      commit("UPDATE_FORM_NAME", formWithNewName);
      dispatch("persistSchoolTimetable");
    },
    createLesson({ commit, dispatch }, { lessons, name }) {
      commit("CREATE_LESSON", { lessons, name });
      dispatch("persistSchoolTimetable");
    },
    removeLesson({ commit, dispatch }, { block, lessonToRemoveIndex }) {
      commit("REMOVE_LESSON", { block, lessonToRemoveIndex });
      dispatch("persistSchoolTimetable");
    },
    updateLesson({ commit, dispatch }, { lesson, key, value }) {
      commit("UPDATE_LESSON", { lesson, key, value });
      dispatch("persistSchoolTimetable");
    },
    createBlock({ commit, dispatch }, { form, newBlockName }) {
      commit("CREATE_BLOCK", { form, newBlockName });
      dispatch("persistSchoolTimetable");
    },
    removeBlock({ commit, dispatch }, { form, blockToRemoveIndex }) {
      commit("REMOVE_BLOCK", { form, blockToRemoveIndex });
      dispatch("persistSchoolTimetable");
    },
    creatForm({ commit, dispatch }, { newFormName }) {
      commit("CREATE_FORM", { newFormName });
      dispatch("persistSchoolTimetable");
    },
    removeForm({ commit, dispatch }, { toRemoveIndex }) {
      commit("REMOVE_FORM", { toRemoveIndex });
      dispatch("persistSchoolTimetable");
    },
    dropBlock({ commit, dispatch }, { fromBlockIndex, toBlockIndex, form }) {
      commit("DROP_BLOCK", {
        fromBlockIndex,
        toBlockIndex,
        form
      });
      dispatch("persistSchoolTimetable");
    },
    dropLesson(
      { commit, dispatch },
      { fromLessons, toLessons, fromLessonIndex, toLessonIndex }
    ) {
      commit("DROP_LESSON", {
        fromLessons,
        toLessons,
        fromLessonIndex,
        toLessonIndex
      });
      dispatch("persistSchoolTimetable");
    },
    register({ commit }, credentials) {
      return axios
        .post("//localhost:3000/register", credentials)
        .then(({ data }) => {
          commit("SET_USER_DATA", data);
        });
    },
    login({ commit }, credentials) {
      return axios
        .post("//localhost:3000/login", credentials)
        .then(({ data }) => {
          commit("SET_USER_DATA", data);
        });
    },
    logout({ commit }) {
      commit("LOGOUT");
    }
  }
});
