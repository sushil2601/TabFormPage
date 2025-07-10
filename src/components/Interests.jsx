export default Interests = ({data,setData,errors}) =>{

    const {interests} = data;

    const handleChange = (e,name) =>{
        setData((prevStat)=>({
            ...prevStat,
            interests : e.target.checked
            ? [...prevStat.interests,e.target.name]
            : prevStat.interests.filter((i)=>i !== e.target.name)
        }))
    }

    return(
        <div>
            <div>
                <label>
                <input 
                    type='checkbox'
                    name='ReactJs'
                    checked={interests.includes('ReactJs')}
                    onChange={handleChange}
                />
                ReactJs
                </label>
            </div>
            <div>
                <label>
                <input 
                    type='checkbox'
                    name='JavaScript'
                    checked={interests.includes('JavaScript')}
                    onChange={handleChange}
                />
                JavaScript
                </label>
            </div>
            <div>
                <label>
                <input 
                    type='checkbox'
                    name='Java'
                    checked={interests.includes('Java')}
                    onChange={handleChange}
                />
                Java
                </label>
            </div>
            {errors.interests && <span className='errors'>{errors.interests}</span>}
        </div>
    )
}