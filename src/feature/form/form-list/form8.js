import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import modifyDoc from "../services/modify-doc";
import { db } from "../../../firebase";
import { setDoc, collection, doc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useFormStore } from "../../../store";

const Form8 = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit ,formState: { errors, isSubmitted, isValid }} = useForm();
  const form = useFormStore((state) => state.form);
  const formFetch = useFormStore((state) => state.fetch);
  let navigate = useNavigate();
  let name = null

  if (form.length !== 0) {
    let f = form.find((x) => x.code === "8")
    if (f) name = f.name
  }

  useEffect(() => {
    if (form.length === 0) formFetch();
  }, []);

  const onSubmit = async (data) => {
    try {
      if (isSubmitted && !isValid) return
      const userRef = doc(collection(db, "histories"));
      const formInfo = form.find((x) => (x.code === "8"));
      await setDoc(userRef, {
        form_id: formInfo.id,
        user_id: user.uid,
        json: JSON.stringify(data),
        created_time: Timestamp.now(),
      });

      modifyDoc(formInfo.form, formInfo.json, data);
      navigate("/history", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-3">{name}</h2>
        <hr className="mb=3"></hr>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" row g-3">
        <div className=" col-12">
            <label className=" form-label">วันที่: </label>
            <input type="date" name="date" className="form-control" {...register("date",{required: true})}/>
          </div>

        
          <div className=" col-12">
            <label className=" form-label">ชื่อและนามสกุล: </label>
            <input type="text" name="name" className="form-control" {...register("name",{required: true})}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">รหัสนักศึกษา:</label>
            <p class="text-danger">(ตัวอย่างการกรอกรหัสนักศึกษา 6322211003-3)</p>
            <input type="text" name="idcard" className="form-control" {...register("idcard",{required: true})}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ระดับ:</label>
            <input type="text" name="level" className="form-control" {...register("level",{required: true})}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">โปรแกรมวิชา:</label>
            <input type="text" name="major" className="form-control" {...register("major",{required: true})}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">กลุ่มเรียน:</label>
            <input type="text" name="class" className="form-control" {...register("class",{required: true})}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ความประสงค์ขอเปิดรายวิชา รหัสวิชา:</label>
            <input type="text" name="wish" className="form-control" {...register("wish",{required: true})}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ชื่อวิชา:</label>
            <input type="text" name="namesub" className="form-control" {...register("namesub",{required: true})}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ภาคเรียนที่:</label>
            <input type="text" name="term" className="form-control" {...register("term",{required: true})}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">เหตุผลที่ขอเปิดรายวิชา:</label>
            <input type="text" name="reason" className="form-control" {...register("reason",{required: true})}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ผู้ร่วมขอเปิด:</label>
            <input type="text" name="study" className="form-control" {...register("study",{required: true})}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">โดยขออนุญาตให้:</label>
            <input type="text" name="teacher" className="form-control" {...register("teacher",{required: true})}/>
          </div>
          <h2 className="mt-3">คาบทฤษฎี</h2>
          <div className=" col-12">
            <label className=" form-label">วัน:</label>
            <input type="text" name="theory" className="form-control" {...register("theory",{required: true})}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">เวลา:</label>
            <input type="time" name="carry" className="form-control" {...register("carry",{required: true})}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ถึงเวลา:</label>
            <input type="time" name="class1" className="form-control" {...register("class1",{required: true})}/>
          </div>
         
     <h2 className="mt-3">คาบปฏิบัติ</h2>
     <div className=" col-12">
            <label className=" form-label">วัน:</label>
            <input type="text" name="theory" className="form-control" {...register("theory1",{required: true})}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">เวลา:</label>
            <input type="time" name="carry" className="form-control" {...register("carry1",{required: true})}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ถึงเวลา:</label>
            <input type="time" name="class1" className="form-control" {...register("class2",{required: true})}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ห้องเรียน:</label>
            <input type="text" name="class3" className="form-control" {...register("class3",{required: true})}/>
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

export default Form8;