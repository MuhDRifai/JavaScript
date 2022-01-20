#### Algoritma reversed **Javascript**

1. Mulai
2. Masukkan parameter **text** berisi **Javascript**
3. lakukan perulangan menggunakan variabel i, dimana kondisi awal i = index akhir dari **text**
4. untuk setiap perulangan nilai i akan mundur 1 dan berhenti ketika mencapai index awal
5. nilai pada index tersebut ditampilkan sebagai hasil akhir
6. selesai

#### Algoritma palindrome checker

1. Mulai
2. Masukkan kata ke dalam parameter **word**
3. Jika tipe data variabel **word** adalah string, maka proses bisa dilanjutkan. Jika tidak, proses kembali ke poin nomor 2.
4. lakukan perulangan menggunakan variabel i
6. perulangan dilakukan dari index awal ke akhir dan akhir ke awal
7. jika nilai pada kedua index tersebut sama, maka akan muncul **Polindrome** sebagai hasil akhir
8. jika tidak, muncul **bukan polindrome** sebagai hasil akhir
9. nilai i bertambah 1 untuk setiap perulangan
10. selesai

#### Algoritma reversed words

1. Mulai
2. Masukkan kalimat ke parameter **string**
3. Jika tipe data variabel **string** adalah string, maka proses bisa dilanjutkan. Jika tidak, proses kembali ke poin nomor 2.
4. declare variabel **words** yang merupakan array kosong
5. declare variabel **currentwords** yang merupakan string kosong
6. lakukan perulangan menggunakan variabel i, dimana kondisi awal i = 0
7. perulangan akan dilakukan terus hingga nilai i sama dengan panjang data dari string
8. perulangan dilakukan dari index awal ke akhir dengan nilai i akan bertambah 1 untuk setiap perulangannya, dan dijalankan beberapa kondisi yaitu:
	a. jika nilai pada index i bukan spasi ( ) dan nilai i tidak sama dengan panjang data dari string, maka nilai pada index akan ditambahkan ke **currentword**
	b. jika nilai pada index i adalah spasi ( ), maka nilai dari **currentword** akan dimasukkan ke dalam variabel **words** di index kedua, dan spasi ( ) dimasukkan ke indeks pertama, dan nilai dari **currentword** dikembalikan menjadi string kosong
	c. jika nilai i sama dengan panjang data dari **string**, maka nilai dari **currentword** akan dimasukkan ke dalam **words**

9. jika nilai i sama dengan panjang data dari string, maka tipe data di dalam array **words** akan dijadikan string dan diperoleh sebagai hasil akhir
10. selesai

#### Algoritma mengubah a menjadi o pada Surabaya

1. Mulai
2. declare **kata** = Surabaya
3. declare **target** = a
4. declare text yang merupakan string kosong
5. lakukan perulangan menggunakan variabel i, dimana kondisi awal i = index awal dari **kata**
6. untuk setiap perulangan nilai i akan maju 1 hingga mencapai index akhir dari kata
7. jika nilai pada index i sama dengan nilai target, maka akan digantikan dengan (o) dan dimasukkan ke variabel **text**
8. jika bukan, maka nilai pada index i yang akan dimasukkan ke variabel **text**
9. 'Suroboyo' ditampilkan sebagai hasil akhir dari proses
10. selesai
