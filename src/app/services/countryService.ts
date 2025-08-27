export async function fetchCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,languages,flag");

    const data = await response.json();
    return data;
}