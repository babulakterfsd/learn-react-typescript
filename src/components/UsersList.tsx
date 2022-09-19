import { userListType } from '../types/Global.types';

type UserListProps<T> = {
  currentUserList: T[];
  onClick: (user: T) => void;
};

const UsersList = <T extends userListType>({ currentUserList, onClick }: UserListProps<T>) => {
  return (
    <div>
      <p>This is the user list</p>
      {currentUserList.map((user, index) => (
        <div key={index} onClick={() => onClick(user)}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
