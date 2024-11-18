async function fetchQuote() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
  
      const data = await response.json();
      
      document.getElementById('quote').textContent = `"${data.slip.advice}"`;
      document.getElementById('author').textContent = `— Advice`;
      
    } catch (error) {
      console.error('Error fetching quote:', error);
      document.getElementById('quote').textContent = "Oops! Something went wrong.";
      document.getElementById('author').textContent = "";
    }
  }
  
  setInterval(fetchQuote, 10000);
  
  fetchQuote();
  