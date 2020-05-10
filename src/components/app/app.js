import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import styled from 'styled-components';
import ErrorMessage from "../errorMessage";
import CharacterPage from "../pages/characterPage";
import BooksPage from "../pages/booksPage";
import HousesPage from "../pages/housesPage";
import BooksItem from "../pages/booksItem";
import NotFoundPage from "../pages/notFoundPage";
import HomePage from "../pages/homePage";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

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
        toggleRandomChar: true,
        error: false,
        selectedChar: 130,
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

        if(this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Router>
                <div className="app">
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Route path='/' exact component={HomePage}/>
                        <Route path='/characters' exact component={CharacterPage}/>
                        <Route path='/houses' exact component={HousesPage}/>
                        <Route path='/books' exact component={BooksPage}/>
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                                return <BooksItem bookId={id}/>
                            }
                        }/>
                        <Route path="/404" component={NotFoundPage} />
                        <Redirect to="/404" />
                    </Container>
                </div>
            </Router>

        );
    }

};
