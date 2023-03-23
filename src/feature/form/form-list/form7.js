import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import modifyDoc from "../services/modify-doc";
import { db } from "../../../firebase";
import { setDoc, collection, doc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useFormStore } from "../../../store";

const Form7 = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const form = useFormStore((state) => state.form);
  const formFetch = useFormStore((state) => state.fetch);
  let navigate = useNavigate();

  useEffect(() => {
    if (form.length === 0) formFetch();
  }, []);

  const onSubmit = async (data) => {
    try {
      const userRef = doc(collection(db, "histories"));
      const formInfo = form.find((x) => (x.code = 7));
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
        <h1 className="mt-3">บันทึกข้อความแจ้งเปลี่ยนคะแนน i</h1>
        <hr className="mb=3"></hr>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" row g-3">
        <div className=" col-12">
          
          <label className=" form-label">สาขาวิชา: </label>
          <input type="text" name="major" className="form-control" {...register("major")}/>
        </div>
        <div className=" col-12">
          
            <label className=" form-label">ที่: </label>
            <input type="text" name="where" className="form-control" {...register("where")}/>
          </div>
        <div className=" col-12">
            <label className=" form-label">วันที่: </label>
            <input type="date" name="date" className="form-control" {...register("date")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ชื่อคำนำหน้าและนามสกุล: </label>
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
            <label className=" form-label">ชื่อวิชา:</label>
            <input type="text" name="subject1" className="form-control" {...register("subject1")}/>
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