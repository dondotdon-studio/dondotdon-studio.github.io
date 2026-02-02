const listEl = document.getElementById("devlogList");

function renderLogs(project = "Underground House") {

  listEl.innerHTML = "";

  const filteredLogs = devLogs.filter(
    log => log.project === project
  );

  filteredLogs.forEach(log => {
  const item = document.createElement("article");
  item.className = "devlog-item";

  item.style.width = "100%";
  item.style.display = "block";

  item.innerHTML = `
    <span class="date">${log.date}</span>
    <h2 class="log-title">${log.title}</h2>
    <p class="summary">${log.summary}</p>
  `;

  listEl.appendChild(item);
});
}

renderLogs("Underground House");