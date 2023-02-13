import React from "react";
import { Link } from 'react-router-dom'

const Form5 = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3">ใบคำร้องขอเปลี่ยนค่าใช้จ่าย</h1>
        <hr className="mb=3"></hr>
      </div>
      <form>
        <div className=" row g-3">
        <div className=" col-12">
            <label className=" form-label">วันที่: </label>
            <input type="date" name="date" className="form-control" />
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
            <label className=" form-label">ระดับปริญญาตรีสาขา:</label>
            <input type="text" name="level" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">คณะ:</label>
            <input type="text" name="group" className="form-control" />
          </div>
        
          <div className=" col-12">
            <label className=" form-label">ใบเสร็จเลขที่:</label>
            <input type="text" name="wish" className="form-control" />
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

export default Form5;