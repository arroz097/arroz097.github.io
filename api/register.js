module.exports = (req, res) => {
    const dataHora = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

    // || significa or
    const ip = req.headers['x-forwarded-for'] || "IP Local";
    const navegador = req.headers['user-agent'];

    console.log(`NOVA VENDA REGISTRADA:
    - Horário: ${dataHora}
    - IP: ${ip}
    - Navegador: ${navegador}`);

    res.status(200).json({
        "status": "comprado",
        "mensagem": "Le fishe au chocolat comprado!",
        "detalhes": { "horario": dataHora, "origem": ip }
    });
};