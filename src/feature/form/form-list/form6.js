import React from "react";
import { useForm } from "react-hook-form";
import modifyDoc from "../services/modify-doc";

const Form6 = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      modifyDoc(6, data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3">คำร้องขอเปิดรายวิชา</h1>
        <hr className="mb=3"></hr>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" row g-3">
        <div className=" col-12">
            <label className=" form-label">วันที่: </label>
            <input type="date" name="date" className="form-control" {...register("date")}/>
          </div>

    

          <div className=" col-12">
          <label className=" form-label">คำนำหน้า: </label>
            <select className="form-select" placeholder="โปรดเลือกคำนำหน้า" name="title" {...register("title")}>
              <option value="mr.">นาย</option>
              <option value="ms.">นาง</option>
              <option value="miss">นางสาว</option>
            </select>
          </div>

          <div className=" col-12">
            <label className=" form-label">ชื่อและนามสกุล: </label>
            <input type="text" name="name" className="form-control" {...register("name")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">รหัสนักศึกษา:</label>
            <input type="text" name="idcard" className="form-control" {...register("idcard")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ระดับ:</label>
            <input type="text" name="level" className="form-control" {...register("level")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">โปรแกรมวิชา:</label>
            <input type="text" name="group" className="form-control" {...register("group")}/>
          </div>
        
          <div className=" col-12">
            <label className=" form-label">กลุ่มเรียน:</label>
            <input type="text" name="groupstudy" className="form-control" {...register("groupstudy")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ภาคการศึกษาที่:</label>
            <input type="text" name="term" className="form-control" {...register("term")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ปีการศึกษา:</label>
            <input type="text" name="pt" className="form-control" {...register("pt")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">เนื่องจาก:</label>
            <textarea type="text" name="other" className="form-control" {...register("purpose")}/>
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

export default Form6;