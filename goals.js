if (page === "goals") {
  content.innerHTML = `
    <h2>My Eco Goals</h2>

    <ul class="goals-list">
      <li>
        <label><input type="checkbox"> Reduce plastic use</label>
      </li>

      <li>
        <label><input type="checkbox"> Save electricity daily</label>
      </li>

      <li>
        <label><input type="checkbox"> Walk or cycle instead of using a vehicle</label>
      </li>

      <li>
        <label><input type="checkbox"> Conserve water by shorter showers</label>
      </li>

      <li>
        <label><input type="checkbox"> Reuse bags, bottles, and containers</label>
      </li>
    </ul>
  `;
}