// business logic
function Pizza(size) {
  this.topping = [];
  this.size = size;
  this.price = 0;
}

Pizza.prototype.pizzaPricer = function() {
  if (this.topping.length <= 1 && this.size === "small") {
    this.price += 12; 
    console.log(this.topping.length);
    console.log(this.size);
  } else if (this.topping.length <= 2 && this.size === "small") {
    this.price += 14;
  } else if (this.topping.length <= 4 && this.size === "small") {
    this.price += 16;
  } else if (this.topping.length >= 4 && this.size === "small") {
    this.price =+ 21;
  }
  if (this.topping.length <= 1 && this.size === "medium") {
    this.price += 14; 
  } else if (this.topping.length <= 2 && this.size === "medium") {
    this.price += 16;
  } else if (this.topping.length <= 4 && this.size === "medium") {
    this.price += 18;
  } else if (this.topping.length >= 4 && this.size === "medium") {
    this.price =+ 23;
  }
  if (this.topping.length <= 1 && this.size === "large") {
    this.price += 16; 
  } else if (this.topping.length <= 2 && this.size === "large") {
    this.price += 18;
  } else if (this.topping.length <= 4 && this.size === "large") {
    this.price += 20;
  } else if (this.topping.length >= 4 && this.size === "large") {
    this.price =+ 25;
  }
  if (this.topping.length <= 1 && this.size === "Xlarge") {
    this.price += 18; 
  } else if (this.topping.length <= 2 && this.size === "Xlarge") {
    this.price += 20;
  } else if (this.topping.length <= 4 && this.size === "Xlarge") {
    this.price += 22;
  } else if (this.topping.length >= 4 && this.size === "Xlarge") {
    this.price =+ 27;
  }
  if (this.topping.length <= 1 && this.size === "Giant") {
    this.price += 20; 
  } else if (this.topping.length <= 2 && this.size === "Giant") {
    this.price += 22;
  } else if (this.topping.length <= 4 && this.size === "Giant") {
    this.price += 24;
  } else if (this.topping.length >= 4 && this.size === "Giant") {
    this.price =+ 29;
  }
  return this.price;
};

// UI logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    let pizzaSize = $("select#size").val();
    let newPizza = new Pizza(pizzaSize);

    $("input[name='topping']:checked").each(function() {
      newPizza.topping.push($(this).val());
    });

    let pizzaPrice = newPizza.pizzaPricer();

    $(".pizza-size-select").text(pizzaSize);
    $(".pizza-topping-select").text(newPizza.topping);
    $(".order-total").text(pizzaPrice);

    $("#pizza-order").show();
    $("#pizza").hide();

    $("#complete").sumbit(function() {
      $("#pizza-order").hide();
      $("#pizza").hide();
    });
  });
});




