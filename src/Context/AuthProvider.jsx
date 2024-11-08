import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    fetchAlldata(value);
  }, [value]);

  const fetchAlldata = (query) => {
    setLoading(true);
    fetchData(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setData(contents);
      setLoading(false);
    });
  };
  return (
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
//  now here we are creating Custom Hooks for Accessing our Data in Any Components
 
//Custom Hook for accessing Context Data
//export const useAuth = ()=>useContext(AuthContext) // apne context ko alag hook me use karne ke liye CONTEXT ka Use karte hai AUR ISME APNA CONTEXT PASS KARTE HAI  KYUKI ISI ME ALL VALUES HAI
// AB USEAUTH KA USE KARKE HUM IN value={{value,setValue,loading,setLoading,data}} KO ACCESS KR SAKTE HAI KISI BHI COMPONENTS ME
// now go to App.jsx me