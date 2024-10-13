document.getElementById('hitungButton').addEventListener('click', function() {
    // Ambil nilai dari input bilangan pertama dan kedua
    let bil1 = parseFloat(document.getElementById('bilanganPertama').value);
    let bil2 = parseFloat(document.getElementById('bilanganKedua').value);

    // Hitung jumlah
    let hasil = bil1 + bil2;

    // Tampilkan hasil
    document.getElementById('hasil').innerText = hasil;
});

document.getElementById('resetButton').addEventListener('click', function() {
    // Reset nilai input
    document.getElementById('bilanganPertama').value = '';
    document.getElementById('bilanganKedua').value = '';
    
    // Reset hasil
    document.getElementById('hasil').innerText = '0';
});
