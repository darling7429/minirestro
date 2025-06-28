
import { sum } from "../components/sum"


test("cehcking sum of two numbers",()=>{
    const result=sum(3,4)
    expect(result).toBe(7)
})