import React from 'react'
import cup1 from '../assets/store/cup1.webp';
import Store from './Store';


export default function TopUpData() {

const TopUpData = [
      {
        Image: cup1,
        Title: 'hello',
        price: 500,

      },
      {
        Image: cup1,
        Title: 'hello',
        price: 500,

      },
      {
        Image: cup1,
        Title: 'hello',
        price: 500,

      },
      {
        Image: cup1,
        Title: 'hello',
        price: 500,

      },
      {
        Image: cup1,
        Title: 'hello',
        price: 500,

      },
      {
        Image: cup1,
        Title: 'hello',
        price: 500,

      },
      {
        Image: cup1,
        Title: 'hello',
        price: 500,

      },
      {
        Image: cup1,
        Title: 'hello',
        price: 500,

      },
    ]

   const TopUpDatas = TopUpData.map((datas)=><Store Image={datas.Image} Title={datas.Title} price={datas.price}/>);

  return (
    [TopUpDatas]
  )
}
