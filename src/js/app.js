// voiceセクションの続きを読むボタンの開閉のアニメーション
document.addEventListener("DOMContentLoaded", () => {
    // 全ての .voice__card を取得
    const cards = document.querySelectorAll(".voice__card");

    cards.forEach(card => {
        // カード内の必要な要素を取得
        const textElement = card.querySelector(".voice__descriptionText");
        const readMoreBtn = card.querySelector(".voice__readMoreText");

        // ボタンが存在する場合のみイベントリスナーを追加
        if (textElement && readMoreBtn) {
            readMoreBtn.addEventListener("click", () => {
                // テキストが展開状態か確認
                if (textElement.classList.contains("expanded")) {
                    textElement.classList.remove("expanded");
                    readMoreBtn.textContent = "続きを読む";
                } else {
                    textElement.classList.add("expanded");
                    readMoreBtn.textContent = "閉じる";
                }
            });
        }
    });
});


// ハンバーガーメニューのメニュー本体をクリック後に自動で閉じる&該当セクションにスムーススクロールするアニメーション
document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".globalNavigation__menuItem a");
    const drawerCheckbox = document.getElementById("drawer__checkbox");

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            // ページ内スクロールをスムーズに実行
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }

            // ハンバーガーメニューを閉じる
            drawerCheckbox.checked = false;
        });
    });
});


// コンテンツのフェードインのアニメーション
document.addEventListener("DOMContentLoaded", () => {
    // .fadeinScroll と .fadeinUpScroll の両方を取得
    const fadeinElements = document.querySelectorAll(".c-fadeinScroll, .c-fadeinUpScroll");

    const onScroll = () => {
        fadeinElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const threshold = window.innerHeight * 0.9; // スクロール量の調整（画面下部の90%）
            const isVisible = rect.top < threshold && rect.bottom > 0;

            if (isVisible) {
                element.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", onScroll);
});


