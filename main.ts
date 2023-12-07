input.onButtonPressed(Button.A, function () {
    serial.writeNumbers(温度)
})
let 温度: number[] = []
温度 = []
let 日時: string[] = []
timeanddate.setDate(12, 8, 2023)
timeanddate.setTime(0, 0, 0, timeanddate.MornNight.AM)
loops.everyInterval(1000, function () {
    bluetooth.startTemperatureService()
    温度.push(input.temperature())
    日時.push(timeanddate.dateTime())
})
