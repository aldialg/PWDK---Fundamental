class Product {
    name: string;
    price: number;
  
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
  }
  
  class Transaction {
    total: number;
    products: { product: Product; qty: number }[];
  
    constructor() {
      this.total = 0;
      this.products = [];
    }
  
    addToCart(product: Product, qty: number): void {
      this.products.push({ product, qty });
      this.total += product.price * qty;
    }
  
    showTotal(): number {
      return this.total;
    }
  
    checkout(): { total: number; items: { name: string; price: number; qty: number }[] } {
      const transactionData = {
        total: this.total,
        items: this.products.map(p => ({
          name: p.product.name,
          price: p.product.price,
          qty: p.qty,
        })),
      };
      
      // Reset transaction
      this.total = 0;
      this.products = [];
      
      return transactionData;
    }
  }
  
  // Example usage
  const apple = new Product("Apple", 2);
  const banana = new Product("Banana", 1);
  
  const transaction = new Transaction();
  transaction.addToCart(apple, 3);
  transaction.addToCart(banana, 5);
  
  console.log("Total:", transaction.showTotal());
  console.log("Checkout:", transaction.checkout());
  