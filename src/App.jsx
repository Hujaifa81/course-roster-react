import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Calculation from './components/home/Calculation'
import Cards from './components/home/Cards'
function App() {
  const [creditHour, setCreditHour] = useState(0)
  const [remainingCredit, setRemainingCredit] = useState(20)
  const [showCourses, setShowCourses] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  let countHour = creditHour
  const handleSelect = (course) => {
    const isAvailable = showCourses.find((item) => item === course.course_name)
    if (!isAvailable) {
      const newArray = [...showCourses, course.course_name]
      const hour = course.credit
      countHour = countHour + hour
      const remCredit = 20 - countHour
      if (remCredit < 0) {
        return toast('Cannot take more than 20 credits and remaining hour can not be less than 0')
      }

      setShowCourses(newArray)
      setCreditHour(countHour)
      setRemainingCredit(remCredit)

      const price = course.price
      setTotalPrice(totalPrice + price)
    }
    else{
      return toast('Course already exists')
    }

  }
  return (
    <>
      <div className='w-full md:w-[90%] mx-auto'>
        <Header></Header>
        <div className='flex gap-3 flex-col lg:flex-row md:flex-col'>
          <div className="w-[70%] md:w-[80%] lg:w-[70%] mx-auto">
            <Cards handleSelect={handleSelect}></Cards>
          </div>
          <div className="w-[80%] lg:w-[30%] md:w-[80%] mx-auto">
            <Calculation creditHour={creditHour} remainingCredit={remainingCredit} showCourses={showCourses} totalPrice={totalPrice}></Calculation>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
