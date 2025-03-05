import { sum } from "../sum";

test('sum should  be happend of two number', () => { 
  
  const res=sum(3,4);
  expect(res).toBe(7);
 })