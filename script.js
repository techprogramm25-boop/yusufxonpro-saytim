let messages = [];

// AOS Animatsiyani ishga tushirish
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

// Sahifa yuklanganda loader'ni yo'qotish
window.onload = () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 800);
        }
        const content = document.getElementById('content');
        if (content) {
            content.style.opacity = '1';
        }
    }, 5500);
};

// Admin panelini ochish/yopish
function toggleAdmin() {
    const p = document.getElementById('admin-panel');
    p.style.display = (p.style.display === 'block') ? 'none' : 'block';
}

// Xabar yuborish
function sendData() {
    const s = document.getElementById('sender').value;
    const m = document.getElementById('message').value;
    if(s && m) {
        messages.push({s, m, t: new Date().toLocaleTimeString()});
        alert("Daho Yusufxon: Xabaringiz qabul qilindi!");
        document.getElementById('sender').value = "";
        document.getElementById('message').value = "";
    } else {
        alert("Iltimos, ism va xabarni to'ldiring!");
    }
}

// Terminalga kirish
function openVault() {
    const code = prompt("ROOT_KOD:");
    if(code === "20152015") {
        document.getElementById('logs').style.display = 'block';
        const l = document.getElementById('msg-list');
        l.innerHTML = messages.length ? 
            messages.map(x => `<div style="border-bottom:1px solid #1e293b; padding:10px;">[${x.t}] <b>${x.s}:</b> ${x.m}</div>`).join('') 
            : "Terminal bo'sh.";
    } else { 
        alert("ACCESS_DENIED"); 
    }
}