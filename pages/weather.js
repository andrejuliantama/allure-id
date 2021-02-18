import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/aboutme.module.scss'
import { useEffect, useState } from "react";
import {CircularProgress, makeStyles, Typography, Grid, Card, CardContent} from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


import Axios from "axios";

export default function Weather() {
  const [loading, setLoading] = useState(true)

  const [city, setCity] = useState([])
  const [temperature, setTemperature] = useState([])
  const [weather, setWeather] = useState([])
  const [country, setCountry] = useState([])
  const [card0, setCard0] = useState(true)
  const [card1, setCard1] = useState(false)
  const [card2, setCard2] = useState(false)
  const [cards, setCards] = useState([true, false, false])

  const handleChange = (e,setter,  idx) => {
    setter(e.target.checked)
    const temp = cards
    temp[idx] = e.target.checked
    setCards(temp)
    console.log(cards)
  }

  const handleData = (city, temperature, weather, country) => {
    setCity(city)
    setTemperature(temperature)
    setWeather(weather)
    setCountry(country)
  }
  
  const useStyles = makeStyles({
    root: {
      minWidth: 220,
      color: "#FE9C8F",
      margin: 16
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    formControl: {
      margin: 3,
    },
  });

  const mui = useStyles()

  useEffect(() =>{
    var bandung = {
      method: 'get',
      url: "http://api.weatherstack.com/current?access_key=a855bb44251f299be77853a63533d283&query=Bandung",
      headers: { 
      'Content-Type': 'application/json',
      }
    };

    var tokyo = {
      method: 'get',
      url: "http://api.weatherstack.com/current?access_key=a855bb44251f299be77853a63533d283&query=Tokyo",
      headers: { 
      'Content-Type': 'application/json',
      }
    };

    var bangkok = {
      method: 'get',
      url: "http://api.weatherstack.com/current?access_key=a855bb44251f299be77853a63533d283&query=Bangkok",
      headers: { 
      'Content-Type': 'application/json',
      }
    };

    const tCity = []
    const tTemperature = []
    const tWeather = []
    const tCountry = []

    const pushData = (city, temperature, weather, country) =>{
      tCity.push(city)
      tTemperature.push(temperature)
      tWeather.push(weather)
      tCountry.push(country)
    }

    Axios(bandung)
    .then(
      (res) =>{
        console.log(res.data)
        pushData(res.data.location.name, res.data.current.temperature, res.data.current.weather_descriptions[0], res.data.location.country)
      }
    ).catch((e) => {
      console.log(e)
    })

    Axios(bangkok)
    .then(
      (res) =>{
        console.log(res.data)
        pushData(res.data.location.name, res.data.current.temperature, res.data.current.weather_descriptions[0], res.data.location.country)
      }
    ).catch((e) => {
      console.log(e)
    })

    Axios(tokyo)
    .then(
      (res) =>{
        console.log(res.data)
        pushData(res.data.location.name, res.data.current.temperature, res.data.current.weather_descriptions[0], res.data.location.country)
        handleData(tCity, tTemperature, tWeather, tCountry)
      }
    ).catch((e) => {
      console.log(e)
    })

    const timer = setInterval(() => {
      setLoading(false)
    }, 1000);

    

  }, []);

  return (
    <div className={styles.aboutme}>
      <Head>
        <title>weather</title>
      </Head>
      <main className={styles.main}>
        {loading 
        ? 
          <CircularProgress color="secondary" /> 
        : 
          <>
            <Grid container className={mui.root} spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" >
                  {[0, 1, 2].map((value) => (
                    <Grid >
                      {cards[value] 
                      ? 
                        <Card className={mui.root}>
                          <CardContent>
                            <Typography className={mui.title} color="textSecondary" gutterBottom>
                              {country[value]}
                            </Typography>
                            <Typography variant="h5" component="h2">
                              {city[value]}
                            </Typography>
                            <Typography className={mui.pos} color="textSecondary">
                              {temperature[value]}  &#176;C
                            </Typography>
                            <Typography variant="body2" component="p">
                              {weather[value]}
                            </Typography>
                          </CardContent>
                        </Card>
                      : 
                        <></>
                      }
                      
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            
            <FormControl component="fieldset" className={mui.formControl}>
              <FormLabel component="legend">Select City</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={cards[0]} onChange={(e) => handleChange(e,setCard0, 0)} name={city[0]} />}
                  label={city[0]}
                />
                <FormControlLabel
                  control={<Checkbox checked={cards[1]} onChange={(e) => handleChange(e,setCard1, 1)} name={city[1]} />}
                  label={city[1]}
                />
                <FormControlLabel
                  control={<Checkbox checked={cards[2]} onChange={(e) => handleChange(e,setCard2, 2)} />}
                  label={city[2]}
                />
              </FormGroup>
            </FormControl>
          </>
          
        }
       
      
        
      </main>
      <footer className={styles.footer}>
        <Link href="/">
          <a>back to home</a>
        </Link>
      </footer>

      
    </div>
  )
}