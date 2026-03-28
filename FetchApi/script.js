function loadUsers() {
    const container = document.querySelector(".users");

    // Clear old cards before loading new ones
    container.innerHTML = "";

    // Show loading state on button
    const btn = document.getElementById("reloadBtn");
    btn.textContent = "⏳ Loading...";
    btn.disabled = true;

    fetch("https://randomuser.me/api/?results=3")
        .then((raw) => raw.json())
        .then((data) => {
            data.results.forEach(user => {

                // Card wrapper
                const card = document.createElement("div");
                card.className = "max-w-sm w-full bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300";

                // Banner
                const banner = document.createElement("div");
                banner.className = "h-36 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500";
                card.appendChild(banner);

                // Body
                const body = document.createElement("div");
                body.className = "flex flex-col items-center px-6 pb-8 -mt-14";

                // Avatar
                const avatar = document.createElement("img");
                avatar.src = user.picture.large;
                avatar.alt = "User Avatar";
                avatar.className = "w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover";
                body.appendChild(avatar);

                // Badge
                const badge = document.createElement("span");
                badge.className = "mt-3 px-3 py-0.5 bg-indigo-100 text-indigo-600 text-xs font-semibold rounded-full uppercase tracking-wide";
                badge.textContent = "Pro Member";
                body.appendChild(badge);

                // Name
                const name = document.createElement("h2");
                name.className = "mt-2 text-2xl font-bold text-gray-800";
                name.textContent = user.name.first + " " + user.name.last;
                body.appendChild(name);

                // Location
                const role = document.createElement("p");
                role.className = "text-sm text-purple-500 font-medium";
                role.textContent = `${user.location.city}, ${user.location.country}`;
                body.appendChild(role);

                // Email bio
                const bio = document.createElement("p");
                bio.className = "mt-2 text-center text-gray-500 text-sm";
                bio.textContent = `📧 ${user.email}`;
                body.appendChild(bio);

                // Buttons
                const btnContainer = document.createElement("div");
                btnContainer.className = "flex gap-3 mt-5 w-full";

                const followBtn = document.createElement("button");
                followBtn.className = "flex-1 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-200";
                followBtn.textContent = "➕ Follow";

                const messageBtn = document.createElement("button");
                messageBtn.className = "flex-1 py-2.5 text-sm font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-2xl hover:bg-indigo-100 transition-all duration-200";
                messageBtn.textContent = "💬 Message";

                btnContainer.appendChild(followBtn);
                btnContainer.appendChild(messageBtn);
                body.appendChild(btnContainer);

                card.appendChild(body);
                container.appendChild(card);
            });
        })
        .catch((err) => {
            console.log("Error fetching users:", err);
        })
        .finally(() => {
            // Restore button after loading
            btn.innerHTML = "🔄 Load New Users";
            btn.disabled = false;
        });
}

// Load users automatically on page start
loadUsers();