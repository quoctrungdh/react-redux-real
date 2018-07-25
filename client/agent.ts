const baseUrl = 'http://locahost:3000'

const requests = {
  get(endpoint) {
    return fetch(`${baseUrl}${endpoint}`, {
      method: 'get'
    })
  },
  post(endpoint, data) {
    return fetch(`${baseUrl}${endpoint}`, {
      method: 'post',
      body: JSON.stringify(data)
    })
  },
  put() {

  },
  delete() {

  }
}

const auth = {
  current() {
    return requests.get('/user')
  },
  login(userCredential) {
    return requests.post('/login', userCredential)
  }
}