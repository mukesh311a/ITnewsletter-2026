// charts.js - IT Connect Newsletter Charts (Updated)
document.addEventListener('DOMContentLoaded', function() {
  // === Combined Publications Bar Chart (2025 - Till Date) ===
  const pubCtx = document.getElementById('publicationsChart');
  if (pubCtx) {
    new Chart(pubCtx, {
      type: 'bar',
      data: {
        labels: ['Journal\nPapers', 'Conference\nPapers', 'Book\nChapters', 'Patents\nFiled', 'Patent\nGranted'],
        datasets: [{
          label: 'Count (2025 – Till Date)',
          data: [11, 12, 2, 4, 1],
          backgroundColor: ['#003366','#FF6B35','#D4A843','#2874a6','#2e7d32'],
          borderRadius: 8, borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Department Research Output (2025 – Till Date)', font: { family: 'Playfair Display', size: 15, weight: '700' }, color: '#003366', padding: { bottom: 12 } }
        },
        scales: {
          y: { beginAtZero: true, ticks: { stepSize: 2, font: { family: 'Inter' } }, grid: { color: '#eef2f7' } },
          x: { grid: { display: false }, ticks: { font: { family: 'Inter', size: 10 } } }
        }
      }
    });
  }

  // === Student Achievement Level Distribution ===
  const levelCtx = document.getElementById('levelChart');
  if (levelCtx) {
    new Chart(levelCtx, {
      type: 'doughnut',
      data: {
        labels: ['International', 'National', 'Inter-College', 'Institute Level'],
        datasets: [{
          data: [5, 22, 6, 12],
          backgroundColor: ['#003366','#FF6B35','#D4A843','#2874a6'],
          borderWidth: 2, borderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 11 }, padding: 12 } },
          title: { display: true, text: 'Student Achievements by Level (2025 – Till Date)', font: { family: 'Playfair Display', size: 14, weight: '700' }, color: '#003366', padding: { bottom: 12 } }
        }
      }
    });
  }

  // === Achievement Category Bar ===
  const catCtx = document.getElementById('categoryChart');
  if (catCtx) {
    new Chart(catCtx, {
      type: 'bar',
      data: {
        labels: ['Hackathons', 'Internships', 'Academic\nToppers', 'Competitive\nProgramming', 'Research'],
        datasets: [{
          label: 'Count',
          data: [18, 8, 10, 5, 4],
          backgroundColor: ['#003366','#FF6B35','#D4A843','#2874a6','#1a5276'],
          borderRadius: 8, borderSkipped: false
        }]
      },
      options: {
        responsive: true, indexAxis: 'y',
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'IT Dept Achievements by Category (2025 – Till Date)', font: { family: 'Playfair Display', size: 14, weight: '700' }, color: '#003366', padding: { bottom: 12 } }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: 'Inter' } } },
          y: { grid: { display: false }, ticks: { font: { family: 'Inter', size: 10 } } }
        }
      }
    });
  }

  // === Academic Toppers Bar ===
  const topperCtx = document.getElementById('topperChart');
  if (topperCtx) {
    new Chart(topperCtx, {
      type: 'bar',
      data: {
        labels: [
          'ARYAN SHARMA\n(1st Sem)', 'SHANTAM SRIVASTAVA\n(1st Sem)', 'KRISHNA SONI\n(1st Sem)',
          'Harsh Munjal\n(3rd Sem)', 'Akshat Bansal\n(3rd Sem)', 'Yash Thakur\n(3rd Sem)',
          'TUSHAR GUPTA\n(5th Sem)', 'ANISH KUMAR\n(5th Sem)', 'KESHAV AGRAWAL\n(5th Sem)',
          'SILAPARASETTI LOHITH\n(7th Sem)', 'KAJAL PANDEY\n(7th Sem)', 'TIWARI ABHISEK ANIL\n(7th Sem)'
        ],
        datasets: [{
          label: 'Current SGPA/SPI',
          data: [9.4167, 9.3333, 9.1667, 9.8169, 9.7465, 9.6620, 9.5593, 9.3475, 9.2966, 9.5714, 9.4845, 9.0621],
          backgroundColor: [
            '#003366','#2874a6','#1a5276',
            '#FF6B35','#d8461b','#c75000',
            '#D4A843','#f0d78c','#b8860b',
            '#2e7d32','#4caf50','#1b5e36'
          ],
          borderRadius: 8, borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true, labels: { font: { family: 'Inter', size: 11 } } },
          title: { display: true, text: 'IT Department - Top Academic Performers (Odd Sem)', font: { family: 'Playfair Display', size: 15, weight: '700' }, color: '#003366', padding: { bottom: 12 } }
        },
        scales: {
          y: { min: 8.5, max: 10, ticks: { font: { family: 'Inter' } }, grid: { color: '#eef2f7' } },
          x: { grid: { display: false }, ticks: { font: { family: 'Inter', size: 9 }, maxRotation: 45 } }
        }
      }
    });
  }

  // === Combined Reviewer Chart ===
  const reviewCtx = document.getElementById('reviewerChart');
  if (reviewCtx) {
    new Chart(reviewCtx, {
      type: 'polarArea',
      data: {
        labels: ['Signal Processing & Computing', 'Core Engineering & Electronics', 'Mathematics & Algorithms', 'Data Science & AI', 'General Sciences'],
        datasets: [{
          label: 'Journals Reviewed',
          data: [6, 6, 5, 4, 2],
          backgroundColor: [
            'rgba(0,51,102,0.85)',
            'rgba(255,107,53,0.85)',
            'rgba(212,168,67,0.85)',
            'rgba(40,116,166,0.85)',
            'rgba(46,125,50,0.85)'
          ],
          borderColor: '#fff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 11 }, padding: 12 } },
          title: { display: true, text: 'Combined Reviewer Expertise Domains', font: { family: 'Playfair Display', size: 15, weight: '700' }, color: '#003366', padding: { bottom: 15 } },
          tooltip: {
            backgroundColor: 'rgba(0,51,102,0.9)', padding: 12,
            titleFont: { family: 'Inter', size: 13 }, bodyFont: { family: 'Inter', size: 13 }
          }
        },
        scales: {
          r: {
            ticks: { display: false },
            grid: { color: 'rgba(0,0,0,0.05)' }
          }
        }
      }
    });
  }

  // === Radar Chart ===
  const glanceCtx = document.getElementById('glanceChart');
  if (glanceCtx) {
    new Chart(glanceCtx, {
      type: 'radar',
      data: {
        labels: ['Publications', 'Patents', 'Hackathon\nWins', 'Internships', 'Academic\nToppers', 'Events'],
        datasets: [{
          label: 'Dept Score',
          data: [18, 5, 18, 8, 10, 5],
          backgroundColor: 'rgba(0,51,102,0.15)',
          borderColor: '#003366', borderWidth: 2,
          pointBackgroundColor: '#FF6B35', pointBorderColor: '#003366', pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false }, title: { display: true, text: 'Department at a Glance', font: { family: 'Playfair Display', size: 16, weight: '700' }, color: '#003366' } },
        scales: { r: { beginAtZero: true, ticks: { font: { size: 9 } }, pointLabels: { font: { family: 'Inter', size: 10 } }, grid: { color: '#d5dbe5' } } }
      }
    });
  }

  // === Faculty Events Doughnut Chart ===
  const facEventsCtx = document.getElementById('facultyEventsChart');
  if (facEventsCtx) {
    new Chart(facEventsCtx, {
      type: 'doughnut',
      data: {
        labels: ['Dr. Zamir Ahmad Ansari', 'Dr. Mohan Bansal', 'Dr. Mukesh Mann'],
        datasets: [{
          label: 'Target Events',
          data: [8, 5, 7],
          backgroundColor: ['#003366', '#FF6B35', '#D4A843'],
          borderWidth: 3, borderColor: '#fff',
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        cutout: '65%',
        plugins: {
          legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 12 }, padding: 15 } },
          title: { display: true, text: 'Faculty Participation (Total: 20 Events)', font: { family: 'Playfair Display', size: 15, weight: '700' }, color: '#003366', padding: { bottom: 15 } },
          tooltip: {
            backgroundColor: 'rgba(0,51,102,0.9)', padding: 12,
            titleFont: { family: 'Inter', size: 13 }, bodyFont: { family: 'Inter', size: 14, weight: 'bold' },
            cornerRadius: 8, displayColors: true
          }
        }
      }
    });
  }
});
