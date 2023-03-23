import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import modifyDoc from "../services/modify-doc";
import { db } from "../../../firebase";
import { setDoc, collection, doc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useFormStore } from "../../../store";

const Form1 = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext)
  const form = useFormStore((state) => state.form);
  const formFetch = useFormStore((state) => state.fetch);
  let navigate = useNavigate();

  useEffect(() => {
    if (form.length === 0) formFetch();
  }, []);

  const onSubmit = async (data) => {
    try {
      // const userRef = doc(collection(db, "histories"));
      // const formInfo = form.find((x) => (x.code = 1));
      // await setDoc(userRef, {
      //   form_id: formInfo.id,
      //   user_id: user.uid,
      //   json: JSON.stringify(data),
      //   created_time: Timestamp.now(),
      // });
      // modifyDoc(formInfo.form, formInfo.json, data, 1);
      // navigate("/history", { replace: true });

      modifyDoc(null, null, data, 1);
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
            <input
              type="date"
              name="date"
              className="form-control"
              {...register("date")}
            />
          </div>
          <div className=" col-12">
            <label className=" form-label">เรื่อง: </label>
            <input
              type="text"
              name="header"
              className="form-control"
              {...register("header")}
            />
          </div>
          <div className=" col-12">
          <label className=" form-label">คำนำหน้า: </label>
            <select
              className="form-select"
              defaultValue={""}
              name="title"
              {...register("title")}
            >
              <option value="" hidden>โปรดเลือกคำนำหน้า</option>
              <option value="mr.">นาย</option>
              <option value="ms.">นาง</option>
              <option value="miss">นางสาว</option>
            </select>
          </div>
          <div className=" col-12">
            <label className=" form-label">ชื่อและนามสกุล: </label>
            <input
              type="text"
              name="name"
              className="form-control"
              {...register("name")}
            />
          </div>
          <div className=" col-12">
            <label className=" form-label">รหัสนักศึกษา:</label>
            <input
              type="text"
              name="idcard"
              className="form-control"
              {...register("idcard")}
            />
          </div>
          <div className=" col-12">
            <label className=" form-label">ระดับ:</label>
            <select
              className="form-select"
              defaultValue={""}
              name="degree"
              {...register("degree")}
            >
              <option value="" hidden>โปรดเลือกระดับ</option>
              <option value="c">ปวส.</option>
              <option value="b">ปริญญาตรี</option>
              <option value="d">ปริญญาโท</option>
            </select>
          </div>
          <div className=" col-12">
            <label className=" form-label">โปรแกรมวิชา:</label>
            <input
              type="text"
              name="major"
              className="form-control"
              {...register("major")}
            />
          </div>
          <div className=" col-12">
            <label className=" form-label">ห้อง:</label>
            <input
              type="text"
              name="class"
              className="form-control"
              {...register("class")}
            />
          </div>
          <div className=" col-12">
            <label className=" form-label">ความประสงค์:</label>
            <textarea
              type="text"
              name="purpose"
              className="form-control"
              {...register("purpose")} rows="3"></textarea>
          </div>
        </div>
        <div className="ms-auto">
        <button type="submit" name="enter" className="btn btn-primary mt-3">
          Save
        </button></div>
      </form>
    </div>
  );
};

export default Form1;
