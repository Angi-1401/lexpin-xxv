class Pizza:
    def __init__(self):
        self.ingredients = []

class PizzaBuilder:
    def __init__(self):
        self.pizza = Pizza()

    def add_cheese(self):
        self.pizza.ingredients.append("cheese")
        return self

    def add_pepperoni(self):
        self.pizza.ingredients.append("pepperoni")
        return self

    def add_olives(self):
        self.pizza.ingredients.append("olives")
        return self
    
    def add_mushrooms(self):
        self.pizza.ingredients.append("mushrooms")
        return self

    def build(self):
        return self.pizza
    

pizza = PizzaBuilder().add_cheese().add_olives().add_mushrooms().build()
print(pizza.ingredients)  # Output: ['cheese', 'olives', 'mushrooms']