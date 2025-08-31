# Question Structure Documentation

## New Simplified Structure

The question system has been reorganized into a clean, maintainable structure with separate files for each unit.

### File Organization

```
src/app/lib/
├── questions-new.ts          # Main questions file (orchestrator)
├── unit1-questions.ts        # UNIT-1 questions
├── unit2-questions.ts        # UNIT-2 questions  
├── unit3-questions.ts        # UNIT-3 questions
└── types/
    └── index.ts             # Type definitions
```

### Structure Overview

Each unit follows this consistent structure:

```
UNIT-X [
  modules: {
    module1: [ /* questions array */ ],
    module2: [ /* questions array */ ],
    module3: [ /* questions array */ ],
    module4: [ /* questions array */ ],
    module5: [ /* questions array */ ]
  },
  assignment: [ /* assignment questions */ ],
  passageBased: [
    {
      title: "Passage Title",
      passage: "Passage content...",
      questions: [ /* passage questions */ ]
    }
  ]
]
```

### Practice Modes

The system supports these practice modes:

#### UNIT-1 Modes
- `unit1` - All UNIT-1 questions combined
- `unit1_module1` to `unit1_module5` - Individual modules
- `unit1_assignment` - Assignment questions
- `unit1_passage` - Passage-based questions
- `unit1_demo` - Demo exam

#### UNIT-2 Modes
- `unit2` - All UNIT-2 questions combined
- `unit2_module1` to `unit2_module5` - Individual modules
- `unit2_assignment` - Assignment questions
- `unit2_passage` - Passage-based questions
- `unit2_demo` - Demo exam

#### UNIT-3 Modes
- `unit3` - All UNIT-3 questions combined
- `unit3_module1` to `unit3_module5` - Individual modules
- `unit3_assignment` - Assignment questions
- `unit3_passage` - Passage-based questions
- `unit3_demo` - Demo exam

### Adding New Questions

#### 1. Adding Module Questions

To add questions to a specific module, edit the appropriate unit file:

```typescript
// In unit2-questions.ts
module1: [
  {
    question: "Your question here?",
    options: [
      "Option 1",
      "Option 2", 
      "Option 3",
      "Option 4"
    ],
    explanation: "Explanation of the correct answer",
    correctAnswer: [0] // Zero-based index of correct option(s)
  },
  // ... more questions
]
```

#### 2. Adding Passage Questions

```typescript
// In unit2-questions.ts
passageBased: [
  {
    title: "Passage Title",
    passage: "Your passage content here...",
    questions: [
      {
        question: "Question about the passage?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        explanation: "Why this answer is correct",
        correctAnswer: [0]
      }
    ]
  }
]
```

#### 3. Adding Assignment Questions

```typescript
// In unit2-questions.ts
assignment: [
  {
    question: "Assignment question?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    explanation: "Detailed explanation",
    correctAnswer: [0]
  }
]
```

### Benefits of New Structure

1. **Clarity**: Each unit has its own file, making it easy to find and edit questions
2. **Maintainability**: Changes to one unit don't affect others
3. **Scalability**: Easy to add new units or modules
4. **Organization**: Questions are logically grouped by unit and module
5. **Type Safety**: Full TypeScript support with proper typing
6. **Consistency**: All units follow the same structure pattern

### Current Status

- **UNIT-1**: Basic structure with module1 questions populated
- **UNIT-2**: Module1 with LTE and Edge Computing questions, 2 passages
- **UNIT-3**: Basic structure with 1 passage about unguided media

### Migration Notes

The old complex `questions.ts` file is now replaced by this simpler system. The practice page automatically imports from `questions-new.ts` which orchestrates all units.

All existing functionality is preserved while providing a much cleaner development experience.
