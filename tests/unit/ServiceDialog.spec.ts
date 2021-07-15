import { mount, shallowMount } from "@vue/test-utils";
import Emitter from "@/components/Emitter.vue";
import ServiceDialog from "@/components/entity/services/ServiceDialog.vue";

const factory = (props: Array<any> | {} = {}) => {
  // @ts-ignore
  return shallowMount(ServiceDialog, {
    props: {
      title: "test-dialog",
      isOpen: true,
      modelValue: {
        id: null,
        service: "service test",
        price: 10,
        archived: false,
      },
      ...props,
    },
  });
};

describe("ServiceDialog.vue", () => {
  it("check emit close", () => {
    const wrapper = factory();
    wrapper.vm.closeDialog();

    console.log(wrapper.emitted());
    console.log(wrapper.html());

    // expect(wrapper.find("span").text()).toBe("Not Authorized");
    // expect(wrapper.find("button").text()).toBe("submit");
  });
});
