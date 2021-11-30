import React from 'react';
import ContentBlock from "../ContentBlock";
import {Col, Row} from "reactstrap";
import Search from "@rsuite/icons/Search";
import {Button, Input, InputGroup} from "rsuite";
import GameList from "../GameList";
import FakeSlider2 from "../fakeSlider2";
import FakeSlider3 from "../fakeSlider3";
import FakeSlider4 from "../fakeSlider4";
import Slider from "../Slider";
import FakeSlider1 from "../fakeSlider1";

const Home = () => {
    return (
        <>
            <Slider />
            <FakeSlider1 />
            <ContentBlock>
                <Row>
                    <Col sm={12} md={9} className='filter-bar'>
                        <Button className='filter-btn shaded rounded'>Топ</Button>
                        <Button className='filter-btn shaded rounded'>Специальные</Button>
                        <Button className='filter-btn shaded rounded'>Настольные</Button>
                        <Button className='filter-btn shaded rounded'>Провайдеры</Button>
                    </Col>
                    <Col sm={12} md={3}>
                        <InputGroup className='search shaded rounded'>
                            <Input placeholder='Введите название игры' className='rounded' />
                            <InputGroup.Addon>
                                <Search />
                            </InputGroup.Addon>
                        </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <h4 className='title'>Портал к миллиону</h4>
                </Row>

                <Row>
                    <Col sm={12} md={9}>
                        <GameList />
                    </Col>
                    <Col sm={12} md={3}>
                        <FakeSlider4 />
                        <FakeSlider3 />
                        <FakeSlider2 />
                    </Col>
                </Row>
            </ContentBlock>
        </>
    );
};

export default Home;