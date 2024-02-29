import { GreaterBST, LesserBST } from "classes/bst";
import assert from "node:assert";
import { describe, it } from "node:test";

describe("bst test - basic", () => {
    it("should get correct index for greater", () => {
        const bst = new GreaterBST()

        const index = bst.findIndexOf([-10, 5, 6, 12, 100], 12)

        assert.equal(3, index)
    })
    it("should get correct index for lesser", () => {
        const bst = new LesserBST()

        const index = bst.findIndexOf([100, 12, 6, 5, -10], 12)

        assert.equal(1, index)
    })

    it("gbst should get correct index for first", () => {
        const bst = new GreaterBST()

        const index = bst.findIndexOf([-10, 5, 6, 12, 100], -10)

        assert.equal(0, index)
    })
    it("lbst should get correct index for first", () => {
        const bst = new LesserBST()

        const index = bst.findIndexOf([100, 12, 6, 5, -10], 100)

        assert.equal(0, index)
    })

    it("gbst should get correct index for last", () => {
        const bst = new GreaterBST()

        const index = bst.findIndexOf([-10, 5, 6, 12, 100], 100)

        assert.equal(4, index)
    })
    it("lbst should get correct index for last", () => {
        const bst = new LesserBST()

        const index = bst.findIndexOf([100, 12, 6, 5, -10], -10)

        assert.equal(4, index)
    })
})