// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Fetch the project.json file
  fetch('streamstats.github.io/project.json')
    .then(response => response.json())
    .then(data => {
      // Update the HTML dynamically with the fetched data
      document.getElementById('title').textContent = data.streamStats.title;
      document.getElementById('copyright').innerHTML = data.streamStats.copyright;

      const linksList = document.getElementById('linksList');
      data.streamStats.links.forEach(link => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<p><a href="${link.url}"><img src="${link.imageSrc}" /></a>${link.text}</p>`;
        linksList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Error fetching project.json:', error));
});
