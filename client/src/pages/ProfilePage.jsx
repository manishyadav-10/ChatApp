import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const ProfilePage = () => {

  const {authUser,updateProfile} = useContext(AuthContext);

const [selectedImg,setSelectedImg] = useState(null)
const navigate = useNavigate();
const [name,setName] = useState(authUser.fullName)
const [bio,setBio] = useState(authUser.bio)


const handleSubmit = async (e)=>{
         e.preventDefault();
         if(!selectedImg){
          await updateProfile({fullName:name,bio});
           navigate('/');
           return;
         }
         const render = new FileReader();
         render.readAsDataURL(selectedImg);
         render.onload = async ()=>{
          const base64Image = render.result;
          await updateProfile({profilePic:base64Image,fullName:name,bio})
          navigate('/');
         }
         
}

  return (
    <div className='min-h-screen bg-cover bg-no-repeat flex items-center
    justify-center'>
      <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2
      border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>
        <form  onSubmit={handleSubmit} className='flex flex-col gap-5 p-10 flex-1' >
          <h3 className='text-lg'>Profile Details</h3>
          <label htmlFor="avatar" className='flex items-center gap-3 cursor-pointer'>
          <input onChange={(e)=>setSelectedImg(e.target.files[0])} type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden/>
          <img src={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon} alt="" 
          className={`h-12 w-12 ${selectedImg && 
            'rounded-full'}`} />
            Upload profile image
          </label>
          <input onChange={(e)=>setName(e.target.value)} value={name}
          type="text" required placeholder='Your Name' className='p-2 border border-gray-500 rounded-md bg-gray-800 text-white placeholder-gray-400  focus:outline-none focus:ring-2
          focus:ring-violet-500' />
          <textarea onChange={(e)=>setBio(e.target.value)} value={bio}
           placeholder='Write profile bio' required className='p-2 border border-gray-500 rounded-md bg-gray-800 text-white placeholder-gray-400  focus:outline-none focus:ring-2
          focus:ring-violet-500' rows={4}></textarea>
          <button type='submit' className='bg-gradient-to-r from-purple-400
          to-violet-600 text-white p-2 rounded-full text-lg cursor-pointer'>
            Save
          </button>
        </form>
        <img  className={`max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10 ${selectedImg && 'rounded-full'}`} 
        src={ authUser?.profilePic || assets.logo_icon} alt="" />
      </div>
      <footer className="fixed bottom-0 right-0 px-4 py-2 bg-transparent text-[10px] sm:text-sm md:text-base text-gray-700 sm:text-gray-700 font-medium flex  items-center gap-1 ">
  <p className="flex flex-wrap items-center gap-1 text-center">
          &copy; 2025 Manish Yadav | Real-Time Chat App <img src="https://img.icons8.com/ios-filled/20/ffffff/chat--v1.png" alt="chat icon" className="w-4 h-4 inline" /> | Built with using MERN Stack and Socket.io. All rights reserved.</p>
      </footer>
      
    </div>
  )
}

export default ProfilePage
