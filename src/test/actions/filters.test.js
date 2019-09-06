import moment from 'moment';
import {setStartDate, setEndDate, sortByAmount, sortByDate,setTextFilter} from '../../actions/filters';

test ('should generate a set start date ',()=>{
const action = setStartDate(moment(0)) 
expect (action).toEqual({
    type: 'SET_START_DATE',
    StartDate:moment(0)
})
})

test ('should generate a set end date ' , ()=>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        EndDate: moment(0)
    })

})
test ('should sort by amount ', ()=>{
    expect (sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT',
    })
})

test ('should sort by date', ()=>{
    expect (sortByDate()).toEqual({
        type: 'SORT_BY_DATE',
    })
})

test ('should set text filter ', ()=>{
    const action = setTextFilter('')
    expect (action).toEqual({
        text:'',
        type: 'SET_TEXT_FILTER'
    })
})

test ('should set text filter ', ()=>{
   const text = 'opium'
    const action = setTextFilter(text)
    expect (action).toEqual({
        text,
        type: 'SET_TEXT_FILTER'
    })
})