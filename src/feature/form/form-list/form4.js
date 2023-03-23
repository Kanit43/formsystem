import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import modifyDoc from "../services/modify-doc";
import { db } from "../../../firebase";
import { setDoc, collection, doc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useFormStore } from "../../../store";

const Form4 = () => {
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
      const formInfo = form.find((x) => (x.code = 4));
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
        <h1 className="mt-3">ใบคำร้องขอผ่อนผันค่าใช้จ่ายทางการศึกษา</h1>
        <hr className="mb=3"></hr>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" row g-3">
        <div className=" col-12">
            <label className=" form-label">วันที่: </label>
            <input type="date" name="date" className="form-control" {...register("date")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">พ.ศ: </label>
            <input type="text" name="pt" className="form-control" {...register("pt")}/>
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
            <label className=" form-label">สาขาวิชา:</label>
            <input type="text" name="major" className="form-control" {...register("major")}/>
          </div>

          <div className=" col-12">
            <label className=" form-label">ภาค:</label>
            <input type="text" name="sector" className="form-control" {...register("sector")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ความประสงค์ขอผ่อนผันค่าใช้จ่ายทางการศึกษา ตามเลขที่ใบเสร็จ:</label>
            <input type="text" name="bill" className="form-control" {...register("bill")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ค่าบำรุงการศึกษาเหมาจ่าย จำนวน:</label>
            <input type="text" name="educationfee" className="form-control" {...register("educationfee")}/>
          </div>
          <h2 className="mt-3">อื่นๆ ระบุ</h2>
          <div className=" col-12">
            <label className=" form-label">1:</label>
            <input type="text" name="other" className="form-control" {...register("other")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">จำนวน:</label>
            <input type="text" name="unit" className="form-control" {...register("unit")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">2:</label>
            <input type="text" name="other1" className="form-control" {...register("other1")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">จำนวน:</label>
            <input type="text" name="unit1" className="form-control" {...register("unit1")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">รวมเป็นเงินทั้งสิ้น:</label>
            <input type="text" name="average" className="form-control" {...register("average")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">จะชำระภายในวันที่:</label>
            <input type="text" name="month" className="form-control" {...register("month")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">เบอร์:</label>
            <input type="text" name="number2" className="form-control" {...register("number2")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ชื่อผู้ปกครอง:</label>
            <input type="text" name="parent" className="form-control" {...register("parent")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">อยู่บ้านเลขที่:</label>
            <input type="text" name="address" className="form-control" {...register("address")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">ชื่อนักศึกษา:</label>
            <input type="text" name="student" className="form-control" {...register("student")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">เกี่ยวข้องเป็น:</label>
            <input type="text" name="parent1" className="form-control" {...register("parent1")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">เบอร์ผู้ปกครอง:</label>
            <input type="text" name="nump" className="form-control" {...register("nump")}/>
          </div>
          <div className=" col-12">
            <label className=" form-label">วันที่:</label>
            <input type="text" name="date1" className="form-control" {...register("date1")}/>
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

export default Form4;