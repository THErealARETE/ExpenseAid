import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import moment from 'moment'
import Adapter from 'enzyme-adapter-react-16';
import ExpenseForm from '../../components/ExpenseForm'; 

import expense from '../fixtures/expenses';
Enzyme.configure({
    adapter: new Adapter()
})
var MockDate = require('mockdate');

MockDate.set(moment('2000-10-10')); // using momentjs

new Date().toString() // "Thu Mar 30 2000 00:00:00 GMT-0600 (CST)"

test ('should render expense form correctly', ()=>{

    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})


test ('should render rexpense form correctly with expense 1', ()=>{

    const wrapper = shallow(<ExpenseForm expenses = {expense[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test ('should render error if expense is not provided', ()=>{

    const wrapper = shallow(<ExpenseForm/> )
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{

        }
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('should set description on input change ',()=>{
    const value='new description'
const wrapper=shallow(<ExpenseForm/>)
wrapper.find('input').at(0).simulate('change',{

    target: {value}
})
    expect(wrapper.state('description')).toBe(value)
})

test('should set note on text area change ',()=>{
    const value='new note'
const wrapper=shallow(<ExpenseForm/>)
wrapper.find('textarea').simulate('change',{

    target: {value}
})
    expect(wrapper.state('note')).toBe(value)
})


test('should set amount correctly',()=>{
    const value= '23.50'
const wrapper=shallow(<ExpenseForm/>)
wrapper.find('input').at(1).simulate('change',{

    target: {value}
})
    expect(wrapper.state('amount')).toBe(value)
})

test('should render error because amount is invalid',()=>{
    const value = '34.968'
    const wrapper=shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{

        target: {value}
    })
        expect(wrapper.state('amount')).toBe('')

})


test ('should call onSubmit to aid form validation', ()=>{
    const onSubmitSpy=jest.fn()
    onSubmitSpy()
    expect(onSubmitSpy).toHaveBeenCalled()
    const wrapper = shallow(<ExpenseForm expenses={expense[0]} onSubmit= {onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{

        }
    })
    expect(wrapper.state('error')).toBe('Please provide description and amount.')
     expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expense[0].description,
        note: expense[0].note,
        amount: expense[0].amount,
        createdAt: expense[0].createdAt
    })
})

test('should set on date change', ()=>{
    const now  = moment()
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set on focus to true', ()=>{
    const focused = true
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('calenderFocused')).toBe(focused)
})
