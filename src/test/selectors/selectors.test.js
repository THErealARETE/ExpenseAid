import expenses from '../../selectors/expenses';
import expense from '../fixtures/expenses'
import moment from 'moment';


test ('should filter by text value',()=>{
   const filters = {
        text: 'e',
        sortBy: 'date',
        note: '',
        startDate: undefined,
        endDate: undefined 

    }
    const result = expenses(expense, filters)
        expect (result).toEqual([expense[0], expense[1]]) 
})

test ('should filter by start date', ()=>{
   const filters= {
       text: '',
       sortBy: 'date',
       startDate: moment(0),
       EndDate: undefined 
   }
   const result = expenses(expense, filters)
   expect(result).toEqual([expense[2],expense[0]])
})

test('should sort by end date', ()=>{
    const filters= {
        text: '',
        sortBy: 'date',
        note: '',
        startDate: undefined,
        endDate: moment(0).add(2,'days')
    }
    const result = expenses(expense, filters)
    expect(result).toEqual([expense[0], expense[1]])
})

test('should sort by date', ()=>{
    const filters= {
        text: '',
        sortBy: 'date',
        note: '',
        startDate: moment(0),
        endDate: undefined
    }
    const result=expenses(expense,filters)
    expect(result).toEqual([expense[2],expense[0]])
})

test('should sort by amount', ()=>{
    const filters= {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result=expenses(expense,filters)
    expect(result).toEqual([expense[2],expense[1],expense[0]])

})