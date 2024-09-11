// Creation of maps

const map = new Map()

// insertion / set value in map

map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")

console.log(map);

// to access map via for of loop

for (const [key , value] of map) {
    console.log(key);
    console.log(value);
}