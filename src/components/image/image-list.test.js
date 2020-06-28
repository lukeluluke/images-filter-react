import React from 'react';
import { configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageList from "./image-list";
import ImageItem from "./image-item";
import {Skeleton} from "antd";

configure({ adapter: new Adapter() });

describe('Image List Component', () => {


    it('should render Skeleton', () => {
        const wrapper = shallow(<ImageList />)
        expect(wrapper.find(Skeleton).length).toEqual(1);
    })

    it('should render image block if there is images', function () {
        const images = [
            {
                "id": "0",
                "author": "Alejandro Escamilla",
                "width": 5616,
                "height": 3744,
                "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
                "download_url": "https://picsum.photos/id/0/5616/3744"
            }
        ]

        const props = {
            images: images,
            loadAll: false,
            isLoading: false,
            getMoreImage: () => {

            }
        }
        const wrapper = mount(<ImageList {...props}/>)
        expect(wrapper.find(ImageItem).length).toEqual(1);
    });


})
