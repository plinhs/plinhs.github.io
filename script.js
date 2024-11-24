

function closeAd(adId) {
    const ad = document.getElementById(adId); 
    if (ad) {
      ad.style.display = "none";
    }
  }

  const apiUrl = 'https://run.mocky.io/v3/f555210e-5c39-41b5-b757-e51216cfc5df'; // Replace with your actual URL

  window.onload = function() {
    fetch(apiUrl)
      .then(response => response.json()) 
      .then(data => {
        const companySelect = document.getElementById('company');
        data.companies.forEach(company => {
          const option = document.createElement('option');
          option.value = company;
          option.textContent = company;
          companySelect.appendChild(option);
        });

        const subjectSelect = document.getElementById('subject');
        data.subjects.forEach(subject => {
          const option = document.createElement('option');
          option.value = subject;
          option.textContent = subject;
          subjectSelect.appendChild(option);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        alert('Failed to load data from Mocky.io.');
      });
      const areaCodeSelect = document.getElementById("areaCode")
      areaCodes = ["530", "531", "532", "533", "534", "535", "536", "537", "538", "539", "540", "541", "542", "543", "544", "545", "550", "551", "552", "553", "554", "555", "559" ];
        areaCodes.forEach(areaCode => {
          const option = document.createElement("option");
          option.value = areaCode;
          option.textContent = areaCode;
          areaCodeSelect.appendChild(option);
        });

      
  };
  function validateForm() {
    const companySelect = document.getElementById('company');
    if (companySelect.value === "0") {
        alert("Please choose a company.");
        return false; 
    }
    const areaCodeSelect = document.getElementById('areaCode');
    if (areaCodeSelect.value === "0") {
        alert("Please choose an area code.");
        return false; 
    }
    const subjectSelect = document.getElementById('subject');
    if (subjectSelect.value === "0") {
        alert("Please choose a subject.");
        return false; 
    }
    const telNo = document.getElementById("phone-input");
    const phoneRegex = /^\d{7}$/; 
    if(!phoneRegex.test(telNo.value)){
      alert("Please enter a valid phone number.");
      return false;
    }
    const radios = document.getElementsByName('radio-btn');
    let radioSelected = false;
    for (let radio of radios) {
        if (radio.checked) {
          radioSelected = true;
          break;
        }
      }
        if(!radioSelected){
          alert("Please select either yes or no");
          return false;
        }
    
    return true; 
}



