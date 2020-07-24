module.exports = (arr, option) => {
  switch (option) {
    case 'new':
      return arr.sort(
        (a, b) => new Date(b.datePosted) - new Date(a.datePosted)
      );
    case 'price_asc':
      return arr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    case 'price_desc':
      return arr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    case 'area_desc':
      return arr.sort((a, b) => parseFloat(b.areaSize) - parseFloat(a.areSize));
    case 'lot_desc':
      return arr.sort((a, b) => parseFloat(b.lotSize) - parseFloat(a.lotSize));
    default:
      return;
  }
};
