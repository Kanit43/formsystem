import React from "react";
import { Link } from 'react-router-dom'

const Form1 = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3">คำร้องขอเปิดรายวิชาคณะเกษตรศาสตร์และเทคโนโลยี</h1>
        <hr className="mb=3"></hr>
      </div>
      <form>
        <div className=" row g-3">
        <div className=" col-12">
            <label className=" form-label">วันที่: </label>
            <input type="date" name="date" className="form-control" />
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
            <label className=" form-label">โปรแกรมวิชา:</label>
            <input type="text" name="major" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">กลุ่มเรียน:</label>
            <input type="text" name="class" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">ความประสงค์ขอเปิดรายวิชา รหัสวิชา:</label>
            <input type="text" name="wish" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">ชื่อวิชา:</label>
            <input type="text" name="namesub" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">ภาคเรียนที่:</label>
            <input type="text" name="term" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">เหตุผลที่ขอเปิดรายวิชา:</label>
            <input type="text" name="reason" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">ผู้ร่วมขอเปิด:</label>
            <input type="text" name="study" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">โดยขออนุญาตให้:</label>
            <input type="text" name="study" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">คาบทฤษฎี:</label>
            <input type="text" name="theory" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">คาบทฤษฎี:</label>
            <input type="text" name="carry" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">ห้องเรียน:</label>
            <input type="text" name="class" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">เบอร์โทร:</label>
            <input type="text" name="number" className="form-control" />
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

export default Form1;