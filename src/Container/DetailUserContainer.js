import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponents from '../components/BackComponents'
import { connect } from "react-redux";
import { getUserDetail } from '../action/userAction';
import DetailUserComponents from '../components/DetailUserComponents';


class DetailUserContainer extends Component {
    componentDidMount(){
        this.props.dispatch(getUserDetail(this.props.match.params.id));
    }

    render() {
        return (
            <Container>
                <BackComponents/>
                <h1>Detail User</h1>
                <DetailUserComponents />
            </Container>
        )
    }
}

export default connect()(DetailUserContainer);