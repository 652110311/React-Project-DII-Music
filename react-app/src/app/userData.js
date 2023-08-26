const userData = [
  {
    id: 0,
    name: "addmin",
    email: "addmin@gmail.com",
    password: "123456789",
    profile: "",
    cart: [
      {
        userID: 1,
        orderId: 2,
        order: [
          {
            productID: 1,
            quantity: 1,
          },
          {
            productID: 2,
            quantity: 2,
          },
        ],
        productStatus: "TO PAY",
        totalPrice: 0,
      },
      {
        userID: 1,
        orderId: 3,
        order: [
          {
            productID: 1,
            quantity: 1,
          },
          {
            productID: 1,
            quantity: 1,
          },
        ],
        transport:"J&T",
        track:101010101000,
        productStatus: "TO RECEIVE",
        totalPrice: 600,
      },
      {
        userID: 1,
        orderId: 4,
        order: [
          {
            productID: 1,
            quantity: 1,
          },
          {
            productID: 1,
            quantity: 1,
          },
        ],
        transport:"J&T",
        track:101010101000,
        productStatus: "TO RECEIVE",
        totalPrice: 50,
      },
      {
        userID: 1,
        orderId: 5,
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
        productStatus: "TO SHIP",
        totalPrice: 50,
      },
    ],
  },
  {
    id: 1,
    name: "Hello word",
    email: "abc@gmail.com",
    password: "123456789",
    profile: "",
    cart: [
      {
        orderId: 2,
        order: [
          {
            productID: 1,
            quantity: 1,
          },
          {
            productID: 2,
            quantity: 2,
          },
        ],
        productStatus: "TO PAY",
        totalPrice: 0,
      },
      {
        orderId: 3,
        order: [
          {
            productID: 1,
            quantity: 1,
          },
          {
            productID: 1,
            quantity: 1,
          },
        ],
        transport:"J&T",
        track:101010101000,
        productStatus: "TO RECEIVE",
        totalPrice: 600,
      },
      {
        orderId: 4,
        order: [
          {
            productID: 1,
            quantity: 1,
          },
          {
            productID: 1,
            quantity: 1,
          },
        ],
        transport:"J&T",
        track:101010101000,
        productStatus: "TO RECEIVE",
        totalPrice: 50,
      },
      {
        orderId: 5,
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
        productStatus: "TO SHIP",
        totalPrice: 50,
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
