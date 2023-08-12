function data(uuid_){
    const url = api + '/load/'+ uuid_
    

    fetch(url, {method: "GET"})
    .then(res => res.json())
    .then(data => {
        obj = data;
    })
    .then(() => {
        if (obj["status"] == "success"){
            if(String(obj["data"]) != "None"){
                document.getElementById("ItemPreview").src = "data:image/png;base64," + String(obj["data"]);
            }else{
                document.getElementById("ItemPreview").src = "noAvatar.png"
            }

            const balance = document.querySelector("#balance");
            balance.textContent = obj["balance"] + "₽ +";

            const names = document.querySelector("#name");
            names.textContent = obj["name"] + obj["badge"];
        }
    });
}
function logout(){
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    const url = api + '/logout/'+ getCookie("user")
    

    fetch(url, {method: "GET"})
    .then(res => res.json())
    .then(data => {
        obj = data;
    })
    .then(() => {
        if (obj["status"] == "success"){
            document.cookie = "user=" + "undefined";
            location.reload()
        }
    });

}