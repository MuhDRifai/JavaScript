Asynchronous VS Synchronous
Synchronous = perintah dieksekusi satu persatu sesuai urutan kode yang anda tuliskan
Asynchronous = hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses




Callback Async adalah salah metode yang digunakan untuk menghandle return value dari operasi asynchronous


Promise merupakan perwakilan dari sebuah nilai yang belum tentu diketahui nilainya saat promise dibuat
Promise ada di salah satu state ini:
Pending → keadaan awal, tidak terpenuhi atau tidak ditolak
Fulfilled  → artinya operasi selesai dengan sukses.
Rejected  → artinya operasi gagal.
ketika menggunakan promise dapan menggunakan .then(resolve), dan .catch(reject)

Async/await adalah fitur yang hadir sejak ES 2017. Fitur ini mempermudah kita dalam menangani proses asynchronous.
Keterangan :
async → mengubah function menjadi synchronous
await → menunda eksekusi hingga proses asynchronous selesai



Untuk mengatasi Error (error handling) pada async/await bisa menggunakan try catch
Try
biasanya kita sisipkan code javascript yang mungkin terjadi error
Catch
blok inilah yang akan menangkap error yang terjadi pada blok Try apabila pada blok Try si error muncul.
Finally
blok ini digunakan untuk apapun yang terjadi pada blok Try, baik itu error atau tidak, akan selalu dijalankan.
