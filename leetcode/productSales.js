/**
 * Task: Calculate Total Sales for Each Product
 * 
 * Your task is to review and improve the following code handed in by a junior developer.
 * The method is intended to calculate the total sales for each product and the overall total.
 * 
 * You specified to the junior developer that the method takes an array of objects:
 * [
 *   { id: 'productA', name: 'Product A', sales: 5 },
 *   { id: 'productB', name: 'Product B', sales: 10 },
 *   { id: 'productA', name: 'Product A', sales: 4 }
 * ]
 * 
 * And should return an object:
 * {
 *   productA: 9,
 *   productB: 10,
 *   total: 19
 * }
 * 
 * Below is the code they provided. Please review it, identify any issues, and rewrite it to your standards.
 */


const getProductSalesTotals = () => {
  const items = [
    { id: 'productA', name: 'Product A', sales: 5 },
    { id: 'productB', name: 'Product B', sales: 10 },
    { id: 'asdfasdfasdf', name: 'Product B', sales: 10 },
    { id: 'productA', name: 'Product A', sales: 4 }
  ];

  var totals = {

    total: 0
  }

  for (let i = 0; i < items.length; ++i) {
    let item = items[i];
    //totals[item.id]
    if (totals[item.id]) {
      console.log(totals[item.id])
      itemSales = item.sales;
      totals[item.id] += itemSales;
      console.log(totals[item.id])

    }
    else if (!totals[item.id]) {
		  totals[item.id] = item.sales;
    }
	  totals.total += item.sales;
  }


  return totals;
}

console.log(getProductSalesTotals());


