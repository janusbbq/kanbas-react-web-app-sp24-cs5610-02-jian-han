import "./index.css";
import {
  FaTimes,
  FaCheckCircle,
  FaFileImport,
  FaCircle,
  FaChartBar,
  FaBullhorn,
  FaBell,
  FaCalendar,
  FaExclamation,
} from "react-icons/fa";

function Status() {
  return (
    <>
      <h3>Course Status</h3>
      <div className="wd-status-container">
        <button className="wd-flex-grow-1">
          <FaTimes className="icon" /> Unpublish
        </button>
        <button className="wd-flex-grow-1 wd-green-button">
          <FaCheckCircle className="text-success" /> Publish
        </button>
      </div>
      <br />
      <div className="wd-status-container">
        <button className="wd-flex-grow-1 wd-align-button-text">
          <FaFileImport className="icon" /> Import Existing Content
        </button>
      </div>
      <div className="wd-status-container">
        <button className="wd-flex-grow-1 wd-align-button-text">
          <FaCircle className="icon" /> Choose Home Page
        </button>
      </div>
      <div className="wd-status-container">
        <button className="wd-flex-grow-1 wd-align-button-text">
          <FaChartBar className="icon" /> View Course Stream
        </button>
      </div>
      <div className="wd-status-container">
        <button className="wd-flex-grow-1 wd-align-button-text">
          <FaBullhorn className="icon" /> New Announcement
        </button>
      </div>
      <div className="wd-status-container">
        <button className="wd-flex-grow-1 wd-align-button-text">
          <FaChartBar className="icon" /> New Analytics
        </button>
      </div>
      <div className="wd-status-container">
        <button className="wd-flex-grow-1 wd-align-button-text">
          <FaBell className="icon" /> View Course Notifications
        </button>
      </div>

      <div className="wd-course-status-info-container ">
        <h5>To Do</h5>
        <hr />
      </div>
      <div className="wd-status-container">
        <a className="wd-red-link" href="#">
          <FaExclamation className="icon" /> Grade A1 - ENV + HTML
        </a>
      </div>
      <div className="wd-status-container">100 pts · Sept 18 at 11:59pm</div>
      <div className="wd-status-container">
        <a className="wd-red-link" href="#">
          <FaExclamation className="icon" /> Grade A2 - CSS +BOOTSTRAP
        </a>
      </div>
      <div className="wd-status-container">100 points · Oct 2 at 11:59pm</div>
    </>
  );
}
export default Status;
