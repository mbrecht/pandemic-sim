class Tile {
  constructor(x, y) {
    this.pos = { x, y };
    this.status = "healthy"; // 'healthy' || 'immune' || 'infected'
  }
}

class Board {
  constructor(rows, cols) {
    console.log(`Creating new board.\nWidth:\t${rows}\nHeight:\t${cols}`);

    this.dims = { rows, cols };
    // Creates 2D array
    this.rows = new Array(parseInt(rows))
      .fill(new Array(parseInt(cols)).fill(""))
      // Populates with empty tiles
      .map((row, x) => row.map((_, y) => new Tile(x, y)));
  }

  setTile(x, y, status) {
    this.getTile(x, y).status = status;
  }

  getTile(x, y) {
    if (this.rows[y]) return this.rows[y][x];
  }

  getAllInfected() {
    return this.rows.flat().filter(({ status }) => status === "infected");
  }

  findNextInfected(tile) {
    const { x, y } = tile.pos;
    const tiles = [
      [x, y + 1],
      [x, y - 1],
      [x + 1, y],
      [x - 1, y]
    ]
      .map(([x, y]) => {
        console.log(x, y);
        return this.getTile(x, y);
      })
      .filter(tile => tile) // get rid of tiles that don't exist
      .filter(({ status }) => status !== "immune"); // immune cannot be infected
    return tiles;
  }

  infectTile(tile) {
    this.rows[tile.pos.y][tile.pos.x].status = "infected";
  }

  simRound() {
    const tiles = this.getAllInfected()
      .map(this.findNextInfected.bind(this))
      .flat();

    tiles.forEach(this.infectTile.bind(this));
  }
}

export default Board;
