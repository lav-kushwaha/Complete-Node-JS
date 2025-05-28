import React, { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl || "");
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about || "");
  const [skills, setSkills] = useState(user.skills || "");
  const [error, setError] = useState("");
  const [showtoast, setShowtoast] = useState(false);
  const dispatch = useDispatch();

  const SaveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
          skills,
        },
        {
          withCredentials: true,
        }
      );

      // Updating store data and user data.
      dispatch(addUser(res?.data?.data));

      //showing toast for saved profile.
      setShowtoast(true);

      // Clear update message after 3 seconds
      setTimeout(() => setShowtoast(false), 3000);
    } catch (err) {
      setError(err?.response?.data);
      // Clear error message after 3 seconds
      setTimeout(() => setError(""), 5000);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-5 gap-10">
        <div className="mb-20 flex items-center justify-center">
          <div className="card bg-base-300 w-full md:w-96 shadow-xl p-10">
            <h2 className="text-center font-bold text-xl mb-4">Edit Profile</h2>
            <div className="flex justify-center">
              <form className="w-full">
                {/* First Name */}
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-white-200"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your first name"
                    className="input input-bordered w-full mt-2 p-3"
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-white-200"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter your last name"
                    className="input input-bordered w-full mt-2 p-3"
                    required
                  />
                </div>

                {/* Photo URL */}
                <div className="mb-4">
                  <label
                    htmlFor="photoUrl"
                    className="block text-sm font-medium text-white-200"
                  >
                    Photo URL
                  </label>
                  <input
                    id="photoUrl"
                    type="text"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    placeholder="Enter your photo URL"
                    className="input input-bordered w-full mt-2 p-3"
                    required
                  />
                </div>

                {/* Age */}
                <div className="mb-4">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-white-200"
                  >
                    Age
                  </label>
                  <input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter Your Age"
                    className="input input-bordered w-full mt-2 p-3"
                    required
                  />
                </div>

                {/* Gender Dropdown */}
                <div className="mb-4">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-white-200"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="input input-bordered w-full mt-2"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {/* About */}
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
                    onChange={(e) => setAbout(e.target.value)}
                    placeholder="Tell us about yourself"
                    className="input input-bordered w-full mt-2 p-3"
                    required
                  />
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <label
                    htmlFor="skills"
                    className="block text-sm font-medium text-white-200"
                  >
                    Skills
                  </label>
                  <input
                    id="skills"
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="Enter your skills!"
                    className="input input-bordered w-full mt-2 p-3"
                    required
                  />
                </div>

                {/* Error & Update Messages */}
                {error && <span className="text-red-400">{error}</span>}

                {/* Save Button */}
                <div className="card-actions justify-center my-4 mt-10">
                  <button
                    type="button"
                    className="btn btn-primary w-full p-3"
                    onClick={SaveProfile}
                  >
                    Save Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mb-5">
          {/* User Preview */}
          <UserCard
            user={{
              firstName,
              lastName,
              photoUrl,
              about,
              age,
              gender,
              about,
              skills,
            }}
          />
        </div>
      </div>
      {showtoast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile Saved Successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
