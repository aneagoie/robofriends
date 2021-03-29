import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';
import { createSerializer } from 'enzyme-to-json'; 
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


describe('CounterButton', () => {
    it('CounterButton: renders correctly', () => {
        const mockColor = 'red';
        const tree = renderer.create(<CounterButton color={mockColor} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('correctly icrements the counter', () => {
        const mockColor = 'red';
        const wrapper = shallow(<CounterButton color={mockColor} />);

        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({ count: 1 });
        expect(wrapper.props().color).toEqual('red');
    })
});