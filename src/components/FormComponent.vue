<template>
  <div class="form-container  top-0">
    <div class="bg-white h-8">
      <div class="header bg-gray-100 w-56 rounded">{{ form.name }}</div>
    </div>
    <div class="flex flex-row items-start day-wrapper">
      <FormBlock
        v-for="(day, $dayIndex) of form.days"
        :key="$dayIndex"
        :block="day"
        :blockIndex="$dayIndex"
        :form="form"
        :isEditable="isEditable"
      />
    </div>

    <ToggleEditability
      @toggle-editability="toggleIsEditable"
      :isEditable="isEditable"
      class="toggleEditability"
      v-show="isEditableButtonEnabled"
    ></ToggleEditability>
    <div class="day bg-red-100 border-8 border-teal-100">
      <input
        type="text"
        class="block w-full h-full bg-transparent"
        placeholder="+ Добавьте Блок Уроков"
        @keyup.enter="createBlock($event)"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ToggleEditability from '../components/ToggleEditability'
import FormBlock from '@/components/FormBlock'

export default {
  props: {
    form: {
      type: Object
    },
    isEditableButtonEnabled: {
      type: Boolean
    }
  },
  components: {
    ToggleEditability,
    FormBlock
  },
  computed: {
    ...mapState(['isEditable']),
    ...mapGetters(['getFormById'])
  },
  methods: {
    createBlock(e) {
      this.$store.dispatch('createBlock', {
        form: this.form,
        newBlockName: e.target.value
      })
      e.target.value = ''
    },
    toggleIsEditable() {
      this.$store.commit('TOGGLE_EDITABILITY', {
        key: 'isEditable',
        value: !this.isEditable
      })
      this.$emit('toggle-is-editable')
    }
  }
}
</script>

<style lang="css">
@tailwind base

.day-wrapper {
  display: flex-wrap;
  flex-wrap: wrap;
}
.form-container {
  @apply rounded;
}
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
</style>
