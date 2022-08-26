let home = document.querySelector("#navbar>div>h1");
let like = document.getElementById("likedpage");
let cart = document.getElementById("cartpage");
let account = document.getElementById("accountpage");
let men = document.getElementById("men");
let women = document.getElementById("women");
let kids = document.getElementById("kids");
let wall = document.getElementById("thewall");
let sort = document.getElementById("sort");

home.addEventListener("click", homeFun);
like.addEventListener("click", likeFun);
cart.addEventListener("click", cartFun);
account.addEventListener("click", accountFun);
men.addEventListener("click", menFun);
women.addEventListener("click", womenFun);
kids.addEventListener("click", kidsFun);
sort.addEventListener("change", sortFun);

function homeFun(){
    window.location.href = "/Day 3/Html/index.html";
}

function likeFun(){
    window.location.href = "/Day 3/Html/like.html";
}

function cartFun(){
    window.location.href = "/Day 3/Html/cart.html";
}
function accountFun(){
    window.location.href = "/Day 3/Html/account.html";
}
function womenFun(){
    window.location.href = "/Day 3/Html/women.html";

}
function menFun(){
    window.location.href = "/Day 3/Html/men.html";

}
function kidsFun(){
    window.location.href = "/Day 3/Html/kids.html";

}

let likedArr = JSON.parse(localStorage.getItem("liked-prods")) || [];

let cartArr = JSON.parse(localStorage.getItem("cart-prods")) || [];


