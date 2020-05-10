import React, {Component} from 'react';
import gotService from "../../../services/GotService";
import ItemDetails, {Field} from './../../itemDetails';

export default class BooksItem extends Component {
    gotService = new gotService();

    render() {
        return (
            <ItemDetails itemId={this.props.bookId} getData={this.gotService.getBook}>
                <Field field='name' label='Book name'/>
                <Field field='numberOfPages' label='Pages'/>
                <Field field='publisher' label='Publisher'/>
            </ItemDetails>
        );
    }
}
