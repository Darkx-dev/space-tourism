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
routes.forEach(route => {
    route.addEventListener("click", (e) => {
        let val = e.target.textContent.toLowerCase()
        let name = dataFields[0]
        let desc = dataFields[1]
        let distance = dataFields[2]
        let time = dataFields[3]
        console.log(img)
        console.log(img.src.length)
        // let 
        if (val == "moon") {
            name.textContent = destinations[0].name
            desc.textContent = destinations[0].description
            distance.textContent = destinations[0].distance
            time.textContent = destinations[0].travel
            img.src = "../assets/destination/image-moon.png"
        }
        if (val == "mars") {
            name.textContent = destinations[1].name
            desc.textContent = destinations[1].description
            distance.textContent = destinations[1].distance
            time.textContent = destinations[1].travel
            img.src = "../assets/destination/image-mars.png"
        }
        if (val == "europa") {
            name.textContent = destinations[2].name
            desc.textContent = destinations[2].description
            distance.textContent = destinations[2].distance
            time.textContent = destinations[2].travel
            img.src = "../assets/destination/image-europa.png"
        }
        if (val == "titan") {
            name.textContent = destinations[3].name
            desc.textContent = destinations[3].description
            distance.textContent = destinations[3].distance
            time.textContent = destinations[3].travel
            img.src = "../assets/destination/image-titan.png"
        }
        
    })
})