<template>
  <div class="top-0 rounded-lg absolute">
    <div v-if="form.name" class="h-8">
      <div draggable class="header bg-gray-700 text-gray-200 w-56 rounded-full">
        {{ form.name }}
      </div>
    </div>

    <div class="flex flex-row items-start bg-gray-800 text-gray-200 ">
      <FormBlock
        v-for="(day, $dayIndex) of form.days"
        :key="$dayIndex"
        :block="day"
        :blockIndex="$dayIndex"
        :form="form"
        :isEditable="isFormEditable"
        blockType="day"
      />
      <div v-if="isFormEditable" class=" bg-gray-800">
        <input
          type="text"
          class="bg-transparent   text-gray-300 "
          placeholder="+"
          @keyup.enter="createBlock($event)"
        />
      </div>
    </div>
    <ToggleEditability
      class=" text-right  bg-gray-800 text-gray-300"
      editableStateString="isFormEditable"
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
.isEditableTrigger {
  @apply relative text-right p-2;
  right: 0;
}
.isEditableButton {
  @apply border shadow rounded;
}
.inputDisabled {
  background: #ffffff;
}
</style>
