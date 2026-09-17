// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

const searchForm = document.getElementById('listing-search-form')
const searchInput = document.getElementById('listing-search-input')
const searchResults = document.getElementById('search-results')
const searchEmpty = document.getElementById('search-empty')

if (searchForm && searchInput && searchResults && searchEmpty) {
  searchInput.addEventListener('input', () => {
    const search = searchInput.value.trim().toLowerCase()
    const listings = searchResults.querySelectorAll('.listing-link')
    let visibleListings = 0

    listings.forEach((listing) => {
      const matches = listing.dataset.searchText.includes(search)
      listing.classList.toggle('d-none', !matches)
      if (matches) visibleListings += 1
    })

    searchEmpty.textContent = `No listings found for "${searchInput.value.trim()}".`
    searchEmpty.classList.toggle('d-none', visibleListings > 0 || !search)
  })
}
