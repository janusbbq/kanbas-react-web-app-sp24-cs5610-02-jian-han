import React, { useEffect, useState } from "react";
import * as client from "./client";
import { useNavigate, Link } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState({ username: "", password: "", 
    firstName: "", lastName: "", dob: "", email: "", role: "USER" });
  
  const navigate = useNavigate();
  
  const fetchProfile = async () => {
    try {
      const profile = await client.profile();
      setProfile(profile);
      console.log(profile);
    } catch (e) {
      console.log(e);
      alert('No Active User found!');
      navigate("/Kanbas/Account/login");
    }
  };

  const logout = async () => {
    await client.logoutUser();
    navigate("/Kanbas/Account/login");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const saveProfile = async () => {
    const resp = await client.updateUser(profile);
    console.log("Saved profile", resp)
    if (resp){
     alert('Profile Saved Successfully!!') 
    }
  };

  return (
    <div>
      <div className="card mx-auto my-auto text-center" style={{width: "50%"}}>
        <div className="card-body">
        <div className="d-flex justify-content-between">
          <h2 className="card-title text-success">Profile</h2>
          <button className="btn btn-success m-2 w-25" onClick={saveProfile}>
            Save
          </button>
        </div>
        <Link to="/Kanbas/Account/Admin/Users"
          className="btn btn-warning w-100 m-2">
          View All Users
        </Link>
      {profile && (
          <div>
          <p className="card-text text-primary"><b>Personalize your profile</b></p>
          <input className="form-control w-100 m-2" value={profile.username} onChange={(e) =>
            setProfile({ ...profile, username: e.target.value })} placeholder="Enter Your Username"/>
          <input className="form-control w-100 m-2" value={profile.password} onChange={(e) =>
            setProfile({ ...profile, password: e.target.value })} placeholder="Enter Your Password"/>
          <input className="form-control w-100 m-2" value={profile.firstName} onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })} placeholder="Enter Your First Name"/>
          <input className="form-control w-100 m-2" value={profile.lastName} onChange={(e) =>
            setProfile({ ...profile, lastName: e.target.value })} placeholder="Enter Your Last Name"/>
          <input className="form-control w-100 m-2" value={profile.dob} type="date" onChange={(e) =>
            setProfile({ ...profile, dob: e.target.value })}/>
          <input className="form-control w-100 m-2" value={profile.email} onChange={(e) =>
            setProfile({ ...profile, email: e.target.value })} placeholder="Enter Your Email"/>
          
          <select className="form-select w-100 m-2" onChange={(e) =>
              setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-danger w-100 m-2" onClick={logout}>Sign Out</button>
          </div>
        </div>
        // <div>
        //   <input className="form-control w-50 m-2" value={profile.username} onChange={(e) =>
        //     setProfile({ ...profile, username: e.target.value })}/>
        //   <input className="form-control w-50 m-2" value={profile.password} onChange={(e) =>
        //     setProfile({ ...profile, password: e.target.value })}/>
        //   <input className="form-control w-50 m-2" value={profile.firstName} onChange={(e) =>
        //     setProfile({ ...profile, firstName: e.target.value })}/>
        //   <input className="form-control w-50 m-2" value={profile.lastName} onChange={(e) =>
        //     setProfile({ ...profile, lastName: e.target.value })}/>
        //   <input className="form-control w-50 m-2" value={profile.dob} type="date" onChange={(e) =>
        //     setProfile({ ...profile, dob: e.target.value })}/>
        //   <input className="form-control w-50 m-2" value={profile.email} onChange={(e) =>
        //     setProfile({ ...profile, email: e.target.value })}/>
        //   <select className="form-select w-50 m-2" onChange={(e) =>
        //       setProfile({ ...profile, role: e.target.value })}>
        //     <option value="USER">User</option>
        //     <option value="ADMIN">Admin</option>
        //     <option value="FACULTY">Faculty</option>
        //     <option value="STUDENT">Student</option>
        //   </select>
        //   <button className="btn btn-danger" onClick={logout}>Sign Out</button>
        // </div>
      )}
      </div>
      </div>
    </div>
  );
}