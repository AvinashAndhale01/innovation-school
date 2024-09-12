import { useEffect, useState } from "react";
import { fileUpload } from "../../api/upload";
import { createCourse, getCourseById, updateCourseById } from "../../api/course";
import { useNavigate, useParams } from "react-router-dom";
import { Input, Button, Upload, Form, message, Card } from "antd";
import { UploadOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "./addnewcourse.scss";

const AddNewCourse = () => {
  const { id } = useParams();
  const [isEdit] = useState(!!id);
  const navigate = useNavigate();
  const [reqBody, setReqBody] = useState({
    title: "",
    about: "",
    img: "",
    price: "",
    guide: [],
    curriculum: [],
  });
  const [guides, setGuides] = useState([]);
  const [modules, setModules] = useState([]);

  useEffect(() => {
    if (isEdit) {
      getCourseById({ id }).then(({ course }) => {
        setReqBody(course);
        setGuides(course.guide);
        setModules(course.curriculum);
      });
    }
  }, [id, isEdit]);

  const handleChange = (key, value, setter) =>
    setter((prev) => ({ ...prev, [key]: value }));

  const handleUpload = async (name, file) => {
    try {
      const { success, imageUrl } = await fileUpload({ file });
      handleChange(name, success ? imageUrl : "https://picsum.photos/300/200", setReqBody);
    } catch {
      message.error("Image upload failed, using placeholder.");
      handleChange(name, "https://picsum.photos/300/200", setReqBody);
    }
  };

  const addGuide = () => setGuides([...guides, { name: "", img: "", identity: "" }]);
  const removeGuide = (index) => setGuides(guides.filter((_, i) => i !== index));

  const addModule = () => setModules([...modules, { module: "", name: "", description: "" }]);
  const removeModule = (index) => setModules(modules.filter((_, i) => i !== index));

  const handleSubmit = () => {
    const finalData = {
      ...reqBody,
      img: reqBody.img || "https://picsum.photos/300/200",
      guide: guides.map((g) => ({ ...g, img: g.img || "https://picsum.photos/300/200" })),
      curriculum: modules,
    };
    const apiCall = isEdit ? updateCourseById : createCourse;
    apiCall({ id, payload: finalData }).then(() => {
      message.success(isEdit ? "Course updated" : "Course created");
      navigate(-1);
    });
  };

  return (
    <div className="addnewcourse" style={{ padding: "0 10%" }}>
      <h2>{isEdit ? "Edit Course" : "New Course"}</h2>
      <Form layout="vertical" onFinish={handleSubmit} className="new-course-form">
        <Form.Item label="Course Title">
          <Input
            value={reqBody.title}
            onChange={(e) => handleChange("title", e.target.value, setReqBody)}
          />
        </Form.Item>
        <Form.Item label="About">
          <Input.TextArea
            value={reqBody.about}
            onChange={(e) => handleChange("about", e.target.value, setReqBody)}
          />
        </Form.Item>
        <Form.Item label="Course Image">
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
            onChange={(e) => handleChange("price", e.target.value, setReqBody)}
          />
        </Form.Item>

        <h3>Guides</h3>
        {guides.map((guide, index) => (
          <Card
            key={index}
            title={`Guide ${index + 1}`}
            extra={
              <Button
                icon={<MinusOutlined />}
                onClick={() => removeGuide(index)}
                danger
              >
                Remove
              </Button>
            }
            style={{ marginBottom: "10px" }}
          >
            <Form.Item label="Guide Name">
              <Input
                value={guide.name}
                onChange={(e) => handleChange("name", e.target.value, (guides) =>
                  setGuides(guides.map((g, i) => (i === index ? { ...g, name: e.target.value } : g))))}
              />
            </Form.Item>
            <Form.Item label="Guide Image">
              <Upload
                beforeUpload={(file) => {
                  handleUpload(`guideImage${index}`, file);
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
                onChange={(e) => handleChange("identity", e.target.value, (guides) =>
                  setGuides(guides.map((g, i) => (i === index ? { ...g, identity: e.target.value } : g))))}
              />
            </Form.Item>
          </Card>
        ))}
        <Button
          icon={<PlusOutlined />}
          type="dashed"
          onClick={addGuide}
          style={{ marginBottom: "20px" }}
        >
          Add Guide
        </Button>

        <h3>Curriculum Modules</h3>
        {modules.map((module, index) => (
          <Card
            key={index}
            title={`Module ${index + 1}`}
            extra={
              <Button
                icon={<MinusOutlined />}
                onClick={() => removeModule(index)}
                danger
              >
                Remove
              </Button>
            }
            style={{ marginBottom: "10px" }}
          >
            <Form.Item label="Module Number">
              <Input
                type="number"
                value={module.module}
                onChange={(e) => handleChange("module", e.target.value, (modules) =>
                  setModules(modules.map((m, i) => (i === index ? { ...m, module: e.target.value } : m))))}
              />
            </Form.Item>
            <Form.Item label="Module Name">
              <Input
                value={module.name}
                onChange={(e) => handleChange("name", e.target.value, (modules) =>
                  setModules(modules.map((m, i) => (i === index ? { ...m, name: e.target.value } : m))))}
              />
            </Form.Item>
            <Form.Item label="Module Description">
              <Input.TextArea
                value={module.description}
                onChange={(e) => handleChange("description", e.target.value, (modules) =>
                  setModules(modules.map((m, i) => (i === index ? { ...m, description: e.target.value } : m))))}
              />
            </Form.Item>
          </Card>
        ))}
        <Button
          icon={<PlusOutlined />}
          type="dashed"
          onClick={addModule}
          style={{ marginBottom: "20px" }}
        >
          Add Module
        </Button>

        <Button type="primary" htmlType="submit">
          {isEdit ? "Edit" : "Create"}
        </Button>
      </Form>
    </div>
  );
};

export default AddNewCourse;
