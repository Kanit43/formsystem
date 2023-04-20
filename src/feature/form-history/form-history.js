import React, { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import modifyDoc from "../form/services/modify-doc";
import { useHistoriesStore, useFormStore } from "../../store";
import { AuthContext } from "../../context/AuthContext";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

const FormHistory = () => {
  const histories = useHistoriesStore((state) => state.histories);
  const historiesFetch = useHistoriesStore((state) => state.fetch);
  const form = useFormStore((state) => state.form);
  const formFetch = useFormStore((state) => state.fetch);
  const { user, roleUser } = useContext(AuthContext);

  console.log("FormHistory: render");
  useEffect(() => {
    if (form.length === 0) formFetch();
    if (form.length !== 0) {
      if (roleUser.isOffice) {
        historiesFetch(null);
      } else {
        historiesFetch(user.uid);
      }
    }
  }, [form]);

  const downloadForm = (form, json) => {
    const data = JSON.parse(json);
    modifyDoc(form.form, form.json, data);
  };

  const deleteForm = async (id) => {
    try {
      await deleteDoc(doc(db, "histories", id));
      if (roleUser.isOffice) {
        historiesFetch(null)
      }
      else {
        historiesFetch(user.uid)
      }
    } catch (error) {}
  };

  return (
    <Container>
      <div className="h4 my-3">ประวัติทำรายการ</div>
      <Table responsive="lg">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Form</th>
            <th>Created Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {histories.map((element) => {
            let formInfo = form.find((v) => v.id === element.formId);
            return (
              <tr key={element.id}>
                <td>{element.studentId}</td>
                <td className="text-nowrap">{formInfo.name}</td>
                <td className="text-nowrap">{element.createdTime}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => downloadForm(formInfo, element.json)}
                  >
                    Download
                  </button>
                  <button
                    className="btn btn-sm btn-danger ms-2"
                    onClick={() => deleteForm(element.id)}
                  >
                    ลบ
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default FormHistory;
