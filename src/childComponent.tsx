import React from "react";


interface ChildComponentProps{
    userData: [];
    callBackParentCom: (value:number) => void;
    userEditData: (value: number) => void;
}

// const callBack = () => {
//     console.log('dsfdfdff');
// }

const ChildComponent = (props: ChildComponentProps) => {
    const { userData, callBackParentCom, userEditData } = props;

    const callBack = (value:number) => {
        callBackParentCom(value);
    };

    const editUserDataFunction = (key:number) => {
        userEditData(key);
    };
    // console.log("dsfdsfd", userData)
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
               {userData && userData.map((value:any, key:number) => {
               return(
                   <tr key = { key } >
                       <td onClick={() => callBack(key)}>{ value.name }</td>
                       <td onClick={() => callBack(key)}>{ value.age }</td>
                       <td onClick={() => callBack(key)}>{value.address }</td>
                       <td onClick={() => editUserDataFunction(key) }><button>Edit</button></td>
                   </tr>
               )
                })}
            </tbody>
        </table>
        </>
    )
}

export default ChildComponent;