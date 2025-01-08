export default async function handler(req, res) {
    const targetUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING';
    console.log('Incoming request:', req.method, req.url); 
    // Fetch data from Swiggy API
    const response = await fetch(targetUrl);
    
    if (!response.ok) {
      res.status(response.status).json({ error: 'Failed to fetch data' });
      return;
    }
  
    const data = await response.json();
    
    // Send the data back to the frontend
    res.status(200).json(data);
  }
  