import React from 'react'

const User = ({face,username,status,index,giveMeIndex}) => {

    return(
        <>
            <div className="avatar">
                <img src={ face } alt={ username }></img>
            </div>
            <div className="avatar-info">
                <div>
                    <span className="username">{username}</span>&nbsp; || &nbsp;
                    <span className="status-lable">{status}</span>
                </div>
            <br></br>
            <button className="btn" onClick={() => giveMeIndex(index) }>Verify</button>
            </div>
       </>
    )

}

export default User;