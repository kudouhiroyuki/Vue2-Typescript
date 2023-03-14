import commonStore from "@/store/common";

describe("components/organisms/TheHeader.vue", () => {
  let state: any = null;
  beforeEach(() => {
    state = { currentNav: "hair" };
  });
  test("getters", async () => {
    const currentNav = commonStore.getters.commonState(state);
    console.log(currentNav);
  });
});
