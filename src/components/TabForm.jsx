import {useState} from 'react'

import Profile from './Profile'
import Interests from './Interests'
import Settings from './Settings'


const TabForm = () =>{

    const [activeTab,setActiveTab] = useState(0)
    const [errors,setErrors] = useState({});

    const [data,setData] = useState({
        name : 'Sushil',
        age : '31',
        email : 'sushil@gmail.com',
        interests : ["ReactJs",'NodeJs'],
        theme : 'dark'
    })

    const tabs = [
        {
            name : 'Profile',
            component : Profile,
            validate : () =>{
                const err = {};
                if(!data.name || data.name.length <2){
                    err.name = 'Name is not valid'
                }
                if(!data.age || data.age<18){
                    err.age = 'Please enter age greater than 18'
                }
                if(!data.email || data.email.length<2){
                    err.email = 'Invalid email'
                }

                setErrors(err)
                return err.name || err.age || err.email ? false : true;
            }
        },
        {
            name : 'Interests',
            component : Interests,
            validate : () =>{
                const err = {};
                if(data.interests.length < 1){
                    err.interests = 'select atleast one interests'
                }
                setErrors(err)
                return err.interests ? false : true;
            }
        },
        {
            name : 'Settings',
            component : Settings,
            validate : () =>{
                return true;
            }
        },
    ]

    const ActiveTabComponent = tabs[activeTab].component;

    const handleNextClick = () =>{
        if(tabs[activeTab].validate()){
            setActiveTab(prevStat => prevStat+1)
        }
    }
    const handlePrevClick = () =>{
        if(tabs[activeTab].validate()){
            setActiveTab(prevStat=>prevStat-1)
        }
    }

    const handleSubmit = () =>{
        console.log(data)
    }

    return (
        <div>
            <div className='heading-container'>
                {tabs.map((tab,index)=>(
                    <div 
                        key = {index}
                        className='heading'
                        onClick = {()=>tabs[activeTab].validate() && setActiveTab(index)}
                    >
                        {tab.name}
                    </div>))}
            </div>
 
            <div className='tab-info'>
                <ActiveTabComponent data={data} setData={setData} errors={errors}/>
            </div>
            <div>
                {activeTab >0 && <button onClick={handlePrevClick}>Prev</button>}
                {activeTab < tabs.length-1 && <button onClick={handleNextClick}>Next</button>}
                {activeTab === tabs.length-1 && <button onClick={handleSubmit}>Submit</button>}
            </div>
        </div>
    )
}

export default TabForm