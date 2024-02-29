import { MaxHeap, MinHeap } from "classes/heap";
import assert from "node:assert";
import { describe, it } from "node:test";

describe("heap test - basic", () => {
    it("should get min", () => {
        const heap = new MinHeap<number>();
        heap.add(1);
        heap.add(2);
        heap.add(3);
        heap.add(0);

        assert.strictEqual(heap.root(), 0);
    });

    it("should get max", () => {
        const heap = new MaxHeap<number>();
        heap.add(1);
        heap.add(2);
        heap.add(3);
        heap.add(0);

        assert.strictEqual(heap.root(), 3);
    });
});

describe("heap test - sort", () => {
    it("order list desc", () => {
        const heap = new MaxHeap<number>();
        heap.add(100);
        heap.add(10);
        heap.add(1);
        heap.add(0);
        heap.add(-100);
        heap.add(-1000);
        heap.add(50);
        heap.add(-50);

        let sorted: number[] = [];
        let element = heap.remove();
        while (element !== null) {
            sorted.push(element!);
            element = heap.remove();
        }

        assert.deepStrictEqual(sorted, [100, 50, 10, 1, 0, -50, -100, -1000]);
    });

    it("order list asc", () => {
        const heap = new MinHeap<number>();
        heap.add(100);
        heap.add(10);
        heap.add(1);
        heap.add(0);
        heap.add(-100);
        heap.add(-1000);
        heap.add(50);
        heap.add(-50);

        let sorted: number[] = [];
        let element = heap.remove();
        while (element !== null) {
            sorted.push(element!);
            element = heap.remove();
        }

        assert.deepStrictEqual(sorted, [-1000, -100, -50, 0, 1, 10, 50, 100]);
    });
});
