# Instructions for a new component

## 1. Set Up the File
- [ ] Create a new file with an appropriate name (e.g., `ComponentName.tsx`)
- [ ] Add the "use client" directive at the top of the file:
  ```typescript
  "use client";
  ```

## 2. Import Dependencies
- [ ] Import React (if needed):
  ```typescript
  import React from 'react';
  ```
- [ ] Import any other necessary dependencies or components

## 3. Define the Component Interface
- [ ] Create a TypeScript interface for the component props:
  ```typescript
  interface ComponentNameProps {
    // Define prop types here
  }
  ```

## 4. Create the Component
- [ ] Define the component as a function component:
  ```typescript
  const ComponentName: React.FC<ComponentNameProps> = ({ /* destructured props */ }) => {
    // Component logic here
  };
  ```

## 5. Implement Component Logic
- [ ] Add any necessary state using hooks
- [ ] Implement any required effects or callbacks
- [ ] Define helper functions within the component (if needed)

## 6. Render JSX
- [ ] Return the JSX structure for the component
- [ ] Ensure all dynamic values and props are properly used in the JSX

## 7. Style the Component
- [ ] Add inline styles or className props for styling
- [ ] If using CSS modules or styled-components, import and apply styles

## 8. Optimize Performance (if necessary)
- [ ] Memoize expensive calculations using useMemo
- [ ] Optimize callback functions with useCallback
- [ ] Consider using React.memo for the component if it's pure

## 9. Add PropTypes or Default Props (optional)
- [ ] If using PropTypes, add them after the component definition
- [ ] Define default props if necessary

## 10. Export the Component
- [ ] Add the export statement at the end of the file:
  ```typescript
  export default ComponentName;
  ```

## 11. Documentation
- [ ] Add JSDoc comments to describe the component and its props
- [ ] Include any necessary usage examples or notes

## 12. Testing (if required)
- [ ] Create a corresponding test file (e.g., `ComponentName.test.tsx`)
- [ ] Write unit tests for the component's functionality

## 13. Final Review
- [ ] Ensure the "use client" directive is at the top of the file
- [ ] Verify that the component is a client component
- [ ] Check that the TypeScript interface is correctly defined and used
- [ ] Review the component for best practices and adherence to project standards