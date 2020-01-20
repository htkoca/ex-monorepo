import MyButton from 'ui--my-button'
import message from 'util--get-message'

function HomePage() {
  return (
    <>
      <div>Welcome sto Next.js!</div>
      <div><MyButton>{message()}</MyButton> </div>
    </>
  )
}

export default HomePage
