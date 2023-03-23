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
      <div> <font color="red"> *หมายเหตุ </font></div>
      <div><font color="red"> form1 หมายถึง คำร้องทั่วไป เรียนคณบดี </font></div>
      <div></div><font color="red"> form2 หมายถึง คำร้องทั่วไป เรียนรองอธิการบดี </font>
      <div></div><font color="red"> form3 หมายถึง คำร้องขอลาพักการศึกษา-รักษาสถานภาพนักศึกษา </font>
      <div></div><font color="red"> form4 หมายถึง คำร้องขอผ่อนผันค่าใช้จ่ายทางการศึกษา 65 </font>
      <div></div><font color="red"> form5 หมายถึง คำร้องขอเปลี่ยนค่าใช้จ่าย </font>
      <div></div><font color="red"> form6 หมายถึง คำร้องขอลงทะเบียนเรียนล่าช้า </font>
      <div></div> <font color="red"> form7 หมายถึง บันทึกแจ้งเปลี่ยนคะแนน I </font>
      <div></div><font color="red"> form8 หมายถึง คำร้องขอเปิดรายวิชา </font>
      <div><a href="https://forms.gle/YfgR1ebF5Vn9dGvV8">แบบประเมินความพึงพอใจ</a></div>
      </Container>
  );
};

export default Dashboard;
