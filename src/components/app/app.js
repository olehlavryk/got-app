import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import styled from 'styled-components';
import randomChar from "../randomChar/randomChar";

const ButtonToggle = styled.button`
    padding: 7px 20px;
    color: white;
    background: #244151;
    border: none;
    margin: 0 0 20px 0;
    border-radius: 5px;
    transition: background-color 300ms ease-in-out;
    outline: none;
    
    :hover {
      background: #4982a2;
    }
`;

export default class App extends Component  {

    state = {
        toggleRandomChar: true
    }

    toggleRandomChar = () => {
        this.setState({
            toggleRandomChar: !this.state.toggleRandomChar
        })
    }

    render() {
        const randomChar = this.state.toggleRandomChar ?  <RandomChar/> : null;

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 6, offset: 0}}>
                            <ButtonToggle
                                onClick={this.toggleRandomChar}>Toggle random character</ButtonToggle>
                        </Col>
                    </Row>
                    <Row>

                        <Col lg={{size: 6, offset: 0}}>
                            { randomChar }
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }

};
