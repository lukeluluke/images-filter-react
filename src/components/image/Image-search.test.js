import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageSearch from "./image-search";
configure({ adapter: new Adapter() });


describe('Image search function', () => {
  it('should include input', () => {
    const wrapper = shallow(<ImageSearch />);
    expect(wrapper.find('Input').length).toEqual(1);
  })

  it('should handle input changes', function () {
    const onChange = jest.fn();
    const event = {
      target: {
        value: '123'
      }
    }
    const wrapper = shallow(<ImageSearch updateImageList={onChange}/>);
    wrapper.find('Input').simulate('change', event);
    expect(onChange).toBeCalledWith(expect.anything())
  });

})
