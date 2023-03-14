import { mount } from "@vue/test-utils";
import Button from "@/components/atom/button/Button.vue";

describe("components/atom/button/Button.vue", () => {
  beforeEach(() => {});
  test("props", async () => {
    const wrapper = mount(Button, {
      propsData: {
        disabled: true,
        classMethod: "base",
        text: "Button",
      },
    });
    expect(wrapper.find(".v-btn").attributes().disabled).toBe("disabled");
    expect(wrapper.find(".v-btn").attributes().class).toMatch("base");
    expect(wrapper.find(".v-btn__content").text()).toBe("Button");
  });
  test("onClick", async () => {
    const wrapper = mount(Button);
    wrapper.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("bottonClick");
  });
});
