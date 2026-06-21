// GET ALL ELEMENTS — in same order as HTML
// Each getElementById is wrapped in a check because
// not every element exists on every page!
// =====================================================

const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");
const cartBadge = document.getElementById("cartBadge");

// Home page elements
const featuredGrid = document.getElementById("featuredGrid");
const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("emailInput");
const formMsg = document.getElementById("formMsg");

// Shop page elements
const shopGrid = document.getElementById("shopGrid");
const sortSelect = document.getElementById("sortSelect");

// Product detail page elements
const productDetail = document.getElementById("productDetail");
const relatedGrid = document.getElementById("relatedGrid");

// Cart page elements
const cartItems = document.getElementById("cartItems");
const cartSummary = document.getElementById("cartSummary");
const cartItemCount = document.getElementById("cartItemCount");

// Toast notification
const toast = document.getElementById("toast");

// =====================================================
// PRODUCT DATA — Array of Objects
// Type: Array of Objects
// WHEN: Use array when you have a LIST of similar items
// WHY: Each product has multiple properties — name,
// price, category, sizes, images all grouped together!
// =====================================================
const products = [
  {
    id: 1,
    name: "Shadow Overcoat",
    category: "outerwear",
    price: 285000,
    desc: "A structured double-breasted overcoat in deep charcoal wool. Tailored for presence. Lined in silk.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    ],
    featured: true,
    new: true,
  },
  {
    id: 2,
    name: "Ember Knit Turtleneck",
    category: "knitwear",
    price: 98000,
    desc: "Heavyweight ribbed knit in off-white merino wool. The kind of piece you reach for every time.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574164904299-3a102b110380?auto=format&fit=crop&w=800&q=80",
    ],
    featured: true,
    new: false,
  },
  {
    id: 3,
    name: "Atelier Blazer",
    category: "tailoring",
    price: 195000,
    desc: "Single-button blazer cut from Italian wool-blend fabric. Unlined for a relaxed modern drape.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598808503742-dd34af65444a?auto=format&fit=crop&w=800&q=80",
    ],
    featured: true,
    new: false,
  },
  {
    id: 4,
    name: "Gucci Leather Bag",
    category: "accessories",
    price: 45000,
    desc: "Full-grain leather belt with a matte gunmetal buckle. Minimal hardware. Maximum intention.",
    sizes: ["S/M", "M/L", "L/XL"],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800",
    ],
    featured: true,
    new: false,
  },

  {
    id: 5,
    name: "Cashmere Wrap Coat",
    category: "outerwear",
    price: 320000,
    desc: "Pure cashmere wrap coat in deep camel. Self-tie belt. The most luxurious thing you will own.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    ],
    featured: false,
    new: true,
  },
  {
    id: 6,
    name: "Wide-Leg Trousers",
    category: "tailoring",
    price: 125000,
    desc: "High-waisted wide-leg trousers in charcoal wool. The silhouette is everything.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=800&q=80",
    ],
    featured: false,
    new: true,
  },
  {
    id: 7,
    name: "Merino Cardigan",
    category: "knitwear",
    price: 78000,
    desc: "Oversized merino cardigan with deep pockets. In off-white. Wear it open or closed.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584273112214-52339504b2d0?auto=format&fit=crop&w=800&q=80",
    ],
    featured: false,
    new: false,
  },
  {
    id: 8,
    name: "Structured Tote",
    category: "accessories",
    price: 68000,
    desc: "Full-grain leather tote with a structured base. Fits everything. Looks like nothing else.",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605733513597-a8f8d410f286?auto=format&fit=crop&w=800&q=80",
    ],
    featured: false,
    new: false,
  },
];

// =====================================================
// FORMAT PRICE — Helper Function
// WHY: Converts raw number to readable Naira string
// Example: 285000 → "₦285,000"
// =====================================================

const formatPrice = (amount) => {
  return "₦" + amount.toLocaleString("en-NG");
};

// =====================================================
// SHOW TOAST NOTIFICATION
// Type: Function + setTimeout
// WHEN: Call after adding item to cart
// WHY: Shows brief success message then disappears!
// =====================================================

const showToast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
};

// =====================================================
// CART SYSTEM — localStorage
// Type: Object with multiple methods
// WHEN: Used across ALL pages
// WHY: Groups all cart operations in one place!
// Keeps code organised and not repeated! 💡
// =====================================================

