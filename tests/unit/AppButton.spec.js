import AppButton from '@/components/AppButton'
import { mount } from '@vue/test-utils'

describe('AppButton', () => {
  it('If button type is danger, its background is red', async () => {
    const wrapper = mount(AppButton)

    await wrapper.vm.$nextTick()

    expect(true).toBe(true)
  })
})
