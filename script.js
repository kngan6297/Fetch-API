document.getElementById('fetchDataBtn').addEventListener('click', fetchProducts);

function fetchProducts() {
    const apiURL = "https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&version=home-persionalized&trackity_id=a1093fef-ce2a-1aaa-34bd-71b1346662c9&category=1789&page=1&urlKey=dien-thoai-may-tinh-bang";
    
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            console.log('API response:', data);
            displayProducts(data);
        })
        .catch(error => console.error('Error fetching products:', error));
}

function displayProducts(data) {
    const dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.innerHTML = '';

    if (data && data.data) {
        data.data.forEach(product => {
            dataDisplay.innerHTML += `
                <div class="product">
                    <h2>${product.name}</h2>
                    <p>Giá: ${product.price.toLocaleString()} VND</p>
                    <img src="${product.thumbnail_url}" alt="${product.name}">
                </div>
            `;
        });
    } else {
        dataDisplay.innerHTML = '<p>No products found.</p>';
        console.error('Data or data.data is undefined');
    }
}
