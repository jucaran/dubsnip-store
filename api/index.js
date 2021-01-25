const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {
  Product,
  Category,
  Order,
  User,
  Order_Product,
} = require("../api/src/db");

let products = [
  {
    name: "Guitar",
    description:
      "This is the description of an awesome guitar, it has strings and ...",
    price: 299.99,
    picture: "https://alterra.com.ar/dubsnip/guitar.png",
    stock: 5,
  },
  {
    name: "Cymbal",
    description: "An awesome cymbal that makes a really good noise ... ",
    price: 49.99,
    picture: "https://alterra.com.ar/dubsnip/cymbal.png",
    stock: 10,
  },
  {
    name: "Micro",
    description:
      "Best microphone in the market, awesome price and everything ...",
    price: 699.99,
    picture: "https://alterra.com.ar/dubsnip/microphone.png",
    stock: 200,
  },
  {
    name: "Horn",
    description:
      "Best horn in the market, you will have the best soplada with it ...",
    price: 14.99,
    picture:
      "https://images-na.ssl-images-amazon.com/images/I/51VOZGyDvaL._AC_SL1001_.jpg",
    stock: 13,
  },
  {
    name: "Saxo",
    description:
      "Made of brass with gold plating technique, it is a high quality craftwork.",
    price: 24.09,
    picture:
      "https://images-na.ssl-images-amazon.com/images/I/51t2ySaJX6L._AC_SL1001_.jpg",
    stock: 3,
  },
  {
    name: "Drum",
    description:
      "The Music Alley 3 piece drum set is an ideal kids drum set for the young beginner aged from 3 to 8.",
    price: 89.99,
    picture:
      "https://images-na.ssl-images-amazon.com/images/I/712PhLFrqvL._AC_SL1500_.jpg",
    stock: 20,
  },
  {
    name: `Trumpet`,
    description:
      "Another brand new series Kaizer is introducing this year is the 3000 Series trumpets.",
    price: 232.99,
    picture:
      "https://images-na.ssl-images-amazon.com/images/I/71l6xKqHLCL._AC_SL1500_.jpg",
    stock: 30,
  },
  {
    name: "Harp",
    description: "Very piola harp.",
    price: 19.99,
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_2X_744742-MLA43653066378_102020-F.webp",
    stock: 16,
  },
  {
    name: "Axe Guitar",
    description: "Cort Gsaxe Axe Gene Simmons Signature Bajo Hacha.",
    price: 199.99,
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_2X_746215-MLA31128310328_062019-F.webp",
    stock: 5,
  },
];

let categories = [
  {
    name: "Strings",
    description: "Strings description",
  },
  {
    name: "Wind",
    description: "Winds description",
  },
  {
    name: "Keyboard",
    description: "Keyboard description",
  },
  {
    name: "Brass",
    description: "Brass (vientos de metal) description",
  },
  {
    name: "Percussion",
    description: "Percussion instruments description",
  },
];

// Asigno siempre la fecha del dia actual
var today = new Date();
let orders = [
  {
    state: "cart",
    date: `${today.getUTCDate()}/${today.getUTCMonth()}/${today.getUTCFullYear()}`,
  },
  {
    state: "created",
    date: `${today.getUTCDate()}/${today.getUTCMonth()}/${today.getUTCFullYear()}`,
  },
  {
    state: "processing",
    date: `${today.getUTCDate()}/${today.getUTCMonth()}/${today.getUTCFullYear()}`,
  },
  {
    state: "cancelled",
    date: `${today.getUTCDate()}/${today.getUTCMonth()}/${today.getUTCFullYear()}`,
  },
  {
    state: "completed",
    date: `${today.getUTCDate()}/${today.getUTCMonth()}/${today.getUTCFullYear()}`,
  },
];

