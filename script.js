// Function to load YAML file
async function loadYamlFile(file) {
    const response = await fetch(file);
    const yamlText = await response.text();
    return jsyaml.load(yamlText);
}

// Function to populate products
function populateProducts(productsConfig) {
    const productsContainer = document.getElementById('products');
    for (const [key, product] of Object.entries(productsConfig)) {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <a href="${product.url}" target="_blank">
                <i class="${product.icon}"></i>
                <span>${product.name}</span>
            </a>
            <div class="users">${product.users} users</div>
        `;
        productsContainer.appendChild(productDiv);
    }
}

// Load YAML and populate products when the page loads
window.onload = async function() {
    const productsConfig = await loadYamlFile('products.yaml');
    populateProducts(productsConfig);
};
