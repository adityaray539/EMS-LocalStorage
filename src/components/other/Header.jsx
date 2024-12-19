// import React from 'react'

import { setLocalStorage } from "../../utils/localStorage";

// import { useState } from "react";

const Header = (props) => {
  // console.log(data)

  // const [userName, setUserName] = useState('')

  // if(!data){
  //   setUserName('Admin')
  // }
  // else{
  //   setUserName(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload()
    // console.log(props.changeUser );
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="txt-3xl font-semibold">
          {props.firstName || "User"} 🤗
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
