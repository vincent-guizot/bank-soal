/**
 * Terdapat sebuah playlist lagu berupa array multidimensi.
 * Buatlah sebuah program yang akan menampilkan lagu-lagu apa saja yang akan dimainkan berdasarkan alokasi waktu yang diberikan.
 * Ketentuan memainkan lagu adalah sebagai berikut:
 *   - Apabila waktu tidak cukup untuk memainkan 1 lagu secara penuh, maka lagu tersebut batal dimainkan.
 *   - Apabila lagu paling akhir sudah dicapai, maka proses akan kembali ke lagu pertama.
 *   - Apabila parameter time tidak diisi, maka semua lagu akan dimainkan berurutan sekali saja.
 */

// [ penyanyi, judul lagu, durasi ]


let playlist = [
    ['Didi Kempot', 'Banyu Langit', 4],
    ['Nike Ardilla', 'Sandiwara Cinta', 4],
    ['Hetty Koes Endang', 'Cinta Putih', 3],
    ['Titiek Puspa', 'Kupu-Kupu Malam', 3],
    ['Ahmad Albar', "Don't Spoil My Day", 5],
    ['Doel Sumbang', 'Awewe Sapi Daging', 2],
    ['Ebiet G. Ade', 'Berita Kepada Kawan', 6]
];

function play(input, time) {
    // Code here
    let result = []
    let i = 0;
    
    if (!time) {
        return input
    } else {
        while (time >= input[i][2]) {
            result.push(input[i])
            time -= input[i][2]
            i++
            if (i === input.length) {
                i = 0;
            }
        }
    }
    return result;
}

  console.log(play(playlist));
/**
 * [
 *   [ 'Didi Kempot', 'Banyu Langit', 4 ],
 *   [ 'Nike Ardilla', 'Sandiwara Cinta', 4 ],
 *   [ 'Hetty Koes Endang', 'Cinta Putih', 3 ],
 *   [ 'Titiek Puspa', 'Kupu-Kupu Malam', 3 ],
 *   [ 'Ahmad Albar', "Don't Spoil My Day", 5 ],
 *   [ 'Doel Sumbang', 'Awewe Sapi Daging', 2 ],
 *   [ 'Ebiet G. Ade', 'Berita Kepada Kawan', 6 ]
 * ]
 */

console.log(play(playlist, 9));
/**
 * [
 *   ['Didi Kempot', 'Banyu Langit', 4],
 *   ['Nike Ardilla', 'Sandiwara Cinta', 4]
 * ]
 */

console.log(play(playlist, 32));
  /**
 * [
 *   [ 'Didi Kempot', 'Banyu Langit', 4 ],
 *   [ 'Nike Ardilla', 'Sandiwara Cinta', 4 ],
 *   [ 'Hetty Koes Endang', 'Cinta Putih', 3 ],
 *   [ 'Titiek Puspa', 'Kupu-Kupu Malam', 3 ],
 *   [ 'Ahmad Albar', "Don't Spoil My Day", 5 ],
 *   [ 'Doel Sumbang', 'Awewe Sapi Daging', 2 ],
 *   [ 'Ebiet G. Ade', 'Berita Kepada Kawan', 6 ],
 *   [ 'Didi Kempot', 'Banyu Langit', 4 ]
 * ]
 */