const goa = {
    heroImage: require("../../assets/Goa/jaipur.jpg"),
    description:
      "Goa, India’s beach paradise, is known for its sandy shores, vibrant nightlife, Portuguese heritage, and laid-back lifestyle. It offers a unique blend of Indian and European cultures.",
    quickInfo: {
      bestTime: "November to February",
      culture:
        "A lively fusion of Indian and Portuguese traditions. Known for music festivals, seafood cuisine, churches, and beach parties.",
      popularCities: ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
    },
    places: [
      {
        name: "Baga Beach",
        description:
          "Famous for water sports, beach shacks, seafood, and nightlife.",
        image: require("../../assets/Goa/about-banner.jpg"),
      },
      {
        name: "Basilica of Bom Jesus",
        description:
          "A UNESCO World Heritage Site known for its Baroque architecture and housing the mortal remains of St. Francis Xavier.",
        image: require("../../assets/Goa/taj.jpg"),
      },
      {
        name: "Dudhsagar Falls",
        description:
          "One of India’s tallest waterfalls, located in Mollem National Park, offering breathtaking views especially in the monsoon.",
        image: require("../../assets/Goa/jaipur.jpg"),
      },
      {
        name: "Fort Aguada",
        description:
          "A 17th-century Portuguese fort with a lighthouse, overlooking the Arabian Sea and providing stunning sunset views.",
        image: require("../../assets/Goa/taj.jpg"),
      },
    ],
    routes: [
      {
        title: "Panaji to Baga Beach",
        duration: "30 minutes",
        distance: "16 km",
        description: "A short drive from the capital city to the most famous beach.",
      },
      {
        title: "Panaji to Dudhsagar Falls",
        duration: "2 hours",
        distance: "70 km",
        description: "Scenic journey through forests leading to the majestic falls.",
      },
      {
        title: "Panaji to Old Goa",
        duration: "20 minutes",
        distance: "10 km",
        description: "Historic churches and colonial architecture await.",
      },
    ],
    festivals: [
      "Goa Carnival",
      "Shigmo Festival",
      "Sunburn Festival",
      "Christmas & New Year Celebrations",
    ],
    cuisine: [
      "Goan Fish Curry",
      "Prawn Balchão",
      "Bebinca",
      "Vindaloo",
      "Feni (local drink)",
    ],
  };
  
  export default goa;
  