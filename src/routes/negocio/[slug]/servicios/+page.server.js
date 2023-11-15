export const load = async() => {
	try {
    const response = await fetch('https://localhost:8000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include'
      },

      body: JSON.stringify({
        name,
        description,
        price,
        duration  
      })
  })

	const {data: responseData} = await response.json();

	return {...responseData};
  }
	catch(e) {
		console.error('no funcó papá');
	}
}