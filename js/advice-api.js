const adviceId = document.getElementById('adviceId');
const adviceText = document.getElementById('adviceText');

const getAdviceButton = async () => {


    try {
        const response = await fetch('https://api.adviceslip.com/advice');

        const advice = await response.json();


        adviceId.innerHTML = advice.slip.id;
        adviceText.innerHTML = advice.slip.advice;

    } catch(error) {
        console.log(error);
    }

}


const button = document.getElementById('getAdviceBtn');

button.addEventListener('click', getAdviceButton);
