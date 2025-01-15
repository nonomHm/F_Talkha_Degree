document.getElementById('studentForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get input values
  const setNumber = document.getElementById('set_number').value;
  const nationalNumber = document.getElementById('national_number').value;

  // Create the key
  const key = `${setNumber}_${nationalNumber}`;

  // Fetch JSON data
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Check if the key exists in the data
      if (data[key]) {
        // Redirect to results page with student data
        localStorage.setItem('studentData', JSON.stringify(data[key]));
        window.location.href = 'results.html';
      } else {
        alert('البيانات غير صحيحة. يرجى المحاولة مرة أخرى.');
      }
    })
    .catch(error => console.error('Error loading data:', error));
});
