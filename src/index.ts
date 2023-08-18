class Queue {
    private elements: Map<number, any> = new Map();
    private head: number = 0;
    private tail: number = 0;

    /**
     * Initializes a new instance of the Queue class with an empty queue
     */
    constructor(elements?: Map<number, any>) {
        if (elements != undefined) {
            this.elements = new Map(elements);
            this.tail = elements.size;
        }
    }

    /**
     * The current number of elements in the queue
     * @returns {number} The number of elements currently in the queue
     */
    public get size(): number {
        return this.tail - this.head;
    }

    /**
     * Determines whether the queue is empty
     * @returns {boolean} true when empty, false otherwise
     */
    public get isEmpty(): boolean {
        return this.tail - this.head === 0;
    }

    /**
     * Determines whether the queue has a next element
     * @returns {boolean} true when element is present, false otherwise
     */
    public get hasNext(): boolean {
        return this.tail - this.head != 0;
    }

    /**
     * Removes all elements from the queue
     */
    public clear(): void {
        this.elements.clear();
        this.head = this.tail;
    }

    /**
     * Determines whether an element is in the queue
     * @param searchElement The element to search for
     * @returns {boolean} true if the element is present, false otherwise
     */
    public contains(searchElement: any): boolean {
        return Array.from(this.elements.values()).includes(searchElement);
    }

    /**
     * Creates a copy of the queue
     * @returns {Queue} A new copy of the queue
     */
    public clone(): Queue {
        return new Queue(this.elements);
    }

    /**
     * Removes and returns the element at the start of the queue
     * @returns {any} The next element in the queue
     */
    public dequeue(): any {
        const item = this.elements.get(this.head);
        this.elements.delete(this.head);
        this.head++;
        return item;
    }

    /**
     * Adds an element to the end of the queue
     * @param element The element to add to the queue
     */
    public enqueue(element: any): void {
        this.elements.set(this.tail, element);
        this.tail++;
    }

    /**
     * Returns the element at the start of the queue without 
     * removing it from the queue
     * @returns {any} The next element in the queue
     */
    public peek(): any {
        return this.elements.get(this.head);
    }

    /**
     * Generates a JSON string of the queue
     * @returns JSON representation of the queue
     */
    public toJson(): string {
        return JSON.stringify({
            elements: [...this.elements],
            head: this.head,
            tail: this.tail
        });
    }
}

export default Queue;