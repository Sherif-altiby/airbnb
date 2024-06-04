export const getExplore = async () => {
  try {
    const respone = await fetch(`https://www.jsonkeeper.com/b/4G1G`);
    const exploreData = await respone.json();

    return exploreData;
  } catch (error) {
    console.log(error);
  }
};


export const getSliderData = async () => {
  try {
    const respone = await fetch(`https://www.jsonkeeper.com/b/VHHT`);
    const sliderData = await respone.json();

    return sliderData;
  } catch (error) {
    console.log(error);
  }
};
