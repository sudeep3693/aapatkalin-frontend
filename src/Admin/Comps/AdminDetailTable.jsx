import { Container, Row, Table, Col } from "react-bootstrap";
import "../../App.css";
import tableHeadings from "../../Resources/English/translation.json";
import { useEffect, useState } from "react";

function UnupdatedRecordTable({ data = [] }) {
  console.log(data);

  return (
    <div>
      <Container fluid>
        <Row className="mt-5">
          <Col md={10} sm className="offset-md-1 mt-5">
            <Table responsive bordered hover>
              <thead>
                <tr>
                  <th>{tableHeadings?.fields?.name?.title || "Name"}</th>
                  <th>{tableHeadings?.fields?.number?.title || "Number"}</th>
                  <th>{tableHeadings?.fields?.category?.title || "Category"}</th>
                  <th>{tableHeadings?.fields?.district?.title || "District"}</th>
                  <th>Actions</th> {/* ✅ Added missing column header */}
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((d, index) => (
                    <tr key={index}>
                      <td>{d?.name || "N/A"}</td>
                      <td>{d?.number || "N/A"}</td>
                      <td>{d?.category || "N/A"}</td>
                      <td>{d?.district || "N/A"}</td>
                      <td>
                        <div className="manageAdminButtons">
                          <button>Edit</button>
                          <button>Delete</button>
                          <button>Commit</button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-danger">
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

export default UnupdatedRecordTable;
