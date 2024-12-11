let products = document.querySelector("#products");

let data = [
  {
    img: "https://remont-rolex.ru/wp-content/uploads/4/2/8/428280be0c39bd8e021cd16da844b881.jpeg",
    title: "Rolex",
    price: "25000$",
  },
  {
    img: "https://outmaxshop.ru/components/com_jshopping/files/img_products/15638/rolex-15638-1.jpg",
    title: "Rolex",
    price: "15000$",
  },
  {
    img: "https://remont-rolex.ru/wp-content/uploads/7/d/9/7d9471e4e6178c851896915401c07f60.jpeg",
    title: "Rolex",
    price: "50000$",
  },
  {
    img: "https://replica--club.ru/image/cache/catalog/Watch-Rolex/rolex_k10652_799-600x600.jpg",
    title: "Rolex",
    price: "32000$",
  },
  {
    img: "https://remont-rolex.ru/wp-content/uploads/7/7/0/770511f135f20896d676cc305996873e.jpeg",
    title: "Rolex",
    price: "35000$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=f36498c0b72947183402023b963d3e33_l-4833751-images-thumbs&n=13",
    title: "Rolex",
    price: "19000$",
  },
  {
    img: "https://overclockers.ru/st/legacy/blog/413830/522424_O.jpg",
    title: "Rolex",
    price: "40000$",
  },
  {
    img: "https://wallpapers.com/images/hd/rolex-1920-x-1080-background-rhmnf5e97m6jzipe.jpg",
    title: "Rolex",
    price: "42000$",
  },
  {
    img: "https://www.watchclub.com/upload/watches/originali/watch-club-rolex-cosmograph-daytona-18ct-everose-gold-box-and-papers-ref-116505-year-2012-wb.jpgwbwbwbwbwb8.jpg",
    title: "Rolex",
    price: "24000$",
  },
  {
    img: "https://remont-rolex.ru/wp-content/uploads/6/5/8/658c6b809ef1fc3a8b97270a2711654c.jpeg",
    title: "Rolex",
    price: "48000$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=b3e1fa049018957fba55b68a02e6b1b9_l-8209926-images-thumbs&n=13",
    title: "Rolex",
    price: "10000$",
  },
  {
    img: "https://static.alltime.ru/obj/article/image-blog/kakoy_vy_kinogeroy/kakoy_vy_kinogeroy_2.jpg",
    title: "Rolex",
    price: "56000$",
  },
  {
    img: "https://mig.pics/x/uploads/posts/2023-05/1684949435_mykaleidoscope-ru-p-dorogie-zolotie-chasi-zhenskie-pinterest-1.jpg",
    title: "Rolex",
    price: "100000$",
  },
  {
    img: "https://millenarywatches.com/wp-content/uploads/2019/02/IMG_1582.jpg",
    title: "Rolex",
    price: "500000$",
  },
  {
    img: "https://supercarblondie.com/wp-content/uploads/Jacob-Co-Tsavorite-close-up.jpg",
    title: "Jacob & Co",
    price: "777000$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=3842a708df6b517c480c8991b028d341_l-10596448-images-thumbs&n=13",
    title: "Oris",
    price: "120000$",
  },
];

for (let item of data) {
  products.innerHTML += `  
   <article class="border rounded-lg bg-white overflow-hidden">
          <img src="${item.img}" alt="" class="w-full h-44 object-cover" />
          <div class="p-2">
            <h1 class="text-lg font-medium text-gray-900">${item.title}</h1>
            <h2 class="text-blue-500 font-bold text-xl my-1">${item.price}</h2>
            <button
              class="bg-gray-900 text-white p-1 w-full rounded-md mt-2 active:scale-95 duration-300"
            >
              BUY
            </button>
           </article>
          `;
}
