import React,{useState} from 'react'
import Header from '../Components/Header'
import Personalnfo from '../Components/Personalnfo'
import PersonalInformationupload from '../Components/PersonalInformationupload'
import Expertise from '../Components/Expertise'
import WorkExperince from '../Components/WorkExperince' 



export default function () {
  const [componentName, setComponentName] = useState("Personal Information");
 

  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "25%", marginTop: "30px" }}>
          <Personalnfo setComponentName={setComponentName} />
        </div>
        <div style={{ width: "75%" }}>
         {
          componentName ==="Personal Information" ?
          <PersonalInformationupload  />
          :
          componentName ==="Expertise" ?
          <Expertise  />
          :
          componentName ==="Work Experience" ?
          <WorkExperince  />
          :
          <PersonalInformationupload/>

         }
         
        </div>
      </div>
    </div>
  )
}