let users = [
  {
    givenName: "Franco",
    familyName: "pado",
    email: "francoascarate349@gmail.com",
    password: "francofacha",
    isAdmin: true,
    isMailVerified: true,
    photoUrl:
      "https://vignette.wikia.nocookie.net/los-padrinos-magicos4real/images/e/ec/Timmy-turner-personajes-padrinos-magicos.png/revision/latest?cb=20180315152313&path-prefix=es",
    address: "Debajo del puente",
    postal_code: "T4000",
    city: "Tucuman",
  },
  {
    givenName: "Laura",
    familyName: "Laurete",
    email: "laurafacha@gmail.com",
    password: "laurapiolinga",
    isAdmin: true,
    isMailVerified: true,
    photoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjW_aj_jUy1rVR_vAA7dR5STTqJB9WZh1i3A&usqp=CAU",
    address: "Una calle de Santa fe",
    postal_code: "S3000",
    city: "Santa Fe",
  },
  {
    givenName: "Juan",
    familyName: "Vikingo",
    email: "juanragnarlothbrok@gmail.com",
    password: "juancruzfacha",
    isAdmin: true,
    isMailVerified: true,
    photoUrl:
      "https://pbs.twimg.com/profile_images/1228481171488727040/vPlRRVhw_400x400.jpg",
    address: "Por una calle de Escobar",
    postal_code: "B1625",
    city: "Buenos Aires",
  },
  {
    givenName: "Sixto",
    familyName: "Chile",
    email: "sixto@gmail.com",
    password: "sixtuplo",
    isAdmin: true,
    isMailVerified: true,
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
    address: "Por una calle de Chile",
    postal_code: "832 0000",
    city: "Santiago de Chile",
  },
  {
    givenName: "Lisbeth",
    familyName: "Capa",
    email: "lis@gmail.com",
    password: "ron",
    isAdmin: true,
    isMailVerified: true,
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Appleton_Estate_V-X_Jamaica_Rum-with_glass.jpg/270px-Appleton_Estate_V-X_Jamaica_Rum-with_glass.jpg",
    address: "Por una calle de Venezuela",
    postal_code: "1010",
    city: "Caracas",
  },
  {
    givenName: "Joaquin",
    familyName: "joaco",
    email: "joafran0016@gmail.com",
    password: "chaqueñopalavecino",
    isAdmin: true,
    isMailVerified: true,
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Chaco_in_Argentina_%28%2BFalkland%29.svg/270px-Chaco_in_Argentina_%28%2BFalkland%29.svg.png",
    address: "Por una calle del Chaco",
    postal_code: "H3500",
    city: "Chaco",
  },
  {
    givenName: "Prueba",
    familyName: "Facil",
    email: "prueba@facil.com",
    password: "1234",
    isAdmin: false,
    isMailVerified: true,
    photoUrl:
      "https://pbs.twimg.com/profile_images/1228481171488727040/vPlRRVhw_400x400.jpg",
    address: "Por una calle del Chaco",
    postal_code: "H3500",
    city: "Chaco",
  },
  {
    givenName: "DubsNip",
    familyName: "Store",
    email: "dubsnip.store@gmail.com",
    password: "1234",
    isAdmin: false,
    isMailVerified: true,
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Chaco_in_Argentina_%28%2BFalkland%29.svg/270px-Chaco_in_Argentina_%28%2BFalkland%29.svg.png",
    address: "Por una calle del Chaco",
    postal_code: "H3500",
    city: "Chaco",
  },
];

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(1337, async () => {
    console.log("%s listening at 1337"); // eslint-disable-line no-console

    //Charging categories
    categories.forEach(async (category) => {
      await Category.create(category);
    });

    //Charging products
    products.forEach(async (product) => {
      let producto = await Product.create(product);
      //Assigning a random category to the created product
      producto.addCategory(Math.floor(Math.random() * categories.length + 1));
    });

    orders.forEach(async (order, i) => {
      const orden3 = await Order.create(order);
      //Assigning products to orders!
      const product1 = await Product.findByPk(1);
      const product2 = await Product.findByPk(2);
      await orden3.addProduct(product1, {
        through: {
          quantity: Math.floor(Math.random() * 8 + 1),
          price: 1 * product1.price,
        },
      });
      await orden3.addProduct(product2, {
        through: {
          quantity: Math.floor(Math.random() * 8 + 1),
          price: 1 * product2.price,
        },
      });
      // await orden.addProduct(product2);
      const user2 = await User.findByPk(7);
      await orden3.setUser(user2);
      //orden.update( {userId: user1.id })
    });

    //Charging Users
    users.forEach(async (user, i) => {
      const usuario = await User.create(user);
    });

    console.log("Productos y categorias cargados");
  });
});
