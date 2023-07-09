document.addEventListener("DOMContentLoaded", () => {
    // Fetch and render dogs (same code as in Step 1)
    // Edit dog information (same code as in Step 2)
  
    form.addEventListener("submit", event => {
      event.preventDefault();
  
      const dogId = form.dataset.id;
      const name = form.elements["name"].value;
      const breed = form.elements["breed"].value;
      const sex = form.elements["sex"].value;
  
      const updatedDog = {
        name: name,
        breed: breed,
        sex: sex
      };
  
      fetch(`http://localhost:3000/dogs/${dogId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedDog)
      })
        .then(response => response.json())
        .then(() => {
          form.reset();
          table.innerHTML = ""; // Clear the table
  
          // Fetch and render dogs again to reflect the updated information
          fetch("http://localhost:3000/dogs")
            .then(response => response.json())
            .then(dogs => {
              dogs.forEach(dog => {
                // Create and append table rows as before
              });
            });
        });
    });
  });
  