/*Think of something you could store in an array. For example,
you could make a list of countries, rivers, mountains,
cities, languages, or anything else you’d like.
Write a program that creates a list containing these items.*/

//List of Countries
let countries: string[] = ["China", "United States", "France", "United Kingdom", "Russia"];
console.log("List of permanent members of Security Council:");
for(let top of countries){
    console.log(top)
}

//List of Rivers
let rivers: string[] = ["Nile", "Amazon River", "Yenisei River", "Yangtze River", "Mississippi River"];
console.log("List of top 5 Longest rivers in the World:");
for(let top of rivers){
    console.log(top)
}

//List of Mountains
let mountains: string[] = ["Mount Everest", "K2", "Lhotse", "Makalu", "Cho Oyu"];
console.log("List of top 5 highest Mountains in the World:");
for(let top of mountains){
    console.log(top)
}

//List of Cities
let cities: string[] = ["Paris", "Cape Town", "Prague", "Venice", "Istanbul"];
console.log("List of top 5 most beautiful cities in the World:");
for(let top of cities){
    console.log(top)
}

//List of Languages
let languages: string[] = ["English", "Mandarin", "Spanish", "Arabic", "Hindi/Urdu"];
console.log("List of 5 languages to most spoken in the World:");
for(let top of languages){
    console.log(top)
}
