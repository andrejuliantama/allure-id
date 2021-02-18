import Image from 'next/image'
import styles from './profile.module.scss'
import { useState } from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core';
import Jump from 'react-reveal/Jump';



const name = 'Andre Juliantama'
const nick = "Andre"

export default function Profile() {

  const [nickname, setNickname] = useState(false)

  const handleClick = () => {
    setNickname(!nickname)
  }

  const useStyles = makeStyles({
    text: {
      color: "#FFC0CB",
      fontSize: 24,
      lineHeight: 1.4,
      margin: 16,
    },
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 20%, #FF8E53 90%)'
    }
    
  });
  const mui = useStyles();
  return (
    
    <div className={styles.profile}>
        <Image
          priority
          src="/images/profile.jpg"
          className={styles.picture}
          height={160}
          width={160}
          alt={name}
        />
          
        <Typography className={mui.text}>
          {nickname ? nick : name}
        </Typography>
      <Jump>
        <Button className={mui.button} onClick={ () => handleClick()}> 
         call me
        </Button>
      </Jump>
      
    </div>
  )
}