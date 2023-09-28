import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import data from'./data.json';
import Cardcomp from './card';

import { useState } from 'react';

function Main() {

  let[items, setItems]= useState(data); 

  function handleSubmit(event) {

    event.preventDefault();
    

    let searchedValue = event.target.search.value;

    let filteredValue = data.filter(function(item) { return item.title.toLowerCase().includes(searchedValue.toLowerCase())})
    setItems(filteredValue);
};
  return (
    <>
    <Form className="d-flex" onSubmit={handleSubmit} id='myform'>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="search"
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>

    
    <div id='container' style={{display:"flex" ,justifyContent:"start",gap:"2%",marginTop:"2%"}}>
    {items.map(function(item){

        return(
            <Cardcomp image={item.image_url} title={item.title} description={item.description} />
        )
    }
    
    )

    }
    </div>
    </>
  );
}

export default Main;