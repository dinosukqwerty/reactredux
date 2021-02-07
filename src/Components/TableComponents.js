import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

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
               <Button color="dark" className="mr-2">
                   <FontAwesomeIcon icon={faInfo} /> Detail
               </Button>
               
               <Button color="dark" className="mr-2">
                   <FontAwesomeIcon icon={faEdit}/> Edit
               </Button>

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
    order: 'asc'
  }];

export const TableComponents = (props) => {
    return (
        <div>
            <Container>
                <ToolkitProvider
                    bootstrap4 keyField='id' 
                    data={ props.users } 
                    columns={ columns }  
                    defaultSorted={ defaultSorted }
                    search
                >
                    {
                        props => (
                        <div>
                            <div className="float-right">
                                <SearchBar { ...props.searchProps } placeholder="Cari..."/>
                            </div>
                            
                            <BootstrapTable { ...props.baseProps } pagination={ paginationFactory() }
/>
                        </div>
                        )
                    }
                    </ToolkitProvider>            
            </Container>
        </div>
    )
}
