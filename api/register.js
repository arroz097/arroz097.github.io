module.exports = (req, res) => {
    const dataHora = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

    // || significa or
    const ip = req.headers['x-forwarded-for'] || "IP Local";
    const navegador = req.headers['user-agent'];

    console.log(`NOVO PEIXE REGISTRADO:
    - Horário: ${dataHora}
    - IP: ${ip}
    - Navegador: ${navegador}`);

    // (200) é um dos codigos http, tal qual 404 por exemplo
    // (200) significa "ok", indicando a API que foi mandado com sucesso
    res.status(200).json({ok: true});
};