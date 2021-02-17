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
            <td width="200">NIM</td>
            <td width="10">:</td>
            <td>{props.getUserDetail.nim}</td>  
          </tr>
          <tr>
            <td width="200">NAMA</td>
            <td width="10">:</td>
            <td>{props.getUserDetail.nama}</td>  
          </tr>
          <tr>
            <td width="200">JURUSAN</td>
            <td width="10">:</td>
            <td>{props.getUserDetail.jurusan}</td>  
          </tr>
          </tbody>
        </Table>
    )
}

export default connect(mapStateToProps, null) (DetailUserComponents);