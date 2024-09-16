import React, { useEffect, useState } from "react";
import { Input, Button, Upload, Form, Card, message, Spin } from "antd";
import { UploadOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { fileUpload } from "../../api/upload";
import { createCourse, getCourseById, updateCourseById } from "../../api/course";
import { useNavigate, useParams } from "react-router-dom";

const AddNewCourse = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(id || null);

  const initReqBody = {
    id: isEdit,
    title: "",
    about: "",
    img: "",
    price: null,
    paymentUrl: "",
    duration: "",
    aboutCourse: {
      title: "",
      points: [""],
    },
    guide: [
      {
        name: "",
        img: "",
        identity: "",
        linkedinId: "",
      },
    ],
    curriculum: [
      {
        module: 1,
        name: "",
        description: "",
      },
    ],
  };

  const [reqBody, setReqBody] = useState(initReqBody);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEdit) {
      setLoading(true);
      getCourseById({ id })
        .then(({ course }) => setReqBody(course))
        .finally(() => setLoading(false));
    }
  }, [isEdit, id]);

  const handleChange = (name, value) => {
    setReqBody((prev) => ({ ...prev, [name]: value }));
  };

  const handleNestedChange = (section, index, name, value) => {
    const updatedSection = [...reqBody[section]];
    updatedSection[index] = { ...updatedSection[index], [name]: value };
    setReqBody((prev) => ({ ...prev, [section]: updatedSection }));
  };

  const handleAboutCourseChange = (name, value) => {
    setReqBody((prev) => ({
      ...prev,
      aboutCourse: { ...prev.aboutCourse, [name]: value },
    }));
  };

  const handlePointChange = (index, value) => {
    const updatedPoints = [...reqBody.aboutCourse.points];
    updatedPoints[index] = value;
    setReqBody((prev) => ({
      ...prev,
      aboutCourse: { ...prev.aboutCourse, points: updatedPoints },
    }));
  };

  const addPoint = () => {
    setReqBody((prev) => ({
      ...prev,
      aboutCourse: {
        ...prev.aboutCourse,
        points: [...prev.aboutCourse.points, ""],
      },
    }));
  };

  const removePoint = (index) => {
    const updatedPoints = reqBody.aboutCourse.points.filter((_, i) => i !== index);
    setReqBody((prev) => ({
      ...prev,
      aboutCourse: { ...prev.aboutCourse, points: updatedPoints },
    }));
  };

  const addGuide = () => {
    const newGuide = {
      name: "",
      img: "",
      identity: "",
      linkedinId: "",
    };
    setReqBody((prev) => ({
      ...prev,
      guide: [...prev.guide, newGuide],
    }));
  };

  const removeGuide = (index) => {
    const updatedGuides = reqBody.guide.filter((_, i) => i !== index);
    setReqBody((prev) => ({ ...prev, guide: updatedGuides }));
  };

  const addModule = () => {
    const newModule = { module: reqBody.curriculum.length + 1, name: "", description: "" };
    setReqBody((prev) => ({
      ...prev,
      curriculum: [...prev.curriculum, newModule],
    }));
  };

  const removeModule = (index) => {
    const updatedModules = reqBody.curriculum.filter((_, i) => i !== index);
    setReqBody((prev) => ({ ...prev, curriculum: updatedModules }));
  };

  const handleUpload = async (name, file, index = null) => {
    setLoading(true);
    try {
      const res = await fileUpload(file);
      if (res.success) {
        message.success(res.message);
        if (index !== null) {
          const updatedGuide = [...reqBody.guide];
          updatedGuide[index].img = res.file.uri;
          setReqBody((prev) => ({ ...prev, guide: updatedGuide }));
        } else {
          setReqBody((prev) => ({ ...prev, [name]: res.file.uri }));
        }
      } else {
        message.error(res.message);
      }
    } catch (error) {
      message.error("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    const apiCall = isEdit ? updateCourseById : createCourse;
    apiCall({ payload: reqBody })
      .then((val) => {
        if (val.success) {
          message.success(val.message);
          navigate(-1);
        } else {
          message.error(val.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div style={{ padding: "0 10%" }}>
      {loading ? (
        <div style={{ height: "90vh", display: "grid", placeContent: "center" }}>
          <Spin spinning={loading} />
        </div>
      ) : (
        <>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 0" }}>
            {isEdit ? "Edit Course" : "Create Course"}
          </div>
          <Form layout="vertical" className="new-course-form">
            <Form.Item label="Course Title">
              <Input
                value={reqBody.title}
                onChange={(e) => handleChange("title", e.target.value)}
              />
            </Form.Item>
            <Form.Item label="About">
              <Input.TextArea
                value={reqBody.about}
                onChange={(e) => handleChange("about", e.target.value)}
              />
            </Form.Item>

            <Form.Item label="Course Image">
              {reqBody.img && <img src={reqBody.img} alt="Course" style={{ width: "200px", height: "auto", marginBottom: "10px" }} />}
              <Upload
                beforeUpload={(file) => {
                  handleUpload("img", file);
                  return false;
                }}
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </Form.Item>

            <Form.Item label="Price">
              <Input
                type="number"
                value={reqBody.price}
                onChange={(e) => handleChange("price", e.target.value)}
              />
            </Form.Item>

            <Form.Item label="Payment URL">
              <Input
                value={reqBody.paymentUrl}
                onChange={(e) => handleChange("paymentUrl", e.target.value)}
              />
            </Form.Item>

            <Form.Item label="Duration">
              <Input
                value={reqBody.duration}
                onChange={(e) => handleChange("duration", e.target.value)}
              />
            </Form.Item>

            <h3>About the Course</h3>
            <Form.Item label="About Course Title">
              <Input
                value={reqBody.aboutCourse.title}
                onChange={(e) => handleAboutCourseChange("title", e.target.value)}
              />
            </Form.Item>

            <h3>About the Course Points</h3>
            {reqBody.aboutCourse.points.map((point, index) => (
              <Form.Item key={index} label={`Point ${index + 1}`}>
                <Input
                  value={point}
                  onChange={(e) => handlePointChange(index, e.target.value)}
                  style={{ width: "80%" }}
                />
                <Button
                  icon={<MinusOutlined />}
                  danger
                  onClick={() => removePoint(index)}
                  style={{ marginLeft: "10px" }}
                />
              </Form.Item>
            ))}
            <Button icon={<PlusOutlined />} type="dashed" onClick={addPoint} style={{ marginBottom: "20px" }}>
              Add Point
            </Button>

            <h3>Guides</h3>
            {reqBody.guide.map((guide, index) => (
              <Card
                key={index}
                title={`Guide ${index + 1}`}
                extra={
                  <Button icon={<MinusOutlined />} onClick={() => removeGuide(index)} danger>
                    Remove
                  </Button>
                }
                style={{ marginBottom: "10px" }}
              >
                {guide.img && <img src={guide.img} alt={`Guide ${index + 1}`} style={{ width: "100px", height: "auto", marginBottom: "10px" }} />}
                <Form.Item label="Guide Name">
                  <Input
                    value={guide.name}
                    onChange={(e) => handleNestedChange("guide", index, "name", e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Guide Image">
                  <Upload
                    beforeUpload={(file) => {
                      handleUpload("guide", file, index); // Pass the index of the guide
                      return false;
                    }}
                    maxCount={1}
                  >
                    <Button icon={<UploadOutlined />}>Upload Guide Image</Button>
                  </Upload>
                </Form.Item>
                <Form.Item label="Guide Identity">
                  <Input
                    value={guide.identity}
                    onChange={(e) => handleNestedChange("guide", index, "identity", e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="LinkedIn ID">
                  <Input
                    value={guide.linkedinId}
                    onChange={(e) => handleNestedChange("guide", index, "linkedinId", e.target.value)}
                  />
                </Form.Item>
              </Card>
            ))}
            <Button icon={<PlusOutlined />} type="dashed" onClick={addGuide} style={{ marginBottom: "20px" }}>
              Add Guide
            </Button>

            <h3>Curriculum Modules</h3>
            {reqBody.curriculum.map((module, index) => (
              <Card
                key={index}
                title={`Module ${index + 1}`}
                extra={
                  <Button icon={<MinusOutlined />} onClick={() => removeModule(index)} danger>
                    Remove
                  </Button>
                }
                style={{ marginBottom: "10px" }}
              >
                <Form.Item label="Module Number">
                  <Input
                    type="number"
                    value={module.module}
                    onChange={(e) => handleNestedChange("curriculum", index, "module", e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Module Name">
                  <Input
                    value={module.name}
                    onChange={(e) => handleNestedChange("curriculum", index, "name", e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Module Description">
                  <Input.TextArea
                    value={module.description}
                    onChange={(e) => handleNestedChange("curriculum", index, "description", e.target.value)}
                  />
                </Form.Item>
              </Card>
            ))}
            <Button icon={<PlusOutlined />} type="dashed" onClick={addModule} style={{ marginBottom: "20px" }}>
              Add Module
            </Button>

            <Button type="primary" style={{ margin: "20px auto", display: "block", width: "60%" }} onClick={handleSubmit}>
              {isEdit ? "Update Course" : "Create Course"}
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default AddNewCourse;
