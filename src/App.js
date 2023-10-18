import React, {useState} from "react";
import Card from './components/Card'
import User from './components/User'
const FACE_URL = 'https://api.dicebear.com/7.x/croodles/svg';

const userList = [
  {
    username: 'Rohit',
    face: `${FACE_URL}/rohit.svg`,
    status: 'Pending',
  },
  {
    username: 'Mohit',
    face: `${FACE_URL}/mohit.svg`,
    status: 'Pending',
  },
];

function App() {

  const  [users, setUsers]= useState(userList);

  const verifyHandler = (index) => {
     //bad way
    //  user.status = 'Active';
    // const user = users[index];
    // console.log(user);
    // user.status = 'Active';
    // setUsers(users);


                   //right way

    const temUsers = [...users];   //copied object from array users;
    const temUser= temUsers[index];
    const userObj = { ...temUser, status : 'Active'};  //updated object
    temUsers[index] = userObj;
    setUsers(temUsers);

  };

  return (
    <div className="main">
      {
        users.map((user, index)=>(
            <Card key={index}>
              <User face={user.face} 
                    username={user.username}
                    status={user.status}
                    index={index} 
                    giveMeIndex = {verifyHandler}
              />
            </Card>
          ))
      }
    </div>
  )
}


export default App;
