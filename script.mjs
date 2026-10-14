import { readFileSync, writeFileSync } from "fs";

const imageFiles = {
  "Orange, Red, Yellow": "images/orange_red_yellow.jpg",
  "Untitled 1951": "images/untitled1951.jpeg",
  "No. 10": "images/No_10.png",
  "No. 1 (Royal Red and Blue)": "images/No_1.jpg",
  "Untitled (Shades of Red)": "images/shades_of_red.jpg",
};

let rawText = readFileSync("./rothko.json", "utf-8");
let rawData = JSON.parse(rawText);

let outputData = [];

for (let row of rawData) {
  outputData.push({
    title: row.Title,
    image: imageFiles[row.Title],
    datePurchased: row.DatePurchased,
    sellingPrice: row.SellingPrice,
    auctionHouse: row.AuctionHouse,
    estimatedPrice: row.Estimated,
    dateMade: row.Date,
  });
}

writeFileSync("./data.json", JSON.stringify(outputData, null, 2));
console.log("Wrote", outputData.length, "rows to", process.cwd());