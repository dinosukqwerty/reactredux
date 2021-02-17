import React from 'react';
import { Toast, ToastBody, Row, Col, ToastHeader, Container } from 'reactstrap';

const RepositoriContainer = (props) => {
  return (

    <Container>
      <Row>
        <Col xs="12">
          <div className="p-3 bg-primary my-2 rounded">
            <Toast>
            <ToastHeader>
              API Git : 
            </ToastHeader>
            <ToastBody>
            http://my-json-server.typicode.com/dinosukqwerty/dataapiredux/data/
            </ToastBody>
            <ToastHeader>
              Repositori API Git: 
            </ToastHeader>
            <ToastBody>
            https://github.com/dinosukqwerty/dataapiredux
            </ToastBody>
            </Toast>
          </div>
        </Col>

        <Col xs="12">
          <div className="p-3 bg-danger my-2 rounded">
          <Toast>
            <ToastHeader>
              API appresapi
            </ToastHeader>
            <ToastBody>
            http://localhost:3001/tampil 
            </ToastBody>
            <ToastHeader>
              Repositori API appresapi
            </ToastHeader>
            <ToastBody>
            https://github.com/dinosukqwerty/apprestapi            
            </ToastBody>
          </Toast>
          </div>          
        </Col>

        <Col xs="12">
          <div className="p-3 bg-warning my-2 rounded">
          <Toast>
            <ToastHeader>
              Repositori Project 
            </ToastHeader>
            <ToastBody>
            https://github.com/dinosukqwerty/reactredux
            </ToastBody>
          </Toast>
          </div>          
        </Col>
      </Row>
    </Container>
      
  );

}

export default RepositoriContainer;