import moment from 'moment';

export default [{
    id: '1',
    description: 'Gem',
    note: '',
    amount: 200 ,
    createdAt: 0
},{
    id: '2',
    description: 'wezzy',
    note: 'everything stem ',  
    amount: 300 ,
    createdAt:moment(0).subtract(4, 'days').valueOf()

},{
    id: '3',
    description: 'arm',
    note: '',
    amount: 400 ,
    createdAt: moment(0).add(4, 'days').valueOf()
}]