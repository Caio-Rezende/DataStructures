type Comparison<T> = (a: T, b: T) => boolean;

abstract class Heap<T> {
    _heap: T[] = [];

    root(): T | null {
        return this._heap.length > 0 ? this._heap[0] : null;
    }

    add(element: T) {
        this._heap.push(element);

        this.bubble();
    }

    protected bubble() {
        let start = this._heap.length - 1;

        while (start !== null) {
            let parent = this.parent(start);
            if (parent === null) {
                break;
            }

            if (this.compare(this._heap[start], this._heap[parent])) {
                this.swap(start, parent);
                start = parent;
            } else {
                break;
            }
        }
    }

    remove(): T | null {
        if (this._heap.length === 0) return null;

        const element = this._heap[0];

        this.sink();

        return element;
    }

    protected sink() {
        let start = 0;

        while (start < this._heap.length) {
            const left = this.left(start);
            const right = this.right(start);

            if (left !== null && right === null) {
                this.swap(start, left);
                this._heap.pop();
                break;
            } else if (left !== null && right !== null) {
                if (this.compare(this._heap[left], this._heap[right])) {
                    this.swap(start, left);
                    start = left;
                } else {
                    this.swap(start, right);
                    start = right;
                }
            } else {
                this.swap(start, this._heap.length - 1);
                this._heap.pop();
                break;
            }
        }
    }

    protected left(index: number): number | null {
        const child = index * 2 + 1;

        if (child < this._heap.length) {
            return child;
        }

        return null;
    }

    protected right(index: number): number | null {
        const child = index * 2 + 2;

        if (child < this._heap.length) {
            return child;
        }

        return null;
    }

    protected parent(index: number): number | null {
        if (index === 0) {
            return null;
        }

        if (index % 2 === 0) {
            return index / 2 - 1;
        } else {
            return (index - 1) / 2;
        }
    }

    protected swap(a: number, b: number) {
        [this._heap[a], this._heap[b]] = [this._heap[b], this._heap[a]];
    }

    protected abstract compare: Comparison<T>;
}

//Use this to get the greatest element in the heap at a time
export class MaxHeap<T> extends Heap<T> {
    protected compare = (a: T, b: T): boolean => {
        return a > b;
    };
}

//Use this to get the lesser element in the heap at a time
export class MinHeap<T> extends Heap<T> {
    protected compare = (a: T, b: T): boolean => {
        return a < b;
    };
}
