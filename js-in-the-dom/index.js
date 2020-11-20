let formBtn = document.querySelector('#close-form')

let form = document.querySelector('.form')

let toggler = () => {
  form.classList.toggle('hide')
  if(formBtn.innerText === 'X'){
    formBtn.innerText = '+'
  }else {
    formBtn.innerText = 'X'
  }
}

formBtn.addEventListener('click', toggler)

let nameInput = document.querySelector('#name')
let emailInput = document.querySelector('#email')

let emailList = []

let validateForm = () => {
  if (nameInput.value && emailInput.value === false){
    nameInput.style.border = '2px solid red'
    emailInput.style.border = '2px solid red'
    alert('Please enter name and email')
  }else if (nameInput.value === false){
    nameInput.style.border = '2px solid red'
    alert('please enter a name to subscribe')
  }else if (emailInput.value === false){
    emailInput.style.border = '2px solid red'
    alert('please enter an email to subscribe')
  }else{
    emailList.push({'name': nameInput.value, 'email': emailInput.value})
    displayThankYou()
  } 
   
}

form.addEventListener('submit', function(event){
  event.preventDefault()
  validateForm()
})

let formContainer = document.querySelector('.form-container')

let displayThankYou = () =>{
  formContainer.innerText = 'Thank you for subscribing!'
  setTimeout(function(){
    formContainer.remove()
  }, 3000)
}


nameInput.addEventListener('change', function(){
  nameInput.style.border = 'none'
})

emailInput.addEventListener('change', function(){
  emailInput.style.border = 'none'
})

let cart = document.createElement('div')
let main = document.querySelector('.hero')
let cartItems = 0

let addToCart = () => {
  if(cartItems === 0){
    cartItems = 1
    cart.setAttribute('class', 'cart-display')
    cart.innerText = 'Your Cart: 1 item'
    main.appendChild(cart)
  }else{
    cartItems++
    cart.innerText = `Your Cart: ${cartItems} items`
  }
}

let product1 = document.querySelector('.add1')
let product2 = document.querySelector('.add2')
let product3 = document.querySelector('.add3')

// product1.setAttribute('onclick', addToCart())
// product2.setAttribute('onclick', addToCart())
// product3.setAttribute('onclick', addToCart())