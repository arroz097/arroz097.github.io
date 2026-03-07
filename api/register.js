module.exports = (req, res) => {
    const dataHora = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

    // || significa or
    const ip = req.headers['x-forwarded-for'] || "IP Local";
    const navegador = req.headers['user-agent'];

    res.status(200).json({
        "status": "comprado",
        "mensagem": "Le fishe au chocolat comprado!",
        "detalhes da compra": {
            "horario": dataHora,
            "origem": ip,
            "navegador": navegador,
            // "versao_sistema": "1.0.0-beta"
        },
    });
};