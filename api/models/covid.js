const axios = require('axios')
var workerpool = require('workerpool')
const pool = workerpool.pool();

createData =  (state_current, state_info) =>{

    let combinedArray = []
    let length = state_current.data.length
    for(i=0; i<length; i++){
        let newObject = {
            "state": state_current.data[i]['state'],
            "positive": state_current.data[i]['positive'],
            "totalTestResults": state_current.data[i]['totalTestResults'],
            "notes": state_info.data[i]['notes'],
            "covid19Site": state_info.data[i]['covid19Site'],
        }
        combinedArray.push(newObject)
    }
    return combinedArray
    
}

get_all_data = async() => {
    try{

        const [state_current, state_info] = await Promise.all([
            axios.get("https://covidtracking.com/api/states", {timeout:10000}),
            axios.get("https://covidtracking.com/api/states/info", {timeout:10000}),
          ]);
        let combinedArray = createData(state_current, state_info)
        return  combinedArray
            
    } catch (err){
            console.log(err)
        }
}

 

get_state_info = async() => {
    try{
         
        const response = await axios.get("https://covidtracking.com/api/states/info", {timeout:10000})
        return   response.data
            
    } catch (err){
            console.log(err)
        }
}

 

get_state_current = async() => {
    try{
         
        const response = await axios.get("https://covidtracking.com/api/states", {timeout:10000})
        return   response.data
            
    } catch (err){
            console.log(err)
        }
}

module.exports = {
    get_all_data:get_all_data,
    get_state_info:get_state_info,
    get_state_current,get_state_current

}