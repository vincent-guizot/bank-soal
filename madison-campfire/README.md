# Quiz-OOP

## Time : 75 Minutes

## Learning Competencies

- Students can implement OOP
- Students know how to analyze
- Students can work in certain time

___
> KERJAKAN YANG PALING MUDAH DULU
___

## RULES

1. BUAT BRANCH BARU : [pagi-<nama>], ADD - COMMIT - PUSH -> LALU MERGE REQUEST
2. KE PUSH MASTER -> SENGAJA ATAU TIDAK SENGAJA -> AUTO NOL (0) !

### TASK STORYLINE

During Summer holiday Madison and her friends decided to go for a camping in west California. They set a camp, and ignite the **Campfire**.
Campfire is used as a _factory_ to produce the foods. Because Madison once worked as a Chef, her friends bring Meats and askes Madison to cook.
They bring Beef and Mutton, spices and beverages. And now is time for Madison to cook for them. Help Madison cook guys!

### Task 1 - Prepare the class

Prepare the Meat class that has :

- slot
- type
- weight

### Task 2 - Cut the meat

Inherit class Beef and Mutton

- status : Rare, Medium, Well DOne

### Task 3 - Grill in Campfire

Process must be in here. Requirement :

- Madison can stock up steak in the container.
- Madison can eat from the container, pick from the slot.
- She can grill beef and mutton, the status after she cooked is Random.
- She can tracked what she has eaten.
- She knows the steaks in the container.

```javascript
class Campfire {
    constructor(){
        this.container = []
        this.fullness = {
            beefs : 0,
            muttons : 0
        }
    }

    grill(meat){
        //code here
    }
    eat(steak){
        //code here
    }
}
```

Example in container :

```javascript
[
    Beef {
        slot : 1,
        type : "beef",
        weight : 500,
        status : "Well DOne"
    },
]
```

## Procedure

- Boleh mnambah var baru jika diperlukan
- Penamaan var harus jelas
- Kerjakan yang mudah terlebih dulu
- Identasi/spasi/tab di perhatikan
- DRY and Clean Code!
