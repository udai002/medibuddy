import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner'
import Navbar from './components/Navbar';
import Options from './components/Options';
import Banner from './components/Banner';
import HealthPackage from './components/HealthPackage';
import ActiveAppointment from './components/ActiveAppointment';
import LifeStylePackage from './components/LifeStylePackage';

const apiStatusList = {
  initial: "INITIAL",
  inProgress: "INPROGRESS",
  success: "SUCCESS",
  failure: "FAILURE"
}

function App() {
  const [apiStatus, setApiStatus] = useState(apiStatusList.initial);
  const [options , setOptions] = useState([])
  const [banner , setBanner] = useState([])
  const [categories , setCategories] = useState([])
  const [packages , setPackages] = useState([])
  const [lifeStyleHealthPack , setLifeStyleHealthPack] = useState([])


  useEffect(() => {
    getDataComponent()
  }, [])


  const getDataComponent = async () => {
    setApiStatus(apiStatusList.inProgress)
    const components = await fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config');
    if (components.ok) {
      const componentsData = await components.json();
      const {page_config} = componentsData[0]
      setOptions(page_config[0].props)
      setBanner(page_config[1].props)
      setCategories(page_config[2])
      setPackages(page_config[2].props[0].packages)
      setLifeStyleHealthPack(page_config[3])
      setApiStatus(apiStatusList.success)
      
    } else {
      setApiStatus(apiStatusList.failure)
    }
  }

  const onLoading = ()=><div className='flex flex-col justify-center items-center h-screen'>
  <DNA
    visible={true}
    height="100"
    width="100"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
  />
  <p className='text-gray-500'>Loading...</p>
</div>

const onSuccess = ()=>{
  return <div>
  <Navbar/>
  <Options options={options}/>
  <Banner banner={banner}/>
  <HealthPackage category={categories} packages={packages} />
  <ActiveAppointment healthPack={lifeStyleHealthPack}/>
  <LifeStylePackage healthPack={lifeStyleHealthPack}/>
  
</div>
}

const onFunctionRendering = ()=>{
  switch (apiStatus) {
    case apiStatusList.inProgress:
      return onLoading()
    case apiStatusList.success:
      return onSuccess()
    default:
      break;
  }
}


  return (
    <div>
       {onFunctionRendering()}
    </div>
  );
}

export default App;
