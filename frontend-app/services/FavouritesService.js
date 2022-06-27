export async function getAllFavourites() {
    const response = await fetch('/backend-api/favourites');
    return await response.json();
}

export async function createFavourite(data) {
    const response = await fetch(`/backend-api/favourite`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({favourite: data})
      })
    return await response.json();
}