import { UserContext } from "./UserContext";
import { useUsers } from "../hooks/useUsers"

export const UserProvider = ({children}) => {

    const { users, userSelected, initialUserForm, visibleForm, errors,
            handlerAddUser, handlerRemoveUser, handlerUserSelectedForm, handlerOpenForm, handlerCloseForm, getUsers } = useUsers();

    return (
        <UserContext.Provider value={
            {
                users, userSelected, initialUserForm, visibleForm, errors,
                handlerAddUser, handlerRemoveUser, handlerUserSelectedForm, handlerOpenForm, handlerCloseForm, getUsers   
            }
        }>
            {children}
        </UserContext.Provider>
    );
}