class APIService {
  static TOKEN = import.meta.env.VITE_OAUTH_TOKEN
  static BASE_URL = "https://public-api.meteofrance.fr/public/DPObs/v1"

  /** path names */

  private static get listStationPathName() {
    return "/liste-stations"
  }
  private static get getStationMeasurementsPathName() {
    return "/station/infrahoraire-6m"
  }

  /** internal methods */

  private static getRequestOptions() {
    return {
      method: "GET",
      headers: {
        Authorization: `Bearer ${APIService.TOKEN}`
      }
    }
  }

  private static async fetch(url: string) {
    const response = await fetch(url, this.getRequestOptions())
    if (response.ok) {
      return await response.text()
    } else {
      throw new Error("Error")
    }
  }

  /** public methods */

  public static async getListStation() {
    const url = `${APIService.BASE_URL}${this.listStationPathName}`
    return await this.fetch(url)
  }

  public static async getStationMeasurements(stationId: string) {
    const url = `${APIService.BASE_URL}${this.getStationMeasurementsPathName}?id_station=${stationId}&format=geojson`
    return await this.fetch(url)
  }
}

export default APIService