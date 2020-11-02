import { uid } from './utils'

export function getDays(): { name: string; lessons: []; id: string }[] {
  {
    const days: { name: string; lessons: []; id: string }[] = [
      {
        name: 'Понедельник',
        lessons: [],
        id: uid()
      },
      {
        name: 'Вторник',
        lessons: [],
        id: uid()
      },
      {
        name: 'Среда',
        lessons: [],
        id: uid()
      },
      {
        name: 'Четверг',
        lessons: [],
        id: uid()
      },
      {
        name: 'Пятница',
        lessons: [],
        id: uid()
      },
      {
        name: 'Нераспределенные',
        lessons: [],
        id: uid()
      }
    ]
    return days
  }
}