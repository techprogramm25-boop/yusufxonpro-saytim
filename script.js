let messages = [];

AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

window.onload = () => {
    // 5.5 soniyadan keyin tugmani chiqarish
    setTimeout(() => {
        const ring = document.querySelector('.loader-ring');
        const dahoEntry = document.getElementById('daho-entry');
        
        // Ringni yo'qotish
        if(ring) ring.style.opacity = '0';
        
        // Tugmani ko'rsatish
        if(dahoEntry) {
            dahoEntry.style.display = 'block';
            setTimeout(() => {
                dahoEntry.style.opacity = '1';
            }, 100);
        }
    }, 5500);
};

// Qolgan funksiyalar (toggleAdmin, sendData, openVault) o'zgarishsiz qoladi
function toggleAdmin() {
    const p = document.getElementById('admin-panel');
    p.style.display = (p.style.display === 'block') ? 'none' : 'block';
}

function sendData() {
    const s = document.getElementById('sender').value;
    const m = document.getElementById('message').value;
    if(s.trim() && m.trim()) {
        messages.push({s, m, t: new Date().toLocaleTimeString()});
        alert("Daho Yusufxon: Xabaringiz qabul qilindi!");
        document.getElementById('sender').value = "";
        document.getElementById('message').value = "";
    } else {
        alert("Iltimos, maydonlarni to'ldiring!");
    }
}

function openVault() {
    const code = prompt("ROOT_KOD:");
    if(code === "20152015") {
        document.getElementById('logs').style.display = 'block';
        const l = document.getElementById('msg-list');
        l.innerHTML = messages.length ? 
            messages.map(x => `<div style="border-bottom:1px solid #1e293b; padding:10px; margin-bottom:5px;">[${x.t}] <b>${x.s}:</b> ${x.m}</div>`).join('') 
            : "<p style='padding:10px;'>Terminal bo'sh. Hali xabar kelmagan.</p>";
    } else { 
        alert("ACCESS_DENIED: Kod noto'g'ri!"); 
    }
}
