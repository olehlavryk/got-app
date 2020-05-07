import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from "../../itemDetails";
import ErrorMessage from "../../errorMessage";
import gotService from "../../../services/GotService";
import RowBlock from "../../rowBlock"

export default class booksPage extends Component {

    gotService = new gotService();

    state = {
        selectedBook: 1,
        error: false
    };

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
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

        const itemList = (
            <ItemList
                getData={this.gotService.getAllBooks}
                onItemSelected={this.onItemSelected}
                renderItem={ (item) => item.name }/>
        );

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedBook} getData={this.gotService.getBook}>
                <Field field='name' label='Book name'/>
                <Field field='numberOfPages' label='Pages'/>
                <Field field='publisher' label='Publisher'/>
            </ItemDetails>
        );

        return (
            <RowBlock left={itemList} right={itemDetails} />
        );
    }
}