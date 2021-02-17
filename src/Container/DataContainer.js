import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUsersList } from '../action/userAction';
import  TableComponents from '../components/TableComponent';

class DataContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getUsersList())        
    }

    render() {
        return (
            <div>
                <TableComponents />
            </div>
        )
    }
}

export default connect()(DataContainer);