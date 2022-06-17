// business logic
function Pizza() {
  this.topping = topping;
  this.size = size;
  this.price = this.pizzaPricer();
}

Pizza.prototype.pizzaPricer = function() {
  const basePrice = 10;
  let output = [basePrice, ""];
  if (this.topping = 1 && this.size = small) {
    output[0] += 2; 
  }
  if (this.topping <= 2 && this.size = small) {
    output[0] += 4;
  }
  if (this.topping <= 4 && this.size = small) {
    output[0] += 6;
  }
  if (this.topping >= 4 && this.size = small) {
    output[0] =+ 8;
  }
  if (this.topping = 1 && this.size = medium) {
    output[0] += 4; 
  }
  if (this.topping <= 2 && this.size = medium) {
    output[0] += 6;
  }
  if (this.topping <= 4 && this.size = medium) {
    output[0] += 8;
  }
  if (this.topping >= 4 && this.size = medium) {
    output[0] =+ 10;
  }
  if (this.topping = 1 && this.size = large) {
    output[0] += 6; 
  }
  if (this.topping <= 2 && this.size = large) {
    output[0] += 8;
  }
  if (this.topping <= 4 && this.size = large) {
    output[0] += 10;
  }
  if (this.topping >= 4 && this.size = large) {
    output[0] =+ 12;
  }
  return output;
};


// UI logic