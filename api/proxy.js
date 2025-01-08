// api/proxy.js
export default async function handler(req, res) {
    // Log incoming requests for debugging
    console.log('Request URL:', req.url);
    console.log('Request Headers:', req.headers);
    console.log('Handler is triggered');
    console.log('Request URL:', req.url);
    console.log('Request Headers:', req.headers);
    // Proxy request to Swiggy API
    try {
      const apiUrl = 'https://www.swiggy.com' + req.url.replace('/api', '');  // Remove "/api" from the request URL
      
      console.log('Constructed API URL:', apiUrl); // Log the constructed URL
      // Fetch data from Swiggy API
      const response = await fetch(apiUrl, {
        method: req.method,  // Forward the method (GET, POST, etc.)
       
      });
  
      // Check if the response is OK
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
  
      // Parse and return the data as JSON
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Proxy Error:', error);
      res.status(500).json({ error: 'Failed to fetch data from Swiggy' });
    }
  }
  