var routeData = [
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/75/73/21/18757321_40628781_480.jpg",
      season: "New Season",
      brand: "Versace Jeans Couture",
      category: "Women",
      desc: "brushed logo-print mini dress",
      price: "512",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/80/71/40/18807140_40794525_480.jpg",
      season: "New Season",
      brand: "Versace Jeans Couture",
      category: "Women",
      desc: "Drew baroque-buckle combat boots",
      price: "516",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/64/37/63/18643763_40371974_480.jpg",
      season: "New Season",
      brand: "Versace Jeans Couture",
      category: "Women",
      desc: "wallpaper-print long-sleeve shirt",
      price: "523",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/37/94/20/18379420_39652713_600.jpg",
      season: "New Season",
      brand: "Marc Jacobs",
      category: "Women",
      desc: "monogram-print Terry polo shirt",
      price: "305",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/37/73/53/18377353_39707961_600.jpg",
      season: "New Season",
      brand: "Marc Jacobs",
      category: "Women",
      desc: "The Monogram Jacquard J Marc shoulder bag",
      price: "729",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/37/81/12/18378112_39658332_600.jpg",
      season: "New Season",
      brand: "Marc Jacobs",
      category: "Unisex",
      desc: "The Monogram Jacquard bucket bag",
      price: "601",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/71/83/49/18718349_40787631_600.jpg",
      season: "New Season",
      brand: "Marc Jacobs",
      category: "Men",
      desc: "The Monogram cotton hoodie",
      price: "646",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/71/64/62/18716462_40777724_600.jpg",
      season: "New Season",
      brand: "Marc Jacobs",
      category: "Men",
      desc: "The Monogram wide-leg track pants",
      price: "652",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/37/75/69/18377569_39694570_600.jpg",
      season: "New Season",
      brand: "Marc Jacobs",
      category: "Women",
      desc: "monogram-print Terry polo shirt",
      price: "305",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/37/83/41/18378341_39734215_600.jpg",
      season: "New Season",
      brand: "Marc Jacobs",
      category: "Women",
      desc: "monogram-print Terry mini skirt",
      price: "272",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/58/75/24/18587524_40120745_480.jpg",
      season: "New Season",
      brand: "Versace Jeans Couture",
      category: "Men",
      desc: "graphic-print crew neck sweatshirt",
      price: "627",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/55/49/23/18554923_40204982_480.jpg",
      season: "New Season",
      brand: "Versace Jeans Couture",
      category: "Men",
      desc: "logo-plaque leather wallet",
      price: "257",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/45/78/64/18457864_39932968_480.jpg",
      season: "New Season",
      brand: "Versace Jeans Couture",
      category: "Men",
      desc: "logo-embossed shoulder bag",
      price: "251",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/64/57/68/18645768_40472205_480.jpg",
      season: "New Season",
      brand: "Versace Jeans Couture",
      category: "Men",
      desc: "logo-plaque detail buckle belt",
      price: "193",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/45/78/66/18457866_39932957_480.jpg",
      season: "New Season",
      brand: "Versace Jeans Couture",
      category: "Unisex",
      desc: "logo-print crossbody bag",
      price: "246",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/45/69/52/18456952_39932761_480.jpg",
      season: "New Season",
      brand: "Versace Jeans Couture",
      category: "Unisex",
      desc: "Barocco-logo print backpack",
      price: "410",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/68/53/22/17685322_37026250_480.jpg",
      season: "New Season",
      brand: "Versace Jeans Couture",
      category: "Unisex",
      desc: "Regalia Baroque messenger bag",
      price: "236",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/72/48/23/18724823_40457696_480.jpg",
      season: "New Season",
      brand: "Versace Jeans Couture",
      category: "Unisex",
      desc: "logo-print cylinder bag",
      price: "416",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/56/32/67/18563267_40069986_480.jpg",
      season: "New Season",
      brand: "Versace Jeans Couture",
      category: "Men",
      desc: "logo-print denim jacket",
      price: "742",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/08/50/71/17085071_34628229_480.jpg",
      season: "New Season",
      brand: "Versace Jeans Couture",
      category: "Men",
      desc: "logo-leg cotton trackpants",
      price: "359",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/49/42/51/18494251_39759116_480.jpg",
      season: "New Season",
      brand: "ZIMMERMANN",
      category: "Women",
      desc: "Anneke paisley-print mini dress",
      price: "1046",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/80/01/54/18800154_40866507_480.jpg",
      season: "New Season",
      brand: "Blumarine",
      category: "Women",
      desc: "cable-knit two-piece set",
      price: "1764",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/33/42/40/18334240_39439959_480.jpg",
      season: "New Season",
      brand: "Paris Texas",
      category: "Women",
      desc: "tie-detail 100mm heeled sandals",
      price: "872",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/23/51/20/17235120_38431607_480.jpg",
      season: "New Season",
      brand: "Dion Lee",
      category: "Women",
      desc: "quilted-finish mini skirt",
      price: "509",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/05/60/16/18056016_40878550_480.jpg",
      season: "New Season",
      brand: "Alex perry",
      category: "Women",
      desc: "Calla long-sleeve mini dress",
      price: "14044",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/67/59/51/18675951_40367357_480.jpg",
      season: "New Season",
      brand: "Lanvin",
      category: "Women",
      desc: "glitter woven-laces sneakers",
      price: "1706",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/06/17/32/18061732_38492897_480.jpg",
      season: "New Season",
      brand: "GIABORGHINI",
      category: "Women",
      desc: "double-strap flat sandals",
      price: "827",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/53/46/21/17534621_39253706_480.jpg",
      season: "New Season",
      brand: "Natasha Zinko",
      category: "Women",
      desc: "distressed cropped denim jacket",
      price: "739",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/25/59/45/18255945_39057577_480.jpg",
      season: "New Season",
      brand: "Christopher Esber",
      category: "Women",
      desc: "tie-fastened cropped shirt",
      price: "716",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/78/56/49/18785649_40962499_480.jpg",
      season: "New Season",
      brand: "Marcelo Burlon County Of Milan Kids",
      category: "Kids",
      desc: "Icon Wings backpack",
      price: "515",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/91/14/48/18911448_41138072_480.jpg",
      season: "New Season",
      brand: "Jordan Kids",
      category: "Kids",
      desc: "Jordan 1 Mid SE Craft sneakers",
      price: "436",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/91/67/88/18916788_41134627_480.jpg",
      season: "New Season",
      brand: "Moncler Enfant",
      category: "Kids",
      desc: "padded logo-patch jacket",
      price: "1172",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/53/67/67/18536767_41253046_480.jpg",
      season: "New Season",
      brand: "Off-White Kids",
      category: "Kids",
      desc: "Ow bomber varsity jacket",
      price: "1114",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/73/72/91/18737291_40924816_480.jpg",
      season: "New Season",
      brand: "Chloe Kids",
      category: "Kids",
      desc: "logo-print backpack",
      price: "488",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/81/97/11/18819711_41169895_480.jpg",
      season: "New Season",
      brand: "MM6 Maison Margeila Kids",
      category: "Kids",
      desc: "logo-print Chelsea boots",
      price: "537",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/94/41/73/18944173_41215986_480.jpg",
      season: "New Season",
      brand: "Stella McCartney Kids",
      category: "Kids",
      desc: "recycled color-block padded coat",
      price: "268",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/81/20/16/18812016_40924207_480.jpg",
      season: "New Season",
      brand: "Jordan Kids",
      category: "Kids",
      desc: "Air Jordan 1 Low SE sneakers",
      price: "334",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/75/00/00/18750000_41011914_480.jpg",
      season: "New Season",
      brand: "Moncler Enfant",
      category: "Kids",
      desc: "logo-print padded jacket",
      price: "1041",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/94/75/09/17947509_37876575_480.jpg",
      season: "New Season",
      brand: "Stella McCartney Kids",
      category: "Kids",
      desc: "metallic bucket bag",
      price: "224",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/75/01/93/18750193_40658707_480.jpg",
      season: "New Season",
      brand: "VEJA Kids",
      category: "Kids",
      desc: "V-10 low-top sneakers",
      price: "211",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/75/65/26/16756526_33575784_480.jpg",
      season: "New Season",
      brand: "Camper Kids",
      category: "Kids",
      desc: "touch strap fastening ballerina",
      price: "163",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/75/89/29/16758929_33179937_480.jpg",
      season: "New Season",
      brand: "Burberry Kids",
      category: "Kids",
      desc: "Vintage Check diamond-quilted jacket",
      price: "821",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/14/60/45/18146045_38513242_480.jpg",
      season: "New Season",
      brand: "Mini Rodini",
      category: "Kids",
      desc: "color-block logo-print raincoat",
      price: "196",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/13/20/89/18132089_39668716_480.jpg",
      season: "New Season",
      brand: "Adidas Yeezy Kids",
      category: "Kids",
      desc: "YEEZY Foam Runner' Stone Sage' sneakers",
      price: "489",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/71/60/91/16716091_35060000_480.jpg",
      season: "New Season",
      brand: "Common Projects",
      category: "Unisex",
      desc: "Tournament low-top sneakers",
      price: "864",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/42/44/63/18424463_39713957_480.jpg",
      season: "New Season",
      brand: "BY FAR",
      category: "Women",
      desc: "Dora croc-embossed leather tote bag",
      price: "611",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/30/21/26/18302126_39852287_480.jpg",
      season: "New Season",
      brand: "TEKLA",
      category: "Women",
      desc: "organic cotton pyjama shorts",
      price: "157",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/89/45/71/15894571_32918360_480.jpg",
      season: "New Season",
      brand: "Dr. Martens",
      category: "Women",
      desc: "Jadon platform boots",
      price: "666",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/40/93/61/17409361_36013991_480.jpg",
      season: "New Season",
      brand: "Saint Laurent Eyewear",
      category: "Women",
      desc: "tinted cat-eye frame sunglasses",
      price: "578",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/00/81/88/18008188_38149230_480.jpg",
      season: "New Season",
      brand: "Coccinelle",
      category: "Women",
      desc: "small Soft Beat crossbody bag",
      price: "540",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/00/76/81/18007681_38129151_480.jpg",
      season: "New Season",
      brand: "Coccinelle",
      category: "Women",
      desc: "small Soft Beat crossbody bag",
      price: "540",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/81/08/08/18810808_40847694_480.jpg",
      season: "New Season",
      brand: "Dsquared2",
      category: "Men",
      desc: "paint-splattered checked shirt",
      price: "885",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/30/64/18/18306418_39218423_480.jpg",
      season: "New Season",
      brand: "Raf Simons",
      category: "Men",
      desc: "Cylon 21 sneakers",
      price: "596",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/98/55/71/17985571_41194043_480.jpg",
      season: "New Season",
      brand: "Ksubi",
      category: "Men",
      desc: "Van Winkle Hypnotie slim-fit jeans",
      price: "418",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/70/11/30/16701130_36173359_480.jpg",
      season: "New Season",
      brand: "Marsell",
      category: "Men",
      desc: "chunky Chelsea boots",
      price: "1826",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/80/42/56/17804256_37441720_480.jpg",
      season: "New Season",
      brand: "Raf Simons",
      category: "Men",
      desc: "logo-patch cotton shirt jacket",
      price: "771",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/62/77/40/18627740_40526278_480.jpg",
      season: "New Season",
      brand: "Kenzo",
      category: "Unisex",
      desc: "embroided-logo cap",
      price: "219",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/80/90/63/17809063_37455182_480.jpg",
      season: "New Season",
      brand: "Nanushka",
      category: "Unisex",
      desc: "logo-embrioded crew neck jumper",
      price: "350",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/03/77/44/18037744_40941962_480.jpg",
      season: "New Season",
      brand: "Lemaire",
      category: "Unisex",
      desc: "Croissant leather messenger bag",
      price: "1801",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/38/62/66/17386266_36718886_480.jpg",
      season: "New Season",
      brand: "A-COLD-WALL*",
      category: "Unisex",
      desc: "embossed-logo shoulder bag",
      price: "505",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/72/80/08/16728008_33567490_480.jpg",
      season: "New Season",
      brand: "Maison Kitsune",
      category: "Men",
      desc: "fox patch crew neck jumper",
      price: "396",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/13/34/09/12/13340912_15312394_480.jpg",
      season: "New Season",
      brand: "Versace Eyewear",
      category: "Men",
      desc: "Hexad Signature square-framed sunglasses",
      price: "482",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/09/69/36/18096936_39429257_480.jpg",
      season: "New Season",
      brand: "Y-3",
      category: "Men",
      desc: "leather flatform sandals",
      price: "353",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/05/76/74/17057674_d05b6f1c-936b-455f-a1d1-20773eb81980_480.jpg",
      season: "New Season",
      brand: "Dsquared2",
      category: "Men",
      desc: "mid-rise distressed skinny jeans",
      price: "942",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/50/12/96/16501296_32116239_480.jpg",
      season: "New Season",
      brand: "Dsquared2",
      category: "Unisex",
      desc: "zip-detail double-breasted coat",
      price: "353",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/72/29/93/17722993_37524648_480.jpg",
      season: "New Season",
      brand: "Dsquared2",
      category: "Unisex",
      desc: "logo-print cap",
      price: "209",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/14/54/79/90/14547990_22160068_480.jpg",
      season: "New Season",
      brand: "Scarosso",
      category: "Men",
      desc: "lace-up boots",
      price: "818",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/36/63/31/16366331_31739615_480.jpg",
      season: "New Season",
      brand: "Cartier Eyewear",
      category: "Men",
      desc: "C de Cartier rectangle-frame glasses",
      price: "3666",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/79/70/95/16797095_33809011_480.jpg",
      season: "New Season",
      brand: "Axel Arigato",
      category: "Unisex",
      desc: "Clean 90 Bird sneakers",
      price: "513",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/62/40/72/16624072_34335367_480.jpg",
      season: "New Season",
      brand: "Dsquared2",
      category: "Unisex",
      desc: "logo-print baseball cap",
      price: "190",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/29/88/19/17298819_39155173_480.jpg",
      season: "New Season",
      brand: "Kenzo",
      category: "Men",
      desc: "Kampus Tiger canvas cap",
      price: "170",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/84/39/09/16843909_33593618_300.jpg",
      season: "New Season",
      brand: "Gucci Eyewear",
      category: "Men",
      desc: "square-frame logo-embossed glasses",
      price: "386",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/39/14/22/18391422_41024014_480.jpg",
      season: "New Season",
      brand: "Oscar de la Renta",
      category: "Women",
      desc: "strapless mini dress",
      price: "11048",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/91/28/61/18912861_41148628_480.jpg",
      season: "New Season",
      brand: "Amina Muaddi",
      category: "Women",
      desc: "Begum embellished earrings",
      price: "629",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/71/55/95/18715595_41131581_480.jpg",
      season: "New Season",
      brand: "Rosantica",
      category: "Women",
      desc: "crochet crystal-embellished mini bag",
      price: "1811",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/03/15/13/18031513_41169784_480.jpg",
      season: "New Season",
      brand: "Taller Marmo",
      category: "Women",
      desc: "feather-trim mock neck dress",
      price: "2435",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/90/24/95/18902495_41132386_480.jpg",
      season: "New Season",
      brand: "ZIMMERMANN",
      category: "Women",
      desc: "Kaleidoscope tie-neck gown",
      price: "2162",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/56/73/48/18567348_41152842_480.jpg",
      season: "New Season",
      brand: "Saint Laurent",
      category: "Women",
      desc: "June diamond-quilt crossbody bag",
      price: "3416",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/90/02/02/17900202_41158768_480.jpg",
      season: "New Season",
      brand: "Dolce & Gabbana",
      category: "Women",
      desc: "zebra-print mini dress",
      price: "2345",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/79/80/00/18798000_41164986_480.jpg",
      season: "New Season",
      brand: "Moschino",
      category: "Women",
      desc: "pearl-embellished drop earrings",
      price: "555",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/91/77/02/17917702_41178987_480.jpg",
      season: "New Season",
      brand: "Aquazzura",
      category: "Women",
      desc: "Joy 85mm sandals",
      price: "1377",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/88/97/78/18889778_41114348_480.jpg",
      season: "New Season",
      brand: "Missoni",
      category: "Women",
      desc: "zigzag-woven mini dress",
      price: "900",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/86/92/60/18869260_41087122_480.jpg",
      season: "New Season",
      brand: "Jil Sander",
      category: "Women",
      desc: "bamboo-handle leather tote bag",
      price: "2514",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/71/55/95/18715595_41131581_480.jpg",
      season: "New Season",
      brand: "Rosantica",
      category: "Women",
      desc: "crochet crystal-embellished mini bag",
      price: "1811",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/89/98/27/18899827_41133441_480.jpg",
      season: "New Season",
      brand: "Saint Laurent",
      category: "Women",
      desc: "high-waist straight jeans",
      price: "1143",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/92/05/82/17920582_41087277_480.jpg",
      season: "New Season",
      brand: "Dolce & Gabbana",
      category: "Women",
      desc: "logo-plaque buckled patent belt",
      price: "645",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/54/77/57/18547757_41162242_480.jpg",
      season: "New Season",
      brand: "PUCCI",
      category: "Women",
      desc: "contrast-panel denim jacket",
      price: "1365",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/58/32/01/18583201_41065198_480.jpg",
      season: "New Season",
      brand: "Salvatore Ferragamo",
      category: "Women",
      desc: "decorative-buckle loafers",
      price: "1422",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/86/92/19/18869219_41131523_480.jpg",
      season: "New Season",
      brand: "Paris Texas",
      category: "Women",
      desc: "metallic-trim block-heel ankle boots",
      price: "660",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/53/71/23/18537123_41053238_480.jpg",
      season: "New Season",
      brand: "Off-white",
      category: "Women",
      desc: "Gustav cat eye-frame sunglasses",
      price: "390",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/16/46/64/18164664_40735197_480.jpg",
      season: "New Season",
      brand: "Versace",
      category: "Men",
      desc: "Odissea chunky leather sneakers",
      price: "1535",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/61/09/99/18610999_41162503_480.jpg",
      season: "New Season",
      brand: "Frescobol Carioca",
      category: "Unisex",
      desc: "Helio panelled espadrilles",
      price: "369",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/44/10/31/18441031_41155602_480.jpg",
      season: "New Season",
      brand: "Maison Margiela",
      category: "Unisex",
      desc: "tabi-toe ankle boots",
      price: "2162",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/85/21/53/18852153_41003793_480.jpg",
      season: "New Season",
      brand: "Missoni",
      category: "Men",
      desc: "patchwork button-up cardigan",
      price: "1660",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/73/53/30/18735330_41171685_480.jpg",
      season: "New Season",
      brand: "ICECREAM",
      category: "Men",
      desc: "Running dog-print denim shorts",
      price: "261",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/88/28/55/18882855_41079798_480.jpg",
      season: "New Season",
      brand: "Y-3",
      category: "Unisex",
      desc: "logo-print backpack",
      price: "365",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/90/62/08/18906208_41110112_480.jpg",
      season: "New Season",
      brand: "Saint Laurent",
      category: "Unisex",
      desc: "crew-neck long-sleeve jumper",
      price: "1364",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/86/01/13/16860113_33909632_480.jpg",
      season: "New Season",
      brand: "Off-white Kids",
      category: "Kids",
      desc: "logo-print T-shirt",
      price: "182",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/91/81/64/17918164_38760655_480.jpg",
      season: "New Season",
      brand: "Burberry Kids",
      category: "Kids",
      desc: "Horseferry-print T-shirt",
      price: "313",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/54/97/62/18549762_40274021_480.jpg",
      season: "New Season",
      brand: "Stone Island Junior",
      category: "Kids",
      desc: "logo-print T-shirt",
      price: "161",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/64/52/64/17645264_37221546_300.jpg",
      season: "New Season",
      brand: "Karl Lagerfeld Kids",
      category: "Kids",
      desc: "metallic-effect logo-patch backpack",
      price: "127",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/46/43/90/18464390_40064218_300.jpg",
      season: "New Season",
      brand: "Jordan Kids",
      category: "Kids",
      desc: "Air Jordan 1 Mid sneakers",
      price: "202",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/64/62/77/17646277_37231946_300.jpg",
      season: "New Season",
      brand: "The Marc Jacobs Kids",
      category: "Kids",
      desc: "dog-print contrast-neckline T-shirt",
      price: "52",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/31/16/47/18311647_40962565_480.jpg",
      season: "New Season",
      brand: "Dolce & Gabbana Kids",
      category: "Kids",
      desc: "logo strappy sneakers",
      price: "832",
    },
  ];

  function displayTable(read){
    wall.innerHTML = "";

    read.forEach(function(elem){

        let block = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src", elem.image_url);

        let p1 = document.createElement("p");
        p1.innerText = elem.season;

        let p2 = document.createElement("p");
        p2.innerText = elem.brand;

        let p3 = document.createElement("p");
        p3.innerText = elem.desc;

        let p4 = document.createElement("p");
        p4.innerText = `$${elem.price}`;
        p4.style.cursor = "pointer";
        p4.addEventListener("click", function(){
          let rupees = Number(elem.price)*80;
          p4.innerText = "₹" + rupees;
        });

        let btn = document.createElement("button");
        btn.innerHTML = "❤️";
        btn.addEventListener("click", function(){
          btn.innerHTML = `Liked`;
          btn.style.color = "red";
          btn.style.fontWeight = "bold";
          likedArr.push(elem);
          localStorage.setItem("liked-prods", JSON.stringify(likedArr));
      });

        let btnCart = document.createElement("button");
        btnCart.innerText = "Add to cart";
        btnCart.addEventListener("click", function(){
          btnCart.innerText = "Added";
          btnCart.style.color = "green";
          btnCart.style.fontWeight = "bold";
          cartArr.push(elem);
          localStorage.setItem("cart-prods", JSON.stringify(cartArr));
        });

        block.append(image, p1, p2, p3, p4, btn, btnCart);
        wall.append(block);
    })
}
displayTable(routeData);


function sortFun(){
  let value = sort.value;

  if(value == ""){
    displayTable(routeData);
  } else{
    let filteredList = routeData.filter(function(elem){
      return elem.category == value;
    })
  
    displayTable(filteredList);
  }
}