const fetchData = require("./async");

describe("async", () => {
    it("should return correct todo", () => {
        const todo = fetchData(1).then(todo => {
            expect(todo.id).toBe(1);
        });
    });

    it("should return correct todo", async () => {
        const todo = await fetchData(1);
        expect(todo.id).toBe(1);
    });
})