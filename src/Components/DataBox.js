import React from "react";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";


export default function DataBox(props) {
  const { data } = props;
console.log('data in Databox', data[0].date)
  return (
    <div>
      <div id="btn">
        <button class="btn" onClick={() => props.sortBy()} >
          Sort
        </button>
      </div>
      {data.map(dataObj => (
        <div>
          <Accordion defaultActiveKey="1">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                {dataObj.id}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <br />
                  <h5>Type:</h5> {dataObj.type} <br /> <br />
                  <h2>Address: </h2>
                  Street: {dataObj.address.street} <br />
                  Postal Code: {dataObj.address.postalCode}
                  <br />
                  City: {dataObj.address.city} <br />
                  Province: {dataObj.address.province} <br />
                  Country: {dataObj.address.country} <br /> <br />
                  <h5>Date: </h5>
                  {dataObj.date} <br /> <br />
                  <h5>Weight: </h5>
                  {dataObj.weight} <br /> <br />
                  <h5>Schedules:</h5>
                  {dataObj.schedules} <br /> <br />
                  Comments: {dataObj.comments} <br />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      ))}
    </div>
  );
}



