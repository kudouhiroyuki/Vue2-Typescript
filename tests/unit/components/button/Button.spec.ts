import { mount } from "@vue/test-utils";
import Button from "@/components/button/Button.vue";

describe("components/button/Button.vue", () => {
  test("onClick", async () => {
    const wrapper = mount(Button);
    wrapper.trigger("click");
    expect(wrapper.emitted()).toHaveProperty('bottonClick');
  });
});