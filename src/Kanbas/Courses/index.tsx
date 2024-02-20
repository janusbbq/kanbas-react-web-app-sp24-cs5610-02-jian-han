import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams} from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CourseBreadcrumb from "./CourseBreadcrumb/breadcrumb";
function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <div className="wd-main-content">
            <CourseBreadcrumb />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <div className="wd-tiny-course-text">{course?.name}</div>
                    <CourseNavigation />
                </div>
                <div className="wd-internal-content" >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>

        </div>
    );

}
export default Courses;