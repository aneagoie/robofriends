import React from 'react'

import { shallow } from "enzyme";
import Card from "./Card";

it('expect to render Card component', () => {
  expect(shallow(<Card/>).length).toEqual(1)
})
