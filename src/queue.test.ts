import Queue from "./index";

var QUEUE: Queue;

beforeEach(() => {
    QUEUE = new Queue();
});

test("[isEmpty] Checking empty on create", () => {
    expect(QUEUE.isEmpty).toBe(true);
});

test("[isEmpty] Checking empty after enqueue", () => {
    const testValue: String = "TestString";

    QUEUE.enqueue(testValue);
    expect(QUEUE.isEmpty).toBe(false);
});

test("[isEmpty] Checking empty after enqueue & dequeue", () => {
    const testValue: String = "TestString";

    QUEUE.enqueue(testValue);
    QUEUE.dequeue();
    expect(QUEUE.isEmpty).toBe(true);
});


test("[hasNext] Checking next on create", () => {
    expect(QUEUE.hasNext).toBe(false);
});

test("[hasNext] Checking next after enqueue", () => {
    const testValue: String = "TestString";

    QUEUE.enqueue(testValue);
    expect(QUEUE.hasNext).toBe(true);
});

test("[hasNext] Checking next after enqueue & dequeue", () => {
    const testValue: String = "TestString";

    QUEUE.enqueue(testValue);
    QUEUE.dequeue();
    expect(QUEUE.hasNext).toBe(false);
});


test("[size] Adding 2 values", () => {
    const testValue1: String = "TestString";
    const testValue2: String = "TestString";

    QUEUE.enqueue(testValue1);
    QUEUE.enqueue(testValue2);
    expect(QUEUE.size).toBe(2);
});

test("[size] Adding 2 values, then removing 1", () => {
    const testValue1: String = "TestString";
    const testValue2: String = "TestString";

    QUEUE.enqueue(testValue1);
    QUEUE.enqueue(testValue2);
    QUEUE.dequeue();
    expect(QUEUE.size).toBe(1);
});


test("[clear] Clearing added values", () => {
    const testValue1: String = "TestString";
    const testValue2: String = "TestString";

    QUEUE.enqueue(testValue1);
    QUEUE.enqueue(testValue2);
    expect(QUEUE.size).toBe(2);

    QUEUE.clear();
    expect(QUEUE.size).toBe(0);
});


test("[enqueue] Enquing string", () => {
    const testValue: String = "TestString";

    QUEUE.enqueue(testValue);
    expect(QUEUE.peek()).toBe(testValue);
});

test("[enqueue] Enquing number", () => {
    const testValue: Number = 12345;

    QUEUE.enqueue(testValue);
    expect(QUEUE.peek()).toBe(testValue);
});

test("[enqueue] Enquing bigint", () => {
    const testValue: BigInt = BigInt(123456789012345678901234567890123456789012345678901234567890);

    QUEUE.enqueue(testValue);
    expect(QUEUE.peek()).toBe(testValue);
});

test("[enqueue] Enquing boolean", () => {
    const testValue: Boolean = false;

    QUEUE.enqueue(testValue);
    expect(QUEUE.peek()).toBe(testValue);
});

test("[enqueue] Enquing undefined", () => {
    const testValue: undefined = undefined;

    QUEUE.enqueue(testValue);
    expect(QUEUE.peek()).toBe(testValue);
});

test("[enqueue] Enquing null", () => {
    const testValue: null = null;

    QUEUE.enqueue(testValue);
    expect(QUEUE.peek()).toBe(testValue);
});

test("[enqueue] Enquing symbol", () => {
    const testValue: Symbol = Symbol("TestSymbol");

    QUEUE.enqueue(testValue);
    expect(QUEUE.peek()).toBe(testValue);
});

test("[enqueue] Enquing object", () => {
    const testValue: Object = {
        foo: "bar"
    };

    QUEUE.enqueue(testValue);
    expect(QUEUE.peek()).toBe(testValue);
});


test("[dequeue] Dequeueing string", () => {
    const testValue: String = "TestString";

    QUEUE.enqueue(testValue);
    expect(QUEUE.peek()).toBe(testValue);

    QUEUE.dequeue();
    expect(QUEUE.peek()).toBe(undefined);
});

