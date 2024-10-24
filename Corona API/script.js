let covidData = [];

const fetchCovidData = async () => {
    try {
        const response = await fetch('https://disease.sh/v3/covid-19/countries');
        covidData = await response.json();
        displayData(covidData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const displayData = (data) => {
    const covidDataContainer = document.getElementById('covid-data');
    covidDataContainer.innerHTML = '';

    data.forEach(country => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');
        card.innerHTML = `
            <div class="card bg-secondary text-light">
                <div class="card-body">
                    <h5 class="card-title">${country.country}</h5>
                    <p class="card-text">Cases: ${country.cases}</p>
                    <p class="card-text">Deaths: ${country.deaths}</p>
                    <p class="card-text">Recovered: ${country.recovered}</p>
                </div>
            </div>
        `;
        covidDataContainer.appendChild(card);
    });
};

const searchCountry = () => {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredData = covidData.filter(country => 
        country.country.toLowerCase().includes(searchInput)
    );
    displayData(filteredData);
};

document.getElementById('search-button').addEventListener('click', searchCountry);


window.onload = fetchCovidData;
