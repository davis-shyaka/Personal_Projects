const correctAnswers = ['A', 'C', 'B', 'B', 'C', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value];
    

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 1;
        }
    });

    let correctScore = ((score/7)*100);
    let approxScore = Math.round(correctScore);

    console.log(score);
    console.log(correctScore);
    console.log(approxScore);

    // show the result on page

    scrollTo(0,0);
    // result.querySelector('span').textContent = `${score}%`;
    
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        if (approxScore >= 75)
    {
        result.classList.remove('bg-danger');
        result.classList.remove('bg-warning');
        result.classList.add('bg-success');
    }

    if (approxScore >= 25 && approxScore < 75)
    {
        result.classList.remove('bg-danger');
        result.classList.remove('bg-success');
        result.classList.add('bg-warning');
    }

    if (approxScore < 25)
    {
        result.classList.remove('bg-warning');
        result.classList.remove('bg-success');
        result.classList.add('bg-danger');
    }
    
    result.querySelector('span').textContent = `${output}%`;
        if(output === approxScore){
            clearInterval(timer);
        }
        else{
            output++;
        }
    }, 25);
});