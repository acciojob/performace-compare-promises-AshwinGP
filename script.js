function fetchDataWithPromiseAll() {
  const startTime = performance.now();

  Promise.all(apiUrls.map(url => fetch(url)))
    .then(responses => {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      document.getElementById("output-all").textContent = timeTaken + " ms";
    })
    .catch(error => console.error(error));
}

// Function to fetch data using Promise.any
function fetchDataWithPromiseAny() {
  const startTime = performance.now();

  Promise.any(apiUrls.map(url => fetch(url)))
    .then(response => {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      document.getElementById("output-any").textContent = timeTaken + " ms";
    })
    .catch(error => console.error(error));
}

// Call the functions to fetch data
fetchDataWithPromiseAll();
fetchDataWithPromiseAny();