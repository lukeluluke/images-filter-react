import React, {Component} from 'react';
import { Layout } from 'antd';
import styles from './styles.module.scss';
import ImageSearch from './image/image-search';
import ImageList from "./image/image-list";
import NetworkClient from "../lib/NetworkClient";
import {PAGE_SIZE} from "../config/const";
import {API_GET_IMAGE_LIST} from "../config/api";

const { Header, Content } = Layout;


class Home extends Component{

    state = {
        images: [],
        page: 1,
        loadAll: false,
        isLoading: false,
        filterImages: [],
        keyword: ''
    }

    componentDidMount() {
        this.getImages();
    }

    getImages = () => {
        const currentPage = this.state.page;
        const params = {
            page: currentPage,
            limit: PAGE_SIZE
        }
        this.setState({
            isLoading: true
        })
        NetworkClient.get(API_GET_IMAGE_LIST, params).then((images) => {
            this.setState({
                images: [...this.state.images, ...images],
                page: currentPage + 1,
                loadAll: images.length === 0
            }, () => {
                this.setState({
                    isLoading: false
                })
            })
        }).catch(err => {
            this.setState({
                isLoading: false
            })
        })
    }

    updateImageList = (keyword) => {
       this.setState({
           keyword: keyword
       })
    }

    getFilterImages = () => {
        if (this.state.keyword) {
            return this.state.images.filter((item) => {
                return item.author.toLowerCase().includes(this.state.keyword.toLowerCase())
            })
        } else {
            return this.state.images;
        }

    }

    render() {
        return (
            <Layout>
                <Header className={styles.layout_header}>Artist Gallery</Header>
                <Content className={styles.layout_content}>
                    <div className={styles.search_bar}>
                        <ImageSearch updateImageList={this.updateImageList}/>
                    </div>
                    <div className={styles.list_container}>
                        <ImageList
                            images={this.getFilterImages()}
                            loadAll={this.state.loadAll}
                            isLoading={this.state.isLoading}
                            getMoreImage={this.getImages}
                        />
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default Home;
