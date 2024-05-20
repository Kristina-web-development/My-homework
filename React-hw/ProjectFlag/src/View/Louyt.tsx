import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'


const Louyt = () => {
  return (
    <div>
        <NavBar/> {/* хедер всегда будет присуствовать на любой странице*/}
        <Outlet/> {/* Возможность показать динамично другую страницу при переходе раута */}
      {/* Footer - будет здесь и будет показан на каждой странице */}
    </div>
  )
}

export default Louyt