function checkLeapYear() {
    const year = parseInt(document.getElementById("yearInput").value);
    const result = document.getElementById("resultText");
  
    result.classList.remove("success", "error");
  
    if (isNaN(year)) {
      result.textContent = "Please enter a valid year.";
      result.classList.add("error");
      return;
    }
  
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  
    if (isLeap) {
      result.textContent = `${year} is a leap year! 🎉`;
      result.classList.add("success");
  
      // Confetti burst
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      result.textContent = `${year} is NOT a leap year.`;
      result.classList.add("error");
    }
  }
  