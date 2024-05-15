import React from 'react';
import Comp from './Component/CompA';

const App = () => {
 let arrObj=[
  {
    head:"FREE",
    pri:"$0/month",
    b1:"Single User",
    b2:"50GB Storage",
    b3:"Unlimited Public Projects",
    b4:"Community Access",
    b5:"Unlimited Private Projects",
    b6:"Dedicated Phone support",
    b7:"Free Subdomain",
    b8:"Monthly Status Report",
    c1:"fa fa-check",
    c2:"fa fa-check",
    c3:"fa fa-check",
    c4:"fa fa-check",
    c5:"fa fa-times text-secondary",
    c6:"fa fa-times text-secondary",
    c7:"fa fa-times text-secondary",
    c8:"fa fa-times text-secondary",


  },
  {
    head:"PLUS",
    pri:"$9/month",
    b1:"5 User",
    b2:"50GB Storage",
    b3:"Unlimited Public Projects",
    b4:"Community Access",
    b5:"Unlimited Private Projects",
    b6:"Dedicated Phone support",
    b7:"Free Subdomain",
    b8:"Monthly Status Report",
    c1:"fa fa-check",
    c2:"fa fa-check",
    c3:"fa fa-check",
    c4:"fa fa-check",
    c5:"fa fa-check",
    c6:"fa fa-check",
    c7:"fa fa-check",
    c8:"fa fa-times text-secondary",
  },
  {

    head:"PRO",
    pri:"$49/month",
    b1:"Unlimited User",
    b2:"50GB Storage",
    b3:"Unlimited Public Projects",
    b4:"Community Access",
    b5:"Unlimited Private Projects",
    b6:"Dedicated Phone support",
    b7:"Free Subdomain",
    b8:"Monthly Status Report",
    c1:"fa fa-check",
    c2:"fa fa-check",
    c3:"fa fa-check",
    c4:"fa fa-check",
    c5:"fa fa-check",
    c6:"fa fa-check",
    c7:"fa fa-check",
    c8:"fa fa-check",
  }
 ]
  
  return (
   <>
<Comp arrObj={arrObj}/>
   </>
  );
};


export default App;