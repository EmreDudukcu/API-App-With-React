import axios from "axios"; //Axios was installed and imported to make requests.

/* The useState and useEffect hooks are imported to manage and hold
 the data we receive from the API, and to manage their states.*/
import { useState, useEffect } from "react";
import UserInformation from "./UserInformation";

function Users() {
  /* Users state is defined to hold an empty object
   for storing data retrieved from the API.*/
  const [users, setUsers] = useState([{}]);

  /* Axios request was made and the result was assigned to the state.
   useEffect was used without specifying any dependencies to make it
   run only in the render phase.*/
  useEffect(() => {
    axios("https://dummyjson.com/users")
      .then((response) => {
        setUsers(
          response.data.users.map((user, i) => ({
            firstName: user.firstName,
            photo: user.image,
            lastName: user.lastName,
            age: user.age,
            bloodGroup: user.bloodGroup,
            height: user.height,
            weight: user.weight,
            phoneNumber: user.phone,
          }))
        );
      })

      /*Show the error in the console in case of an error and
      send an alert to the screen.*/
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("Something went wrong!");
      });
  }, []);

  /*The users state is passed as a prop to be used inside
   the UserInformation component.*/
  return (
    <div>
      <UserInformation users={users} />
    </div>
  );
}

export default Users;
