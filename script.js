const form = document.getElementById('form-registrasi');
const namaLengkap = document.getElementById('namaLengkap');
const email = document.getElementById('email');
const alamat = document.getElementById('alamat');
const password = document.getElementById('password');
// const jenisKelamin = document.getElementById('JenisKelamin');
// const hobi = document.getElementById('hobi');
// const kelas = document.getElementById('kelas');

function showError (inputId,message){
    const errorElement = document.getElementById(`${inputId}-error`)
    errorElement.innerHTML= message;
}

function hideError (inputId){
    const errorElement = document.getElementById(`${inputId}-error`)
    errorElement.innerHTML= '';    
}

form.addEventListener('submit',function(obj) {
    obj.preventDefault();

    if (namaLengkap.value == ''){
        showError('namaLengkap',"Nama harus diisi");
        // console.log(namaLengkap.value);
    }else{
        hideError('namaLengkap');
    }

    if (email.value == ''){
        showError('email',"Email harus diisi");
    }else{
        hideError('email');
    }

    if (alamat.value == ''){
        showError('alamat',"Alamat harus diisi");
    }else{
        hideError('alamat');
    }

    if (password.value == ''){
        showError('password',"Password harus diisi");
    }else{
        hideError('password');
    }

    // if (namaLengkap.value == ''){
    //     showError('JenisKelamin',"Jenis Kelamin harus diisi")
    // }else(
    //     hideError('JenisKelamin')
    // )

    // if (namaLengkap.value == ''){
    //     showError('hobi',"hobi harus diisi")
    // }else(
    //     hideError('hobi')
    // )
    // if (namaLengkap.value == ''){
    //     showError('kelas',"kelas harus diisi")
    // }else(
    //     hideError('kelas')
    // )
});