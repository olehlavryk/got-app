import React, {Component} from 'react';
import ItemList from '../../itemList';
import ErrorMessage from "../../errorMessage";
import gotService from "../../../services/GotService";
import {withRouter} from "react-router-dom";

class booksPage extends Component {

    gotService = new gotService();

    state = {
        error: false
    };


    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    };

    render() {
        if(this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <ItemList
                getData={this.gotService.getAllBooks}
                onItemSelected={(itemId) => {
                    this.props.history.push(`/books/${itemId}`);
                }}
                renderItem={ (item) => item.name }/>
        );
    }
}

export default  withRouter(booksPage);