document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const resultContainer = document.getElementById("resultContainer");
  const resultTable = document.getElementById("resultTable");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect field values
    const name = document.getElementById("name")?.value || "";
    const email = document.getElementById("email")?.value || "";
    const password = document.getElementById("password")?.value || "";
    const phone = document.getElementById("phone")?.value || "";
    const website = document.getElementById("website")?.value || "";
    const age = document.getElementById("age")?.value || "";
    const dob = document.getElementById("dob")?.value || "";
    const time = document.getElementById("time")?.value || "";
    const color = document.getElementById("color")?.value || "";
    const range = document.getElementById("range")?.value || "";
    const topic = document.getElementById("topic")?.value || "";
    const message = document.getElementById("message")?.value || "";

    const contactMethod = document.querySelector('input[name="contactMethod"]:checked')?.value || "Not selected";
    const services = Array.from(document.querySelectorAll('input[name="service"]:checked'))
                          .map(cb => cb.value)
                          .join(", ") || "None";

    // Validate field existence
    const fields = ["name", "email", "password", "phone", "website", "age", "dob", "time", "color", "range", "topic", "message"];
    fields.forEach(id => {
      if (!document.getElementById(id)) {
        console.error(`Missing element with id: ${id}`);
      }
    });

    // Prepare data for table
    const formData = [
      ["Name", name],
      ["Email", email],
      ["Password", password],
      ["Phone", phone],
      ["Website", website],
      ["Age", age],
      ["Date of Birth", dob],
      ["Preferred Time", time],
      ["Favorite Color", color],
      ["Interest Level", range],
      ["Contact Method", contactMethod],
      ["Services Interested In", services],
      ["Topic", topic],
      ["Message", message]
    ];

    // Clear previous results
    const tbody = resultTable.querySelector("tbody") || document.createElement("tbody");
    tbody.innerHTML = "";

    // Populate table
    formData.forEach(([label, value]) => {
      const row = document.createElement("tr");
      const cellLabel = document.createElement("td");
      const cellValue = document.createElement("td");
      cellLabel.textContent = label;
      cellValue.textContent = value;
      row.appendChild(cellLabel);
      row.appendChild(cellValue);
      tbody.appendChild(row);
    });

    // Append tbody if not already present
    if (!resultTable.querySelector("tbody")) {
      resultTable.appendChild(tbody);
    }

    // Show results
    resultContainer.style.display = "block";

    // Reset form
    form.reset();
  });
});