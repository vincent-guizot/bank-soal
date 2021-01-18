/*
Buatlah fungsi dengan nama susunPesan, dengan parameter input berupa array 2 dimensi. Setiap elemen array akan berupa array yang berisi kata dan posisi nya. Tugas fungsi ini adalah untuk menghasilkan kalimat sesuai dengan posisi kata. Silakan menambahkan contoh soal lain jika merasa perlu
Contoh :
[
 ['besok', 4],
 ['kita', 1],
 ['akan', 2],
 ['menyerang', 3],
 ['pagi', 5],
]
outputnya : 'kita akan menyerang besok pagi'
[
 ['granat', 3],
 ['musuh', 1],
 ['membawa', 2],
]
outputnya : 'musuh membawa granat'
*/

function susunPesan(array) {
    // code here
    /**
     * ALGORITMA
     * ====================
     * 1. buat variable penampung
     * 2. iterasi untuk mengakses array
     */
    let result = ''
    for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[j][1] === i+1){
                result += array[j][0]
                if(i !== array.length-1){
                    result += " "
                }
            }

        }
    }
    return result
}

console.log(susunPesan([
    ['besok', 4],
    ['kita', 1],
    ['akan', 2],
    ['menyerang', 3],
    ['pagi', 5],
]))
// kita akan menyerang besok pagi

console.log(susunPesan([
    ['granat', 3],
    ['musuh', 1],
    ['membawa', 2],
]))
// musuh membawa granat