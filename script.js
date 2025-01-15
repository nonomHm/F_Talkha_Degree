document.getElementById('studentForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get input values
  const level = document.getElementById('level').value;
  const setNumber = document.getElementById('set_number').value;
  const nationalNumber = document.getElementById('national_number').value;

  if (!level) {
    alert('الرجاء اختيار المرحلة.');
    return;
  }

  // Create the key
  const key = `${setNumber}_${nationalNumber}`;
  console.log('Key:', key);

  // Determine the JSON file and results page based on the selected level
  const jsonFile = level === 'الاعدادي' ? 'data.json' : 'data1.json';
  const resultsPage = level === 'الاعدادي' ? 'results.html' : 'results2.html';

  // Fetch JSON data
  fetch(jsonFile)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Data:', data); // Debug: Check the fetched data
      // Check if the key exists in the data
      if (data[key]) {
        console.log('Student found:', data[key]); // Debug: Check the student data
        // Redirect to the appropriate results page with student data
        localStorage.setItem('studentData', JSON.stringify(data[key]));
        window.location.href = resultsPage;
      } else {
        alert('البيانات غير صحيحة. يرجى المحاولة مرة أخرى.');
      }
    })
    .catch(error => {
      console.error('Error loading data:', error); // Debug: Check for errors
    });
});
