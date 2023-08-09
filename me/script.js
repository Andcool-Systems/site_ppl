function data(uuid_){
    const url = api + '/load/'+ uuid_
    

    fetch(url, {method: "GET"})
    .then(res => res.json())
    .then(data => {
        obj = data;
    })
    .then(() => {
        if (obj["message"] == "Success"){
            if(String(obj["data"]) != "None"){
                document.getElementById("ItemPreview").src = "data:image/png;base64," + String(obj["data"]);
            }else{
                document.getElementById("ItemPreview").src = "noAvatar.png"
            }



            if(obj["first_name"] != "None"){
                var first = obj["first_name"]
            }else{
                var first = ""
            }

            if(first != ""){var kast_a = " "}
            else{var kast_a = ""}

			if(obj["last_name"] != "None"){
                var last = kast_a + obj["last_name"]
            }else{
                var last = ""
            }
			var name = first + last
            const names = document.querySelector("#name");
			names.textContent = name;
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
        if (obj["message"] == "Success"){
            document.cookie = "user=" + "undefined";
            location.reload()
        }
    });

}