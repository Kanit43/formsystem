import React from "react";

const Form3 = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3">คำร้องขอลาพักการศึกษา/รักษาสถานภาพการเป็นนักศึกษา</h1>
        <hr className="mb=3"></hr>
      </div>
      <form>
        <div className=" row g-3">

        <div className=" col-12">
            <label className=" form-label">วันที่: </label>
            <input type="date" name="date" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">คณะ: </label>
            <input type="text" name="group" className="form-control" />
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
            <label className=" form-label">ระดับการศึกษา: </label>
            <input type="text" name="group1" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">คณะ:</label>
            <input type="text" name="major" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">สาขาวิชา:</label>
            <input type="text" name="major" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">เกรดเฉลี่ยสะสม:</label>
            <input type="text" name="grade" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">ชั้นปีที่:</label>
            <input type="text" name="year class" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">ระยะเวลาการศึกษา:</label>
            <input type="text" name="timestudy" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">วันเกิด:</label>
            <input type="text" name="birth" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">ภาค:</label>
            <input type="text" name="number" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">ความประสงค์:</label>
            <input type="text" name="wish" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">ในภาคการศึกษา:</label>
            <input type="text" name="inteam" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">ปีการศึกษา:</label>
            <input type="text" name="year" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">ครั้งที่:</label>
            <input type="text" name="round" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">เนื่องจาก:</label>
            <input type="text" name="notic" className="form-control" />
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

export default Form3;