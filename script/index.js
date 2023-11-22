document.addEventListener('', function () {
    const convertBtn = document.getElementById('convertBtn');
    const yearInput = document.getElementById('ageInput');
    const resultParagraph = document.getElementById('result');

    function convertMinutesToSeconds() {
        const year = parseFloat(yearInput.value);

        if (!isNaN(age)) {
            const days = age * 365;
            resultParagraph.textContent = `${age} age is  ${days} days.`;
        } else {
            resultParagraph.textContent = 'Please enter number of years.';
        }
    }

    convertBtn.addEventListener('click', convertMinutesToSeconds);
});
