import { mount } from "@vue/test-utils";
import InputText from "@/components/inputText/InputText.vue";

describe("components/inputText/InputText.vue", () => {
  test("props", async () => {
    const wrapper = mount(InputText, {
      propsData: {
        disabled: true,
        classMethod: "base",
        label: "InputText"
      }
    });
    // console.log(wrapper.html());
    expect(wrapper.find("input").attributes().disabled).toMatch("disabled");
    expect(wrapper.find("label").text()).toMatch("InputText");
  });
  test("onChange", async () => {
    const wrapper = mount(InputText);
    wrapper.find("input").trigger("input");
    expect(wrapper.emitted()).toHaveProperty('inputTextChange');
  });
});
