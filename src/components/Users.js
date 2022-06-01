import { useEffect, useState } from "react";

function Users() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((apidata) => setUsers(apidata.data))
      .catch((err) => console.log(err));
  }, []);
  //console.log(Users)
  return (
    <div className="text-center container">
      <p className="display-2 text-secondary">Userdata</p>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>FirstName</th>
            <th>Lastname</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((userObj) => (
            <tr key={userObj.id}>
              <td>{userObj.id}</td>
              <td>{userObj.email}</td>
              <td>{userObj.first_name}</td>
              <td>{userObj.last_name}</td>
              <td>
                <img src={userObj.avatar} alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {users.map((userObj) => (
          <div
            style={{
              margin: `50px`,
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `center`,
            }}
          >
            <div
              className="card mb-3 container mt-4 box grid "
              style={{
                width: "15rem",
                flexDirection: "row",
                display: "flex",
                flexWrap: "wrap",
              }}
              key={userObj.id}
            >
              <div className="card-body">
                <p>{userObj.id}</p>
                <p>{userObj.email}</p>
                <p>{userObj.first_name}</p>
                <p>{userObj.last_name}</p>
                <p>
                  <img src={userObj.avatar} alt="" />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
