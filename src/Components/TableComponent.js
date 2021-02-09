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
  text: 'Name',
  sort: true
}, {
  dataField: 'alamat',
  text: 'Alamat',
  sort: true
}, {
    dataField: 'no_hp',
    text: 'No_Hp',
    sort: true,
    headerStyle: () => {
        return { width: "10%" };
    },
},
{
   dataField: "Link",
   text: "Action",
   formatter: (rowContent, row) => {
       return (
           <div>
               <Link to={"detail/"+row.id}>
                <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faInfo} /> Detail
                </Button>
               </Link>

               <Link to={"edit/"+row.id}>               
               <Button color="dark" className="mr-2">
                   <FontAwesomeIcon icon={faEdit}/> Edit
               </Button>
               </Link>

               <Button color="dark" className="mr-2">
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
        getUsersList: state.users.getUsersList,
        errorUsersList: state.users.errorUsersList
    }
}

export const TableComponents = (props) => {
    return (
        <div>
            <Container>
                { props.getUsersList ? 
                <ToolkitProvider
                    bootstrap4 keyField='id' 
                    data={ props.getUsersList } 
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
                    </ToolkitProvider> : <div className="text-center"><Spinner color="primary"/></div>
                    
                    }       
            </Container>
        </div>
    )
}

export default connect(mapStateToProps, null)(TableComponents);