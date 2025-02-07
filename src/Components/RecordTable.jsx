import { Container, Row, Table, Col } from "react-bootstrap";

import "../App.css";
import { useEffect, useState } from "react";



function ReactTable({data, searchBy, databylang}){
const [printText,setPrintText] = useState("")

useEffect(()=>{
  if(searchBy==="" || searchBy==="all"){
    setPrintText(databylang?.table_header?.all_contacts);
  }
  else{
    if(searchBy==="location"){
      setPrintText(databylang?.table_header?.based_on_location );
    }
    else{
      var a = databylang?.table_header?.search + ` '${searchBy}'` ;
      setPrintText(a);
    }

  }
},[databylang, searchBy])
 
return(

    <div>


    <Container fluid>

    <Row className="mt-5">

        <Col md={10} sm className="offset-md-1 mt-5">
        <h4>{printText}</h4>
        <Table responsive>
            
      <thead>
        <tr>
          
         
            <th>{databylang.fields?.name?.title}</th>
            <th>{databylang.fields?.number?.title}</th>
            <th>{databylang.fields?.category?.title}</th>
            <th>{databylang.fields?.district?.title}</th>
         
        </tr>
      </thead>
      <tbody>
        
      {data.map((d, index) => (
            <tr key={index}>
        <td>{d.name}</td>
        <td>{d.number}</td>
        <td>{d.category}</td>
        <td>{d.district}</td>
        </tr>   
            
        ))}
          
        
     
      </tbody>
    </Table>
        </Col>
    </Row>


    </Container>
       
    </div>

)


}

export default ReactTable;