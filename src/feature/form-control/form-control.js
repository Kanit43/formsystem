import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap";
import { useFormStore } from "../../store";
import { ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { db, storage } from "../../firebase";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import LoadingOverlay from "react-loading-overlay";
import Lottie from "react-lottie";
import * as loadingData from "../../loading.json"
LoadingOverlay.propTypes = undefined

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const FormControl = () => {
  const form = useFormStore((state) => state.form);
  const fetchForm = useFormStore((state) => state.fetch);
  const updateStatus = useFormStore((state) => state.updateStatus);
  const updateForm = useFormStore((state) => state.updateForm)
  const { roleUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid, isDirty },
    reset,
    setValue,
  } = useForm();
  const [onEdit, setOnEdit] = useState(null);
  const [onAdd, setOnAdd] = useState(false);
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    try {
      console.log(data);
      if (isSubmitted && !isValid) return;
      setLoading(true)
      let entity = {
        name: data.name,
        json: onAdd ? "" : onEdit.json,
        form: onAdd ? "" : onEdit.form,
        active: true,
        code: data.code ?? null,
      };
      if (data.form && data.form.length > 0) {
        const formFile = data.form[0];
        const formRef = ref(storage, `forms/${data.name}.pdf`);
        const uploadFormRes = await uploadBytes(formRef, formFile);
        entity.form = uploadFormRes.ref.fullPath;
      }
      if (data.json && data.json.length > 0) {
        const jsonFile = data.json[0];
        const jsonRef = ref(storage, `jsons/${data.name}.json`);
        const uploadjsonRes = await uploadBytes(jsonRef, jsonFile);
        entity.json = uploadjsonRes.ref.fullPath;
      }
      const formDocRef = doc(collection(db, "forms"));
      console.log(entity);
      if (onAdd) await setDoc(formDocRef, entity);
      else {
        await updateForm(onEdit.id, entity)
      }
      clickCancel()
      reset();
      fetchForm();
    } catch (error) {
      clickCancel()
      reset();
      fetchForm();
      console.log(error);
    }
    setLoading(false)
  };

  console.log("FormControl: render");
  useEffect(() => {
    fetchForm();
    console.log("init");
  }, []);

  const handleToggle = (id, status) => {
    updateStatus(id, status);
    fetchForm();
  };

  const addForm = () => {
    setOnAdd(true)
    reset()
  }

  const editForm = async (form) => {
      setOnEdit(form);
      setValue("name", form.name);
      setValue("code", form.code);
  };

  const clickCancel = () => {
    if (onEdit) setOnEdit(null);
    if (onAdd) setOnAdd(false);
  };

  return (
    <>
    <LoadingOverlay
  active={loading}
  spinner={<Lottie options={defaultOptions} height={400} width={400} />}
  >
</LoadingOverlay>
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <div className="h4 my-3">จัดการฟอร์ม</div>
      </div>
      {(onEdit || onAdd) && (
        <div>
          <Card>
            <Card.Body>
              <Card.Title>{onAdd ? "เพิ่มฟอร์ม" : "แก้ไขฟอร์ม"}</Card.Title>
              <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Row className="g-2">
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>ชื่อฟอร์ม</Form.Label>
                      <Form.Control type="text" {...register("name", { required: true })}></Form.Control>
                      {errors.name && <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>}
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>อัพโหลดไฟล์ฟอร์ม (.pdf เท่านั้น)</Form.Label>
                      <Form.Control type="file" {...register("form", { required: onAdd })}></Form.Control>
                      {onEdit && <Form.Text>เลือกไฟล์ใหม่เพิ่อแทนไฟล์เก่า</Form.Text>}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>อัพโหลด json ฟอร์ม{onEdit && "ใหม่"} (สำหรับ admin) </Form.Label>
                      <Form.Control type="file" {...register("json")} disabled={!roleUser.isAdmin}></Form.Control>
                      {onEdit && <Form.Text>เลือกไฟล์ใหม่เพิ่อแทนไฟล์เก่า</Form.Text>}
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>รหัสฟอร์ม (สำหรับ admin)</Form.Label>
                      <Form.Control type="text" {...register("code")} disabled={!roleUser.isAdmin}></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex flex-row">
                  <Button type="button" className="d-flex ms-auto my-3" variant="secondary" size="sm" onClick={() => clickCancel()}>
                    ยกเลิก
                  </Button>
                  <Button type="submit" className="d-flex ms-2 my-3" disabled={!isDirty} variant="primary" size="sm">
                    {onAdd ? "เพิ่ม" : "บันทึก"}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      )}
      <div className="d-flex flex-row justify-content-between align-items-center my-3">
        <div className="h6 m-0">รายการฟอร์ม</div>
        {!onAdd && !onEdit && (
          <Button variant="primary" size="sm" onClick={() => addForm()}>
            เพิ่มฟอร์มใหม่
          </Button>
        )}
      </div>
      <Table>
        <thead>
          <tr>
            <th>Form</th>
            <th>Code</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {form.map((v) => {
            return (
              <tr key={v.id}>
                <td>{v.name}</td>
                <td>{v.code}</td>
                <td>
                  <Form.Check type="switch" defaultChecked={v.active} onClick={() => handleToggle(v.id, !v.active)} />
                </td>
                {/* <td><Button variant="danger" size="sm" onClick={() => deleteForm(v.id)}>ลบ</Button></td> */}
                <td>
                  <Button variant="primary" size="sm" onClick={() => editForm(v)}>
                    แก้ไข
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container></>
  );
};

export default FormControl;
