// ! Dont change this code
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// @ Try to check and change the filterOddNumber function
// Ex: given param = [1, 2, 3, 4, 5], then return must [2, 4] not "1,3,5"
const filterOddNumber = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

/**
 * Fungsi `filterOddNumber` awalnya memiliki kesalahan dalam logika kondisinya. 
    Awalnya, kondisi yang digunakan untuk memfilter angka genap seharusnya adalah `num % 2 === 0`, bukan `num % 2 !== 0` yang sebenarnya memfilter angka ganjil.
 * Jadi fungsi tersebut seharusnya mengembalikan array angka genap dari input, bukan angka ganjil seperti yang terjadi pada kode awal.
 * Setelah diperbaiki, kondisi filter fungsi tersebut telah diubah menjadi `num % 2 === 0`, sehingga sekarang fungsi tersebut sesuai dengan tujuannya untuk mengembalikan array angka genap dari input. 
 * Perubahan ini memperbaiki kesalahan logika pada kondisi.
 */

// ! Dont change this code
const epochDateToUTC = (epochDate) => {
  const d = new Date(0);
  d.setUTCSeconds(epochDate);
  return d.toUTCString();
};

// ! Dont change this code
module.exports = {
  capitalize,
  filterOddNumber,
  epochDateToUTC,
};
