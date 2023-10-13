import React from 'react'
import profile from './images/profile.jpg';
import chat from './images/chat.png';
import calendar from './images/calendar.png';
import notify from './images/notify.png';

const MainSectionNav = () => {
  return (
    <div>
        <section className="flex justify-end items-center h-10 bg-white">
            <div className="flex">
                <div className="flex px-2 text-xs"><p>Dec 01 2022 | 10:00 AM</p><span className="pl-2 w-7"><img src={calendar} alt=""/></span></div>
                <div className="px-2 w-10"><img src={chat} alt=""/></div>
                <div className="px-2 w-8"><img src={notify} alt=""/></div>
            </div>

            <div className="flex px-2">

                <div className="flex flex-col items-end px-2">
                    <p className="font-bold text-xs">Ezio Auditore</p>    
                    <p className="text-sm">Admin</p>
                </div>

                <div>
                    <img className="w-10 rounded-full" src={profile} alt="" />
                </div>
            </div>

        </section>
    </div>
  )
}

export default MainSectionNav