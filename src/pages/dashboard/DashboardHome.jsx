import "./dashboardhome.scss";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { deleteCourseById, getAllCourses } from "../../api/course";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Table, Typography, Row, Col, message } from "antd";

const { Title } = Typography;

const DashboardHome = () => {
  const [course, setCourse] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const navigate = useNavigate();

  const addNewCourse = () => {
    navigate("course/create");
  };

  const deleteCourse = (id) => {
    setSelectedCourseId(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteCourseById({ id: selectedCourseId });
      message.success("Course deleted successfully");
      getCourses();
    } catch (error) {
      message.error("Failed to delete course");
    }
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const getCourses = async () => {
    try {
      const { courses } = await getAllCourses();
      setCourse(courses);
    } catch (error) {
      message.error("Failed to load courses");
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      className: "course-id-title",
    },
    {
      title: "Edit",
      key: "edit",
      render: (text, record) => (
        <Button
          type="link"
          icon={<EditOutlined />}
          onClick={() => navigate("course/create/" + record._id)}
        />
      ),
    },
    {
      title: "Delete",
      key: "delete",
      render: (text, record) => (
        <Button
          type="link"
          danger
          icon={<DeleteOutlined />}
          onClick={() => deleteCourse(record._id)}
        />
      ),
    },
  ];

  return (
    <div className="dashboardhome">
      <Row className="dashboard-head" justify="space-between" align="middle">
        <Col>
          <Title level={2}>Admin Dashboard</Title>
        </Col>
        <Col>
          <Button type="primary" icon={<PlusOutlined />} onClick={addNewCourse}>
            Create New Course
          </Button>
        </Col>
      </Row>
      <Table
        className="dashboard-table"
        columns={columns}
        dataSource={course}
        rowKey="_id"
        pagination={{ pageSize: 5 }}
      />
      <Modal
        title="Confirm Delete"
        visible={showModal}
        onOk={confirmDelete}
        onCancel={closeModal}
        okText="Yes"
        cancelText="No"
      >
        Are you sure you want to delete this course?
      </Modal>
    </div>
  );
};

export default DashboardHome;
