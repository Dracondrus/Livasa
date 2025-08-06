export interface IUser {
    // google info
    id:string,
    email: string,
    image: string,
    name: string,

    // Livasa info
    firstName: string,
    secondName: string,
    phoneNumber: string,
    about:string,
    properties: IGetAllValueProperty[],
    quantitySetupPropert: number,
}

export interface IGetAllValueProperty {  
  id: string,
  expirationDate:string,
  information: IInformation;
  iAInformation: IAInformation;
  iDescription: IDescription;
  amenities: string[];
  images: ICloudinaryImage[]; // ← изменено
  permission: boolean
}


export interface ICloudinaryImage {
  url: string;
  public_id: string;
}


export interface IInformation {
    
    
    country: string,
    neighborhood:string,
    typeProperty: string,
    address:string,
    location: string
}


export interface IAInformation {
    unitPrice: string,
    price: number,
    size:number,
    rooms:number,
    bathrooms:number,
    yearBuilt:number,
}

export interface IDescription {
    description:string
}