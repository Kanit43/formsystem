import React from "react";
import { useForm } from "react-hook-form";
import modifyDoc from "../services/modify-doc";

const Form1 = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      modifyDoc(1, data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3">แบบฟอร์มคำร้องทั่วไป</h1>
        <hr className="mb=3"></hr>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" row g-3">
          <div className=" col-12">
            <label className=" form-label">วันที่: </label>
            <input type="date" name="date" className="form-control" {...register("date")} />
          </div>
          <div className=" col-12">
            <label className=" form-label">เรื่อง: </label>
            <input type="text" name="header" className="form-control" {...register("subject")} />
          </div>
          <div className=" col-12">
            <label className=" form-label">คำนำหน้า: </label>
            <input type="text" name="title" className="form-control" {...register("prefix")} />
          </div>
          <div className=" col-12">
            <label className=" form-label">ชื่อและนามสกุล: </label>
            <input type="text" name="name" className="form-control" {...register("name")} />
          </div>
          <div className=" col-12">
            <label className=" form-label">หรัสนักศึกษา:</label>
            <input type="text" name="idcard" className="form-control" {...register("student")} />
          </div>
          <div className=" col-12">
            <label className=" form-label">ระดับ:</label>
            <input type="text" name="level" className="form-control" {...register("grade")} />
          </div>
          <div className=" col-12">
            <label className=" form-label">โปรแกรมวิชา:</label>
            <input type="text" name="major" className="form-control" {...register("program")} />
          </div>
          <div className=" col-12">
            <label className=" form-label">ห้อง:</label>
            <input type="text" name="class" className="form-control" {...register("room")} />
          </div>
          <div className=" col-12">
            <label className=" form-label">ความประสงค์:</label>
            <input type="text" name="wish" className="form-control"  {...register("purpose")}/>
          </div>
        </div>
        <div></div>
        <button type="submit" name="enter" className="btn btn-primary mt-3">
          Save
        </button>
      </form>
    </div>
  );
};

export default Form1;