test("[dequeue] Dequeueing number", () => {
    const testValue: Number = 12345;

    QUEUE.enqueue(testValue);
    expect(QUEUE.peek()).toBe(testValue);

    QUEUE.dequeue();
    expect(QUEUE.peek()).toBe(undefined);
});

test("[dequeue] Dequeueing bigint", () => {
    const testValue: BigInt = BigInt(123456789012345678901234567890123456789012345678901234567890);

    QUEUE.enqueue(testValue);
    expect(QUEUE.peek()).toBe(testValue);

    QUEUE.dequeue();
    expect(QUEUE.peek()).toBe(undefined);
});

test("[dequeue] Dequeueing boolean", () => {
    const testValue: Boolean = false;

    QUEUE.enqueue(testValue);
    expect(QUEUE.peek()).toBe(testValue);

    QUEUE.dequeue();
    expect(QUEUE.peek()).toBe(undefined);
});

test("[dequeue] Dequeueing undefined", () => {
    const testValue: undefined = undefined;

    QUEUE.enqueue(testValue);
    expect(QUEUE.peek()).toBe(testValue);

    QUEUE.dequeue();
    expect(QUEUE.peek()).toBe(undefined);
});

test("[dequeue] Dequeueing null", () => {
    const testValue: null = null;

    QUEUE.enqueue(testValue);
    expect(QUEUE.peek()).toBe(testValue);

    QUEUE.dequeue();
    expect(QUEUE.peek()).toBe(undefined);
});

test("[dequeue] Dequeueing symbol", () => {
    const testValue: Symbol = Symbol("TestSymbol");

    QUEUE.enqueue(testValue);
    expect(QUEUE.peek()).toBe(testValue);

    QUEUE.dequeue();
    expect(QUEUE.peek()).toBe(undefined);
});

test("[dequeue] Dequeueing object", () => {
    const testValue: Object = {
        foo: "bar"
    };

    QUEUE.enqueue(testValue);
    expect(QUEUE.peek()).toBe(testValue);

    QUEUE.dequeue();
    expect(QUEUE.peek()).toBe(undefined);
});


test("[contains] Contains string", () => {
    const testValue: String = "TestString";

    QUEUE.enqueue(testValue);
    expect(QUEUE.contains(testValue)).toBe(true);
});

test("[contains] Contains number", () => {
    const testValue: Number = 12345;

    QUEUE.enqueue(testValue);
    expect(QUEUE.contains(testValue)).toBe(true);
});

test("[contains] Contains bigint", () => {
    const testValue: BigInt = BigInt(123456789012345678901234567890123456789012345678901234567890);

    QUEUE.enqueue(testValue);
    expect(QUEUE.contains(testValue)).toBe(true);
});

test("[contains] Contains boolean", () => {
    const testValue: Boolean = false;

    QUEUE.enqueue(testValue);
    expect(QUEUE.contains(testValue)).toBe(true);
});

test("[contains] Contains undefined", () => {
    const testValue: undefined = undefined;

    QUEUE.enqueue(testValue);
    expect(QUEUE.contains(testValue)).toBe(true);
});

test("[contains] Contains null", () => {
    const testValue: null = null;

    QUEUE.enqueue(testValue);
    expect(QUEUE.contains(testValue)).toBe(true);
});

test("[contains] Contains symbol", () => {
    const testValue: Symbol = Symbol("TestSymbol");

    QUEUE.enqueue(testValue);
    expect(QUEUE.contains(testValue)).toBe(true);
});

test("[contains] Contains object", () => {
    const testValue: Object = {
        foo: "bar"
    };

    QUEUE.enqueue(testValue);
    expect(QUEUE.contains(testValue)).toBe(true);
});


test("[clone] Clone queue", () => {
    const testValue1: Object = {
        foo: "bar"
    };
    const testValue2: Symbol = Symbol("TestSymbol");
    const testValue3: null = null;

    QUEUE.enqueue(testValue1);
    QUEUE.enqueue(testValue2);
    QUEUE.enqueue(testValue3);

    const CLONE = QUEUE.clone();
    expect(CLONE.toJson()).toBe(QUEUE.toJson());
});