const marcos = require('./marcos')

describe('',()=>{
    test('',()=>{
        expect(marcosfn("SOFSOSSISSOW")).toBe(3)
    })
    test('',()=>{
        expect(marcosfn("SOS")).toBe(0)
    })

    test('',()=>{
        expect(marcosfn("SOSSS")).toBe(1)
    })
    test('',()=>{
        expect(marcosfn("")).toBe(0)
    })
    test('',()=>{
        expect(marcosfn()).toBe(undefined)
    })
    test('',()=>{
        expect(marcosfn('SOSOSISAS')).toBe(2)
    })
    test('',()=>{
        expect(marcosfn('SOSOS2S8S')).toBe(2)
    })
    test('',()=>{
        expect(marcosfn(123456)).toBe(0)
    })
})