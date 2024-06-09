export type ExploreItem = {
  img: string;
  location: string;
  distance: string;
};

export type SliderItem = {
  img: string;
  title: string;
};

export type SearchResultItem = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

export type ExploreData = ExploreItem[];

export type SliderData = SliderItem[];

export type GreatestProps = {
  img: string;
  title: string;
  description: string;
  linkText: string;
};

export type SearchParamsProps = {
  startDate: string;
  endDate: string;
  numOfGuests: string;
  location: string;
};

export type SearchResultData = SearchResultItem[]
