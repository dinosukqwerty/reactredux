import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Row, Col, Spinner } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const { SearchBar } = Search;

const columns = [{
  dataField: 'id',
  text: 'ID', 
  sort: true,
  headerStyle: () => {
      return { width: "5%" };
  },
}, {
    dataField: 'nama',
    text: 'Nama',
    sort: true,
    headerStyle: () => {
        return { width: "10%" };
    },
}, {
    dataField: 'alamat',
    text: 'Alamat',
    sort: true,
}, {
    dataField: 'umur',
    text: 'Umur',
    sort: true,
    headerStyle: () => {
        return { width: "10%"};
    },
}, {
    dataField: 'nohp',
    text: 'No HP',
    sort: true,
    headerStyle: () => {
        return { width: "15%"};
    },    
},

{
   dataField: "Link",
   text: "Action",
   formatter: (rowContent, row) => {
       return (
           <div>
               <Link to={"detaildatagit/"+row.id}>
                <Button color="success" className="mr-2">
                    <FontAwesomeIcon icon={faInfo} /> Detail
                </Button>
               </Link>

               <Link to={"edit/"+row.id}>               
               <Button color="warning" className="mr-2">
                   <FontAwesomeIcon icon={faEdit}/> Edit
               </Button>
               </Link>

               <Button color="danger" className="mr-2">
                   <FontAwesomeIcon icon={faTrash}/> Delete
               </Button>
           </div>
       )
   }
}
];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc',
  }];

const mapStateToProps = (state) => {
    return {
        getDataGitList: state.datagit.getDataGitList,
        errorDataGitList: state.datagit.errorDataGitList
    }
}

export const TableGitComponents = (props) => {
    return (
        <div>
            <Container>
                { props.getDataGitList ? 
                <ToolkitProvider
                    bootstrap4 keyField='id' 
                    data={ props.getDataGitList } 
                    columns={ columns }  
                    defaultSorted={ defaultSorted }
                    search
                >
                    {(props) => (
                        <div>
                            <Row>
                                <Col>
                                <Link to={"/create"}>
                                    <Button color="dark" className="mr-2">
                                        <FontAwesomeIcon icon={faUserPlus} /> Create User
                                    </Button>
                                </Link>
                                </Col>
                                <Col>
                                    <div className="float-right">
                                        <SearchBar { ...props.searchProps } placeholder="Cari..."/>
                                    </div>
                                </Col>
                            </Row>
                            <BootstrapTable { ...props.baseProps } pagination={ paginationFactory() }/>
                        </div>
                        )
                    }
                    </ToolkitProvider> : <div className="text-center"> 
                    load <br/> GIT
                    <br/> "GIT"  <br/>
                    <Spinner color="primary"/></div>
                    
                    }       
            </Container>
        </div>
    )
}

export default connect(mapStateToProps, null)(TableGitComponents);