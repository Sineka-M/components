// script.js

window.onload = function() {
    const gridContainer = document.getElementById("gridContainer");
  
    // Sample data for grid items
    const gridItems = [
      { text: "Item 1" },
      { text: "Item 2" },
      { text: "Item 3" },
      { text: "Item 4" },
      { text: "Item 5" },
      { text: "Item 6" }
    ];
  
    // Dynamically create grid items
    gridItems.forEach(item => {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.textContent = item.text;
      gridContainer.appendChild(gridItem);
    });
  };
  