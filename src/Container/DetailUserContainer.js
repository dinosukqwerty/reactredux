import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponents from '../Components/BackComponents'

export default class DetailUserContainer extends Component {
    render() {
        return (
            <Container>
                <BackComponents/>
                <h1>Detail User</h1>
            </Container>
        )
    }
}
