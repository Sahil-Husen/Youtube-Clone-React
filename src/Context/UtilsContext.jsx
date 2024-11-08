import { createContext, useContext, useState } from "react";

  const UtilsContext = createContext();

// now create a Context Provider
// it gives us the data to change the UI
export const UtilsContextProvider = ({ children }) => {

        // this context provider will Pass two states 
        // 1- is that the sideBar is open or not
        // 2 - for Mobile view
        const[isSideBar,setIsSideBar] = useState(false);
        const[mobileShow,setMobileShow]  = useState(false);

        // now we want to pass it to our components 
        // so Pass a value Props in  Return Statement
        //isSideBar,mobileShow,setIsSideBar,setMobileShow PASS THIS IN A OBJECT OR CURLY BRACES
        // as Value={isSideBar,mobileShow,setIsSideBar,setMobileShow}
        // After passing values
        // Now our work to make a Hook so that we can Use it in different components

  return <UtilsContext.Provider  value={{isSideBar,setIsSideBar,mobileShow,setMobileShow}} >
    {children}
  </UtilsContext.Provider>;
};


// Making a UserDefined Hook or Custom Hook for accessing the above context

export const useUtils = () =>{
    // first use the context using below code
    const utilsContext = useContext(UtilsContext)
    if(!utilsContext) return null;

    return  utilsContext;

    // now till here our Context Api is Ready 
    // So we can use it in anywhere in our components
}