import getInitValues from "../getInitValues/getInitValues"

function setNewTetriminos(tetriminos) {
  tetriminos.rotation.set(getInitValues('rotation'))
  tetriminos.position.set(getInitValues('position'))
  tetriminos.shape.set(tetriminos.nextShape.value.slice())
  tetriminos.nextShape.set(getInitValues('shape'))
}

export default setNewTetriminos
