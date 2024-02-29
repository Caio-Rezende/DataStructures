type Comparison<T> = (a: T, b: T) => number;

abstract class BinarySearchTree<T> {
    protected abstract compare: Comparison<T>;

    findIndexOf(list: T[], search: T): number {
        let start = 0;
        let end = list.length - 1;
        let med = end - Math.floor(end / 2);

        while (med > start && med < end) {
            const compared = this.compare(search, list[med])
            if (compared === 0) {
                break;
            }

            if (compared > 0) {
                start = med;
                med = end - Math.floor((end - start) / 2);
            } else {
                end = med;
                med = end - Math.ceil((end - start) / 2);
            }
        }

        if (this.compare(search, list[med]) === 0) {
            return med
        }

        return -1;
    }
}

//Use this for asc sorted list
export class GreaterBST extends BinarySearchTree<number> {
    protected compare = (a: number, b: number): number => {
        return a - b;
    };
}

//Use this for desc sorted list
export class LesserBST extends BinarySearchTree<number> {
    protected compare = (a: number, b: number): number => {
        return b - a;
    };
}
