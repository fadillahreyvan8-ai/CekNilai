function prosesNilai() {
    const nama = document.getElementById('nama').value;
    const inputNilai = document.getElementById('nilai').value;
    const nilai = Number(inputNilai);


    if (nama === "" || inputNilai === "") {
        alert("Masukkan Nama dan Nilai Dahulu!");
        return;
    }

    let grade = "";
    let status = "";

    if (nilai >=90 ) {
        grade = "A";
        status = "LULUS";
    } else if (nilai >=80 ) {
        grade = "B";
        status = "LULUS";
    } else if (nilai >=70 ) {
        grade = "C";
        status = "LULUS";
    } else if (nilai >=60 ) {
        grade = "D";
        status = "TIDAK LULUS";
    } else if (nilai >=0 ) {
        grade = "E";
        status = "TIDAK LULUS"

    } else {
        alert("Masukkan Nilai 0-100!");
        return;
    }

    document.getElementById('namaHasil').innerText = nama;
    document.getElementById('Nilai').innerText = nilai;
    document.getElementById('Grade').innerText = grade;

    const Status = document.getElementById('Status');   
    Status.className = "status";
    Status.innerText = status;
}
