import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
//images
const Snow = "https://res.cloudinary.com/dwvd0f79c/image/upload/v1708843834/weather%20task/yyhaftj7q0tvhspcp1ba.jpg"
const Stormy = "https://res.cloudinary.com/dwvd0f79c/image/upload/v1708843834/weather%20task/xmuyzvuls2ibsyyexuw5.jpg"
const Fog = "https://res.cloudinary.com/dwvd0f79c/image/upload/v1708843833/weather%20task/mlbq3gcrwef6qmudouq7.jpg"
const Cloudy = "https://res.cloudinary.com/dwvd0f79c/image/upload/v1708843834/weather%20task/lyhrfiq6kg4bjm4u0qlz.jpg"
const Rainy = "https://res.cloudinary.com/dwvd0f79c/image/upload/v1708843835/weather%20task/hlijbma4wwab9bzg5vxr.jpg"
const Clear = "https://res.cloudinary.com/dwvd0f79c/image/upload/v1708843691/weather%20task/jsma8gzuwvarmbji2gtj.jpg"
const Sunny = "https://res.cloudinary.com/dwvd0f79c/image/upload/v1708843836/weather%20task/bfcepv9plyfdetji8vk5.jpg"

const BackgroundLayout = () => {

  const { weather } = useStateContext()
  const [image, setImage] = useState(Clear)

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions
      if (imageString.toLowerCase().includes('clear')) {
        setImage(Clear)
      } else if (imageString.toLowerCase().includes('cloud')) {
        setImage(Cloudy)
      } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
        setImage(Rainy)
      } else if (imageString.toLowerCase().includes('snow')) {
        setImage(Snow)
      } else if (imageString.toLowerCase().includes('fog')) {
        setImage(Fog)
      } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
        setImage(Stormy)
      }
    }
  }, [weather])

  return (

    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout