// DogImage.js
import React from "react";
import { useRecoilValue } from "recoil";
import {randomDog } from '../../states/dogImage/selectors';

export const DogImage = () => {
  const imageUrl = useRecoilValue(randomDog);

  return (
    <div>
      <img src={imageUrl} alt="" width="100%" height="auto" />
    </div>
  );
};