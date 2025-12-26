function showPage(page) {
  const content = document.getElementById("content");

  if (page === "home") {
    content.innerHTML = `
      <h2>Welcome!</h2>
      <p>Learn renewable energy, waste reduction, and eco-friendly lifestyle practices.</p>
    `;
  }

  if (page === "lessons") {
    content.innerHTML = `
      <h2>Lessons</h2>
      <ul>
        <li>Renewable Energy Basics</li>
        <li>Plastic Reduction Techniques</li>
        <li>Water Conservation Methods</li>
        <li>Recycling & Waste Segregation</li>
      </ul>
    `;
  }

  if (page === "projects") {
    content.innerHTML = `
      <h2>Sustainability Projects</h2>
      <ul>
        <li>Solar Oven</li>
        <li>Plastic Bottle Drip Irrigation</li>
        <li>Compost Bin</li>
        <li>Rainwater Harvesting Model</li>
      </ul>
      <button id="startBtn">Start Learning</button>
    `;

    // Make the button work
    document.getElementById("startBtn").onclick = () => {
      alert("Let's start learning!");
    };
  }

  if (page === "goals") {
    content.innerHTML = `
      <h2>My Eco Goals</h2>
      <ul>
        <li><input type="checkbox"> Reduce plastic use</li>
        <li><input type="checkbox"> Save electricity daily</li>
        <li><input type="checkbox"> Walk or cycle more</li>
        <li><input type="checkbox"> Conserve water</li>
      </ul>
    `;
  }
}