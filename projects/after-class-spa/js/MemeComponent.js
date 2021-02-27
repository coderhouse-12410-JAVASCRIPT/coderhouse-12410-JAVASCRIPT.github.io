// Este el home
// const y () => son ES6
const MemeComponent = {

    render: () => {

        const myHTMLComponent = `
        <section id="myMeme">
            <h1> Esto el Meme List </h1>
            <p> Buenas noches </p>
        </section>
        `;

        /*$.ajax({
            url: "http://alpha-meme-maker.herokuapp.com/memes/13",
            type: "GET",
            crossDomain: false,
            dataType: "json",
            success: function (response) {
                var resp = JSON.parse(response)
                console.log("Salio bien"+ resp.status);
            },
            error: function (xhr, status) {
                alert("error");
            }
        });*/

        /*var settings = {
            "url": "https://api.estadisticasbcra.com/var_usd_vs_usd_of",
            "method": "GET",
            "timeout": 0,
            "headers": {
              "Authorization": "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDU5MTc2MjAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJhbGVqYW5kcm8ubWVkaWNpQG5leHRpdGVyYXRpb24uY29tLmFyIn0.UTXnJZpyN8JmnO-K0eXHngREzQ760ZVJuFhUieqHOiJYsffJoRyCbzQnu4EIIlS-T-d4B1GcOVrfiQWWMNIw3w"
            },
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
*/
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDU5MTc2MjAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJhbGVqYW5kcm8ubWVkaWNpQG5leHRpdGVyYXRpb24uY29tLmFyIn0.UTXnJZpyN8JmnO-K0eXHngREzQ760ZVJuFhUieqHOiJYsffJoRyCbzQnu4EIIlS-T-d4B1GcOVrfiQWWMNIw3w");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.estadisticasbcra.com/var_usd_vs_usd_of", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        /*   $.ajax({ 
               url: 'https://api.estadisticasbcra.com/usd',
               headers: {
                   'Authorization':'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDU5MTk2NTQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJjdWFscXVpZXJhQGdtYWlsLmNvbSJ9.sVL8FfELopRmBM22VCFKcOcF4cY-qPWvgpboZBPtfLUxj3QMKMen1pldKGo7F3-y54stW4ZOPrarIJgg3rITCA',
               },
               crossDomain: false,
               type: "GET",
               dataType: "json",
               success: function (response) {
                   var resp = JSON.parse(response)
                   console.log("Salio bien"+ resp.status);
               },
               error: function (xhr, status) {
                   alert("error");
               }
           }
           );*/

        return myHTMLComponent;
    }
}