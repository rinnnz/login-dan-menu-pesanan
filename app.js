function Login(){ 
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    if (email=="sekar@gmail.com" && pass=="123"){
        window.open("file:///C:/xampp/htdocs/tugas3/menu.html");
    }else{
        alert("Username dan password anda salah!");
    }
}

let hargatotal=0;

function totalharga(harga,id){
    let n_id = document.getElementById(id);
    let n_total = document.getElementById('total');
    n_id.style.backgroundColor = "#90C8AC";
    hargatotal += harga; 
   
    n_total.value='Rp. ' + hargatotal;
}
