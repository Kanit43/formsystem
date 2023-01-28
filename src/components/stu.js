import React from 'react';

if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />
}

const Stu =()=> {
  return (
    
      <div className="container">

      <div className="row">
        <h1 className="mt-3">
          Welcome Student
        </h1>
        <hr className="mb=3"></hr>
      </div>

      <div className="row">
        <div className="col-md-2">
          <nav>
            <ul className="list-group">
              <li className="list-group-item">
                <a href="/">แก้ไขข้อมูลผู้ใช้</a>
              </li>
              <li className="list-group-item">
                <a href="/">ทำแบบฟอร์ม</a>
              </li>
              <li className="list-group-item">
                <a href="/">ประวัติการทำรายการ</a>
              </li>
             
            </ul>
          </nav>
        </div>

        <div>
        <div className="container mt-5"></div>
        <h1>Welcome</h1>
        <p>this is the dashboard, if you can see this you're logged in.</p>
        <div><Link to="/profile">Profile</Link> </div>
        <button onClick={() => signOut(auth)} className="btn btn-danger">Sign out</button>
    
    </div>
        

        <div className="col-md-10">

        </div>
      </div>
    </div>  
      

    
  )
}

export default Stu;
