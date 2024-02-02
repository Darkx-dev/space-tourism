onload = () => {
    const URL = window.location
    console.log(URL)
    if (URL.pathname === '/') {
        console.log("Home page")
    }
    else if (URL.pathname === "/crew-pilot.html") {
        console.log("Crew page")
    }
}