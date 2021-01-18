/**
Reverse Image 

Diberikan sebuah array 2 dimensi yang berisi angka. Tugas kalian adalah mengubah isi dari elemen-elemen array tersebut.
Yang harus diubah ada 3 hal:
1. Urutan dari array di dalam array-2-dimensi harus dibalik, jadi array di paling akhir harus ditaruh di paling awal.
2. Urutan dari item di dalam array harus diubah urutannya, jadi item yang berada di paling kanan akan berada di paling kiri.
3. Jika ada angka 0 pada index tersebut, maka angka tersebut harus ditukar dengan angka 1 dan begitu juga sebaliknya

Lihatlah test-case untuk contoh kasus

RULES:
-Dilarang menggunakan built-in function selain .push()

*/

function reverse(arr) {
  //implementasi function disini
  let result = []
  for (let i = arr.length - 1; i >= 0; i--) {

    let temp = []
    for (let j = arr[i].length - 1; j >= 0; j--) {
      if (arr[i][j] === 1) {
        temp.push(0)
      } else if (arr[i][j] === 0) {
        temp.push(1)
      } else {
        temp.push(arr[i][j])
      }
    }
    result.push(temp)
  }
  return result
}


console.log(reverse(
  [[1, 2, 3],
  [0, 1, 5],
  [0, 3, 1]]));
/**
[ [ 0, 3, 1 ], 
  [ 5, 0, 1 ], 
  [ 3, 2, 0 ] ]
 */

console.log(reverse([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
/*
[ [ 9, 8, 7 ], 
  [ 6, 5, 4 ], 
  [ 3, 2, 0 ] ] */

console.log(reverse([[1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 0, 1, 3, 4], [1, 3, 4, 5, 6, 7, 8]]))
/*
[
  [ 8, 7, 6, 5,
    4, 3, 0 ],
  [ 4, 3, 0, 1, 1 ],
  [ 4, 3, 2, 0, 1 ],
  [ 4, 3, 2, 0 ]
]
*/

console.log(reverse([])); //[]