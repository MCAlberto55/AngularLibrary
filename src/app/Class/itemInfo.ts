interface itemInterface {
  itemTitle: string;
  itemPrice: string;
  itemCategory: string;
  itemDescription: string;
  itemImage: string;
}

class itemInfo implements itemInterface {
  itemTitle: string = '';
  itemPrice: string = '';
  itemCategory: string = '';
  itemDescription: string = '';
  itemImage: string = '';

  constructor(
    title: string,
    price: string,
    category: string,
    descripcion: string,
    image: string
  ) {
    this.itemTitle = title;
    this.itemPrice = price;
    this.itemCategory = category;
    this.itemDescription = descripcion;
    this.itemImage = image;
  }
}
