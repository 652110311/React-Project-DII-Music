const userData = [
  {
    id: 0,
    name: "addmin",
    email: "addmin@gmail.com",
    password: "123456789",
    profile: "",
    cart: [],
  },
  {
    id: 1,
    name: "Hello word",
    email: "abc@gmail.com",
    password: "123456789",
    profile: "",
    cart: [
      {
        orderId: 1,
        order: [
          {
            productID: 1,
            quantity: 1,
          },
          {
            productID: 2,
            quantity: 1,
          },
        ],
        productStatus: "COMPLETED",
      },
      {
        orderId: 2,
        order: [
          {
            productID: 1,
            quantity: 1,
          },
        ],
        productStatus: "TO PAY",
      },
    ],
  },
  {
    id: 2,
    name: "testsi",
    email: "test@gmail.com",
    password: "123456789",
    profile: "",
    cart: [],
  },
];

module.exports = userData;
