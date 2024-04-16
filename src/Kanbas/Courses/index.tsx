import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CourseBreadcrumb from "./CourseBreadcrumb/breadcrumb";
import CourseDetails from "./Settings/CourseDetails";
import CourseSettingsNavigation from "./Settings/Navigation";
import { useState, useEffect } from "react";
import axios from "axios";
function Courses() {
  const API_BASE = process.env.REACT_APP_BASE_API_URL;
  const { courseId } = useParams();
  const COURSES_API = `${API_BASE}/api/courses`;
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div className="wd-main-content">
      <CourseBreadcrumb course={course} />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <div className="wd-tiny-course-text">
            {course?._id} {course?.semester}
          </div>
          <CourseNavigation />
        </div>
        <div className="wd-internal-content">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<h1>People</h1>} />
            <Route path="Settings" element={<CourseDetails />} />
            <Route path="Settings/CourseDetails" element={<CourseDetails />} />
            <Route
              path="Settings/Navigation"
              element={<CourseSettingsNavigation />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
