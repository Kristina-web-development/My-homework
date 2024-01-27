//const boby = document.querySelector(".body") as HTMLBodyElement;
var root = document.querySelector(".root");
var selectFruit = document.querySelector("#selectFruit");
// function that render an uniuq id
var uid = function () {
    return Math.random().toString(36).substr(2, 9); //0.56879yguig
};
// interface Haha {
//   smeh: string
//   plak?: number
// }
// const aaa:Haha = {smeh: "321"}
//enum of products group that exist
var GroupProduct;
(function (GroupProduct) {
    GroupProduct["fruits"] = "fruits";
    GroupProduct["meat"] = "meat";
    GroupProduct["vegitables"] = "vegitables";
})(GroupProduct || (GroupProduct = {}));
selectFruit.innerHTML = "\n  <option value=\"\">All</option>\n  <option value=\"" + GroupProduct.fruits + "\">" + GroupProduct.fruits + "</option>\n  <option value=\"" + GroupProduct.meat + "\">" + GroupProduct.meat + "</option>\n  <option value=\"" + GroupProduct.vegitables + "\">" + GroupProduct.vegitables + "</option>\n";
// enum Num {
//   num32 = 105,
//   num33 = "dfodjoifg",
//   num34 = 12,
//   num35 = "wooejpwoepower",
//   num36 = "fghdfg",
// }
// array of products that already exist
var arrOfProduct = [
    {
        id: uid(),
        group: GroupProduct.fruits,
        name: "apple",
        price: 5,
        image: "https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834"
    },
    {
        id: uid(),
        group: GroupProduct.meat,
        name: "beef",
        price: 100,
        image: "https://embed.widencdn.net/img/beef/melpznnl7q/800x600px/Top%20Sirloin%20Steak.psd?keep=c&u=7fueml"
    },
    {
        id: uid(),
        group: GroupProduct.vegitables,
        name: "tomato",
        price: 15,
        image: "https://moaahar.com/wp-content/uploads/2021/03/tomato.jpg"
    },
];
if (!localStorage.getItem("product"))
    localStorage.setItem("product", JSON.stringify(arrOfProduct));
