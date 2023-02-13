const sum = require("./sum");

describe('example tests', () => {
    it("should add 1 + 2 equals 3", () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    });

    it("object assignment", () => {
        const obj = {};
        expect(obj).toEqual({});
    });
});

describe("truthy or falsy", () => {
    it("null", () => {
        const n = 0;
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy();
    });
});

describe("numbers", () => {
    it("two plus two", () => {
        const value = 2 + 2;
        expect(value).toBe(4);
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3);
        expect(value).toBeLessThan(7);
        expect(value).toBeLessThanOrEqual(4);
    });

    it("float", () => {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.2999999);
    });
});

describe("string", () => {
    it("there is no I in team", () => {
        expect("team").not.toMatch(/I/)
    });
});

describe("array", () => {
    const shoppingList = [
        "diapers",
        "coffee",
        "tea",
        "beer"
    ];

    expect(shoppingList).toContain("tea");
});

function compileAndRunCode() {
    throw new Error('You are using the wrong JDK');
};

describe("exceptions", () => {
    it("should throw an error", () => {
        expect(() => compileAndRunCode()).toThrow(
            "You are using the wrong JDK"
        );
    });
});