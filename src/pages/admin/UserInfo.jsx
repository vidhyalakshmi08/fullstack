import { useState } from 'react';

const UserInfo = () => {
  // Sample data for table rows
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderDate: '07 February, 2022',
      orderId: '62345231143',
      description: 'Desktop Computer',
      GiftType: 'Jane Doeson',
      dimensions: '24 x 10 x 5 cm',
      weight: '1.0 Kg',
      price: '$59.00',
      status: 'Action Required',
    },
    {
        id: 2,
        orderDate: '08 February, 2022',
        orderId: '62345231144',
        description: 'Laptop',
        GiftType: 'John Smith',
        dimensions: '30 x 20 x 5 cm',
        weight: '1.5 Kg',
        price: '$899.00',
        status: 'Pending',
      },
      {
        id: 3,
        orderDate: '09 February, 2022',
        orderId: '62345231145',
        description: 'Smartphone',
        GiftType: 'Alice Johnson',
        dimensions: '15 x 7 x 0.5 cm',
        weight: '0.3 Kg',
        price: '$399.00',
        status: 'Completed',
      },
      {
        id: 4,
        orderDate: '10 February, 2022',
        orderId: '62345231146',
        description: 'Tablet',
        GiftType: 'Bob Williams',
        dimensions: '20 x 15 x 0.8 cm',
        weight: '0.5 Kg',
        price: '$299.00',
        status: 'Shipped',
      },
      {
        id: 5,
        orderDate: '11 February, 2022',
        orderId: '62345231147',
        description: 'Monitor',
        GiftType: 'Eva Brown',
        dimensions: '40 x 25 x 5 cm',
        weight: '3.0 Kg',
        price: '$399.00',
        status: 'Action Required',
      },
      {
        id: 2,
        orderDate: '08 February, 2022',
        orderId: '62345231144',
        description: 'Laptop',
        GiftType: 'John Smith',
        dimensions: '30 x 20 x 5 cm',
        weight: '1.5 Kg',
        price: '$899.00',
        status: 'Pending',
      },
  ]);

  return (
    <div className="mx-auto max-w-screen-xl bg-white">
      <h1 className="mt-20 mb-10 ml-5 text-2xl text-center font-bold text-gray-900">Order Management</h1>
      {/* Navigation */}
      <div className="bg-white py-2 px-3">
        {/* Navigation links */}
      </div>
      {/* Table */}
      <div className="w-screen bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-2 py-10">
          <div className="mt-4 w-full">
            <div className="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
              {/* Search bar */}
              {/* Filter button */}
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
            <table className="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
              {/* Table header */}
              <thead className="border-b">
                <tr>
                  <th className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">Order Date</th>
                  <th className="whitespace-normal hidden py-4 text-sm font-semibold text-gray-800 sm:px-3 lg:table-cell">Order ID</th>
                  <th className="whitespace-normal hidden py-4 text-sm font-semibold text-gray-800 sm:px-3 lg:table-cell">Description</th>
                  <th className="whitespace-normal hidden py-4 text-sm font-semibold text-gray-800 sm:px-3 lg:table-cell">GiftType</th>
                  <th className="whitespace-normal hidden py-4 text-sm font-semibold text-gray-800 sm:px-3 lg:table-cell">Dimensions</th>
                  <th className="whitespace-normal hidden py-4 text-sm font-semibold text-gray-800 sm:px-3 lg:table-cell">Weight</th>
                  <th className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">Price</th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="bg-white lg:border-gray-300">
                {/* Dynamically generated table rows */}
                {orders.map(order => (
                  <tr key={order.id}>
                    {/* Table data for each column */}
                    <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">{order.orderDate}</td>
                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{order.orderId}</td>
                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{order.description}</td>
                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{order.GiftType}</td>
                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{order.dimensions}</td>
                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{order.weight}</td>
                    <td className="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">{order.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;