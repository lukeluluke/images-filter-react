import React from 'react';
import { configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageItem from "./image-item";


configure({ adapter: new Adapter() });

describe('Image Item Component', () => {
    let wrapper;


    beforeEach(() => {
        const image = {
            "id": "0",
            "author": "Alejandro Escamilla",
            "width": 5616,
            "height": 3744,
            "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
            "download_url": "https://picsum.photos/id/0/5616/3744"
        }
        wrapper = mount(<ImageItem image={image} />);
    });

    it('should show author', () => {
        console.log(wrapper.text());
        expect(wrapper.text().trim()).toEqual('Alejandro Escamilla')
    })
})
