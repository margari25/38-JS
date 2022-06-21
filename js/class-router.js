console.clear();

class Page404 {
    render() {
        return '404 content';
    }
}

class PageHome {
    render() {
        return 'Home content';
    }
}

// susiejimas ka vartotojas gali parasyti
// ir ka mes tada darytume (kuria klase kviesti)
const router = {
    '': PageHome,
    '404': Page404,
}

// vartotojo ivestas kelias
const trimmedPath = '';

// reikiamos naudoti klases atranka
// kai 404 yra musu default pasirinkimas
let pageClass = router['404'];
if (trimmedPath in router) {
    pageClass = router[trimmedPath];
}

// pagal rasta naudojimui klase yra kuriamas jos objektas
const pageObj = new pageClass();
// ir tas objektas generuoja savo HTML turini
const HTML = pageObj.render();

// spausdinam...
console.log(pageClass);
console.log(pageObj);
console.log(HTML);