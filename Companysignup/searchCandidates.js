function searchCandidates() {
  // Get the search input values
  var location = document.getElementById("locationInput").value;
  var role = document.getElementById("roleInput").value;

  // Perform a search based on location and job role
  var candidates = performSearch(location, role);

  // Display the fetched candidates in the list
  displayCandidates(candidates);
}

function performSearch(location, role) {
  // Simulate fetching candidates based on location and job role
  // Replace this with your actual search implementation

  // Example candidates data
  var candidatesData = [
    { name: "John Doe", location: "New York", role: "Software Engineer" },
    { name: "Jane Smith", location: "San Francisco", role: "Product Manager" },
    { name: "Mike Johnson", location: "London", role: "Data Analyst" },
    { name: "John Doe", location: "New York", role: "Software Engineer" },
    { name: "Jane Smith", location: "San Francisco", role: "Product Manager" },
    { name: "Mike Johnson", location: "London", role: "Data Analyst" },
    { name: "John Doe", location: "New York", role: "Software Engineer" },
    { name: "Jane Smith", location: "San Francisco", role: "Product Manager" },
    { name: "Mike Johnson", location: "London", role: "Data Analyst" },
    { name: "John Doe", location: "New York", role: "Software Engineer" },
    { name: "Jane Smith", location: "San Francisco", role: "Product Manager" },
    { name: "Mike Johnson", location: "London", role: "Data Analyst" },
    { name: "John Doe", location: "New York", role: "Software Engineer" },
    { name: "Jane Smith", location: "San Francisco", role: "Product Manager" },
    { name: "Mike Johnson", location: "London", role: "Data Analyst" },
    { name: "John Doe", location: "New York", role: "Software Engineer" },
    { name: "Jane Smith", location: "San Francisco", role: "Product Manager" },
    { name: "Mike Johnson", location: "London", role: "Data Analyst" },
    { name: "John Doe", location: "New York", role: "Software Engineer" },
    { name: "Jane Smith", location: "San Francisco", role: "Product Manager" },
    { name: "Mike Johnson", location: "London", role: "Data Analyst" },
    { name: "John Doe", location: "New York", role: "Software Engineer" },
    { name: "Jane Smith", location: "San Francisco", role: "Product Manager" },
    { name: "Mike Johnson", location: "London", role: "Data Analyst" },
    { name: "John Doe", location: "New York", role: "Software Engineer" },
    { name: "Jane Smith", location: "San Francisco", role: "Product Manager" },
    { name: "Mike Johnson", location: "London", role: "Data Analyst" },
    { name: "John Doe", location: "New York", role: "Software Engineer" },
    { name: "Jane Smith", location: "San Francisco", role: "Product Manager" },
    { name: "Mike Johnson", location: "London", role: "Data Analyst" },
    // ...
  ];

  // Filter the candidates based on location and job role
  var filteredCandidates = candidatesData.filter(function (candidate) {
    return (
      candidate.location.toLowerCase().includes(location.toLowerCase()) &&
      candidate.role.toLowerCase().includes(role.toLowerCase())
    );
  });

  return filteredCandidates;
}

function displayCandidates(candidates) {
  var candidatesList = document.getElementById("candidatesList");

  // Clear previous results
  candidatesList.innerHTML = "";

  if (candidates.length === 0) {
    candidatesList.innerHTML = "<p>No candidates found.</p>";
    return;
  }

  // Create a list item for each candidate
  candidates.forEach(function (candidate) {
    var listItem = document.createElement("li");
    listItem.textContent =
      candidate.name + "    -    " + candidate.location + "    -    " + candidate.role;
    candidatesList.appendChild(listItem);
  });
}
