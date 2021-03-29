import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';
import { createSerializer } from 'enzyme-to-json'; 
import toJson from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));



it('expect to render Card component', () => {
    const mockRobots = [
        {
            id: 1,
            name: "Obi Wan",
            email: 'theWan@gmail.com'
        }
    ]
    expect(toJson(shallow(<CardList robots={mockRobots}/>))).toMatchSnapshot();
})