import React from "react";

 const withClass = (WrappedComponent, styleName) => {
    return props => (
        <div className={styleName}>
         <WrappedComponent {...props}/>
     </div>
     );
 };
     
     
 

 export default withClass;