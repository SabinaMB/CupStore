const products = [
  {
    id: 1,
    name: "Black Coffee Cup with Saucer",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428290/cup1_iwkm6a.png",
    description:
      "Elegant black coffee cup with dark golden accents and a delicate white peony pattern. Perfect for adding sophistication to your coffee moments.",
    category: "Coffee Cup with Saucer",
    price: 20.99,
  },
  {
    id: 2,
    name: "White Coffee Cup with Vine Leaf Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428290/cup2_cb4dkf.png",
    description:
      "Classic white coffee cup with a graceful gray vine leaf pattern. A timeless design for any kitchen.",
    category: "Coffee Cup with Saucer",
    price: 19.99,
  },
  {
    id: 3,
    name: "Dark Blue Coffee Cup with Vine Leaf Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428290/cup3_iu0vpc.png",
    description:
      "Rich dark blue coffee cup adorned with elegant white vine leaves. A stylish choice for your daily brew.",
    category: "Coffee Cup with Saucer",
    price: 17.99,
  },
  {
    id: 4,
    name: "Dark Blue Coffee Cup with Peony Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428290/cup4_bqywle.png",
    description:
      "Charming dark blue coffee cup featuring a white peony pattern, combining luxury and floral beauty.",
    category: "Coffee Cup with Saucer",
    price: 20.49,
  },
  {
    id: 5,
    name: "Dark Red Coffee Cup with Golden Accents",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428290/cup5_dmd0py.png",
    description:
      "Bold dark red coffee cup with golden accents and light pink peonies. A statement piece for your collection.",
    category: "Coffee Cup with Saucer",
    price: 20.99,
  },
  {
    id: 6,
    name: "Light Blue Coffee Cup with Floral Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428290/cup6_wqfnry.png",
    description:
      "Soft light blue coffee cup decorated with delicate white flowers, perfect for peaceful coffee breaks.",
    category: "Coffee Cup with Saucer",
    price: 15.99,
  },
  {
    id: 7,
    name: "White Coffee Cup with Golden and Orange Accents",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428291/cup7_t7eevx.png",
    description:
      "Elegant white coffee cup with golden and dark orange accents, featuring a vibrant orange flower pattern.",
    category: "Coffee Cup with Saucer",
    price: 17.99,
  },
  {
    id: 8,
    name: "White Coffee Cup with Blue Flower Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428291/cup8_tm2bxu.png",
    description:
      "Classic white coffee cup adorned with blue flowers, adding a touch of nature to your table.",
    category: "Coffee Cup with Saucer",
    price: 17.99,
  },
  {
    id: 9,
    name: "White Coffee Cup with Poppies Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428293/cup9_dx0wai.png",
    description:
      "Bright white coffee cup featuring large, vibrant poppies for a cheerful morning routine.",
    category: "Coffee Cup with Saucer",
    price: 18.49,
  },
  {
    id: 10,
    name: "White Coffee Cup with Poppies Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428292/cup10_nxgyvb.png",
    description:
      "Bright white coffee cup featuring a vivid poppies pattern, adding a cheerful, floral touch to your coffee time.",
    category: "Coffee Cup with Saucer",
    price: 18.99,
  },
  {
    id: 11,
    name: "Light Pink Coffee Cup with Golden Accents and Poppies Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428292/cup11_flki3w.png",
    description:
      "Delicate light pink coffee cup with golden accents, adorned with a vibrant poppies pattern for a charming look.",
    category: "Coffee Cup with Saucer",
    price: 20.99,
  },
  {
    id: 12,
    name: "Light Pink Coffee Cup with Golden Accents and Big Poppies Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428292/cup12_xxdgft.png",
    description:
      "Elegant light pink coffee cup with golden accents, showcasing large, bold poppies for a striking floral statement.",
    category: "Coffee Cup with Saucer",
    price: 20.49,
  },
  {
    id: 13,
    name: "White Coffee Cup with Golden Accents, Pink and Blue Peony Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428292/cup12_xxdgft.png",
    description:
      "Elegant white coffee cup with golden accents, featuring a delicate pattern of pink and blue peonies for a graceful touch.",
    category: "Coffee Cup with Saucer",
    price: 20.99,
  },
  {
    id: 14,
    name: "Blue Coffee Cup with Golden Accents and Light Pink Peony Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428292/cup14_sveozn.png",
    description:
      "Charming blue coffee cup with golden accents, decorated with light pink peonies for a soft, romantic vibe.",
    category: "Coffee Cup with Saucer",
    price: 20.49,
  },
  {
    id: 15,
    name: "Dark Green Coffee Cup with Pink Peony Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428293/cup15_mxhmyc.png",
    description:
      "Sophisticated dark green coffee cup adorned with a vibrant pink peony pattern, perfect for adding elegance to your coffee time.",
    category: "Coffee Cup with Saucer",
    price: 20.99,
  },
  {
    id: 16,
    name: "Dark Green Coffee Cup with Dark Golden Accents and White Peony Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428294/cup16_hzre26.png",
    description:
      "Luxurious dark green coffee cup with dark golden accents, featuring a timeless white peony pattern for an elegant touch.",
    category: "Coffee Cup with Saucer",
    price: 22.99,
  },
  {
    id: 17,
    name: "Blue Coffee Cup with Light Blue Peony Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428293/cup17_xiovp9.png",
    description:
      "Serene blue coffee cup adorned with a light blue peony pattern, bringing a calm and delicate aesthetic to your coffee moments.",
    category: "Coffee Cup with Saucer",
    price: 18.49,
  },
  {
    id: 18,
    name: "Dark Blue Coffee Cup with Dark Golden Accents and Light Blue Peony Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428294/cup18_jyiitv.png",
    description:
      "Elegant dark blue coffee cup with dark golden accents, beautifully decorated with light blue peonies for a refined look.",
    category: "Coffee Cup with Saucer",
    price: 22.49,
  },
  {
    id: 19,
    name: "White and Gray Coffee Cup with Flowers Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428293/cup19_qagtvb.png",
    description:
      "Minimalist white and gray coffee cup featuring a delicate floral pattern, perfect for a subtle yet charming style.",
    category: "Coffee Cup with Saucer",
    price: 23.99,
  },
  {
    id: 20,
    name: "Dark Blue Tea Mug with Vine Leaf Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428294/mug1_euw9d8.png",
    description:
      "Stylish dark blue tea mug with light blue vine leaves, perfect for cozy tea times.",
    category: "Tea Mug",
    price: 17.99,
  },
  {
    id: 21,
    name: "White Tea Mug with Green Vine Leaf Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428295/mug2_c44601.png",
    description:
      "Simple and fresh white tea mug with a green vine leaf pattern, ideal for herbal teas.",
    category: "Tea Mug",
    price: 14.99,
  },
  {
    id: 22,
    name: "Dark Blue Mug with Light Blue Vine Leaves Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428294/mug1_euw9d8.png",
    description:
      "Dark blue mug featuring a light blue vine leaves pattern, adding a calm and organic touch.",
    category: "Coffee Mug",
    price: 14.99,
  },
  {
    id: 23,
    name: "White Mug with Green Vine Leaves Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428295/mug2_c44601.png",
    description:
      "Elegant white mug adorned with a green vine leaves pattern, offering a fresh and natural vibe.",
    category: "Coffee Mug",
    price: 14.99,
  },
  {
    id: 24,
    name: "White Mug with Blue Flower Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428298/mug3_wlxuod.png",
    description:
      "Charming white mug decorated with a delicate blue flower pattern, perfect for a touch of spring.",
    category: "Coffee Mug",
    price: 14.99,
  },
  {
    id: 25,
    name: "White Mug with Peacock Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428299/mug4_cukkjp.png",
    description:
      "Bright white mug featuring a vivid peacock pattern, bringing a burst of color to your morning routine.",
    category: "Coffee Mug",
    price: 22.49,
  },
  {
    id: 26,
    name: "Dark Blue Tea Mug with Flowers Pattern",
    image: "mug5.jpg",
    description:
      "Intense dark blue mug adorned with blue flowers pattern, offering an elegant feel.",
    category: "Coffee Mug",
    price: 14.49,
  },

  {
    id: 27,
    name: "White Mug with Blue Flower Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428298/mug6_nxtwun.png",
    description:
      "Elegant white mug featuring a blue flower pattern, perfect for adding a touch of floral beauty to your drinkware.",
    category: "Coffee Mug",
    price: 14.99,
  },
  {
    id: 28,
    name: "White Mug with Gray Vine Leaves Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428299/mug7_y8g21x.png",
    description:
      "Minimalist white mug adorned with a gray vine leaves pattern, offering a subtle and sophisticated design.",
    category: "Coffee Mug",
    price: 15.49,
  },
  {
    id: 29,
    name: "Dark Green Tea Mug with Golden Accents",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428292/cup12_xxdgft.png",
    description:
      "Sophisticated dark green tea mug with golden accents and a white peony pattern for a luxurious feel.",
    category: "Tea Mug",
    price: 20.99,
  },
  {
    id: 30,
    name: "White Mug with Gray Birds Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428299/mug9_pei8lt.png",
    description:
      "Simple white mug featuring a delicate gray birds pattern, perfect for a minimalist aesthetic.",
    category: "Coffee Mug",
    price: 14.99,
  },
  {
    id: 31,
    name: "Dark Red-Brown Mug with Gray Birds Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428300/mug10_v3r30v.png",
    description:
      "Warm dark red-brown mug adorned with a gray birds pattern, creating a balanced and cozy atmosphere.",
    category: "Coffee Mug",
    price: 15.99,
  },
  {
    id: 32,
    name: "Dark Brown-Orange Mug with Birds Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428300/mug11_cunkry.png",
    description:
      "Rich dark brown-orange mug featuring a birds pattern, ideal for adding warmth to your drinkware collection.",
    category: "Coffee Mug",
    price: 17.49,
  },
  {
    id: 33,
    name: "Dark Green Mug with Dark Golden Accents and Peacock Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428300/mug12_jnjivs.png",
    description:
      "Elegant dark green mug with dark golden accents and a peacock pattern, offering a luxurious and artistic design.",
    category: "Coffee Mug",
    price: 20.99,
  },
  {
    id: 34,
    name: "Light Green Mug with Peacock Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428299/mug13_prmhh6.png",
    description:
      "Soft light green mug featuring a beautiful peacock pattern, bringing a sense of calm and sophistication.",
    category: "Coffee Mug",
    price: 17.99,
  },
  {
    id: 35,
    name: "Dark Green Mug with Dark Golden Accents and Peacock Pattern",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428300/mug14_cdyquq.png",
    description:
      "Refined dark green mug with dark golden accents and a peacock pattern, adding an elegant touch to your coffee experience.",
    category: "Coffee Mug",
    price: 20.49,
  },
  {
    id: 36,
    name: "Blue Coffee Cup and Tea Mug Set",
    image:
      "https://res.cloudinary.com/dwsrmg624/image/upload/v1740428302/set_n5ej1r.png",
    description:
      "Matching coffee cup and tea mug set in blue with light blue flowers, perfect for gifting or personal indulgence.",
    category: "Set",
    price: 30.99,
  },
];

export default products;
