class ForeCast{
    constructor(){
    this.key="S5w0oITRAhwYeduSlJA1wHjhmCb6LqDG"
    this.cityUrl="http://dataservice.accuweather.com/locations/v1/cities/search";
    this.weatherUrl="http://dataservice.accuweather.com/currentconditions/v1/"
}
async updateCity(city){
    const cityData= await this.getCity(city);
    const weather=await this.getWeather(cityData.Key);
    return {cityData,weather};
    };

async getCity(city){ 
    const query=`?apikey=${this.key}&q=${city}`;
    const response=await fetch(this.cityUrl + query)
    const data=await response.json()
    console.log (data[0])
    return data[0]
};
async getWeather(id){
    console.log(id)
    const query=`${id}?apikey=${this.key}`
    const response=await fetch(this.weatherUrl+query)
    const data=await response.json()
    console.log(data)
    return data[0]
 
}


}




// const key="S5w0oITRAhwYeduSlJA1wHjhmCb6LqDG"
// const getCity=async(city)=>{
//     const base="http://dataservice.accuweather.com/locations/v1/cities/search";
//     const query=`?apikey=${key}&q=${city}`;
//     const response=await fetch(base + query)
//     const data=await response.json()
//     console.log (data[0])
//     return data[0]
// }

// const getWeather=async(id)=>{
//     console.log(id)
//     const base=`http://dataservice.accuweather.com/currentconditions/v1/`
//     const query=`${id}?apikey=${key}`
//     const response=await fetch(base+query)
//     const data=await response.json()
//     console.log(data)
//     return data[0]
// }



// const weatherApi=(city)=>{
//     const query=`?apikey=${key}&q=${city}`;
//     return fetch("http://dataservice.accuweather.com/locations/v1/cities/search"+query).then(response=>{
//         return response.json()
//     }).then(data=>{
//         return data[0]
//     })

// }
// weatherApi("karachi").then((data)=>{
//     console.log(data)
// })