import React from 'react'
import { connect } from "react-redux";
import { Table } from 'reactstrap';

const mapStateToProps = (state) => {
    return {
        getUserDetail: state.users.getUserDetail,
        errorUserDetail: state.users.errorUserDetail
    }
}

const DetailUserComponents = (props) => {
    return (
        <Table>
            <tbody>
                <tr>
                    <th>{props.getUserDetail.id_mahasiswa}</th>
                    <th>{props.getUserDetail.nama}</th>
                    <th>{props.getUserDetail.jurusan}</th>                    
                </tr>
            </tbody>
        </Table>
    )
}

export default connect(mapStateToProps, null) (DetailUserComponents);