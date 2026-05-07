class TrafficLight:
    def __init__(self):
        self.state = GreenState()

    def change_state(self):
        self.state.next_state(self)


class GreenState:
    def next_state(self, traffic_light):
        traffic_light.state = YellowState()
        print("Changing to Yellow State")


class YellowState:
    def next_state(self, traffic_light):
        traffic_light.state = RedState()
        print("Changing to Red State")


class RedState:
    def next_state(self, traffic_light):
        traffic_light.state = GreenState()
        print("Changing to Green State")


traffic_light = TrafficLight()
traffic_light.change_state()  # Output: Changing to Yellow State
traffic_light.change_state()  # Output: Changing to Red State