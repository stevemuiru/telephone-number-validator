const input = document.getElementById('user-input')
const check = document.getElementById('check-btn')
const clear = document.getElementById('clear-btn')
const span = document.getElementById('results-div')


clear.addEventListener('click', () => {
  span.innerText = ''
  input.value = ''
});


check.addEventListener('click', () => {
  if(input.value === "") {
    alert("Please provide a phone number")
  } else{
    
    const phoneRegEx = /^1?[\s-]?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    const sanitizedPhoneNumber = input.value.replace(/[\s()-]/g, '');

    if(sanitizedPhoneNumber.startsWith('1')) {
      if(sanitizedPhoneNumber.length != 11) {
        span.innerText = `Invalid US number: ${input.value}`;
        return;
      }
    } else if (sanitizedPhoneNumber.length != 10) {
      span.innerText = `Invalid US number: ${input.value}`;
      return;
    }
    
    if (phoneRegEx.test(input.value)) {
      span.innerText = `Valid US number: ${input.value}`
    } else {
      span.innerText = `Invalid US number: ${input.value}`
    }
  }
})