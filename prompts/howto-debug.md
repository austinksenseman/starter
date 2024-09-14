# Instructions for debugging

## 1. Reproduce the Issue
- [ ] Identify the exact steps to reproduce the problem
- [ ] Document the expected behavior
- [ ] Document the actual behavior
- [ ] Note any error messages or unexpected output

## 2. Gather Information
- [ ] Check the program's logs for relevant information
- [ ] Identify the specific line(s) of code where the error occurs
- [ ] Review recent changes to the codebase
- [ ] Examine the state of variables at the point of failure

## 3. Isolate the Problem
- [ ] Remove or comment out unrelated code
- [ ] Create a minimal reproducible example
- [ ] Test the isolated code to ensure it still produces the error

## 4. Analyze the Code
- [ ] Review the logic of the problematic section
- [ ] Check for common coding errors (e.g., off-by-one errors, typos)
- [ ] Verify correct data types and variable scopes
- [ ] Ensure all function parameters are correct

## 5. Use Debugging Tools
- [ ] Set breakpoints at key locations
- [ ] Step through the code line by line
- [ ] Inspect variable values at each step
- [ ] Use watch expressions for complex conditions

## 6. Test Hypotheses
- [ ] Formulate a hypothesis about the cause of the bug
- [ ] Modify the code to test the hypothesis
- [ ] Observe the results and refine the hypothesis if necessary

## 7. Fix the Bug
- [ ] Implement the solution based on your findings
- [ ] Test the fix to ensure it resolves the issue
- [ ] Verify that the fix doesn't introduce new problems

## 8. Document and Review
- [ ] Document the bug, its cause, and the solution
- [ ] Update any relevant comments in the code
- [ ] Consider if similar bugs could exist elsewhere in the codebase
- [ ] Review the fix with a colleague or mentor if possible

## 9. Prevent Future Occurrences
- [ ] Add unit tests to catch similar issues in the future
- [ ] Update coding guidelines if necessary
- [ ] Refactor code to improve clarity and maintainability

## 10. Final Verification
- [ ] Run all relevant tests to ensure overall functionality
- [ ] Perform a final manual test of the fixed feature
- [ ] Commit and push changes to version control