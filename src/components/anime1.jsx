import { useSpring, animated } from '@react-spring/web'


export default function MyComponent() {
const springs = useSpring({
    from: { x: 0 },
    to: { x: 400 },
  })
return(
  <animated.div
  style={{
    width: 40,
    height: 40,
    background: '#ff6d6d',
    borderRadius: 20,
    ...springs,
  }}
/>
)
}

