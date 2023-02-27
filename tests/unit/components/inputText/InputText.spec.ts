import { mount } from "@vue/test-utils";
import InputText from "@/components/inputText/InputText.vue";

describe("components/inputText/InputText.vue", () => {
  test("onChange", async () => {
    const wrapper = mount(InputText);
    wrapper.find("input").trigger("input");
    expect(wrapper.emitted()).toHaveProperty('inputTextChange');
  });
});