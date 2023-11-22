var root = document.querySelector(".root");
// function that render an uniuq id
var uid = function () {
    return Math.random().toString(36).substr(2, 9);
};
//enum of products group that exist
var GroupProduct;
(function (GroupProduct) {
    GroupProduct["fruits"] = "fruits";
    GroupProduct["meat"] = "meat";
    GroupProduct["vegitables"] = "vegitables";
})(GroupProduct || (GroupProduct = {}));
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
// stock and methods/functions of our stock
var stock = {
    products: arrOfProduct,
    // return this.products
    showAllProducts: function () {
        // return this.products.forEach((product) => {
        //   console.log(
        //     `the name is ${product.name}, the image is ${product.image}, the number id is ${product.id}`
        //   );
        // });
        render(this.products);
    },
    // add product function
    addNewProduct: function (group, name, image, price) {
        this.products.push({ id: uid(), group: group, name: name, image: image, price: price });
        return this.products;
    },
    // update product function
    updateUProductName: function (id, name) {
        var productFind = this.products.find(function (product) {
            return product.id == id; // сравнение
        });
        productFind.name = name; //- одно ровно это значит поменять одно значение на другое
        return this.products;
    },
    // delete product function
    deleteProduct: function (id) {
        this.products = this.products.filter(function (product) { return product.id !== id; });
        return this.products;
    }
};
var render = function (productArray) {
    var html = '';
    productArray.forEach(function (product) {
        html += "\n      <div class=\"product\">\n        <h2>" + product.name + "</h2>\n        <p>" + product.price + "</p>\n        <p>" + product.group + "</p>\n        <p>" + product.id + "</p>\n        <img src=\"" + product.image + "\" alt=\"" + product.name + "\" />\n      </div>\n    ";
    });
    root.innerHTML = html;
};
// all the manipulations will be in object - each function in object will return updated array
stock.showAllProducts();
var handleAddNew = function () {
    var name = prompt("Enter name");
    var group = prompt("Enter group");
    var image = prompt("Enter image");
    var price = +prompt("Enter price");
    console.log(stock.addNewProduct(name, group, image, price));
};
var handleUpdateProduct = function () {
    var name = prompt("Enter name");
    var id = prompt("Enter id");
    console.log(stock.updateUProductName(id, name));
};
var handleDeleteProduct = function () {
    var id = prompt("Enter id");
    console.log(stock.deleteProduct(id));
};
