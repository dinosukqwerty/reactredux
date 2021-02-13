import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDataGitList } from '../action/datagitAction';
import TableGitComponents from '../components/TableGitComponents';

class DataGitContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getDataGitList())        
    }

    render() {
        return (
            <div>
                <TableGitComponents />
            </div>
        )
    }
}

export default connect()(DataGitContainer);