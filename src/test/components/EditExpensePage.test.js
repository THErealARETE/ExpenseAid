import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
//import moment from 'moment'
import Adapter from 'enzyme-adapter-react-16';
import EditExpensePage from '../../components/EditExpensePage'; 
import expense from '../fixtures/expenses';
Enzyme.configure({
    adapter: new Adapter()
})

let editExpense ,removeExpense,  history, wrapper 

beforeEach(()=>{
     editExpense = jest.fn()
     removeExpense = jest.fn()
     history = {push: jest.fn()}
     wrapper = shallow(<EditExpensePage
         editExpense={editExpense}
         removeExpense= {removeExpense}
          history={history}
          expense = {expense[2]}
          />)
})
test('should render edit expense page correctly',()=>{
    
    expect(wrapper).toMatchSnapshot()
})

// should hadle edit expense correctly
test('should handle onSubmit correctly',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expense[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expense[2].id, expense[2])
})


//should handle remove expense correctly 
test('should handle removeExpense correctly',()=>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith(
        {id:expense[2].id})
})