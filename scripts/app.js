const cityForm=document.querySelector(".change-location");
const cityName=document.querySelector(".city-name");
const temp=document.querySelector(".temp");
const conditions=document.querySelector(".conditions");
const card=document.querySelector(".card");
const time=document.querySelector("img.time");
const icon=document.querySelector(".icon img");

const weather2=new ForeCast()

cityForm.addEventListener("submit",e=>{
e.preventDefault()
const city=cityForm.city.value.trim()
saveCity=localStorage.setItem("city",city);
weather2.updateCity(city).
then(data=> renderData(data))
.catch((err)=>console.log(err))
})

if(localStorage.getItem("city")){
    weather2.updateCity(localStorage.getItem("city")).
    then(data=> renderData(data))
    .catch((err)=>console.log(err))
}


let renderData=(data)=>{

    const{cityData,weather}=data
    card.classList.remove("d-none")
    cityName.textContent=cityData.EnglishName
    conditions.textContent=weather.WeatherText
    temp.textContent=weather.Temperature.Metric.Value

const iconSrc=`img/icons/${weather.WeatherIcon}.svg`
icon.setAttribute("src",iconSrc)  
    let timeSrc=null;
    if(weather.IsDayTime){
        timeSrc="img/day.svg";
    }
    else{
        timeSrc="img/night.svg";
    }
    time.setAttribute("src",timeSrc)

}


// getCity("karachi").then((data)=>{
//     return getWeather(data.Key)
// }).then((weather)=>{
//     console.log(weather)
// }).catch(err=>{
//     console.log(err)
// }) 

// let myTemparature=(temp)=>{
//     let tempurate=document.querySelector(".temp")
//     tempurate.textContent=temp 
// }
