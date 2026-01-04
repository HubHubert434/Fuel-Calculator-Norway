function calculateFuel() {
  const distance = parseFloat(document.getElementById("distance").value);
  const consumption = parseFloat(document.getElementById("consumption").value);
  const price = parseFloat(document.getElementById("price").value);
  const trips = parseInt(document.getElementById("trips").value);

  if (!distance || !consumption || !price || !trips) {
    document.getElementById("result").innerHTML =
      "⚠️ Vennligst fyll ut alle feltene.";
    return;
  }

  const liters = (distance * consumption) / 100;
  const costOneTrip = liters * price;
  const totalCost = costOneTrip * trips;
  const costPerKm = costOneTrip / distance;

  document.getElementById("result").innerHTML = `
    🔹 Drivstoffforbruk: <strong>${liters.toFixed(2)} liter</strong><br>
    🔹 Kostnad per tur: <strong>${costOneTrip.toFixed(2)} NOK</strong><br>
    🔹 Total kostnad: <strong>${totalCost.toFixed(2)} NOK</strong><br>
    🔹 Kostnad per km: <strong>${costPerKm.toFixed(2)} NOK</strong>
  `;
}
