import React from "react";
import BasicInfo from "./MEDIUM";

const ListOfBasicInfo = () => {
    const peoplesInfo = [

        {name: "James",
        age: "21",
        number: "704-543-6556",
        email: "Namethis@redventures.com",
       },
        {name: "Jacob",
        age: "27",
        number: "704-543-6556",
        email: "Namethis@redventures.com",
        },
        {name: "Jason",
        age: "27",
        number: "704-543-6556",
        email: "Namethis@redventures.com",
        }]; 
return (
    <div className="peopleList">
        {peoplesInfo.map((source) => (
            <BasicInfo 
            name ={source.name} 
            age ={source.age} 
            number ={source.number} 
            email ={source.email} 
               />
            ))}
    </div>
    )};
export default ListOfBasicInfo;