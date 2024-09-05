const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const errorText = document.querySelector('#errorText')
const resultText = document.querySelector('#resultText')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    errorText.textContent = ""
    resultText.textContent = ""

    fetch('http://localhost:3000/weather?address=' + search.value).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                errorText.textContent = data.error
            } else {
                resultText.textContent = 'Location: ' + data.location + ' | Forecast: ' + data.forecast
            }
        })
    })
})