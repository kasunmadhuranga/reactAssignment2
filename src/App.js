import React, { useState, useEffect } from 'react';
import ChildComponent from "./childComponent";
import userData from "./data/userData";
import "./App.css";
// import { useState } from "react";


function App() {
    const [showPopup, setShowPopup] = useState(false);
    const [childArry, setChilArray] = useState();
    const [edUserData, setEdUserData] = useState([]);
    const [userDataPopup, setUserDataPopup] = useState(false);
    const [userEditKey, setUserEditKey] = useState();

    const [userName, setUserName] = useState();
    const [userAge, setUserAge] = useState();
    const [userAddress, setUserAddress] = useState();

    const [saveChangesData, setSaveChangesData] = useState([]);

    
    useEffect( () => {
        if(userData){
            const userDataNew = [...userData];
            setEdUserData(userDataNew);
        }
    },[]);


    const parentCallback = (value) => { 
        setShowPopup(true);
        setChilArray(value);
    };

    const closePopup = () => {
        setShowPopup(false);
        // console.log("dsoffffffffffffffffffff");
    };

    const userEditData = (value) => {
        // console.log('sadsdsasd sdffffffffffff', value);
        setUserEditKey(value);
        setUserDataPopup(true);
    };

    
    const closePopupEditUser = () => {
        setUserDataPopup(false);
        setUserEditKey();
    };


    const userNameChange = (event,type) => {
        // console.log("event",event.target.value);
        // console.log(type);
        if(type === "name"){
            setUserName(event.target.value);
        }
        if (type === "age") {
            setUserAge(event.target.value);
        }
        if (type === "address") {
            setUserAddress(event.target.value);
        }

        const changeValue = { 
            key: userEditKey, 
            name: userName ? userName : edUserData[userEditKey].name, 
            age: userAge ? userAge : edUserData[userEditKey].age,
            address: userAddress ? userAddress : edUserData[userEditKey].address
        };

        const currentArray = [...edUserData];
        currentArray[userEditKey] = changeValue;

        setSaveChangesData(currentArray);

        // console.log("changeValue", changeValue);

    };

    const saveChanges = () => {
        setEdUserData(saveChangesData);
        setUserDataPopup(false);
        setUserEditKey();
    };
    
    // console.log("userName", userName);
    // console.log("userAge", userAge);
    // console.log("userAddress", userAddress);


    const editUserDataPopup = () => {
        return(
            <div className='user-data-edit-popup'>
                <span className='close-button' onClick={closePopupEditUser}>&#10006;</span>
                <h3>Edit User Datails</h3>
                <div className="edit-ropw-popup">
                    <label className="label name">Name :</label>
                    <div className="edit data row">
                       <input type="text" name="name" placeholder= { edUserData[userEditKey].name } onChange = { (e) => userNameChange(e , "name")} ></input>
                    </div>
                </div>

                <div className="edit-ropw-popup">
                    <label className="label name">Age :</label>
                    <div className="edit data row">
                        <input type="text" name="Age" placeholder={edUserData[userEditKey].age} onChange={(e) => userNameChange(e, "age")} ></input>
                    </div>
                </div>

                <div className="edit-ropw-popup">
                    <label className="label name">Address :</label>
                    <div className="edit data row">
                        <input type="text" name="name" placeholder={ edUserData[userEditKey].address } onChange={(e) => userNameChange(e, "address")} ></input>
                    </div>
                </div>

                <div className="edit-ropw-popup">
                    <button onClick={ saveChanges }>Save Changes</button>
                </div>

            </div>
        )
    };

    // console.log("edUserData", edUserData)

    return (
        
        <div className={`App ${ showPopup } ${ userDataPopup }`}>
            <ChildComponent userData = { edUserData } callBackParentCom= { parentCallback } userEditData={userEditData} />
            {showPopup? (
                <div className="popup-parent">
                    <span className='close-button' onClick={closePopup }>&#10006;</span>
                    <h3>User Datails</h3>
                    <div className="row one">
                        <label className="label">Name :</label>
                        <label>{userData[childArry].name}</label>
                    </div>
                    <div className="row two">
                        <label className="label">Age :</label>
                        <label>{userData[childArry].age}</label>
                    </div>
                    <div className="row three">
                        <label className="label">Address :</label>
                        <label>{userData[childArry].address}</label>
                    </div>
                </div>
            ):null}
            { userDataPopup? editUserDataPopup() : null }
        </div>
    );
}

export default App;
