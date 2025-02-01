class Product {
  #id;
  title;
  price;
  #url1;
  #url2;
  tag;

  constructor (obj) {
    this.#id = obj.id;
    this.title = obj.title;
    this.price = obj.price;
    this.#url1 = obj.url1;
    this.#url2 = obj.url2;
    this.tag = obj.tag;
  }

  returnId() {
    return this.#id;
  }

  returnurl1() {
    return this.#url1;
  }

  returnurl2() {
    return this.#url2;
  }
}

export const products = [
  {
      id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      title: "Men's Iconic Racer Sweater",
      price: 9800,
      url1: "src/assets/images/products/MS092000-Black-1_aef869b0-76f4-4fec-8e9e-e558b4839e98_495x@2x.progressive.webp",
      url2: "src/assets/images/products/MS092000_navy-5_07096b50-ecdf-43e4-a112-627fe9dce37d.webp",
      tag: 'iconic'
  },
  {
      id: 'c9bf9e57-1685-4c89-bafb-ff5af830be8a',
      title: "Men's Classic Iconic Racer Jacket",
      price: 9800,
      url1: "src/assets/images/products/Black_MM070111-1_38447ed0-6a40-4ca1-967d-bf2624b9baea_495x@2x.progressive.webp",
      url2: "src/assets/images/products/Black_MM070111-8_4ac80d02-d509-4a81-80f5-6d6d6ed135e3.webp",
      tag: 'iconic'
  },
  {
      id: 'e4a1a1d4-5e5a-4c3e-8c6a-7b6f5b6d7e8f',
      title: "Men's Athletic Club Jacket",
      price: 9800,
      url1: "src/assets/images/products/MM070333-Black-1_cc81dfd4-4fe1-43c9-aa46-b39493e2491c_495x@2x.progressive.webp",
      url2: "src/assets/images/products/MM070333-Black-6.webp",
      tag: 'iconic'
  },
  {
      id: 'b3c2d1e0-f1e2-4d3c-8b4a-9a5b6c7d8e9f',
      title: "Boy's Iconic Racer Jacket",
      price: 4800,
      url1: "src/assets/images/products/MB030111B-Boy-1_3963fe6c-82b3-4ada-b2d8-8a75d8dd5122_495x@2x.progressive.webp",
      url2: "src/assets/images/products/MB030111B-Boy-2_763093b1-87fe-45d7-931e-f01ca78827d8.webp",
      tag: 'iconic'
  },
  {
      id: 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d',
      title: "Women's Oversized Iconic Racer",
      price: 9800,
      url1: "src/assets/images/products/MS092000_Black-1_73d29c7a-cea0-498d-b067-ef63bbbd16d5_495x@2x.progressive.webp",
      url2: "src/assets/images/products/MS092000_Black-7_a06dcca1-dc42-46da-99a2-2dad9fd3722c.webp",
      tag: 'iconic'
  },
  {
      id: 'd5e6f7a8-b9c0-4d1e-8f2a-3b4c5d6e7f8g',
      title: "Women's Classic Iconic Racer Jacket",
      price: 9800,
      url1: "src/assets/images/products/ML120111-Dark-Green-2_6ec38c09-f833-4620-a49e-b5782fdad6bc_495x@2x.progressive.webp",
      url2: "src/assets/images/products/Dark_Green_MM070111-8_ce05e588-e009-4ff6-bdac-afe71a75e4f8.webp",
      tag: 'iconic'
  },
  {
      id: '9a8b7c6d-5e4f-3a2b-8c1d-0e9f8a7b6c5d',
      title: "Women's Classic Iconic Racer",
      price: 9800,
      url1: "src/assets/images/products/Women_s-MM070111-Grey-1_495x@2x.progressive.webp",
      url2: "src/assets/images/products/Grey_MM070111-8_373b5ff2-43ba-4225-9c3a-ac3f1c9ae04b.webp",
      tag: 'iconic'
  },
  {
      id: '1e2f3a4b-5c6d-7e8f-9a0b-1c2d3e4f5a6b',
      title: "Women's Satin Bomber Jacket",
      price: 9800,
      url1: "src/assets/images/products/Green_ML170018-0_495x@2x.progressive.webp",
      url2: "src/assets/images/products/Green_ML170018-7_dae41953-beab-42ab-918b-2c7aabb219e2.webp",
      tag: 'iconic'
  }
].map((product) => {
  return new Product(product);
})