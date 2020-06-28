import React, {useEffect, useState} from 'react';
import styles from "../styles.module.scss";

function ImageItem(props) {
    const [image, setImage] = useState({});
    useEffect(() => {
        setImage(props.image);
    })

     const getThumbnail = () => {
        return `https://picsum.photos/id/${image.id}/300/300`;
    }

    const getRandomColor = () => {
        const colors = [
            '#fff1f0', '#feffe6', '#e6fffb', '#f0f5ff', '#fff0f6'
        ];

        return colors[Math.floor(Math.random() * colors.length)];
    }

    const openImage = () => {
        window.open(image.download_url);
    }

    return (
        <div className={styles.image_wrapper} onClick={openImage}>
            <div
                className={styles.image_bg}
                style={{
                    backgroundColor: `${getRandomColor()}`,
                    backgroundImage: `url(${getThumbnail()})`
                }}
            > </div>

            <div className={styles.author_wrap}>
                {image.author}
            </div>

        </div>
    )
}

export default ImageItem;