const cart = {
  // Read cart from localStorage
  // Returns empty array if nothing saved yet
  get() {
    return JSON.parse(localStorage.getItem("ember_cart")) || [];
  },

  // Save cart array to localStorage
  save(items) {
    localStorage.setItem("ember_cart", JSON.stringify(items));
  },

  // Add a product to cart
  add(productId, size, quantity = 1) {
    const items = this.get();

    // Check if same product + same size already in cart
    const existing = items.find(
      (item) => item.productId === productId && item.size === size,
    );

    if (existing) {
      // Already in cart — increase quantity
      existing.quantity += quantity;
    } else {
      // New item — add to array
      items.push({ productId, size, quantity });
    }

    this.save(items);
    this.updateBadge();
  },

  // Remove one item from cart by its index
  remove(index) {
    const items = this.get();
    // splice removes items at a specific index position
    items.splice(index, 1);
    this.save(items);
    this.updateBadge();
  },

  // Count total items in cart
  // Uses reduce to add up all quantities
  count() {
    return this.get().reduce((total, item) => total + item.quantity, 0);
  },

  // Calculate total price of all cart items
  // Uses reduce + find to get each product's price
  total() {
    return this.get().reduce((total, item) => {
      // find() returns the first product matching the id
      const product = products.find((p) => p.id === item.productId);
      if (!product) return total;
      return total + product.price * item.quantity;
    }, 0);
  },

  // Update the cart badge number in navbar
  updateBadge() {
    const badge = document.getElementById("cartBadge");
    if (badge) badge.textContent = this.count();
  },
};

// =====================================================
// CREATE PRODUCT CARD — Helper Function
// Type: Function returning template literal string
// WHEN: Called by renderFeatured and renderShop
// WHY: One function creates cards for BOTH pages!
// DRY principle — Don't Repeat Yourself! 💡
// =====================================================

const createProductCard = (product) => {
  return `
    <div
      class="product-card"
      onclick="window.location='product.html?id=${product.id}'"
    >
      <div class="product-img-wrap">
        <img
          src="${product.images[0]}"
          alt="${product.name}"
          loading="lazy"
        />
      </div>
      <div class="product-card-info">
        <p class="product-category">${product.category}</p>
        <h3>${product.name}</h3>
        <p class="product-price">${formatPrice(product.price)}</p>
      </div>
    </div>
  `;
};

// =====================================================
// HOME PAGE — RENDER FEATURED PRODUCTS
// Type: filter() + innerHTML
// WHEN: Home page loads
// WHY: Shows only products where featured = true
// =====================================================

const renderFeatured = () => {
  if (!featuredGrid) return;

  // filter keeps only featured products
  const featured = products.filter((p) => p.featured);

  // map creates an array of HTML strings
  // join("") combines them into one big string
  featuredGrid.innerHTML = featured.map((p) => createProductCard(p)).join("");
};

// =====================================================
// SHOP PAGE — RENDER PRODUCTS WITH FILTER AND SORT
// Type: filter() + sort() + map()
// WHEN: Shop page loads or filter/sort changes
// WHY: Shows products based on active filter
// and selected sort order!
// =====================================================

const renderShop = (filterCategory = "all", sortBy = "featured") => {
  if (!shopGrid) return;

  // Step 1 — Filter by category
  // Spread operator [...] creates a copy of the array
  // so we don't accidentally modify the original!
  let filtered =
    filterCategory === "all"
      ? [...products]
      : products.filter((p) => p.category === filterCategory);

  // Step 2 — Sort the filtered results
  // sort() compares two items at a time (a and b)
  // Negative result → a comes first
  // Positive result → b comes first
  if (sortBy === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "newest") {
    filtered.sort((a, b) => b.id - a.id);
  }

  // Step 3 — Show empty message if nothing found
  if (filtered.length === 0) {
    shopGrid.innerHTML = `
      <p style="color: var(--muted); grid-column: 1/-1; padding: 3rem 0;">
        No pieces found in this category.
      </p>
    `;
    return;
  }

  // Step 4 — Render the product cards
  shopGrid.innerHTML = filtered.map((p) => createProductCard(p)).join("");
};

// =====================================================
// SHOP PAGE — FILTER AND SORT CONTROLS
// Type: querySelectorAll + forEach + addEventListener
// WHEN: User clicks filter button or changes sort
// WHY: Updates the grid based on user's selection!
// =====================================================

