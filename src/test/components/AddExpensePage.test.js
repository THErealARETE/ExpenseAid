import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
//import moment from 'moment'
import Adapter from 'enzyme-adapter-react-16';
import AddExpensePage from '../../components/AddExpensePage'; 
import expense from '../fixtures/expenses';
Enzyme.configure({
    adapter: new Adapter()
})

let startAddExpense, history, wrapper 

beforeEach(()=>{
     startAddExpense = jest.fn()
     history = {push: jest.fn()}
     wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />)
})
test('should render add expense page correctly',()=>{
    
    expect(wrapper).toMatchSnapshot()
})


test('should handle onSubmit',()=>{
    
    wrapper.find('ExpenseForm').prop('onSubmit')(expense[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startAddExpense).toHaveBeenLastCalledWith(expense[1])
})