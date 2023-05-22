import { useEffect, useState } from "react";
import userService from "../../services/userServiceUsingHttpClient";

interface UserData {
  id: number;
  name: string;
}

function FetchingWithAxios() {
  const [usersData, setUsersData] = useState<UserData[]>([]);
  const [usersError, setUsersErrorData] = useState<string>("");

  useEffect(() => {
    const { request, cancel } = userService.getAll<UserData>();

    request
      .then((response) => {
        setUsersData(response.data);
      })
      .catch((err) => {
        setUsersErrorData(err.message);
      });

    return () => cancel();
  }, []);

  //delete
  const deleteUser = (user: UserData) => {
    const originalUsers = [...usersData];
    setUsersData(usersData.filter((item) => item.id !== user.id));

    userService.delete(user.id).catch((error) => {
      setUsersErrorData(error.message);
      setUsersData(originalUsers);
    });
  };

  //post - add user
  const addUser = () => {
    const originalUsers = [...usersData];
    const newUser = { id: 0, name: "Dany" };

    userService
      .Add(newUser)
      .then(({ data }) => setUsersData([data, ...usersData]))
      .catch((error) => {
        setUsersErrorData(error.message);
        setUsersData(originalUsers);
      });
  };

  //patch - updating user
  const updateUser = (user: UserData) => {
    const originalUsers = [...usersData];

    const updatedUser = { ...user, name: user.name + "!!" };

    setUsersData(
      usersData.map((item) => (item.id === user.id ? updatedUser : item))
    );

    userService.Update(user).catch((error) => {
      setUsersErrorData(error.message);
      setUsersData(originalUsers);
    });
  };

  return (
    <>
      {usersError && <p className="text-danger">{usersError}</p>}
      <ul className="list-group">
        <button className="btn btn-primary mb-3" onClick={addUser}>
          Add
        </button>
        {usersData.map((element) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={element.id}
          >
            {element.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(element)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(element)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FetchingWithAxios;
