import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import styled from 'styled-components';
import ErrorMessage from "../errorMessage";
import CharacterPage from "../pages/characterPage";
import BooksPage from "../pages/booksPage";
import HousesPage from "../pages/housesPage";
import gotService from "../../services/GotService";


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

    gotService = new gotService()

    state = {
        toggleRandomChar: true,
        error: false,
        selectedChar: 130,
    };

    toggleRandomChar = () => {
        this.setState({
            toggleRandomChar: !this.state.toggleRandomChar
        })
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    };

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    };

    render() {
        const randomChar = this.state.toggleRandomChar ?  <RandomChar/> : null;

        if(this.state.error) {
            return <ErrorMessage/>
        }

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
                    <CharacterPage />
                    <BooksPage />
                    <HousesPage />
                    {/*<Row>*/}
                    {/*    <Col md='6'>*/}
                    {/*        <ItemList*/}
                    {/*            onItemSelected={this.onItemSelected}*/}
                    {/*            getData={this.gotService.getAllBooks}*/}
                    {/*            renderItem={(item) => item.name}/>*/}
                    {/*    </Col>*/}
                    {/*    <Col md='6'>*/}
                    {/*        <CharDetails charId={this.state.selectedChar} />*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<Row>*/}
                    {/*    <Col md='6'>*/}
                    {/*        <ItemList*/}
                    {/*            onItemSelected={this.onItemSelected}*/}
                    {/*            getData={this.gotService.getAllHouses}*/}
                    {/*            renderItem={(item) => item.name}/>*/}
                    {/*    </Col>*/}

                    {/*    <Col md='6'>*/}
                    {/*        <CharDetails charId={this.state.selectedChar} />*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </Container>
            </>
        );
    }

};