const initShopControls = () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (!filterBtns.length) return;

  // Keep track of current filter and sort
  let activeFilter = "all";
  let activeSort = "featured";

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active from all filter buttons
      filterBtns.forEach((b) => b.classList.remove("active"));

      // Add active to clicked button only
      btn.classList.add("active");

      // Update filter and re-render
      activeFilter = btn.getAttribute("data-filter");
      renderShop(activeFilter, activeSort);
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      activeSort = sortSelect.value;
      renderShop(activeFilter, activeSort);
    });
  }
};

// =====================================================
// PRODUCT DETAIL PAGE
// Type: URLSearchParams + find() + template literals
// WHEN: product.html loads
// WHY: Reads ?id=1 from the URL to know WHICH
// product to display — like a dynamic page!
// =====================================================

const initProductPage = () => {
  if (!productDetail) return;

  // URLSearchParams reads the URL query string
  // For example: product.html?id=3
  // params.get("id") returns "3" as a string
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));

  // find() returns the FIRST product matching the id
  const product = products.find((p) => p.id === productId);

  // If no product found — redirect to shop
  if (!product) {
    window.location.href = "shop.html";
    return;
  }

  // Update the page title
  document.title = `${product.name} — EMBER`;

  // Track selected size and quantity
  let selectedSize = null;
  let quantity = 1;

  // Build the product detail HTML
  productDetail.innerHTML = `
    <div class="product-detail-grid">

      <!-- Left: Image Gallery -->
      <div class="gallery-section">
        <div class="gallery-main">
          <img src="${product.images[0]}" alt="${product.name}" id="mainImage" />
        </div>
        <div class="gallery-thumbs">
          ${product.images
            .map(
              (img, index) => `
            <img
              src="${img}"
              alt="${product.name} view ${index + 1}"
              class="${index === 0 ? "active" : ""}"
              data-index="${index}"
            />
          `,
            )
            .join("")}
        </div>
      </div>

      <!-- Right: Product Info -->
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h1>${product.name}</h1>
        <p class="price">${formatPrice(product.price)}</p>
        <p class="desc">${product.desc}</p>

        <!-- Size Selector -->
        <span class="option-label">Select Size</span>
        <div class="sizes" id="sizeOptions">
          ${product.sizes
            .map(
              (size) => `
            <button class="size-btn" data-size="${size}">${size}</button>
          `,
            )
            .join("")}
        </div>

        <!-- Quantity Counter -->
        <div class="qty-row">
          <span class="option-label">Quantity</span>
          <div class="qty-controls">
            <button id="qtyMinus">−</button>
            <span id="qtyDisplay">1</span>
            <button id="qtyPlus">+</button>
          </div>
        </div>

        <!-- Add to Bag Button -->
        <button class="add-to-bag-btn" id="addToBagBtn">
          Add to Bag
        </button>

        <p class="form-msg" id="productMsg"></p>
      </div>

    </div>
  `;

  // Get product page elements AFTER building HTML
  const mainImage = document.getElementById("mainImage");
  const thumbs = document.querySelectorAll(".gallery-thumbs img");
  const sizeButtons = document.querySelectorAll(".size-btn");
  const qtyMinus = document.getElementById("qtyMinus");
  const qtyPlus = document.getElementById("qtyPlus");
  const qtyDisplay = document.getElementById("qtyDisplay");
  const addToBagBtn = document.getElementById("addToBagBtn");
  const productMsg = document.getElementById("productMsg");

  // Thumbnail click — swap main image
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      // Update main image source
      mainImage.src = product.images[thumb.getAttribute("data-index")];

      // Update active thumbnail
      thumbs.forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });

  // Size selection
  sizeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      sizeButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedSize = btn.getAttribute("data-size");
    });
  });

  // Quantity minus button
  qtyMinus.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      qtyDisplay.textContent = quantity;
    }
  });

  // Quantity plus button
  qtyPlus.addEventListener("click", () => {
    if (quantity < 10) {
      quantity++;
      qtyDisplay.textContent = quantity;
    }
  });

  // Add to bag button
  addToBagBtn.addEventListener("click", () => {
    // Size must be selected first
    if (!selectedSize) {
      productMsg.textContent = "Please select a size first!";
      productMsg.className = "form-msg error";
      setTimeout(() => {
        productMsg.textContent = "";
      }, 2500);
      return;
    }

    // Add to cart and show toast
    cart.add(product.id, selectedSize, quantity);
    showToast(`${product.name} added to bag!`);
    productMsg.textContent = "";
  });

  // Render related products — same category, different product
  if (relatedGrid) {
    const related = products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);

    relatedGrid.innerHTML = related.length
      ? related.map((p) => createProductCard(p)).join("")
      : `<p style="color: var(--muted);">No related pieces found.</p>`;
  }
};

