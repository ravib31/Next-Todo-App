import React from 'react';
import image1 from '../../assets/sam.png';
import Image from 'next/image';

const page = () => {
  return (
    <div>
        <h1>hello image</h1>
        <Image src={image1} alt="" />  /*image size is greater compare to below*/
        <Image width={500} src={image1} alt="" /> /*image size is less compare to above fixed side will compress the image thats take less time to load and improve performance of the application*/
    </div>
  )
}

export default page