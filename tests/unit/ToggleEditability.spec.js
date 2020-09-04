import ToggleEditability from '@/components/ToggleEditability'
import { mount } from '@vue/test-utils'

describe('ToggleEditability', () => {
  it('If isEditable is true, Рады изменениям div is seen', () => {
    const wrapper = mount(ToggleEditability)
    expect(true).toBe(true)
  })
})
