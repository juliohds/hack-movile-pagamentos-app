let properties: Array<any> = [
  {
    id: 1,
    address: "Av Paulista",
    city: "São Paulo",
    state: "SP",
    zip: "01742",
    price: "$39,90",
    title: "Promoção de pizzas Quint-Dom ",
    bedrooms: 4,
    bathrooms: 3,
    long: -71.11095,
    lat: 42.35663,
    picture: "assets/img/pizza-coke.jpeg",
    thumbnail: "assets/img/pizza-coke.jpeg",
    tags: "colonial",
    description: "Lorem ipsum dolor sit amet",
    broker: {
      id: 1,
      name: "Caroline Kingsley",
      title: "Senior Broker",
      picture:
        "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
    }
  },
  {
    id: 2,
    address: "Rua Oscar Freire",
    city: "São Paulo",
    state: "SP",
    zip: "02420",
    price: "$50,00",
    title: "Pitcho Pizzaria",
    bedrooms: 5,
    bathrooms: 4,
    long: -71.10869,
    lat: 42.359103,
    picture: "assets/img/pizza.jpeg",
    thumbnail: "assets/img/pizza.jpeg",
    tags: "colonial",
    description: "Lorem ipsum dolor sit amet",
    broker: {
      id: 1,
      name: "Caroline Kingsley",
      title: "Senior Broker",
      picture:
        "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
    }
  },
  {
    id: 3,
    address: "Rua da Mooca",
    city: "São Paulo",
    state: "SP",
    zip: "02420",
    price: "$65,00",
    title: "Hamburgeria e Pastelaria",
    bedrooms: 5,
    bathrooms: 4,
    long: -71.070061,
    lat: 42.359986,
    picture: "assets/img/ham.jpeg",
    thumbnail: "assets/img/ham.jpeg",
    tags: "contemporary",
    description: "Lorem ipsum dolor sit amet",
    broker: {
      id: 2,
      name: "Michael Jones",
      title: "Senior Broker",
      picture:
        "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
    }
  },
  {
    id: 4,
    address: "Rua General Argolo",
    city: "São Paulo",
    state: "SP",
    zip: "02420",
    price: "$23,00",
    title: "Hamburgeria Gourme",
    bedrooms: 5,
    bathrooms: 4,
    long: -71.110448,
    lat: 42.360642,
    picture: "assets/img/ham-big.jpeg",
    thumbnail: "assets/img/ham-big.jpeg",
    tags: "victorian",
    description: "Lorem ipsum dolor sit amet",
    broker: {
      id: 3,
      name: "Jonathan Bradley",
      title: "Senior Broker",
      picture:
        "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
    }
  },
  {
    id: 5,
    address: "Rua Moarcir Santana",
    city: "São Paulo",
    state: "SP",
    zip: "02420",
    price: "$10,00",
    title: "Espetinhos de Frango - Os melhores",
    bedrooms: 3,
    bathrooms: 2,
    long: -71.084454,
    lat: 42.368168,
    picture: "assets/img/espetinho.jpeg",
    thumbnail: "assets/img/espetinho.jpeg",
    tags: "contemporary",
    description: "Lorem ipsum dolor sit amet",
    broker: {
      id: 4,
      name: "Jennifer Wu",
      title: "Senior Broker",
      picture:
        "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
    }
  },
  {
    id: 6,
    address: "Rua Francisco Onorarios",
    city: "São Paulo",
    state: "SP",
    zip: "02420",
    price: "$25,000",
    title: "Coxinha e Bolinho de Queijo - Promoção",
    bedrooms: 4,
    bathrooms: 2,
    long: -71.052617,
    lat: 42.366855,
    picture: "assets/img/bolinhos.jpeg",
    thumbnail: "assets/img/bolinhos.jpeg",
    tags: "colonial",
    description: "Lorem ipsum dolor sit amet",
    broker: {
      id: 5,
      name: "Olivia Green",
      title: "Senior Broker",
      picture:
        "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
    }
  },
  {
    id: 7,
    address: "Rua São Carlos",
    city: "São Carlos",
    state: "SP",
    zip: "02420",
    price: "$15,00",
    title: "City Living",
    bedrooms: 3,
    bathrooms: 1,
    long: -71.057352,
    lat: 42.365003,
    picture: "assets/img/lanchao.jpeg",
    thumbnail: "assets/img/lanchao.jpeg",
    tags: "colonial",
    description: "Lorem ipsum dolor sit amet",
    broker: {
      id: 6,
      name: "Miriam Aupont",
      title: "Senior Broker",
      picture:
        "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg"
    }
  },
  {
    id: 8,
    address: "48 Brattle st",
    city: "Mauá",
    state: "SP",
    zip: "02420",
    price: "$75,00",
    title: "Rodizio Japonês mais de 40 tipos",
    bedrooms: 5,
    bathrooms: 4,
    long: -71.121653,
    lat: 42.374117,
    picture: "assets/img/japa.jpeg",
    thumbnail: "assets/img/japa.jpeg",
    tags: "victorian",
    description: "Lorem ipsum dolor sit amet",
    broker: {
      id: 7,
      name: "Michelle Lambert",
      title: "Senior Broker",
      picture:
        "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michelle_lambert.jpg"
    }
  },
  {
    id: 9,
    address: "121 Harborwalk",
    city: "Boston",
    state: "MA",
    zip: "02420",
    price: "$450,000",
    title: "Seaport District Retreat",
    bedrooms: 3,
    bathrooms: 3,
    long: -71.049327,
    lat: 42.35695,
    picture: "assets/img/bata.jpeg",
    thumbnail: "assets/img/bata.jpeg",
    tags: "contemporary",
    description: "Lorem ipsum dolor sit amet",
    broker: {
      id: 2,
      name: "Michael Jones",
      title: "Senior Broker",
      picture:
        "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
    }
  },
  {
    id: 10,
    address: "503 Park Drive",
    city: "Boston",
    state: "MA",
    zip: "02420",
    price: "$650,000",
    title: "City Living",
    bedrooms: 2,
    bathrooms: 2,
    long: -71.105475,
    lat: 42.3474,
    picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house08.jpg",
    thumbnail:
      "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house08sq.jpg",
    tags: "contemporary",
    description: "Lorem ipsum dolor sit amet",
    broker: {
      id: 1,
      name: "Caroline Kingsley",
      title: "Senior Broker",
      picture:
        "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
    }
  },
  {
    id: 11,
    address: "95 Gloucester st",
    city: "Boston",
    state: "MA",
    zip: "02420",
    price: "$690,000",
    title: "Architectural Details",
    bedrooms: 3,
    bathrooms: 3,
    lat: 42.349693,
    long: -71.084407,
    picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house11.jpg",
    thumbnail:
      "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house11sq.jpg",
    tags: "contemporary",
    description: "Lorem ipsum dolor sit amet",
    broker: {
      id: 4,
      name: "Jennifer Wu",
      title: "Senior Broker",
      picture:
        "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
    }
  },
  {
    id: 12,
    address: "145 Commonwealth ave",
    city: "Boston",
    state: "MA",
    zip: "02420",
    price: "$845,000",
    title: "Contemporary Luxury",
    bedrooms: 4,
    bathrooms: 3,
    lat: 42.352466,
    long: -71.075311,
    picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house12.jpg",
    thumbnail:
      "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house12sq.jpg",
    tags: "colonial",
    description: "Lorem ipsum dolor sit amet",
    broker: {
      id: 5,
      name: "Olivia Green",
      title: "Senior Broker",
      picture:
        "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
    }
  }
];

export default properties;
