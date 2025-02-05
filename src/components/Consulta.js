
const result = fetch("http://api.tv-operaciones.cl/api/v1/channel")
  .then(response => response.json())
  .then(data => {
  console.log(data);
})