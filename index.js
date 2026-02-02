const slideEl = document.getElementById("devlogSlide");

let currentIndex = 0;
const CURRENT_PROJECT = "Underground House";
const currentProjectLogs = devLogs.filter(
  log => log.project === CURRENT_PROJECT
);

function renderSlide(index) {
  const log = currentProjectLogs[index];
  if (!log) return;

  slideEl.innerHTML = `
    <div class="devlog-card">
      <span class="date">${log.date}</span>
      <h4>${log.title}</h4>
      <p>${log.summary}</p>
    </div>
  `;
}

document.querySelector(".slide-btn.next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentProjectLogs.length;
  renderSlide(currentIndex);
});

document.querySelector(".slide-btn.prev").addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + currentProjectLogs.length) %
    currentProjectLogs.length;
  renderSlide(currentIndex);
});

if (currentProjectLogs.length > 0) {
  renderSlide(currentIndex);
}