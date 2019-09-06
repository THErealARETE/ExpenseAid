import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'; 
import expense from '../fixtures/expenses';
Enzyme.configure({
    adapter: new Adapter()
})


test('should render expense dashboard page correctly', ()=>{

    const wrapper=shallow(<ExpenseDashboardPage expenses={expense}/>)
    expect(wrapper).toMatchSnapshot()
})