// =====================================================
// CART PAGE — RENDER CART ITEMS
// Type: forEach + reduce + template literals
// WHEN: cart.html loads
// WHY: Reads cart from localStorage and displays
// every item with remove and quantity controls!
// =====================================================

const renderCart = () => {
  if (!cartItems) return;

  const items = cart.get();

  // Update item count text
  if (cartItemCount) {
    cartItemCount.textContent = `${items.length} item${items.length !== 1 ? "s" : ""}`;
  }

  // Show empty cart state if no items
  if (items.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-bag"></i>
        <h3>Your bag is empty</h3>
        <p>Looks like you haven't added anything yet.</p>
        <a href="shop.html" class="btn btn-accent">Shop Collection</a>
      </div>
    `;

    if (cartSummary) cartSummary.innerHTML = "";
    return;
  }

  // Render each cart item
  cartItems.innerHTML = items
    .map((item, index) => {
      // find() gets the full product details using the id
      const product = products.find((p) => p.id === item.productId);
      if (!product) return "";

      return `
        <div class="cart-item">
          <img src="${product.images[0]}" alt="${product.name}" />
          <div class="cart-item-info">
            <h4>${product.name}</h4>
            <p class="cart-item-meta">
              Size: ${item.size} &nbsp;·&nbsp; Qty: ${item.quantity}
            </p>
            <p class="cart-item-price">${formatPrice(product.price * item.quantity)}</p>
          </div>
          <button class="remove-btn" data-index="${index}">
            <i class="fas fa-times"></i>
          </button>
        </div>
      `;
    })
    .join("");

  // Attach remove listeners to all remove buttons
  const removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      cart.remove(parseInt(btn.getAttribute("data-index")));
      renderCart();
    });
  });

  // Render cart summary
  if (cartSummary) {
    const subtotal = cart.total();

    cartSummary.innerHTML = `
      <div class="cart-summary-box">
        <h3>Order Summary</h3>
        <div class="summary-row">
          <span>Subtotal</span>
          <span>${formatPrice(subtotal)}</span>
        </div>
        <div class="summary-row">
          <span>Shipping</span>
          <span>Calculated at checkout</span>
        </div>
        <div class="summary-total">
          <span>Total</span>
          <span>${formatPrice(subtotal)}</span>
        </div>
        <button class="checkout-btn" onclick="showToast('Checkout coming soon!')">
          Proceed to Checkout
        </button>
      </div>
    `;
  }
};

// =====================================================
// NEWSLETTER FORM
// Type: submit event + validation
// WHEN: User submits email on home page
// WHY: Validates email format before accepting!
// =====================================================

const initNewsletter = () => {
  if (!newsletterForm) return;

  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    // Simple email validation using regex
    // Checks for: something@something.something
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      formMsg.textContent = "Please enter a valid email address!";
      formMsg.className = "form-msg error";
      setTimeout(() => {
        formMsg.textContent = "";
      }, 3000);
      return;
    }

    // Valid email — show success!
    formMsg.textContent = "Welcome to the atelier. ✦";
    formMsg.className = "form-msg success";
    newsletterForm.reset();

    setTimeout(() => {
      formMsg.textContent = "";
    }, 4000);
  });
};

// =====================================================
// HAMBURGER MENU — works on ALL pages
// Type: classList toggle
// WHEN: User clicks hamburger on mobile
// WHY: Opens and closes navigation menu!
// =====================================================

// =====================================================
// SET CURRENT YEAR IN FOOTER
// WHY: Automatically shows correct year — never stale!
// =====================================================

const setCurrentYear = () => {
  const yearSpans = document.querySelectorAll(".current-year");
  yearSpans.forEach((span) => {
    span.textContent = new Date().getFullYear();
  });
};

// =====================================================
// INITIALIZE — Runs everything when page loads
// WHY: Each function checks if its elements exist
// before running — so one JS file safely handles
// ALL 6 pages without crashing! 💡
// =====================================================

// These run on EVERY page
initHamburger();
setCurrentYear();
cart.updateBadge();

// These run only on their specific page
// because each function checks if its elements exist!
renderFeatured();
renderShop();
initShopControls();
initProductPage();
renderCart();
initNewsletter();
