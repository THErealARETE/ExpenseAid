import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import toJSON FROM 'enzyme-to-json';
import Header from '../../components/Header';

Enzyme.configure({
    adapter: new Adapter()
})

//import reactShallowRenderer from 'react-test-renderer/shallow';


test ('should render header correctly', ()=>{
   const wrapper = shallow(<Header />)
   expect(wrapper).toMatchSnapshot()
   //expect(wrapper.find('h1').text()).toBe("Expensify")
    // const renderer = new reactShallowRenderer();
   // renderer.render(<Header />);
   // expect(renderer.getRenderOutput()).toMatchSnapshot()
  //  console.log(renderer.getRenderOutput())
})