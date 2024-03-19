import "./index.css";
import {
  FaBullhorn,
  FaRegTimesCircle,
  FaFileImport,
  FaChartBar,
  FaRegBell,
  FaCalendar,
} from "react-icons/fa";
import { FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { assignments } from "../../../Database";
function Status() {
  const { courseId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment.course === courseId
  );
  return (
    <>
      <h3>Course Status</h3>
      <div className="wd-status-container">
        <button className="wd-flex-grow-1">
          <FaRegTimesCircle className="wd-course-status-icon" /> Unpublish
        </button>
        <button className="wd-flex-grow-1 wd-green-button">
          <FaCircleCheck /> Publish
        </button>
      </div>
      <br />
      <div className="wd-status-container">
        <button className="wd-flex-grow-1 wd-align-button-text">
          <FaFileImport className="wd-course-status-icon" /> Import Existing
          Content
        </button>
      </div>
      <div className="wd-status-container">
        <button className="wd-flex-grow-1 wd-align-button-text">
          <FiTarget className="wd-course-status-icon" /> Choose Home Page
        </button>
      </div>
      <div className="wd-status-container">
        <button className="wd-flex-grow-1 wd-align-button-text">
          <FaChartBar className="wd-course-status-icon" /> View Course Stream
        </button>
      </div>
      <div className="wd-status-container">
        <button className="wd-flex-grow-1 wd-align-button-text">
          <FaBullhorn className="wd-course-status-icon" /> New Announcement
        </button>
      </div>
      <div className="wd-status-container">
        <button className="wd-flex-grow-1 wd-align-button-text">
          <FaChartBar className="wd-course-status-icon" /> New Analytics
        </button>
      </div>
      <div className="wd-status-container">
        <button className="wd-flex-grow-1 wd-align-button-text">
          <FaRegBell className="wd-course-status-icon" /> View Course
          Notifications
        </button>
      </div>

      <div className="wd-course-status-info-container ">
        <h5>To Do</h5>
      </div>
      <div className="wd-status-container">
        <a className="wd-red-link" href="#">
          <FaCircleExclamation className="wd-course-status-icon" /> Grade{" "}
          {assignment?.title}
        </a>
      </div>
      <div className="wd-status-container">
        {assignment?.points} pts | {assignment?.due} 11:59pm
      </div>
      <div className="wd-course-status-info-container">
        <h5 className="wd-flex-grow-2">Coming Up </h5>
        <span className="wd-flex-grow-2">
          <FaCalendar className="wd-course-status-icon" />{" "}
          <a className="wd-red-link" href="#">
            {" "}
            View{" "}
          </a>
        </span>
      </div>
      <div className="wd-status-container">
        <FaCalendar className="wd-course-status-icon" />{" "}
        <a className="wd-red-link" href="#">
          &emsp;Lecture
        </a>
      </div>
      <div className="wd-status-container">{courseId}.12631.202410</div>
      <div className="wd-status-container">{assignment?.start} at 6pm</div>
      <br />
      <div className="wd-status-container">
        <a className="wd-red-link" href="#">
          {" "}
          More in the next week...
        </a>
      </div>
    </>
  );
}
export default Status;
