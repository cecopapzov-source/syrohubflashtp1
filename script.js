/* 
   SYRO HUB - ANTI-INSPECT PROTECTION 
   This script handles the visual part and basic protection.
*/

(function() {
    // Показване на съобщението веднага
    const updateUI = () => {
        document.body.style.backgroundColor = "#000";
        document.body.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                <h1 style="color: #ff0000; font-size: 3rem; text-shadow: 2px 2px #550000; margin-bottom: 10px;">ACCESS DENIED</h1>
                <p style="color: #555; font-size: 1.2rem;">Error Code: 403-FORBIDDEN</p>
                <div style="color: #222; margin-top: 50px; font-size: 0.8rem;">SYRO_SECURITY_LAYER_V3</div>
            </div>
        `;
    };

    // Блокиране на десен бутон (Right Click)
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Блокиране на преки пътища (F12, Ctrl+Shift+I, Ctrl+U)
    document.onkeydown = function(e) {
        if (e.keyCode == 123 || 
            (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0))) || 
            (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
            return false;
        }
    };

    // Постоянно чистене на конзолата за объркване
    setInterval(() => {
        console.clear();
        console.log("%cSTOP!", "color:red;font-size:40px;font-weight:bold;");
        console.log("%cThis area is protected by Syro Hub Security.", "color:white;font-size:12px;");
    }, 500);

    window.onload = updateUI;
})();
