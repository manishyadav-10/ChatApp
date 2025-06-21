import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'
import { useContext } from 'react'
import { ChatContext } from '../../context/ChatContex'

const HomePage = () => {
    
    // crating slected variable 
const {selectedUser} = useContext(ChatContext)

  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
      <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl
      overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser ? 
        'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'
      }`}>
        <Sidebar  />
        <ChatContainer  />
        <RightSidebar  />
      </div>
      <footer className="fixed bottom-0 right-0 px-4 py-2 bg-transparent text-[10px] sm:text-sm md:text-base text-gray-700 sm:text-gray-700 font-medium flex  items-center gap-1 ">
  <p className="flex flex-wrap items-center gap-1 text-center">
          &copy; 2025 Manish Yadav | Real-Time Chat App <img src="https://img.icons8.com/ios-filled/20/ffffff/chat--v1.png" alt="chat icon" className="w-4 h-4 inline" /> | Built with using MERN Stack and Socket.io. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default HomePage
