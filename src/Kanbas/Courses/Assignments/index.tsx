import React from "react";
import {
  FaCheckCircle,
  FaEllipsisV,
  FaPlusCircle,
  FaPencilAlt,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <>
      <p className="wd-inline-align">
        <input placeholder="Search for Assignments" />
        <span>
          <button className="wd-standard-button">+ Group</button>
          <button className="wd-red-button">+ Assignment</button>
          <button className="wd-standard-button">
            <FaEllipsisV />
          </button>
        </span>
      </p>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-1" />
            <FaEllipsisV className="me-1" />
            <strong>🞃 Assignments</strong>
            <span className="float-end">
              <button className="wd-assignment-button">40% of Total</button>
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <div className="d-flex">
                  <div className="wd-assignment-item-padding">
                    <FaEllipsisV className="me-2" />
                    <FaEllipsisV className="me-2" />
                  </div>
                  <div className="wd-assignment-item-padding">
                    <FaPencilAlt className="wd-green-pencil" />
                  </div>
                  <div className="flex-fill wd-assignment-text-padding">
                    <h4>
                      <Link
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="wd-assignment-title-link"
                      >
                        {assignment.title}
                      </Link>
                    </h4>
                    <span className="wd-red-link">Multiple Modules</span> | Week
                    starting on {assignment.start} at 12:00 AM|
                    <br />
                    Due {assignment.due} at 11:59 PM | {assignment.points} pts
                  </div>
                  <div className="wd-assignment-item-padding">
                    <FaCheckCircle className="text-success" />
                    <FaEllipsisV className="ms-2" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Assignments;
