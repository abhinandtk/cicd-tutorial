
export default function Greeting({name}:{name:string}) {
  return (
    <div>
      <h1>Hello hi,{name || "Guest"}</h1>
    </div>
  )
}
