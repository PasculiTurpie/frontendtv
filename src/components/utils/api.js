class Api {
  constructor(url) {
    this.url = url;
  }
  getChannel(limit, page) {
    return fetch(`${this.url}/channel?limit=${limit}&&page=${page}`).then(
      (response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
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

const api = new Api(`http://192.168.5.225:5000/api/v1/2`);

export default api;