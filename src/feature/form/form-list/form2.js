import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import modifyDoc from "../services/modify-doc";
import { db } from "../../../firebase";
import { setDoc, collection, doc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useFormStore } from "../../../store";

const Form2 = () => {
  const { register, handleSubmit ,formState: { errors, isSubmitted, isValid }} = useForm();
  const { user } = useContext(AuthContext)
  const form = useFormStore((state) => state.form);
  const formFetch = useFormStore((state) => state.fetch);
  let navigate = useNavigate();
  let name = null

  if (form.length !== 0) {
    let f = form.find((x) => x.code === "2")
    if (f) name = f.name
  }

  useEffect(() => {
    if (form.length === 0) formFetch();
  }, []);

  const onSubmit = async (data) => {
    try {
      if (isSubmitted && !isValid) return
      const userRef = doc(collection(db, "histories"));
      const formInfo = form.find((x) => (x.code === "2"));
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
            <label className=" form-label">เขียนที่: </label>
            <input type="text" name="where"  className="form-control" {...register("where" ,{required: true})} />
          </div>

        <div className=" col-12">
            <label className=" form-label">วันที่: </label>
            <input type="date" name="date" className="form-control" {...register("date",{required: true})}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">เรื่อง: </label>
            <input type="text" name="header" className="form-control" {...register("header",{required: true})}/>
          </div>

          <div className=" col-12">
          <label className=" form-label">คำนำหน้า: </label>
            <select className="form-select" placeholder="โปรดเลือกคำนำหน้า" name="title" {...register("title",{required: true})}>
            <option value="" hidden>โปรดเลือกคำนำหน้า</option>
              <option value="mr.">นาย</option>
              <option value="ms.">นาง</option>
              <option value="miss">นางสาว</option>
            </select>
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
          <div className=" col-12">
            <label className=" form-label">ชั้นปีที่:</label>
            <input type="text" name="yearclass" className="form-control" {...register("yearclass",{required: true})}/>
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
              <option value="b">ป.ตรี 4 ปี</option>
              <option value="bcon">ป.ตรี2 ปีต่อเนื่อง/เทียบโอน</option>
              <option value="md">ป.โท</option>
            </select>
          </div>
          <div className=" col-12">
            <label className=" form-label">ภาค:</label>
            <select
              className="form-select"
              defaultValue={""}
              name="semester"
              {...register("semester",{required: true})}
            >
              <option value="" hidden>โปรดเลือกภาค</option>
              <option value="c">ภาคปกติ</option>
              <option value="b">ภาสมทบ</option>
              
            </select>
          </div>
          <div className=" col-12">
            <label className=" form-label">คณะ:</label>
            <select
              className="form-select"
              defaultValue={""}
              name="group"
              {...register("group",{required: true})}
            >
              <option value="" hidden>โปรดเลือกคณะ</option>
              <option value="c">คณะเกษตรศาสตร์และเทคโนโลยี</option>
              <option value="b">คณะเทคโนโลยีการจัดการ</option>
              
            </select>
          </div>
          
          
          <div className=" col-12">
            <label className=" form-label">ความประสงค์:</label>
            <textarea
              type="text"
              name="purpose"
              className="form-control"
              {...register("purpose",{required: true})}
            />
          </div>

          <div className=" col-12">
            <label className=" form-label">เบอร์โทร:</label>
            <input type="text" name="number" className="form-control" {...register("number",{required: true})}/>
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

export default Form2;