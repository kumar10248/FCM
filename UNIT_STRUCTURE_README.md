# Unit-Based Question Structure Documentation

## Overview
The questions file has been restructured to support proper unit-based organization where each UNIT has its own modules, passages, and demo questions.

## New Structure

### Unit Data Organization
```typescript
unitQuestionsData = {
  unit1: {
    modules: {
      module1: [], // Populated from existing module1
      module2: [], // Populated from existing module2  
      module3: [], // Populated from existing module3
      module4: []  // Populated from existing module4
    },
    passages: {},      // UNIT-1 specific passages (empty, ready for your content)
    demoQuestions: []  // UNIT-1 specific demo questions (empty, ready for your content)
  },
  unit2: {
    modules: {
      module1: [], // Populated from existing module5
      module2: [], // Populated from existing module6
      module3: []  // Populated from existing module7
    },
    passages: {},      // UNIT-2 specific passages (empty, ready for your content)
    demoQuestions: []  // UNIT-2 specific demo questions (empty, ready for your content)
  },
  unit3: {
    modules: {
      module1: [], // Ready for your UNIT-3 Module 1 questions
      module2: [], // Ready for your UNIT-3 Module 2 questions
      module3: [], // Ready for your UNIT-3 Module 3 questions
      module4: []  // Ready for your UNIT-3 Module 4 questions
    },
    passages: {},      // UNIT-3 specific passages (empty, ready for your content)
    demoQuestions: []  // UNIT-3 specific demo questions (empty, ready for your content)
  }
}
```

## How Unit-Specific Modes Work Now

### Unit Practice Modes
- `unit1`, `unit2`, `unit3` - Pull from respective unit's modules
- `unit1_module1`, `unit2_module1`, etc. - Pull from specific unit module
- `unit1_all`, `unit2_all`, `unit3_all` - All questions from respective unit

### Unit-Specific Special Practice Modes
- `unit1_passage`, `unit2_passage`, `unit3_passage` - Use unit-specific passages when available, fallback to global
- `unit1_demo`, `unit2_demo`, `unit3_demo` - Use unit-specific demo questions when available, fallback to global

## Current Status

### ✅ UNIT-1 (Fully Populated)
- **Module 1**: Questions from existing module1
- **Module 2**: Questions from existing module2  
- **Module 3**: Questions from existing module3
- **Module 4**: Questions from existing module4
- **Passages**: Will use global passages until unit-specific ones are added
- **Demo**: Will use global demo until unit-specific questions are added

### ✅ UNIT-2 (Fully Populated)  
- **Module 1**: Questions from existing module5
- **Module 2**: Questions from existing module6
- **Module 3**: Questions from existing module7
- **Passages**: Will use global passages until unit-specific ones are added
- **Demo**: Will use global demo until unit-specific questions are added

### ⏳ UNIT-3 (Ready for Your Content)
- **Module 1**: Empty, shows "Coming Soon" message
- **Module 2**: Empty, shows "Coming Soon" message
- **Module 3**: Empty, shows "Coming Soon" message
- **Module 4**: Empty, shows "Coming Soon" message
- **Passages**: Will use global passages until unit-specific ones are added
- **Demo**: Will use global demo until unit-specific questions are added

## Functions for Adding Questions

### Adding UNIT-3 Questions
```typescript
// Add questions to a specific UNIT-3 module
addQuestionsToUnit('unit3', 'module1', yourModule1Questions);
addQuestionsToUnit('unit3', 'module2', yourModule2Questions);

// Or add all UNIT-3 modules at once
addUnit3Questions({
  module1: yourModule1Questions,
  module2: yourModule2Questions,
  module3: yourModule3Questions,
  module4: yourModule4Questions
});
```

### Adding Unit-Specific Passages
```typescript
// Add passages to any unit
addPassagesToUnit('unit1', {
  passage_1: { title: "...", passage: "...", questions: [...] },
  passage_2: { title: "...", passage: "...", questions: [...] }
});
```

### Adding Unit-Specific Demo Questions
```typescript
// Add demo questions to any unit
addDemoQuestionsToUnit('unit2', yourDemoQuestions);
```

## Benefits of New Structure

1. **True Unit Isolation**: Each unit can have its own questions, passages, and demo content
2. **Automatic Fallback**: If unit-specific content isn't available, falls back to global content
3. **Easy Content Addition**: Simple functions to add content when you provide it
4. **Backward Compatibility**: Existing global modes still work
5. **Clear Organization**: Units are properly separated conceptually and technically

## Next Steps

When you provide UNIT-3 questions, simply call:
```typescript
addUnit3Questions({
  module1: [/* your questions */],
  module2: [/* your questions */],
  // etc.
});
```

The system will automatically use these unit-specific questions instead of showing "Coming Soon" messages.
