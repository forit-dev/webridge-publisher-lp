document.addEventListener("DOMContentLoaded", () => {
    // 変数宣言を修正
    const voiceCards = document.querySelectorAll(".voice__card");
    const menuLinks = document.querySelectorAll(".globalNavigation__menuItem a");
    const drawerCheckbox = document.getElementById("drawer__checkbox");
    const fadeinElements = document.querySelectorAll(".c-fadeinScroll, .c-fadeinUpScroll");

    // .voice__card の開閉処理
    voiceCards.forEach(card => {
        const textElement = card.querySelector(".voice__descriptionText");
        const readMoreBtn = card.querySelector(".voice__readMoreText");

        if (textElement && readMoreBtn) {
        readMoreBtn.addEventListener("click", () => {
            // classList.toggle を使用
            textElement.classList.toggle("expanded");
            readMoreBtn.textContent = textElement.classList.contains("expanded") ? "閉じる" : "続きを読む";
        });
        }
    });

    // ハンバーガーメニューのスクロール処理
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        drawerCheckbox.checked = false;
        });
    });

    // コンテンツのフェードイン処理
    const onScroll = () => {
        fadeinElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const threshold = window.innerHeight * 0.9;
        const isVisible = rect.top < threshold && rect.bottom > 0;

        if (isVisible) {
            element.classList.add("visible");
        }
        });
    };

    window.addEventListener("scroll", onScroll);

    
    // 特定のURLにアクセスした場合
    if (window.location.href === 'https://stg-webridge-publisher-lp.netlify.app/') {
    // 別のURLへリダイレクト
    window.location.href = 'https://webridge.net/';
    }
});