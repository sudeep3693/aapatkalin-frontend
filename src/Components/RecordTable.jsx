import { Container, Row, Table, Col } from "react-bootstrap";
import "../App.css";
import { useEffect, useState } from "react";

function RecordTable({ data = [], searchBy, databylang, locationwise = [], lStatus, setOpenDetailModal, selecteddata }) {
  const [printText, setPrintText] = useState("");
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    console.log("📢 Updating table data...");
    setNewData(lStatus && locationwise.length > 0 ? locationwise : data);
  }, [data, locationwise, lStatus]);

  useEffect(() => {
    if (!searchBy) {
      setPrintText(databylang?.table_header?.based_on_location || "Based on Location");
    } else {
      setPrintText(
        searchBy === "all"
          ? databylang?.table_header?.all_contacts || "All Contacts"
          : `${databylang?.table_header?.search || "Search"} '${searchBy}'`
      );
    }
  }, [databylang, searchBy]);

  const openModal = (selectedData) => {
    selecteddata(selectedData);
    setOpenDetailModal(true);
  };

  return (
    <div>
      <Container fluid>
        <Row className="mt-5">
          <Col md={10} sm className="offset-md-1 mt-5">
            <h4>{printText}</h4>
            <Table responsive bordered hover>
              <thead>
                <tr>
                  <th>{databylang?.fields?.name?.title || "Name"}</th>
                  <th>{databylang?.fields?.number?.title || "Number"}</th>
                  <th>{databylang?.fields?.category?.title || "Category"}</th>
                  <th>{databylang?.fields?.district?.title || "District"}</th>
                </tr>
              </thead>
              <tbody>
                {newData.length > 0 ? (
                  newData.map((d, index) => (
                    <tr key={index} onClick={() => openModal(d)}>
                      <td>{d?.name || "N/A"}</td>
                      <td>{d?.number || "N/A"}</td>
                      <td>{d?.category || "N/A"}</td>
                      <td>{d?.district || "N/A"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center text-danger">
                      ❌ No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RecordTable;
