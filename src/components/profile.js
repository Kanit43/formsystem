import React from "react";



const Profile = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3">Profile</h1>
        <hr className="mb=3"></hr>
      </div>
      <form>
        <div className=" row g-3">
          <div className=" col-12">
            <label className=" form-label">Name: </label>
            <input type="text" name="name" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">Lastname:</label>
            <input type="text" name="lastname" className="form-control" />
          </div>
          <div className=" col-12">
            <label className=" form-label">Password: </label>
            <input type="text" name="password" className="form-control" />
          </div>
        </div>
        <div>
       
      </div>
        <button type="submit" name="enter" className="btn btn-primary mt-3">
          {" "}
          Save
          {" "}
        </button>
        
        
        
      </form>
    </div>
  );
};

export default Profile;