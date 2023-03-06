import { mount } from "@vue/test-utils";
import InputText from "@/components/inputText/InputText.vue";

describe("components/inputText/InputText.vue", () => {
  test("props", async () => {
    const wrapper = mount(InputText, {
      propsData: {
        name: "keyword",
        disabled: true,
        classMethod: "base",
        label: "キーワードを入れてください"
      }
    });
    expect(wrapper.find("input").attributes().name).toMatch("keyword");
    expect(wrapper.find("input").attributes().disabled).toMatch("disabled");
    expect(wrapper.find(".v-input").attributes().class).toMatch("base");
    expect(wrapper.find(".v-label").text()).toMatch("キーワードを入れてください");
  });
  test("onChange", async () => {
    const wrapper = mount(InputText);
    wrapper.find("input").trigger("input");
    expect(wrapper.emitted()).toHaveProperty('inputTextChange');
  });
});
