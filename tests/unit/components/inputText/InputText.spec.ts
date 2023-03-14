import { mount } from "@vue/test-utils";
import InputText from "@/components/atom/inputText/InputText.vue";

describe("components/atom/inputText/InputText.vue", () => {
  beforeEach(() => {});
  test("props", async () => {
    const wrapper = mount(InputText, {
      propsData: {
        value: "value",
        name: "keyword",
        disabled: true,
        classMethod: "base",
        label: "キーワードを入れてください",
      },
    });
    const inputWrap = wrapper.find(".v-input");
    const inputLabel = wrapper.find(".v-label");
    const inputField = wrapper.find("input").element as HTMLInputElement;
    expect(inputWrap.attributes().class).toMatch("base");
    expect(inputLabel.text()).toBe("キーワードを入れてください");
    expect(inputField.value).toBe("value");
    expect(inputField.name).toBe("keyword");
    expect(inputField.disabled).toBe(true);
  });
  test("onChange", async () => {
    const wrapper = mount(InputText);
    wrapper.find("input").trigger("input");
    expect(wrapper.emitted()).toHaveProperty("inputTextChange");
  });
});
