import { useState, useEffect } from "react";
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
import * as client from "./client";

function Courses({ courses }: { courses: any[] }) {
  const { courseId } = useParams();
  const [course, setCourse] = useState<any>({ _id: "" });
  const fetchCourse = async (courseId?: string) => {
    const course = await client.fetchCourseByID(courseId);
    setCourse(course);
  };

  useEffect(() => {
    fetchCourse(courseId);
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
            <Route path="Settings" element={<h1>Settings</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
