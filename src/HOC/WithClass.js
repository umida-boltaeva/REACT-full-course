import React from "react";

 const withClass = (WrappedComponent, styleName) => {
    return props => (
        <div className={styleName}>
         <WrappedComponent />
     </div>
     );
 };
     
     
 

 export default withClass;