// 创建闪烁的星星
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starsContainer.appendChild(star);
    }
}

// 应用网址映射
const appUrls = {
    'quiz-game': 'https://quiz-game-sandy-eight.vercel.app/',
    'todo-app': 'https://todo-pi-six-10.vercel.app/',
    'form-validator': 'https://register-coral-eta.vercel.app/',
    'password-generator': 'https://password-generator-phi-two-33.vercel.app/',
    'recipe-finder': 'https://recipe-finder-puce-six.vercel.app/'
};

// 打开应用的功能
function openApp(appName) {
    // 显示加载状态
    const card = event.currentTarget;
    const originalText = card.querySelector('.app-name').textContent;
    card.querySelector('.app-name').innerHTML = `加载中 <span class="loading"></span>`;
    
    // 模拟加载延迟
    setTimeout(() => {
        // 获取对应的应用网址
        const appUrl = appUrls[appName];
        
        if (appUrl) {
            // 跳转到对应的应用页面
            window.open(appUrl, '_blank');
        } else {
            alert(`未找到 ${appName} 应用的网址`);
        }
        
        // 恢复原始文本
        card.querySelector('.app-name').textContent = originalText;
    }, 1000);
}

// 添加卡片点击事件
function addCardClickEvents() {
    const cards = document.querySelectorAll('.app-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const appName = this.getAttribute('data-app');
            openApp(appName);
        });
    });
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', function() {
    createStars();
    addCardClickEvents();
});
