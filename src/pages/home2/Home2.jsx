import React from "react";

import TrustHealth from "../../components/trusted_health/TrustHealth";
import HighLightsForHome2 from "../../components/HighLightsForHome2/HighLightsForHome2";



export default function Home2() {
  const color1 = "#503217";
  const font = 'poppins';
  return (
    <>
      <TrustHealth />
      <HighLightsForHome2 MainColor={color1} MainFont={font}/>
      
      
    </>
  );
}
