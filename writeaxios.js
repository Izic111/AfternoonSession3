axios.get('https://tbhpwebdevapi.azurewebsites.net/api/Bonsai')

.then(res=> console.log(res.data)) 
.catch (err=> console.log(err))

axios.post('https://jsonplaceholder.typicode.com/post',{tittle: 'my new tittle', body:'my new body'})
