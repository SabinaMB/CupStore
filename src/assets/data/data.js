const products = [
  {
    id: 1,
    name: "Floral White & Gray Coffee Cup",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298310/cup19_pzr9ow.png",
    description:
      "Minimalist white and gray coffee cup featuring a delicate floral pattern, perfect for a subtle yet charming style.",
    category: "Coffee Cup with Saucer",
    price: 23.99,
  },
  {
    id: 2,
    name: "Vine Leaf White Coffee Cup",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298307/cup2_liedop.png",
    description:
      "Classic white coffee cup with a graceful gray vine leaf pattern. A timeless design for any kitchen.",
    category: "Coffee Cup with Saucer",
    price: 19.99,
  },
  {
    id: 3,
    name: "Dark Blue Vine Leaf Coffee Cup",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298306/cup3_p4p0ql.png",
    description:
      "Rich dark blue coffee cup adorned with elegant white vine leaves. A stylish choice for your daily brew.",
    category: "Coffee Cup with Saucer",
    price: 17.99,
  },
  {
    id: 4,
    name: "Dark Blue Peony Coffee Cup",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298308/cup4_tjapjs.png",
    description:
      "Charming dark blue coffee cup featuring a white peony pattern, combining luxury and floral beauty.",
    category: "Coffee Cup with Saucer",
    price: 20.49,
  },
  {
    id: 5,
    name: "Dark Red Coffee Cup with Gold Accents",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298307/cup5_ylrxl3.png",
    description:
      "Bold dark red coffee cup with golden accents and light pink peonies. A statement piece for your collection.",
    category: "Coffee Cup with Saucer",
    price: 20.99,
  },
  {
    id: 6,
    name: "Light Blue Floral Coffee Cup",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298306/cup6_keorop.png",
    description:
      "Soft light blue coffee cup decorated with delicate white flowers, perfect for peaceful coffee breaks.",
    category: "Coffee Cup with Saucer",
    price: 15.99,
  },
  {
    id: 7,
    name: "White Coffee Cup with Gold & Orange Accents",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298308/cup7_w8d7w7.png",
    description:
      "Elegant white coffee cup with golden and dark orange accents, featuring a vibrant orange flower pattern.",
    category: "Coffee Cup with Saucer",
    price: 17.99,
  },
  {
    id: 8,
    name: "White Coffee Cup with Blue Flowers",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298308/cup8_rptbzi.png",
    description:
      "Classic white coffee cup adorned with blue flowers, adding a touch of nature to your table.",
    category: "Coffee Cup with Saucer",
    price: 17.99,
  },
  {
    id: 9,
    name: "White Coffee Cup with Poppies",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298306/cup9_gwmgcg.png",
    description:
      "Bright white coffee cup featuring large, vibrant poppies for a cheerful morning routine.",
    category: "Coffee Cup with Saucer",
    price: 18.49,
  },
  {
    id: 10,
    name: "White coffee cup with poppies pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298306/cup10_bewvsn.png",
    description:
      "Bright white coffee cup featuring a vivid poppies pattern, adding a cheerful, floral touch to your coffee time.",
    category: "Coffee Cup with Saucer",
    price: 18.99,
  },
  {
    id: 11,
    name: "Light Pink Coffee Cup with Gold & Poppies",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298308/cup11_fm9myw.png",
    description:
      "Delicate light pink coffee cup with golden accents, adorned with a vibrant poppies pattern for a charming look.",
    category: "Coffee Cup with Saucer",
    price: 20.99,
  },
  {
    id: 12,
    name: "Light Pink Coffee Cup with Poppies",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298308/cup12_kpqfxb.png",
    description:
      "Elegant light pink coffee cup with golden accents, showcasing large, bold poppies for a striking floral statement.",
    category: "Coffee Cup with Saucer",
    price: 20.49,
  },

  {
    id: 13,
    name: "Blue Coffee Cup with Pink Peonies",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298309/cup14_jrgffp.png",
    description:
      "Charming blue coffee cup with golden accents, decorated with light pink peonies for a soft, romantic vibe.",
    category: "Coffee Cup with Saucer",
    price: 20.49,
  },
  {
    id: 14,
    name: "Dark Green Coffee Cup with Pink Peonies",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298309/cup15_s3zwtd.png",
    description:
      "Sophisticated dark green coffee cup adorned with a vibrant pink peony pattern, perfect for adding elegance to your coffee time.",
    category: "Coffee Cup with Saucer",
    price: 20.99,
  },
  {
    id: 15,
    name: "Dark Green Coffee Cup with Gold & White Peonies",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298309/cup16_euezal.png",
    description:
      "Luxurious dark green coffee cup with dark golden accents, featuring a timeless white peony pattern for an elegant touch.",
    category: "Coffee Cup with Saucer",
    price: 22.99,
  },
  {
    id: 16,
    name: "Blue Coffee Cup with Light Blue Peonies",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298310/cup17_oumigv.png",
    description:
      "Serene blue coffee cup adorned with a light blue peony pattern, bringing a calm and delicate aesthetic to your coffee moments.",
    category: "Coffee Cup with Saucer",
    price: 18.49,
  },

  {
    id: 17,
    name: "Dark Blue Tea Mug with Vine Leaves",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298309/mug1_plcsmg.png",
    description:
      "Stylish dark blue tea mug with light blue vine leaves, perfect for cozy tea times.",
    category: "Tea Mug",
    price: 17.99,
  },
  {
    id: 18,
    name: "White Tea Mug with Green Vine Leaves",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298310/mug2_gemsmm.png",
    description:
      "Simple and fresh white tea mug with a green vine leaf pattern, ideal for herbal teas.",
    category: "Tea Mug",
    price: 14.99,
  },
  {
    id: 19,
    name: "Dark Green Mug with White Peonies",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298312/mug8_vq4ftm.png",
    description:
      "Sophisticated dark green tea mug with golden accents and a white peony pattern for a luxurious feel.",
    category: "Coffee Mug",
    price: 18.99,
  },

  {
    id: 20,
    name: "White Mug with Blue Flowers",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298310/mug3_nmny0a.png",
    description:
      "Charming white mug decorated with a delicate blue flower pattern, perfect for a touch of spring.",
    category: "Coffee Mug",
    price: 14.99,
  },
  {
    id: 21,
    name: "White Mug with Peacock Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298310/mug4_qfcupr.png",
    description:
      "Bright white mug featuring a vivid peacock pattern, bringing a burst of color to your morning routine.",
    category: "Coffee Mug",
    price: 22.49,
  },
  {
    id: 22,
    name: "Dark Blue Tea Mug with Flowers",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298310/mug5_wqgi0m.png",
    description:
      "Intense dark blue mug adorned with blue flowers pattern, offering an elegant feel.",
    category: "Coffee Mug",
    price: 14.49,
  },
  {
    id: 23,
    name: "White Mug with Blue Flowers",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298310/mug6_xnleju.png",
    description:
      "Elegant white mug featuring a blue flower pattern, perfect for adding a touch of floral beauty to your drinkware.",
    category: "Coffee Mug",
    price: 14.99,
  },
  {
    id: 24,
    name: "White Mug with Gray Vine Leaves",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298311/mug7_dxveau.png",
    description:
      "Minimalist white mug adorned with a gray vine leaves pattern, offering a subtle and sophisticated design.",
    category: "Coffee Mug",
    price: 15.49,
  },

  {
    id: 25,
    name: "White Mug with Gray Birds",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298311/mug9_wfuk6n.png",
    description:
      "Simple white mug featuring a delicate gray birds pattern, perfect for a minimalist aesthetic.",
    category: "Coffee Mug",
    price: 14.99,
  },
  {
    id: 26,
    name: "Dark Red-Brown Mug with Birds",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298311/mug10_bavpgv.png",
    description:
      "Warm dark red-brown mug adorned with a gray birds pattern, creating a balanced and cozy atmosphere.",
    category: "Coffee Mug",
    price: 15.99,
  },
  {
    id: 27,
    name: "Dark Brown-Orange Mug with Birds",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298312/mug11_noo6cs.png",
    description:
      "Rich dark brown-orange mug featuring a birds pattern, ideal for adding warmth to your drinkware collection.",
    category: "Coffee Mug",
    price: 17.49,
  },
  {
    id: 28,
    name: "Dark Green Mug with Golden Peacock",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298312/mug14_vbny46.png",
    description:
      "Elegant dark green mug with dark golden accents and a peacock pattern, offering a luxurious and artistic design.",
    category: "Coffee Mug",
    price: 20.99,
  },
  {
    id: 29,
    name: "Light Green Mug with Peacock",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298312/mug13_cnhpzz.png",
    description:
      "Soft light green mug featuring a beautiful peacock pattern, bringing a sense of calm and sophistication.",
    category: "Coffee Mug",
    price: 17.99,
  },
  {
    id: 30,
    name: "Dark Green Mug with Golden Peacock",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298312/mug12_trl6hp.png",
    description:
      "Refined dark green mug with dark golden accents and a peacock pattern, adding an elegant touch to your coffee experience.",
    category: "Coffee Mug",
    price: 20.49,
  },
  {
    id: 31,
    name: "Blue Coffee Cup & Tea Mug Set",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1741298312/set_k8d7dc.png",
    description:
      "Matching coffee cup and tea mug set in blue with light blue flowers, perfect for gifting or personal indulgence.",
    category: "Set",
    price: 30.99,
  },
];

export default products;
