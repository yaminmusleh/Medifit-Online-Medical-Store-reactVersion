import React from "react";
import Save from "../../components/idk_what_to_name_it/Save";
import TrustHealth from "../../components/trusted_health/TrustHealth";
import HighLightsForHome2 from "../../components/HighLightsForHome2/HighLightsForHome2";
import CustomerReview from "../../components/customers_reviews/CustomerReview";

export default function Home2() {
  const color1 = "#503217";
  const font = 'poppins';
  return (
    <>
      <TrustHealth />
      <HighLightsForHome2 MainColor={color1} MainFont={font}/>
      <Save />
      <CustomerReview MainColor={color1} MainFont={font}/>
    </>
  );
}
