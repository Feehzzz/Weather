window.addEventListener("load",()=>{let e,t,n=document.querySelector(".location-timezone"),o=document.querySelector(".temperature"),i=document.querySelector(".hour"),l=document.querySelector(".description"),r=document.querySelector(".dia-1"),a=document.querySelector(".dia-2"),d=document.querySelector(".dia-3");"geolocation"in navigator?navigator.geolocation.getCurrentPosition(async c=>{e=c.coords.latitude,t=c.coords.longitude;const u=`/api/weather/${e},${t}`,m=await fetch(u),s=await m.json();n.textContent=s.results.city_name,o.textContent=`${s.results.temp}ºC`,l.textContent=s.results.description,i.textContent=`Atualizado às:${s.results.time}h`;let x=s.results.forecast;r.textContent=x[1].weekday,r.nextElementSibling.textContent=`${x[1].min}/${x[1].max}ºC`,r.nextElementSibling.nextElementSibling.textContent=x[1].description,a.textContent=x[2].weekday,a.nextElementSibling.textContent=`${x[2].min}/${x[2].max}ºC`,a.nextElementSibling.nextElementSibling.textContent=x[2].description,d.textContent=x[3].weekday,d.nextElementSibling.textContent=`${x[3].min}/${x[3].max}ºC`,d.nextElementSibling.nextElementSibling.textContent=x[3].description}):alert("Não disponivel")});