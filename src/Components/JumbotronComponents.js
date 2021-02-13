import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const JumbotronComponents = (props) => {
  return (
    <div>
      <Container>
        <Jumbotron>
            <h1 className="display-3">{props.title}</h1>
            <p className="lead">Selamat Datang </p>
            <hr className="my-2" />
            <p></p>
            <p className="lead">
            <Button color="info"><FontAwesomeIcon icon={faCoffee} /></Button>
            </p>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default JumbotronComponents;