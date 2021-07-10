function insertInBoard(updatedBoard, index, token) {
    return updatedBoard.substr(0, index) + token + updatedBoard.substr(index + 1)
}

export default insertInBoard
