<template>
  <div class="top-0 rounded">
    <div v-if="form.name" class="h-8">
      <div class="header bg-gray-700 text-gray-200 w-56 rounded-full">
        {{ form.name }}
      </div>
    </div>

    <div class="form-blocks">
      <FormBlock
        v-for="(day, $dayIndex) of form.days"
        :key="$dayIndex"
        :block="day"
        :blockIndex="$dayIndex"
        :form="form"
        :isEditable="isFormEditable"
        blockType="day"
      />
      <div class="w-4/12 bg-gray-800">
        <input
          type="text"
          class="bg-transparent text-gray-300 p-1 m-1"
          placeholder="+ Добавьте Блок Уроков"
          @keyup.enter="createBlock($event)"
        />
      </div>
    </div>
    <ToggleEditability
      class="toggleEditability bg-gray-800 text-gray-300"
      editableStateSting="isFormEditable"
    ></ToggleEditability>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ToggleEditability from '../components/ToggleEditability'
import FormBlock from '@/components/FormBlock'

export default {
  components: {
    ToggleEditability,
    FormBlock
  },
  computed: {
    ...mapState(['isFormEditable']),
    ...mapGetters(['getFormById']),
    form() {
      return this.getFormById(this.$route.params.id)
    }
  },
  methods: {
    createBlock(e) {
      this.$store.dispatch('createBlock', {
        form: this.form,
        newBlockName: e.target.value
      })
      e.target.value = ''
    },
    createDraft(e) {
      this.$store.dispatch('createDraft', {
        form: this.form,
        newdraftName: e.target.value
      })
      e.target.value = ''
    },
    toggleIsEditable() {
      this.$store.commit('TOGGLE_EDITABILITY', {
        key: 'isFormEditable',
        value: !this.isFormEditable
      })
    }
  }
}
</script>

<style lang="scss">
@tailwind base

.isEditableTrigger {
  @apply relative text-right p-2;
  right: 0;
}
.isEditableButton {
  @apply border shadow rounded;
}
.toggleEditability {
  text-align: right;
}
.inputDisabled {
  background: #ffffff;
}
.form-blocks {
  @apply flex flex-row items-start bg-gray-800 text-gray-200;
}
</style>
