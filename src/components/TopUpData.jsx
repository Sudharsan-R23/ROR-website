import React from 'react';
import cup1 from '../assets/store/cup1.webp';
import cup2 from '../assets/store/cup2.webp';
import cup3 from '../assets/store/cup3.webp';
import PPcup1 from '../assets/store/PPcup1.webp';
import PPcup2 from '../assets/store/PPcup2.webp';
import PPcup3 from '../assets/store/PPcup3.webp';
import Store from './Store';


export default function TopUpData() {

const TopUpData = [
      {
        Image: cup1,
        Title: 'supper 10',
        price: '$9',

      },
      {
        Image: cup2,
        Title: 'supper 30',
        price: '$19',

      },
      {
        Image: cup3,
        Title: 'supper 50',
        price: '$29',

      },
      {
        Image: PPcup1,
        Title: 'HealCup 10',
        price: '$29',

      },
      {
        Image: PPcup2,
        Title: 'HealCup 30',
        price: '$59',

      },
      {
        Image: PPcup3,
        Title: 'HealCup 60',
        price: '$79',

      }
    ]

   const TopUpDatas = TopUpData.map((datas)=><Store Image={datas.Image} Title={datas.Title} price={datas.price}/>);

  return (
    [TopUpDatas]
  )
}
