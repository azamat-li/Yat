<template>
  <div class="form-container    top-0">
    <div v-if="form.name" class="h-8">
      <div class="header bg-gray-700 text-gray-200 w-56 rounded">
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
        :isEditable="isEditable"
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
    <div class="form-blocks mt-10">
      <FormBlock
        v-for="(draft, $draftIndex) of form.drafts"
        :key="$draftIndex"
        :block="draft"
        :blockIndex="$draftIndex"
        :form="form"
        :isEditable="isEditable"
        blockType="draft"
      />
      <div class="w-4/12  bg-gray-800">
        <input
          type="text"
          class="bg-transparent text-gray-300 p-1 m-1"
          placeholder="+ Добавьте Черновик"
          @keyup.enter="createDraft($event)"
        />
      </div>
    </div>
    <ToggleEditability
      @toggle-editability="toggleIsEditable"
      :isEditable="isEditable"
      class="toggleEditability bg-gray-800 text-gray-300"
      v-show="isEditableButtonEnabled"
    ></ToggleEditability>
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
    createDraft(e) {
      this.$store.dispatch('createDraft', {
        form: this.form,
        newdraftName: e.target.value
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

<style lang="scss">
@tailwind base
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
.form-blocks {
  @apply flex flex-row items-start bg-gray-800 text-gray-200;
}
</style>
