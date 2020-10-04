import { uid } from './utils'
import { getDays } from './default-days'

export default {
  forms: [
    {
      id: uid(),
      name: '',
      days: getDays()
    }
  ]
}
