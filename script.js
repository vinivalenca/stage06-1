window.onpopstate = () => router.handle()
window.route =() => router.route()
window.onload =() => router.route()

class Router { 

    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }
    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
        
        this.handle()
    }

    handle() {
        const pathname = window.location.pathname
        const route = this.routes[pathname]

        if (pathname === "/") {
            homeStyle();
            onClickHome();
          } else if (pathname === "/universo") {
            universoStyle();
            onClickUniverso();
          } else if (pathname === "/exploracao") {
            exploracaoStyle();
            onClickExploracao();
          }
        
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
}

const router = new Router()
router.add("/", "pages/home.html")
router.add("/universo", "pages/universo.html")
router.add("/exploracao", "pages/exploracao.html")

const bodyClass = document.body

function homeStyle() {
    bodyClass.classList.add('home')
    bodyClass.classList.remove('universo')
    bodyClass.classList.remove('exploracao')


}

function universoStyle() {
    bodyClass.classList.remove('home')
    bodyClass.classList.add('universo')
    bodyClass.classList.remove('exploracao')


}

function exploracaoStyle() {
    bodyClass.classList.remove('home')
    bodyClass.classList.remove('universo')
    bodyClass.classList.add('exploracao')


} 

const home = document.getElementById('home')
const universo = document.getElementById('universo')
const exploracao = document.getElementById('exploracao')

function onClickHome() {
    home.style.color = "#FFFFFF"
    home.style.fontWeight = "700"

    universo.style.color = "#C4C4CC"
    universo.style.fontWeight = "400"

    exploracao.style.color = "#C4C4CC"
    exploracao.style.fontWeight = "400"
}

function onClickUniverso() {
    home.style.color = "#C4C4CC"
    home.style.fontWeight = "400"
    universo.style.color = "#FFFFFF"
    universo.style.fontWeight = "700"
    exploracao.style.color = "#C4C4CC"
    exploracao.style.fontWeight = "400"
}

function onClickExploracao() {
    home.style.color = "#C4C4CC"
    home.style.fontWeight = "400"
    universo.style.color = "#C4C4CC"
    universo.style.fontWeight = "400"
    exploracao.style.color = "#FFFFFF"
    exploracao.style.fontWeight = "700"
}


