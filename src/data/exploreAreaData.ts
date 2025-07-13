import { INeighbourhoodProperty } from "@/types/property-d-t";
import exploreThumb1 from "../../public/assets/img/explore/first.png";
import exploreThumb2 from "../../public/assets/img/explore/second.png";
import exploreThumb3 from "../../public/assets/img/explore/thrid.png";
import exploreThumb4 from "../../public/assets/img/explore/fouthh.png";
import exploreThumb5 from "../../public/assets/img/explore/fiveth.png";
import exploreThumb6 from "../../public/assets/img/explore/sixth.png";

const neighbourhoodsData:INeighbourhoodProperty[] = [

 { id: 1, name: "Interior decoration", image: exploreThumb1, count:  [
  "Tile laying",
  "Wall painting",
  "Wallpaper installation",
  "Stretch ceilings",
  "Laminate flooring",
  "Interior door installation"
] },
    { id: 2, name: "Electricity & communications", image: exploreThumb2, count:  [
  "Electrical installation",
  "Heating",
  "Ventilation and air conditioning",
  "Water supply",
  "Boiler installation",
  "Cable laying / electrical panel"
]  },
    { id: 3, name: "Plumbing services", image: exploreThumb3, count:  [
  "Toilet installation",
  "Washing machine connection",
  "Shower cabin installation",
  "Pipe replacement",
  "Sink installation",
  "Clog removal"
]},
     { id: 1, name: "Construction & engineering works", image: exploreThumb4, count:  [
  "Foundation works",
  "Wall / bricklaying",
  "Roofing works",
  "Plastering and puttying",
  "Drywall installation",
  "Solar panel installation"
] },
    { id: 5, name: "Landscaping & facade", image: exploreThumb5, count:   [
  "Facade works",
  "House insulation",
  "Gutter installation",
  "Concrete walkways",
  "Landscape design",
  "Automatic sprinkler system"
] },
    { id: 6, name: "Additional services", image: exploreThumb6, count: [
  "Post-renovation cleaning",
  "Construction debris removal",
  "Turnkey renovation",
  "Custom furniture",
  "Interior design",
  "Furniture assembly"
] },
];

export default neighbourhoodsData;