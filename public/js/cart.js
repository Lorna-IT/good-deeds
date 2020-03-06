
// Submits a new post and brings user to blog page upon completion
function addToCart(id) {
  $.ajax({
    method: 'PUT',
    url: `/api/cart/${id}`
  }).then(function(data){
    console.log(data)
  })
}

$('.container').on("click", '.card__btn', function() {
  console.log('RAN CLICK')
  console.log($(this).data('id'))

  addToCart($(this).data('id'))
})


// Deletes an itme in the cart
function removeFromCart(id) {
  $.ajax({
    method: 'DELETE',
    url: `/api/cart/${id}`
  }).then(function(data){
    console.log(data)
  })
}

$('.container').on("click", '.remove-item', function() {
  console.log('RAN DELETE')
  console.log($(this).data('id'))

  ('#removeDiv').remove();

  removeFromCart($(this).data('id'))
})