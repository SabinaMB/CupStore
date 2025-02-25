const products = [
  {
    id: 1,
    name: "Black coffee cup with dark golden accents and peony pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428290/cup1_iwkm6a.png",
    description:
      "Elegant black coffee cup with dark golden accents and a delicate white peony pattern. Perfect for adding sophistication to your coffee moments.",
    category: "Coffee Cup with Saucer",
    price: 20.99,
  },
  {
    id: 2,
    name: "White coffee cup with vine leaf pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428290/cup2_cb4dkf.png",
    description:
      "Classic white coffee cup with a graceful gray vine leaf pattern. A timeless design for any kitchen.",
    category: "Coffee Cup with Saucer",
    price: 19.99,
  },
  {
    id: 3,
    name: "Dark blue coffee cup with vine leaf pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428290/cup3_iu0vpc.png",
    description:
      "Rich dark blue coffee cup adorned with elegant white vine leaves. A stylish choice for your daily brew.",
    category: "Coffee Cup with Saucer",
    price: 17.99,
  },
  {
    id: 4,
    name: "Dark blue coffee cup with peony pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428290/cup4_bqywle.png",
    description:
      "Charming dark blue coffee cup featuring a white peony pattern, combining luxury and floral beauty.",
    category: "Coffee Cup with Saucer",
    price: 20.49,
  },
  {
    id: 5,
    name: "Dark red coffee cup with golden accents",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428290/cup5_dmd0py.png",
    description:
      "Bold dark red coffee cup with golden accents and light pink peonies. A statement piece for your collection.",
    category: "Coffee Cup with Saucer",
    price: 20.99,
  },
  {
    id: 6,
    name: "Light blue coffee cup with floral pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428290/cup6_wqfnry.png",
    description:
      "Soft light blue coffee cup decorated with delicate white flowers, perfect for peaceful coffee breaks.",
    category: "Coffee Cup with Saucer",
    price: 15.99,
  },
  {
    id: 7,
    name: "White coffee cup with golden and orange accents",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428291/cup7_t7eevx.png",
    description:
      "Elegant white coffee cup with golden and dark orange accents, featuring a vibrant orange flower pattern.",
    category: "Coffee Cup with Saucer",
    price: 17.99,
  },
  {
    id: 8,
    name: "White coffee cup with blue flower pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428291/cup8_tm2bxu.png",
    description:
      "Classic white coffee cup adorned with blue flowers, adding a touch of nature to your table.",
    category: "Coffee Cup with Saucer",
    price: 17.99,
  },
  {
    id: 9,
    name: "White coffee cup with poppies pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428293/cup9_dx0wai.png",
    description:
      "Bright white coffee cup featuring large, vibrant poppies for a cheerful morning routine.",
    category: "Coffee Cup with Saucer",
    price: 18.49,
  },
  {
    id: 10,
    name: "White coffee cup with poppies pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428292/cup10_nxgyvb.png",
    description:
      "Bright white coffee cup featuring a vivid poppies pattern, adding a cheerful, floral touch to your coffee time.",
    category: "Coffee Cup with Saucer",
    price: 18.99,
  },
  {
    id: 11,
    name: "Light pink coffee cup with golden accents and poppies pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428292/cup11_flki3w.png",
    description:
      "Delicate light pink coffee cup with golden accents, adorned with a vibrant poppies pattern for a charming look.",
    category: "Coffee Cup with Saucer",
    price: 20.99,
  },
  {
    id: 12,
    name: "Light pink coffee cup with golden accents and big poppies pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428292/cup12_xxdgft.png",
    description:
      "Elegant light pink coffee cup with golden accents, showcasing large, bold poppies for a striking floral statement.",
    category: "Coffee Cup with Saucer",
    price: 20.49,
  },

  {
    id: 13,
    name: "Blue coffee cup with golden accents and light pink peony pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428292/cup14_sveozn.png",
    description:
      "Charming blue coffee cup with golden accents, decorated with light pink peonies for a soft, romantic vibe.",
    category: "Coffee Cup with Saucer",
    price: 20.49,
  },
  {
    id: 14,
    name: "Dark green coffee cup with pink peony pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428293/cup15_mxhmyc.png",
    description:
      "Sophisticated dark green coffee cup adorned with a vibrant pink peony pattern, perfect for adding elegance to your coffee time.",
    category: "Coffee Cup with Saucer",
    price: 20.99,
  },
  {
    id: 15,
    name: "Dark green coffee cup with dark golden accents and white peony pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428294/cup16_hzre26.png",
    description:
      "Luxurious dark green coffee cup with dark golden accents, featuring a timeless white peony pattern for an elegant touch.",
    category: "Coffee Cup with Saucer",
    price: 22.99,
  },
  {
    id: 16,
    name: "Blue coffee cup with light blue peony pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428293/cup17_xiovp9.png",
    description:
      "Serene blue coffee cup adorned with a light blue peony pattern, bringing a calm and delicate aesthetic to your coffee moments.",
    category: "Coffee Cup with Saucer",
    price: 18.49,
  },

  {
    id: 17,
    name: "White and gray coffee cup with flowers pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428293/cup19_qagtvb.png",
    description:
      "Minimalist white and gray coffee cup featuring a delicate floral pattern, perfect for a subtle yet charming style.",
    category: "Coffee Cup with Saucer",
    price: 23.99,
  },
  {
    id: 18,
    name: "Dark blue tea mug with vine leaf pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428294/mug1_euw9d8.png",
    description:
      "Stylish dark blue tea mug with light blue vine leaves, perfect for cozy tea times.",
    category: "Tea Mug",
    price: 17.99,
  },
  {
    id: 19,
    name: "White tea mug with green vine leaf pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428295/mug2_c44601.png",
    description:
      "Simple and fresh white tea mug with a green vine leaf pattern, ideal for herbal teas.",
    category: "Tea Mug",
    price: 14.99,
  },
  {
    id: 20,
    name: "Dark blue mug with light blue vine leaves pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428294/mug1_euw9d8.png",
    description:
      "Dark blue mug featuring a light blue vine leaves pattern, adding a calm and organic touch.",
    category: "Coffee Mug",
    price: 14.99,
  },
  {
    id: 21,
    name: "White mug with green vine leaves pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428295/mug2_c44601.png",
    description:
      "Elegant white mug adorned with a green vine leaves pattern, offering a fresh and natural vibe.",
    category: "Coffee Mug",
    price: 14.99,
  },
  {
    id: 22,
    name: "White mug with blue flower pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428298/mug3_wlxuod.png",
    description:
      "Charming white mug decorated with a delicate blue flower pattern, perfect for a touch of spring.",
    category: "Coffee Mug",
    price: 14.99,
  },
  {
    id: 23,
    name: "White mug with peacock pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428299/mug4_cukkjp.png",
    description:
      "Bright white mug featuring a vivid peacock pattern, bringing a burst of color to your morning routine.",
    category: "Coffee Mug",
    price: 22.49,
  },
  {
    id: 24,
    name: "Dark blue tea mug with flowers pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428298/mug5_m1ijrs.png",
    description:
      "Intense dark blue mug adorned with blue flowers pattern, offering an elegant feel.",
    category: "Coffee Mug",
    price: 14.49,
  },

  {
    id: 25,
    name: "White mug with blue flower pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428298/mug6_nxtwun.png",
    description:
      "Elegant white mug featuring a blue flower pattern, perfect for adding a touch of floral beauty to your drinkware.",
    category: "Coffee Mug",
    price: 14.99,
  },
  {
    id: 26,
    name: "White mug with gray vine leaves pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428299/mug7_y8g21x.png",
    description:
      "Minimalist white mug adorned with a gray vine leaves pattern, offering a subtle and sophisticated design.",
    category: "Coffee Mug",
    price: 15.49,
  },

  {
    id: 27,
    name: "White mug with gray birds pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428299/mug9_pei8lt.png",
    description:
      "Simple white mug featuring a delicate gray birds pattern, perfect for a minimalist aesthetic.",
    category: "Coffee Mug",
    price: 14.99,
  },
  {
    id: 28,
    name: "Dark red-brown mug with gray birds pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428300/mug10_v3r30v.png",
    description:
      "Warm dark red-brown mug adorned with a gray birds pattern, creating a balanced and cozy atmosphere.",
    category: "Coffee Mug",
    price: 15.99,
  },
  {
    id: 29,
    name: "Dark brown-orange mug with birds pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428300/mug11_cunkry.png",
    description:
      "Rich dark brown-orange mug featuring a birds pattern, ideal for adding warmth to your drinkware collection.",
    category: "Coffee Mug",
    price: 17.49,
  },
  {
    id: 30,
    name: "Dark green mug with dark golden accents and peacock pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428300/mug12_jnjivs.png",
    description:
      "Elegant dark green mug with dark golden accents and a peacock pattern, offering a luxurious and artistic design.",
    category: "Coffee Mug",
    price: 20.99,
  },
  {
    id: 31,
    name: "Light green mug with peacock pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428299/mug13_prmhh6.png",
    description:
      "Soft light green mug featuring a beautiful peacock pattern, bringing a sense of calm and sophistication.",
    category: "Coffee Mug",
    price: 17.99,
  },
  {
    id: 32,
    name: "Dark green mug with dark golden accents and peacock pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428300/mug14_cdyquq.png",
    description:
      "Refined dark green mug with dark golden accents and a peacock pattern, adding an elegant touch to your coffee experience.",
    category: "Coffee Mug",
    price: 20.49,
  },
  {
    id: 33,
    name: "Blue set: coffee cup and tea mug",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428302/set_n5ej1r.png",
    description:
      "Matching coffee cup and tea mug set in blue with light blue flowers, perfect for gifting or personal indulgence.",
    category: "Set",
    price: 30.99,
  },
];

export default products;
