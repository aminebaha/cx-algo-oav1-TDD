const panagram = require('./panagram')

describe('',()=>{
    test('',()=>{
        expect(isPangram("testtest")).toBe(false)
    })
    test('',()=>{
        expect(isPangram("123")).toBe(false)
    })

    test('',()=>{
        expect(isPangram()).toBe(undefined)
    })
    test('',()=>{
        expect(isPangram("The quick brown fox jumps over the lazy dog")).toBe(true)
    })
    test('',()=>{
        expect(isPangram('')).toBe(false)
    })
})