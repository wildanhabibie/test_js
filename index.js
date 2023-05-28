// Urutkan array input secara numerik
input.sort (function (a, b) {
  return a - b;
});

// Tentukan indeks tengah
var middle = Math.floor (input.length / 2);

// Jika panjang array ganjil, kembalikan elemen di indeks tengah
if (input.length % 2 === 1) {
  return input [middle];
}

// Jika panjang array genap, kembalikan rata-rata dari dua elemen di tengah
else {
  return (input [middle - 1] + input [middle]) / 2;
}