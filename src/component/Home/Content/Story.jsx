import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import one from '../../assets/Avatars/boy.png'
import two from '../../assets/Avatars/cock-man.png'
import three from '../../assets/Avatars/man.png'
import four from '../../assets/Avatars/nurse.png'
import five from '../../assets/Avatars/shop-assistant.png'
import six from '../../assets/Avatars/singer.png'
import seven from '../../assets/Avatars/steward.png'


const myArray = [
    {
      number: 1,
      title: 'ameena',
      image: one,
    },
    {
      number: 2,
      title: 'moath',
      image: two,
    },
    {
      number: 3,
      title: 'obada',
      image: three,
    },
    {
        number: 4,
        title: 'saja',
        image: four,
      },
      {
        number: 5,
        title: 'dalal',
        image: five,
      },
      {
        number: 6,
        title: 'ahmad',
        image: six,
      },
      {
        number: 7,
        title: 'adel',
        image: seven,
      },
  ]


function Story() {
  return (
    <div>
        <Stack direction="row" spacing={2} 
        >
           {myArray.map((m)=>{
            return <>
            <div>
              <div className='avatar'>
            <Avatar alt="Travis Howard" src={m.image}  style={{backgroundColor:'black'}}/>
            </div>
            <span style={{fontFamily:' Poppins' ,fontSize:'10px',fontWeight:'400' }}>{m.title}</span>
            </div>
            </>
           })}
     
    </Stack>
    </div>
  )
}

export default Story