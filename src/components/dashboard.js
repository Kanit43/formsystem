import React, { useContext, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useFormStore } from "../store";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { download } from "../feature/form/services/modify-doc";

const Dashboard = () => {
  const { user, roleUser } = useContext(AuthContext);
  const form = useFormStore(state => state.form)
  const formFetch = useFormStore(state => state.fetch)

  useEffect(() => {
    if (form.length == 0) formFetch()
  }, [])

  const downloadForm = async (form, name) => {
    const formRef = ref(storage, form)
    const formUrl = await getDownloadURL(formRef)
    const pdfBytes = await fetch(formUrl).then((res) =>
    res.arrayBuffer()
    );
    download(pdfBytes, name + ".pdf")
  }

  const formList = [];
  // for (let i = 1; i <= 8; i++) {
  //   formList.push(
  //     <div key={"form" + i} className="col-sm-2">
  //       <Link className="btn btn-outline-primary" to={"/form/" + i}>
  //         Form{i}
  //       </Link>
  //     </div>
  //   );
  // }

  return (
    <Container>
      <div className="h4 mt-3">รายการฟอร์ม</div>
      <Table responsive>
        <thead>
          <tr>
            <th>Form</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {form.map(v => {
            return v.active && <tr key={v.id}>
              <td>{v.name}</td>
              <td>{v.json != ""  && <Button type="button" variant="primary" size="sm" className="me-2" as={Link} to={"/form/" + v.code}>สร้างฟอร์ม</Button>}
              <Button type="button" variant="secondary" size="sm" onClick={() => downloadForm(v.form, v.name)}>ดาวน์โหลด</Button></td>
            </tr>
          })}
        </tbody>
      </Table>
      </Container>
  );
};

export default Dashboard;
