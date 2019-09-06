
import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import moment from 'moment'
import Adapter from 'enzyme-adapter-react-16';
import {ExpenseListFilters} from '../../components/ExpenseListFilters'; 
import {filters, altFilters} from '../fixtures/filters';
Enzyme.configure({
    adapter: new Adapter()
})

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper ;

beforeEach(() =>{
    setTextFilter = jest.fn();
    sortByAmount =  jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(
    <ExpenseListFilters
    filters = {filters}
    setTextFilter = {setTextFilter}
    sortByDate = {sortByDate}
    sortByAmount = {sortByAmount}
    setStartDate = {setStartDate}
    setEndDate = {setEndDate}
    />)
})


test('SHOULD RENDER EXPENSE LIST FILTER CORRECTLY' ,()=>{
   expect(wrapper).toMatchSnapshot()
})


/*test('SHOULD RENDER EXPENSE LIST FILTER with alt data CORRECTLY' ,()=>{
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
 }) */

 // should handle text change 

 //should sort by date 

 //should sort by amount

 // should handle date changes 

 // should set date focused change 



 // asseet something about the spies and something about the state


 test ('should handle on text change', ()=>{
    const value= 'testing'
    wrapper.find('input').simulate('change',{
    
        target: {value}
    })
        expect(setTextFilter).toHaveBeenLastCalledWith(value)
 })

 test('should handle sort by date', ()=>{
     const value = 'date'
     wrapper.setProps(
         {filters: altFilters}
     )
    wrapper.find('select').simulate('change',{
    
        target: {value}
    })
        expect(sortByDate).toHaveBeenCalledWith(value)
 })

 test('should handle sort by amount', ()=>{
    const value = 'amount'
   wrapper.find('select').simulate('change',{
   
       target: {value}
   })
       expect(sortByAmount).toHaveBeenCalledWith(value)
})


test('should set on date change', ()=>{
    const startDate = moment(0).add(2 , 'years')
    const endDate = moment(0).add(4, 'years')
    const wrapper = shallow(<ExpenseListFilters/>)
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenCalledWith(startDate)
    expect(setEndDate).toHaveBeenCalledWith(endDate)    
})

test('should handle date focus changes', ()=>{
    const calenderFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')({calenderFocused})
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused)
})
