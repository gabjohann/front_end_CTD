type CardFruitProps = {
  fruit: string
}

export default function CardFruit( { fruit } : CardFruitProps) {
  return <h1>{fruit}</h1>
}