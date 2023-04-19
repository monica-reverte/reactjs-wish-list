



export const Profile = () => {


  return (
    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3xl my-3 font-bold">Profile</h1>
      <div className="mt-3">
        <h2 className="text-2xl">Name:  </h2>
        <h2 className="text-2xl">Email:  </h2>
      </div>
      <div className="mt-3">
        <button className="bg-violet-700 text-white w-full my-2 py-2 rounded">Update Profile</button>
        <button className="bg-violet-700 text-white w-full py-2 rounded">Update Password</button>
        <button  className="bg-violet-700 text-white w-full py-2 rounded">Logout</button>
        <button className="bg-violet-700 text-white w-full py-2 rounded">Delete Account</button>
      </div>
    </div>
  )
}
