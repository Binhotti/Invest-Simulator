function formatBRL(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function calculate() {
  const initial = parseFloat(document.getElementById("initial").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseInt(document.getElementById("time").value);
  const monthly = parseFloat(document.getElementById("monthly").value);
  const chartContainer = document.getElementById("chart-container");
  chartContainer.classList.add("show");

  if (isNaN(initial) || isNaN(rate) || isNaN(time) || isNaN(monthly)) {
    alert("Por favor preencher todas informações!");
    return;
  }

  const i = rate / 100;

  let total = initial;
  let data = [];

  for (let month = 1; month <= time; month++) {
    total += monthly;
    total *= 1 + i;
    data.push(total);
  }

  const finalValue = total;
  const invested = initial + monthly * time;
  const profit = finalValue - invested;

  const formatted = formatBRL(finalValue);
  const formattedProfit = formatBRL(profit);

  document.getElementById("result").innerText = formatted;
  document.getElementById("profit").innerText = formattedProfit;

  renderChart(data);

  const profitElement = document.querySelector(".profit");
  profitElement.classList.remove("positive", "negative", "neutral");
  if (profit > 0) {
    profitElement.classList.add("positive");
  } else if (profit < 0) {
    profitElement.classList.add("negative");
  } else {
    profitElement.classList.add("neutral");
  }
}

// usado IA para aprender
function enableEnterKeySubmit() {
  document.querySelectorAll(".form input").forEach((input) => {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        calculate();
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", enableEnterKeySubmit);
