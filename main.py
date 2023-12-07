温度: List[number] = []
日時: List[number] = []
timeanddate.set_date(12, 8, 2023)

def on_forever():
    basic.show_string("Hello World!")
basic.forever(on_forever)
