const btn = document.querySelector("#btn");
const heartIcon = document.querySelector("#lasti");
const message = document.querySelector("h3");

let size = 40;
let clickCount = 0;
const maxClicks = 8; // 8 كليكات كافية ومناسبة للشاشات د التلفون

btn.onclick = () => {
    clickCount += 1;
    size += 25; // كيزيد بالحجم بلا ما يفركع الشاشة

    heartIcon.style.fontSize = `${size}px`;

    if (clickCount >= maxClicks) {
        heartIcon.style.display = "none";
        message.style.display = "block"; // أحسن من inline للتنسيق
        btn.style.display = "none"; // كيخفي البوتون فاش يظهر الميساج النهائي
    }
};
