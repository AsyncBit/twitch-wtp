class Grid {
  constructor() {
    this._rows = {};
  }

  /**
   * @readonly
   * @type {object}
   */
  get rows() {
    return this._rows;
  }

  /**
   * @param {number} x
   * @param {number} y
   * @returns {Cell}
   */
  addCell(x, y, data) {
    const cell = new Cell(x, y, data);
    if (!this.rows[cell.x]) {
      this.rows[cell.x] = new Row(cell.x);
    }
    cell._row = this.rows[cell.x];
    this.rows[cell.x].cells[cell.y] = cell;
  }
}

class Row {
  /**
   * @param {number} x
   */
  constructor(x) {
    this._x = x;
    this._cells = {};
  }

  /**
   * @readonly
   * @type {object}
   */
  get cells() {
    return this._cells;
  }

  /**
   * @readonly
   * @type {number}
   */
  get x() {
    return this._x;
  }
}

class Cell {
  /**
   * @param {number} x
   * @param {number} y
   * @param {Pokemon} data
   */
  constructor(x, y, data) {
    this._x = x;
    this._y = y;
    this._data = data;
  }

  /**
   * @readonly
   * @type {number}
   */
  get x() {
    return this._x;
  }

  /**
   * @readonly
   * @type {number}
   */
  get y() {
    return this._y;
  }

  get data() {
    return this._data;
  }

  set data(newData) {
    this._data = newData;
  }
}
