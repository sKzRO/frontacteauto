import React, {useState, createContext} from 'react';

export const sellerDataContext = createContext();
export const buyerDataContext = createContext();
export const vehicleDataContext = createContext();

export const DataProvider = (props) => {
    const [sellerData, setSellerData] = useState({
        "name" : "",
        "cnp" : "",
        "location" : "",
        "street": "",
        "nr" : "",
        "bl" : "",
        "sc" : "",
        "et" : "",
        "ap" : "",
        "county" : "",
        "email" : "",
        "tel" : ""

    });

    const [buyerData, setBuyerData] = useState({
        "name" : "",
        "cnp" : "",
        "location" : "",
        "street": "",
        "nr" : "",
        "bl" : "",
        "sc" : "",
        "et" : "",
        "ap" : "",
        "county" : "",
        "email" : "",
        "tel" : ""

    });
    const [vehicleData, setVehicleData] = useState({
        "mark" : "",
        "type" : "",
        "vin" : "",
        "year" : "",
        "platesNumber" : "",
        "buyDate" : "",
        "buyName" : "",
        "buyType" : ""
    });


    return (
        <vehicleDataContext.Provider value ={[vehicleData, setVehicleData]}>
            <sellerDataContext.Provider value={[sellerData, setSellerData]}>
                <buyerDataContext.Provider value={[buyerData, setBuyerData]}>
                    {props.children}
                </buyerDataContext.Provider>
            </sellerDataContext.Provider>  
        </vehicleDataContext.Provider>

    );
    // personalData={[personalData,setPersonalData]} vehicleData={[vehicleData, setVehicleData]}
}

