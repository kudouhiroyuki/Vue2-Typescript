import commonStore from "@/store/common"

describe("components/TheHeader.vue", () => {
  let state: any = null
  beforeEach(() => {
    state = { currentNav: "hair" }
  })
  test("getters", async () => {
    const currentNav = commonStore.getters.commonState(state);
    console.log(currentNav);
    // expect(currentNav).toEqual([ dogs[0], dogs[2] ])
  });
});
