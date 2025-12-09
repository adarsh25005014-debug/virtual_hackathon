// Registration Form
const regForm = document.getElementById("registerForm");

if (regForm) {
  regForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Registration successful! Check your email for confirmation.");
    regForm.reset();
  });
}

// Leaderboard Data
const leaderboardData = [
  { rank: 1, team: "Code Warriors", points: 98 },
  { rank: 2, team: "Debuggers", points: 92 },
  { rank: 3, team: "Byte Force", points: 89 },
];

const table = document.getElementById("leaderboard");

if (table) {
  leaderboardData.forEach(entry => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${entry.rank}</td>
      <td>${entry.team}</td>
      <td>${entry.points}</td>
    `;
    table.appendChild(row);
  });
}
