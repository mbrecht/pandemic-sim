class Tile {
  constructor(x, y) {
    this.pos = { x, y };
    this.status = "healthy"; // 'healthy' || 'immune' || 'infected'
    this.id = `(${x}, ${y})`; // quick and dirty way to make unique ids for vue keys
  }
}

class Board {
  constructor(rows, cols) {
    this.dims = { rows, cols };
    // Creates 2D array
    this.rows = new Array(parseInt(rows))
      .fill(new Array(parseInt(cols)).fill(""))
      // Populates with empty tiles
      .map((row, x) => row.map((_, y) => new Tile(x, y)));

    this.id = "board";
  }

  setTile(x, y, status) {
    console.log(`Setting tile (${x}, ${y}) to ${status}`);
    this.getTile(x, y).status = status;
  }

  getTile(x, y) {
    if (this.rows[x]) return this.rows[x][y];
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
        return this.getTile(x, y);
      })
      .filter(tile => tile) // get rid of tiles that are undefined
      .filter(({ status }) => status !== "immune" && status !== "infected"); // immune tiles cannot be infected
    return tiles;
  }

  infectTile(tile) {
    this.getTile(tile.pos.x, tile.pos.y).status = "infected";
  }

  simRound() {
    const uniqueTiles = new Set([
      ...this.getAllInfected()
        .map(this.findNextInfected.bind(this))
        .flat()
    ]);
    const tiles = [...uniqueTiles];

    tiles.forEach(this.infectTile.bind(this));

    return tiles.length;
  }
}

export default Board;
