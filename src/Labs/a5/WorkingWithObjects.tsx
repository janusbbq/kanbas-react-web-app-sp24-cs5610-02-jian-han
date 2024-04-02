import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: 2,
    name: "NodeJS Module",
    description: "Creating a NodeJS server",
    course: "CS5610",
  });
  const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;
  const MODULE_URL = `${API_BASE}/a5/module`;
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);
  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <h3>Modifying Properties</h3>
      <input
        className="lab-input lab-input-space lab-input-corners"
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
        value={assignment.title}
        type="text"
      />
      <button className="btn btn-primary wd-button-space" onClick={updateTitle}>
        Update Title to: {assignment.title}
      </button>
      <button
        className="btn btn-primary wd-button-space"
        onClick={fetchAssignment}
      >
        Fetch Assignment
      </button>
      <br />
      <a
        className="btn btn-primary wd-button-space"
        href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <input
        type="text"
        className="lab-input lab-input-space lab-input-corners"
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
        value={assignment.title}
      />
      <br />
      <a
        className="btn btn-primary wd-button-space"
        href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <input
        type="number"
        className="lab-input lab-input-space lab-input-corners"
        onChange={(e) =>
          setAssignment({
            ...assignment,
            score: parseInt(e.target.value),
          })
        }
        value={assignment.score}
      />
      <br />
      <a
        className="btn btn-primary wd-button-space"
        href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>
      <input
        type="checkbox"
        onChange={() =>
          setAssignment({
            ...assignment,
            completed: !assignment.completed,
          })
        }
        checked={assignment.completed}
      />
      <h4>Retrieving Objects</h4>
      <a
        className="btn btn-primary wd-button-space"
        href="http://localhost:4000/a5/assignment"
      >
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        className="btn btn-primary wd-button-space"
        href="http://localhost:4000/a5/assignment/title"
      >
        Get Title
      </a>
      <h4>Retrieving Module Object</h4>
      <a
        className="btn btn-primary wd-button-space"
        href="http://localhost:4000/a5/module"
      >
        Get Module
      </a>
      <h4>Retrieving Module Name</h4>
      <a
        className="btn btn-primary wd-button-space"
        href="http://localhost:4000/a5/module/name"
      >
        Get Module Name
      </a>
      <h4>Modifying Module Properties</h4>
      <a
        className="btn btn-primary wd-button-space"
        href={`${MODULE_URL}/name/${module.name}`}
      >
        Update Module Name
      </a>
      <input
        type="text"
        className="lab-input lab-input-space lab-input-corners"
        onChange={(e) =>
          setModule({
            ...module,
            name: e.target.value,
          })
        }
        value={module.name}
      />
      <br />
      <a
        className="btn btn-primary wd-button-space"
        href={`${MODULE_URL}/description/${module.description}`}
      >
        Update Module Description
      </a>
      <input
        type="text"
        className="lab-input lab-input-space lab-input-corners"
        onChange={(e) =>
          setModule({
            ...module,
            description: e.target.value,
          })
        }
        value={module.description}
      />
    </div>
  );
}
export default WorkingWithObjects;
