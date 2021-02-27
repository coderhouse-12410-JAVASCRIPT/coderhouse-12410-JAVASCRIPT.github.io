// Router
const routes = [
    { path: '/', component: HomeComponent},
    { path: '/about', component: AboutComponent} ,
    { path: '/contact', component: ContactComponent },
    { path: '/meme', component: MemeComponent }
];

const parseLocation = () => location.hash.slice(1).toLocaleLowerCase() || '/';

/*
    findCompnentByPath necesita como params path -> string y routes -> array
    Dentro usa find y se define una funcion que utiliza en cada elemento del array
    el "match" para comparar, dentro del match usa la logica definida de RegExp que
    es una regular expresion.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

*/
const findComponentByPath = (path, routes) => routes.find( r => r.path.match(new RegExp(`^\\${path}$`, 'gm')) ) || undefined;


const router = () => {
    const path = parseLocation(); // Obtener el path de la pagina

    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
    // La version slim de jQuery que usabamos no tenia el fadeIn, la cambie y funciona 
    $('#app').hide();
    $('#app').html(component.render());
    $('#app').fadeIn(1500);
};