import React from 'react'
import Navbar from "../components/navbar"
import Hero from "../components/Hero"
import HomeCard from "../components/Homecard"
import JobListings from "../components/JobListings"
import ViewAllJobs from '../components/ViewAllJobs'


const HomePage = () => {
  return (
    <>
        
        {/* <!-- Hero --> */}
        <Hero title='Become a React Dev' subtitle='Find the React job that fits your skills and needs'/>
        {/* <!-- Developers and Employers --> */}
        <HomeCard/>
    

        {/* <!-- Browse Jobs --> */}
        <JobListings isHome={true}/>
        <ViewAllJobs/>

        
    </>
  );
}

export default HomePage
