import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import "./index.css";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <>
      <div>
        <div className="wd-align-right">
          <strong className="text-success">
            {" "}
            <FaCheckCircle /> Published &emsp;
          </strong>
          <button className="wd-standard-button">
            <FaEllipsisV />
          </button>
        </div>
        <hr />
        <div className="mb-3">
          <label htmlFor="assignment-name-input" className="form-label">
            Assignment Name
          </label>
          <input
            className="form-control"
            id="assignment-name-input"
            value={assignment?.title}
          />
        </div>
        <div className="mb-3">
          <textarea className="form-control" id="assignment-text">
            This assignment describes how to install the development environment
            for creating and working with Web applications we will be developing
            this semester. We will add new content every week, pushing the code
            to a GitHub source repository, and then deploying the content to a
            remote server hosted on Netlify.
          </textarea>
        </div>
        <div style={{ textAlign: "center" }}>
          <div className="mb-3 row">
            <label
              htmlFor="points-input"
              className="col-3 col-form-label wd-align-text-right"
            >
              Points{" "}
            </label>
            <div className="col-7">
              {" "}
              <input
                className="form-control"
                placeholder={assignment?.points}
                id="points-input"
              />{" "}
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="assignment-group"
              className="col-3 col-form-label wd-align-text-right"
            >
              {" "}
              Assignment Group{" "}
            </label>
            <div className="col-7">
              {" "}
              <select className="form-control" id="assignment-group">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
              </select>{" "}
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="display-grade"
              className="col-3 col-form-label wd-align-text-right"
            >
              {" "}
              Display Grade as{" "}
            </label>
            <div className="col-7">
              {" "}
              <select className="form-control" id="display-grade">
                <option>Percentage</option>
                <option>Points</option>
              </select>{" "}
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-3">&emsp;</div>
            <div className="col-7 wd-align-text-left">
              <input
                type="checkbox"
                value="NOTCOUNTED"
                name="not-counted"
                id="not-counted"
              />
              <label htmlFor="not-counted">
                &nbsp; Do not count this assignment towards the final grade.
              </label>
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-3">&emsp;</div>
            <div className="col-7"></div>
          </div>
          <div className="mb-3 row">
            <div className="col-3 wd-align-text-right">Assign</div>
            <div className="col-7 card">
              <div className="col-8 wd-inside-form-top">
                <label htmlFor="assign-to">
                  <strong>Assign to</strong>
                </label>
              </div>
              <div className="col-11 wd-inside-form-card">
                <input
                  className="form-control"
                  id="assign-to"
                  value="Everyone"
                />
              </div>
              <div className="col-8 wd-inside-form-card">
                <label>
                  <strong>Due</strong>
                </label>
              </div>
              <div className="col-11 wd-inside-form-card">
                <input
                  className="form-control"
                  type="date"
                  value={assignment?.due}
                />
              </div>
              <div className="col-11 wd-inside-form-card">
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="available-from">
                      <strong>Available from</strong>
                    </label>
                  </div>
                  <div className="col-6">
                    <label htmlFor="until">
                      <strong>Until</strong>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-11 wd-inside-form-bottom">
                <div className="row">
                  <div className="col-6">
                    <input
                      className="form-control"
                      type="date"
                      id="available-from"
                      value={assignment?.start}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      className="form-control"
                      type="date"
                      id="until"
                      value={assignment?.due}
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-secondary form-control">
                  <FaPlusCircle />
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <p className="wd-inline-align">
          <input
            type="checkbox"
            value="NOTIFYUSERS"
            name="notify-users"
            id="notify-users"
          />
          <label htmlFor="notify-users">
            &nbsp; Notify users that this content has changed
          </label>
          <span>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
              <button className="wd-standard-button">Cancel</button>
            </Link>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
              <button onClick={handleSave} className="wd-red-button">
                Save
              </button>
            </Link>
          </span>
        </p>
        <br />
      </div>
    </>
  );
}
export default AssignmentEditor;
