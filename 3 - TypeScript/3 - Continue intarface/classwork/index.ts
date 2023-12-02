const boby = document.querySelector(".body") as HTMLBodyElement
const root = document.querySelector(".root") as HTMLDivElement

// function that render an uniuq id
const uid = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

// intarface of product
interface Product {
  id: string;
  group: string;
  name: string;
  price: number;
  image: string;
}

//enum of products group that exist
enum GroupProduct {
  fruits = "fruits",
  meat = "meat",
  vegitables = "vegitables",
}

// array of products that already exist
const arrOfProduct: Array<Product> = [
  {
    id: uid(),
    group: GroupProduct.fruits,
    name: "apple",
    price: 5,
    image:
      "https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834",
  },
  {
    id: uid(),
    group: GroupProduct.meat,
    name: "beef",
    price: 100,
    image:
      "https://embed.widencdn.net/img/beef/melpznnl7q/800x600px/Top%20Sirloin%20Steak.psd?keep=c&u=7fueml",
  },
  {
    id: uid(),
    group: GroupProduct.vegitables,
    name: "tomato",
    price: 15,
    image: "https://moaahar.com/wp-content/uploads/2021/03/tomato.jpg",
  },
];

// stock and methods/functions of our stock
const stock = {
  products: arrOfProduct,
  // return this.products
  showAllProducts: function () {
    // return this.products.forEach((product) => {
    //   console.log(
    //     `the name is ${product.name}, the image is ${product.image}, the number id is ${product.id}`
    //   );
    // });

    render(this.products)
  },
  
  // add product function
  
  addNewProduct: function (
    group: string,
    name: string,
    image: string,
    price: number
    )
    //: Array<Product>
    {
      this.products.push({ id: uid(), group, name, image, price });
      console.log(this.products);
      
      render(this.products)
      //return this.products;
    },
    // update product function
    updateUProductName: function(id: string, name: string)
    //: Array<Product> 
    {      
      const productFind  = this.products.find( product => {
        return product.id == id // сравнение
      })     
      
      productFind.name = name //- одно ровно это значит поменять одно значение на другое
      render(this.products)
      //return this.products
    },
    // delete product function
    deleteProduct: function(id:string)
    //: Array<Product>
    {
      this.products = this.products.filter(product => product.id !== id)
      render(this.products)
     //return this.products
   }
};

const render = (productArray: Array<Product>) =>{
  let html = ''

  productArray.forEach(product => {
    html += `
      <div class="product">
        <p class="product__group">${product.group}</p>
        <h2 class="product__name">${product.name}</h2>
        <img class="product__image" src="${product.image}" alt="${product.name}" />
        <p class="product__id">${product.id}</p>
        <p class="product__price">${product.price}</p>
      </div>
    `
  })

  root.innerHTML = html
}

// all the manipulations will be in object - each function in object will return updated array
stock.showAllProducts();

const handleAddNew = () => {
  const group: string = prompt("Enter group");
  const name: string = prompt("Enter name");

  const image: string = prompt("Enter image");
  const price: number = +prompt("Enter price");

  stock.addNewProduct(name, group, image, price)
};

const handleUpdateProduct = () => {
  const name: string = prompt("Enter name");
const id: string = prompt("Enter id");

 stock.updateUProductName(id, name)
}

const handleDeleteProduct = () => {
  const id: string = prompt("Enter id")
  stock.deleteProduct(id)
}