const search = document.querySelector('#unit-search');
const units = [...document.querySelectorAll('.unit')];
search.addEventListener('input', () => {
  const query = search.value.trim().toLocaleLowerCase();
  let matches = 0;
  for (const unit of units) {
    const visible = unit.dataset.search.toLocaleLowerCase().includes(query);
    unit.hidden = !visible;
    if (visible) matches++;
  }
  document.querySelector('#no-results').hidden = matches !== 0;
  document.querySelector('#search-status').textContent = `${matches} ${matches === 1 ? 'unit' : 'units'} found`;
});
