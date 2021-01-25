import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsers,
  deleteUser,
  promoteUser,
} from "../../redux/actions/users";
import StyledLoading from "../StyledComponents/StyledLoading";
import StyledError from "../StyledComponents/StyledError";
import { useHistory } from "react-router-dom";
import { ListUsersBody } from "./AdminUsers_style";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(({ users }) => users.users);
  const user = useSelector(({ users }) => users.user);
  const status = useSelector(({ users }) => users.status);
  const { replace } = useHistory();

  useEffect(() => {
    if (!user?.isAdmin) replace("/");
    dispatch(getAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === "loading") return <StyledLoading />;
  if (status === "failed") return <StyledError />;
  if (users.length === 0) return <StyledError />;

  return (
    <ListUsersBody>
      <h2>All Users</h2>
      <div className="usersCont">
        {users.map((user, i) => {
          return (
            <div key={i} className="users">
              <p className="userName">
                User: {user.givenName} {user.familyName}
              </p>
              <p className="userEmail">Mail: {user.email}</p>
              <p className="userEmail">id: {user.id}</p>
              <p className="userIsAdmin">
                Is admin:{" "}
                {user.isAdmin === undefined ? "unde" : user.isAdmin.toString()}
              </p>
              <div className="buttons">
                <button
                  className="b"
                  onClick={() => dispatch(deleteUser(user.id))}
                >
                  Delete User
                </button>

                <button
                  onClick={() => dispatch(promoteUser(user.id, !user.isAdmin))}
                  className={user.isAdmin ? "bPG" : "bPA"}
                >
                  {user.isAdmin ? (
                    <p>Admin to Guest</p>
                  ) : (
                    <p>Promote to Admin</p>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </ListUsersBody>
  );
};

export default AdminUsers;
