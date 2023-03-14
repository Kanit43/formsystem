import React from "react";
import { useForm } from "react-hook-form";
import modifyDoc from "../services/modify-doc";

const Form8 = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      modifyDoc(8, data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3">คำร้องขอเปิดรายวิชาคณะเกษตรศาสตร์และเทคโนโลยี</h1>
        <hr className="mb=3"></hr>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" row g-3">
        <div className=" col-12">
            <label className=" form-label">วันที่: </label>
            <input type="date" name="date" className="form-control" {...register("date")}/>
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
            <input type="text" name="major" className="form-control" {...register("major")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">กลุ่มเรียน:</label>
            <input type="text" name="class" className="form-control" {...register("class")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ความประสงค์ขอเปิดรายวิชา รหัสวิชา:</label>
            <input type="text" name="wish" className="form-control" {...register("wish")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ชื่อวิชา:</label>
            <input type="text" name="namesub" className="form-control" {...register("namesub")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ภาคเรียนที่:</label>
            <input type="text" name="term" className="form-control" {...register("term")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">เหตุผลที่ขอเปิดรายวิชา:</label>
            <input type="text" name="reason" className="form-control" {...register("reason")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ผู้ร่วมขอเปิด:</label>
            <input type="text" name="study" className="form-control" {...register("study")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">โดยขออนุญาตให้:</label>
            <input type="text" name="teacher" className="form-control" {...register("teacher")}/>
          </div>
          <h2 className="mt-3">คาบทฤษฎี</h2>
          <div className=" col-12">
            <label className=" form-label">วัน:</label>
            <input type="text" name="theory" className="form-control" {...register("theory")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">เวลา:</label>
            <input type="time" name="carry" className="form-control" {...register("carry")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ถึงเวลา:</label>
            <input type="time" name="class1" className="form-control" {...register("class1")}/>
          </div>
         
     <h2 className="mt-3">คาบปฏิบัติ</h2>
     <div className=" col-12">
            <label className=" form-label">วัน:</label>
            <input type="text" name="theory" className="form-control" {...register("theory1")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">เวลา:</label>
            <input type="time" name="carry" className="form-control" {...register("carry1")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ถึงเวลา:</label>
            <input type="time" name="class1" className="form-control" {...register("class2")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ห้องเรียน:</label>
            <input type="text" name="class3" className="form-control" {...register("class3")}/>
          </div>
          <h2 className="mt-3">ผู้ขอเปิด</h2>
          
          
          
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

export default Form8;