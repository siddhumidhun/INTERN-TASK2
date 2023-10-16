import {React,useState} from 'react';
import taxi from './images/taxi.png';
import side1 from './images/s1.png';
import side2 from './images/s2.png';
import side3 from './images/s3.png';
import side4 from './images/s4.png';
import side5 from './images/s5.png';
import side6 from './images/s6.png';
import side7 from './images/s7.png';
import side8 from './images/s8.png';
import side9 from './images/s9.png';
import side10 from './images/s10.png';
import side11 from './images/s11.png';
import side12 from './images/s12.png';
import side13 from './images/s13.png';
import side14 from './images/s14.png';
import log from './images/log.png';
import logout from './images/logout.png';
const Sidebar = () => {

  const [menu,setMenu] = useState('show');

  const handleMenu = () =>{
    if(menu === 'show'){
      setMenu('hide');
    }
    else{
      setMenu('show')
    }
  }

  console.log(menu);


  const navItems = [{
    img:side1,
    name:"Dashboard",
    color:"flex items-center pl-1 h-10  hover:cursor-pointer hover:bg-violet-400 text-violet-700 "
  },
  {
    img:side2,
    name:"Live Tracking",
    color:"flex items-center pl-1  h-10 hover:cursor-pointer hover:bg-blue-100 text-blue-400"
  },
  {
    img:side3,
    name:"Driver Management",
    color:"flex items-center pl-1 h-10 hover:cursor-pointer hover:bg-teal-100 text-teal-400"
  },
  {
    img:side4,
    name:"Vehicle Management",
    color:"flex items-center pl-1 h-10 hover:cursor-pointer hover:bg-teal-300 text-teal-600"
  },
  {
    img:side5,
    name:"Regular rides",
    color:"flex items-center pl-1 h-10 hover:cursor-pointer hover:bg-lime-100 text-lime-400"
  },
  {
    img:side6,
    name:"Office Rides",
    color:"flex items-center pl-1 h-10 hover:cursor-pointer hover:bg-lime-200 text-lime-500"
  },
  {
    img:side7,
    name:"Employees",
    color:"flex items-center pl-1 h-10 hover:cursor-pointer hover:bg-orange-100 text-orange-400"
  },
  {
    img:side8,
    name:"Clients",
    color:"flex items-center pl-1 h-10 hover:cursor-pointer hover:bg-red-200 text-red-500"
  },
  {
    img:side9,
    name:"Trip History",
    color:"flex items-center pl-1 h-10 hover:cursor-pointer hover:bg-fuchsia-400 text-fuchsia-700"
  },
  {
    img:side10,
    name:"Payments",
    color:"flex items-center pl-1 h-10 hover:cursor-pointer hover:bg-violet-300 text-violet-600"
  },
  {
    img:side11,
    name:"Reports",
    color:"flex items-center pl-1 h-10 hover:cursor-pointer hover:bg-pink-300 text-pink-600"},
  {
    img:side12,
    name:"Fare Database",
    color:"flex items-center pl-1 h-10 hover:cursor-pointer hover:bg-yellow-400 text-yellow-700"
  },
  {
    img:side13,
    name:"Support Tickets",
    color:"flex items-center pl-1 h-10 hover:cursor-pointer hover:bg-amber-200 text-amber-500"
  },
  {
    img:side14,
    name:"Settings",
    color:"flex items-center  pl-1 h-10 hover:cursor-pointer hover:bg-sky-400 text-sky-700"
  }
  
]

  return (
    <div className="h-screen h-screen bg-white">
      
      <section className="flex items-center justify-center h-10">
          <img className="w-10" src={taxi} alt="logo" />
          {menu==='show'?<p className="font-black whitespace-nowrap text-[12px]">நம்ம ஊரு டாக்ஸி</p>:<span/>}
      </section>

      <section>
      <div className={`flex items-center justify-end h-10  hover:cursor-pointer ${menu === 'hide' ? 'w-16' : 'w-48'}`}>
          {menu==='show'?<span onClick={()=>{handleMenu()}}>
          <img classname="w-16" src={log} alt="log"/>
            </span>:<span onClick={()=>{handleMenu()}}>
              <div className="relative">
                <img className="pr-5 w-12" src={logout} alt="log" />
              </div>
            </span>}
        </div>
        {navItems.map((list)=>(
         <div className={list.color} onClick={() => { console.log(list.name); }} >
            <img className="w-10 px-2 custom-border-radius" src={list.img} alt={list.name} />
            {menu==='show'?<p className="px-2 font-bold text-xs whitespace-nowrap">{list.name}</p>:<span/>}
          </div>
        ))}

      </section>

    </div>
  )
}

export default Sidebar