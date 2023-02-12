import React from "react";
import { Link } from 'react-router-dom'

const Form4 = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3">ใบคำร้องขอผ่อนผันค่าใช้จ่ายทางการศึกษา</h1>
        <hr className="mb=3"></hr>
      </div>
      <form>
        <div className=" row g-3">
        <div className=" col-12">
            <label className=" form-label">วันที่: </label>
            <input type="date" name="date" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">พ.ศ: </label>
            <input type="text" name="pt" className="form-control" />
          </div>

         <div className=" col-12">
            <label className=" form-label">คำนำหน้า: </label>
            <input type="text" name="title" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">ชื่อและนามสกุล: </label>
            <input type="text" name="name" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">หรัสนักศึกษา:</label>
            <input type="text" name="idcard" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">ระดับ:</label>
            <input type="text" name="level" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">สาขาวิชา:</label>
            <input type="text" name="major" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">ภาค:</label>
            <input type="text" name="sector" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">ความประสงค์ขอผ่อนผันค่าใช้จ่ายทางการศึกษา ตามเลขที่ใบเสร็จ:</label>
            <input type="text" name="bill" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">ค่าบำรุงการศึกษาเหมาจ่าย จำนวน:</label>
            <input type="text" name="educationfee" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">อื่นๆ:</label>
            <input type="text" name="other" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">รวมทั้งสิ้น:</label>
            <input type="text" name="average" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">รวมทั้งสิ้น:</label>
            <input type="text" name="average" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">จะชำระภายในวันที่:</label>
            <input type="text" name="average" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">ลงนาม:</label>
            <input type="text" name="name2" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">เบอร์:</label>
            <input type="text" name="number2" className="form-control" />
          </div>

          
          
        </div>
        <div>
       
      </div>
        <button type="submit" name="enter" className="btn btn-primary mt-3">
          {" "}
          Save
          {" "}
        </button>
        
        
        
      </form>
    </div>
  );
};

export default Form4;