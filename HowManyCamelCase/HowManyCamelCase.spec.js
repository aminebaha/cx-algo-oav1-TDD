const camel = require('./HowManyCamelCase')

describe('',()=>{
    test('',()=>{
        expect(camelcase("testtest")).toBe("testTest")
    })
    test('',()=>{
        expect(camelcase("Azeaze")).toBe("testTest")
    })

    test('',()=>{
        expect(camelcase(123)).toBe(undefined)
    })
    test('',()=>{
        expect(camelcase("")).toBe("")
    })
    test('',()=>{
        expect(camelcase()).toBe(undefined)
    })
})