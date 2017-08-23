export class Country {

	name: string
	north: number
	south: number	
	east: number
	west: number

	constructor(name: string, north: number, south: number, east: number, west: number){
		this.name = name
		this.north = north
		this.south = south
		this.east = east
		this.west = west
	}

	getNorth(): number{
		return this.north
	}

	getSouth(): number{
		return this.south
	}

	getEast(): number{
		return this.east
	}

	getWest(): number{
		return this.west
	}

	getLat(): number{
		return (this.north + this.south)/2
	}

	getLon(): number{
			return (this.east + this.west)/2
	}
}