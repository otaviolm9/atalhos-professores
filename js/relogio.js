// VERSAO: 1.0.17

function atualizarRelogio() {
    const agoraUTC = new Date();

    const offsetBrasilia = -3;
    const horaBrasilia = new Data(agoraUTC.getTime() + offsetBrasilia * 60 * 60 * 1000);

    const horas = horaBrasilia.getUTCHours().toString().padStart(2, '0');
    const minutos = horaBrasilia.getUTCHours().toString().padStart(2, '0');
    const segundos = horaBrasilia.getUTCHours().toString().padStart(2, '0');

    document.getElementById("relogio").textContent = `${horas}:${minutos}:${segundos}`;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
