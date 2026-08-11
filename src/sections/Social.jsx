import React from 'react'
import GithubCard from '../components/GithubCard'

import GithubIcon from "../assets/icons/github.png";
import LeetCodeIcon from "../assets/icons/leetcode.png";
import DribbleIcon from "../assets/icons/dribble.png";


const Social = () => {
  return (
    <div className='px-10 py-20 flex flex-col gap-5'>
      <h1 className=' text-[30px] text-white/70 '>My Work On Other Platforms </h1>

      <div className="flex items-center gap-2">

        <img src={GithubIcon} alt="GitHub"
          className=" invert h-6 w-6 object-contain"/>

        <p className="text-sm">
          GitHub
        </p>

      </div>
      <GithubCard />

      <div className="flex items-center gap-2">

        <img src={LeetCodeIcon} alt="GitHub"
          className=" h-6 w-6 object-contain"/>

        <p className="text-sm">
          LeetCode  
        </p>
    
        <p className="text-sm ml-10 text-white/40">Working...</p>
      </div>

      <div className="flex items-center gap-2">

        <img src={DribbleIcon} alt="GitHub"
          className=" h-6 w-6 object-contain"/>

        <p className="text-sm">
          Dribble    
        </p > 

        <p className="text-sm ml-14 text-white/40">Working...</p>
      </div>
    </div>
  )
}

export default Social
