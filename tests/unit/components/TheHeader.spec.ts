import commonStore from "@/store/common"

describe("components/TheHeader.vue", () => {
  beforeEach(() => {
  })
  test("XXXXX", async () => {
    const currentNav = commonStore.getters.commonState({ currentNav: "hair" });
    console.log(currentNav);
    // expect(currentNav).toEqual([ dogs[0], dogs[2] ])
  });
});
