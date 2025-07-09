export interface House {
  id: string;
  title: string | null;
  description: string | null;
  site_type: string | null;
  photos: string[];
  price: number;
  is_rent: boolean;
  rooms: number;
  bathrooms: number;
  toilets: number;
  beds: number;
  area: number;
  wifi: boolean;
  conditioner: boolean;
  city: string | null;
  region: string | null;
  address: string | null;
  roommate_search: boolean;
}
