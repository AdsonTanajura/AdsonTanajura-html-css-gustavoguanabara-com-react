import React, {useEffect} from "react";


const ChangeTitle:React.FC<{ tilteName: string }> = ({ tilteName }) => {
    useEffect(() => {
        if(!tilteName) {
            document.title = 'Tilte no read'
        } else {
            document.title = tilteName;
        }
    }, [tilteName]);
  
    return null; 
  };

  export default ChangeTitle;