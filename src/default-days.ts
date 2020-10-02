import { uid } from './utils'

<<<<<<< HEAD
export function getDays(): { name: string; lessons: []; id: string }[] {
=======
>>>>>>> 294a44ec06b54634eaedd91665f3465d7263cefb
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
