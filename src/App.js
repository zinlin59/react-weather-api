import { useEffect, useState } from "react";
import Card from "./componese/Card";
import Search from "./componese/Search";
import { api, appid } from "./api";
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
function App() {

  const [datas, setData] = useState({})
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchData = async (city) => {
    const res = await api.get(`/weather?q=${city}&appid=${appid}&units=metric`)
    setData(res.data)
  }
  useEffect(() => {
    fetchData('Yangon')

  }, [])



  return (
    <>
      <div className="w-full min-vh-100 d-flex justify-content-center text-center align-items-center flex-column">
        <h1 className="text-dark fw-bold fs-1 text-uppercase mt-3">Weather App</h1>
        <div className="bg-light shadow-lg d-flex flex-column py-5 align-items-center" style={{
          'minWidth': '500px'
        }} >

          <Search fetchData={fetchData} data={datas} /><br />
          <Clock value={value} />
          <Card datas={datas} />
        </div>
      </div >
    </>
  )
}

export default App;
