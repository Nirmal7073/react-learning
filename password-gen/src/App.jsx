import { useState , useCallback ,useEffect ,useRef } from 'react'


function App() {
// const [length , setLength] = useState(8)
// const[numberAllowed , setNumberAllowes] = useState(false)
// const[charAllowed , setCharAllowed] = useState(false)
// const[password , setPassword] = useState('')

// const passwordGenerator = useCallback(() =>{
//   let pass=""
//   let str ="ABCDEFGHIJKLMNOPQRSTUVWQVYZabcefghigklmnopqrstuvwxyz"
//   if(numberAllowed) str += "0123456789"
//   if(charAllowed) {
//     str = str + "`?!{}~@#$^*-+"
//   }
//   for (let i = 1; i <= array.length; i++) {
//   let char = Math.floor(Math.random()*str.length + 1 )
//   pass = str.charAt(char)
    
//   }
//   setPassword(pass)
// } , [length , numberAllowed,charAllowed, setPassword])

const [length , setLength] = useState(9)
const [numberAllowed , setNumberAllowes] = useState(false)
const [charAllowed , setCharAllowed] = useState(false)
const [password , setPassword] = useState('')
const passwordRef = useRef(null)

const passwordGenerator = useCallback(()=> {
  let pass =""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWQVYZabcefghigklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if(charAllowed){
    str = str + "`?!{}~@#$^*-+"
  }
  for(let i= 1 ;  i <= length ; i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
  setPassword(pass)
}, [length , numberAllowed,charAllowed ,setPassword])

const copyPasswordToClipboard = useCallback( ()=> {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0 , 100)
  window.navigator.clipboard.writeText(password);
} ,[password])
useEffect(()=>{
  passwordGenerator()
},[length ,numberAllowed ,charAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto text-orange-500 bg-gray-800 px-4 py-3'>
        <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className='flex overflow-hidden mb-4'> 
         <input type="text" value={password} className='w-full py-1 px-3' placeholder='Password' ref={passwordRef} readOnly/>
          <button className='bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
           <div className='flex items-center gap-x-1'>
              <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
              <label>length:{length}</label>
           </div>
           <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={
                () =>{setNumberAllowes((prev)=> !prev)}
              } />
              <label>number</label>
           </div>
           <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={
                () =>{setCharAllowed((prev)=> !prev)}
              } />
              <label>characters</label>
           </div>
        </div>
      </div>
    </>
  )
}

export default App
