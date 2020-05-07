import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from "../../itemDetails";
import ErrorMessage from "../../errorMessage";
import gotService from "../../../services/GotService";
import RowBlock from "../../rowBlock"

export default class housesPage extends Component {

    gotService = new gotService();

    state = {
        selectedHouse: 10,
        error: false
    };

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
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
                getData={this.gotService.getAllHouses}
                onItemSelected={this.onItemSelected}
                renderItem={ (item) => item.name }/>
        );

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedHouse} getData={this.gotService.getHouse}>
                <Field field='name' label='Book name'/>
                <Field field='region' label='Region'/>
                <Field field='titles' label='Titles'/>
                <Field field='words' label='Words'/>
            </ItemDetails>
        );

        return (
            <RowBlock left={itemList} right={itemDetails} />
        );
    }
}