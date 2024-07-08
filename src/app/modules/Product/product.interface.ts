export type TProduct = {
    name: string,
    imageUrl:string,
    price: number,
    quantity: number,
    releaseDate: string,
    brand: string,
    model: string,
    type:  'road'| 'mountain'| 'hybrid',
    size: string,
    color: string,
    material: string,
    suspensionType: string,
    customAttributes: string,
    isDeleted:boolean
  };
  
  