import React, { Component } from 'react';
import AutoSelect from "../autoselect";
import GetCargoDetails  from '../../services/GetCargoDetails';

const Arrays = (data, fieldName, fieldValue) => {
    let arrayItem = [];
    if (data && Array.isArray(data)) {
        data.map((item, key) => {
            arrayItem.push({ label: item[fieldName], value: item[fieldValue] });
            return null;
        });
    }
    return arrayItem;
};

export default class CargoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getList:{}, selectLocation: ''
        }
    }

    async componentDidMount() {
        this.getCargo();
        this.setState({ selectLocation: this.props.descricao })       
    }
    async getCargo() {
        let list = await GetCargoDetails.getCargoList();
        this.setState({ getList: list.data })
    }

    handleSelectChange = (name, selected) => {
        if (name === "supplier_id") {
            this.setState({
                list: {
                    ...this.state.list,
                    [name]: selected.value,
                },
                selectLocation: selected,
            });
            this.props.onSelectCategory(selected.value)
            this.setState({ changed: true });                         
        }
    };

    render() {
        const { getList, selectLocation } = this.state;
        return (
            <div>
                <AutoSelect
                    className="basic-single"
                    value={selectLocation}
                    default={selectLocation}
                    onChange={this.handleSelectChange}
                    isSearchable={true}
                    name="supplier_id"
                    options={Arrays(getList, "descricao", "id")}
                />
            </div>


        )
    }
}
