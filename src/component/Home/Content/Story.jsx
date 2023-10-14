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

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
const style = {
  position: 'absolute',
  top: '50%',
  left: '43.5%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
  border: '2px solid #000',
  p: 1,
};

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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      
        <Stack direction="row" spacing={2} 
        >
           {myArray.map((m,index)=>{
            return <div key={index} onClick={handleClickOpen}>
            
              <div className='avatar' >
            <Avatar alt="Travis Howard" src={m.image}  style={{backgroundColor:'black' ,width:'50px ', height:'50px'}}/>
            </div>
            <span style={{fontFamily:' Poppins' ,fontSize:'10px',fontWeight:'400' }}>{m.title}</span>
            
            </div>
           })}
     
    </Stack>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={one} style={{width:"100%"}}></img>
        </Box>
      </Modal>
    </div>
  )
}

export default Story