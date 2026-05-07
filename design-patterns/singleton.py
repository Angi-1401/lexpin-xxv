class Database:
    __instance__ = None

    def __new__(cls, *args, **kwargs):
        if cls.__instance__ is None:
            cls.__instance__ = super(Database, cls).__new__(cls)
        return cls.__instance__

db1 = Database()
db2 = Database()
print(db1 is db2)  # Output: True
