import React from "react";
import { useLocation, Link, useOutletContext } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Container } from "react-bootstrap";

const Dashboard = () => {
  const { user, roleUser } = useOutletContext();
  const location = useLocation();
  
  const formList = [];
  for (let i = 1; i <= 8; i++) {
    formList.push(
      <div key={"form" + i} className="col-sm-2">
        <Link className="btn btn-outline-primary" to={"/form/" + i}>
          Form{i}
        </Link>
      </div>
    );
  }

  console.log(roleUser)

  return (
    <Container>
      <div className="container mt-5"></div>
      <h1>Welcome {user.email}</h1>
      <p>this is the dashboard, if you can see this you're logged in.</p>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div><a href="https://forms.gle/YfgR1ebF5Vn9dGvV8">แบบประเมินความพึงพอใจ</a></div>
     <div> <font color="red"> *หมายเหตุ </font></div>
      <div><font color="red"> form1 หมายถึง คำร้องทั่วไป เรียนคณบดี </font></div>
      <div></div><font color="red"> form2 หมายถึง คำร้องทั่วไป เรียนรองอธิการบดี </font>
      <div></div><font color="red"> form3 หมายถึง คำร้องขอลาพักการศึกษา-รักษาสถานภาพนักศึกษา </font>
      <div></div><font color="red"> form4 หมายถึง คำร้องขอผ่อนผันค่าใช้จ่ายทางการศึกษา 65 </font>
      <div></div><font color="red"> form5 หมายถึง คำร้องขอเปลี่ยนค่าใช้จ่าย </font>
      <div></div><font color="red"> form6 หมายถึง คำร้องขอลงทะเบียนเรียนล่าช้า </font>
      <div></div> <font color="red"> form7 หมายถึง บันทึกแจ้งเปลี่ยนคะแนน I </font>
      <div></div><font color="red"> form8 หมายถึง คำร้องขอเปิดรายวิชา </font>
      < font color="red">1.</font>
      <div className="row g-3 my-3">{formList}</div>
      </Container>
  );
};

export default Dashboard;
