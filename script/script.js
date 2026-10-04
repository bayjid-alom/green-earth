const categoriesContainer = document.getElementById("categoriesContainer")

async function loadCategories() {
    const res = await fetch("https://openapi.programming-hero.com/api/categories")
    const data = await res.json()

    // Loop through the (data.categories) array and create a button for each category
    data.categories.forEach(category => {
        const btn = document.createElement("button")
        btn.className = "btn btn-outline w-full"

        // btn.textContent = category.category_name;
        btn.innerText = category.category_name;
        categoriesContainer.appendChild(btn)
    })

}

loadCategories()


// {id: 10, category_name: 'Aquatic Plant', small_description: 'Plants that grow in or near water bodies.'}