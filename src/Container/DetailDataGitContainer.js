import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponents from '../components/BackComponents'
import { connect } from "react-redux";
import { getDataGitDetail } from '../action/datagitAction';
import DetailDataGitComponents from '../components/DetailDataGitComponents'

class DetailDataGitContainer extends Component {
    componentDidMount(){
        this.props.dispatch(getDataGitDetail(this.props.match.params.id));
    }

    render() {
        return (
            <Container>
                <BackComponents/>
                <h1>Detail User</h1>
                <DetailDataGitComponents />
            </Container>
        )
    }
}

export default connect()(DetailDataGitContainer);