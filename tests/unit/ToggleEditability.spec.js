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
    it('When isEditable is true, unLockedButton  is seen and  lockedButton is hidden', () => {
      const wrapper = mount(ToggleEditability, {
        propsData: {
          isEditable: true
        }
      })
      expect(wrapper.find('[data-testid="unLockedButton"]').isVisible()).toBe(
        true
      )
      expect(wrapper.find('[data-testid="lockedButton"]').isVisible()).toBe(
        false
      )
    }),
    it('When isEditable is false, lockedButton is seen and unlockedButton is hidden', () => {
      const wrapper = mount(ToggleEditability, {
        propsData: {
          isEditable: false
        }
      })
      expect(wrapper.find('[data-testid="lockedButton"]').isVisible()).toBe(
        true
      )
      expect(wrapper.find('[data-testid="unLockedButton').isVisible()).toBe(
        false
      )
    })
})
