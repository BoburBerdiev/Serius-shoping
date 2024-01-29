export const priceView = (price) => {
   return  price?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')
}