const categoriesContainer = document.getElementById("categoriesContainer");
const treesContainer = document.getElementById("treesContainer");
const categorySpinner = document.getElementById("category-spinner");

const allTreesBtn = document.getElementById("all-trees");
const treeDetailsModal = document.getElementById("tree_details_modal")

const modalImage = document.getElementById("modal-image")
const modalCategory = document.getElementById("modal-category")
const modalDescription = document.getElementById("modal-description")
const modalPrice = document.getElementById("modal-price")
const modalTitle = document.getElementById("modal-title")

let cart = [];
const cartContainer = document.getElementById("cart-container")
const totalPrice = document.getElementById("total-price")



function manageSpinner(status) {
    if (status == true) {
        document.getElementById("loading-spinner").classList.remove("hidden")
        document.getElementById("treesContainer").classList.add("hidden")
    }
    else {
        document.getElementById("loading-spinner").classList.add("hidden")
        document.getElementById("treesContainer").classList.remove("hidden")
    }
}


async function loadCategories() {
    categorySpinner.classList.remove("hidden");
    categoriesContainer.classList.add("hidden")

    const res = await fetch("https://openapi.programming-hero.com/api/categories");
    const data = await res.json();

    // Loop through the data.categories array and create a button for each category
    data.categories.forEach(category => {
        const btn = document.createElement("button");
        btn.className = "btn btn-outline w-full";
        // btn.textContent = category.category_name;

        btn.innerText = category.category_name;

        btn.onclick = () => selectCategory(category.id, btn);
        categoriesContainer.appendChild(btn);
    });

    categorySpinner.classList.add("hidden");
    categoriesContainer.classList.remove("hidden")
}




async function selectCategory(categoryId, btn) {
    console.log(categoryId, btn);
    manageSpinner(false)

    const allButtons = document.querySelectorAll("#categoriesContainer button, #all-trees");

    allButtons.forEach(btn => {
        btn.classList.remove("btn-primary")
        btn.classList.add("btn-outline")
    })

    btn.classList.add("btn-primary")
    btn.classList.remove("btn-outline")

    const res = await fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`);
    const data = await res.json();

    displayTrees(data.plants)
}




// All Trees Button

allTreesBtn.addEventListener("click", () => {
    // Update active button style
    const allButtons = document.querySelectorAll("#categoriesContainer button, #all-trees");

    allButtons.forEach(btn => {
        btn.classList.remove("btn-primary")
        btn.classList.add("btn-outline")
    })

    allTreesBtn.classList.add("btn-primary")
    allTreesBtn.classList.remove("btn-outline")

    loadTrees()
})






const loadTrees = async () => {
    manageSpinner(true)

    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();
    displayTrees(data.plants);

    manageSpinner(false)
};




const displayTrees = (trees) => {
    treesContainer.innerHTML = "";

    trees.forEach(tree => {
        const card = document.createElement("div");
        // card.className = "card bg-base-100 shadow-sm";

        card.className = "card bg-base-100 shadow-sm border border-base-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-teal-500 hover:shadow-[0_8px_30px_rgba(20,184,166,0.15)] transition-all duration-300"

        card.innerHTML = `
            <figure>
                <img
                    class="h-40 w-full object-cover"
                    src="${tree.image}"
                    alt="${tree.name}" />
            </figure>
            <div class="card-body">
                <h2 onclick="openTreeModal(${tree.id})" class="card-title hover:text-green-600 duration-300 ease font-semibold cursor-pointer text-left">${tree.name}</h2>
                <p class="text-left line-clamp-2">${tree.description}</p>
                <div class="flex justify-between items-center mb-0.5">
                    <div class="badge bg-[#DCFCE7] text-[#15803D] rounded-full">${tree.category}</div>
                    <h2 class="font-bold">${tree.price} TK</h2>
                </div>
                <div class="card-actions justify-end">

                    <button onclick="addToCart(${tree.id}, '${tree.name}', '${tree.price}')" class="btn text-white bg-[#15803D] w-full rounded-md"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                </div>
            </div>
        `;

        treesContainer.appendChild(card);
    });

    manageSpinner(false)
};





// Open modal and Load word details
async function openTreeModal(ID) {
    console.log("Clicked plants id is :", ID);

    const res = await fetch(`https://openapi.programming-hero.com/api/plant/${ID}`)
    const data = await res.json()
    const plantDetails = data.plants;
    // console.log(plantDetails);

    modalTitle.textContent = plantDetails.name;
    modalImage.src = plantDetails.image;
    modalDescription.textContent = plantDetails.description;
    modalPrice.textContent = plantDetails.price;
    modalCategory.textContent = plantDetails.category;

    treeDetailsModal.showModal()
}



function addToCart(id, name, price) {
    console.log(id, name, price, "Added to cart.");

    const existingItem = cart.find(item => item.id == id)
    if (existingItem) {
        existingItem.quantity++;
    }
    else {
        cart.push({
            id,
            name,
            price,
            quantity: 1,
        })
    }

    updateCart()
}



function updateCart() {
    cartContainer.innerHTML = "";

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;

        const cartItem = document.createElement("div");
        cartItem.className = "card card-body shadow-md";

        cartItem.innerHTML = `
            <div class="flex justify-between ">
                <div class="text-left">
                    <h2 class="font-bold">${item.name}</h2>
                    <p class="text-sm text-gray-500 mt-1">TK ${item.price} × ${item.quantity}</p>
                </div>
                <button onclick="removeFromCart(${item.id})" class="btn btn-ghost btn-sm">✕</button>
            </div>
            <p class="text-right text-xl font-bold text-green-600">TK ${item.price * item.quantity}</p>
        `;

        cartContainer.appendChild(cartItem);
    });

    totalPrice.innerText = `${total} TK.`;


}



function removeFromCart(treeId) {
    // must be declare by let
    let updatedCartElements = cart.filter((item) => item.id != treeId);
    cart = updatedCartElements;
    updateCart()
}








loadTrees();
loadCategories();