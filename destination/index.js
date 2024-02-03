const destinations = [
    {
        "name": "Moon",
        "images": {
            "png": "./assets/destination/image-moon.png",
            "webp": "./assets/destination/image-moon.webp"
        },
        "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days"
    },
    {
        "name": "Mars",
        "images": {
            "png": "./assets/destination/image-mars.png",
            "webp": "./assets/destination/image-mars.webp"
        },
        "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "distance": "225 mil. km",
        "travel": "9 months"
    },
    {
        "name": "Europa",
        "images": {
            "png": "./assets/destination/image-europa.png",
            "webp": "./assets/destination/image-europa.webp"
        },
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years"
    },
    {
        "name": "Titan",
        "images": {
            "png": "./assets/destination/image-titan.png",
            "webp": "./assets/destination/image-titan.webp"
        },
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. km",
        "travel": "7 years"
    }
]
const routes = document.querySelectorAll("section#d-section ul#routes a")
const dataFields = document.querySelectorAll(".d-field")
const img = document.querySelector("#d-section img")

const setPlanet = (data, fields) => {
    let planet = {
        name: fields[0],
        description: fields[1],
        distance: fields[2],
        travel: fields[3],
    }
    planet.name.textContent = data.name
    planet.distance.textContent = data.distance
    planet.travel.textContent = data.travel
    planet.description.textContent = data.description
    img.src = `/${data.images.webp}`
}

routes.forEach(route => {
    route.addEventListener("click", (e) => {
        let val = e.target.textContent.toLowerCase()
        switch (val) {
            case "moon":
                setPlanet(destinations[0], dataFields)
                break
            case "mars":
                setPlanet(destinations[1], dataFields)
                break
            case "europa":
                setPlanet(destinations[2], dataFields)
                break
            case "titan":
                setPlanet(destinations[3], dataFields)
                break
            default: console.log("Encountered Something Wron! RERUN")
        }
    })
})