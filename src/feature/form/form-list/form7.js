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
  const { register, handleSubmit ,formState: { errors, isSubmitted, isValid }} = useForm();
  const form = useFormStore((state) => state.form);
  const formFetch = useFormStore((state) => state.fetch);
  let navigate = useNavigate();
  let name = null

  if (form.length !== 0) {
    let f = form.find((x) => x.code === "7")
    if (f) name = f.name
  }

  useEffect(() => {
    if (form.length === 0) formFetch();
  }, []);

  const onSubmit = async (data) => {
    try {
      if (isSubmitted && !isValid) return
      const userRef = doc(collection(db, "histories"));
      const formInfo = form.find((x) => (x.code === "7"));
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
          
         <div className=" col-12">
          <label className=" form-label">สาขาวิชา: </label>
            <select className="form-select"  name="major" {...register("major",{required: true})}>
              <option value="" hidden>โปรดเลือกสาขา</option>
              <option value="สาขาพืชศาสตร์สิ่งทอ,การออกแบบ">สาขาพืชศาสตร์สิ่งทอ,การออกแบบ</option>
              <option value="สาขาสัตวศาสตร์">สาขาสัตว์ศาสตร์</option>
              <option value="สาขาประมง">สาขาประมง</option>
              <option value="สาขาเครื่องจักรกลเกษตร">สาขาเครื่องจักรกลเกษตร</option>
              <option value="สาขาอุตสาหกรรมเกษตร">สาขาอุตสาหกรรมเกษตร</option>
              <option value="สาขาวิศวกรรมเครื่องกล">สาขาวิศวกรรมเครื่องกล</option>
              <option value="สาขาเทคโนโลยีไฟฟ้า">สาขาเทคโนโลยีไฟฟ้า</option>
              <option value="สาขาเทคโนโลยีคอมพิวเตอร์">สาขาเทคโนโลยีคอมพิวเตอร์</option>
              <option value="สาขาวิทยาศาสตร์และคณิตศาสตร์">สาขาวิทยาศาสตร์และคณิตศาสตร์</option>
            </select>
          </div>
          
            <label className=" form-label">ที่: </label>
            <input type="text" name="where" className="form-control" {...register("where",{required: true})}/>
          </div>
        <div className=" col-12">
            <label className=" form-label">วันที่: </label>
            <input type="date" name="date" className="form-control" {...register("date",{required: true})}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ชื่อคำนำหน้าและนามสกุล: </label>
            <input type="text" name="name" className="form-control" {...register("name",{required: true})}/>
          </div>
          <div className=" col-12">
          <label className=" form-label">สาขาวิชา: </label>
            <select className="form-select"  name="group" {...register("group",{required: true})}>
              <option value="" hidden>โปรดเลือกสาขา</option>
              <option value="สาขาพืชศาสตร์สิ่งทอ,การออกแบบ">สาขาพืชศาสตร์สิ่งทอ,การออกแบบ</option>
              <option value="สาขาสัตวศาสตร์">สาขาสัตวศาสตร์</option>
              <option value="สาขาประมง">สาขาประมง</option>
              <option value="สาขาเครื่องจักรกลเกษตร">สาขาเครื่องจักรกลเกษตร</option>
              <option value="สาขาอุตสาหกรรมเกษตร">สาขาอุตสาหกรรมเกษตร</option>
              <option value="สาขาวิศวกรรมเครื่องกล">สาขาวิศวกรรมเครื่องกล</option>
              <option value="สาขาเทคโนโลยีไฟฟ้า">สาขาเทคโนโลยีไฟฟ้า</option>
              <option value="สาขาเทคโนโลยีคอมพิวเตอร์">สาขาเทคโนโลยีคอมพิวเตอร์</option>
              <option value="สาขาวิทยาศาสตร์และคณิตศาสตร์">สาขาวิทยาศาสตร์และคณิตศาสตร์</option>
            </select>
          </div>
          <div className=" col-12">
            <label className=" form-label">ในรายวิชา:</label>
            <input type="text" name="subject" className="form-control" {...register("subject",{required: true})}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ชื่อวิชา:</label>
            <input type="text" name="subject1" className="form-control" {...register("subject1",{required: true})}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ภาคการศึกษาที่:</label>
            <input type="text" name="term" className="form-control" {...register("term",{required: true})}/>
          </div>
        
          <div className=" col-12">
            <label className=" form-label">ระดับ:</label>
            <select
              className="form-select"
              defaultValue={""}
              name="degree"
              {...register("degree",{required: true})}
            >
              <option value="" hidden>โปรดเลือกระดับ</option>
              <option value="d">ปวส.</option>
              <option value="b">ปริญญาตรี</option>
              <option value="md">ปริญญาโท</option>
            </select>
          </div>

          <div className=" col-12">
            <label className=" form-label">ระดับ:</label>
            <select
              className="form-select"
              defaultValue={""}
              name="sector"
              {...register("sector",{required: true})}
            >
              <option value="" hidden>โปรดเลือกระดับ</option>
              <option value="d">ภาคปกติ.</option>
              <option value="b">ภาคบ่าย</option>
              <option value="md">ภาคสมทบ</option>
            </select>
          </div>

          <div className=" col-12">
            <label className=" form-label">ระยะเวลาศึกษา:</label>
            <input type="text" name="timestudy" className="form-control" {...register("timestudy",{required: true})}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">นักศึกษายื่นคำร้องและรับการวัดผลการศึกษาเพื่อเปลี่ยนระดับคะแนน ม.ส. ( I) จำนวน:</label>
            <input type="text" name="accept" className="form-control" {...register("accept",{required: true})}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">นักศึกษาไม่ได้ยื่นคำร้องหรือติดต่ออาจารย์ผู้สอนในการขอวัดผลการศึกษาจำนวน:</label>
            <input type="text" name="reject" className="form-control" {...register("reject",{required: true})}/>
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