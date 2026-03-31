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

  if (isNaN(initial) || isNaN(rate) || isNaN(time)) {
    alert("Por favor preencher todas informações!");
    return;
  }

  const i = rate / 100;

  const finalValue = initial * Math.pow(1 + i, time);
  const profit = finalValue - initial;

  const formatted = formatBRL(finalValue);
  const formattedProfit = formatBRL(profit);

  document.getElementById("result").innerText = formatted;
  document.getElementById("profit").innerText = formattedProfit;

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
