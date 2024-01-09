import { faker } from "@faker-js/faker";

export const getPayments = () => {
    const fakeArray = [];
    
  
    for (let i = 0; i < 200; i++) {
      const orderId = `#${faker.number.int({ min: 100000, max: 999999 })}`;
      const orderDate = faker.date.between('2023-07-01', '2023-07-31').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const orderAmount = `₹${faker.finance.amount(100, 10000, 2).toLocaleString()}`;
      const transactionFee = `₹${faker.finance.amount(1, 100, 2).toLocaleString()}`;
  
      fakeArray.push({
        orderId,
        orderDate,
        orderAmount,
        transactionFee,
      });
    }
  
    return fakeArray;
  };
