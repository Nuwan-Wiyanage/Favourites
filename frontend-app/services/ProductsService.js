export async function getAllProducts() {
    const response = await fetch('/backend-api/products');
    return await response.json();
}