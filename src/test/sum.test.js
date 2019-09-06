import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})

const add =(a,b)=> a+b;

test ('should add two numbers', ()=>{
   
    const result = add(3,4);
   // const wrapper = shallow(result)
    expect (result).toBe(7);

    
    /*if (result !== 7){
        throw new Error ('you added 4 and 3 the answer was not 7')
    }*/
});