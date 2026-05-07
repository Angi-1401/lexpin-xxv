import copy

class Character:
    def __init__(self, health, weapon):
        self.health = health
        self.weapon = weapon

base_character = Character(100, "sword")

soldier1 = copy.deepcopy(base_character)
soldier2 = copy.deepcopy(base_character)

soldier1.health = 80
soldier2.weapon = "bow"