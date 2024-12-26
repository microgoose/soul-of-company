export interface TemperatureMessage {
    id: number | null,
    minTemperature: number,
    maxTemperature: number,
    message: string,
}