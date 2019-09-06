import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expense from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';
Enzyme.configure({
    adapter: new Adapter()
})

test ('should render expense list item ', ()=>{
    const wrapper = shallow(<ExpenseListItem {...expense[0]}/>)
    expect(wrapper).toMatchSnapshot()
})
