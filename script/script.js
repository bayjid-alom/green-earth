const categoriesContainer = document.getElementById("categoriesContainer");
const treesContainer = document.getElementById("treesContainer");



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
    const res = await fetch("https://openapi.programming-hero.com/api/categories");
    const data = await res.json();

    // Loop through the data.categories array and create a button for each category
    data.categories.forEach(category => {
        const btn = document.createElement("button");
        btn.className = "btn btn-outline w-full";
        // btn.textContent = category.category_name;

        btn.innerText = category.category_name;
        categoriesContainer.appendChild(btn);
    });
}




const loadTrees = async () => {
    manageSpinner(true)

    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();
    displayTrees(data.plants);
};




const displayTrees = trees => {
    treesContainer.innerHTML = "";

    trees.forEach(tree => {
        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow-sm";

        card.innerHTML = `
            <figure>
                <img
                    class="h-48 w-full object-cover"
                    src="${tree.image}"
                    alt="${tree.name}" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-left">${tree.name}</h2>
                <p class="text-left line-clamp-2">${tree.description}</p>
                <div class="flex justify-between items-center">
                    <div class="badge bg-[#DCFCE7] text-[#15803D]">${tree.category}</div>
                    <h2 class="font-bold">Tk ${tree.price}</h2>
                </div>
                <div class="card-actions justify-end">
                    <button class="btn text-white bg-[#15803D] w-full rounded-full">Add to Cart</button>
                </div>
            </div>
        `;

        treesContainer.appendChild(card);
    });

    manageSpinner(false)
};



loadTrees();
loadCategories();