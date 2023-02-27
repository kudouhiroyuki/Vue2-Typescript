import { mount } from "@vue/test-utils";
import Button from "@/components/button/Button.vue";

describe("components/button/Button.vue", () => {
  test("props", async () => {
    const wrapper = mount(Button, {
      propsData: {
        text: "Button"
      }
    });
    expect(wrapper.text()).toMatch("Button");
  });
  test("onClick", async () => {
    const wrapper = mount(Button);
    wrapper.trigger("click");
    expect(wrapper.emitted()).toHaveProperty('bottonClick');
  });
});