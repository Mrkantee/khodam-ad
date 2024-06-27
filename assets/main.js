function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Masukkan nama terlebih dahulu!');
    } else {
        let status = [
            'isi',
            'kosong',
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                'Jinn',
                'Syaitan',
                'Malaikat',
                'Peri',
                'Naga Bearbrend',
                'Setan',
                'Hantu',
                'Jin',
                'Iblis',
                'Kuntilanak',
                'Dewa Zeus',
                'Ular Kadut',
                'Nyi Roro Kidul',
                'Buaya Darat',
                'Tuyul Boti',
                'Cicak Ngisng',
                'Buaya Pemalas',
                'Sapi Perah',
                'Harimau Sunda',
                'Anjing Pemarah',
                'Babi Hutan',
                'Naga Mahjong',
                'Rawa lontek',
                'Siluman Biaywak',
                'Pohon Palem',
                'Badut',
                'Power Ranger Pink',
                'Pelerr',
                'Tobruttt',
                'Kuda Sumbing',
                'Ayam Masako',
                'Singa Padlepop',
                'Tikus Got',
                'Undur Undur',
                'Gajah Duduk',
                'Singa Keramas',
                'Singa Biskuat',
                'Ular Sawah',
                'Tutup Toples',
                'Pocong Kadut'
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#search').val('');
        }
        else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});
