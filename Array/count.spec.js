const count = require('./count')

describe('',()=>{
    test('',()=>{
        expect(countfn([1,2,3])).toBe(3)
    })
    test('',()=>{
        expect(countfn([])).toBe(0)
    })

    test('',()=>{
        expect(countfn()).toBe(undefined)
    })
    test('',()=>{
        expect(countfn([1,2,3,4,5,6,7,8,9])).toBe(9)
    })
    
})