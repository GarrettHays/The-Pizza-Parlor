// business logic
function Pizza(topping, size) {
  this.topping = [];
  this.size = size;
  this.price = 0;
}

Pizza.prototype.pizzaPricer = function() {
  if (this.topping = 1 && this.size === small) {
    this.price += 12; 
  }
  if (this.topping <= 2 && this.size === small) {
    this.price += 14;
  }
  if (this.topping <= 4 && this.size === small) {
    this.price += 16;
  }
  if (this.topping >= 4 && this.size === small) {
    this.price =+ 18;
  }
  if (this.topping = 1 && this.size === medium) {
    this.price += 14; 
  }
  if (this.topping <= 2 && this.size === medium) {
    this.price += 16;
  }
  if (this.topping <= 4 && this.size === medium) {
    this.price += 18;
  }
  if (this.topping >= 4 && this.size === medium) {
    this.price =+ 20;
  }
  if (this.topping = 1 && this.size === large) {
    this.price += 16; 
  }
  if (this.topping <= 2 && this.size === large) {
    this.price += 18;
  }
  if (this.topping <= 4 && this.size === large) {
    this.price += 20;
  }
  if (this.topping >= 4 && this.size === large) {
    this.price =+ 22;
  }
  return this.price;
};

// UI logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
  });
});

let pizzaSize = $("#size").val();
let newPizza = new Pizza(topping,size);

$("input[name='topping']:checked").each(function() {
  newPizza.topping.push($(this).val());
});

newPizza.pizzaPricer();



