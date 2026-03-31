let chart;

Chart.defaults.color = "#ffffff";

function renderChart(data) {
  const ctx = document.getElementById("chart").getContext("2d");

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: data.map((_, i) => `Month ${i + 1}`),
      datasets: [
        {
          label: "Crescimento do investimento",
          data: data,
          borderWidth: 3,
          tension: 0.3,
          pointRadius: 3,
          pointHoverRadius: 6,
          fill: true,
          backgroundColor: "rgba(230, 57, 70, 0.2)",
          borderColor: "#e63946",

          color: "#fff",
        },
      ],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        color: "#ffffff",
        plugins: {
          legend: {
            labels: {
              color: "#fff",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#aaa",
            },
          },
          y: {
            ticks: {
              color: "#aaa",
            },
          },
        },
      },
    },
    options: {
      responsive: true,
    },
  });
}
