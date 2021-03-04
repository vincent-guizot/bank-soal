# Inventory - Player's Weapon

## TASK SUMMARY

Sebuah game bergenre **survival** memiliki gameplay yang sangat menarik. Dimana player memiliki banyak weapon di dalam inventory nya. Untuk memudahkan mendapat informasi mengenai player dan weapon, mari kita membuat aplikasinya.

## TASK 0

Buatlah \***\*Database\*\*** menggunakan `PostgreSQL` dengan nama `survivor-inventory`.

Hubungan antar table adalah sebagai berikut :

- Player dapat memiliki **Banyak** weapon
- Weapon dapat dimiliki oleh **Banyak** player
- Inventory merupakan **Junction Table**

Untuk memudahkan analisa **relasi antar table**, peserta dapat membuat **ERD** terlebih dahulu.

## Task 1

Buatlah table `Players` yang memiliki kolom-kolom sebagai berikut :

| Field    | Datatype | Modifiers   |
| -------- | -------- | ----------- |
| id       | SERIAL   | PRIMARY KEY |
| username | VARCHAR  | NOT NULL    |
| image    | VARCHAR  | NOT NULL    |
| attack   | INT      | NOT NULL    |
| defense  | INT      | NOT NULL    |

Buatlah table `Weapons` yang memiliki kolom-kolom sebagai berikut :

| Field | Datatype | Modifiers   |
| ----- | -------- | ----------- |
| id    | SERIAL   | PRIMARY KEY |
| name  | VARCHAR  | NOT NULL    |
| type  | VARCHAR  | NOT NULL    |

Buatlah table `Inventories` yang memiliki kolom dari \***\*Hasil Analisa Peserta\*\***.

- Temukan **Foreign Key** terlebih dahulu untuk memudahkan analisa

## Task 2

Buatlah routing dengan menggunakan `ExpressJS` agar dapat melakukan CRUD operations dengan detail seperti dibawah:

| Method | Route                | Keterangan                                                                                   |
| ------ | -------------------- | -------------------------------------------------------------------------------------------- |
| GET    | /                    | Menampilkan home                                                                             |
| GET    | /players             | Menampilkan semua player yang ada dalam table `Players`                                      |
| GET    | /players/create      | Menampilkan form create player                                                               |
| POST   | /players/create      | Menerima data yang dikirim dan melakukan _insertion_ ke dalam table `Players`                |
| GET    | /weapons             | Menampilkan semua weapon yang ada dalam table `Weapons`                                      |
| GET    | /weapons/create      | Menampilkan form create weapon                                                               |
| POST   | /weapons/create      | Menerima data yang dikirim dan melakukan _insertion_ ke dalam table `Weapons`                |
| GET    | /inventory/:PlayerId | Menampilkan semua weapon player dengan id dari `/:PlayerId` diambil dari table `Inventories` |
| POST   | /inventory/:PlayerId | Menerima data yang dikirim dan melakukan _insertion_ ke dalam table `Inventories`            |

## Task 3

### Route `/players`

Halaman dari route ini akan menampilkan list players, yang memiliki image, username, attack dan defense.

### Route GET `/players/create`

Halaman dari route ini akan menampilkan _form_ untuk mengisi detail dari player. Berikut ketentuan :

| Input      | Syarat                                                  |
| ---------- | ------------------------------------------------------- |
| _username_ | Harus min 5 karakter & tidak boleh kosong               |
| _image_    | Harus berupa URL, jika kosong maka ada gambar _default_ |
| _attack_   | Harus min 0 dan max 100, jika kosong maka _default_ 0   |
| _attack_   | Harus min 0 dan max 100, jika kosong maka _default_ 0   |

### Route POST`/players/create`

Halaman ini akan mengirim data _request_ dan melakukan insertion ke dalam table `Pla`

## Additional Task

### Route GET `/inventories/:PlayerId

Halaman

### Route POST `/inventories/:PlayerId


