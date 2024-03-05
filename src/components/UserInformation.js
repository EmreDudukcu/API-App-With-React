import React from "react";
import { useState } from "react";
import Sort from "./Sort";

function UserInformation({ users }) {
  //A state was defined to hold the data received from the input for filtering.
  const [filterText, setFilterText] = useState("");

  //A state was defined to hold the filtered data.
  const [filtered, setFiltered] = useState([]);

  /*A function that sets the value entered in the input 
  and allows input value entry.*/
  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
  };

  return (
    <div>
      <div>
        <div>You can search by first name, last name, and phone number.</div>
        <input
          placeholder="Filter User"
          value={filterText}
          onChange={handleFilterTextChange} //It works when there is data entry.
        />

        <Sort
          /*Props were passed to the Sort function for use inside.*/ users={
            users
          }
          setFiltered={setFiltered}
          filterText={filterText}
        />

        <div
          /*Cards were created for each user using Bootstrap.*/
          className="card-div"
        >
          {filtered.map((user, i) => (
            <span key={`${user.firstName}-${user.lastName}`}>
              <div key={i} className="card  " style={{ width: "18rem" }}>
                <img src={user.photo} className="card-img-top" alt="..." />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Name Surname: {user.firstName} {user.lastName}
                  </li>
                  <li className="list-group-item">
                    Age: {user.age} Blood Group: {user.bloodGroup}
                  </li>
                  <li className="list-group-item">
                    Height: {user.height} Weight: {user.weight}
                  </li>
                  <li className="list-group-item">
                    Phone Number: {user.phoneNumber}
                  </li>
                </ul>
              </div>
            </span>
          ))}
        </div>
        <p>Total Users ({filtered.length})</p>
      </div>
    </div>
  );
}

export default UserInformation;
