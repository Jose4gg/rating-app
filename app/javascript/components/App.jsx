import React from "react";
import { RecoilRoot } from "recoil";
import { ProductDetails } from "./ProductDetails";

export default function App() {
  return (
    <RecoilRoot>
      <ProductDetails />
    </RecoilRoot>
  );
}
