import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { getUsersList } from '../action/userAction';

class HomeContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getUsersList())        
    }

    render() {
        return (
            
                <Container>
                    <h1>Selamat Datang</h1>
                </Container>
        )
    }
}

export default connect()(HomeContainer);