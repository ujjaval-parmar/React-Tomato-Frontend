import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { toast } from 'react-toastify'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import { apiGanerator } from '../../helper/apiGanerator'
import AppDownload from '../../components/AppDownload/AppDownload'

const HomePage = () => {



  const [category, setCategory] = useState('all');








  return (
    <div>

      <Header />

      <ExploreMenu category={category} setCategory={setCategory} />

      <FoodDisplay category={category} />

      <AppDownload />


    </div>
  )
}

export default HomePage