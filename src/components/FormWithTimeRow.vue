<template>
  <div class="rounded-full m-1 py-1 pl-1 relative bg-gray-800">
    <div
      @click.self="goToForm(form)"
      class="clearfix items-center  shadow m-1 py-1 px-1 pr-4 w-24 flex   no-underline relative bg-gray-700 rounded-full"
      :style="computedStyle"
    >
      <input
        class="bg-gray-800 text-gray-200 w-5/6 px-2 rounded-full"
        v-model="form.name"
        type="text"
        @blur="updateValue"
        @keyup.enter="updateValue"
        :disabled="!isEditable"
        placeholder="класс #"
        value
      />
      <BaseRemove
        v-if="isEditable && form.name"
        :toRemoveIndex="formIndex"
        toRemoveType="form"
        class="right-0  "
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import BaseRemove from '@/components/BaseRemove.vue'
export default {
  components: {
    BaseRemove
  },
  props: {
    form: {
      type: Object,
      required: true
    },
    formIndex: {
      type: Number,
      required: true
    },
    indent: {
      type: Number,
      required: true
    },
    isEditable: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    goToForm(form) {
      this.$router.push({ name: 'form', params: { id: form.id } })
    },
    updateValue() {
      this.$store.dispatch('updateFormName', this.form)
    }
  },
  computed: {
    computedStyle() {
      return `left: ${this.indent}vw`
    },
    ...mapState(['schoolTimetable']),
    ...mapActions(['updateFormName']),
    ...mapGetters(['getFormById']),

    clickedForm() {
      return this.getFormById(this.form.id)
    }
  }
}
</script>

<style lang="css">
.clearfix {
  overflow: auto;
}
</style>
