import React, { Component } from 'react'
import { TableComponents } from '../Components/TableComponents'

export default class HomeContainer extends Component {
    render() {
        return (
            <div>
                <TableComponents users={this.props.users}/>
            </div>
        )
    }
}
