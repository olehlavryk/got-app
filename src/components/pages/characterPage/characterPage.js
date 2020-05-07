import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from "../../itemDetails";
import ErrorMessage from "../../errorMessage";
import gotService from "../../../services/GotService";
import RowBlock from "../../rowBlock"

export default class characterPage extends Component {

    gotService = new gotService();

    state = {
        selectedChar: 130,
        error: false,
    };

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    };

    render() {
        if(this.state.error) {
            return <ErrorMessage errorMessages={this.state.errorMessages} />
        }

        const itemList = (
            <ItemList
                getData={this.gotService.getAllCharacters}
                onItemSelected={this.onItemSelected}
                renderItem={({name, gender}) => `${name} (${gender})`}/>
        );

        const charDetails = (
            <ItemDetails itemId={this.state.selectedChar} getData={this.gotService.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        );

        return (
            <RowBlock left={itemList} right={charDetails} />
        );
    }
}