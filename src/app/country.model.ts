export class Country {

	private name: string
	private north: number
	private south: number	
	private east: number
	private west: number

	constructor(name: string, north: number, south: number, east: number, west: number){
		this.name = name
		this.north = north
		this.south = south
		this.east = east
		this.west = west
	}

	getLat(): number{
		return (this.north + this.south)/2
	}

	getLon(): number{
			return (this.east + this.west)/2
	}
}