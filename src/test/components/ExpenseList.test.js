import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expense from '../fixtures/expenses';
Enzyme.configure({
    adapter: new Adapter()
})


test('should render expense list with expenses', ()=>{
    const wrapper = shallow(<ExpenseList expenses = {expense}/>)
    expect (wrapper).toMatchSnapshot()
})

test ('should render expense list with empty message',()=>{
    const wrapper = shallow(<ExpenseList expenses = {[]}/>)
    expect (wrapper).toMatchSnapshot()   
})