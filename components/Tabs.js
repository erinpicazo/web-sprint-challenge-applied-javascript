function Tab(topic) {
    const newTab = document.createElement("div");
    newTab.classList.add("tab");
    newTab.textContent = topic;
  
    return newTab;
  }
  
  const topics = document.querySelector(".topics");
  
  axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
      console.log(response);
      response.data.topics.forEach(topic => {
        console.log(response);
        const newTab = new Tab(topic);
        topics.appendChild(newTab);
      });
    })
  
    .catch(err => {
      console.log(err);
    });
  