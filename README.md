# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by unintentionally updating state within the effect without proper dependency management. 

## The Problem

The `bug.js` file shows a component where the `useEffect` hook continuously updates the `count` state.  This leads to an infinite loop because each state update triggers a re-render, which in turn re-executes the `useEffect` hook, and so on. 

## The Solution

The `bugSolution.js` file demonstrates the corrected code. The key change is to add `count` as a dependency to the `useEffect` hook. This ensures that the effect only runs once after the initial render. If we ever need it to run again based on the count, we can add the count to the dependency array.   Another approach is to use a flag to only call the effect once.