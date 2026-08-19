 const btn = document.getElementById("btn");
        const heart = document.getElementById("lasti");
        const msg = document.getElementById("msg");

        let currentScale = 1;
        let count = 0;
        const total = 10;

        btn.addEventListener("click", () => {
            count++;
            currentScale += 0.35;
            
            // التكبير بـ transform كيخدم فكاع المتصفحات وبلا مشاكل
            heart.style.transform = scale(`${currentScale}`);

            if (count >= total) {
                heart.style.display = "none";
                msg.style.display = "block";
                btn.style.display = "none";
            }
        });
