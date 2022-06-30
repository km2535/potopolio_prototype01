class Datas {
  constructor(title, bg, url, font) {
    this.title = title;
    this.bg = bg;
    this.url = url;
    this.font = font;
  }
}
export const initial = [
  {
    id: 1,
    data: new Datas(
      "myrealtrip",
      "/images/myrealtrip.jpg",
      "/images/myrealtrip-bg1.png",
      "white"
    ),
  },
  {
    id: 2,
    data: new Datas(
      "koreana",
      "/images/koreana.jpg",
      "/images/koreana.png",
      "black"
    ),
  },
];
