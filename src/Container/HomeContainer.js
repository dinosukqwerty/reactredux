import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { getUsersList } from '../action/userAction';
import CarouselComponents from '../components/CarouselComponents';

class HomeContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getUsersList())        
    }

    render() {
        return (

                <Container style={{backgroundColor: "#BED2F8"}}>
                    <CarouselComponents/>
                </Container>

        )
    }
}

export default connect()(HomeContainer);