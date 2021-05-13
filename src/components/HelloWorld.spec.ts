import { mount, config } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

/*
 This code is needed to ensure tests pass
 and should be deleted once proper CSS modules support is added to @vue/test-utils for Vue 3
*/
config.global.mocks = config.global.mocks || {};
config.global.mocks.$style = {};

const sum = (first: number, second: number): number => first + second;

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("HelloWorld.vue", () => {
    const wrapper = mount(HelloWorld, {
        props: {
            msg: "Test message",
        },
    });

    expect(wrapper.text()).toContain("Test message");
});
