export const orders = [
    {
      id: 1,
      date: 1605898400000,
      total: 10000,
      items: [
        {
            id: 1,
            category: 3,
            title: "Varenyky",
            description: 'Pastas tradicionales de Ucrania. Rellenos de ricota, papa y nuez',
            weight: "1Kg",
            price: 600,
            quantity: 2,
        },
        {
            id: 2,
            category: 2,
            title: 'Sorrentinos de jamón y mozarella',
            description: 'Los clásicos sorrentinos, con jamón y mozarella de verdad',
            weight: "1Kg",
            price: 500,
            quantity: 3,
        },
      ],
    },
    {
        id: 2,
        date: 1705898400000,
        total: 12000,
        items: [
          {
            id: 7,
            categoryId: 4,
            title: 'Raviolones de verdura',
            description: 'Raviolones tamaño extra, rellenos de espinaca y ricota',
            weight: '1Kg',
            price: 500,
            quantity: 2,
          },
          {
            id: 10,
            categoryId: 5,
            title: 'Raviolones de ricota y pera',
            description: 'Sabores especiales',
            weight: '1Kg',
            price: 800,
            quantity: 1,
          },
        ],
      },
    ];