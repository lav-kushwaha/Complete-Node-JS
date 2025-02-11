import React from 'react'
import {useState} from 'react'

const EditProfile = ({user}) => {
    const [firstName, setfirstName] = useState(user.firstName);
    const [lastName, setlastName] = useState(user.lastName);
    const [photourl, setPhotourl] = useState(user.photoUrl);
    const [age,setAge] = useState(user.Age);
    const [gender,setGender] = useState(user.Gender);
    const [about,setAbout] = useState(user.about);
    const [error,setError] = useState();

  return user && (
    <div className="mt-10 mb-20 flex items-center justify-center">
      <div className="card bg-base-300 w-96 shadow-xl p-10">
        <h2 className="text-center font-bold">Edit Profile</h2>
        <div className="flex justify-center">
          <form className="w-full">
            <div className="mb-4">
              <label
                htmlFor="first name"
                className="block text-sm font-medium text-white-200"
              >
                First Name
              </label>
              <input
                id="first name"
                type="text"
                value={firstName}
                onChange={(e)=>setfirstName(e.target.value)}
                placeholder="Enter your first name"
                className="input input-bordered w-full mt-2 p-3"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="last name"
                className="block text-sm font-medium text-white-200"
              >
                Last Name
              </label>
              <input
                id="last name"
                type="text"
                value={lastName}
                onChange={(e)=>setlastName(e.target.value)}
                placeholder="Enter your last name"
                className="input input-bordered w-full mt-2 p-3"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="photo url"
                className="block text-sm font-medium text-white-200"
              >
                Photo Url
              </label>
              <input
                id="photo url"
                type="text"
                value={photourl}
                onChange={(e)=>setPhotourl(e.target.value)}
                placeholder="Enter your photo Url"
                className="input input-bordered w-full mt-2 p-3"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="Age"
                className="block text-sm font-medium text-white-200"
              >
               Age
              </label>
              <input
                id="Age"
                type="number"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
                placeholder="Enter Your Age"
                className="input input-bordered w-full mt-2 p-3"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="Gender"
                className="block text-sm font-medium text-white-200"
              >
               Gender
              </label>
              <input
                id="Gender"
                type="text"
                value={gender}
                onChange={(e)=>setGender(e.target.value)}
                placeholder="Enter Your Gender"
                className="input input-bordered w-full mt-2 p-3"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-white-200"
              >
               About
              </label>
              <input
                id="about"
                type="text"
                value={about}
                onChange={(e)=>setAbout(e.target.value)}
                placeholder="Enter Your About"
                className="input input-bordered w-full mt-2 p-3"
                required
              />
            </div>
            
            <span className="text-red-400">{error}</span>
            <div className="card-actions justify-center my-4 mt-10">
              <button type="button" className="btn btn-primary w-full p-3">
                Profile Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProfile;
