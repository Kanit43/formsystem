import React from "react";
import { useForm } from "react-hook-form";
import modifyDoc from "../services/modify-doc";

const Form7 = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      modifyDoc(7, data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3">บันทึกข้อความแจ้งเปลี่ยนคะแนน i</h1>
        <hr className="mb=3"></hr>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" row g-3">
        <div className=" col-12">
            <label className=" form-label">ที่: </label>
            <input type="text" name="where" className="form-control" {...register("where")}/>
          </div>
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
            <label className=" form-label">สังกัดสาขาวิชา:</label>
            <input type="text" name="group" className="form-control" {...register("group")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ในรายวิชา:</label>
            <input type="text" name="subject" className="form-control" {...register("subject")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ภาคการศึกษาที่:</label>
            <input type="text" name="term" className="form-control" {...register("term")}/>
          </div>
        
          <div className=" col-12">
            <label className=" form-label">ระดับ:</label>
            <input type="text" name="level" className="form-control" {...register("level")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ระยะเวลาศึกษา:</label>
            <input type="text" name="timestudy" className="form-control" {...register("timestudy")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">นักศึกษายื่นคำร้องและรับการวัดผลการศึกษาเพื่อเปลี่ยนระดับคะแนน ม.ส. ( I) จำนวน:</label>
            <input type="text" name="accept" className="form-control" {...register("accept")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">นักศึกษาไม่ได้ยื่นคำร้องหรือติดต่ออาจารย์ผู้สอนในการขอวัดผลการศึกษาจำนวน:</label>
            <input type="text" name="reject" className="form-control" {...register("reject")}/>
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

export default Form7;