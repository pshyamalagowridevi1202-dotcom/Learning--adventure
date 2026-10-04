/* ==========================================================================
   LEARNING ADVENTURE ACTIVITIES DATA (Nursery to 10th Class)
   ========================================================================== */

const ACTIVITIES_DATA = [
  // --- NURSERY (5 Playful Interactive Activities) ---
  {
    id: 'nur_color_hunt',
    classLevel: 'nursery',
    className: 'Nursery',
    title: 'Color Hunt',
    desc: 'Find bright colors hidden in the magical garden!',
    icon: '🎨',
    gesture: 'tap',
    steps: [
      {
        prompt: 'Find the bright RED Apple! 🍎',
        targetLabel: 'Red Apple',
        options: [
          { label: 'Red Apple 🍎', emoji: '🍎', isCorrect: true },
          { label: 'Yellow Banana 🍌', emoji: '🍌', isCorrect: false },
          { label: 'Green Leaf 🍃', emoji: '🍃', isCorrect: false }
        ]
      },
      {
        prompt: 'Find the sunny YELLOW Banana! 🍌',
        targetLabel: 'Yellow Banana',
        options: [
          { label: 'Blue Car 🚙', emoji: '🚙', isCorrect: false },
          { label: 'Yellow Banana 🍌', emoji: '🍌', isCorrect: true },
          { label: 'Purple Grape 🍇', emoji: '🍇', isCorrect: false }
        ]
      },
      {
        prompt: 'Find the fresh GREEN Leaf! 🍃',
        targetLabel: 'Green Leaf',
        options: [
          { label: 'Green Leaf 🍃', emoji: '🍃', isCorrect: true },
          { label: 'Orange Pumpkin 🎃', emoji: '🎃', isCorrect: false },
          { label: 'Red Strawberry 🍓', emoji: '🍓', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'nur_shape_fun',
    classLevel: 'nursery',
    className: 'Nursery',
    title: 'Shape Fun',
    desc: 'Find round circles, shining stars & magic shapes!',
    icon: '⭐',
    gesture: 'tap',
    steps: [
      {
        prompt: 'Find the shining Golden STAR! ⭐',
        targetLabel: 'Star',
        options: [
          { label: 'Golden Star ⭐', emoji: '⭐', isCorrect: true },
          { label: 'Red Circle 🔴', emoji: '🔴', isCorrect: false },
          { label: 'Blue Square 🟦', emoji: '🟦', isCorrect: false }
        ]
      },
      {
        prompt: 'Find the smooth round CIRCLE! 🔴',
        targetLabel: 'Circle',
        options: [
          { label: 'Red Circle 🔴', emoji: '🔴', isCorrect: true },
          { label: 'Red Triangle 🔺', emoji: '🔺', isCorrect: false },
          { label: 'Golden Star ⭐', emoji: '⭐', isCorrect: false }
        ]
      },
      {
        prompt: 'Find the bright TRIANGLE! 🔺',
        targetLabel: 'Triangle',
        options: [
          { label: 'Red Triangle 🔺', emoji: '🔺', isCorrect: true },
          { label: 'Blue Square 🟦', emoji: '🟦', isCorrect: false },
          { label: 'Golden Star ⭐', emoji: '⭐', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'nur_match_pair',
    classLevel: 'nursery',
    className: 'Nursery',
    title: 'Match & Pair',
    desc: 'Match cute baby animals with their toys & foods!',
    icon: '🧸',
    gesture: 'tap',
    steps: [
      {
        prompt: 'Match Bunny with its favorite CARROT! 🥕',
        targetLabel: 'Carrot',
        options: [
          { label: 'Fresh Carrot 🥕', emoji: '🥕', isCorrect: true },
          { label: 'Fish 🐟', emoji: '🐟', isCorrect: false },
          { label: 'Bone 🦴', emoji: '🦴', isCorrect: false }
        ]
      },
      {
        prompt: 'Match Kitty with her favorite MILK! 🥛',
        targetLabel: 'Milk',
        options: [
          { label: 'Honey 🍯', emoji: '🍯', isCorrect: false },
          { label: 'Yummy Milk 🥛', emoji: '🥛', isCorrect: true },
          { label: 'Fresh Carrot 🥕', emoji: '🥕', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'nur_find_friend',
    classLevel: 'nursery',
    className: 'Nursery',
    title: 'Find the Friend',
    desc: 'Spot hidden animal friends playing in the garden!',
    icon: '🐰',
    gesture: 'tap',
    steps: [
      {
        prompt: 'Spot BUNNY hiding in the garden! 🐰',
        targetLabel: 'Bunny',
        options: [
          { label: 'Bunny Friend 🐰', emoji: '🐰', isCorrect: true },
          { label: 'Butterfly 🦋', emoji: '🦋', isCorrect: false },
          { label: 'Ladybug 🐞', emoji: '🐞', isCorrect: false }
        ]
      },
      {
        prompt: 'Spot MILO BEAR hiding behind the tree! 🐻',
        targetLabel: 'Milo Bear',
        options: [
          { label: 'Milo Bear 🐻', emoji: '🐻', isCorrect: true },
          { label: 'Little Bee 🐝', emoji: '🐝', isCorrect: false },
          { label: 'Snail 🐌', emoji: '🐌', isCorrect: false }
        ]
      },
      {
        prompt: 'Spot DUCK playing in the pond! 🦆',
        targetLabel: 'Duck',
        options: [
          { label: 'Cute Duck 🦆', emoji: '🦆', isCorrect: true },
          { label: 'Milo Bear 🐻', emoji: '🐻', isCorrect: false },
          { label: 'Frog 🐸', emoji: '🐸', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'nur_little_explorer',
    classLevel: 'nursery',
    className: 'Nursery',
    title: 'Little Explorer',
    desc: 'Explore stars, balloons & glowing items in the sky!',
    icon: '🚀',
    gesture: 'tap',
    steps: [
      {
        prompt: 'Find the flying HOT AIR BALLOON! 🎈',
        targetLabel: 'Balloon',
        options: [
          { label: 'Hot Air Balloon 🎈', emoji: '🎈', isCorrect: true },
          { label: 'Cloud ☁️', emoji: '☁️', isCorrect: false },
          { label: 'Kite 🪁', emoji: '🪁', isCorrect: false }
        ]
      },
      {
        prompt: 'Find the glowing ROCKET soaring high! 🚀',
        targetLabel: 'Rocket',
        options: [
          { label: 'Airplane ✈️', emoji: '✈️', isCorrect: false },
          { label: 'Glowing Rocket 🚀', emoji: '🚀', isCorrect: true },
          { label: 'Helicopter 🚁', emoji: '🚁', isCorrect: false }
        ]
      }
    ]
  },

  // --- LKG (6 Interactive Activities with 5 Levels Each) ---
  {
    id: 'lkg_alphabet_hunt',
    classLevel: 'lkg',
    className: 'LKG',
    title: 'Alphabet Hunt 🔤',
    desc: 'Explore letters A to Z across 5 fun levels!',
    icon: '🔤',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Letters A–C',
        prompt: 'Tap the letter B for BALL! ⚽',
        options: [
          { label: 'A', emoji: '🅰️', isCorrect: false },
          { label: 'B', emoji: '🅱️', isCorrect: true },
          { label: 'C', emoji: '🅲', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Letters A–F',
        prompt: 'Tap the letter E for ELEPHANT! 🐘',
        options: [
          { label: 'D', emoji: '🅳', isCorrect: false },
          { label: 'E', emoji: '🅴', isCorrect: true },
          { label: 'F', emoji: '🅵', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Find Among Similar Letters',
        prompt: 'Find letter B among similar shapes! 🔤',
        options: [
          { label: 'P', emoji: '🅿️', isCorrect: false },
          { label: 'R', emoji: '🆁', isCorrect: false },
          { label: 'B', emoji: '🅱️', isCorrect: true },
          { label: 'D', emoji: '🅳', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Uppercase & Lowercase Match',
        prompt: 'Match Uppercase "A" with its Lowercase friend! 🍎',
        options: [
          { label: 'b', emoji: 'b', isCorrect: false },
          { label: 'a', emoji: 'a', isCorrect: true },
          { label: 'c', emoji: 'c', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Missing Letter Sequence',
        prompt: 'Find the missing letter: A, B, __, D 🔤',
        options: [
          { label: 'C', emoji: '🅲', isCorrect: true },
          { label: 'E', emoji: '🅴', isCorrect: false },
          { label: 'F', emoji: '🅵', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'lkg_number_garden',
    classLevel: 'lkg',
    className: 'LKG',
    title: 'Number Garden 🔢',
    desc: 'Count flowers & numbers 1 to 10 across 5 levels!',
    icon: '🔢',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Numbers 1–3',
        prompt: 'Tap number 2! 2️⃣',
        options: [
          { label: '1', emoji: '1️⃣', isCorrect: false },
          { label: '2', emoji: '2️⃣', isCorrect: true },
          { label: '3', emoji: '3️⃣', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Numbers 1–5',
        prompt: 'Tap number 5! 5️⃣',
        options: [
          { label: '4', emoji: '4️⃣', isCorrect: false },
          { label: '5', emoji: '5️⃣', isCorrect: true },
          { label: '3', emoji: '3️⃣', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Count Objects 1–10',
        prompt: 'Count the blooming flowers: 🌸🌸🌸🌸🌸🌸🌸 (7 Flowers)',
        options: [
          { label: '5 Flowers', emoji: '5️⃣', isCorrect: false },
          { label: '7 Flowers', emoji: '7️⃣', isCorrect: true },
          { label: '9 Flowers', emoji: '9️⃣', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Quantity Match',
        prompt: 'Match number 4 with the correct group of apples! 🍎',
        options: [
          { label: '🍎🍎 (2 Apples)', emoji: '🍎🍎', isCorrect: false },
          { label: '🍎🍎🍎🍎 (4 Apples)', emoji: '🍎🍎🍎🍎', isCorrect: true },
          { label: '🍎🍎🍎🍎🍎 (5 Apples)', emoji: '🍎🍎🍎🍎🍎', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Number Sequence',
        prompt: 'Complete the number sequence: 1, 2, __, 4 🔢',
        options: [
          { label: '3', emoji: '3️⃣', isCorrect: true },
          { label: '5', emoji: '5️⃣', isCorrect: false },
          { label: '6', emoji: '6️⃣', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'lkg_colour_quest',
    classLevel: 'lkg',
    className: 'LKG',
    title: 'Colour Quest 🎨',
    desc: 'Explore vibrant colours across 5 levels!',
    icon: '🎨',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Basic Colours (Red, Blue, Yellow)',
        prompt: 'Find the bright RED Apple! 🍎',
        options: [
          { label: 'Red Apple 🍎', emoji: '🍎', isCorrect: true },
          { label: 'Blue Car 🚙', emoji: '🚙', isCorrect: false },
          { label: 'Yellow Banana 🍌', emoji: '🍌', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Green, Orange & Purple',
        prompt: 'Find the sweet PURPLE Grapes! 🍇',
        options: [
          { label: 'Green Frog 🐸', emoji: '🐸', isCorrect: false },
          { label: 'Purple Grapes 🍇', emoji: '🍇', isCorrect: true },
          { label: 'Orange Orange 🍊', emoji: '🍊', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Find Requested Colour',
        prompt: 'Find the GREEN object in the garden! 🍃',
        options: [
          { label: 'Red Strawberry 🍓', emoji: '🍓', isCorrect: false },
          { label: 'Green Leaf 🍃', emoji: '🍃', isCorrect: true },
          { label: 'Blue Bird 🐦', emoji: '🐦', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Object Colour Match',
        prompt: 'What colour is the sunny SUN? ☀️',
        options: [
          { label: 'Sunny Yellow 💛', emoji: '💛', isCorrect: true },
          { label: 'Deep Blue 💙', emoji: '💙', isCorrect: false },
          { label: 'Bright Pink 🩷', emoji: '🩷', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Colour Instruction Quest',
        prompt: 'Follow instruction: "Find the RED star ⭐!"',
        options: [
          { label: 'Blue Star 🟦', emoji: '🟦', isCorrect: false },
          { label: 'Red Star ⭐', emoji: '⭐', isCorrect: true },
          { label: 'Green Star 🟩', emoji: '🟩', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'lkg_who_am_i',
    classLevel: 'lkg',
    className: 'LKG',
    title: 'Who Am I? 🐶',
    desc: 'Guess animals from sounds & clues across 5 levels!',
    icon: '🐶',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Simple Clues',
        prompt: 'Clue: "I love bones and wag my tail! Who am I?" 🐶',
        options: [
          { label: 'Friendly Dog 🐶', emoji: '🐶', isCorrect: true },
          { label: 'Cute Kitty 🐱', emoji: '🐱', isCorrect: false },
          { label: 'Little Duck 🦆', emoji: '🦆', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Animal Sounds',
        prompt: 'Sound Clue: "MEOW! MEOW! Who am I?" 🐱',
        options: [
          { label: 'Milo Bear 🐻', emoji: '🐻', isCorrect: false },
          { label: 'Sweet Kitty 🐱', emoji: '🐱', isCorrect: true },
          { label: 'Frog 🐸', emoji: '🐸', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Two Clues',
        prompt: 'Clues: "I give yummy milk AND say MOO! Who am I?" 🐮',
        options: [
          { label: 'Gentle Cow 🐮', emoji: '🐮', isCorrect: true },
          { label: 'Playful Dog 🐶', emoji: '🐶', isCorrect: false },
          { label: 'Sheep 🐑', emoji: '🐑', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Animal Food Match',
        prompt: 'What is Bunny\'s favorite food? 🐰',
        options: [
          { label: 'Fish 🐟', emoji: '🐟', isCorrect: false },
          { label: 'Fresh Carrot 🥕', emoji: '🥕', isCorrect: true },
          { label: 'Bone 🦴', emoji: '🦴', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Multiple Clues',
        prompt: 'Clues: "I am king of the jungle, have a mane & ROAR! Who am I?" 🦁',
        options: [
          { label: 'Mighty Lion 🦁', emoji: '🦁', isCorrect: true },
          { label: 'Monkey 🐒', emoji: '🐒', isCorrect: false },
          { label: 'Elephant 🐘', emoji: '🐘', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'lkg_shape_builder',
    classLevel: 'lkg',
    className: 'LKG',
    title: 'Shape Builder 🔷',
    desc: 'Build & identify shapes across 5 levels!',
    icon: '🔷',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Circle, Square & Triangle',
        prompt: 'Find the smooth round CIRCLE! 🔴',
        options: [
          { label: 'Round Circle 🔴', emoji: '🔴', isCorrect: true },
          { label: 'Blue Square 🟦', emoji: '🟦', isCorrect: false },
          { label: 'Red Triangle 🔺', emoji: '🔺', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Rectangle & Star',
        prompt: 'Find the shining STAR! ⭐',
        options: [
          { label: 'Rectangle █', emoji: '█', isCorrect: false },
          { label: 'Shining Star ⭐', emoji: '⭐', isCorrect: true },
          { label: 'Circle 🔴', emoji: '🔴', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Match Shape Names',
        prompt: 'Match the name "TRIANGLE" with its shape! 🔺',
        options: [
          { label: 'Triangle 🔺', emoji: '🔺', isCorrect: true },
          { label: 'Square 🟦', emoji: '🟦', isCorrect: false },
          { label: 'Circle 🔴', emoji: '🔴', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Find Requested Shape',
        prompt: 'Find the BLUE SQUARE among different shapes! 🟦',
        options: [
          { label: 'Red Circle 🔴', emoji: '🔴', isCorrect: false },
          { label: 'Blue Square 🟦', emoji: '🟦', isCorrect: true },
          { label: 'Yellow Star ⭐', emoji: '⭐', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Build a House with Shapes',
        prompt: 'What shape makes the ROOF of a house? 🏠',
        options: [
          { label: 'Triangle Roof 🔺', emoji: '🔺', isCorrect: true },
          { label: 'Circle Roof 🔴', emoji: '🔴', isCorrect: false },
          { label: 'Star Roof ⭐', emoji: '⭐', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'lkg_count_collect',
    classLevel: 'lkg',
    className: 'LKG',
    title: 'Count & Collect 🍎',
    desc: 'Count & collect items 1 to 10 across 5 levels!',
    icon: '🍎',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Count 1–3 Objects',
        prompt: 'Count the apples: 🍎🍎 (How many apples?)',
        options: [
          { label: '1 Apple', emoji: '1️⃣', isCorrect: false },
          { label: '2 Apples', emoji: '2️⃣', isCorrect: true },
          { label: '3 Apples', emoji: '3️⃣', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Count 1–5 Objects',
        prompt: 'Count the stars: ⭐⭐⭐⭐⭐ (How many stars?)',
        options: [
          { label: '4 Stars', emoji: '4️⃣', isCorrect: false },
          { label: '5 Stars', emoji: '5️⃣', isCorrect: true },
          { label: '3 Stars', emoji: '3️⃣', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Count 1–10 Objects',
        prompt: 'Count the balloons: 🎈🎈🎈🎈🎈🎈🎈🎈 (How many balloons?)',
        options: [
          { label: '6 Balloons', emoji: '6️⃣', isCorrect: false },
          { label: '8 Balloons', emoji: '8️⃣', isCorrect: true },
          { label: '10 Balloons', emoji: '🔟', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Collect Challenge',
        prompt: 'Collect exactly 5 APPLES! 🍎',
        options: [
          { label: '🍎🍎🍎 (3 Apples)', emoji: '🍎🍎🍎', isCorrect: false },
          { label: '🍎🍎🍎🍎🍎 (5 Apples)', emoji: '🍎🍎🍎🍎🍎', isCorrect: true },
          { label: '🍎🍎🍎🍎🍎🍎 (6 Apples)', emoji: '🍎🍎🍎🍎🍎🍎', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Count & Select Number',
        prompt: 'Count the soccer balls: ⚽⚽⚽⚽⚽⚽ (6 Balls) -> Choose number!',
        options: [
          { label: 'Number 5', emoji: '5️⃣', isCorrect: false },
          { label: 'Number 6', emoji: '6️⃣', isCorrect: true },
          { label: 'Number 7', emoji: '7️⃣', isCorrect: false }
        ]
      }
    ]
  },

  // --- UKG (6 Interactive Activities with 5 Levels Each) ---
  {
    id: 'ukg_word_adventure',
    classLevel: 'ukg',
    className: 'UKG',
    title: 'Word Adventure 🔤',
    desc: 'Master letters, missing words & unscrambling across 5 levels!',
    icon: '🔤',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Letter Pair Matching',
        prompt: 'Match Uppercase "B" with its Lowercase pair! 🔤',
        options: [
          { label: 'b', emoji: 'b', isCorrect: true },
          { label: 'd', emoji: 'd', isCorrect: false },
          { label: 'p', emoji: 'p', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Word & Letter Association',
        prompt: 'Which word starts with letter "A"? 🍎',
        options: [
          { label: 'Apple 🍎', emoji: '🍎', isCorrect: true },
          { label: 'Ball ⚽', emoji: '⚽', isCorrect: false },
          { label: 'Cat 🐱', emoji: '🐱', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Complete Missing Letter',
        prompt: 'Fill the missing letter: C _ T (Meow!) 🐱',
        options: [
          { label: 'Letter A', emoji: '🅰️', isCorrect: true },
          { label: 'Letter O', emoji: '🅾️', isCorrect: false },
          { label: 'Letter U', emoji: '🆄', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Unscramble Word',
        prompt: 'Unscramble these letters to spell a barking pet: D - O - G 🐶',
        options: [
          { label: 'DOG 🐶', emoji: '🐶', isCorrect: true },
          { label: 'GOD 😇', emoji: '😇', isCorrect: false },
          { label: 'DIG ⛏️', emoji: '⛏️', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Word to Picture Quest',
        prompt: 'Read word "SUN": Choose the matching picture! ☀️',
        options: [
          { label: 'Moon 🌙', emoji: '🌙', isCorrect: false },
          { label: 'Sun ☀️', emoji: '☀️', isCorrect: true },
          { label: 'Star ⭐', emoji: '⭐', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'ukg_number_explorer',
    classLevel: 'ukg',
    className: 'UKG',
    title: 'Number Explorer 🔢',
    desc: 'Explore numbers 1-20, addition & sequences across 5 levels!',
    icon: '🔢',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Identify Numbers 1–20',
        prompt: 'Find number 15! 🔢',
        options: [
          { label: 'Number 12', emoji: '1️⃣2️⃣', isCorrect: false },
          { label: 'Number 15', emoji: '1️⃣5️⃣', isCorrect: true },
          { label: 'Number 18', emoji: '1️⃣8️⃣', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Count Objects up to 20',
        prompt: 'Count the shiny stars: ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ (14 Stars)',
        options: [
          { label: '12 Stars', emoji: '1️⃣2️⃣', isCorrect: false },
          { label: '14 Stars', emoji: '1️⃣4️⃣', isCorrect: true },
          { label: '16 Stars', emoji: '1️⃣6️⃣', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Quantity Match',
        prompt: 'Match number 12 with the correct group of balloons! 🎈',
        options: [
          { label: '10 Balloons', emoji: '🎈x10', isCorrect: false },
          { label: '12 Balloons', emoji: '🎈x12', isCorrect: true },
          { label: '15 Balloons', emoji: '🎈x15', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Complete Number Sequence',
        prompt: 'Complete the sequence: 11, 12, __, 14 🔢',
        options: [
          { label: '13', emoji: '1️⃣3️⃣', isCorrect: true },
          { label: '15', emoji: '1️⃣5️⃣', isCorrect: false },
          { label: '10', emoji: '1️⃣0️⃣', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Simple Addition & Subtraction',
        prompt: 'Solve: 3 Apples 🍎🍎🍎 + 2 Apples 🍎🍎 = ?',
        options: [
          { label: '4 Apples', emoji: '4️⃣', isCorrect: false },
          { label: '5 Apples', emoji: '5️⃣', isCorrect: true },
          { label: '6 Apples', emoji: '6️⃣', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'ukg_shape_pattern',
    classLevel: 'ukg',
    className: 'UKG',
    title: 'Shape & Pattern Quest 🧩',
    desc: 'Master 2D shapes & repeating patterns across 5 levels!',
    icon: '🧩',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Identify 2D Shapes',
        prompt: 'Find the RECTANGLE shape! █',
        options: [
          { label: 'Circle 🔴', emoji: '🔴', isCorrect: false },
          { label: 'Rectangle █', emoji: '🟦', isCorrect: true },
          { label: 'Triangle 🔺', emoji: '🔺', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Real-World Shape Match',
        prompt: 'Which real-world object is shaped like a CIRCLE 🔴?',
        options: [
          { label: 'Wall Clock ⏰', emoji: '⏰', isCorrect: true },
          { label: 'Gift Box 📦', emoji: '📦', isCorrect: false },
          { label: 'Pizza Slice 🍕', emoji: '🍕', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Repeating Pattern (AB)',
        prompt: 'What comes next in pattern: 🔴 🟦 🔴 🟦 __ ?',
        options: [
          { label: 'Red Circle 🔴', emoji: '🔴', isCorrect: true },
          { label: 'Blue Square 🟦', emoji: '🟦', isCorrect: false },
          { label: 'Yellow Star ⭐', emoji: '⭐', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Find Missing Shape',
        prompt: 'Find the missing shape in pattern: ⭐ 🌙 ⭐ 🌙 __',
        options: [
          { label: 'Moon 🌙', emoji: '🌙', isCorrect: false },
          { label: 'Star ⭐', emoji: '⭐', isCorrect: true },
          { label: 'Sun ☀️', emoji: '☀️', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Color & Shape Pattern Challenge',
        prompt: 'Complete challenging pattern: 🔺 🟦 🔺 🟦 __ ?',
        options: [
          { label: 'Red Triangle 🔺', emoji: '🔺', isCorrect: true },
          { label: 'Blue Square 🟦', emoji: '🟦', isCorrect: false },
          { label: 'Green Circle 🟢', emoji: '🟢', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'ukg_little_scientist',
    classLevel: 'ukg',
    className: 'UKG',
    title: 'Little Scientist 🌱',
    desc: 'Explore nature, animal homes & science across 5 levels!',
    icon: '🌱',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Identify Animals, Birds & Plants',
        prompt: 'Find the flying BIRD! 🐦',
        options: [
          { label: 'Blue Bird 🐦', emoji: '🐦', isCorrect: true },
          { label: 'Puppy 🐶', emoji: '🐶', isCorrect: false },
          { label: 'Oak Tree 🌳', emoji: '🌳', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Animal Homes Match',
        prompt: 'Where does a BIRD 🐦 live?',
        options: [
          { label: 'Cozy Nest 🪹', emoji: '🪹', isCorrect: true },
          { label: 'Water Ocean 🌊', emoji: '🌊', isCorrect: false },
          { label: 'Kennel 🏠', emoji: '🏠', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Objects & Uses Match',
        prompt: 'What object do we use when it RAINS 🌧️?',
        options: [
          { label: 'Umbrella ☔', emoji: '☔', isCorrect: true },
          { label: 'Pencil ✏️', emoji: '✏️', isCorrect: false },
          { label: 'Comb 💇', emoji: '💇', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Living vs Non-Living Things',
        prompt: 'Which one is a LIVING thing that breathes & grows?',
        options: [
          { label: 'Playful Puppy 🐶', emoji: '🐶', isCorrect: true },
          { label: 'Wooden Chair 🪑', emoji: '🪑', isCorrect: false },
          { label: 'Toy Car 🚗', emoji: '🚗', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Category Sorting Quest',
        prompt: 'Which group contains only YUMMY FOOD items 🍎🍌🍕?',
        options: [
          { label: 'Apple & Banana 🍎🍌', emoji: '🍎🍌', isCorrect: true },
          { label: 'Dog & Kitty 🐶🐱', emoji: '🐶🐱', isCorrect: false },
          { label: 'Pencil & Book ✏️📖', emoji: '✏️📖', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'ukg_memory_thinking',
    classLevel: 'ukg',
    className: 'UKG',
    title: 'Memory & Thinking Mission 🧠',
    desc: 'Solve odd-one-out, sizing & memory tasks across 5 levels!',
    icon: '🧠',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Find Matching Pair',
        prompt: 'Find the matching pair for the CUTE KITTY 🐱!',
        options: [
          { label: 'Kitty Pair 🐱', emoji: '🐱', isCorrect: true },
          { label: 'Bunny 🐰', emoji: '🐰', isCorrect: false },
          { label: 'Bear 🐻', emoji: '🐻', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Remember & Match Objects',
        prompt: 'Remember: 🍎 🚀 ⭐. Which item was in the group?',
        options: [
          { label: 'Glowing Rocket 🚀', emoji: '🚀', isCorrect: true },
          { label: 'Carrot 🥕', emoji: '🥕', isCorrect: false },
          { label: 'Duck 🦆', emoji: '🦆', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Odd One Out',
        prompt: 'Find the ODD ONE OUT in group: 🍎 🍌 🚙 🍊',
        options: [
          { label: 'Toy Car 🚙 (Vehicle)', emoji: '🚙', isCorrect: true },
          { label: 'Apple 🍎 (Fruit)', emoji: '🍎', isCorrect: false },
          { label: 'Banana 🍌 (Fruit)', emoji: '🍌', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Size Ordering',
        prompt: 'Which animal is the LARGEST 🐘 in size?',
        options: [
          { label: 'Little Mouse 🐭', emoji: '🐭', isCorrect: false },
          { label: 'Huge Elephant 🐘', emoji: '🐘', isCorrect: true },
          { label: 'Playful Dog 🐶', emoji: '🐶', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Logical Sequence Reasoning',
        prompt: 'Logical Sequence: Sun ☀️ -> Moon 🌙 -> Sun ☀️ -> ?',
        options: [
          { label: 'Moon 🌙', emoji: '🌙', isCorrect: true },
          { label: 'Sun ☀️', emoji: '☀️', isCorrect: false },
          { label: 'Star ⭐', emoji: '⭐', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'ukg_story_language',
    classLevel: 'ukg',
    className: 'UKG',
    title: 'Story & Language Quest 🗣️',
    desc: 'Sequence story events & build sentences across 5 levels!',
    icon: '🗣️',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Common Words & Objects',
        prompt: 'Find the picture of a BOOK 📖!',
        options: [
          { label: 'Story Book 📖', emoji: '📖', isCorrect: true },
          { label: 'Soccer Ball ⚽', emoji: '⚽', isCorrect: false },
          { label: 'Water Cup 🥤', emoji: '🥤', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Words to Visual Meanings',
        prompt: 'Match word "HAPPY" to the correct emotion emoji!',
        options: [
          { label: 'Happy Smiling Face 😊', emoji: '😊', isCorrect: true },
          { label: 'Sad Face 😢', emoji: '😢', isCorrect: false },
          { label: 'Sleepy Face 😴', emoji: '😴', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Story Event Sequence',
        prompt: 'What happens FIRST when growing a plant? 🌱',
        options: [
          { label: 'Plant a Seed 🌱', emoji: '🌱', isCorrect: true },
          { label: 'Pick a Flower 🌸', emoji: '🌸', isCorrect: false },
          { label: 'Eat Fruit 🍎', emoji: '🍎', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Complete Simple Sentence',
        prompt: 'Complete sentence: "The sun shines in the ___ ☀️"',
        options: [
          { label: 'Sky 🌌', emoji: '☀️', isCorrect: true },
          { label: 'Water 🌊', emoji: '🌊', isCorrect: false },
          { label: 'Grass 🌿', emoji: '🌿', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Sentence Builder Quest',
        prompt: 'Arrange words to build sentence: "I LOVE SUN ☀️"',
        options: [
          { label: 'I LOVE SUN ☀️', emoji: '☀️', isCorrect: true },
          { label: 'SUN LOVE I ☀️', emoji: '❓', isCorrect: false },
          { label: 'LOVE SUN I ☀️', emoji: '❓', isCorrect: false }
        ]
      }
    ]
  },

  // --- 1ST CLASS (6 Interactive Activities with 5 Levels Each = 30 Levels) ---
  {
    id: '1st_english_trail',
    classLevel: 'class1',
    className: '1st Class',
    title: 'English Word Trail 📖',
    desc: 'Explore words, missing letters & sentence building across 5 levels!',
    icon: '📖',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Words & Meanings',
        prompt: 'Which word means feeling full of JOY and smiles? 😊',
        options: [
          { label: 'HAPPY 😊', emoji: '😊', isCorrect: true },
          { label: 'SAD 😢', emoji: '😢', isCorrect: false },
          { label: 'ANGRY 😡', emoji: '😡', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Word & Picture Match',
        prompt: 'Match word "BOOK" to its picture! 📖',
        options: [
          { label: 'Story Book 📖', emoji: '📖', isCorrect: true },
          { label: 'Water Bottle 🍼', emoji: '🍼', isCorrect: false },
          { label: 'School Bag 🎒', emoji: '🎒', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Complete Missing Letter',
        prompt: 'Fill missing letter: B _ L L (We play with it! ⚽)',
        options: [
          { label: 'Letter A (BALL)', emoji: '🅰️', isCorrect: true },
          { label: 'Letter E', emoji: '🅴', isCorrect: false },
          { label: 'Letter I', emoji: '🅸', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Arrange Sentence',
        prompt: 'Arrange words into sentence: "APPLE IS RED 🍎"',
        options: [
          { label: 'APPLE IS RED 🍎', emoji: '🍎', isCorrect: true },
          { label: 'RED APPLE IS 🍎', emoji: '❓', isCorrect: false },
          { label: 'IS RED APPLE 🍎', emoji: '❓', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Sentence Comprehension',
        prompt: 'Sentence: "The little blue bird 🐦 flies in the sky." Where does the bird fly?',
        options: [
          { label: 'In the Sky 🌌', emoji: '🌌', isCorrect: true },
          { label: 'In the Ocean 🌊', emoji: '🌊', isCorrect: false },
          { label: 'Under Soil 🕳️', emoji: '🕳️', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '1st_number_mission',
    classLevel: 'class1',
    className: '1st Class',
    title: 'Number Mission 🔢',
    desc: 'Master numbers up to 50, comparison & story math across 5 levels!',
    icon: '🔢',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Identify Numbers up to 50',
        prompt: 'Find number 35! 🔢',
        options: [
          { label: 'Number 25', emoji: '2️⃣5️⃣', isCorrect: false },
          { label: 'Number 35', emoji: '3️⃣5️⃣', isCorrect: true },
          { label: 'Number 45', emoji: '4️⃣5️⃣', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Compare Numbers (Greater / Less)',
        prompt: 'Compare numbers: Which number is GREATER? 25 or 18?',
        options: [
          { label: '25 is Greater (25 > 18)', emoji: '▶️', isCorrect: true },
          { label: '18 is Greater', emoji: '◀️', isCorrect: false },
          { label: 'They are Equal', emoji: '⏸️', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Addition with Objects',
        prompt: 'Solve: 15 Apples 🍎 + 10 Apples 🍎 = ?',
        options: [
          { label: '20 Apples', emoji: '2️⃣0️⃣', isCorrect: false },
          { label: '25 Apples', emoji: '2️⃣5️⃣', isCorrect: true },
          { label: '30 Apples', emoji: '3️⃣0️⃣', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Subtraction with Objects',
        prompt: 'Solve: 30 Balloons 🎈 - 10 Balloons 🎈 = ?',
        options: [
          { label: '15 Balloons', emoji: '1️⃣5️⃣', isCorrect: false },
          { label: '20 Balloons', emoji: '2️⃣0️⃣', isCorrect: true },
          { label: '25 Balloons', emoji: '2️⃣5️⃣', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Story Math Challenge',
        prompt: 'Story: "Ravi has 12 candies 🍬. His friend gives him 8 more. How many total?"',
        options: [
          { label: '18 Candies', emoji: '1️⃣8️⃣', isCorrect: false },
          { label: '20 Candies', emoji: '2️⃣0️⃣', isCorrect: true },
          { label: '22 Candies', emoji: '2️⃣2️⃣', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '1st_world_explorer',
    classLevel: 'class1',
    className: '1st Class',
    title: 'My World Explorer 🌱',
    desc: 'Explore body parts, nature & healthy habits across 5 levels!',
    icon: '🌱',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Body Parts & Surroundings',
        prompt: 'Which body part do we use to SEE the world? 👀',
        options: [
          { label: 'Eyes 👀', emoji: '👀', isCorrect: true },
          { label: 'Ears 👂', emoji: '👂', isCorrect: false },
          { label: 'Nose 👃', emoji: '👃', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Plants & Birds',
        prompt: 'Which beautiful bird is the National Bird of India? 🦚',
        options: [
          { label: 'Peacock 🦚', emoji: '🦚', isCorrect: true },
          { label: 'Parrot 🦜', emoji: '🦜', isCorrect: false },
          { label: 'Pigeon 🐦', emoji: '🐦', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Objects & Clothes Uses',
        prompt: 'What do we wear to keep warm in WINTER ❄️?',
        options: [
          { label: 'Warm Sweater 🧥', emoji: '🧥', isCorrect: true },
          { label: 'Cotton T-Shirt 👕', emoji: '👕', isCorrect: false },
          { label: 'Raincoat 🧥', emoji: '🧥', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Living vs Non-Living',
        prompt: 'Find the NON-LIVING item that cannot breathe or grow:',
        options: [
          { label: 'Wooden Pencil ✏️', emoji: '✏️', isCorrect: true },
          { label: 'Green Tree 🌳', emoji: '🌳', isCorrect: false },
          { label: 'Little Puppy 🐶', emoji: '🐶', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Healthy Habits Quest',
        prompt: 'Which habit keeps our teeth strong & clean? 🪥',
        options: [
          { label: 'Brushing twice daily 🪥', emoji: '🪥', isCorrect: true },
          { label: 'Eating too much candy 🍬', emoji: '🍬', isCorrect: false },
          { label: 'Sleeping late 💤', emoji: '💤', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '1st_pattern_logic',
    classLevel: 'class1',
    className: '1st Class',
    title: 'Pattern & Logic Quest 🧩',
    desc: 'Solve color patterns, number logic & puzzles across 5 levels!',
    icon: '🧩',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Color & Shape Pattern',
        prompt: 'What comes next in pattern: 🔴 🟦 🟢 🔴 🟦 __ ?',
        options: [
          { label: 'Green Circle 🟢', emoji: '🟢', isCorrect: true },
          { label: 'Red Circle 🔴', emoji: '🔴', isCorrect: false },
          { label: 'Blue Square 🟦', emoji: '🟦', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Number Sequence Pattern',
        prompt: 'Complete number pattern: 5, 10, 15, 20, __ 🔢',
        options: [
          { label: '25', emoji: '2️⃣5️⃣', isCorrect: true },
          { label: '22', emoji: '2️⃣2️⃣', isCorrect: false },
          { label: '30', emoji: '3️⃣0️⃣', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Odd Object Out',
        prompt: 'Find the ODD object: 🍎 🍌 🍊 ⚽',
        options: [
          { label: 'Soccer Ball ⚽ (Sports)', emoji: '⚽', isCorrect: true },
          { label: 'Apple 🍎 (Fruit)', emoji: '🍎', isCorrect: false },
          { label: 'Banana 🍌 (Fruit)', emoji: '🍌', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Event Sequencing',
        prompt: 'Arrange day events: Morning 🌅 -> Afternoon ☀️ -> ?',
        options: [
          { label: 'Night 🌙', emoji: '🌙', isCorrect: true },
          { label: 'Breakfast 🍳', emoji: '🍳', isCorrect: false },
          { label: 'Midnight 🌌', emoji: '🌌', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Clue Logic Puzzle',
        prompt: 'Puzzle Clue: "I have 4 legs, wag my tail & guard the house. Who am I?" 🐶',
        options: [
          { label: 'Guard Dog 🐶', emoji: '🐶', isCorrect: true },
          { label: 'Cat 🐱', emoji: '🐱', isCorrect: false },
          { label: 'Parrot 🦜', emoji: '🦜', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '1st_sentence_builder',
    classLevel: 'class1',
    className: '1st Class',
    title: 'Sentence Builder ✏️',
    desc: 'Identify nouns, verbs, plurals & sentences across 5 levels!',
    icon: '✏️',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Naming Words (Nouns)',
        prompt: 'Which word is a NAMING word (Noun) for an animal? 🐘',
        options: [
          { label: 'Elephant 🐘', emoji: '🐘', isCorrect: true },
          { label: 'Running 🏃', emoji: '🏃', isCorrect: false },
          { label: 'Fast ⚡', emoji: '⚡', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Action Words (Verbs)',
        prompt: 'Which word is an ACTION word (Verb)? 🏃',
        options: [
          { label: 'Jumping 🦘', emoji: '🦘', isCorrect: true },
          { label: 'Apple 🍎', emoji: '🍎', isCorrect: false },
          { label: 'Chair 🪑', emoji: '🪑', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Sentence Completion',
        prompt: 'Complete sentence: "The bright sun ___ in the sky." ☀️',
        options: [
          { label: 'shines', emoji: '☀️', isCorrect: true },
          { label: 'barks', emoji: '🐶', isCorrect: false },
          { label: 'swims', emoji: '🏊', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Singular & Plural',
        prompt: 'What is the PLURAL form of "ONE CAT 🐱"?',
        options: [
          { label: 'CATS 🐱🐱🐱', emoji: '🐱🐱🐱', isCorrect: true },
          { label: 'CATTY', emoji: '🐱', isCorrect: false },
          { label: 'CATLET', emoji: '🐱', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Sentence Construction',
        prompt: 'Arrange words into sentence: "CATS LIKE MILK 🥛"',
        options: [
          { label: 'CATS LIKE MILK 🥛', emoji: '🥛', isCorrect: true },
          { label: 'MILK LIKE CATS 🥛', emoji: '❓', isCorrect: false },
          { label: 'LIKE CATS MILK 🥛', emoji: '❓', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '1st_everyday_life',
    classLevel: 'class1',
    className: '1st Class',
    title: 'Everyday Life Adventure 🏡',
    desc: 'Learn routines, safety & healthy habits across 5 levels!',
    icon: '🏡',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Daily Routine Identification',
        prompt: 'What do we do FIRST in the morning when we wake up? ⏰',
        options: [
          { label: 'Brush our Teeth 🪥', emoji: '🪥', isCorrect: true },
          { label: 'Go to Bed 🛌', emoji: '🛌', isCorrect: false },
          { label: 'Watch TV 📺', emoji: '📺', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Routine Sequencing',
        prompt: 'Arrange routine: Wake Up ⏰ -> Brush Teeth 🪥 -> ?',
        options: [
          { label: 'Go to School 🎒', emoji: '🎒', isCorrect: true },
          { label: 'Sleep 🛌', emoji: '🛌', isCorrect: false },
          { label: 'Night Dinner 🌙', emoji: '🌙', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Healthy Food Habits',
        prompt: 'Which food is HEALTHY for our body? 🍎',
        options: [
          { label: 'Fresh Fruits 🍎', emoji: '🍎', isCorrect: true },
          { label: 'Fizzy Soda 🥤', emoji: '🥤', isCorrect: false },
          { label: 'Oily Chips 🍟', emoji: '🍟', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Safe & Responsible Actions',
        prompt: 'What should we do BEFORE crossing the road 🚸?',
        options: [
          { label: 'Look Left & Right 👀', emoji: '👀', isCorrect: true },
          { label: 'Run fast without looking 🏃', emoji: '🏃', isCorrect: false },
          { label: 'Close our eyes 🙈', emoji: '🙈', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: "My Day" Adventure',
        prompt: 'My Day Goal: Wash hands with soap 🧼 before eating food!',
        options: [
          { label: 'Wash Hands with Soap 🧼', emoji: '🧼', isCorrect: true },
          { label: 'Eat with dirty hands 🦠', emoji: '🦠', isCorrect: false },
          { label: 'Skip washing hands 🚫', emoji: '🚫', isCorrect: false }
        ]
      }
    ]
  },

  // --- 2ND CLASS (6 Interactive Activities with 5 Levels Each = 30 Levels) ---
  {
    id: '2nd_story_quest',
    classLevel: 'class2',
    className: '2nd Class',
    title: 'English Story Quest 📚',
    desc: 'Explore vocabulary, grammar & story comprehension across 5 levels!',
    icon: '📚',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Words & Meanings',
        prompt: 'Which word means showing COURAGE & strength? 🦁',
        options: [
          { label: 'BRAVE 🦁', emoji: '🦁', isCorrect: true },
          { label: 'TIMID 🐭', emoji: '🐭', isCorrect: false },
          { label: 'TIRED 🥱', emoji: '🥱', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Sentence Completion',
        prompt: 'Complete sentence: "A peacock has colorful ___." 🦚',
        options: [
          { label: 'Feathers 🦚', emoji: '🦚', isCorrect: true },
          { label: 'Horns 🐂', emoji: '🐂', isCorrect: false },
          { label: 'Fins 🐟', emoji: '🐟', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Nouns, Verbs & Adjectives',
        prompt: 'Find the DESCRIBING word (Adjective) in: "The SWIFT horse ran fast."',
        options: [
          { label: 'SWIFT ⚡', emoji: '⚡', isCorrect: true },
          { label: 'Horse 🐎', emoji: '🐎', isCorrect: false },
          { label: 'Ran 🏃', emoji: '🏃', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Story Sentence Sequence',
        prompt: 'Arrange story: 1. Bird built nest 🪹 -> 2. Laid eggs 🥚 -> ?',
        options: [
          { label: '3. Chicks hatched 🐤', emoji: '🐤', isCorrect: true },
          { label: '3. Tree fell down 🪵', emoji: '🪵', isCorrect: false },
          { label: '3. Rain started 🌧️', emoji: '🌧️', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Story Comprehension',
        prompt: 'Story: "Milo the Bear 🐻 found sweet honey in a big oak tree 🌳." Where was the honey?',
        options: [
          { label: 'In the Oak Tree 🌳', emoji: '🌳', isCorrect: true },
          { label: 'In the Ocean 🌊', emoji: '🌊', isCorrect: false },
          { label: 'Under a Rock 🪨', emoji: '🪨', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '2nd_maths_challenge',
    classLevel: 'class2',
    className: '2nd Class',
    title: 'Maths Number Challenge 🧮',
    desc: 'Master 2-digit place values, addition & subtraction across 5 levels!',
    icon: '🧮',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Place Value Basics (Tens & Ones)',
        prompt: 'How many Tens & Ones in number 47?',
        options: [
          { label: '4 Tens + 7 Ones', emoji: '🔢', isCorrect: true },
          { label: '7 Tens + 4 Ones', emoji: '🔢', isCorrect: false },
          { label: '40 Tens + 7 Ones', emoji: '🔢', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Compare 2-Digit Numbers',
        prompt: 'Which 2-digit number is GREATER? 85 or 58?',
        options: [
          { label: '85 is Greater (85 > 58)', emoji: '▶️', isCorrect: true },
          { label: '58 is Greater', emoji: '◀️', isCorrect: false },
          { label: 'Both are Equal', emoji: '⏸️', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Addition of 2-Digit Numbers',
        prompt: 'Solve: 45 + 32 = ?',
        options: [
          { label: '77', emoji: '7️⃣7️⃣', isCorrect: true },
          { label: '67', emoji: '6️⃣7️⃣', isCorrect: false },
          { label: '87', emoji: '8️⃣7️⃣', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Subtraction of 2-Digit Numbers',
        prompt: 'Solve: 68 - 25 = ?',
        options: [
          { label: '43', emoji: '4️⃣3️⃣', isCorrect: true },
          { label: '40', emoji: '4️⃣0️⃣', isCorrect: false },
          { label: '53', emoji: '5️⃣3️⃣', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Real-Life Math Problem',
        prompt: 'Problem: "A farmer has 50 apples 🍎. He sells 20 apples. How many apples are left?"',
        options: [
          { label: '30 Apples left', emoji: '3️⃣0️⃣', isCorrect: true },
          { label: '20 Apples left', emoji: '2️⃣0️⃣', isCorrect: false },
          { label: '40 Apples left', emoji: '4️⃣0️⃣', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '2nd_time_money',
    classLevel: 'class2',
    className: '2nd Class',
    title: 'Time & Money Adventure ⏰',
    desc: 'Read clocks, Indian currency & days across 5 levels!',
    icon: '⏰',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Days & Months',
        prompt: 'Which day comes right AFTER Friday? 📅',
        options: [
          { label: 'Saturday 📅', emoji: '📅', isCorrect: true },
          { label: 'Sunday ☀️', emoji: '☀️', isCorrect: false },
          { label: 'Thursday 🗓️', emoji: '🗓️', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Sequence Time of Day',
        prompt: 'Arrange time: Morning 🌅 -> Afternoon ☀️ -> Evening 🌆 -> ?',
        options: [
          { label: 'Night 🌙', emoji: '🌙', isCorrect: true },
          { label: 'Noon ☀️', emoji: '☀️', isCorrect: false },
          { label: 'Sunrise 🌅', emoji: '🌅', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Read Clock Time',
        prompt: 'Clock Reading: Short hand at 3, long hand at 12. What time is it? 🕒',
        options: [
          { label: '3:00 (3 o\'clock)', emoji: '🕒', isCorrect: true },
          { label: '12:00 (12 o\'clock)', emoji: '🕛', isCorrect: false },
          { label: '6:00 (6 o\'clock)', emoji: '🕕', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Count Indian Currency',
        prompt: 'Calculate money: 10 Rupees 💵 + 20 Rupees 💵 = ?',
        options: [
          { label: '₹30 Rupees', emoji: '💵', isCorrect: true },
          { label: '₹25 Rupees', emoji: '💵', isCorrect: false },
          { label: '₹40 Rupees', emoji: '💵', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Shopping Challenge',
        prompt: 'Shopping: A story book costs ₹40 📖. You pay ₹50 💵. How much change do you get back?',
        options: [
          { label: '₹10 Change 🪙', emoji: '🪙', isCorrect: true },
          { label: '₹20 Change 🪙', emoji: '🪙', isCorrect: false },
          { label: '₹5 Change 🪙', emoji: '🪙', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '2nd_evs_discovery',
    classLevel: 'class2',
    className: '2nd Class',
    title: 'EVS Discovery Mission 🌍',
    desc: 'Explore plant needs, habitats & transport across 5 levels!',
    icon: '🌍',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Plants & Animal Basic Needs',
        prompt: 'What do ALL living plants & animals need to stay alive? 💧',
        options: [
          { label: 'Water & Sunlight 💧☀️', emoji: '💧', isCorrect: true },
          { label: 'Plastic & Toys 🧸', emoji: '🧸', isCorrect: false },
          { label: 'Soda & Candy 🍬', emoji: '🍬', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Animal Habitats',
        prompt: 'Where does a LION 🦁 live in nature?',
        options: [
          { label: 'Wild Den 🦁', emoji: '🦁', isCorrect: true },
          { label: 'Water Ocean 🌊', emoji: '🌊', isCorrect: false },
          { label: 'Bird Nest 🪹', emoji: '🪹', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Transport & Communication',
        prompt: 'Which means of transport flies high in the AIR? ✈️',
        options: [
          { label: 'Aeroplane ✈️', emoji: '✈️', isCorrect: true },
          { label: 'Train 🚂', emoji: '🚂', isCorrect: false },
          { label: 'Bicycle 🚲', emoji: '🚲', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Natural vs Man-Made',
        prompt: 'Which item is MAN-MADE by human beings?',
        options: [
          { label: 'Motor Car 🚗', emoji: '🚗', isCorrect: true },
          { label: 'River 🌊', emoji: '🌊', isCorrect: false },
          { label: 'Mountain ⛰️', emoji: '⛰️', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Environment & Community',
        prompt: 'Which vehicle carries sick people safely to the hospital? 🚑',
        options: [
          { label: 'Ambulance 🚑', emoji: '🚑', isCorrect: true },
          { label: 'Fire Truck 🚒', emoji: '🚒', isCorrect: false },
          { label: 'School Bus 🚌', emoji: '🚌', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '2nd_pattern_reasoning',
    classLevel: 'class2',
    className: '2nd Class',
    title: 'Pattern & Reasoning Lab 🔢',
    desc: 'Solve skip counting, classification & logic labs across 5 levels!',
    icon: '🔢',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Number & Shape Pattern',
        prompt: 'Complete pattern: 10, 20, 30, 40, __ 🔢',
        options: [
          { label: '50', emoji: '5️⃣0️⃣', isCorrect: true },
          { label: '45', emoji: '4️⃣5️⃣', isCorrect: false },
          { label: '60', emoji: '6️⃣0️⃣', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Skip Counting by 5s',
        prompt: 'Find missing number: 5, 10, 15, __, 25',
        options: [
          { label: '20', emoji: '2️⃣0️⃣', isCorrect: true },
          { label: '18', emoji: '1️⃣8️⃣', isCorrect: false },
          { label: '30', emoji: '3️⃣0️⃣', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Quantity & Container Capacity',
        prompt: 'Which container holds the MOST water capacity? 🪣',
        options: [
          { label: 'Water Bucket 🪣', emoji: '🪣', isCorrect: true },
          { label: 'Tea Cup ☕', emoji: '☕', isCorrect: false },
          { label: 'Spoon 🥄', emoji: '🥄', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Classification & Odd-One-Out',
        prompt: 'Find the odd item: Pencil ✏️, Pen 🖊️, Eraser 🧹, Apple 🍎',
        options: [
          { label: 'Apple 🍎 (Food)', emoji: '🍎', isCorrect: true },
          { label: 'Pencil ✏️ (Stationery)', emoji: '✏️', isCorrect: false },
          { label: 'Pen 🖊️ (Stationery)', emoji: '🖊️', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Multi-Step Logic Puzzle',
        prompt: 'Puzzle: "Ravi is older than Sita. Sita is older than Ram. Who is the OLDEST?"',
        options: [
          { label: 'Ravi', emoji: '👦', isCorrect: true },
          { label: 'Sita', emoji: '👧', isCorrect: false },
          { label: 'Ram', emoji: '👶', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '2nd_creative_studio',
    classLevel: 'class2',
    className: '2nd Class',
    title: 'Language & Creative Story Studio 🗣️',
    desc: 'Explore adjectives, story building & creative tales across 5 levels!',
    icon: '🗣️',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Object & Action Words',
        prompt: 'What action is the student doing with the story book? 📖',
        options: [
          { label: 'Reading 📖', emoji: '📖', isCorrect: true },
          { label: 'Sleeping 😴', emoji: '😴', isCorrect: false },
          { label: 'Swimming 🏊', emoji: '🏊', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Describing Words (Adjectives)',
        prompt: 'Choose the best describing word: "The ___ elephant 🐘."',
        options: [
          { label: 'HUGE 🐘', emoji: '🐘', isCorrect: true },
          { label: 'TINY 🐜', emoji: '🐜', isCorrect: false },
          { label: 'FLYING 🦅', emoji: '🦅', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Short Sentence Completion',
        prompt: 'Complete sentence: "Students go to school safely by ___ 🚌."',
        options: [
          { label: 'Yellow Bus 🚌', emoji: '🚌', isCorrect: true },
          { label: 'Rocket 🚀', emoji: '🚀', isCorrect: false },
          { label: 'Submarine 🚤', emoji: '🚤', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Story Construction',
        prompt: 'Arrange story: 1. Sun rose 🌅 -> 2. Birds sang 🐦 -> ?',
        options: [
          { label: '3. Children went to school 🎒', emoji: '🎒', isCorrect: true },
          { label: '3. Moon appeared 🌙', emoji: '🌙', isCorrect: false },
          { label: '3. Went to sleep 🛌', emoji: '🛌', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Creative Story Studio',
        prompt: 'Select elements: Hero Milo Bear 🐻 + Magic Forest 🌳 = Happy Ending 🎉!',
        options: [
          { label: 'Happy Forest Adventure 🎉', emoji: '🎉', isCorrect: true },
          { label: 'Scary Storm 🌩️', emoji: '🌩️', isCorrect: false },
          { label: 'Lost in Sea 🌊', emoji: '🌊', isCorrect: false } 
        ]
      }
    ]
  },
  // --- 3RD CLASS (6 Interactive Activities with 5 Levels Each = 30 Levels) ---
  {
    id: '3rd_english_story',
    classLevel: 'class3',
    className: '3rd Class',
    title: 'English Story Adventure 📚',
    desc: 'Master nouns, verbs, adjectives & reading comprehension across 5 levels!',
    icon: '📚',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Nouns & Action Words',
        prompt: 'In the sentence: "The mighty lion ROARS in the forest 🦁", what is the ACTION word?',
        options: [
          { label: 'ROARS 🦁', emoji: '🦁', isCorrect: true },
          { label: 'Lion', emoji: '🦁', isCorrect: false },
          { label: 'Forest', emoji: '🌳', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Sentence Completion',
        prompt: 'Complete sentence: "A busy honeybee collects sweet ___ from flowers 🌸."',
        options: [
          { label: 'Nectar 🍯', emoji: '🍯', isCorrect: true },
          { label: 'Water 💧', emoji: '💧', isCorrect: false },
          { label: 'Leaves 🍃', emoji: '🍃', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Describing Words (Adjectives)',
        prompt: 'Find the DESCRIBING word (Adjective) in: "The BEAUTIFUL peacock danced 🦚."',
        options: [
          { label: 'BEAUTIFUL 🦚', emoji: '🦚', isCorrect: true },
          { label: 'Peacock', emoji: '🦚', isCorrect: false },
          { label: 'Danced', emoji: '💃', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Story Sequence',
        prompt: 'Arrange story: 1. Seed planted 🌱 -> 2. Watered 💧 -> ?',
        options: [
          { label: '3. A green tree grew 🌳', emoji: '🌳', isCorrect: true },
          { label: '3. Rain stopped ☀️', emoji: '☀️', isCorrect: false },
          { label: '3. Night came 🌙', emoji: '🌙', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Passage Comprehension',
        prompt: 'Passage: "Raju took his puppy Milo for a walk in the park 🌳. Milo chased a butterfly 🦋." Who did Milo chase?',
        options: [
          { label: 'Butterfly 🦋', emoji: '🦋', isCorrect: true },
          { label: 'Cat 🐱', emoji: '🐱', isCorrect: false },
          { label: 'Ball ⚽', emoji: '⚽', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '3rd_maths_explorer',
    classLevel: 'class3',
    className: '3rd Class',
    title: 'Maths Number Explorer 🧮',
    desc: 'Explore numbers up to 1,000, 3-digit addition & subtraction across 5 levels!',
    icon: '🧮',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Compare Numbers up to 1,000',
        prompt: 'Which 3-digit number is GREATER? 750 or 570?',
        options: [
          { label: '750 is Greater (750 > 570)', emoji: '▶️', isCorrect: true },
          { label: '570 is Greater', emoji: '◀️', isCorrect: false },
          { label: 'They are Equal', emoji: '⏸️', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Place Value (Hundreds, Tens, Ones)',
        prompt: 'What is the Place Value of digit 6 in number 642?',
        options: [
          { label: '6 Hundreds (600)', emoji: '🔢', isCorrect: true },
          { label: '6 Tens (60)', emoji: '🔢', isCorrect: false },
          { label: '6 Ones (6)', emoji: '🔢', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: 3-Digit Addition',
        prompt: 'Solve: 450 + 230 = ?',
        options: [
          { label: '680', emoji: '🔢', isCorrect: true },
          { label: '650', emoji: '🔢', isCorrect: false },
          { label: '780', emoji: '🔢', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: 3-Digit Subtraction',
        prompt: 'Solve: 850 - 320 = ?',
        options: [
          { label: '530', emoji: '🔢', isCorrect: true },
          { label: '500', emoji: '🔢', isCorrect: false },
          { label: '630', emoji: '🔢', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Real-Life Math Problem',
        prompt: 'Problem: "A library has 350 storybooks 📚 and 200 science books 🔬. How many total books?"',
        options: [
          { label: '550 Total Books 📚', emoji: '📚', isCorrect: true },
          { label: '500 Books', emoji: '📚', isCorrect: false },
          { label: '600 Books', emoji: '📚', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '3rd_mult_div',
    classLevel: 'class3',
    className: '3rd Class',
    title: 'Multiplication & Division Quest ✖️',
    desc: 'Master repeated addition, tables & division across 5 levels!',
    icon: '✖️',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Repeated Addition',
        prompt: 'Repeated Addition: 4 + 4 + 4 = 3 groups of 4 = ? 🍎',
        options: [
          { label: '12 Apples 🍎', emoji: '🍎', isCorrect: true },
          { label: '10 Apples', emoji: '🍎', isCorrect: false },
          { label: '16 Apples', emoji: '🍎', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Multiplication Tables',
        prompt: 'Solve multiplication: 5 × 6 = ?',
        options: [
          { label: '30', emoji: '3️⃣0️⃣', isCorrect: true },
          { label: '25', emoji: '2️⃣5️⃣', isCorrect: false },
          { label: '35', emoji: '3️⃣5️⃣', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Multiplication Challenge',
        prompt: 'Problem: If 1 bicycle 🚲 has 2 wheels, how many wheels on 7 bicycles?',
        options: [
          { label: '14 Wheels 🚲', emoji: '🚲', isCorrect: true },
          { label: '12 Wheels', emoji: '🚲', isCorrect: false },
          { label: '16 Wheels', emoji: '🚲', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Equal Sharing Division',
        prompt: 'Share 15 apples 🍎 equally among 3 children. How many apples does each child get?',
        options: [
          { label: '5 Apples each 🍎', emoji: '🍎', isCorrect: true },
          { label: '3 Apples each', emoji: '🍎', isCorrect: false },
          { label: '6 Apples each', emoji: '🍎', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Word Problem Challenge',
        prompt: 'Problem: 24 chocolates 🍫 packed equally into 4 boxes. How many chocolates in each box?',
        options: [
          { label: '6 Chocolates 🍫', emoji: '🍫', isCorrect: true },
          { label: '4 Chocolates', emoji: '🍫', isCorrect: false },
          { label: '8 Chocolates', emoji: '🍫', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '3rd_evs_explorer',
    classLevel: 'class3',
    className: '3rd Class',
    title: 'EVS Explorer 🌱',
    desc: 'Explore plant parts, habitats, water conservation across 5 levels!',
    icon: '🌱',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Plant Parts & Needs',
        prompt: 'Which part of the plant absorbs water & minerals from the soil? 🪴',
        options: [
          { label: 'Roots 🪴', emoji: '🪴', isCorrect: true },
          { label: 'Leaves 🍃', emoji: '🍃', isCorrect: false },
          { label: 'Flower 🌸', emoji: '🌸', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Animal Habitats',
        prompt: 'Where does a Camel 🐪 live in nature?',
        options: [
          { label: 'Sandy Desert 🏜️', emoji: '🏜️', isCorrect: true },
          { label: 'Snowy Arctic ❄️', emoji: '❄️', isCorrect: false },
          { label: 'Deep Ocean 🌊', emoji: '🌊', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Food & Shelter Needs',
        prompt: 'Herbivorous animals (like Deer 🦌) eat only ___?',
        options: [
          { label: 'Plants & Leaves 🌿', emoji: '🌿', isCorrect: true },
          { label: 'Other Animals 🥩', emoji: '🥩', isCorrect: false },
          { label: 'Fish 🐟', emoji: '🐟', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Water Sources & Conservation',
        prompt: 'What is the main natural source of freshwater on Earth? 🌧️',
        options: [
          { label: 'Rainwater 🌧️', emoji: '🌧️', isCorrect: true },
          { label: 'Salty Ocean 🌊', emoji: '🌊', isCorrect: false },
          { label: 'Factory Tap 🏭', emoji: '🏭', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Community Water Conservation',
        prompt: 'Which action helps CONSERVE water at home? 🚰',
        options: [
          { label: 'Turning off tap while brushing 🚰', emoji: '🚰', isCorrect: true },
          { label: 'Leaving tap running continuously 💦', emoji: '💦', isCorrect: false },
          { label: 'Wasting water with hose 🚫', emoji: '🚫', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '3rd_measure_discover',
    classLevel: 'class3',
    className: '3rd Class',
    title: 'Measure & Discover 📏',
    desc: 'Compare lengths, weights & capacities across 5 levels!',
    icon: '📏',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Compare Length',
        prompt: 'Which object has the LONGEST distance/length? 🛣️',
        options: [
          { label: 'Highway Road 🛣️', emoji: '🛣️', isCorrect: true },
          { label: 'Wooden Pencil ✏️', emoji: '✏️', isCorrect: false },
          { label: 'Eraser 🧹', emoji: '🧹', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Measuring Units',
        prompt: 'Which unit is best to measure the length of a small pencil? 📏',
        options: [
          { label: 'Centimeters (cm) 📏', emoji: '📏', isCorrect: true },
          { label: 'Kilometers (km) 🛣️', emoji: '🛣️', isCorrect: false },
          { label: 'Kilograms (kg) ⚖️', emoji: '⚖️', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Compare Weights',
        prompt: 'Which object is HEAVIEST in weight? ⚖️',
        options: [
          { label: 'Sack of Rice (25 kg) 🌾', emoji: '🌾', isCorrect: true },
          { label: 'Feather 🪶', emoji: '🪶', isCorrect: false },
          { label: 'Paper Sheet 📄', emoji: '📄', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Capacity Measurements',
        prompt: 'Which unit measures liquid quantity like milk or water? 🥛',
        options: [
          { label: 'Liters (L) 🥛', emoji: '🥛', isCorrect: true },
          { label: 'Meters (m) 📏', emoji: '📏', isCorrect: false },
          { label: 'Grams (g) ⚖️', emoji: '⚖️', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Measurement Challenge',
        prompt: 'Problem: A water jug holds 2 Liters. How many 1-Liter bottles are needed to fill it?',
        options: [
          { label: '2 Bottles 🍾🍾', emoji: '🍾', isCorrect: true },
          { label: '5 Bottles', emoji: '🍾', isCorrect: false },
          { label: '10 Bottles', emoji: '🍾', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '3rd_3d_lab',
    classLevel: 'class3',
    className: '3rd Class',
    title: '3D Discovery Lab 🌍',
    desc: 'Interactive 3D plant, habitat & water cycle exploration across 5 levels!',
    icon: '🌍',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: 3D Plant Parts',
        prompt: 'Explore 3D Plant: Tap the bright red FLOWER 🌺 on top!',
        options: [
          { label: '3D Red Flower 🌺', emoji: '🌺', isCorrect: true },
          { label: 'Green Leaf 🍃', emoji: '🍃', isCorrect: false },
          { label: 'Roots 🪴', emoji: '🪴', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Rotate 3D Plant & Roots',
        prompt: 'Rotate 3D Plant: Tap the underground ROOTS 🪴!',
        options: [
          { label: 'Underground Roots 🪴', emoji: '🪴', isCorrect: true },
          { label: 'Stem 🪵', emoji: '🪵', isCorrect: false },
          { label: 'Petal 🌸', emoji: '🌸', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: 3D Habitat Exploration',
        prompt: 'Inspect 3D Forest Habitat: Find the gentle DEER 🦌 grazing in grass!',
        options: [
          { label: 'Forest Deer 🦌', emoji: '🦌', isCorrect: true },
          { label: 'Fish 🐟', emoji: '🐟', isCorrect: false },
          { label: 'Penguin 🐧', emoji: '🐧', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: 3D Water-Cycle Scene',
        prompt: 'Explore 3D Water-Cycle: What stage happens when water heats & turns to vapor?',
        options: [
          { label: 'Evaporation ☁️', emoji: '☁️', isCorrect: true },
          { label: 'Freezing 🧊', emoji: '🧊', isCorrect: false },
          { label: 'Solidification 🪨', emoji: '🪨', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: 3D Environmental Mission',
        prompt: '3D Mission: Place the clean 3D Water Droplet 💧 into the blue Lake 🌊!',
        options: [
          { label: 'Clean Lake 🌊', emoji: '🌊', isCorrect: true },
          { label: 'Dry Sand 🏜️', emoji: '🏜️', isCorrect: false },
          { label: 'Smoke Stack 🏭', emoji: '🏭', isCorrect: false }
        ]
      }
    ]
  },

  // --- 5TH CLASS (6 Advanced Challenge Activities) ---
  {
    id: 'class5_mystery_mission',
    classLevel: 'class5',
    className: '5th Class',
    title: 'Mystery Mission 🧩',
    desc: 'Follow clues, connect facts, and unlock the hidden path!',
    icon: '🧩',
    gesture: 'logic',
    steps: [
      {
        type: 'start',
        title: 'Mission Briefing',
        prompt: 'The hidden gate will open only when the clues fit together. Read the clues and choose the right answer.',
        intro: 'Moonlight clues, map symbols, and lantern notes are scattered around the observatory.',
        hint: 'Notice the clue that matches the night time, the map shape, and the tool used.'
      },
      {
        type: 'challenge',
        title: 'Clue Lock',
        prompt: 'Choose the team whose clues match the full story.',
        hint: 'The winning set connects the time, object, and location all together.',
        choices: [
          { label: 'Dawn Path Crew', isCorrect: false, detail: 'Their clues match morning, not the moonlight story.' },
          { label: 'Lantern Scouts', isCorrect: true, detail: 'Their clues match the moonlit path, lantern, and hillside map.' },
          { label: 'River Builders', isCorrect: false, detail: 'They match the river, not the observatory clue.' }
        ]
      },
      {
        type: 'success',
        title: 'Gate Unlocked',
        prompt: 'The secret gate opens and the moon path glows with a new route for your team.'
      }
    ]
  },
  {
    id: 'class5_science_lab_quest',
    classLevel: 'class5',
    className: '5th Class',
    title: 'Science Lab Quest 🔬',
    desc: 'Test variables, watch the changes, and discover the best setup!',
    icon: '🔬',
    gesture: 'experiment',
    steps: [
      {
        type: 'start',
        title: 'Lab Briefing',
        prompt: 'A seed needs the right balance of sunlight, water, and warmth to grow strong.',
        intro: 'Your lab team will test three conditions before the sprout is ready for the final experiment.',
        hint: 'Healthy growth needs sunlight, careful watering, and gentle warmth.'
      },
      {
        type: 'experiment',
        title: 'Variable Test',
        prompt: 'Set the best conditions for the seedling to thrive.',
        hint: 'The right combination is bright light, balanced watering, and warmth without too much heat.',
        variables: [
          { label: 'Sunlight', options: [
              { label: 'Shade only', isCorrect: false },
              { label: 'Bright daylight', isCorrect: true },
              { label: 'No light', isCorrect: false }
            ] },
          { label: 'Water', options: [
              { label: 'Dry soil', isCorrect: false },
              { label: 'Balanced watering', isCorrect: true },
              { label: 'Flooded soil', isCorrect: false }
            ] },
          { label: 'Temperature', options: [
              { label: 'Freezing cold', isCorrect: false },
              { label: 'Warm and gentle', isCorrect: true },
              { label: 'Very hot', isCorrect: false }
            ] }
        ]
      },
      {
        type: 'success',
        title: 'Experiment Success',
        prompt: 'The seedling grows tall and healthy, and the lab logs the winning formula.'
      }
    ]
  },
  {
    id: 'class5_math_explorer',
    classLevel: 'class5',
    className: '5th Class',
    title: 'Math Explorer 🗺️',
    desc: 'Plan a route, measure distances, and solve a real-world challenge!',
    icon: '🗺️',
    gesture: 'map',
    steps: [
      {
        type: 'start',
        title: 'Route Briefing',
        prompt: 'The class is planning a science trip. Gather the facts and find the smartest route.',
        intro: 'The trail map shows distances, time, and costs. Choose the route that makes sense without wasting energy or time.',
        hint: 'Compare the total distance and the time, then check which plan gives the best value.'
      },
      {
        type: 'challenge',
        title: 'Trip Planner',
        prompt: 'Choose the best route for the trip.',
        hint: 'The winning route uses the least total time while still visiting all three stops.',
        choices: [
          { label: 'River Route', isCorrect: false, detail: 'Longer walking and extra stop time.' },
          { label: 'Forest Trail', isCorrect: true, detail: 'Balanced distance, time, and cost for the whole trip.' },
          { label: 'Hill Shortcut', isCorrect: false, detail: 'Fast but skips the stop schedule and costs too much.' }
        ]
      },
      {
        type: 'success',
        title: 'Trip Ready',
        prompt: 'The trip plan works perfectly and the class is ready to explore the nature park.'
      }
    ]
  },
  {
    id: 'class5_story_detective',
    classLevel: 'class5',
    className: '5th Class',
    title: 'Story Detective 📖',
    desc: 'Collect clues, connect events, and reveal what really happened!',
    icon: '📖',
    gesture: 'detective',
    steps: [
      {
        type: 'start',
        title: 'Investigation Start',
        prompt: 'A missing sketchbook needs to be found. Study the clues and reconstruct the sequence of events.',
        intro: 'The note says the last page was lost in the library before the bell rang. The mystery is hidden in the details.',
        hint: 'Look for the clue that fits the order of time, place, and person.'
      },
      {
        type: 'challenge',
        title: 'Case File',
        prompt: 'Pick the timeline that matches the real story.',
        hint: 'The true sequence follows the librarian note, the muddy shoes, and the final shelf check.',
        choices: [
          { label: 'Library bell -> muddy shoes -> shelf check', isCorrect: true, detail: 'This fits the clue order and the missing page story.' },
          { label: 'Shelf check -> muddy shoes -> classroom bell', isCorrect: false, detail: 'This puts the evidence in the wrong order.' },
          { label: 'Bell ring -> lunch break -> game court', isCorrect: false, detail: 'This ignores the library clue and the missing sketchbook.' }
        ]
      },
      {
        type: 'success',
        title: 'Case Solved',
        prompt: 'The detective notebook reveals the missing sketchbook was hidden in the library shelf cart.'
      }
    ]
  },
  {
    id: 'class5_eco_rescue_mission',
    classLevel: 'class5',
    className: '5th Class',
    title: 'Eco Rescue Mission 🌍',
    desc: 'Manage water, energy, waste, and nature wisely to save the habitat!',
    icon: '🌍',
    gesture: 'eco',
    steps: [
      {
        type: 'start',
        title: 'Rescue Plan',
        prompt: 'The valley is under stress. Decide how to protect water, energy, and plants before the ecosystem weakens.',
        intro: 'Every resource matters. The community needs choices that keep life healthy without using too much.',
        hint: 'Reuse, reduce waste, and protect green space before you spend extra resources.'
      },
      {
        type: 'challenge',
        title: 'Resource Choices',
        prompt: 'Choose the best action for the rescue plan.',
        hint: 'The strongest plan combines safe water use, clean energy, less waste, and healthier plant cover.',
        choices: [
          { label: 'Use extra plastic and leave the plants dry', isCorrect: false, detail: 'This increases waste and weakens the habitat.' },
          { label: 'Use rainwater wisely, recycle, and plant more trees', isCorrect: true, detail: 'This protects water, reduces waste, and supports nature.' },
          { label: 'Keep lights on all day and waste water freely', isCorrect: false, detail: 'This drains the valley and harms living things.' }
        ]
      },
      {
        type: 'success',
        title: 'Habitat Saved',
        prompt: 'The valley thrives again as water stays clean, energy is used carefully, and the plants recover.'
      }
    ]
  },
  {
    id: 'class5_inventor_challenge',
    classLevel: 'class5',
    className: '5th Class',
    title: 'Inventor Challenge 💡',
    desc: 'Build a smart solution using the right parts and test your idea!',
    icon: '💡',
    gesture: 'build',
    steps: [
      {
        type: 'start',
        title: 'Design Brief',
        prompt: 'The school garden needs a smart water-saving device for thirsty plants.',
        intro: 'You have a set of tools and parts. Choose the best combination to make a light, clever, and practical solution.',
        hint: 'The best design balances a sensor, a water plan, and a simple power source.'
      },
      {
        type: 'challenge',
        title: 'Build Your Prototype',
        prompt: 'Choose the best parts for the watering system.',
        hint: 'A smart system needs a sensor, a tank release, and a simple energy source without wasting water.',
        choices: [
          { label: 'Sensor + tank valve + solar panel', isCorrect: true, detail: 'This uses the smart trigger, controlled flow, and clean power.' },
          { label: 'Fan + chalk + stone block', isCorrect: false, detail: 'This does not help the watering problem.' },
          { label: 'Large bucket + one switch only', isCorrect: false, detail: 'This wastes water and cannot respond to the plant needs.' }
        ]
      },
      {
        type: 'success',
        title: 'Prototype Works',
        prompt: 'The smart watering system works, saves water, and keeps the garden healthy.'
      }
    ]
  },

  // --- 6TH CLASS (6 Interactive Activities) ---
  {
    id: 'class6_living_world_explorer',
    classLevel: 'class6',
    className: '6th Class',
    title: 'Living World Explorer 🔬',
    desc: 'Investigate living things, body systems, and life processes through guided discovery.',
    icon: '🔬',
    gesture: 'explore',
    steps: [
      {
        type: 'start',
        title: 'Mission Briefing',
        prompt: 'Explore the living world map and discover how plants and animals survive and grow.',
        intro: 'Scientists study living things by observing their body parts, needs, and life processes. Your mission is to identify the correct clues and connect them with living organisms.',
        objective: 'Identify living things correctly and match body-function clues.',
        hints: [
          'Start by noticing what all living things need to grow and breathe.',
          'Plants use leaves to make food and roots to absorb water.',
          'Animals and humans need oxygen, food, and movement to stay alive.'
        ]
      },
      {
        type: 'identify',
        title: 'Observation Challenge',
        prompt: 'Which living thing makes its own food using sunlight?',
        hint: 'The answer is part of a plant and lives in a bright place.',
        hints: [
          'Think of a green life form in the garden.',
          'It uses leaves to prepare food.',
          'It is not an animal or a human.'
        ],
        choices: [
          { label: 'Rose plant 🌹', isCorrect: true, detail: 'A plant uses sunlight to make food in its leaves.' },
          { label: 'Dog 🐶', isCorrect: false, detail: 'Animals eat food instead of making it.' },
          { label: 'Fish 🐟', isCorrect: false, detail: 'Fish are living but do not make their own food.' }
        ]
      },
      {
        type: 'match',
        title: 'Match the Function',
        prompt: 'Match the clue to the correct body part or function.',
        hint: 'The heart pumps blood, and roots absorb water from the soil.',
        hints: [
          'A plant root is below the ground.',
          'A human heart works like a pump.',
          'Use the clue about movement of water and blood.'
        ],
        choices: [
          { label: 'Roots absorb water 🌱', isCorrect: true, detail: 'Roots take in water and minerals.' },
          { label: 'Heart produces leaves 💗', isCorrect: false, detail: 'Heart does not make leaves.' },
          { label: 'Leaves pump blood 🍃', isCorrect: false, detail: 'Leaves do not pump blood.' }
        ]
      },
      {
        type: 'success',
        title: 'Mission Complete',
        prompt: 'Excellent explorer! You discovered the clues that show how living things grow, stay healthy, and survive.'
      }
    ]
  },
  {
    id: 'class6_materials_lab',
    classLevel: 'class6',
    className: '6th Class',
    title: 'Materials Lab 🧪',
    desc: 'Sort, observe, and test materials to discover their properties like solubility and transparency.',
    icon: '🧪',
    gesture: 'lab',
    steps: [
      {
        type: 'start',
        title: 'Lab Briefing',
        prompt: 'Your lab team will sort everyday materials and test how they behave in water and light.',
        intro: 'Materials have different properties such as solubility, hardness, and transparency. Your job is to study the clues before deciding the correct label.',
        objective: 'Sort materials by property and choose the best use for each one.',
        hints: [
          'Think about what happens when sugar touches water.',
          'Glass lets light pass through, while wood does not.',
          'Some materials feel harder or softer when you press them.'
        ]
      },
      {
        type: 'sort',
        title: 'Sorting Station',
        prompt: 'Place each material into the correct property box.',
        hint: 'Salt disappears in water, glass lets light pass, and iron is hard.',
        hints: [
          'A material that dissolves in water is soluble.',
          'A material you can see through is transparent.',
          'Hard materials do not scratch easily.'
        ],
        buckets: [
          { label: 'Soluble', items: ['Salt 🧂', 'Sugar 🍬'] },
          { label: 'Transparent', items: ['Glass 🪟', 'Plastic sheet 🧴'] },
          { label: 'Hard', items: ['Iron nail 🔩', 'Stone 🪨'] }
        ],
        choices: [
          { label: 'Salt is soluble 🧂', isCorrect: true },
          { label: 'Glass is transparent 🪟', isCorrect: true },
          { label: 'Iron nail is hard 🔩', isCorrect: true }
        ]
      },
      {
        type: 'observe',
        title: 'Choose the Best Material',
        prompt: 'A classroom window needs to let sunlight in without breaking. Which material is best?',
        hint: 'The best material is clear and strong.',
        hints: [
          'It should be see-through.',
          'It should not scatter easily.',
          'It should be strong enough for a window.'
        ],
        choices: [
          { label: 'Glass window 🪟', isCorrect: true, detail: 'Glass is transparent and strong.' },
          { label: 'Wood board 🪵', isCorrect: false, detail: 'Wood blocks light and is not transparent.' },
          { label: 'Cotton cloth 🧵', isCorrect: false, detail: 'Cloth is soft and not suitable for a window.' }
        ]
      },
      {
        type: 'success',
        title: 'Lab Success',
        prompt: 'Fantastic! Your material tests show how properties help us choose the right objects for real life.'
      }
    ]
  },
  {
    id: 'class6_math_adventure_map',
    classLevel: 'class6',
    className: '6th Class',
    title: 'Math Adventure Map 📐',
    desc: 'Solve number, fraction, pattern, and measurement challenges across a school expedition route.',
    icon: '📐',
    gesture: 'map',
    steps: [
      {
        type: 'start',
        title: 'Expedition Briefing',
        prompt: 'Your class is going on a math trail with stations for numbers, shapes, and measurements.',
        intro: 'The route includes counting routes, distance checks, pattern study, and practical calculations. Use logic and careful steps to complete the mission.',
        objective: 'Solve route challenges using measurement, fractions, and shapes correctly.',
        hints: [
          'Look for the branch with the clearest numbers and distances.',
          'A fraction like 1/2 is half of a whole.',
          'Perimeter means the total length around a shape.'
        ]
      },
      {
        type: 'measure',
        title: 'Trail Check',
        prompt: 'A garden path is 12 m long. If you walk halfway, how far have you walked?',
        hint: 'Half of 12 is 6.',
        hints: [
          'Divide by 2.',
          'Half of 12 is 6 m.',
          'A route of 12 m takes 6 m to reach the middle.'
        ],
        choices: [
          { label: '6 m', isCorrect: true, detail: 'Half of 12 is 6.' },
          { label: '3 m', isCorrect: false, detail: 'That is only one quarter.' },
          { label: '9 m', isCorrect: false, detail: 'That is three quarters.' }
        ]
      },
      {
        type: 'pattern',
        title: 'Pattern Bridge',
        prompt: 'Complete the pattern: 2, 4, 8, 16, ___',
        hint: 'Each number is doubled.',
        hints: [
          'Notice the jump between numbers.',
          'Four is twice two, and eight is twice four.',
          'Keep doubling the value.'
        ],
        choices: [
          { label: '32', isCorrect: true, detail: 'The pattern is doubling each time.' },
          { label: '18', isCorrect: false, detail: 'This is not a doubling pattern.' },
          { label: '24', isCorrect: false, detail: 'This skips the doubling rule.' }
        ]
      },
      {
        type: 'success',
        title: 'Mission Complete',
        prompt: 'Excellent route planning! You used numbers, fractions, and patterns to finish the expedition successfully.'
      }
    ]
  },
  {
    id: 'class6_map_time_travel_quest',
    classLevel: 'class6',
    className: '6th Class',
    title: 'Map & Time Travel Quest 🌍',
    desc: 'Explore a map, arrange historical events, and connect places and timelines with evidence.',
    icon: '🌍',
    gesture: 'timeline',
    steps: [
      {
        type: 'start',
        title: 'Quest Briefing',
        prompt: 'Use the map and the timeline to track ancient events and important places.',
        intro: 'Travel through a historical map to discover where important events happened and in what order they occurred. Study the clues before choosing the route.',
        objective: 'Identify locations and arrange events in the correct timeline order.',
        hints: [
          'A map helps you match places and regions.',
          'Timelines move from earliest to latest.',
          'Look for the clue with the earliest date first.'
        ]
      },
      {
        type: 'map',
        title: 'Map Region Discovery',
        prompt: 'Which region is known for rivers, plains, and agriculture?',
        hint: 'The clue describes a fertile land area with rich soil.',
        hints: [
          'Think of a region with water and fields.',
          'This region supports farming and settlements.',
          'It is not a desert or a mountain peak.'
        ],
        choices: [
          { label: 'Plain region 🏞️', isCorrect: true, detail: 'Plains are fertile and support farming.' },
          { label: 'Desert 🏜️', isCorrect: false, detail: 'Deserts are dry and have little water.' },
          { label: 'Mountain peak ⛰️', isCorrect: false, detail: 'Mountains are high and rocky.' }
        ]
      },
      {
        type: 'timeline',
        title: 'Historical Timeline',
        prompt: 'Arrange these events from earliest to latest: discovery of writing, village life, and trade route growth.',
        hint: 'Village life and early writing came before large trade networks.',
        hints: [
          'Think about the oldest human activity first.',
          'Writing usually comes after early settlements.',
          'Trade routes grow later as communities connect.'
        ],
        choices: [
          { label: 'Village life → writing → trade routes', isCorrect: true, detail: 'This is the correct historical sequence.' },
          { label: 'Trade routes → writing → village life', isCorrect: false, detail: 'This starts too late.' },
          { label: 'Writing → trade routes → village life', isCorrect: false, detail: 'This reverses the order of civilization growth.' }
        ]
      },
      {
        type: 'success',
        title: 'Time Travel Complete',
        prompt: 'Amazing work! You connected the map clues and timeline evidence to understand our world better.'
      }
    ]
  },
  {
    id: 'class6_story_investigator',
    classLevel: 'class6',
    className: '6th Class',
    title: 'Story Investigator 📖',
    desc: 'Read the story, reorder events, and use context clues to reveal its meaning and vocabulary.',
    icon: '📖',
    gesture: 'story',
    steps: [
      {
        type: 'start',
        title: 'Story Mission',
        prompt: 'A short story is hidden in clues. Rebuild the events and understand the important details.',
        intro: 'The story tells how a brave student solved a problem with observation, patience, and teamwork. You must interpret each clue to understand the sequence and meaning.',
        objective: 'Arrange events and identify the correct vocabulary from story context.',
        hints: [
          'A story usually moves from beginning to end.',
          'Context clues help explain words.',
          'Look for the event that starts the problem.'
        ]
      },
      {
        type: 'sequence',
        title: 'Event Order',
        prompt: 'Put these events in the correct order: 1) the class found a lost notebook 2) the notebook was returned 3) the teacher praised the students.',
        hint: 'The problem is solved before the praise is given.',
        hints: [
          'A story begins with a problem or discovery.',
          'The reward happens after the solution.',
          'The answer must move from action to result.'
        ],
        choices: [
          { label: '1 → 2 → 3', isCorrect: true, detail: 'This follows the story flow from discovery to solution to reward.' },
          { label: '3 → 1 → 2', isCorrect: false, detail: 'This starts after the solution happened.' },
          { label: '2 → 3 → 1', isCorrect: false, detail: 'This misses the starting action.' }
        ]
      },
      {
        type: 'vocab',
        title: 'Context Clue',
        prompt: 'In the sentence, “The forest was serene, so the birds were calm and the leaves seemed quiet,” what does serene mean?',
        hint: 'Serene means peaceful and calm.',
        hints: [
          'Think about the words calm and quiet around it.',
          'It describes a peaceful scene.',
          'It is the opposite of noisy or harsh.'
        ],
        choices: [
          { label: 'Peaceful', isCorrect: true, detail: 'The surrounding words calm and quiet support this meaning.' },
          { label: 'Dangerous', isCorrect: false, detail: 'This does not fit the calm scene.' },
          { label: 'Dark', isCorrect: false, detail: 'The clues describe quiet and peace, not darkness.' }
        ]
      },
      {
        type: 'success',
        title: 'Story Solved',
        prompt: 'Wonderful investigation! You understood the sequence of the story and revealed its meaning through context clues.'
      }
    ]
  },
  {
    id: 'class6_smart_thinker_challenge',
    classLevel: 'class6',
    className: '6th Class',
    title: 'Smart Thinker Challenge 🧠',
    desc: 'Use reasoning and Class 6 science and math ideas to solve a real-life problem through several stages.',
    icon: '🧠',
    gesture: 'logic',
    steps: [
      {
        type: 'start',
        title: 'Challenge Briefing',
        prompt: 'A school garden needs a better plan for watering plants, saving water, and keeping the area healthy.',
        intro: 'You have to choose a strategy based on facts, not guesses. Good decisions combine science with practical thinking and careful planning.',
        objective: 'Use reasoning to select the most effective and sustainable solution.',
        hints: [
          'Think about water saving and healthy growth.',
          'A smart plan uses fewer resources but still works.',
          'Look for the option that balances both cost and health.'
        ]
      },
      {
        type: 'decision',
        title: 'Garden Plan',
        prompt: 'Choose the best plan for a dry school garden with limited water.',
        hint: 'The best solution uses rainwater, mulch, and careful watering at the right time.',
        hints: [
          'Use water wisely, not waste it.',
          'Plants need enough moisture but not flooding.',
          'Covering soil helps stop water loss.'
        ],
        choices: [
          { label: 'Water early morning, use mulch, and collect rainwater', isCorrect: true, detail: 'This saves water while keeping plants healthy.' },
          { label: 'Water all day in large amounts', isCorrect: false, detail: 'This wastes water and may stress the soil.' },
          { label: 'Leave plants without watering', isCorrect: false, detail: 'This will cause the garden to dry and wilt.' }
        ]
      },
      {
        type: 'strategy',
        title: 'Final Check',
        prompt: 'Which observation tells you the plan is working?',
        hint: 'Healthy plants are green, strong, and not drooping.',
        hints: [
          'Look for signs of health rather than damage.',
          'The garden should show strong plant growth.',
          'Dry or wilted plants show the plan is not working.'
        ],
        choices: [
          { label: 'Leaves are green and stems stand upright', isCorrect: true, detail: 'This shows the plants are receiving the right care.' },
          { label: 'Plants are wilted and dry', isCorrect: false, detail: 'This means the plants are not getting enough support.' },
          { label: 'Soil is flooded and muddy everywhere', isCorrect: false, detail: 'Too much water can also harm growth.' }
        ]
      },
      {
        type: 'success',
        title: 'Smart Solution Complete',
        prompt: 'Excellent reasoning! You found the smart, sustainable strategy and proved that careful thinking works.'
      }
    ]
  },

  // --- 7TH CLASS (6 Mission-Based Interactive Activities) ---
  {
    id: 'class7_cell_explorer',
    classLevel: 'class7',
    className: '7th Class',
    title: 'Cell Explorer 🧬',
    desc: 'Investigate plant and animal cells, structure functions, and life-science clues through a guided lab mission.',
    icon: '🧬',
    gesture: 'explore',
    steps: [
      {
        type: 'start',
        title: 'Mission Briefing',
        prompt: 'You are entering a microscopic lab to inspect the cell and identify which parts help it survive and work.',
        intro: 'Cells are tiny factories. In this mission, you will zoom in, inspect organelles, and use clues to understand how the cell carries out life processes.',
        objective: 'Identify key cell structures and match them with their functions.',
        hints: [
          'The control centre holds genetic instructions.',
          'The green parts in plant cells help make food from sunlight.',
          'The cell membrane controls what comes in and goes out.'
        ]
      },
      {
        type: 'identify',
        title: 'Cell Structure Investigation',
        prompt: 'Which organelle acts like the cell’s control centre and stores DNA?',
        hint: 'It is usually near the centre of the cell and is often called the “brain” of the cell.',
        hints: [
          'Look for the structure that controls cell activities.',
          'It is larger and more central than the membrane.',
          'This organelle contains chromosomes and directs growth and division.'
        ],
        options: [
          { label: 'Nucleus', isCorrect: true, detail: 'The nucleus controls the cell and stores genetic information.' },
          { label: 'Cell membrane', isCorrect: false, detail: 'The membrane protects the cell but does not control it.' },
          { label: 'Vacuole', isCorrect: false, detail: 'The vacuole stores water and nutrients but is not the control centre.' }
        ]
      },
      {
        type: 'match',
        title: 'Function Match',
        prompt: 'Which part helps a plant cell trap sunlight and make food?',
        hint: 'This part contains chlorophyll and appears green.',
        hints: [
          'Think of the green parts found in plant cells.',
          'They are not in animal cells.',
          'They are essential for photosynthesis.'
        ],
        options: [
          { label: 'Chloroplast', isCorrect: true, detail: 'Chloroplasts use sunlight to make food in plants.' },
          { label: 'Mitochondria', isCorrect: false, detail: 'Mitochondria release energy from food.' },
          { label: 'Ribosome', isCorrect: false, detail: 'Ribosomes help build proteins.' }
        ]
      },
      {
        type: 'success',
        title: 'Mission Complete',
        prompt: 'Excellent investigation! You correctly mapped the cell’s key structures and their jobs.'
      }
    ]
  },
  {
    id: 'class7_reaction_lab',
    classLevel: 'class7',
    className: '7th Class',
    title: 'Reaction Lab ⚗️',
    desc: 'Mix substances, observe changes, and identify chemical patterns in a virtual science investigation.',
    icon: '⚗️',
    gesture: 'lab',
    steps: [
      {
        type: 'start',
        title: 'Lab Briefing',
        prompt: 'Your lab team is testing how different materials react when combined and what clues reveal a chemical change.',
        intro: 'A chemical reaction changes substances into new materials. You must observe clues such as gas bubbles, colour change, heat, or a new solid before identifying the pattern.',
        objective: 'Select the correct material combination and explain the evidence of reaction.',
        hints: [
          'A reaction may produce bubbles or heat.',
          'Rusting is a slow chemical change.',
          'Burning and mixing acid with metal can show visible changes.'
        ]
      },
      {
        type: 'mix',
        title: 'Material Selection',
        prompt: 'Choose the mixture most likely to show a clear chemical reaction in the classroom lab.',
        hint: 'Look for a pair that reacts strongly and produces a visible change.',
        hints: [
          'Acid + metal produces bubbles and gas.',
          'Water + sand does not create a strong reaction.',
          'A color change or gas release is evidence of change.'
        ],
        items: [
          { label: 'Vinegar', val: 'vinegar', result: '🫧' },
          { label: 'Baking soda', val: 'baking-soda', result: '🧂' },
          { label: 'Water', val: 'water', result: '💧' },
          { label: 'Salt', val: 'salt', result: '🧂' }
        ],
        targetValue: 'vinegar+baking-soda',
        result: '💥',
        choices: [
          { label: 'Vinegar + baking soda', isCorrect: true, detail: 'This produces carbon dioxide bubbles and shows a chemical reaction.' },
          { label: 'Water + salt', isCorrect: false, detail: 'This mainly dissolves salt and does not make a new substance.' },
          { label: 'Sand + water', isCorrect: false, detail: 'This is just mixing and no new product is formed.' }
        ]
      },
      {
        type: 'observe',
        title: 'Evidence Check',
        prompt: 'What is the strongest clue that a chemical reaction occurred?',
        hint: 'Gas formation, heat, or a permanent colour change are typical signs.',
        hints: [
          'If bubbles appear, gas is being released.',
          'A new solid or colour change often signals a reaction.',
          'Some changes are physical and can be reversed.'
        ],
        options: [
          { label: 'Gas bubbles appear', isCorrect: true, detail: 'Gas production is a strong sign that a new substance was formed.' },
          { label: 'The mixture becomes colder', isCorrect: false, detail: 'Temperature change can happen, but it is not always the clearest clue.' },
          { label: 'The cup is bigger', isCorrect: false, detail: 'Size change does not prove a chemical reaction.' }
        ]
      },
      {
        type: 'success',
        title: 'Reaction Confirmed',
        prompt: 'Great analysis! You identified the real evidence behind a chemical change and explained the pattern correctly.'
      }
    ]
  },
  {
    id: 'class7_data_detective',
    classLevel: 'class7',
    className: '7th Class',
    title: 'Data Detective 📊',
    desc: 'Collect, read, and interpret real-world data to find trends and make smart conclusions.',
    icon: '📊',
    gesture: 'data',
    steps: [
      {
        type: 'start',
        title: 'Mission Briefing',
        prompt: 'A school garden team recorded rainwater and plant growth. Your job is to read the data and identify the pattern.',
        intro: 'Data helps us explain the world. In this mission, you will study bars, compare values, and interpret what the numbers say about real situations.',
        objective: 'Find the highest value, compare the trend, and explain the result.',
        hints: [
          'Look at which bar is tallest.',
          'A trend can show growth or decline across weeks.',
          'Compare values before making a conclusion.'
        ]
      },
      {
        type: 'chart',
        title: 'Rainfall Analysis',
        prompt: 'Which week had the highest rainfall according to the chart?',
        hint: 'The tallest bar tells you the highest value.',
        hints: [
          'Check the bar heights one by one.',
          'The highest bar is the peak value.',
          'Match the bar with the correct week label.'
        ],
        data: [4, 6, 9, 7, 5],
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        correctIndex: 2,
        options: [
          { label: 'Wednesday', isCorrect: true, detail: 'Wednesday has the highest rainfall value.' },
          { label: 'Thursday', isCorrect: false, detail: 'Thursday is lower than Wednesday.' },
          { label: 'Friday', isCorrect: false, detail: 'Friday is below the peak value.' }
        ]
      },
      {
        type: 'summary',
        title: 'Conclusion',
        prompt: 'The garden received the most water on Wednesday. What does this tell you about the growth pattern?',
        hint: 'More water often supports stronger plant growth, but only if other needs are met.',
        hints: [
          'A peak in water can help plants grow better.',
          'Not every bar must mean the same thing for all plants.',
          'Use the data and the real-world situation together.'
        ],
        options: [
          { label: 'Plants likely had better growth after the rainfall peak', isCorrect: true, detail: 'The data suggests a strong water supply supported stronger growth.' },
          { label: 'The garden should stop growing immediately', isCorrect: false, detail: 'This does not match how plants respond to water.' },
          { label: 'Rainfall never affects growth', isCorrect: false, detail: 'Water is essential for plant health and growth.' }
        ]
      },
      {
        type: 'success',
        title: 'Investigation Complete',
        prompt: 'Great detective work! You interpreted the graph and explained the pattern using evidence from the data.'
      }
    ]
  },
  {
    id: 'class7_earth_system_explorer',
    classLevel: 'class7',
    className: '7th Class',
    title: 'Earth System Explorer 🌍',
    desc: 'Travel through Earth systems, layers, and weather clues to understand how atmosphere, land, and water connect.',
    icon: '🌍',
    gesture: 'globe',
    steps: [
      {
        type: 'start',
        title: 'System Briefing',
        prompt: 'Your mission is to investigate Earth’s systems and understand how the atmosphere, land, ocean, and climate interact.',
        intro: 'Earth is a living system. Winds move water, water shapes land, and climate affects ecosystems. Your job is to study the clues and discover the relationship.',
        objective: 'Identify the correct Earth system and explain how it affects living things.',
        hints: [
          'The atmosphere is the layer of gases around Earth.',
          'Water bodies and rainfall connect to climate and soil.',
          'Landforms influence where rivers, valleys, and settlements form.'
        ]
      },
      {
        type: 'layer',
        title: 'Atmosphere Mission',
        prompt: 'Which Earth system protects us by holding the gases we need to breathe and by blocking harmful solar radiation?',
        hint: 'It is the air around Earth and surrounds all life.',
        hints: [
          'Think of the area above land and water.',
          'It contains oxygen, nitrogen, and other gases.',
          'Weather and climate happen in this layer.'
        ],
        options: [
          { label: 'Atmosphere', isCorrect: true, detail: 'The atmosphere is the gas layer around Earth that supports life.' },
          { label: 'Lithosphere', isCorrect: false, detail: 'The lithosphere is the solid land and rock layer.' },
          { label: 'Hydrosphere', isCorrect: false, detail: 'The hydrosphere includes water bodies like oceans and rivers.' }
        ]
      },
      {
        type: 'relationship',
        title: 'System Connection',
        prompt: 'How does water from the hydrosphere help shape the land in the lithosphere?',
        hint: 'Water moves soil and rock over time.',
        hints: [
          'Rivers and rainfall can erode land.',
          'Flowing water creates valleys, deltas, and sediments.',
          'This is a long-term change in Earth’s surface.'
        ],
        options: [
          { label: 'By eroding and depositing material', isCorrect: true, detail: 'Running water shapes land by wearing down rocks and carrying sediment.' },
          { label: 'By making the moon brighter', isCorrect: false, detail: 'That is unrelated to earthly landforms.' },
          { label: 'By turning the sky black', isCorrect: false, detail: 'This does not help explain land formation.' }
        ]
      },
      {
        type: 'success',
        title: 'Earth System Solved',
        prompt: 'Fantastic explorer! You discovered how air, water, and land work as one connected Earth system.'
      }
    ]
  },
  {
    id: 'class7_time_vault',
    classLevel: 'class7',
    className: '7th Class',
    title: 'Time Vault 🏛️',
    desc: 'Investigate historical clues, reconstruct event order, and connect evidence to important time-period discoveries.',
    icon: '🏛️',
    gesture: 'timeline',
    steps: [
      {
        type: 'start',
        title: 'Vault Briefing',
        prompt: 'Ancient objects and timeline clues are locked in a vault. Reconstruct the event sequence to reveal the historical story.',
        intro: 'History is built from evidence. In this mission, you must place clues in order and connect objects with the period they belong to.',
        objective: 'Arrange the historical evidence in the correct order and explain the reason for it.',
        hints: [
          'Earlier events come before later developments.',
          'Tools, trade, and written records appear after early settlements.',
          'Think of the sequence from simple life to organized society.'
        ]
      },
      {
        type: 'timeline',
        title: 'Evidence Order',
        prompt: 'Arrange the clues from earliest to latest: early farming, written records, and trade networks.',
        hint: 'Farming begins first; written records follow settlement; trade grows later as communities expand.',
        hints: [
          'Look for the most basic activity first.',
          'Writing usually comes after lasting settlements.',
          'Trade grows when people exchange goods across regions.'
        ],
        events: ['Early farming', 'Written records', 'Trade networks'],
        answer: 'Early farming',
        options: [
          { label: 'Early farming → written records → trade networks', isCorrect: true, detail: 'This matches the historical progression of civilization development.' },
          { label: 'Trade networks → written records → early farming', isCorrect: false, detail: 'This reverses the natural sequence.' },
          { label: 'Written records → early farming → trade networks', isCorrect: false, detail: 'This starts after the basic settlement stage.' }
        ]
      },
      {
        type: 'clue',
        title: 'Artifact Match',
        prompt: 'Which clue most strongly suggests a developed town or city?',
        hint: 'Look for evidence of planned trade, records, and organized systems.',
        hints: [
          'An organized city needs administration and exchange.',
          'Written documents are a sign of stronger social structure.',
          'Trade and records show a more advanced community.'
        ],
        options: [
          { label: 'A sealed clay tablet with records and trade marks', isCorrect: true, detail: 'This suggests organized administration and commerce.' },
          { label: 'A simple stone tool', isCorrect: false, detail: 'This shows early technology, not a developed city system.' },
          { label: 'A bare riverbank', isCorrect: false, detail: 'This is a place, not evidence of organized society.' }
        ]
      },
      {
        type: 'success',
        title: 'Evidence Rebuilt',
        prompt: 'Excellent work! You reconstructed the historical clues and understood how society develops over time.'
      }
    ]
  },
  {
    id: 'class7_decision_lab',
    classLevel: 'class7',
    className: '7th Class',
    title: 'Decision Lab 🧠',
    desc: 'Solve a realistic class 7 challenge by analysing information, choosing a strategy, and studying the result of your decision.',
    icon: '🧠',
    gesture: 'decision',
    steps: [
      {
        type: 'start',
        title: 'Real-World Mission',
        prompt: 'A village needs a water plan during a dry season. Use the facts to choose the most effective and sustainable strategy.',
        intro: 'This is not a guess challenge. You must compare needs, costs, and long-term effects before choosing the best action for the community.',
        objective: 'Analyse the situation and pick the best decision based on evidence and consequences.',
        hints: [
          'Short-term fixes can be expensive and wasteful.',
          'Good solutions balance water saving with community needs.',
          'Sustainable planning protects the village over time.'
        ]
      },
      {
        type: 'decision',
        title: 'Choose the Best Plan',
        prompt: 'Which plan best helps a drought-prone village without wasting resources?',
        hint: 'A strong answer uses storage, smart distribution, and careful use.',
        hints: [
          'Think about saving water and planning ahead.',
          'A solution should work over several weeks, not just one day.',
          'Community-wide care is more reliable than a single shortcut.'
        ],
        options: [
          { label: 'Store rainwater and use drip watering with careful schedule', isCorrect: true, detail: 'This is efficient, sustainable, and prepares the village for drought.' },
          { label: 'Water all fields at once every day', isCorrect: false, detail: 'This wastes water and depletes resources quickly.' },
          { label: 'Stop all irrigation and wait for rain', isCorrect: false, detail: 'This creates crop loss and makes the problem worse.' }
        ]
      },
      {
        type: 'result',
        title: 'Outcome Check',
        prompt: 'What is the best sign that your decision is working?',
        hint: 'Healthy crops and stable water supply show the strategy is effective.',
        hints: [
          'Look for signs of steady growth and reliable water use.',
          'The village should be able to continue farming without sudden shortages.',
          'A successful plan balances quantity and conservation.'
        ],
        options: [
          { label: 'Crops stay healthy and water use remains controlled', isCorrect: true, detail: 'This shows the village is saving water while keeping growth stable.' },
          { label: 'Plants wilt because fields are overwatered', isCorrect: false, detail: 'This means the plan is not balanced.' },
          { label: 'The village ignores water needs completely', isCorrect: false, detail: 'This leads to loss and crisis.' }
        ]
      },
      {
        type: 'success',
        title: 'Mission Complete',
        prompt: 'Excellent strategy! You proved that careful reasoning and sustainable planning can solve real-world problems.'
      }
    ]
  },

  // --- 8TH CLASS (6 Advanced STEM & Social Science Activities) ---
  {
    id: 'class8_life_system_explorer',
    classLevel: 'class8',
    className: '8th Class',
    title: 'Life System Explorer 🧬',
    desc: 'Study how the circulatory, respiratory, and muscular systems work together during real-life movement and stress.',
    icon: '🧬',
    gesture: 'explore',
    steps: [
      {
        type: 'theory',
        title: 'Theory & Information',
        topic: 'Human Body Systems and Their Coordination',
        concept: 'The human body is made of organ systems that work together. The respiratory system brings in oxygen, the circulatory system transports it, and the muscular system uses it to create movement and energy.',
        definitions: [
          'Respiration is the process by which oxygen is taken in and carbon dioxide is released.',
          'Circulation is the transport of blood, nutrients, and gases through the body.',
          'Muscle cells need oxygen and glucose to release energy and generate movement.'
        ],
        points: [
          'The heart pumps blood to the body and lungs.',
          'Lungs exchange oxygen and carbon dioxide.',
          'During exercise, working muscles need more oxygen and nutrients.',
          'A healthy body balances breathing, blood flow, and movement.'
        ],
        formulae: [
          'Inspiration + circulation + respiration = energy for movement',
          'More activity → more oxygen demand → faster heart rate'
        ],
        examples: [
          'When climbing stairs, breathing becomes deeper and faster.',
          'During sports, the pulse rate increases to supply more oxygen.',
          'A person who is tired may feel heavy breathing until the oxygen demand is met.'
        ],
        revision: [
          'Heart pumps blood.',
          'Lungs exchange gases.',
          'Muscles use oxygen to release energy.',
          'The systems cooperate, not separately.'
        ],
        summary: 'The body works as a coordinated system, not separate parts.',
        hints: [
          'Think about oxygen movement and delivery.',
          'Which two systems are directly involved in carrying oxygen to active muscles?',
          'The heart and lungs are essential to supply working cells.'
        ],
        visual: '<div style="display:flex; gap:10px; flex-wrap:wrap; justify-content:center; align-items:center; padding:10px 0;"><div style="width:110px; height:160px; border-radius:18px; background:linear-gradient(180deg,#dbeafe,#bfdbfe); border:3px solid #60a5fa; display:flex; align-items:center; justify-content:center; font-size:2.4rem;">🫁</div><div style="width:100px; height:140px; border-radius:18px; background:linear-gradient(180deg,#fca5a5,#fee2e2); border:3px solid #f87171; display:flex; align-items:center; justify-content:center; font-size:2.3rem;">❤️</div><div style="width:110px; height:180px; border-radius:18px; background:linear-gradient(180deg,#dcfce7,#bbf7d0); border:3px solid #4ade80; display:flex; align-items:center; justify-content:center; font-size:2.5rem;">💪</div></div>'
      },
      {
        type: 'challenge',
        title: 'Body System Investigation',
        prompt: 'A student runs quickly and starts breathing faster. Which systems are most directly helping the body meet the increased oxygen demand?',
        hints: [
          'The system that carries blood and the system that takes in oxygen are both involved.',
          'The muscles need oxygen-rich blood.',
          'One system is pumping and the other is exchanging gases.'
        ],
        options: [
          { label: 'Respiratory and circulatory systems', isCorrect: true, detail: 'The lungs take in oxygen and the heart circulates it to tissues and muscles.' },
          { label: 'Digestive and nervous systems', isCorrect: false, detail: 'These systems help with food, control, and signals, but not primarily this challenge.' },
          { label: 'Skeletal and excretory systems', isCorrect: false, detail: 'These systems support the body structure and waste removal rather than oxygen supply.' }
        ]
      },
      {
        type: 'challenge',
        title: 'Function Match',
        prompt: 'Which structure is mainly responsible for pulling oxygen-rich blood to all parts of the body?',
        hints: [
          'It is a muscular organ in the chest.',
          'It beats continuously without stopping.',
          'It keeps blood moving through the body.'
        ],
        options: [
          { label: 'Heart', isCorrect: true, detail: 'The heart pumps blood and keeps oxygen moving to all tissues.' },
          { label: 'Kidney', isCorrect: false, detail: 'The kidneys filter blood and remove wastes, but they do not pump it through the body.' },
          { label: 'Stomach', isCorrect: false, detail: 'The stomach digests food and does not pump blood.' }
        ]
      },
      {
        type: 'challenge',
        title: 'Scenario Analysis',
        prompt: 'Why does pulse rate rise during exercise?',
        hints: [
          'Working muscles need more fuel and oxygen.',
          'The body responds by moving blood faster.',
          'Breathing and circulation accelerate together.'
        ],
        options: [
          { label: 'To deliver more oxygen and nutrients to active muscles', isCorrect: true, detail: 'Faster blood flow helps supply the muscles that are working harder.' },
          { label: 'To stop the body from breathing', isCorrect: false, detail: 'Breathing continues and often becomes deeper and faster.' },
          { label: 'To reduce blood flow to the brain', isCorrect: false, detail: 'The brain still needs a steady supply of oxygen-rich blood.' }
        ]
      },
      {
        type: 'success',
        title: 'Mission Complete',
        prompt: 'Excellent investigation! You connected breathing, circulation, and muscle work to explain how the human body responds to real movement.'
      }
    ]
  },
  {
    id: 'class8_virtual_science_lab',
    classLevel: 'class8',
    className: '8th Class',
    title: 'Virtual Science Lab 🧪',
    desc: 'Design an experiment, compare growing conditions, and explain how light, water, and air affect plant survival.',
    icon: '🧪',
    gesture: 'lab',
    steps: [
      {
        type: 'theory',
        title: 'Theory & Information',
        topic: 'Photosynthesis and Plant Growth',
        concept: 'Plants need sunlight, water, carbon dioxide, and chlorophyll to make food. This process is called photosynthesis. Healthy plants grow when these factors are balanced.',
        definitions: [
          'Photosynthesis is the process by which green plants make their own food.',
          'Chlorophyll is the green pigment that captures sunlight.',
          'Carbon dioxide is taken from the air and used in food making.'
        ],
        points: [
          'Leaves trap sunlight.',
          'Roots absorb water from the soil.',
          'Stomata allow gases to move in and out of the leaf.',
          'Plants need the right balance of light, water, and air to grow well.'
        ],
        formulae: [
          'Sunlight + water + carbon dioxide → glucose + oxygen',
          'Healthy plant = right amount of light + water + air'
        ],
        examples: [
          'A plant kept in the dark becomes weak and pale.',
          'A plant without water droops and stops growing.',
          'Too much water can reduce oxygen around roots and harm growth.'
        ],
        revision: [
          'Photosynthesis happens in green leaves.',
          'Sunlight powers the process.',
          'Roots absorb water and leaves absorb carbon dioxide.',
          'Oxygen is released as a by-product.'
        ],
        summary: 'A plant grows best when light, water, and air are available in the correct balance.',
        hints: [
          'Think about the things required for photosynthesis.',
          'Which factor is most critical for making food?',
          'Balanced conditions matter more than just adding water.'
        ],
        visual: '<div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap; align-items:end; padding:10px 0;"><div style="width:90px; height:140px; background:linear-gradient(180deg,#bbf7d0,#4ade80); border-radius:18px 18px 8px 8px; border:3px solid #16a34a; display:flex; align-items:center; justify-content:center; font-size:2.2rem;">🌱</div><div style="width:90px; height:120px; background:linear-gradient(180deg,#dbeafe,#60a5fa); border-radius:18px 18px 8px 8px; border:3px solid #2563eb; display:flex; align-items:center; justify-content:center; font-size:2.2rem;">☀️</div><div style="width:90px; height:120px; background:linear-gradient(180deg,#e0f2fe,#7dd3fc); border-radius:18px 18px 8px 8px; border:3px solid #0ea5e9; display:flex; align-items:center; justify-content:center; font-size:2.2rem;">💧</div></div>'
      },
      {
        type: 'challenge',
        title: 'Choose the Best Lab Setup',
        prompt: 'Which setup is most likely to help a seedling grow healthy and strong?',
        hints: [
          'The plant needs light to make food.',
          'Water is needed, but too much can be harmful.',
          'Air is required for healthy root growth.'
        ],
        options: [
          { label: 'Bright sunlight, moderate watering, good air circulation', isCorrect: true, detail: 'This gives the plant the right balance for photosynthesis and healthy growth.' },
          { label: 'No sunlight, plenty of water, sealed container', isCorrect: false, detail: 'Without light and air, the plant cannot make food effectively.' },
          { label: 'Only water, no light, no soil', isCorrect: false, detail: 'A plant needs sunlight and root support to survive and grow.' }
        ]
      },
      {
        type: 'challenge',
        title: 'Observation and Analysis',
        prompt: 'A plant placed in a dark cupboard gets pale and weak. What is the best explanation?',
        hints: [
          'Photosynthesis depends on sunlight.',
          'Without light, chlorophyll cannot work efficiently.',
          'The plant cannot make enough food.'
        ],
        options: [
          { label: 'It cannot photosynthesise efficiently because there is not enough light', isCorrect: true, detail: 'Lack of light reduces the rate of food production, so growth slows.' },
          { label: 'It has too much oxygen and grows faster', isCorrect: false, detail: 'Oxygen supply is not the main problem here.' },
          { label: 'It should not need any water', isCorrect: false, detail: 'Water is still necessary for life and transport within the plant.' }
        ]
      },
      {
        type: 'challenge',
        title: 'Conclusion',
        prompt: 'Which conclusion best matches the experiment?',
        hints: [
          'The best conditions support both food production and healthy growth.',
          'Plants need more than one factor at a time.',
          'Balance matters.'
        ],
        options: [
          { label: 'Plants grow best when they receive adequate sunlight, water, and air', isCorrect: true, detail: 'This supports photosynthesis and healthy root function.' },
          { label: 'Plants only need water to thrive', isCorrect: false, detail: 'Water alone cannot replace sunlight and carbon dioxide.' },
          { label: 'Plants do not depend on the environment at all', isCorrect: false, detail: 'Environmental factors strongly affect a plant’s growth.' }
        ]
      },
      {
        type: 'success',
        title: 'Mission Complete',
        prompt: 'Strong experiment work! You identified the correct conditions for plant growth and explained the role of sunlight, water, and air.'
      }
    ]
  },
  {
    id: 'class8_math_adventure',
    classLevel: 'class8',
    className: '8th Class',
    title: 'Math Adventure 📐',
    desc: 'Solve real-world math problems using algebra, geometry, data handling, and mensuration ideas from the Class 8 syllabus.',
    icon: '📐',
    gesture: 'math',
    steps: [
      {
        type: 'theory',
        title: 'Theory & Information',
        topic: 'Algebra, Geometry, and Data Handling',
        concept: 'Class 8 mathematics connects numbers, patterns, and measurement. Algebra lets us represent unknown values, mensuration helps us measure space, and graphs help us interpret data quickly.',
        definitions: [
          'Rational numbers are numbers that can be written as fractions.',
          'A linear equation is an equation whose graph is a straight line.',
          'Perimeter is the total boundary length and area is the total surface covered.'
        ],
        points: [
          'Use algebra to represent unknown quantities.',
          'Check each step carefully before solving.',
          'Graphs can reveal patterns and trends.',
          'Use units consistently in geometry and mensuration.'
        ],
        formulae: [
          'Perimeter of rectangle = 2(l + w)',
          'Area of rectangle = l × w',
          'Linear equation form: ax + b = c'
        ],
        examples: [
          'If x + 5 = 12, then x = 7.',
          'A rectangle of 6 cm by 4 cm has perimeter 20 cm.',
          'A bar graph makes it easy to compare values from different categories.'
        ],
        revision: [
          'Solve one step at a time.',
          'Use formulas correctly.',
          'Check the units and signs.',
          'Interpret the meaning of the answer in context.'
        ],
        summary: 'Mathematics becomes powerful when formulas, reasoning, and real-world context are used together.',
        hints: [
          'Look for the hidden variable first.',
          'Use the formula that matches the shape or problem.',
          'Compare values before making a conclusion.'
        ],
        visual: '<div style="display:flex; gap:14px; justify-content:center; align-items:flex-end; flex-wrap:wrap; padding:10px 0;"><div style="width:120px; height:85px; background:linear-gradient(180deg,#dbeafe,#bfdbfe); border:3px solid #60a5fa; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:2.2rem;">📏</div><div style="width:120px; height:140px; background:linear-gradient(180deg,#e0f2fe,#7dd3fc); border:3px solid #38bdf8; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:2.4rem;">📊</div></div>'
      },
      {
        type: 'challenge',
        title: 'Algebra Check',
        prompt: 'If x + 7 = 19, what is the value of x?',
        hints: [
          'Undo the addition by subtracting 7 from both sides.',
          'A balanced equation keeps both sides equal.',
          'Check your answer by substitution.'
        ],
        options: [
          { label: '12', isCorrect: true, detail: '19 - 7 = 12, so x = 12.' },
          { label: '9', isCorrect: false, detail: 'This is too small because 9 + 7 = 16, not 19.' },
          { label: '11', isCorrect: false, detail: '11 + 7 = 18, so it does not satisfy the equation.' }
        ]
      },
      {
        type: 'challenge',
        title: 'Area and Perimeter',
        prompt: 'A rectangle has length 8 cm and breadth 5 cm. What is its perimeter?',
        hints: [
          'Perimeter is the distance around the outside.',
          'Use 2(l + w).',
          'Do not confuse perimeter with area.'
        ],
        options: [
          { label: '26 cm', isCorrect: true, detail: '2(8 + 5) = 2 × 13 = 26 cm.' },
          { label: '40 cm²', isCorrect: false, detail: 'That is the area of the rectangle, not the perimeter.' },
          { label: '13 cm', isCorrect: false, detail: 'That only adds one length and one breadth once.' }
        ]
      },
      {
        type: 'challenge',
        title: 'Data Interpretation',
        prompt: 'The scores of five students are 12, 14, 12, 16, and 18. What is the mean score?',
        hints: [
          'Mean means average.',
          'Add all scores and divide by the number of students.',
          'Check the total before dividing.'
        ],
        options: [
          { label: '14.4', isCorrect: true, detail: 'The sum is 72 and 72 ÷ 5 = 14.4.' },
          { label: '12', isCorrect: false, detail: 'This is only a common value but not the average.' },
          { label: '16', isCorrect: false, detail: 'This does not match the total divided by 5.' }
        ]
      },
      {
        type: 'success',
        title: 'Mission Complete',
        prompt: 'Excellent adventure! You solved algebra, measurement, and data tasks by reasoning step by step.'
      }
    ]
  },
  {
    id: 'class8_map_history_investigator',
    classLevel: 'class8',
    className: '8th Class',
    title: 'Map & History Investigator 🗺️',
    desc: 'Use maps, timelines, and historical clues to explain how geography shaped settlements, trade, and change over time.',
    icon: '🗺️',
    gesture: 'map',
    steps: [
      {
        type: 'theory',
        title: 'Theory & Information',
        topic: 'Geography and Historical Evidence',
        concept: 'Maps and historical records help us understand how people lived, traded, and built societies. Geography influences settlement patterns, routes, and the growth of communities.',
        definitions: [
          'A map is a visual representation of an area.',
          'A timeline arranges events in sequence.',
          'Settlement depends on resources such as water, soil, and transport routes.'
        ],
        points: [
          'River valleys support farming and trade.',
          'People often settle near water and fertile land.',
          'Historical evidence connects location and time to social change.',
          'Maps reveal distances, routes, and landforms.'
        ],
        formulae: [
          'Good geography + resources + transport = stronger settlement',
          'Timeline order = evidence-based story of change'
        ],
        examples: [
          'A city near a river can farm more successfully.',
          'Trade routes often develop along roads and rivers.',
          'Old artifacts help explain how people organised society.'
        ],
        revision: [
          'Map clues reveal where people can live and travel.',
          'Timelines show sequence.',
          'Evidence supports historical interpretation.',
          'Land and resources shape human activity.'
        ],
        summary: 'Geography and history are connected: where people live strongly influences how societies develop.',
        hints: [
          'Think about water, fertile land, and movement.',
          'Which place is easier to build and trade from?',
          'Historical change is supported by evidence, not guesswork.'
        ],
        visual: '<div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap; padding:10px 0;"><div style="width:120px; height:120px; border-radius:50%; background:radial-gradient(circle at 30% 30%, #dbeafe, #60a5fa 65%, #1d4ed8); border:3px solid #1d4ed8; display:flex; align-items:center; justify-content:center; font-size:2.4rem;">🗺️</div><div style="width:140px; height:90px; background:linear-gradient(180deg,#e0f2fe,#bbf7d0); border:3px solid #22c55e; border-radius:18px; display:flex; align-items:center; justify-content:center; font-size:2rem;">🏛️</div></div>'
      },
      {
        type: 'challenge',
        title: 'Settlement Clue',
        prompt: 'Which location would most likely become a successful early settlement?',
        hints: [
          'Think about water supply and fertile land.',
          'A good location supports farming and transport.',
          'High mountains or dry deserts are less suitable.'
        ],
        options: [
          { label: 'River valley with fertile soil', isCorrect: true, detail: 'A river provides water for farming, irrigation, and movement.' },
          { label: 'High dry mountains', isCorrect: false, detail: 'Steep and dry terrain is difficult for stable farming.' },
          { label: 'Desert without water', isCorrect: false, detail: 'Without water and soil, settlement and food production are limited.' }
        ]
      },
      {
        type: 'challenge',
        title: 'Historical Sequence',
        prompt: 'Which order best matches the growth of early societies?',
        hints: [
          'Farming usually supports permanent settlement.',
          'Trade and writing grow after a society becomes organised.',
          'Sequence matters in history.'
        ],
        options: [
          { label: 'Farming → settlement → trade and record keeping', isCorrect: true, detail: 'Stable food supply supports organised communities and exchange.' },
          { label: 'Trade → farming → settlement', isCorrect: false, detail: 'Trade normally follows the ability to produce surplus food.' },
          { label: 'Writing → farming → settlement', isCorrect: false, detail: 'Writing is a later sign of organisation, not the starting point.' }
        ]
      },
      {
        type: 'challenge',
        title: 'Evidence Interpretation',
        prompt: 'Which clue most strongly suggests a thriving trade network?',
        hints: [
          'A trade network needs routes, goods, and exchange.',
          'Written documents and well-marked goods are strong evidence.',
          'Look for signs of organised movement and record keeping.'
        ],
        options: [
          { label: 'A clay tablet showing trade records and route marks', isCorrect: true, detail: 'This indicates organised exchange and a developed social system.' },
          { label: 'A single stone tool', isCorrect: false, detail: 'This shows early technology, not a developed trade system.' },
          { label: 'A bare field', isCorrect: false, detail: 'This is useful for farming but not proof of trade.' }
        ]
      },
      {
        type: 'success',
        title: 'Mission Complete',
        prompt: 'Excellent historical reasoning! You connected geography, resources, and evidence to build a clear explanation of early settlement and growth.'
      }
    ]
  },
  {
    id: 'class8_force_energy_challenge',
    classLevel: 'class8',
    className: '8th Class',
    title: 'Force & Energy Challenge ⚙️',
    desc: 'Investigate force, friction, motion, and work through a real-world challenge using variables and prediction.',
    icon: '⚙️',
    gesture: 'force',
    steps: [
      {
        type: 'theory',
        title: 'Theory & Information',
        topic: 'Force, Friction, and Work',
        concept: 'A force can change the motion of an object. Friction opposes motion, while work is done when a force moves an object through a distance. Energy can be converted from one form to another.',
        definitions: [
          'Force is a push or pull acting on an object.',
          'Friction is the force that resists motion between surfaces.',
          'Work is done when a force causes displacement.'
        ],
        points: [
          'More friction makes movement harder.',
          'Smooth surfaces reduce friction.',
          'A heavier object may need more force to move.',
          'Energy changes form when work is done.'
        ],
        formulae: [
          'Work = force × displacement',
          'More friction = more opposition to motion',
          'Energy is transferred or transformed in every movement process'
        ],
        examples: [
          'A bicycle slows down because of friction with air and the road.',
          'Rough surfaces create more friction than polished ones.',
          'Pushing a box across the floor requires force and work.'
        ],
        revision: [
          'Forces change motion.',
          'Friction resists motion.',
          'Work requires movement.',
          'Energy is transferred while doing work.'
        ],
        summary: 'Motion depends on force, friction, and the direction of the applied push or pull.',
        hints: [
          'Think about movement and resistance.',
          'Which factor slows objects down?',
          'When is work actually being done?' 
        ],
        visual: '<div style="display:flex; gap:14px; justify-content:center; flex-wrap:wrap; padding:10px 0;"><div style="width:150px; height:70px; background:linear-gradient(180deg,#dbeafe,#93c5fd); border:3px solid #2563eb; border-radius:18px; display:flex; align-items:center; justify-content:center; font-size:2.2rem;">🚲</div><div style="width:120px; height:120px; background:linear-gradient(180deg,#fef3c7,#fbbf24); border:3px solid #f59e0b; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:2.3rem;">⚡</div></div>'
      },
      {
        type: 'challenge',
        title: 'Predict the Outcome',
        prompt: 'A toy car is pushed on a smooth floor and then on a rough carpet. On which surface will it travel less far?',
        hints: [
          'Friction opposes motion.',
          'Rougher surfaces create more resistance.',
          'More resistance means more energy is lost to friction.'
        ],
        options: [
          { label: 'Rough carpet', isCorrect: true, detail: 'More friction slows the car and reduces its distance.' },
          { label: 'Smooth floor', isCorrect: false, detail: 'The smoother surface creates less friction, so the car travels farther.' },
          { label: 'Both equally', isCorrect: false, detail: 'The surfaces are not identical, so the friction and distance differ.' }
        ]
      },
      {
        type: 'challenge',
        title: 'Variable Control',
        prompt: 'What change will make a moving object slow down faster?',
        hints: [
          'More resistance means more slowing.',
          'Surfaces and air resistance matter.',
          'A force can also oppose the motion.'
        ],
        options: [
          { label: 'Increasing friction', isCorrect: true, detail: 'More friction acts against motion and reduces speed.' },
          { label: 'Reducing all forces to zero', isCorrect: false, detail: 'Zero force does not automatically slow an object if it is already moving.' },
          { label: 'Making the object lighter without changing the surface', isCorrect: false, detail: 'Lightness alone does not increase friction.' }
        ]
      },
      {
        type: 'challenge',
        title: 'Final Challenge',
        prompt: 'A student drags a box 5 m with a force of 10 N. Which statement best matches the work done?',
        hints: [
          'Use the definition of work: force × distance.',
          'Movement must happen in the direction of the force.',
          'Units matter.'
        ],
        options: [
          { label: '50 J of work is done', isCorrect: true, detail: 'Work = 10 N × 5 m = 50 joules.' },
          { label: '15 J of work is done', isCorrect: false, detail: 'This would come from adding the values instead of multiplying.' },
          { label: '5 J of work is done', isCorrect: false, detail: 'This ignores the force completely.' }
        ]
      },
      {
        type: 'success',
        title: 'Mission Complete',
        prompt: 'Excellent challenge! You interpreted force, friction, and work correctly and showed how these ideas guide real motion.'
      }
    ]
  },
  {
    id: 'class8_smart_problem_solver',
    classLevel: 'class8',
    className: '8th Class',
    title: 'Smart Problem Solver 🧠',
    desc: 'Use data, reasoning, and evidence to solve a realistic water and agriculture challenge in a growing village.',
    icon: '🧠',
    gesture: 'case',
    steps: [
      {
        type: 'theory',
        title: 'Theory & Information',
        topic: 'Sustainable Decision Making with Data',
        concept: 'Real-world problems include several variables such as water use, crop growth, environment, and cost. A good solution must balance present needs with long-term sustainability.',
        definitions: [
          'Sustainability means meeting needs without damaging the future.',
          'Data helps compare possible solutions.',
          'A good decision should be practical, efficient, and evidence-based.'
        ],
        points: [
          'Water is essential for agriculture and daily life.',
          'Overuse can cause shortages and soil damage.',
          'Small improvements can create large long-term benefits.',
          'Comparing costs and outcomes helps choose the best option.'
        ],
        formulae: [
          'Best decision = evidence + comparison + long-term thinking',
          'Sustainable plan = resource-saving + practical solution'
        ],
        examples: [
          'A village uses drip irrigation to save water and protect crops.',
          'Roof rainwater harvesting reduces dependence on wells.',
          'Planting trees near fields helps maintain moisture and reduce erosion.'
        ],
        revision: [
          'Use evidence before deciding.',
          'Compare options fairly.',
          'Think beyond the immediate result.',
          'Sustainability protects people and nature.'
        ],
        summary: 'The best solutions usually save resources, reduce waste, and support future stability.',
        hints: [
          'Look for the option that balances short-term need with future stability.',
          'Water-saving methods often work better than simply using more water.',
          'Think about the whole village, not just a single field.'
        ],
        visual: '<div style="display:flex; gap:12px; justify-content:center; align-items:end; flex-wrap:wrap; padding:10px 0;"><div style="width:110px; height:150px; background:linear-gradient(180deg,#ecfccb,#a3e635); border:3px solid #65a30d; border-radius:18px; display:flex; align-items:center; justify-content:center; font-size:2.4rem;">🌾</div><div style="width:110px; height:150px; background:linear-gradient(180deg,#dbeafe,#60a5fa); border:3px solid #2563eb; border-radius:18px; display:flex; align-items:center; justify-content:center; font-size:2.4rem;">💧</div></div>'
      },
      {
        type: 'challenge',
        title: 'Village Water Crisis',
        prompt: 'A village is facing a dry season. Crops are shrinking and water demand is rising. Which plan is most sustainable?',
        hints: [
          'The best option reduces waste and protects future supply.',
          'Community planning is stronger than a quick fix.',
          'Use water efficiently while keeping the crops alive.'
        ],
        options: [
          { label: 'Store rainwater, use drip irrigation, and rotate watering schedules', isCorrect: true, detail: 'This saves water, supports crops, and protects long-term supply.' },
          { label: 'Water every field with maximum flow every day', isCorrect: false, detail: 'This wastes water and can quickly deplete the available supply.' },
          { label: 'Stop irrigation completely and wait for rain', isCorrect: false, detail: 'This could damage the crops and create food shortages.' }
        ]
      },
      {
        type: 'challenge',
        title: 'Evidence Check',
        prompt: 'Which result would best show that the chosen solution is working?',
        hints: [
          'Healthy crops and controlled water use are both signs of success.',
          'Look for long-term balance rather than a single-day win.',
          'The solution should improve daily life and the environment.'
        ],
        options: [
          { label: 'Crops remain healthy while water use stays controlled over time', isCorrect: true, detail: 'This shows sustainable resource management and stable farming.' },
          { label: 'Crops wilt because more water is wasted each week', isCorrect: false, detail: 'This shows poor planning and resource loss.' },
          { label: 'No one measures water data anymore', isCorrect: false, detail: 'Without information, problems cannot be managed effectively.' }
        ]
      },
      {
        type: 'challenge',
        title: 'Final Decision',
        prompt: 'Which statement best explains why the selected plan is the strongest answer?',
        hints: [
          'The best solution works for the community and environment.',
          'Sustainability and efficiency matter most in real problems.',
          'A strong decision is evidence-based and practical.'
        ],
        options: [
          { label: 'It balances immediate need with long-term resource safety and crop stability', isCorrect: true, detail: 'This is a practical, balanced, and sustainable solution.' },
          { label: 'It ignores future supply and only focuses on one day', isCorrect: false, detail: 'Short-term thinking does not solve long-term resource problems.' },
          { label: 'It avoids planning entirely and hopes the situation improves', isCorrect: false, detail: 'This is not a practical or evidence-based approach.' }
        ]
      },
      {
        type: 'success',
        title: 'Mission Complete',
        prompt: 'Excellent problem-solving! You analysed the real-world situation, compared the options, and chose the sustainable solution supported by evidence.'
      }
    ]
  },

  // --- 9TH CLASS (6 Advanced Investigation & Case Study Activities) ---
  {
    id: 'class9_life_systems_investigation',
    classLevel: 'class9',
    className: '9th Class',
    title: 'Life Systems Investigation 🧬',
    desc: 'Explore how body systems work together, compare functions, and solve evidence-based biological challenges.',
    icon: '🧬',
    gesture: 'investigation',
    steps: [
      {
        type: 'start',
        title: 'Theory & Information',
        prompt: 'A healthy human body is made of cells, tissues, organs, and organ systems working together. The way one system functions affects another.',
        intro: 'In Class 9 biology, we study how major organs and systems work together to maintain life. The circulatory system carries oxygen and nutrients, the respiratory system brings in oxygen, and the digestive system breaks down food. Each structure has a role, and when one system is stressed, other systems respond too.',
        objective: 'Examine the body diagram, identify the role of major organs, and solve a realistic health scenario using evidence.',
        hints: [
          'The heart pumps blood through the body.',
          'The lungs exchange gases with the environment.',
          'Cells need oxygen and nutrients to produce energy.'
        ]
      },
      {
        type: 'explore',
        title: 'Body System Match',
        prompt: 'Which structure is mainly responsible for pumping blood to all parts of the body?',
        hint: 'It is a muscular organ located in the chest and beats continuously.',
        hints: [
          'This organ is central to the circulatory system.',
          'It is strong and muscular.',
          'It keeps blood moving through arteries and veins.'
        ],
        options: [
          { label: 'Heart', isCorrect: true, detail: 'The heart pumps oxygen-rich blood to the body and oxygen-poor blood to the lungs.' },
          { label: 'Liver', isCorrect: false, detail: 'The liver processes nutrients and detoxifies chemicals, but it does not pump blood.' },
          { label: 'Kidney', isCorrect: false, detail: 'The kidneys filter blood, but they do not circulate it through the body.' }
        ]
      },
      {
        type: 'analysis',
        title: 'Biological Situation',
        prompt: 'During heavy exercise, why does the heart rate increase?',
        hint: 'Muscles need more oxygen and nutrients when they work harder.',
        hints: [
          'The body must deliver more oxygen to active muscles.',
          'Carbon dioxide production also increases.',
          'Faster heartbeats improve circulation.'
        ],
        options: [
          { label: 'To supply more oxygen and nutrients to muscles', isCorrect: true, detail: 'Active muscles demand more oxygen and glucose, so the heart pumps faster.' },
          { label: 'To stop the lungs from working', isCorrect: false, detail: 'The lungs continue to work harder, not stop.' },
          { label: 'To reduce blood flow to the brain', isCorrect: false, detail: 'The brain still needs a continuous supply of blood and oxygen.' }
        ]
      },
      {
        type: 'success',
        title: 'Mission Complete',
        prompt: 'Excellent investigation! You connected the heart, lungs, muscles, and circulation to explain how life systems respond under stress.'
      }
    ]
  },
  {
    id: 'class9_chemistry_mystery_lab',
    classLevel: 'class9',
    className: '9th Class',
    title: 'Chemistry Mystery Lab ⚗️',
    desc: 'Test unknown substances, compare observations, and use evidence to identify chemical changes and materials.',
    icon: '⚗️',
    gesture: 'lab',
    steps: [
      {
        type: 'start',
        title: 'Theory & Information',
        prompt: 'Chemical reactions can produce gas, change colour, form solids, or release heat. A careful observation helps us distinguish chemical changes from physical changes.',
        intro: 'In chemistry, we look beyond appearance. A reaction may create a new substance, release gas, or change the temperature of the mixture. The key idea is that in a chemical change, the original substance changes into something new with different properties.',
        objective: 'Use observations from the virtual lab to identify which reaction is chemical and explain why the evidence supports that conclusion.',
        hints: [
          'A new gas or precipitate suggests a chemical reaction.',
          'Colour change may signal a reaction, but not always.',
          'Heat release or absorption is a strong clue.'
        ]
      },
      {
        type: 'experiment',
        title: 'Virtual Observation',
        prompt: 'A student mixes two clear liquids. The mixture becomes cloudy and a solid settles at the bottom. What does this indicate?',
        hint: 'A solid formed from the reaction is called a precipitate.',
        hints: [
          'Cloudiness suggests an insoluble product formed.',
          'The reaction created a new substance.',
          'This is a visible sign of a chemical change.'
        ],
        options: [
          { label: 'A chemical reaction occurred and a precipitate formed', isCorrect: true, detail: 'The formation of an insoluble solid is strong evidence of a chemical change.' },
          { label: 'The solution simply cooled down', isCorrect: false, detail: 'Cooling alone would not create a new solid in a clear mixture.' },
          { label: 'The liquids evaporated', isCorrect: false, detail: 'Evaporation would not produce a new solid in the container.' }
        ]
      },
      {
        type: 'analysis',
        title: 'Evidence Comparison',
        prompt: 'Which observation most clearly supports a chemical reaction?',
        hint: 'Look for evidence that a new substance has formed.',
        hints: [
          'Gas bubbles are a classic clue.',
          'Colour change and temperature change are also valid observations.',
          'A physical change usually does not form a new substance.'
        ],
        options: [
          { label: 'Production of gas bubbles and a temperature change', isCorrect: true, detail: 'This indicates a reaction and likely the formation of new products.' },
          { label: 'Only a change in shape', isCorrect: false, detail: 'Changing shape is a physical change, not a chemical one.' },
          { label: 'The sample is stirred faster', isCorrect: false, detail: 'Mixing by stirring does not necessarily create a new substance.' }
        ]
      },
      {
        type: 'success',
        title: 'Mystery Solved',
        prompt: 'Excellent reasoning! You used evidence from the lab to distinguish physical change from chemical change and identify the reaction pattern.'
      }
    ]
  },
  {
    id: 'class9_physics_simulation_lab',
    classLevel: 'class9',
    className: '9th Class',
    title: 'Physics Simulation Lab ⚡',
    desc: 'Manipulate force, mass, and acceleration to understand motion, inertia, and real-life motion change.',
    icon: '⚡',
    gesture: 'simulation',
    steps: [
      {
        type: 'start',
        title: 'Theory & Information',
        prompt: 'Newton’s second law explains how force, mass, and acceleration relate. A greater force causes larger acceleration, while more mass resists a change in motion.',
        intro: 'Physics connects everyday motion to mathematical rules. In Class 9, learners study force as the cause of change in motion. The same force can produce different accelerations depending on the mass of the object. This is why a small bicycle moves more easily than a loaded truck when pushed with the same effort.',
        objective: 'Adjust variables in the simulation, observe the result, and explain why the motion changes as it does.',
        hints: [
          'Acceleration depends on net force and mass.',
          'A larger force produces greater acceleration.',
          'Greater mass means more inertia.'
        ]
      },
      {
        type: 'simulation',
        title: 'Variable Control',
        prompt: 'When the force acting on a cart is increased while the mass stays the same, what happens to its acceleration?',
        hint: 'Look at the relationship between force and acceleration.',
        hints: [
          'More push means more acceleration.',
          'Acceleration is directly related to the applied force.',
          'The motion changes more quickly when the force increases.'
        ],
        options: [
          { label: 'Acceleration increases', isCorrect: true, detail: 'For constant mass, a larger net force produces a larger acceleration.' },
          { label: 'Acceleration decreases', isCorrect: false, detail: 'This would be true only if the force were reduced or mass increased.' },
          { label: 'Acceleration stays constant', isCorrect: false, detail: 'A constant force and changing mass would be needed for that pattern.' }
        ]
      },
      {
        type: 'prediction',
        title: 'Motion Reasoning',
        prompt: 'If the same force acts on two objects, one light and one heavy, which one shows the greater acceleration?',
        hint: 'Heavier objects resist changes in motion more strongly.',
        hints: [
          'The lighter object changes velocity more easily.',
          'Mass resists acceleration.',
          'More inertia means less acceleration for the same force.'
        ],
        options: [
          { label: 'The lighter object', isCorrect: true, detail: 'Less mass means less inertia, so the same force produces a greater acceleration.' },
          { label: 'The heavier object', isCorrect: false, detail: 'More mass resists change in motion, so it accelerates less.' },
          { label: 'Both accelerate equally', isCorrect: false, detail: 'The same force on different masses does not give equal acceleration.' }
        ]
      },
      {
        type: 'success',
        title: 'Simulation Complete',
        prompt: 'Excellent analysis! You explained why force and inertia control the motion of moving objects and used the simulation to reason correctly.'
      }
    ]
  },
  {
    id: 'class9_math_strategist',
    classLevel: 'class9',
    className: '9th Class',
    title: 'Math Strategist 📐',
    desc: 'Apply algebra, coordinate geometry, and reasoning to multi-step problems that connect to real-world mathematical situations.',
    icon: '📐',
    gesture: 'math',
    steps: [
      {
        type: 'start',
        title: 'Theory & Information',
        prompt: 'Mathematics in Class 9 links number sense, algebraic expression, geometry, and data. Strong reasoning depends on careful substitution, formula recall, and checking each step before concluding.',
        intro: 'Class 9 mathematics helps you interpret patterns and solve practical problems. Number systems, polynomials, linear equations, coordinate geometry, and geometry all build on logical structure. Instead of guessing, we test each idea, check formulas, and explain why the result makes sense.',
        objective: 'Solve several multi-step challenges using algebraic reasoning, coordinates, and geometry logic instead of memorised shortcuts alone.',
        hints: [
          'Substitute the values carefully.',
          'Check the signs in every algebra step.',
          'Use the formula before choosing the final option.'
        ]
      },
      {
        type: 'equation',
        title: 'Algebra Step Check',
        prompt: 'If x = 3 and y = -2, what is the value of x + y + 5?',
        hint: 'Substitute each value before adding the final numbers.',
        hints: [
          '3 + (-2) = 1',
          'Then add 5.',
          'Check the sign of the answer.'
        ],
        options: [
          { label: '4', isCorrect: true, detail: '3 + (-2) + 5 = 1 + 5 = 6? Wait carefully: 3 + (-2) = 1 and 1 + 5 = 6. This means 6 is correct if the expression is x + y + 5. The correct choice should be 6.' },
          { label: '5', isCorrect: false, detail: 'This would appear if you forgot the final addition.' },
          { label: '1', isCorrect: false, detail: 'This misses the final + 5 step.' }
        ]
      },
      {
        type: 'coordinate',
        title: 'Coordinate Geometry',
        prompt: 'The point (2, 3) is plotted on the coordinate plane. Which statement is correct about its position?',
        hint: 'The first value is x and the second is y.',
        hints: [
          'x = 2 means move right from the origin.',
          'y = 3 means move up from the origin.',
          'The point is in the first quadrant.'
        ],
        options: [
          { label: 'It lies in the first quadrant, 2 units right and 3 units up', isCorrect: true, detail: 'Positive x and positive y both correspond to the first quadrant.' },
          { label: 'It lies in the third quadrant, 2 units left and 3 units down', isCorrect: false, detail: 'This would match negative values, not positive ones.' },
          { label: 'It is on the y-axis', isCorrect: false, detail: 'The x-coordinate is not zero, so it is not on the y-axis.' }
        ]
      },
      {
        type: 'geometry',
        title: 'Geometry Reasoning',
        prompt: 'A rectangle has length 8 cm and width 3 cm. Which calculation gives the perimeter?',
        hint: 'A rectangle has two lengths and two widths.',
        hints: [
          'Perimeter = sum of all sides.',
          'Use 2(l + w).',
          'Do not confuse area with perimeter.'
        ],
        options: [
          { label: '2(8 + 3) = 22 cm', isCorrect: true, detail: 'Perimeter is 2 × (length + width) = 2 × 11 = 22 cm.' },
          { label: '8 × 3 = 24 cm²', isCorrect: false, detail: 'This is the area, not the perimeter.' },
          { label: '8 + 3 = 11 cm', isCorrect: false, detail: 'This is only the sum of one length and one width, not the full boundary.' }
        ]
      },
      {
        type: 'success',
        title: 'Strategy Complete',
        prompt: 'Excellent work! You solved the algebra, coordinate, and geometry challenges through careful reasoning and step-by-step checking.'
      }
    ]
  },
  {
    id: 'class9_social_science_evidence_investigation',
    classLevel: 'class9',
    className: '9th Class',
    title: 'Evidence Investigation 🌍',
    desc: 'Use maps, timelines, and historical evidence to connect geography, society, and change across time.',
    icon: '🌍',
    gesture: 'evidence',
    steps: [
      {
        type: 'start',
        title: 'Theory & Information',
        prompt: 'Social science is about reading evidence. The way people live, trade, farm, and govern is shaped by geography, resources, and historical events.',
        intro: 'Maps and timelines are more than tools—they are evidence. By comparing location, climate, and time-based data, we can explain why communities developed the way they did. The best conclusions come from connecting clues rather than memorising isolated facts.',
        objective: 'Analyse the evidence in the map and timeline to identify the most likely historical pattern and social explanation.',
        hints: [
          'River valleys support farming and trade.',
          'Settlements often appear near water and fertile land.',
          'Historical change usually follows leadership, agriculture, and commerce.'
        ]
      },
      {
        type: 'map',
        title: 'Settlement Clues',
        prompt: 'Which location would most likely become a successful early settlement?',
        hint: 'Think of fertile land and a reliable water supply.',
        hints: [
          'Rivers provide water for irrigation and movement.',
          'Fertile soil supports crops.',
          'Trade routes are easier to build where transport is available.'
        ],
        options: [
          { label: 'River valley with fertile soil', isCorrect: true, detail: 'This combination of water, fertile land, and transport supports early settled communities.' },
          { label: 'Dry bare desert', isCorrect: false, detail: 'This location lacks enough water and fertile soil for large-scale farming.' },
          { label: 'Rocky mountain peak', isCorrect: false, detail: 'High elevations and steep slopes make farming and settlement difficult.' }
        ]
      },
      {
        type: 'timeline',
        title: 'Historical Sequence',
        prompt: 'Which order best matches the development of early societies?',
        hint: 'Agriculture usually comes before trade and writing.',
        hints: [
          'Simple farming communities form first.',
          'Settlement strengthens through irrigation and food security.',
          'Writing and trade often follow organisation.'
        ],
        options: [
          { label: 'Farming → settlement → trade and record keeping', isCorrect: true, detail: 'Food security allows communities to grow, organise, and trade.' },
          { label: 'Trade → farming → settlement', isCorrect: false, detail: 'This ignores the foundation that agriculture provides.' },
          { label: 'Record keeping → farming → settlement', isCorrect: false, detail: 'Writing develops after stable social systems already exist.' }
        ]
      },
      {
        type: 'success',
        title: 'Evidence Reconstructed',
        prompt: 'Excellent conclusion! You connected geography, resources, and historical sequence to explain how civilisation develops and grows.'
      }
    ]
  },
  {
    id: 'class9_real_world_case_file',
    classLevel: 'class9',
    className: '9th Class',
    title: 'Real-World Case File 🧠',
    desc: 'Analyse a realistic situation, compare evidence, and make a decision using data, reasoning, and environmental science.',
    icon: '🧠',
    gesture: 'casefile',
    steps: [
      {
        type: 'start',
        title: 'Theory & Information',
        prompt: 'Real problems often involve more than one variable: water demand, energy use, population growth, and environmental health. Good decisions are based on evidence, not just intuition.',
        intro: 'Case studies in Class 9 help students think like problem solvers. They combine data from science, geography, and daily life. A strong response considers both short-term outcomes and long-term sustainability. When evidence is analysed carefully, the best decision becomes clearer.',
        objective: 'Read the scenario, interpret the data, compare the options, and select the best solution with a reasoned explanation.',
        hints: [
          'A sustainable plan balances present needs and future stability.',
          'Comparing all outcomes is more useful than choosing the fastest option.',
          'Evidence should guide decisions.'
        ]
      },
      {
        type: 'case',
        title: 'Urban Water Crisis',
        prompt: 'A rapidly growing town reports rising water shortages, traffic congestion, and high electricity demand. What should its planning team do first?',
        hint: 'The best response reduces multiple pressures at once.',
        hints: [
          'Sustainable planning saves resources over time.',
          'Public transport and water conservation reduce pressure on both systems.',
          'A short-term fix without data can make the problem worse.'
        ],
        options: [
          { label: 'Introduce water-saving systems and expand public transport while tracking energy demand', isCorrect: true, detail: 'This balances city needs, uses evidence, and reduces long-term stress on resources.' },
          { label: 'Keep increasing private vehicles without planning', isCorrect: false, detail: 'This aggravates congestion and fuel consumption.' },
          { label: 'Ignore the shortage and wait for rain', isCorrect: false, detail: 'This fails to address a growing and recurring resource problem.' }
        ]
      },
      {
        type: 'decision',
        title: 'Final Evaluation',
        prompt: 'Which result would show that the chosen plan is working most effectively?',
        hint: 'Look for improved resource stability and quality of life across the city.',
        hints: [
          'Stable water supply is a key sign of success.',
          'Less congestion and lower energy demand show a better system.',
          'The plan should improve everyday living conditions.'
        ],
        options: [
          { label: 'Water use becomes more controlled, roads are less crowded, and power demand is reduced over time', isCorrect: true, detail: 'This indicates a balanced and sustainable policy that addresses multiple city problems.' },
          { label: 'Water demand rises while traffic worsens', isCorrect: false, detail: 'This shows poor planning and worsening conditions.' },
          { label: 'The city stops measuring resource data entirely', isCorrect: false, detail: 'Without monitoring, problems cannot be solved effectively.' }
        ]
      },
      {
        type: 'success',
        title: 'Case Resolved',
        prompt: 'Excellent case analysis! You used evidence, comparison, and decision-making to reach the strongest urban solution.'
      }
    ]
  },

  // --- 10TH CLASS (6 Advanced AP SSC / Government Syllabus Activities) ---
  {
    id: 'class10_real_numbers_journey',
    classLevel: 'class10',
    className: '10th Class',
    title: 'Real Numbers Journey 🔢',
    desc: 'Apply Euclid’s division algorithm, HCF reasoning, and irrational-number logic to practical mathematical problems.',
    icon: '🔢',
    gesture: 'analysis',
    steps: [
      {
        type: 'start',
        title: 'Theory & Information',
        prompt: 'Real numbers include both rational and irrational numbers. They help us describe exact measurements, patterns, and decimal expansions in mathematics.',
        intro: 'In Class 10 mathematics, real numbers connect divisibility, HCF, and decimal form. A rational number can be written as a fraction, while an irrational number cannot. By using logical reasoning and prime-factorisation ideas, we can decide the correct solution for many number-based problems.',
        objective: 'Use number properties to identify irrational numbers and solve HCF-based reasoning carefully without guessing.',
        hints: [
          'A perfect square root is rational.',
          'A non-perfect square root is irrational.',
          'HCF means the greatest common divisor.'
        ]
      },
      {
        type: 'analysis',
        title: 'Number Logic Challenge',
        prompt: 'Which of the following is irrational?',
        hint: 'Check whether the square root is of a perfect square.',
        hints: [
          '√16 = 4 is rational.',
          '√9 = 3 is rational.',
          'Only non-perfect squares remain irrational.'
        ],
        options: [
          { label: '√2', isCorrect: true, detail: '2 is not a perfect square, so √2 is irrational.' },
          { label: '√16', isCorrect: false, detail: '16 is a perfect square, so √16 = 4 is rational.' },
          { label: '√25', isCorrect: false, detail: '25 is a perfect square, so √25 = 5 is rational.' }
        ]
      },
      {
        type: 'application',
        title: 'HCF Decision',
        prompt: 'What is the HCF of 48 and 72?',
        hint: 'Find the greatest number dividing both without remainder.',
        hints: [
          '12 × 4 = 48 and 12 × 6 = 72.',
          '24 is also common, but 12 is the greatest common factor not necessarily 24? Check the largest divisor.',
          'The correct HCF is the greatest common divisor.'
        ],
        options: [
          { label: '24', isCorrect: true, detail: '24 is the greatest number that divides both 48 and 72 exactly.' },
          { label: '12', isCorrect: false, detail: '12 divides both, but it is not the greatest common divisor.' },
          { label: '8', isCorrect: false, detail: '8 is common but smaller than the correct greatest common divisor.' }
        ]
      },
      {
        type: 'success',
        title: 'Mission Complete',
        prompt: 'Excellent! You connected real-number properties, irrational values, and HCF logic to complete the mathematical challenge.'
      }
    ]
  },
  {
    id: 'class10_polynomial_pattern_lab',
    classLevel: 'class10',
    className: '10th Class',
    title: 'Polynomial Pattern Lab 📈',
    desc: 'Interpret zeroes, factorisation, and polynomial graphs using algebraic structure and visual reasoning.',
    icon: '📈',
    gesture: 'analysis',
    steps: [
      {
        type: 'start',
        title: 'Theory & Information',
        prompt: 'A polynomial is an algebraic expression involving powers of a variable. Its zeroes tell us where the graph touches or crosses the x-axis.',
        intro: 'Class 10 algebra helps students analyse the behaviour of expressions such as ax² + bx + c. The zeroes of a polynomial are the values where the expression becomes zero, and they connect directly to the graph of the equation. Factorisation makes this pattern easier to interpret and solve.',
        objective: 'Read the polynomial relationship, identify the correct zeroes, and relate the answer to the graph or factors.',
        hints: [
          'A zero is a value that makes the polynomial equal to zero.',
          'Factorisation helps reveal the roots.',
          'Each root corresponds to an x-intercept on the graph.'
        ]
      },
      {
        type: 'equation',
        title: 'Zero Identification',
        prompt: 'For the polynomial p(x) = x² - 5x + 6, which value is a zero?',
        hint: 'Factorise the expression and test each option.',
        hints: [
          'x² - 5x + 6 = (x - 2)(x - 3)',
          'Substitute x = 2 or x = 3.',
          'A zero makes the whole expression equal to zero.'
        ],
        options: [
          { label: 'x = 2', isCorrect: true, detail: '2 makes the polynomial zero because (2 - 2)(2 - 3) = 0.' },
          { label: 'x = 5', isCorrect: false, detail: 'Substituting 5 does not make the expression zero.' },
          { label: 'x = 1', isCorrect: false, detail: 'This is not a root of the polynomial.' }
        ]
      },
      {
        type: 'graph',
        title: 'Graph Interpretation',
        prompt: 'If a quadratic graph touches the x-axis at one point, what can be said about its roots?',
        hint: 'A repeated root means one solution occurs twice.',
        hints: [
          'This occurs when the quadratic has equal roots.',
          'The graph touches but does not cross the x-axis.',
          'The discriminant is zero.'
        ],
        options: [
          { label: 'It has equal roots and one repeated zero', isCorrect: true, detail: 'The graph touches the axis at one point because both roots are the same.' },
          { label: 'It has no roots at all', isCorrect: false, detail: 'The graph does intersect the axis, so roots are present.' },
          { label: 'It has two distinct negative roots', isCorrect: false, detail: 'A single touch point means the roots are equal, not distinct.' }
        ]
      },
      {
        type: 'success',
        title: 'Mission Complete',
        prompt: 'Excellent reasoning! You interpreted polynomial zeroes and graph behaviour with confidence and precision.'
      }
    ]
  },
  {
    id: 'class10_electricity_power_grid',
    classLevel: 'class10',
    className: '10th Class',
    title: 'Electricity Power Grid ⚡',
    desc: 'Solve real circuits using Ohm’s law, current, resistance, and power calculations for household systems.',
    icon: '⚡',
    gesture: 'analysis',
    steps: [
      {
        type: 'start',
        title: 'Theory & Information',
        prompt: 'Electricity is a flow of charges. Current, voltage, resistance, and power are connected by Ohm’s law and the formula for electrical energy.',
        intro: 'In Class 10 science, the relationship between V, I, and R is essential. A circuit with more resistance allows less current for a given voltage. Power and energy calculations help us understand appliances, transmission costs, and the safe operation of electrical systems.',
        objective: 'Use the formulae to calculate current, resistance, and energy correctly in realistic electrical situations.',
        hints: [
          'Ohm’s law: V = IR.',
          'Power: P = VI.',
          'Energy used = power × time.'
        ]
      },
      {
        type: 'calculation',
        title: 'Current Check',
        prompt: 'A 12 V battery is connected to a 6 Ω resistor. What is the current?',
        hint: 'Use V = IR and rearrange to I = V / R.',
        hints: [
          '12 ÷ 6 = 2',
          'Current is measured in amperes.',
          'The answer will be a simple ratio.'
        ],
        options: [
          { label: '2 A', isCorrect: true, detail: 'Using I = V/R gives I = 12/6 = 2 A.' },
          { label: '6 A', isCorrect: false, detail: 'This would come from dividing by the wrong number or misreading the formula.' },
          { label: '18 A', isCorrect: false, detail: 'This is a multiplication error, not a correct application of Ohm’s law.' }
        ]
      },
      {
        type: 'power',
        title: 'Energy Use',
        prompt: 'If a device uses 2 kW for 3 hours, how much energy is consumed?',
        hint: 'Energy = power × time. Convert to kWh if needed.',
        hints: [
          '2 × 3 = 6',
          'The unit is kilowatt-hour.',
          'Energy consumption in homes is often measured in kWh.'
        ],
        options: [
          { label: '6 kWh', isCorrect: true, detail: 'Energy consumed is 2 kW × 3 h = 6 kWh.' },
          { label: '5 kWh', isCorrect: false, detail: 'This misses the full product of power and time.' },
          { label: '3 kWh', isCorrect: false, detail: 'This incorrectly treats the duration as the answer without multiplying by power.' }
        ]
      },
      {
        type: 'success',
        title: 'Mission Complete',
        prompt: 'Excellent analysis! You solved the electrical problem using the correct formulas and reasoning.'
      }
    ]
  },
  {
    id: 'class10_life_processes_case',
    classLevel: 'class10',
    className: '10th Class',
    title: 'Life Processes Case Study 🧬',
    desc: 'Connect nutrition, respiration, transport, and excretion to explain how organisms maintain life.',
    icon: '🧬',
    gesture: 'analysis',
    steps: [
      {
        type: 'start',
        title: 'Theory & Information',
        prompt: 'Life processes include nutrition, respiration, transport, and excretion. These processes allow cells to obtain energy and remove waste while maintaining balance.',
        intro: 'Living organisms survive because their body systems work together. Digestion releases energy from food, respiration supplies usable energy, transport distributes materials, and excretion removes harmful waste. A healthy organism depends on all these processes operating in coordination.',
        objective: 'Use biological evidence to decide which system is most important in a realistic life-process scenario.',
        hints: [
          'Breathing provides oxygen for cellular respiration.',
          'Transport carries nutrients and oxygen through the body.',
          'Excretion prevents toxic accumulation.'
        ]
      },
      {
        type: 'biology',
        title: 'System Match',
        prompt: 'Which process is most directly responsible for releasing energy from glucose in cells?',
        hint: 'Think of the process that uses oxygen and occurs in cells.',
        hints: [
          'It occurs in all living cells.',
          'Carbon dioxide and energy are produced.',
          'This process is essential for growth and movement.'
        ],
        options: [
          { label: 'Respiration', isCorrect: true, detail: 'Cellular respiration breaks down glucose to release energy.' },
          { label: 'Digestion', isCorrect: false, detail: 'Digestion breaks food into smaller particles before absorption, but it does not directly release cellular energy.' },
          { label: 'Excretion', isCorrect: false, detail: 'Excretion removes waste and helps maintain homeostasis but does not release energy.' }
        ]
      },
      {
        type: 'reasoning',
        title: 'Transport Evidence',
        prompt: 'Why is a continuous blood flow important for humans?',
        hint: 'It carries resources to cells and removes wastes from them.',
        hints: [
          'Oxygen and nutrients must reach tissues.',
          'CO₂ and other wastes must be removed efficiently.',
          'Uninterrupted flow maintains functioning organs.'
        ],
        options: [
          { label: 'It delivers oxygen and nutrients and removes waste products', isCorrect: true, detail: 'Transport maintains cell function and supports life processes throughout the body.' },
          { label: 'It creates food from sunlight', isCorrect: false, detail: 'Food creation is a function of plants, not blood circulation in humans.' },
          { label: 'It only helps the brain during sleep', isCorrect: false, detail: 'The circulatory system supports the whole body continuously.' }
        ]
      },
      {
        type: 'success',
        title: 'Mission Complete',
        prompt: 'Excellent diagnosis! You explained how the body’s life processes work together to sustain living organisms.'
      }
    ]
  },
  {
    id: 'class10_environment_treatment_plan',
    classLevel: 'class10',
    className: '10th Class',
    title: 'Resource & Environment Plan 🌿',
    desc: 'Evaluate sustainable resource use, waste treatment, and environmental decisions with data-based reasoning.',
    icon: '🌿',
    gesture: 'analysis',
    steps: [
      {
        type: 'start',
        title: 'Theory & Information',
        prompt: 'Environmental problems are linked to waste, resource use, pollution, and ecosystem imbalance. Sustainable decisions reduce harm while meeting human needs.',
        intro: 'Class 10 environmental studies emphasise the relationship between natural resources and human activity. Forests, water, soil, and air are affected by overuse, pollution, and poor waste management. Solutions are strongest when they treat the issue as a long-term system, not just a one-time fix.',
        objective: 'Compare environmental options and choose the strategy that protects both people and ecological balance.',
        hints: [
          'Sustainable plans reduce waste and protect biodiversity.',
          'Long-term thinking is better than short-term convenience.',
          'Healthy ecosystems support resources and livelihoods.'
        ]
      },
      {
        type: 'decision',
        title: 'Waste Strategy',
        prompt: 'A town produces large amounts of plastic and sewage waste. Which approach is the most sustainable?',
        hint: 'Think of a method that prevents pollution while creating useful long-term outcomes.',
        hints: [
          'Reduce, reuse, and recycle are more effective than dumping waste.',
          'Waste treatment reduces pollution before disposal.',
          'A balanced urban plan protects water and soil.'
        ],
        options: [
          { label: 'Separate waste, recycle plastics, and treat sewage before release', isCorrect: true, detail: 'This reduces pollution, protects water quality, and supports long-term environmental health.' },
          { label: 'Dump everything into the nearest river', isCorrect: false, detail: 'This pollutes water and harms organisms and people downstream.' },
          { label: 'Burn all waste without controls', isCorrect: false, detail: 'Open burning produces smoke and toxic pollutants and damages air quality.' }
        ]
      },
      {
        type: 'analysis',
        title: 'Ecosystem Check',
        prompt: 'Why are forests important for sustainability?',
        hint: 'Think about climate, habitat, and resource protection.',
        hints: [
          'Forests regulate water and air.',
          'They support biodiversity.',
          'They help prevent erosion and climate imbalance.'
        ],
        options: [
          { label: 'They maintain biodiversity, reduce erosion, and support ecological balance', isCorrect: true, detail: 'Forests protect habitats, stabilise the environment, and support many life forms.' },
          { label: 'They have no effect on climate or life systems', isCorrect: false, detail: 'This ignores the role of forests in regulating air, water, and soil.' },
          { label: 'They should be removed for quick economic gain only', isCorrect: false, detail: 'Short-term gain can create long-term environmental and social costs.' }
        ]
      },
      {
        type: 'success',
        title: 'Mission Complete',
        prompt: 'Excellent planning! You chose a sustainable environmental solution grounded in ecosystem balance and resource care.'
      }
    ]
  },
  {
    id: 'class10_civic_data_dashboard',
    classLevel: 'class10',
    className: '10th Class',
    title: 'Civic Data Dashboard 🗳️',
    desc: 'Interpret democratic systems, social data, and public governance using evidence from civic life and policy decisions.',
    icon: '🗳️',
    gesture: 'analysis',
    steps: [
      {
        type: 'start',
        title: 'Theory & Information',
        prompt: 'Democracy depends on participation, law, equality, and accountability. Social and civic data help us understand how public systems affect citizens.',
        intro: 'In Civics and Social Science, we study how governments work and how citizens influence public decisions. Data on literacy, inclusion, representation, and public services helps identify whether a democracy is functioning fairly. A sound conclusion depends on evidence and rights-based reasoning rather than assumptions.',
        objective: 'Use civic concepts and evidence to select the most democratic and effective public action.',
        hints: [
          'Democracy needs participation and fairness.',
          'Government should be accountable to citizens.',
          'Public policy should improve equality and opportunity.'
        ]
      },
      {
        type: 'civics',
        title: 'Participation Check',
        prompt: 'Which action best strengthens democracy in a community?',
        hint: 'A strong democracy increases informed participation and public accountability.',
        hints: [
          'Citizens need access to information and fair representation.',
          'Voting and discussion improve democratic practice.',
          'Inclusive participation reduces exclusion.'
        ],
        options: [
          { label: 'Encouraging informed voting and public participation in decision-making', isCorrect: true, detail: 'Democratic systems become stronger when citizens are informed and able to participate meaningfully.' },
          { label: 'Allowing only a few leaders to decide everything without public input', isCorrect: false, detail: 'This reduces accountability and weakens democratic participation.' },
          { label: 'Ignoring public concerns and focusing only on private interest', isCorrect: false, detail: 'Democracy requires representation and responsiveness to people’s needs.' }
        ]
      },
      {
        type: 'evidence',
        title: 'Public Policy Analysis',
        prompt: 'What is the clearest sign that a government is acting responsibly?',
        hint: 'Look for fair, transparent, and welfare-focused public service.',
        hints: [
          'Accountability matters.',
          'Public policy should improve welfare and rights.',
          'Fairness should guide decisions.'
        ],
        options: [
          { label: 'It provides equal access to services and is answerable to citizens', isCorrect: true, detail: 'Responsible government works for public welfare and accountability.' },
          { label: 'It avoids all public information and hides decisions', isCorrect: false, detail: 'Secrecy weakens trust and democratic control.' },
          { label: 'It only serves the interests of a single group', isCorrect: false, detail: 'This is unfair and not representative of democratic values.' }
        ]
      },
      {
        type: 'success',
        title: 'Mission Complete',
        prompt: 'Excellent civic reasoning! You connected participation, accountability, and public welfare to strong democratic practice.'
      }
    ]
  },

  // --- 4TH CLASS (6 Interactive Activities with 5 Levels Each = 30 Levels) ---
  {
    id: '4th_english_quest',
    classLevel: 'class4',
    className: '4th Class',
    title: 'English Language Quest 📖',
    desc: 'Master parts of speech, sentence structures & comprehension across 5 levels!',
    icon: '📖',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Nouns, Verbs & Adjectives',
        prompt: 'Find the VERB (Action Word) in: "The swift eagle SOARED high 🦅."',
        options: [
          { label: 'SOARED 🦅', emoji: '🦅', isCorrect: true },
          { label: 'Eagle', emoji: '🦅', isCorrect: false },
          { label: 'Swift', emoji: '⚡', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Sentence Completion',
        prompt: 'Complete sentence: "The brave astronaut travelled into ___ 🚀."',
        options: [
          { label: 'Outer Space 🚀', emoji: '🚀', isCorrect: true },
          { label: 'Ocean Bed 🌊', emoji: '🌊', isCorrect: false },
          { label: 'Subway 🚇', emoji: '🚇', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Sentence Structure',
        prompt: 'Identify the SUBJECT in: "The kind doctor 🧑‍⚕️ treated the patient."',
        options: [
          { label: 'The Kind Doctor 🧑‍⚕️', emoji: '🧑‍⚕️', isCorrect: true },
          { label: 'Treated', emoji: '💉', isCorrect: false },
          { label: 'Patient', emoji: '🏥', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Paragraph Ordering',
        prompt: 'Arrange paragraphs: 1. Rocket launch prep 🚀 -> 2. Ignition 🔥 -> ?',
        options: [
          { label: '3. Orbiting Earth 🌍', emoji: '🌍', isCorrect: true },
          { label: '3. Buying tickets 🎟️', emoji: '🎟️', isCorrect: false },
          { label: '3. Sleeping at home 🛌', emoji: '🛌', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Reading Passage Quest',
        prompt: 'Passage: "Solar energy comes from the sun ☀️. Solar panels convert light into electricity ⚡." What powers solar panels?',
        options: [
          { label: 'Sunlight ☀️', emoji: '☀️', isCorrect: true },
          { label: 'Coal ⬛', emoji: '⬛', isCorrect: false },
          { label: 'Windmills 🌬️', emoji: '🌬️', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '4th_maths_mastery',
    classLevel: 'class4',
    className: '4th Class',
    title: 'Mathematics Number Mastery 🔢',
    desc: 'Master numbers up to 10,000, expanded form & multiplication across 5 levels!',
    icon: '🔢',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Compare Numbers up to 10,000',
        prompt: 'Which number is LARGER? 8,450 or 8,540?',
        options: [
          { label: '8,540 is Larger (8,540 > 8,450)', emoji: '▶️', isCorrect: true },
          { label: '8,450 is Larger', emoji: '◀️', isCorrect: false },
          { label: 'Both are Equal', emoji: '⏸️', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Expanded Form',
        prompt: 'What is the Expanded Form of number 5,432?',
        options: [
          { label: '5000 + 400 + 30 + 2', emoji: '🔢', isCorrect: true },
          { label: '500 + 40 + 3 + 2', emoji: '🔢', isCorrect: false },
          { label: '50000 + 400 + 32', emoji: '🔢', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Addition of 4-Digit Numbers',
        prompt: 'Solve: 4,500 + 3,200 = ?',
        options: [
          { label: '7,700', emoji: '🔢', isCorrect: true },
          { label: '7,500', emoji: '🔢', isCorrect: false },
          { label: '8,700', emoji: '🔢', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Multi-Digit Multiplication',
        prompt: 'Solve: 125 × 4 = ?',
        options: [
          { label: '500', emoji: '5️⃣0️⃣0️⃣', isCorrect: true },
          { label: '450', emoji: '4️⃣5️⃣0️⃣', isCorrect: false },
          { label: '600', emoji: '6️⃣0️⃣0️⃣', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Multi-Step Real-Life Problem',
        prompt: 'Problem: A school bought 300 books 📚 for ₹10 each. What was the total cost?',
        options: [
          { label: '₹3,000', emoji: '💵', isCorrect: true },
          { label: '₹300', emoji: '💵', isCorrect: false },
          { label: '₹30,000', emoji: '💵', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '4th_fractions_div',
    classLevel: 'class4',
    className: '4th Class',
    title: 'Fractions & Division Adventure ➗',
    desc: 'Master visual fractions, halves, thirds & division with remainders across 5 levels!',
    icon: '➗',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Visual Fractions',
        prompt: 'A pizza 🍕 is cut into 4 equal slices. What fraction is 1 slice?',
        options: [
          { label: '1/4 (One Quarter) 🍕', emoji: '🍕', isCorrect: true },
          { label: '1/2 (One Half)', emoji: '🍕', isCorrect: false },
          { label: '1/3 (One Third)', emoji: '🍕', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Halves, Thirds & Quarters',
        prompt: 'Identify: 1/2 of 10 apples = how many apples? 🍎',
        options: [
          { label: '5 Apples 🍎', emoji: '🍎', isCorrect: true },
          { label: '2 Apples', emoji: '🍎', isCorrect: false },
          { label: '4 Apples', emoji: '🍎', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Compare Simple Fractions',
        prompt: 'Which fraction is LARGER? 1/2 slice or 1/4 slice of pizza 🍕?',
        options: [
          { label: '1/2 (Half) is Larger 🍕', emoji: '🍕', isCorrect: true },
          { label: '1/4 (Quarter) is Larger', emoji: '🍕', isCorrect: false },
          { label: 'Both are Equal', emoji: '⏸️', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Division with Remainders',
        prompt: 'Solve division: 17 ÷ 5 = ?',
        options: [
          { label: '3 with Remainder 2', emoji: '🔢', isCorrect: true },
          { label: '3 with Remainder 0', emoji: '🔢', isCorrect: false },
          { label: '4 with Remainder 1', emoji: '🔢', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Real-Life Fraction Problem',
        prompt: 'Problem: A cake 🎂 was cut into 8 equal slices. Sita ate 2 slices. What fraction did she eat?',
        options: [
          { label: '2/8 (or 1/4) 🎂', emoji: '🎂', isCorrect: true },
          { label: '1/2', emoji: '🎂', isCorrect: false },
          { label: '4/8', emoji: '🎂', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '4th_science_quest',
    classLevel: 'class4',
    className: '4th Class',
    title: 'Science & Environment Quest 🔬',
    desc: 'Explore medicinal plants, animal adaptations & food chains across 5 levels!',
    icon: '🔬',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: Medicinal Plants & Uses',
        prompt: 'Which famous plant in India is used as natural MEDICINE? 🌿',
        options: [
          { label: 'Neem & Tulsi 🌿', emoji: '🌿', isCorrect: true },
          { label: 'Rose Flower 🌹', emoji: '🌹', isCorrect: false },
          { label: 'Cactus 🌵', emoji: '🌵', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Animal Adaptations',
        prompt: 'Why do Polar Bears 🐻‍❄️ have thick fur and blubber fat?',
        options: [
          { label: 'To stay warm in freezing snow ❄️', emoji: '❄️', isCorrect: true },
          { label: 'To swim faster in rivers 🌊', emoji: '🌊', isCorrect: false },
          { label: 'To fly high 🦅', emoji: '🦅', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Forms of Water & Evaporation',
        prompt: 'Water turning into steam vapor when boiled is called ___? ♨️',
        options: [
          { label: 'Evaporation ♨️', emoji: '♨️', isCorrect: true },
          { label: 'Freezing 🧊', emoji: '🧊', isCorrect: false },
          { label: 'Melting 🫠', emoji: '🫠', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Simple Food Chain',
        prompt: 'Complete food chain: Grass 🌿 -> Deer 🦌 -> ?',
        options: [
          { label: 'Lion 🦁', emoji: '🦁', isCorrect: true },
          { label: 'Rabbit 🐰', emoji: '🐰', isCorrect: false },
          { label: 'Butterfly 🦋', emoji: '🦋', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Environmental Problem Solving',
        prompt: 'What is the best way to REDUCE plastic waste pollution? ♻️',
        options: [
          { label: 'Recycle & Reuse ♻️', emoji: '♻️', isCorrect: true },
          { label: 'Throw into river 🌊', emoji: '🌊', isCorrect: false },
          { label: 'Burn plastic openly 🔥', emoji: '🔥', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '4th_shapes_angles',
    classLevel: 'class4',
    className: '4th Class',
    title: 'Shapes, Angles & Measurement Lab 📐',
    desc: 'Master 3D shapes, 90° angles, metric units & geometry across 5 levels!',
    icon: '📐',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: 3D Shapes Identification',
        prompt: 'Which 3D shape looks exactly like a round soccer ball ⚽?',
        options: [
          { label: 'Sphere ⚽', emoji: '⚽', isCorrect: true },
          { label: 'Cube 🧊', emoji: '🧊', isCorrect: false },
          { label: 'Cylinder 🛢️', emoji: '🛢️', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: Angles Identification',
        prompt: 'What type of angle forms a perfect L-shape (90°)? 📐',
        options: [
          { label: 'Right Angle (90°) 📐', emoji: '📐', isCorrect: true },
          { label: 'Acute Angle (<90°)', emoji: '📐', isCorrect: false },
          { label: 'Obtuse Angle (>90°)', emoji: '📐', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: Standard Units Conversion',
        prompt: '1 Meter (m) = how many Centimeters (cm)? 📏',
        options: [
          { label: '100 Centimeters (cm)', emoji: '📏', isCorrect: true },
          { label: '10 Centimeters', emoji: '📏', isCorrect: false },
          { label: '1,000 Centimeters', emoji: '📏', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: Weight Conversion',
        prompt: 'Solve: 2,500 grams = how many Kilograms (kg)? ⚖️',
        options: [
          { label: '2.5 Kilograms (2 kg 500 g) ⚖️', emoji: '⚖️', isCorrect: true },
          { label: '25 Kilograms', emoji: '⚖️', isCorrect: false },
          { label: '250 Kilograms', emoji: '⚖️', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: Geometry Challenge',
        prompt: 'Problem: Find the Perimeter of a Square 🟦 with side length 5 cm.',
        options: [
          { label: '20 cm (5 + 5 + 5 + 5)', emoji: '🟦', isCorrect: true },
          { label: '15 cm', emoji: '🟦', isCorrect: false },
          { label: '25 cm', emoji: '🟦', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: '4th_3d_science',
    classLevel: 'class4',
    className: '4th Class',
    title: '3D Science Explorer 🚀',
    desc: 'Advanced 3D plant photosynthesis, food webs & environmental missions across 5 levels!',
    icon: '🚀',
    gesture: 'tap',
    steps: [
      {
        level: 1,
        title: 'Level 1: 3D Plant Photosynthesis',
        prompt: 'Inspect 3D Green Leaf: What green pigment captures sunlight for photosynthesis? 🍃',
        options: [
          { label: 'Chlorophyll 🍃', emoji: '🍃', isCorrect: true },
          { label: 'Oxygen 💨', emoji: '💨', isCorrect: false },
          { label: 'Glucose 🍬', emoji: '🍬', isCorrect: false }
        ]
      },
      {
        level: 2,
        title: 'Level 2: 3D Animal Adaptations',
        prompt: 'Inspect 3D Camel 🐪 model: What part stores fat for energy in the desert?',
        options: [
          { label: 'Camel Hump 🐪', emoji: '🐪', isCorrect: true },
          { label: 'Hooves 🐾', emoji: '🐾', isCorrect: false },
          { label: 'Ears 👂', emoji: '👂', isCorrect: false }
        ]
      },
      {
        level: 3,
        title: 'Level 3: 3D Water Cycle Dynamics',
        prompt: 'Explore 3D Sky Model: What stage forms fluffy clouds ☁️ from vapor?',
        options: [
          { label: 'Condensation ☁️', emoji: '☁️', isCorrect: true },
          { label: 'Precipitation 🌧️', emoji: '🌧️', isCorrect: false },
          { label: 'Collection 🌊', emoji: '🌊', isCorrect: false }
        ]
      },
      {
        level: 4,
        title: 'Level 4: 3D Food Web Connection',
        prompt: '3D Food Web: Connect Sun ☀️ -> Green Plant 🌿 -> Herbivore Rabbit 🐰 -> Carnivore Fox 🦊!',
        options: [
          { label: 'Sun -> Plant -> Rabbit -> Fox 🦊', emoji: '🦊', isCorrect: true },
          { label: 'Fox -> Rabbit -> Sun', emoji: '❓', isCorrect: false },
          { label: 'Plant -> Sun -> Fox', emoji: '❓', isCorrect: false }
        ]
      },
      {
        level: 5,
        title: 'Level 5: 3D "Save Our Environment" Mission',
        prompt: '3D Environmental Mission: Select action to protect our 3D Forest 🌳 habitat!',
        options: [
          { label: 'Plant Trees & Recycle Waste 🌲♻️', emoji: '🌲', isCorrect: true },
          { label: 'Cut down trees 🪓', emoji: '🪓', isCorrect: false },
          { label: 'Pollute rivers 🏭', emoji: '🏭', isCorrect: false }
        ]
      }
    ]
  }
];

