import React from 'react'
import Lottie from "lottie-react";
import TickLottie from '../public/Lottie/Tick.json';
export const LottieTest = () => {
  return (
    <>

<Lottie animationData={TickLottie} loop={false} className='w-40'  />
    </>
  )
}
export default LottieTest;