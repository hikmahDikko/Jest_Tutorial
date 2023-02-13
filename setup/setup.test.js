let animals = [
    'cat',
    'dog',
    'bird',
    'lion',
    'tiger'
];

describe("tseting animals array", () => {
    it("should add animal to the end of the array", () =>{
        expect(animals[animals.length-1]).toBe("tiger");
    })

    it("should add animal to the end of the array", () =>{
        animals.push("rat");
        expect(animals[animals.length-1]).toBe("rat");
    })

    it("should add animal to the beginning of the array", () =>{
        animals.unshift("rabbit");
        expect(animals[animals.length-1]).toBe("tiger");
    })
})