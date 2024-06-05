export type ExploreItem = {
  img: string;
  location: string;
  distance: string;
};

export type SliderItem = {
  img: string;
  title: string;
}

export type ExploreData = ExploreItem[];

export type SliderData = SliderItem[]


export type GreatestProps = {
  img: string;
  title: string;
  description: string;
  linkText: string;
}