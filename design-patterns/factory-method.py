class Transport:
    def deliver(self):
        pass


class Truck(Transport):
    def deliver(self):
        print("Deliver by truck")


class Ship(Transport):
    def deliver(self):
        print("Deliver by ship")


class Logistics:
    def create_transport(self, mode):
        if mode == "road":
            return Truck()
        elif mode == "sea":
            return Ship()
        else:
            raise ValueError("Invalid transport mode")
        

logistics = Logistics()
transport1 = logistics.create_transport("road")
transport2 = logistics.create_transport("sea")
transport1.deliver()  # Output: Deliver by truck
transport2.deliver()  # Output: Deliver by ship