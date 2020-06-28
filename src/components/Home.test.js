import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Home from "./Home";
import ImageSearch from "./image/image-search";
import ImageList from "./image/image-list";

describe('Home Component', () => {
  it('should render search box and image list', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(ImageSearch).length).toEqual(1);
    expect(wrapper.find(ImageList).length).toEqual(1);
  })
})
