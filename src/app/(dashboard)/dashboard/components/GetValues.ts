export interface IGetAllValue {
   expirationDate:string,
  information: IInformation;
  iAInformation: IAInformation;
  iDescription: IDescription;
  amenities: string[];
  images: File[]; // ← добавлено
}

export interface IUser {
    id:number,
    userGmail: string,
    allValue: IGetAllValue,
    quantitySetupPropert: number,
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