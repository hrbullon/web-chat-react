import { useEffect } from 'react'

export const Home = () => {

  useEffect(() => {
      console.log("cargando la informacion de la pagina");
  }, [])
  

  return (
    <div>Home</div>
  )
}
