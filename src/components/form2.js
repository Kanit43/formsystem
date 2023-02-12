import React from "react";

const File2 = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3">แบบฟอร์มคำร้องทั่วไป</h1>
        <hr className="mb=3"></hr>
      </div>
      <form>
        <div className=" row g-3">
        <div className=" col-12">
            <label className=" form-label">เขียนที่: </label>
            <input type="date" name="date" className="form-control" />
          </div>

        <div className=" col-12">
            <label className=" form-label">วันที่: </label>
            <input type="date" name="date" className="form-control" />
          </div>

          <div className=" col-12">
            <label className=" form-label">เรื่อง: </label>
            <input type="text" name="header" className="form-control" />
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
            <label className=" form-label">สาขาวิชา:</label>
            <input type="text" name="major" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">ชั้นปีที่:</label>
            <input type="text" name="year class" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">ระดับ:</label>
            <input type="text" name="level" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">ความประสงค์:</label>
            <input type="text" name="wish" className="form-control" />
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

export default File2;