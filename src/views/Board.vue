<template>
  <div class="board">
    <div class="flex flex-row items-start">
      <div class="column" v-for="(column, $columnIndex) of board.columns" :key="$columnIndex">
        <div class="flex items-center mb-2 font-bold">{{ column.name }}</div>
        <div class="list-reset">
          <div class="lesson" v-for="(lesson, $lessonIndex) of column.lessons" :key="$lessonIndex">
            <span class="w-full flex-no-shrink font-bold">{{ lesson.name }}</span>
            <p class="w-full flex-no-shrink mt-1 text-sm" v-if="lesson.notes">{{ lesson.notes }}</p>
          </div>
        </div>
      </div>
    </div>
    <router-link :to="{name: 'time-between-classes'}">Распределить время между классами</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['board'])
}
</script>

<style lang="css">
.lesson {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}

.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}

.board {
  @apply p-4 bg-teal-dark h-full overflow-auto;
}

.task-bg {
  @apply pin absolute;
  background: rgba(0, 0, 0, 0.5);
}

</style>
