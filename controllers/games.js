const { readData, writeData } = require("../utils/data"); 

const sendAllGames = async (req, res) => {
    const games = await readData("./data/games.json");
    if (!games) {
        res.status(400);
        res.send({
        status: "error",
        message: "Нет игр в базе данных. Добавьте игру."
        });
        return;
    }
    req.games = games;
    res.send(req.games);
};

const deleteGame = async (req, res) => {
    const games = await readData("./data/games.json");
    if (!games) {
        res.status(400);
        res.send({
            status: "error",
            message: "Нет игр в базе данных. Добавьте игру.",
        });
        return;
    }
    req.games = games;

// Прочитаем запрашиваемый id игры из запроса
    const id = Number(req.params.id);
    
    // Найдём игру, которую хотят удалить, в общем массиве с играми по id
    req.game = req.games.find((item) => item.id === id);
    
    // Найдём индекс удаляемой игры в общем массиве игр
    const index = req.games.findIndex((item) => item.id === req.game.id);
    
    // Удалим из массива игр игру
    req.games.splice(index, 1);
    
    // Запишем обновлённый массив игр в JSON-файл
    await writeData("./data/games.json", req.games);
    
    // Вернём ответ о проделанной операции с данными о играх
    res.send({
        games: req.games,
        updated: req.game
    });
};




const sendUpdatedGames = (req, res) => {
    res.send({
        games: req.games,
        updated: req.updatedObject,
    });
};

module.exports = {
    deleteGame,
    sendAllGames,
    sendUpdatedGames,
}