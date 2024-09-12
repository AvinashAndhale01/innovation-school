import "./dashboardhome.scss";
import { editicon, deleteicon } from "../../assets/icons";
import { getAllCourses } from "../../api/course";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const DashboardHome = () => {
  const [course, setCourse] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const navigate = useNavigate();

  const addNewCourse = () => {
    navigate("/addnewcourse");
  };

  const deleteCourse = (id) => {
    setSelectedCourseId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    alert(`Course with ID ${selectedCourseId} deleted!`);
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    getAllCourses().then((val) => {
      setCourse(val.courses);
    });
  }, []);

  return (
    <div className="dashboardhome">
      <div className="dashboard-head">
        <div className="dashboard-heading">
          <h1>Admin Dashboard</h1>
        </div>
        <div className="dashboard-create-btn" onClick={addNewCourse}>
          Create New Course
        </div>
      </div>
      <div className="dashboard-table">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {course?.map((val, index) => (
              <tr key={val.id}>
                <td>{index + 1}</td>
                <td className="course-id-title">{val.title}</td>
                <td>
                  <img src={editicon} alt="Edit" />
                </td>
                <td>
                  <img
                    src={deleteicon}
                    alt="Delete"
                    onClick={() => deleteCourse(val.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={showModal} onClose={closeModal} onConfirm={confirmDelete} />
    </div>
  );
};

export default DashboardHome;
