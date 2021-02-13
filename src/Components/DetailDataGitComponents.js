import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'

const mapStateToProps = (state) => {
    return {
        getDataGitDetail: state.datagit.getDataGitDetail,
        errorDataGitDetail: state.datagit.errorDataGitDetail,
    }
}

const DetailDataGitComponents = (props) => {
    return (
        <Table striped>
          <tbody>
          <tr>
            <td width="200">Nama</td>
            <td width="10">:</td>
            <td>{props.getDataGitDetail.nama}</td>  
          </tr>
          <tr>
            <td width="200">Alamat</td>
            <td width="10">:</td>
            <td>{props.getDataGitDetail.alamat}</td>  
          </tr>
          <tr>
            <td width="200">Umur</td>
            <td width="10">:</td>
            <td>{props.getDataGitDetail.umur}</td>  
          </tr>
          <tr>
            <td width="200">No HP</td>
            <td width="10">:</td>
            <td>{props.getDataGitDetail.nohp}</td>  
          </tr>
          </tbody>
        </Table>
    )
}

export default connect(mapStateToProps, null)(DetailDataGitComponents)