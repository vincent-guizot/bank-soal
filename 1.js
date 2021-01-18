/**
Diberikan sebuah function subset() yang menerima 2 parameter berisi
array. Yaitu arr1 dan arr2 yang keduanya berisi angka.
Function subset akan mengecek apakah arr1 merupakan subset dari arr2.
Artinya, semua angka di arr1 harus berada di arr2.
Angka di arr1 adalah angka unik, sehingga tidak ada angka yang muncul
2 kali di arr1.
 
RULES:
WAJIB MENULISKAN PSEUDOCODE SEBELUM MEMBUAT CODE
Dilarang menggunakan built-in function selain .push()
 
*/

//Tulislah Pseudocode disini

/*BEGIN subset

    READ arr1 is String
    READ arr2 is String

    SET "nilai" as Array
    FOR i = 0 TO arr1.LENGTH
        FOR j = 0 TO arr2.LENGTH
            IF arr1 ke i EQUAL arr2 ke j THEN
                STORE true TO "nilai"
                BREAK
        j = j + 1
        ENDFOR

    i = i + 1
    ENDFOR

    IF arr1.LENGTH EQUAL nilai.LENGTH THEN
        RETURN true
    ELSE
        RETURN false

END subset*/

// ================================================================================
function subset(arr1, arr2) {
    //tulis function disini 
    
}

console.log(subset([3, 9, 5], [1, 3, 9, 9, 8, 44])); //false
console.log(subset([1, 3], [1, 3, 5, 7, 8])) //true
console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8])) //true
console.log(subset([1, 3], [1, 33])) //false
console.log(subset([1, 3, 10], [10, 8, 8, 8])) //false