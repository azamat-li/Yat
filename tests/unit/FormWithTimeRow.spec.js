import FormWithTimeRow from '@/components/FormWithTimeRow.vue'
import { mount } from '@vue/test-utils'

describe('FormWithTimeRow', () => {
  it('when form.name is "11A", formName is "11A" ', async () => {
    const wrapper = mount(FormWithTimeRow, {
      propsData: {
        form: {
          name: '11A'
        },
        formIndex: 1,
        indent: 2,
        isEditable: false
      }
    })

    await wrapper.vm.$nextTick()
    expect(wrapper).toBeDefined()
    expect(wrapper.find('input').toBeDefined)
    expect(wrapper.find('input').element.value).toEqual('11A')
    expect(wrapper.find('[data-testid="formName"]').element.value).toEqual(
      '11A'
    )
  })
})
