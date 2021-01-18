/**
 * 
 * 1. Diberi 3 function untuk mempermudah Erby belanja di Mall Mewah Dubai
 * 2. Function pertama adalah untuk sortir barang - barang yang erby ingin beli
 * 3. Function kedua adalah itung berapa diskon yang erby dapatkan
 *  3.1. Belanja Rp 20.000 -> Diskon 0%
 *  3.2. Belanja diatas Rp 30.000 -> Diskon 10%
 *  3.3  Belanja diatas Rp 40.000 -> Diskon 20%
 *  3.4  Belanja diatas Rp 50.000 -> Diskon 30%
 * 
 * 
 * Cari tahu berapa duit yang harus erby keluarkan
 * 
 */

function beliBarang(listBelanja, duit) {
    const array = [
        ['Louis Vuitton', 10000],
        ['Ferrari', 50000],
        ['Nike', 4000],
        ['Supreme', 8000],
        ['BMW', 30000],
        ['Adidas', 5500]
    ]
    let total = 0;
    for (let i = 0; i < listBelanja.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (listBelanja[i] === array[j][0]) {
                total += array[j][1];
                break;
            }
        }
    }
    let discount = diskon(total)
    let result = duit - discount

    return result
}

function diskon(duit) {
    if (duit > 50000) {
        return duit * 0.7
    } else if (duit > 40000) {
        return duit * 0.8
    } else if (duit > 30000) {
        return duit * 0.9
    } else {
        return duit
    }
}

function belanja(listBelanja, duit) {
    let result = beliBarang(listBelanja, duit);
    return `Erby berangkat dengan duit Rp. ${duit} dan pulang masih ada Rp. ${result}`
}

console.log(belanja(['BMW', 'Louis Vuitton', 'Nike', 'Supreme'], 60000));
// Erby berangkat dengan duit Rp. 60000 dan pulang masih ada Rp. 23600