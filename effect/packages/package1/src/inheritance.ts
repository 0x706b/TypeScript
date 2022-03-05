declare global {
  /**
   * @tsplus type Iterable
   */
  export interface Iterable<T> {}
}

/**
 * @tsplus type List
 */
export class List<A> implements Iterable<A> {
  constructor(readonly arr: Array<A>) {}
  [Symbol.iterator](): Iterator<A> {
    return this.arr[Symbol.iterator]();
  }
}

/**
 * @tsplus type List2
 */
export class List2<A> extends List<A> {}

/**
 * @tsplus fluent Iterable map
 */
export function iterableMap<A, B>(xs: Iterable<A>, f: (a: A) => B): Iterable<B> {
  return {
    *[Symbol.iterator]() {
      for (const a of xs) {
        yield f(a);
      }
    }
  }
}

const l2 = new List2([1, 2, 3]).map((n) => n.toString())