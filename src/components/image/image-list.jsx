import React, {useEffect, useState} from 'react';
import {Skeleton, Spin} from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import styles from '../styles.module.scss';
import ImageItem from "./image-item";

function ImageList(props) {
    const [images, setImages] = useState([]);
    useEffect(() => {
        setImages(props.images);
    })

    const loadMoreItems = () => {
        if (!props.isLoading) {
            /**
             * Don't load duplicate images
             */
            props.getMoreImage();
        }
    }

    return (
        images.length > 0 ?

                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={loadMoreItems}
                    hasMore={!props.loadAll}
                >


                    <div className={styles.images_container}>
                        {
                            images.map((item, key) => (
                                <div key={key}>
                                    <ImageItem key={key} image={item} />
                                </div>
                            ))
                        }
                    </div>



                    {
                        props.isLoading ?
                            <div className={styles.loading_wrap}>
                                <Spin />
                            </div>
                             : ''
                    }
                </InfiniteScroll>
            : <Skeleton active/>
    )
}

export default ImageList;
