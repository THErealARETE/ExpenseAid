import reducerExpenses from '../../reducers/expenses';
import expense from '../fixtures/expenses'
import moment from 'moment';

// setup default state 
// add expense 
//edit expense 
//remove expense

test ('should setup default state', ()=>{

    const state = reducerExpenses(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

 test ('should remove id', ()=>{

    const action = { type: 'REMOVE_EXPENSE',
      id: expense[1].id}
      const state = reducerExpenses(expense, action)
      expect(state).toEqual([expense[0],expense[2]])
 })

 test ('should not remove id', ()=>{

    const action = { type: 'REMOVE_EXPENSE',
      id:'-3'}
      const state = reducerExpenses(expense, action)
      expect(state).toEqual([expense[0],expense[1],expense[2]])
 })

 //should add an expense 
 // should edit an expense 
 //should not edit an expense if id not found 

 test ('should add an expense', ()=>{

    const action = {type: 'ADD_EXPENSE', 
    id: '4',
    description: 'phlem',
    note: 'i am a god',
    amount: -150 ,
    createdAt: moment(0).add(7, 'days').valueOf()}
    const state = reducerExpenses(expense, action)
    expect(state).toEqual([expense[0],expense[1],expense[2], expense[3]])
 })
 

 test ('should edit an expense', ()=>{

    const description= 'J.COLE'
   
    
     const action = {type: 'EDIT_EXPENSE', 
     id:expense[1].id, 
    updates:{description} }
      
   

     const state = reducerExpenses(expense, action )
     expect(state[1].description).toEqual(description)
 })

 test ('should not edit an expense if id not found', ()=>{

    const description= 'J.COLE'
   
    
     const action = {type: 'EDIT_EXPENSE', 
     id:-4, 
    updates:{description} }
      
   

     const state = reducerExpenses(expense, action )
     expect(state).toEqual(expense)
 })
 
