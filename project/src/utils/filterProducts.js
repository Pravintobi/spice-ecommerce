export function filterProducts(products, filters) {
  return products.filter((product) => {
    const searchTerm = filters.search.toLowerCase();
    const matchesSearch = !searchTerm || product.Name.toLowerCase().includes(searchTerm);

    const priceInRange =
      filters.priceRange.length === 0 ||
      filters.priceRange.some(range => product.price >= range.min && product.price <= range.max);

    const matchesCategory =
      filters.categories.length === 0 || filters.categories.includes(product.category);

    return matchesSearch && priceInRange && matchesCategory;
  });
}
