window.addEventListener('load', () =>{
  let lat;
  let lon;
  
  if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition( async pos => {
      lat = pos.coords.latitude;
      lon = pos.coords.longitude
      document.getElementById('lat').innerText = lat + 'º'
      document.getElementById('lon').innerText = lon + 'º'
      const api = `/api/weather/${lat},${lon}`
      
      const res = await fetch(api)
      const data = await res.json()
      console.log(data)
    })
  } else {
    alert('nnnn')
  }
})
