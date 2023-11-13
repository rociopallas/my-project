export const load = async() => {
	try {
    const responseBusiness = await fetch('https://localhost:8000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include'
      },

      body: JSON.stringify({
        name,
        address,
        phone,
        businessType,
        user  
      })
  })

  const responseSocialMedia = await fetch('https://localhost:8000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include'
    },

    body: JSON.stringify({
      mediaName,
      userName,
      link  
    })
})

	const {data: responseBusinessData} = await responseBusiness.json();
  const {data: responseSocialMediaData} = await responseSocialMedia.json();

	return {...responseBusinessData}, {...responseSocialMediaData};
  }
	catch(e) {
		console.error('no funcó papá');
	}
}