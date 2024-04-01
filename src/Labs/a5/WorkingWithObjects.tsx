import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: 'A101', name: "Server Side Scripting",
        description: "Learn Server Side Scripting in NodeJS",
        course: "Full Stack Development"
      });
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
    const MODULE_URL = "http://localhost:4000/a5/module"
    
    const fetchAssignment = async () => {
      const response = await axios.get(`${ASSIGNMENT_URL}`);
      setAssignment(response.data);
    };
    
    const updateTitle = async () => {
      const response = await axios
        .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
      setAssignment(response.data);
    };
    
    useEffect(() => {
      fetchAssignment();
    }, []);  

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <div className="d-flex">
        <input type="text" className="form-control w-25 m-2"
            onChange={(e) => setAssignment({ ...assignment,
                title: e.target.value })}
            value={assignment.title}/>

        <a className="btn btn-primary m-2" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
            Update Title
        </a>
        <button className="btn btn-success m-2" onClick={updateTitle} >
          Update Title to: {assignment.title}
        </button>
        <button className="btn btn-warning m-2" onClick={fetchAssignment} >
          Fetch Assignment
        </button>
      </div>
      <div className="d-flex">
        <input type="number" className="form-control w-25 m-2"
            onChange={(e) => setAssignment({ ...assignment,
                score: e.target.valueAsNumber })}
            value={assignment.score}/>

        <a className="btn btn-warning m-2" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
            Update Score
        </a>
      </div>
      <div className="d-flex">
        <input type="checkbox" className="m-2"
            onChange={(e) => setAssignment({ ...assignment,
                completed: e.target.checked })} checked={assignment.completed}/>

        <a className="btn btn-success m-2" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
            Mark Done?
        </a>
      </div>
      <br/>
      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary m-2" href="http://localhost:4000/a5/assignment">
        Get Assignment
      </a>
      <a className="btn btn-primary m-2" href="http://localhost:4000/a5/module">
        Get Module
      </a>
      <br/>
      <h4>Retrieving Properties</h4>
      <a className="btn btn-success m-2" href="http://localhost:4000/a5/assignment/title">
        Get Assignment Title
      </a>
      <a className="btn btn-success m-2" href="http://localhost:4000/a5/module/name">
        Get Module Name
      </a>
      <br/>
      <h4>Module Object</h4>
      <div className="d-flex">
        <input type="text" className="form-control w-25 m-2"
            onChange={(e) => setModule({ ...module,
                name: e.target.value })}
            value={module.name}/>

        <a className="btn btn-primary m-2" href={`${MODULE_URL}/name/${module.name}`}>
            Update Module Name
        </a>
      </div>
      <div className="d-flex">
        <input type="text" className="form-control w-50 m-2"
            onChange={(e) => setModule({ ...module,
                description: e.target.value })}
            value={module.description}/>

        <a className="btn btn-danger m-2" href={`${MODULE_URL}/description/${module.description}`}>
            Update Module Description
        </a>
      </div>
    </div>
  );
}

export default WorkingWithObjects;