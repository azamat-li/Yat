import AppButton from '@/components/AppButton'
import { mount } from '@vue/test-utils'
import 'styled-components-test-utils/lib/jest'

describe('AppButton', () => {
  it('If button type is danger, its background is red', async () => {
    const wrapper = mount(AppButton)
    wrapper.setData({ type: 'danger' })

    await wrapper.vm.$nextTick()

    expect(wrapper.find('button')).toHaveStyleRule('background', 'red')
  })
})
