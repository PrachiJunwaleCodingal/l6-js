function validate(e) {
    e.preventDefault();  //event

    const m = document.getElementById('email').value;
    const p = document.getElementById('password').value;
    const a = document.getElementById('age').value;
    const mbox = document.getElementById('msg');
    let msg1 = '';
    //=== means strict validation
    if (m === '') {
        msg1 = 'Enter mail';
    } else if (p === '') {
        msg1 = 'Write 8 char in password';
    } else if (a === '') {
        msg1 = 'enter age in 10 to 20.';
    }
    else {
        msg1 = 'Submitted successfully';
    }
    mbox.innerHTML = msg1;
}


