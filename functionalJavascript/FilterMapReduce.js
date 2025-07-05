const items = [
  { label: 'Apple', cat: 'Produce', qty: 1, price: 0.92 },
  { label: 'Banana', cat: 'Produce', qty: 4, price: 0.35 },
  { label: 'Almond Milk', cat: 'Dairy', qty: 1, price: 1.99 },
  { label: 'Trail Milk', cat: 'Snacks', qty: 1, price: 6.79 },
  { label: 'Baby Kale', cat: 'Produce', qty: 2, price: 3.49 },
  { label: 'Brown Large Eggs', cat: 'Dairy', qty: 1, price: 3.99 },
  { label: 'Peanut Butter', cat: 'Snacks', qty: 1, price: 6.99 },
  { label: 'Avocados', cat: 'Produce', qty: 4, price: 1.25 },
  { label: 'Blueberries, 32oz', cat: 'Frozen', qty: 1, price: 8.49 },
  { label: 'Baby Spinach', cat: 'Produce', qty: 1, price: 3.49 },
  { label: 'Frozen Pizza', cat: 'Frozen', qty: 1, price: 4.99 },
]

// --- filter() ---
// How many produce products?
items.filter(item => item.cat === 'Produce').length

// Which items are over $5 each?
items.filter(item => item.price > 5)

// How many products are being purchased in multiples?
items.filter(item => item.qty > 1).length

// --- map() ---
// What is the total for each product?
items.map(item => {
  return {label: item.label, total: item.qty * item.price}
  }
)

// Relabel to 'Category: Item Label'
items.map(item => `${item.cat}: ${item.label}`)

// --- reduce() ---
// What is the highest priced item?
items.reduce((prev, item) => item.price > prev.price ? item : prev)

// Group Products by category
items.reduce((groups, item) => {
  const prevItems = groups[item.cat] || []
  return {
    ...groups,
    [item.cat]: [...prevItems, item]
  }
}, {})

// How many products per category?
items.reduce((groups, item) => {
  const prevTotal = groups[item.cat] || 0
  return { ...groups, [item.cat]: prevTotal + 1}
}, {})

// --- Combining filter(), map() and reduce()
// How many baggable items?
const sum = (a, b) => a + b
items
  .map(item => item.qty)
  .reduce(sum, 0)


// Total Price

items
  .map(item => item.qty * item.price)
  .reduce(sum, 0)


// How many baggable produce items?

items
  .filter(item => item.cat === 'Produce')
  .map(item => item.qty)
  .reduce(sum, 0)
