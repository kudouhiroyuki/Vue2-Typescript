import { shallowMount } from "@vue/test-utils";
import Button from "@/components/button/Button.vue";

describe("components/button/Button.vue", () => {
  test("onClick", () => {
    const wrapper = shallowMount(Button);
    wrapper.trigger("click");
  });
});
