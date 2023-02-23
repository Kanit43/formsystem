import React from "react";
import { useForm } from "react-hook-form";
import modifyDoc from "../services/modify-doc";

const Form4 = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      modifyDoc(4, data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3">ใบคำร้องขอผ่อนผันค่าใช้จ่ายทางการศึกษา</h1>
        <hr className="mb=3"></hr>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" row g-3">
        <div className=" col-12">
            <label className=" form-label">วันที่: </label>
            <input type="date" name="date" className="form-control" {...register("date")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">พ.ศ: </label>
            <input type="text" name="pt" className="form-control" {...register("pt")}/>
          </div>

         <div className=" col-12">
            <label className=" form-label">คำนำหน้า: </label>
            <input type="text" name="title" className="form-control" {...register("title")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ชื่อและนามสกุล: </label>
            <input type="text" name="name" className="form-control" {...register("name")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">หรัสนักศึกษา:</label>
            <input type="text" name="idcard" className="form-control" {...register("idcard")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ระดับ:</label>
            <input type="text" name="level" className="form-control" {...register("level")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">สาขาวิชา:</label>
            <input type="text" name="major" className="form-control" {...register("major")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ภาค:</label>
            <input type="text" name="sector" className="form-control" {...register("sector")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ความประสงค์ขอผ่อนผันค่าใช้จ่ายทางการศึกษา ตามเลขที่ใบเสร็จ:</label>
            <input type="text" name="bill" className="form-control" {...register("bill")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ค่าบำรุงการศึกษาเหมาจ่าย จำนวน:</label>
            <input type="text" name="educationfee" className="form-control" {...register("educationfee")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">อื่นๆ:</label>
            <input type="text" name="other" className="form-control" {...register("other")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">รวมทั้งสิ้น:</label>
            <input type="text" name="average" className="form-control" {...register("average")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">จะชำระภายในวันที่:</label>
            <input type="text" name="average1" className="form-control" {...register("average1")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ลงนาม:</label>
            <input type="text" name="name2" className="form-control" {...register("name2")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">เบอร์:</label>
            <input type="text" name="number2" className="form-control" {...register("number2")}/>
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