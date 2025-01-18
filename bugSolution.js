```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) { 
      setMounted(true);
      setCount(count + 1);
    }
  }, [mounted]);

  return <div>Count: {count}</div>;
}
```