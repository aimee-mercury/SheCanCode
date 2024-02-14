import React, {useState} from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import Header from './Header'
import Sidebar from './Siderbar'
import { Link } from 'react-router-dom';
import './Dashboard.css'

function Dashboard() {

    const data = [
        {
          name: 'Monday',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Tuesday',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Wednesday',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Thusday',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Friday',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Saturday',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Sunday',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

      const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

      const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
      }
    
      return (
        <>
        <Header OpenSidebar={OpenSidebar}/>
         <div className='dashboard-container'>
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <main className='main-container'  data-aos="fade-up" data-aos-duration={2000}>
        <div className='main-title'>
            <h3>Dashboard</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                <Link to='/members' className='dashboard-landing-links'><h3>USERS</h3></Link>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h2>900</h2>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>EMPLOYEES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h2>69</h2>
            </div>
            <div className='card'>
                <div className='card-inner'>
                <Link to='/books' className='dashboard-landing-links'><h3>BOOKS</h3></Link>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h2>33,479</h2>
            </div>
            <div className='card'>
                <div className='card-inner'>
                <Link to='/finance' className='dashboard-landing-links'><h3>INCOME</h3></Link>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h2>$4,000</h2>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#D0B999" />
                <Bar dataKey="uv" fill="#000" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#D0B999" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#000" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
    </div>
    </>
  )
}

export default Dashboard
