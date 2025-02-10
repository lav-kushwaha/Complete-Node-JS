import React, { useState } from 'react'

const UserCard = ({data}) => {
    console.log(data);
    const {firstName,lastName,photoUrl,about,age,gender} = data;
  return (
<div className="card bg-base-200 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={data.photoUrl}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{firstName + " "+ lastName}</h2>
    {age && gender && <p>Age:{age} Gender: {gender}</p>}
    <p>{about}</p>
    <div className="card-actions">
      <button className="btn btn-primary mr-7 my-4">Ignore</button>
      <button className="btn btn-secondary my-4">Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard