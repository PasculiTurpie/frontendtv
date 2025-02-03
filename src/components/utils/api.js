class Api {
  constructor(url) {
    this.url = url;
  }
  getChannel(limit, page) {
    return fetch(`${this.url}/channel?limit=${limit}&page=${page}`).then(
      (response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status} ${response.statusText}`);
        }
        return response.json();
      }
    );
  }
  getAllChannel() {
    return fetch(`${this.url}/channel/all`)
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error));
  }

  getChannelById(channelId) {
    return fetch(`${this.url}/channel/${channelId}`)
      .then((response) => response.json())
     .catch((error) => console.error("Error:", error));
  }
}

<<<<<<< HEAD
const api = new Api(`https://172.19.14.135:5000/api/v1`);
=======
const api = new Api(`http://192.168.5.250:5000/api/v1`);
>>>>>>> d6597f1c84ef76d104616d1b80e31a37ad3446ec

export default api;