// stock and methods/functions of our stock
var stock = {
    products: JSON.parse(localStorage.getItem("product")),
    // return this.products
    showAllProducts: function () {
        // return this.products.forEach((product) => {
        //   console.log(
        //     `the name is ${product.name}, the image is ${product.image}, the number id is ${product.id}`
        //   );
        // });
        return render(this.products);
    },
    // add product function
    // CRUD = Create, Read, Update, Delete
    addNewProduct: function (group, name, image, price //: Array<Product>
    ) {
        this.products.push({ id: uid(), group: group, name: name, image: image, price: price });
        console.log(this.products);
        localStorage.setItem("product", JSON.stringify(this.products));
        return render(this.products);
        //return this.products;
    },
    // update product function
    updateUProductName: function (id, name, image, price //: Array<Product>
    ) {
        var productFind = this.products.find(function (product) {
            return product.id == id; // сравнение
        });
        console.log(image);
        productFind.name = name; //- одно ровно это значит поменять одно значение на другое
        productFind.image = image;
        productFind.price = price;
        localStorage.setItem("product", JSON.stringify(this.products));
        return render(this.products);
        //return this.products
    },
    // delete product function
    deleteProduct: function (id //: Array<Product>
    ) {
        this.products = this.products.filter(function (product) { return product.id !== id; });
        localStorage.setItem("product", JSON.stringify(this.products));
        return render(this.products);
        //return this.products
    },
    filterProducts: function (searchInput) {
        var filteredProduct = this.products.filter(function (pro) {
            return pro.name.toLowerCase().includes(searchInput.toLowerCase());
        });
        return render(filteredProduct);
    },
    // sortProducts: function (sortBtn) {
    // const sortedProducts = this.products.sort((a, b) => a.price.localeCompare(b.price))
    // render(sortedProducts)
    // }
    sortProductsLowToHigh: function () {
        this.products.sort(function (a, b) { return a.price - b.price; });
        return render(this.products);
    },
    sortProductsHighToLow: function () {
        this.products.sort(function (a, b) { return b.price - a.price; });
        return render(this.products);
    },
    sortProductsAlphabet: function () {
        this.products.sort(function (a, b) { return a.name.localeCompare(b.name); });
        render(this.products);
    },
    filterProductsByType: function (foodType) {
        if (foodType.length > 0) {
            var filteredProduct = this.products.filter(function (pro) { return pro.group == foodType; });
            return render(filteredProduct);
        }
        if (foodType.length == 0) {
            return render(this.products);
        }
    }
};
var render = function (productArray) {
    var html = "";
    productArray.forEach(function (product) {
        html += "\n    <div>\n      <div class=\"product\">\n        <p class=\"product__group\">" + product.group + "</p>\n        <h2 class=\"product__name\">" + product.name + "</h2>\n        <img class=\"product__image\" src=\"" + product.image + "\" alt=\"" + product.name + "\" />\n        <p class=\"product__id\">" + product.id + "</p>\n        <p class=\"product__price\">" + product.price + "</p>\n      </div>\n      <button id=\"btn-" + product.id + "\" type=\"button\" onclick=\"handleOpenFormEdit('" + product.id + "')\">Edit</button> \n      <form id=\"form-" + product.id + "\" onsubmit=\"handleUpdateProduct('" + product.id + "', event)\" style=\"display: none;\"> \n        <input type=\"text\" name=\"productName\" placeholder=\"Enter product name\" value=\"" + product.name + "\"/>\n        <input type=\"number\" name=\"productPrice\" placeholder=\"Enter product price\" value=\"" + product.price + "\"/>\n        <input type=\"url\" name=\"productImg\" placeholder=\"Enter product image\" value=\"" + product.image + "\"/>\n        <button type=\"submit\">Update</button>\n      </form>\n      <button type=\"button\" onclick=\"handleDeleteProduct('" + product.id + "')\">Delete</button>\n      </div>\n    ";
    });
    return root.innerHTML = html;
};
/*
  1. When we enter the page all updates forms are close.
  When we click on the button "Edit", only specific form is open
  (ex: if I want to edit apple product, only apple edit form opened)
  2. When the button "Edit" is pressed, it is return to "X" button.
  If we press the X button, it is return to "Edit"
*/
function handleOpenFormEdit(formId) {
    var form = document.getElementById("form-" + formId);
    var btn = document.getElementById("btn-" + formId);
    //document.querySelector("#form") -> give us the first element of the list
    //document.querySelectorAll("#form") -> give us node list [..., ..., ...]
    console.log(form);
    if (form.style.display === "none") {
        // display: none = невидно/нету -> Если жарко нет дыма из зо рта
        form.style.display = "block"; //display: block = У нас перед глазами блок/контейнет -> Если холод есть дым из зо рта
        btn.innerText = "X";
    }
    else {
        form.style.display = "none";
        btn.innerText = "Edit";
    }
}
// function handleLowToHighPriceProduct(sortProducts) {
//   const sortBtnLow = document.getElementById('sortBtnLow')
//   const sortBtnHigh = document.getElementById('sortBtnHigh')
// }
/*
  Если форма стиль экран нет -> то сделай форма стиль экран блок + кнопка внутриний текст = Х
  В лубом другом случае -> сделай форма стиль экран нет + кнопка внутриний текст Edit
*/
// all the manipulations will be in object - each function in object will return updated array
stock.showAllProducts();
var handleAddNew = function (ev) {
    // const group: string = prompt("Enter group");
    // const name: string = prompt("Enter name");
    // const image: string = prompt("Enter image");
    // const price: number = +prompt("Enter price");
    ev.preventDefault();
    console.log(ev);
    var fruitGroup = ev.target.elements.fruitGroup.value;
    var fruitName = ev.target.elements.fruitName.value;
    var fruitPrice = ev.target.elements.fruitPrice.value;
    var fruitImg = ev.target.elements.fruitImg.value;
    console.log(fruitGroup, fruitName, fruitPrice, fruitImg);
    stock.addNewProduct(fruitGroup, fruitName, fruitImg, fruitPrice);
};
//https://fruitonline.ru/image/cache/catalog/ban1-800x1000.jpg
var handleUpdateProduct = function (id, ev) {
    //const name: string = prompt("Enter name");
    //const id: string = prompt("Enter id");
    ev.preventDefault();
    var name = ev.target.elements.productName.value;
    var price = ev.target.elements.productPrice.value;
    var image = ev.target.elements.productImg.value;
    console.log(name, price, image);
    //getelementbyid -> display none
    stock.updateUProductName(id, name, image, price);
};
var handleDeleteProduct = function (id) {
    // const id: string = prompt("Enter id");
    stock.deleteProduct(id);
};
var handleSearchProduct = function (ev) {
    stock.filterProducts(ev.target.value);
};
function handleSortLowToHigh() {
    stock.sortProductsLowToHigh();
}
function handleSortHighToLow() {
    stock.sortProductsHighToLow();
}
function handleSortAlphabet() {
    stock.sortProductsAlphabet();
}
function hendleFilterByType(ev) {
    stock.filterProductsByType(ev.target.value);
}
/*
1. Read and understand the code

2. Create sort btn
sort the products from the lower to higher (price)
sort the products from the higher to lower (price)


TO DO!!!!!!!!!
sort the products as alfabet
DONE !!!!!!!!!!!!!!

3. create select (and option)
use the select create function that will filter the products by group fruit
*/
