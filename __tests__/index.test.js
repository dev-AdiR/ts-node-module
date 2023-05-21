import * as socketSDK from "../lib"
test("can log", () => {
    console.log("constants", socketSDK.CONSTANTS)

    expect(1+2).toBe(3)
})