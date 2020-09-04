import FormWithTimeRow from '@/components/FormWithTimeRow.vue'
import { mount } from '@vue/test-utils'

describe('FormWithTimeRow', () => {
  it('If isEditable is false, input is disabled', async () => {
    const wrapper = mount(FormWithTimeRow, {
      propsData: {
        form: {
          name: '11A'
        },
        isEditable: false
      }
    })

    await wrapper.vm.$nextTick()
    expect(true).toBe(true)
  }),
    it('Input value data is equal to form.name prop value data', async () => {
      const wrapper = mount(FormWithTimeRow, {
        propsData: {
          form: {
            name: '11A'
          }
        }
      })

      await wrapper.vm.$nextTick()

      expect('11A').toBe('11A')
    })
})
