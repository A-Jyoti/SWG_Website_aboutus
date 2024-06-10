import './App.css';
import React, { useState } from 'react';
// import pic from './assets/pic.jpg';
import Card from './Card';
import './Card.css';
import { heads2024 } from './Data/heads2024';
import {heads2023} from './Data/heads2023.js';
import {heads2022} from './Data/heads2022.js';
import {sms2024} from './Data/sms2024.js';
import {sms2023} from './Data/sms2023.js';
import {sms2022} from './Data/sms2022.js';



const dataMap = {
    heads: {
        2024: heads2024,
        2023: heads2023,
        2022: heads2022,
    },

    sms: {
        2024: sms2024,
        2023: sms2023,
        2022: sms2022,
    },
};



const AboutUs = () => {


  const [year, setYear] = useState('2024');
  const [showHeads, setShowHeads] = useState(true);

 const handleYearChange = (event) => {
  setYear(event.target.value);
 }

 const toggleShowHeads =(show) => {
  setShowHeads(show);
 }

const selectedData = showHeads? dataMap.heads[year]: dataMap.sms[year];



// const handleYear2024 = () => {
//   setYear('2024');
// }

// const handleYear2023 = () => {
//   setYear('2023');
// }

// const handleYear2022 = () => {
//   setYear('2022');
// }




  return (
    <div className="App">

<div className="heading"><h1>Our Team</h1></div>
      
      <div className="yearDropdown">

       <label htmlFor="year-select">Select Year: </label>
       <select name="" id="year-select" value={year} onChange={handleYearChange}>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
       </select>


      </div>




      <div className="tab">
        
        <button className={`buttonCategory ${showHeads ? 'active' : ''}`} onClick={() => toggleShowHeads(true)}>Heads</button>
        <button className={`buttonCategory ${!showHeads ? 'active' : ''}`} onClick={() => toggleShowHeads(false)}>SMs</button>

    
      </div>





      <div className="card-container">


        {selectedData.map((member, index) => (
             <Card
             key={index}
             name= {member.name}
             designation={member.designation}
             photo={member.photo}
             facebook={member.facebook}
             linkedin={member.linkedin}
             />
        )
        
        )}
      
        </div>      





    </div>
  );
}


export default AboutUs;
