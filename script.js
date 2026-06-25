// State & Theme Management
const state = {
  theme: localStorage.getItem('theme') || 'light'
};

const waNumber = "085199531660";
const waLink = `https://wa.me/${waNumber}?text=Halo%20Dafri%20Dev,%20saya%20ingin%20konsultasi%20pembuatan%20website.`;

// Theme Logic
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', state.theme);
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.querySelector('.dark-toggle i');
  if (icon) {
    icon.className = state.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  }
}

// Data Fetching & Rendering
async function loadProjects() {
  try {
    const response = await fetch('data/projects.json');
    const projects = await response.json();
    const container = document.getElementById('project-grid');
    
    container.innerHTML = projects.map(p => `
      <div class="card">
        <span class="card-label">${p.label}</span>
        <h3>${p.nama}</h3>
        <p>${p.deskripsi}</p>
        <a href="${p.link}" target="_blank" class="btn btn-outline" style="margin-top: 1.5rem; width: 100%; justify-content: center;">
          Lihat Detail
        </a>
      </div>
    `).join('');
  } catch (err) {
    console.error('Error loading projects:', err);
  }
}

async function loadServices() {
  try {
    const response = await fetch('data/services.json');
    const services = await response.json();
    const container = document.getElementById('services-grid');
    
    container.innerHTML = services.map(s => `
      <div class="card">
        <h3>Paket ${s.nama}</h3>
        <ul class="fitur-list">
          ${s.fitur.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <a href="${waLink}" target="_blank" class="btn btn-primary" style="width: 100%; justify-content: center;">
          Pilih Paket
        </a>
      </div>
    `).join('');
  } catch (err) {
    console.error('Error loading services:', err);
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadProjects();
  loadServices();
  
  // Set WA Links
  document.querySelectorAll('.wa-link').forEach(el => el.href = waLink);
  
  // Dark mode button event
  const toggleBtn = document.querySelector('.dark-toggle');
  if (toggleBtn) toggleBtn.addEventListener('click', toggleTheme);
});
