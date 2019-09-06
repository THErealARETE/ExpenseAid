import reducerFilters from '../../reducers/filters';
import moment from 'moment';

test ('should setup default filter values', ()=>{
  const state = reducerFilters(undefined, {type: '@@INIT'});
  expect (state).toEqual ({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')

  })
});


test ('should set sortBy to amount', ()=>{
   const state = reducerFilters(undefined, {type: 'SORT_BY_AMOUNT'})
   expect(state.sortBy).toBe('amount')
})
test ('should sortBy to date', ()=>{
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {type: 'SORT_BY_DATE'}
    const state = reducerFilters(currentState, action)
    expect(state.sortBy).toBe('date')
})

// should set text filter 
// should set start date filter 
// should set end date filter 

test ('should set text filter', ()=>{
    const text ='this is text for filter' 
    const action = {type:'SET_TEXT_FILTER', text }
 const state = reducerFilters(undefined, action)
 expect(state.text).toBe(text)
})

test ('should set start date filter', ()=>{

    const startDate = moment().startOf('month')
    const action = {type:'SET_START_DATE', startDate}
    const state= reducerFilters(undefined, action)
    expect(state.startDate).toBe(startDate)
})

test ('should set end date filter', ()=>{

    const endDate = moment().endOf('month')
    const action = {type:'SET_END_DATE', endDate}
    const state= reducerFilters(undefined, action)
    expect(state.endDate).toBe(endDate)
})