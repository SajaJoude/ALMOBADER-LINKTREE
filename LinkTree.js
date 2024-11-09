document.getElementById('englishBtn').addEventListener('click', function() {
      document.querySelectorAll('.english').forEach(element => element.style.display = 'block');
      document.querySelectorAll('.arabic').forEach(element => element.style.display = 'none');
  });
  
  document.getElementById('arabicBtn').addEventListener('click', function() {
      document.querySelectorAll('.english').forEach(element => element.style.display = 'none');
      document.querySelectorAll('.arabic').forEach(element => element.style.display = 'block');
  });
  