import React from 'react';


const Officer =()=> {
  return (
    
      <div className="container">

      <div className="row">
        <h1 className="mt-3">
          Welcome To admin Page
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
                <a href="/movies">แก้ไขรหัสผ่านผู้ใช้</a>
              </li>
              <li className="list-group-item">
                <a href="/admin">แก้ไขชื่อผู้ใช้</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="col-md-10">

        </div>
      </div>
    </div>  
      

    
  )
}

export default Officer;
