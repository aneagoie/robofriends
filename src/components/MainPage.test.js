import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';
import { createSerializer } from 'enzyme-to-json'; 

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps }/>);
})


it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'Happy Robot',
            email: 'happyRobot@robots.com'
        }],
        searchField: 'a',
        isPending: false
    }
    let wrapper2 = shallow(<MainPage { ...mockProps2 } />)
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'Happy Robot',
        email: 'happyRobot@robots.com'
    }])
})
