$.support.cors = true;
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

           $.ajax({ 
               url: 'https://api.estadisticasbcra.com/usd',
               headers: {
                   'Authorization':'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDU5MTk2NTQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJjdWFscXVpZXJhQGdtYWlsLmNvbSJ9.sVL8FfELopRmBM22VCFKcOcF4cY-qPWvgpboZBPtfLUxj3QMKMen1pldKGo7F3-y54stW4ZOPrarIJgg3rITCA',
               },
               crossDomain: false,
               type: "GET",
               dataType: "jsonp",
               success: function (response) {
                   var resp = JSON.parse(response)
                   console.log("Salio bien"+ resp.status);
               },
               error: function (xhr, status) {
                   alert("error");
               }
           }
           );

        return myHTMLComponent;
    }
}