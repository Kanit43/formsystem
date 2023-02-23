import React from "react";
import { useForm } from "react-hook-form";
import modifyDoc from "../services/modify-doc";


const Form5 = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      modifyDoc(5, data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3">ใบคำร้องขอเปลี่ยนค่าใช้จ่าย</h1>
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
            <label className=" form-label">ระดับปริญญาตรีสาขา:</label>
            <input type="text" name="level" className="form-control" {...register("level")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">คณะ:</label>
            <input type="text" name="group" className="form-control" {...register("group")}/>
          </div>
        
          <div className=" col-12">
            <label className=" form-label">ใบเสร็จเลขที่:</label>
            <input type="text" name="wish" className="form-control" {...register("wish")}/>
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