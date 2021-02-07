import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const columns = [{
  dataField: 'id',
  text: 'ID', 
  headerStyle: () => {
      return { width: "5%" };
  },
}, {
  dataField: 'nama',
  text: 'Name'
}, {
  dataField: 'alamat',
  text: 'Alamat'
}, {
    dataField: 'no_hp',
    text: 'No_Hp',
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

export const TableComponents = (props) => {
    return (
        <div>
            <Container>
                <BootstrapTable keyField='id' data={ props.users } columns={ columns } />            
            </Container>
        </div>
    )
}