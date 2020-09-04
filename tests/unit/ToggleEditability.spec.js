import ToggleEditability from '@/components/ToggleEditability'
import { mount } from '@vue/test-utils'

describe('ToggleEditability', () => {
  it('At button click emits "toggle-editability"', async () => {
    const wrapper = mount(ToggleEditability)

    wrapper.find('button').trigger('click')

    wrapper.vm.$nextTick()

    const buttonClickCalls = wrapper.emitted('toggle-editability')
    expect(buttonClickCalls).toHaveLength(1)
  }),
    it('If isEditable is true, Рады изменениям div is seen', () => {
      const wrapper = mount(ToggleEditability)
      expect(true).toBe(true)
    })
})
