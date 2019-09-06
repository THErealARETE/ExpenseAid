import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
    adapter: new Adapter()
})

test('should render not found page correctly', ()=>{

    const wrapper=shallow(<NotFoundPage/>)
    expect(wrapper).toMatchSnapshot()
})