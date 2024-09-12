import { useEffect, useState } from "react";
import { fileUpload } from "../../api/upload";
import {
  createCourse,
  getCourseById,
  updateCourseById,
} from "../../api/course";
import { useNavigate, useParams } from "react-router-dom";
import { Input, Button, Upload, Form, message, Card, Spin } from "antd";
import { UploadOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "./addnewcourse.scss";

const AddNewCourse = () => {
  const { id } = useParams();
  const [isEdit] = useState(!!id);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [reqBody, setReqBody] = useState({
    title: "",
    about: "",
    img: "",
    price: "",
    guide: [{ name: "", img: "", identity: "" }],
    curriculum: [{ module: "", name: "", description: "" }],
  });

  useEffect(() => {
    if (isEdit) {
      setLoading(true);
      getCourseById({ id })
        .then(({ course }) => {
          setReqBody(course);
        })
        .finally(() => setLoading(false));
    }
  }, [id, isEdit]);

  const handleChange = (key, value, setter) =>
    setter((prev) => ({ ...prev, [key]: value }));

  const handleNestedChange = (section, index, key, value) => {
    setReqBody((prev) => ({
      ...prev,
      [section]: prev[section].map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      ),
    }));
  };

  const handleUpload = async (name, file) => {
    try {
      const { success, imageUrl } = await fileUpload({ file });
      handleChange(
        name,
        success ? imageUrl : "https://picsum.photos/300/200",
        setReqBody
      );
    } catch {
      message.error("Image upload failed, using placeholder.");
      handleChange(name, "https://picsum.photos/300/200", setReqBody);
    }
  };

  const addGuide = () => {
    setReqBody((prev) => ({
      ...prev,
      guide: [...prev.guide, { name: "", img: "", identity: "" }],
    }));
  };

  const removeGuide = (index) => {
    setReqBody((prev) => ({
      ...prev,
      guide: prev.guide.filter((_, i) => i !== index),
    }));
  };

  const addModule = () => {
    setReqBody((prev) => ({
      ...prev,
      curriculum: [
        ...prev.curriculum,
        { module: "", name: "", description: "" },
      ],
    }));
  };

  const removeModule = (index) => {
    setReqBody((prev) => ({
      ...prev,
      curriculum: prev.curriculum.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = () => {
    setLoading(true);
    const finalData = {
      ...reqBody,
      img: reqBody.img || "https://picsum.photos/300/200",
      guide: reqBody.guide.map((g) => ({
        ...g,
        img: g.img || "https://picsum.photos/300/200",
      })),
    };
    const apiCall = isEdit ? updateCourseById : createCourse;
    apiCall({ id, payload: finalData })
      .then(() => {
        message.success(isEdit ? "Course updated" : "Course created");
        navigate(-1);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="addnewcourse" style={{ padding: "0 10%" }}>
      <h2>{isEdit ? "Edit Course" : "New Course"}</h2>

      <Spin spinning={loading}>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          className="new-course-form"
        >
          <Form.Item label="Course Title">
            <Input
              value={reqBody.title}
              onChange={(e) =>
                handleChange("title", e.target.value, setReqBody)
              }
            />
          </Form.Item>
          <Form.Item label="About">
            <Input.TextArea
              value={reqBody.about}
              onChange={(e) =>
                handleChange("about", e.target.value, setReqBody)
              }
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
              onChange={(e) =>
                handleChange("price", e.target.value, setReqBody)
              }
            />
          </Form.Item>

          <h3>Guides</h3>
          {reqBody.guide.map((guide, index) => (
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
                  onChange={(e) =>
                    handleNestedChange("guide", index, "name", e.target.value)
                  }
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
                  onChange={(e) =>
                    handleNestedChange(
                      "guide",
                      index,
                      "identity",
                      e.target.value
                    )
                  }
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
          {reqBody.curriculum.map((module, index) => (
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
                  onChange={(e) =>
                    handleNestedChange(
                      "curriculum",
                      index,
                      "module",
                      e.target.value
                    )
                  }
                />
              </Form.Item>
              <Form.Item label="Module Name">
                <Input
                  value={module.name}
                  onChange={(e) =>
                    handleNestedChange(
                      "curriculum",
                      index,
                      "name",
                      e.target.value
                    )
                  }
                />
              </Form.Item>
              <Form.Item label="Module Description">
                <Input.TextArea
                  value={module.description}
                  onChange={(e) =>
                    handleNestedChange(
                      "curriculum",
                      index,
                      "description",
                      e.target.value
                    )
                  }
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

          <Button
            type="primary"
            htmlType="submit"
            style={{ margin: "20px auto", display: "block", width: "60%" }}
          >
            {isEdit ? "Update Course" : "Create Course"}
          </Button>
        </Form>
      </Spin>
    </div>
  );
};

export default AddNewCourse;
