let animals = [
    'cat',
    'dog',
    'bird',
    'lion',
    'tiger'
];

beforeAll(() => {
    console.log("Before all test");
    animals = [
        'cat',
        'dog',
        'bird',
        'lion',
        'tiger'
    ];
})

beforeEach(() => {
    console.log("Before each test");
    animals = [
        'cat',
        'dog',
        'bird',
        'lion',
        'tiger'
    ];
});

afterEach(()=> {
    console.log("After each test");
    animals = [
        'cat',
        'dog',
        'bird',
        'lion',
        'tiger'
    ];
});

afterAll(() => {
    console.log("After all test");
    animals = [
        'cat',
        'dog',
        'bird',
        'lion',
        'tiger'
    ];
})

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
        expect(animals[0]).toBe("rabiit");
    })
})