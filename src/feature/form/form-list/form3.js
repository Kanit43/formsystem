import React from "react";
import { useForm } from "react-hook-form";
import modifyDoc from "../services/modify-doc";

const Form3 = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      modifyDoc(3, data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3">คำร้องขอลาพักการศึกษา/รักษาสถานภาพการเป็นนักศึกษา</h1>
        <hr className="mb=3"></hr>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" row g-3">
        <div className=" col-12">
            <label className=" form-label">วันที่: </label>
            <input type="date" name="date" className="form-control" {...register("date")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">เรียน คณบดี คณะ: </label>
            <input type="text" name="group" className="form-control"{...register("group")} />
          </div>

         <div className=" col-12">
            <label className=" form-label">คำนำหน้า: </label>
            <input type="text" name="title" className="form-control" {...register("title")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ชื่อและนามสกุล: </label>
            <input type="text" name="name" className="form-control"{...register("name")} />
          </div>
          <div className=" col-12">
            <label className=" form-label">หรัสนักศึกษา:</label>
            <input type="text" name="idcard" className="form-control" {...register("idcard")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ระดับการศึกษา: </label>
            <input type="text" name="group1" className="form-control" {...register("group1")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">คณะ:</label>
            <input type="text" name="major" className="form-control" {...register("major")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">สาขาวิชา:</label>
            <input type="text" name="major1" className="form-control" {...register("major1")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">เกรดเฉลี่ยสะสม:</label>
            <input type="text" name="grade" className="form-control" {...register("grade")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ชั้นปีที่:</label>
            <input type="text" name="yearclass" className="form-control" {...register("yearclass")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ระยะเวลาการศึกษา:</label>
            <input type="text" name="timestudy" className="form-control" {...register("timestudy")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">วันเกิด:</label>
            <input type="date" name="birth" className="form-control" {...register("birth")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ภาค:</label>
            <input type="text" name="number" className="form-control" {...register("number")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ความประสงค์:</label>
            <input type="text" name="wish" className="form-control" {...register("wish")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ในภาคการศึกษา:</label>
            <input type="text" name="inteam" className="form-control" {...register("inteam")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ปีการศึกษา:</label>
            <input type="text" name="year" className="form-control"{...register("year")} />
          </div>

          <div className=" col-12">
            <label className=" form-label">ครั้งที่:</label>
            <input type="text" name="round" className="form-control" {...register("round")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">เนื่องจาก:</label>
            <input type="text" name="notic" className="form-control" {...register("notic")}/>
          </div>
          <h2 className="mt-3">สำหรับติดต่อนักศึกษา</h2>
        </div>
        <div>
        <div className=" col-12">
            <label className=" form-label">เบอร์โทรศัพ:</label>
            <input type="text" name="number1" className="form-control" {...register("number1")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">Email:</label>
            <input type="text" name="email" className="form-control" {...register("email")}/>
          </div>
       
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